const fabric = window.fabric

const defaultProps = {
    top: 100,
    left: 100,
    fontSize: 18,
    width: 100,
    fontFamily: 'Times New Roman',
    selectable: true
}

let TextBox = (id=1, props={}) => {
        console.log('textID', id);
        return new fabric.Textbox("Your text goes here",
          { ...defaultProps, id: id,
          top: (defaultProps.top+200+id),
          left: (defaultProps.left+200+id)});
}

export default TextBox;
