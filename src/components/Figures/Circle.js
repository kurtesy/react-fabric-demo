const fabric = window.fabric

const defaultProps = {
  top: 100,
  left: 100,
  radius: 20,
  fill: 'rgba(0,0,0,0)',
  stroke: 'black',
  strokeWidth: 1,
  selectable: true
}

let Circle = (id=1, props={}) => {
  console.log('textID', id);
  return new fabric.Circle(
    { ...defaultProps, id: id,
      top: (defaultProps.top+200+id),
      left: (defaultProps.left+200+id)});
}

export default Circle;
