(this["webpackJsonpreact-fabric-js"]=this["webpackJsonpreact-fabric-js"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={rightPanel:"panel_rightPanel__1BJAu",controlPanel:"panel_controlPanel__3UWM8",boxTitle:"panel_boxTitle__3jo6l",box:"panel_box__3GlYz"}},function(e,t,a){e.exports={btn:"button_btn__p5kIX",brush:"button_brush__1xceI"}},,,,,function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=11},function(e,t,a){e.exports={canvasStyle:"canvas_canvasStyle__1syKw"}},function(e,t,a){e.exports={loader:"spinner_loader__ra5Qt",loaderDiv:"spinner_loaderDiv__CGRU1",loaderPosition:"spinner_loaderPosition__39-tc"}},,,,,,,,,,,function(e,t,a){e.exports=a(54)},,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=(a(29),a(1)),i=a(2),s=a(4),c=a(3),u=a(12),h=a.n(u),d=a(5),f=a.n(d),p=a(8),g=a(7),v=a(6),m=a.n(v),b=a(9),C=a.n(b),w=window.fabric,k={top:10,left:10,fontSize:18,fontFamily:"Times New Roman"},Q=function(e){var t=Date.now().toString();return console.log("textID",t),new w.IText("'Lorum ipsum dolor sit amet'",k)},E=a(16),y=window.fabric,O=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=new y.Rect(Object(E.a)(Object(E.a)({},this.props),{},{stroke:"black",strokeWidth:1}));this.props.canvas.add(e),this.props.canvas.setActiveObject(e)}},{key:"render",value:function(){return null}}]),a}(r.a.Component);O.defaultProps={top:10,left:10,width:50,height:50,fill:"white"};var S=O,x=a(23),D=window.fabric,j=D.util.createClass(D.Group,{original:null,erasedPath:null,initialize:function(e,t,a,n){this.original=e,this.erasedPath=t,this.callSuper("initialize",[this.original,this.erasedPath],a,n)},_calcBounds:function(e){var t=[],a=[],n=["tr","br","bl","tl"],r=n.length,o=this.original;o.setCoords(!0);for(var l=0;l<r;l++){var i=n[l];t.push(o.oCoords[i].x),a.push(o.oCoords[i].y)}this._getBounds(t,a,e)}}),B=D.util.createClass(D.PencilBrush,{_finalizeAndAddPath:function(){var e=this;this.canvas.contextTop.closePath(),this.decimate&&(this._points=this.decimatePoints(this._points,this.decimate));var t=this.convertPointsToSVGPath(this._points).join("");if("M 0 0 Q 0 0 0 0 L 0 0"!==t){var a=this.createPath(t);a.globalCompositeOperation="destination-out",a.selectable=!1,a.evented=!1,a.absolutePositioned=!0;var n=this.canvas.getObjects().filter((function(e){return!!e.intersectsWithObject(a)}));if(n.length>0){var r=new D.Group(n),o=new j(r,a),l=o.left,i=o.top,s=o.toDataURL({withoutTransform:!0});D.Image.fromURL(s,(function(t){var a;t.set({left:l,top:i}),(a=e.canvas).remove.apply(a,Object(x.a)(n)),e.canvas.add(t)}))}this.canvas.clearContext(this.canvas.contextTop),this.canvas.renderAll(),this._resetShadow()}else this.canvas.requestRenderAll()}}),z=a(15),N=a.n(z),_=a(20),P=a(21),A=a.n(P),M=a(13),T=a.n(M),L=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e.toBase64=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))},e.fileToBase64=function(){var t=Object(_.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toBase64(a);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){console.log("selectorFiles",t),e.setState({loading:!0}),e.file=t[0],e.fileToBase64(e.file).then((function(t){e.props.selectImage(t),e.setState({loading:!1})})).catch((function(e){console.log("File Reader error",e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:function(t){return e.handleChange(t.target.files)},accept:this.props.fileType,multiple:!1}),this.state.loading&&r.a.createElement("div",{className:T.a.loaderDiv},r.a.createElement("div",{className:T.a.loaderPosition},r.a.createElement(A.a,{style:T.a.loader,size:60,color:"#ff0000",loading:this.state.loading}),"Loading...")))}}]),a}(n.Component);L.defaultProps={selectImage:function(){},fileType:"image/*"};var I=L,J=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(I,{selectImage:this.props.selectImage}))}}]),a}(n.Component);J.defaultProps={selectImage:function(){}};var R=J||null,Y=window.fabric,X=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={brushsize:10,canDraw:!1,brushcolor:"#ff0000",backgroundImg:null,addTextBox:!1,eraserActive:!1},e.componentMap={textBox:Q(),rect:S},e.resetBrush=function(){e.state.eraserActive&&(console.log("resetBrush"),e.props.canvas.freeDrawingBrush=new Y.PencilBrush,e.props.canvas.freeDrawingBrush.width=e.state.brushsize,e.props.canvas.isDrawingMode=!1,e.props.canvas.freeDrawingBrush.color=e.state.brushcolor,e.setState({eraserActive:!1}))},e.brushSizeChange=function(t,a){t.preventDefault(),console.log("brushSizeChange"),e.resetBrush(),e.setState({brushsize:a},function(){this.props.onChange(this.state)}.bind(Object(p.a)(e)))},e.canUseBrush=function(t){console.log("canUseBrush"),e.resetBrush(),e.setState({canDraw:!e.state.canDraw},function(){this.props.onChange(this.state)}.bind(Object(p.a)(e)))},e.brushColorChange=function(t){console.log("brushColorChange"),e.resetBrush(),e.setState({brushcolor:t.target.value},function(){this.props.onChange(this.state)}.bind(Object(p.a)(e)))},e.eraser=function(t){t.preventDefault(),console.log("eraser"),e.props.canvas.isDrawingMode=!0;var a=new B(e.props.canvas);a.width=10,a.color="#ffffff",e.props.canvas.freeDrawingBrush=a,e.props.onChange(e.state),console.log(e.props.canvas.freeDrawingBrush),e.setState({eraserActive:!0})},e.renderFigure=function(e){var t=e.target.id;console.log("Figure:",t)},e.selectImage=function(t){var a=t;console.log(a),e.props.addBackgroundImg(a),e.setState({backgroundImg:a})},e.readPDF=function(e){C.a.disableWorker=!0,C.a.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(C.a.version,"/pdf.worker.js");return C.a.getDocument({url:"https://cors-anywhere.herokuapp.com/https://gahp.net/wp-content/uploads/2017/09/sample.pdf"}).then((function(t){return t.getPage(e).then((function(e){var t=e.getViewport(1.5),a=document.getElementById("the-canvas"),n=a.getContext("2d");return a.height=t.height,a.width=t.width,e.render({canvasContext:n,viewport:t}).promise.then((function(){return a.toDataURL("image/jpeg")}))}))}))},e.addElement=function(t,a){t.preventDefault();var n=e.componentMap[a];console.log("addElement",e.props.canvas),e.props.canvas.add(n),e.props.canvas.setActiveObject(n),e.props.canvas.isDrawingMode=!1,e.props.canvas.renderAll(),e.props.updateCanvas(e.props.canvas)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("CPPP",this.props.canvas)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:f.a.controlPanel},r.a.createElement("div",{className:f.a.boxTitle},"Base Tool Set"),r.a.createElement("div",{className:f.a.box},r.a.createElement("button",{title:"Pencil Tool",className:m.a.btn,id:"canDraw",onClick:this.canUseBrush}," ",r.a.createElement(g.e,null)),r.a.createElement("button",{disabled:!0,title:"Eraser",className:m.a.btn,id:"erase",onClick:this.eraser}," ",r.a.createElement(g.b,null)),r.a.createElement("button",{title:"Text Box",className:m.a.btn,id:"textBox",onClick:function(t){e.addElement(t,"textBox")}},r.a.createElement(g.d,null)),r.a.createElement("button",{disabled:!0,title:"Draw Line",className:m.a.btn,id:"line",onClick:function(t){e.addElement(t,"line")}},r.a.createElement(g.f,null))),r.a.createElement("div",{className:f.a.boxTitle},"Color Pallet"),r.a.createElement("div",{className:f.a.box},r.a.createElement("input",{title:"Color Selector",id:"color",type:"color",defaultValue:"#ff0000",onChange:this.brushColorChange})),r.a.createElement("div",{className:f.a.boxTitle},"Brush Size"),r.a.createElement("div",{className:f.a.box},r.a.createElement("button",{title:"brushSize1",id:"brushSize1",className:m.a.brush,onClick:function(t){return e.brushSizeChange(t,2)}},r.a.createElement(g.a,{style:{fontSize:2}})),r.a.createElement("button",{title:"brushSize2",id:"brushSize2",className:m.a.brush,onClick:function(t){return e.brushSizeChange(t,5)}},r.a.createElement(g.a,{style:{fontSize:5}})),r.a.createElement("button",{title:"brushSize3",id:"brushSize3",className:m.a.brush,onClick:function(t){return e.brushSizeChange(t,10)}},r.a.createElement(g.a,{style:{fontSize:10}})),r.a.createElement("button",{title:"brushSize4",id:"brushSize4",className:m.a.brush,onClick:function(t){return e.brushSizeChange(t,15)}},r.a.createElement(g.a,{style:{fontSize:15}})),r.a.createElement("button",{title:"brushSize5",id:"brushSize5",className:m.a.brush,onClick:function(t){return e.brushSizeChange(t,20)}},r.a.createElement(g.a,{style:{fontSize:20}})),r.a.createElement("button",{title:"brushSize6",id:"brushSize6",className:m.a.brush,onClick:function(t){return e.brushSizeChange(t,25)}},r.a.createElement(g.a,{style:{fontSize:25}}))),r.a.createElement("div",{className:f.a.boxTitle},"Basic Figures"),r.a.createElement("div",{className:f.a.box},r.a.createElement("button",{title:"Add Rectangle",id:"rect",className:m.a.btn,onClick:this.renderFigure},r.a.createElement(g.g,null)),r.a.createElement("button",{title:"Add Circle",id:"circle",className:m.a.btn,onClick:this.renderFigure},r.a.createElement(g.a,null)),r.a.createElement("button",{title:"Add PNG",id:"image",className:m.a.btn,onClick:this.renderFigure},r.a.createElement(g.c,null))),r.a.createElement("br",null),r.a.createElement(R,{selectImage:this.selectImage}))}}]),a}(n.Component);X.defaultProps={onChange:function(){},showFigures:function(){}};var F=X,U=window.fabric,W=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).canvas=new U.Canvas(e.c),e.state={mousecursor:null,backgroudImg:null,canvas:e.canvas},e.updateCanvas=function(t){e.canvas=t,e.canvas.renderAll(),e.setState({canvas:t}),console.log("newCanvas",t),console.log(" this.canvas",e.canvas)},e.onControlChange=function(t){e.canvas.freeDrawingBrush.width=t.brushsize,e.canvas.isDrawingMode=t.canDraw,e.canvas.freeDrawingBrush.color=t.brushcolor,e.canvas.renderAll(),console.log("onControlChange",e.canvas.freeDrawingBrush)},e.showFigures=function(t){e.setState({show:t})},e.addBackgroundImg=function(t){console.log(t),e.setState({backgroudImg:t});var a=e.canvas;U.Image.fromURL(t,(function(e){a.setBackgroundImage(e,a.renderAll.bind(a),{scaleX:a.width/e.width,scaleY:a.height/e.height})})),e.canvas=a},e.canvasToJson=function(t){t.preventDefault();var a=JSON.stringify(e.canvas.toJSON());navigator.clipboard.writeText(a).then((function(e){alert("JSON Copied to clipboard")})),console.log(a)},e.clear=function(t){t.preventDefault(),e.canvas.clear(),e.canvas.backgroundImage=null,e.canvas.backgroundColor="#ffffff",e.canvas.renderAll()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.canvas=new U.Canvas(this.c),this.canvas.backgroundColor="#ffffff",this.canvas.freeDrawingBrush.width=10,this.canvas.isDrawingMode=!1,this.canvas.freeDrawingBrush.color="#ff0000",this.canvas.renderAll(),this.setState({canvas:this.canvas})}},{key:"render",value:function(){var e=this,t=r.a.Children.map(this.state.children,(function(t){return r.a.cloneElement(t,{canvas:e.canvas,updateCanvas:e.updateCanvas})})),a=this.props,o=a.width,l=a.height;return r.a.createElement(n.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("canvas",{ref:function(t){return e.c=t},width:o,height:l,className:h.a.canvasStyle}),this.canvas&&t,r.a.createElement("br",null)),r.a.createElement("td",{className:f.a.rightPanel},r.a.createElement(F,{canvas:this.state.canvas,onChange:this.onControlChange,updateCanvas:this.updateCanvas,addBackgroundImg:this.addBackgroundImg}),r.a.createElement("button",{onClick:function(t){return e.canvasToJson(t)}},"To JSON"),r.a.createElement("button",{onClick:function(t){return e.clear(t)}},"Clear Canvas"))))))}}]),a}(r.a.Component);W.defaultProps={width:1200,height:800};var G=W,V={objects:[{type:"rect",originX:"left",originY:"top",left:0,top:0,width:100,height:100,fill:"blue",stroke:null,strokeWidth:1,strokeDashArray:null,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:10,scaleX:1,scaleY:1,angle:0,flipX:!1,flipY:!1,opacity:1,shadow:null,visible:!0,clipTo:null,backgroundColor:"",fillRule:"nonzero",globalCompositeOperation:"source-over",transformMatrix:null,rx:0,ry:0},{type:"circle",originX:"left",originY:"top",left:0,top:200,width:40,height:40,fill:"red",stroke:null,strokeWidth:1,strokeDashArray:null,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:10,scaleX:1,scaleY:1,angle:0,flipX:!1,flipY:!1,opacity:1,shadow:null,visible:!0,clipTo:null,backgroundColor:"",fillRule:"nonzero",globalCompositeOperation:"source-over",transformMatrix:null,radius:20,startAngle:0,endAngle:6.283185307179586},{type:"path",originX:"center",originY:"center",left:187.94,top:118.23,width:98.29,height:68.31,fill:null,stroke:"#ff0000",strokeWidth:10,strokeDashArray:null,strokeLineCap:"round",strokeLineJoin:"round",strokeMiterLimit:10,scaleX:1,scaleY:1,angle:0,flipX:!1,flipY:!1,opacity:1,shadow:null,visible:!0,clipTo:null,backgroundColor:"",fillRule:"nonzero",globalCompositeOperation:"source-over",transformMatrix:null,path:[["M",138.79353648729156,152.38180373184392],["Q",138.79353648729156,152.38180373184392,139.29353648729156,152.38180373184392],["Q",139.79353648729156,152.38180373184392,139.54353648729156,151.8938761474766],["Q",139.29353648729156,151.40594856310923,149.66522711912654,139.2077589539258],["Q",160.03691775096155,127.00956934474239,168.92693829253437,121.15443833233434],["Q",177.81695883410723,115.2993073199263,187.20086940576743,109.44417630751826],["Q",196.58477997742767,103.58904529511021,204.98091048891314,99.19769703580418],["Q",213.3770410003986,94.80634877649815,217.82205127118505,92.36671085466148],["Q",222.26706154197146,89.92707293282479,225.23040172249574,87.97536259535543],["Q",228.19374190302003,86.02365225788608,231.1570820835443,85.53572467351876],["Q",234.1204222640686,85.04779708915142,235.60209235433075,84.55986950478407],["L",237.08376244459288,84.07194192041673]],pathOffset:{x:187.9386494659422,y:118.22687282613032}},{type:"path",originX:"center",originY:"center",left:232.39,top:154.82,width:13.34,height:118.08,fill:null,stroke:"#ff0000",strokeWidth:10,strokeDashArray:null,strokeLineCap:"round",strokeLineJoin:"round",strokeMiterLimit:10,scaleX:1,scaleY:1,angle:0,flipX:!1,flipY:!1,opacity:1,shadow:null,visible:!0,clipTo:null,backgroundColor:"",fillRule:"nonzero",globalCompositeOperation:"source-over",transformMatrix:null,path:[["M",225.71818178267048,95.78220394523282],["Q",225.71818178267048,95.78220394523282,226.21818178267048,95.78220394523282],["Q",226.71818178267048,95.78220394523282,226.46818178267048,96.27013152960016],["Q",226.21818178267048,96.7580591139675,226.21818178267048,98.70976945143684],["Q",226.21818178267048,100.66147978890619,226.71207181275787,109.93210389188559],["Q",227.20596184284526,119.202727994865,228.19374190302,127.49749692910973],["Q",229.18152196319477,135.79226586335446,230.6631920534569,145.5508175507012],["Q",232.14486214371905,155.30936923804794,232.14486214371905,161.6524278348233],["Q",232.14486214371905,167.9954864315987,232.63875217380644,171.8989071065374],["Q",233.13264220389382,175.8023277814761,234.12042226406857,177.2661105345781],["Q",235.10820232424334,178.7298932876801,236.0959823844181,183.12124154698614],["Q",237.08376244459288,187.5125898062922,237.57765247468024,190.44015531249622],["Q",238.07154250476762,193.36772081870023,238.07154250476762,197.27114149363894],["Q",238.07154250476762,201.1745621685776,238.07154250476762,202.1504173373123],["Q",238.07154250476762,203.12627250604697,238.07154250476762,203.61420009041433],["Q",238.07154250476762,204.10212767478166,238.07154250476762,205.07798284351634],["Q",238.07154250476762,206.053838012251,238.07154250476762,206.54176559661835],["Q",238.07154250476762,207.02969318098567,238.565432534855,210.44518627155702],["L",239.0593225649424,213.8606793621284]],pathOffset:{x:232.38875217380644,y:154.8214416536806}},{type:"path",originX:"center",originY:"center",left:259.06,top:219.72,width:216.82,height:17.57,fill:null,stroke:"#ff0000",strokeWidth:10,strokeDashArray:null,strokeLineCap:"round",strokeLineJoin:"round",strokeMiterLimit:10,scaleX:1,scaleY:1,angle:0,flipX:!1,flipY:!1,opacity:1,shadow:null,visible:!0,clipTo:null,backgroundColor:"",fillRule:"nonzero",globalCompositeOperation:"source-over",transformMatrix:null,path:[["M",150.6468972093887,228.4985068931485],["Q",150.6468972093887,228.4985068931485,151.1468972093887,228.4985068931485],["Q",151.6468972093887,228.4985068931485,155.8419074801751,228.4985068931485],["Q",160.03691775096155,228.4985068931485,167.44526820227225,227.52265172441383],["Q",174.85361865358294,226.54679655567915,185.7191993155053,224.59508621820981],["Q",196.58477997742767,222.64337588074045,212.88315097031122,220.69166554327109],["Q",229.18152196319477,218.73995520580175,249.43101319677737,215.81238969959773],["Q",269.68050443036,212.8848241933937,289.43610563385516,212.39689660902638],["Q",309.1917068373504,211.90896902465903,325.490077830234,211.42104144029167],["Q",341.7884488231175,210.93311385592435,352.65402948503987,210.93311385592435],["Q",363.51961014696224,210.93311385592435,365.4951702673118,210.93311385592435],["L",367.47073038766126,210.93311385592435]],pathOffset:{x:259.05881379852497,y:219.71581037453643}},{type:"path",originX:"center",originY:"center",left:443.28,top:155.23,width:140.76,height:157.92,fill:null,stroke:"#ff0000",strokeWidth:10,strokeDashArray:null,strokeLineCap:"round",strokeLineJoin:"round",strokeMiterLimit:10,scaleX:1,scaleY:1,angle:0,flipX:!1,flipY:!1,opacity:1,shadow:null,visible:!0,clipTo:null,backgroundColor:"",fillRule:"nonzero",globalCompositeOperation:"source-over",transformMatrix:null,path:[["M",372.89741074870983,101.63733495764087],["Q",372.89741074870983,101.63733495764087,373.39741074870983,101.63733495764087],["Q",373.89741074870983,101.63733495764087,373.64741074870983,101.14940737327353],["Q",373.39741074870983,100.66147978890619,373.39741074870983,100.17355220453885],["Q",373.39741074870983,99.68562462017152,374.87908083897196,96.7580591139675],["Q",376.3607509292341,93.83049360776347,377.8424210194962,91.87878327029412],["Q",379.3240911097584,89.92707293282479,381.7935412601953,87.97536259535543],["Q",384.2629914106322,86.02365225788608,385.7446615008943,84.55986950478407],["Q",387.22633159115645,83.09608675168207,388.2141116513312,81.63230399858006],["Q",389.201891711506,80.16852124547803,392.1652318920303,79.19266607674336],["Q",395.12857207255456,78.2168109080087,399.57358234334095,78.2168109080087],["Q",404.0185926141274,78.2168109080087,407.9697128548264,77.24095573927403],["Q",411.9208330955255,76.26510057053935,415.8719533362246,76.26510057053935],["Q",419.8230735769236,76.26510057053935,424.7619738777974,76.26510057053935],["Q",429.7008741786712,76.26510057053935,432.1703243291081,76.26510057053935],["Q",434.639774479545,76.26510057053935,437.6031146600693,77.72888332364136],["Q",440.56645484059356,79.19266607674336,442.5420149609431,79.19266607674336],["Q",444.5175750812926,79.19266607674336,447.4809152618169,79.19266607674336],["Q",450.44425544234116,79.19266607674336,452.91370559277806,80.16852124547805],["Q",455.38315574321496,81.14437641421272,457.3587158635645,82.12023158294738],["Q",459.334275983914,83.09608675168207,461.3098361042635,86.02365225788608],["Q",463.28539622461307,88.9512177640901,463.7792862547004,93.83049360776347],["Q",464.2731762847878,98.70976945143684,464.76706631487514,104.07697287947755],["Q",465.26095634496255,109.44417630751826,465.26095634496255,113.34759698245696],["Q",465.26095634496255,117.25101765739565,465.26095634496255,120.66651074796701],["Q",465.26095634496255,124.08200383853837,463.285396224613,127.0095693447424],["Q",461.3098361042635,129.93713485094642,458.8403859538266,132.86470035715044],["Q",456.3709358033897,135.79226586335446,455.38315574321496,138.23190378519115],["Q",454.3953756830402,140.67154170702784,451.9259255326033,143.11117962886453],["Q",449.4564753821664,145.5508175507012,446.4931352016421,148.47838305690522],["Q",443.5297950211178,151.40594856310923,441.5542349007683,153.84558648494593],["Q",439.5786747804188,156.28522440678262,437.6031146600693,158.23693474425198],["Q",435.62755453971977,160.18864508172132,434.14588444945764,163.60413817229266],["Q",432.66421435919546,167.01963126286404,430.19476420875856,171.89890710653742],["Q",427.72531405832166,176.77818295021078,425.7497539379722,181.65745879388413],["Q",423.77419381762263,186.53673463755752,421.30474366718573,192.39186564996555],["Q",418.83529351674883,198.2469966623736,416.8597333963993,204.59005525914898],["Q",414.88417327604975,210.93311385592435,413.4025031857876,214.3486069464957],["Q",411.9208330955255,217.76410003706707,410.9330530353507,220.20373795890376],["Q",409.94527297517595,222.64337588074045,409.94527297517595,225.57094138694447],["Q",409.94527297517595,228.4985068931485,409.94527297517595,230.45021723061785],["Q",409.94527297517595,232.4019275680872,409.94527297517595,233.37778273682187],["Q",409.94527297517595,234.35363790555652,409.94527297517595,233.8657103211892],["Q",409.94527297517595,233.37778273682187,413.89639321587504,228.98643447751584],["Q",417.84751345657406,224.5950862182098,421.30474366718573,222.64337588074045],["Q",424.7619738777974,220.6916655432711,431.1825442689333,217.27617245269977],["Q",437.60311466006925,213.8606793621284,442.0481249308557,212.39689660902638],["Q",446.49313520164213,210.93311385592435,453.90148565295283,208.981403518455],["Q",461.3098361042635,207.02969318098567,464.27317628478784,206.54176559661835],["Q",467.2365164653121,206.053838012251,470.69374667592376,206.053838012251],["Q",474.15097688653543,206.053838012251,479.08987718740923,206.54176559661835],["Q",484.028777488283,207.02969318098567,489.9554578493316,209.46933110282237],["Q",495.88213821038016,211.90896902465903,501.3149285413414,212.8848241933937],["Q",506.7477188723025,213.8606793621284,508.723278992652,214.83653453086305],["Q",510.69883911300155,215.81238969959773,511.19272914308897,215.81238969959773],["Q",511.6866191731763,215.81238969959773,512.1805092032637,216.30031728396506],["Q",512.6743992333511,216.7882448683324,513.1682892634385,217.27617245269974],["L",513.6621792935258,217.76410003706707]],pathOffset:{x:443.2797950211178,y:155.2256540994824}}],background:""},q=window.fabric,K=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).data={},e.canvas=new q.Canvas(e.c),e.renderJsonData=function(){e.canvas.loadFromJSON(e.data,e.canvas.renderAll.bind(e.canvas)),e.canvas.renderAll()},e.readJsonData=function(){var t=document.getElementById("jsonText").value,a={};try{a=JSON.parse(t),console.log("Rendering JSON..."),e.data=t,e.renderJsonData()}catch(n){alert("Invalid json"),console.log(n.stack)}console.log(a)},e.clear=function(t){t.preventDefault(),e.canvas.clear()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.canvas=new q.Canvas(this.c),this.canvas.backgroundColor="#ffffff",this.canvas.renderAll(),document.getElementById("jsonText").value=JSON.stringify(V)}},{key:"render",value:function(){var e=this,t=this.props,a=t.width,o=t.height;return r.a.createElement(n.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("canvas",{ref:function(t){return e.c=t},width:a,height:o,className:h.a.canvasStyle}),r.a.createElement("br",null),r.a.createElement("textarea",{id:"jsonText",defaultValue:JSON.stringify(this.data),rows:"10",cols:"80"}),r.a.createElement("br",null)),r.a.createElement("td",{className:f.a.rightPanel},r.a.createElement("button",{onClick:this.readJsonData},"Render JSON on Canvas"),r.a.createElement("button",{onClick:this.clear},"Clear Canvas"))))))}}]),a}(r.a.Component);K.defaultProps={width:1200,height:800};var H=K,Z=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Starting Free Draw");var e=this.props.canvas;e.isDrawingMode=!0,this.props.updatedCanvas(e)}},{key:"render",value:function(){return null}}]),a}(r.a.Component);Z.defaultProps={top:0,left:0,width:50,height:50};var $=Z,ee={textAlign:"center",marginLeft:"10px",marginRight:"10px",color:"Yellow"},te=function(){return r.a.createElement("div",{style:ee},r.a.createElement("h3",null,"Master Screen"),r.a.createElement(G,null,r.a.createElement($,null)),r.a.createElement("br",null),r.a.createElement("h3",null,"Client Screen"),r.a.createElement(H,null))};Object(o.render)(r.a.createElement(te,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.b36b740d.chunk.js.map