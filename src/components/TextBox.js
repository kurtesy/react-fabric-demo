const fabric = window.fabric

const defaultProps = {
    top: 10,
    left: 10,
    fontSize: 18,
    fontFamily: 'Times New Roman'
}

let counter = 0;

const TextBox = (id) => {
        let textID = Date.now().toString();
        console.log('textID', textID)
        let textBox = new fabric.IText("'Lorum ipsum dolor sit amet'", defaultProps);
        return textBox;
}

export default TextBox;
