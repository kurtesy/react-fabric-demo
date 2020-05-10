const imageResizePosition = (canvas, img, size, position) => {
  let cw = canvas.width;
  let ch = canvas.height;
  let imgWidth = img.width;
  let imgHeight = img.height;
  if (size === 's') {
    return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      scaleX: cw / imgWidth,
      scaleY: ch / imgHeight
    });
  }
  else if (size === 'sh') {
    if (position === 'topLeft') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleY: ch / imgHeight
      });
    }
    else if (position === 'topCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: 0,
        left: cw/2 - imgWidth/2,
        scaleY: ch / imgHeight
      });
    }
    else if (position === 'topRight') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        left: cw,
        scaleY: ch / imgHeight
      });
    }
    else if (position === 'center') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        left: cw/2 - imgWidth/2,
        scaleY: ch / imgHeight
      });
    }
    else if (position === 'leftCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleY: ch / imgHeight
      });
    }
    else if (position === 'rightCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        left: cw - imgWidth,
        scaleY: ch / imgHeight
      });
    }
    else if (position === 'bottomLeft') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        left: 0,
        scaleY: ch / imgHeight
      });
    }
    else if (position === 'bottomCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        left: cw/2 - imgWidth/2,
        scaleY: ch / imgHeight
      });
    }
    else if (position === 'bottomRight') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        left: cw - imgWidth,
        scaleY: ch / imgHeight
      });
    }
    else {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    }
  }
  if (size === 'sw') {
    if (position === 'topLeft') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: cw / imgWidth
      });
    }
    else if (position === 'topCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: 0,
        scaleX: cw / imgWidth
      });
    }
    else if (position === 'topRight') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: 0,
        scaleX: cw / imgWidth
      });
    }
    else if (position === 'center') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch/2 - imgHeight/2,
        scaleX: cw / imgWidth
      });
    }
    else if (position === 'leftCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch/2 - imgHeight/2,
        scaleX: cw / imgWidth
      });
    }
    else if (position === 'rightCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch/2 - imgHeight/2,
        scaleX: cw / imgWidth
      });
    }
    else if (position === 'bottomLeft') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch - imgHeight,
        scaleX: cw / imgWidth
      });
    }
    else if (position === 'bottomCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch - imgHeight,
        scaleX: cw / imgWidth
      });
    }
    else if (position === 'bottomRight') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch - imgHeight,
        scaleX: cw / imgWidth
      });
    }
    else {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    }
  }
  else if (size === 'os') {
    if (position === 'topLeft') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    }
    else if (position === 'topCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: 0,
        left: cw/2 - imgWidth/2
      });
    }
    else if (position === 'topRight') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: 0,
        left: cw
      });
    }
    else if (position === 'center') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch/2 - imgHeight/2,
        left: cw/2 - imgWidth/2
      });
    }
    else if (position === 'leftCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch/2 - imgHeight/2
      });
    }
    else if (position === 'rightCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch/2 - imgHeight/2,
        left: cw - imgWidth
      });
    }
    else if (position === 'bottomLeft') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch - imgHeight,
        left: 0
      });
    }
    else if (position === 'bottomCenter') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch - imgHeight,
        left: cw/2 - imgWidth/2
      });
    }
    else if (position === 'bottomRight') {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        top: ch - imgHeight,
        left: cw - imgWidth
      });
    }
    else {
      return canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    }
  }
}

export default imageResizePosition;