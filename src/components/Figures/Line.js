const fabric = window.fabric;

const defaultProps = {
  fill: 'red',
  stroke: 'red',
  strokeWidth: 2,
  selectable: true
}

class Line {
  constructor(canvas) {
    this.theCanvas = canvas;
  }

  makeLine = (id=1, props, coordinates=[250, 125, 250, 175]) => {
    console.log('textID', id);
    let line = fabric.Line(coordinates, {...defaultProps, id: id, ...props});
    let theCanvas = this.theCanvas;
    this.theCanvas.on('mouse:down', function (o, theCanvas, line) {
      theCanvas.isDrawing = true;
      let pointer = theCanvas.getPointer(o.e);
      let points = [pointer.x, pointer.y, pointer.x, pointer.y];

      line = new fabric.Line(points, {
        strokeWidth: 3,
        stroke: 'black'
      });
      theCanvas.add(line);
    });
    this.theCanvas.on('mouse:move', function (o, theCanvas, line) {
      if (theCanvas.isDrawing) {
        let pointer = theCanvas.getPointer(o.e);
        line.set({ x2: pointer.x, y2: pointer.y });
        theCanvas.renderAll();
      }
    });
    this.theCanvas.on('mouse:up', function (o, theCanvas) {
      theCanvas.isDrawing = false;
    });
  }

}


export default Line;
