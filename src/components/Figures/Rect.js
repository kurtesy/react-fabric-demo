const fabric = window.fabric

const defaultProps = {
  top: 100,
  left: 150,
  width: 50,
  height: 50,
  fill: 'rgba(0,0,0,0)',
  stroke: 'black',
  strokeWidth: 1,
  selectable: true
}

let Rect = (id=1, props={}) => {
  console.log('textID', id);
  return new fabric.Rect(
    { ...defaultProps, id: id,
      top: (defaultProps.top+200+id),
      left: (defaultProps.left+200+id)});
}

export default Rect;
