(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),i=a.n(r),s=(a(16),a(10)),o=a(1),c=a(2),u=a(4),m=a(3),h=a(5),A=(a(8),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.cell?"cell on":"cell off",a=this.props,n=a.row,r=a.col;return l.a.createElement("div",{onClick:function(t){return e.props.onclick(n,r)},className:t,style:{width:this.props.size||20,height:this.props.size||20}},"")}}]),t}(n.Component)),d=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.continueAnimation=!1}},{key:"render",value:function(){var e=this,t=this.props.cells.map(function(t,a){return t.map(function(t,n){return l.a.createElement(A,{key:"".concat(n,"-").concat(a),onclick:e.props.onclick,cell:t,row:a,col:n,size:e.props.cellSize})})});return l.a.createElement("div",{className:"canvas"},l.a.createElement("h1",null,"Generation ",this.props.generation),l.a.createElement("div",{style:{width:this.props.col*this.props.cellSize,margin:"auto"}},t))}}]),t}(n.Component),g=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"},l.a.createElement("defs",null,l.a.createElement("image",{id:"image",width:"5",height:"15",href:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAPCAQAAACG/c0IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiCh8MIBktZzpHAAAAJ0lEQVQI12P8/4+BkYGBgYHhP+P//wxQwMQAY/5nYmBAiNKcid0NAF2CCxFJJMJVAAAAAElFTkSuQmCC"})),l.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},l.a.createElement("path",{className:"cls-1",d:"M11,24.5A14.5,14.5,0,1,0,25.5,10,14.516,14.516,0,0,0,11,24.5Zm1.16,0A13.34,13.34,0,1,1,25.5,37.84,13.355,13.355,0,0,1,12.16,24.5Z"}),l.a.createElement("use",{x:"27",y:"17",href:"#image"}),l.a.createElement("use",{x:"20",y:"17",href:"#image"})))},p=function(e){var t=e.playing?"cls-1 disable":"cls-1";return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"},l.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},l.a.createElement("path",{className:t,d:"M11,24.5A14.5,14.5,0,1,0,25.5,10,14.516,14.516,0,0,0,11,24.5Zm1.16,0A13.34,13.34,0,1,1,25.5,37.84,13.355,13.355,0,0,1,12.16,24.5Z"}),l.a.createElement("path",{className:t,d:"M34,24.5L20,17V32l14-7.5"})))},f=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"},l.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},l.a.createElement("path",{className:"cls-1",d:"M11,24.5A14.5,14.5,0,1,0,25.5,10,14.516,14.516,0,0,0,11,24.5Zm1.16,0A13.34,13.34,0,1,1,25.5,37.84,13.355,13.355,0,0,1,12.16,24.5Z"}),l.a.createElement("image",{x:"20",y:"19",width:"12",height:"11",href:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALAQAAAABjC1HyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiCh8MFhWtzecZAAAADklEQVQI12P4/4EBLwIAX3UVRkWOrR4AAAAASUVORK5CYII="})))},w=function(e){var t=e.text,a=e.onclick,n=e.play,r=e.playing,i=e.pause,s=e.stop,o=e.preset?"btn preset":"btn control";return l.a.createElement("button",{onClick:a,className:o},n&&l.a.createElement(p,{playing:r}),i&&l.a.createElement(g,null),s&&l.a.createElement(f,null),t&&t)},E=(a(19),function(e){var t=e.seed,a=e.showPreset,n=e.handlePresets;return l.a.createElement("div",{className:"Presets"},l.a.createElement("div",{onClick:n,className:"Presets__heading"},"Presets"),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(w,{text:"Preset 1",onclick:t,preset:!0}),l.a.createElement(w,{text:"Preset 2",preset:!0}),l.a.createElement(w,{text:"Preset 3",preset:!0}),l.a.createElement(w,{text:"Preset 4",preset:!0})))}),y=function(e){e.seed;var t=e.showPreset,a=e.handlePresets;return l.a.createElement("div",{className:"Presets"},l.a.createElement("div",{onClick:a,className:"Presets__heading"},"Rules"),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Any live cell with fewer than two live neighbors dies, as if by underpopulation."),l.a.createElement("li",null,"Any live cell with two or three live neighbors lives on to the next generation."),l.a.createElement("li",null,"Any live cell with more than three live neighbors dies, as if by overpopulation."),l.a.createElement("li",null,"Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction."))))},v=function(e){var t=e.showHistory,a=e.handleHistory;return l.a.createElement("div",{className:"Presets"},l.a.createElement("div",{onClick:a,className:"Presets__heading"},"Background of Cellular Automata"),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,"In late 1940, John von Neumann defined life as a creation (as a being or organism) which can reproduce itself and simulate a Turing machine. Von Neumann was thinking about an engineering solution which would use electromagnetic components floating randomly in liquid or gas.[2] This turned out not to be realistic with the technology available at the time. Thus, ingeniously, Stanis\u0142aw Ulam invented cellular automata, which were intended to simulate von Neumann's theoretical electromagnetic constructions. Ulam discussed using computers to simulate his cellular automata in a two-dimensional lattice in several papers. In parallel, Von Neumann attempted to construct Ulam's cellular automaton. Although successful, he was busy with other projects and left some details unfinished. His construction was complicated because it tried to simulate his own engineering design. Over time, simpler life constructions were provided by other researchers, and published in papers and books.[citation needed]"))))},b=function(e){var t=e.landingPage;return l.a.createElement("div",{onClick:t,id:"landing"},l.a.createElement("div",{className:"center"},l.a.createElement("h1",null,'Welcome to Conway\'s "Game of Life"'),l.a.createElement("span",null,"Click anywhere to start the game")),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1920",height:"1080"},l.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},l.a.createElement("path",{className:"landing",d:"M 24.412813186645508 48.32741165161133 L 32.953739166259766 938.2918090820312 L 1344.83984375 945.1245727539062 L 1344.83984375 55.16014862060547 L 24.412813186645508 48.32741165161133 Z"}))))},C=a(6),P=a.n(C),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={generation:0,cellSize:30,row:15,col:30,cellArry:[],continueAnimation:!1,range:1,speed:1e3,seeded:!1,showPreset:!1,showRuls:!1,showHistory:!1,playing:!1,landingPage:!0},a.setTimeoutId=0,a.count=function(e,t,n){for(var l=0,r=-1;r<2;r++)for(var i=-1;i<2;i++){var s=(t+r+a.state.row)%a.state.row,o=(n+i+a.state.col)%a.state.col;e[s][o]&&l++}return l-=1},a.pauseGame=function(){a.setState({continueAnimation:!1,playing:!1})},a.stopGame=function(){a.setState({cellArry:new Array(a.state.row).fill().map(function(e){return new Array(a.state.col).fill(!1)}),generation:0,continueAnimation:!1,seeded:!1,playing:!1})},a.playGame=function(){a.state.seeded&&!a.state.playing&&(a.setState({continueAnimation:!a.state.continueAnimation}),requestAnimationFrame(function(e){return a.game(e)}))},a.seed=function(){var e=a.deepCopyArry(a.state.cellArry);e.forEach(function(t,a){t.forEach(function(t,n){var l=Math.floor(4*Math.random());e[a][n]=1===l})}),a.setState({cellArry:e,generation:0,seeded:!0})},a.start=null,a.clickHandlerForCell=function(e,t){if(!a.state.playing){var n=a.deepCopyArry(a.state.cellArry);n[e][t]=!n[e][t],a.setState({cellArry:n,seeded:!0})}},a.handleHistory=function(e){a.setState({showHistory:!a.state.showHistory})},a.deepCopyArry=function(e){return e.map(function(e){return e.slice()})},a.handleChange=function(e){a.setState({range:e.target.value})},a.handlePresets=function(e){a.setState({showPreset:!a.state.showPreset})},a.handleRules=function(e){a.setState({showRuls:!a.state.showRuls})},a.landingPage=function(e){var t=P.a.timeline({autoplay:!0,direction:"alternate",loop:!1});t.add({targets:".landing",d:[{value:"M -11.227057456970215 -4.013760566711426 L -13.176599502563477 996.1010131835938 L 1400.240966796875 1003.899169921875  1400.240966796875 1003.899169921875 1448.1765982807613 351.1380342811975 1187.740966796875 175.34405517578125 C 755.8670654296875 -70.72327423095703 -23.45390392705695 -8.822071536065808 -11.227057456970215 -4.013760566711426 Z"},{value:"M -7.327974081039429 898.6239187717438 L -9.277515888214111 978.55517578125 L 1406.0894775390625 984.4037475585938 1406.0894775390625 984.4037475585938 672.1298828125 892.896240234375 491.754638671875 894.7248687744141 C 139.91659545898438 854.8134765625 -7.327974081039429 898.6239187717438 -7.327974081039429 898.6239187717438 Z"}],opacity:0,duration:1e3,easing:"easeInQuad"}),t.finished.then(function(e){P()({targets:".landing",opacity:0,translateX:-500,easing:"easeInQuart",complete:function(){a.setState({landingPage:!1})}})})},a.handleCellChange=function(e){a.setState(Object(s.a)({},e.target.name,Number(e.target.value)),function(){a.setState(function(e,t){return console.log("prevState",e),console.log("prevProps",t),{cellArry:new Array(e.row).fill().map(function(t){return new Array(e.col).fill(!1)})}},function(){a.seed(),requestAnimationFrame(function(e){return a.game(e)})})})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t,a){return{cellArry:new Array(e.state.row).fill().map(function(t){return new Array(e.state.col).fill(!1)})}},function(){e.seed(),requestAnimationFrame(function(t){return e.game(t)})})}},{key:"game",value:function(e){var t=this;if(this.state.continueAnimation&&(requestAnimationFrame(function(e){return t.game(e)}),null===this.start&&(this.start=e-30),e-this.start>this.state.speed/this.state.range/4)){this.start=e;var a=this.deepCopyArry(this.state.cellArry);a.forEach(function(e,n){e.forEach(function(e,l){var r=t.count(a,n,l);2===r?a[n][l]=!0:a[n][l]||3!==r?(r>3||r<2)&&(a[n][l]=!1):a[n][l]=!0})}),this.setState({cellArry:a,generation:this.state.generation+1,playing:!0})}}},{key:"componentWillUnmount",value:function(){this.continueAnimation=!1,clearInterval(this.setTimeoutId)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"nav"},"Home"),this.state.landingPage&&l.a.createElement(b,{landingPage:this.landingPage}),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"grid"},l.a.createElement(d,{cellSize:this.state.cellSize,cells:this.state.cellArry,row:this.state.row,col:this.state.col,generation:this.state.generation,onclick:this.clickHandlerForCell}),l.a.createElement("div",{className:"controles"},l.a.createElement(w,{onclick:this.playGame,play:!0,playing:this.state.playing}),l.a.createElement(w,{onclick:this.pauseGame,pause:!0}),l.a.createElement(w,{onclick:this.stopGame,stop:!0}),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"range"},"Speed: ",this.state.range,"X"),l.a.createElement("input",{type:"range",name:"range",min:"0",max:"5",value:this.state.range,onChange:this.handleChange}),l.a.createElement("div",{className:"cell__info"},l.a.createElement("label",{htmlFor:"range"},"col : ",this.state.col),l.a.createElement("input",{type:"number",name:"col",value:this.state.col,onChange:this.handleCellChange}),l.a.createElement("label",{htmlFor:"range"},"row : ",this.state.row),l.a.createElement("input",{type:"number",name:"row",value:this.state.row,onChange:this.handleCellChange}),l.a.createElement("label",{htmlFor:"range"},"cell Size : ",this.state.cellSize),l.a.createElement("input",{type:"number",name:"cellSize",value:this.state.cellSize,onChange:this.handleCellChange}))))),l.a.createElement("div",{className:"option"},l.a.createElement(E,{seed:this.seed,showPreset:this.state.showPreset,handlePresets:this.handlePresets}),l.a.createElement(y,{showPreset:this.state.showRuls,handlePresets:this.handleRules}),l.a.createElement(v,{showHistory:this.state.showHistory,handleHistory:this.handleHistory}))))}}]),t}(n.Component);i.a.render(l.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,a){}},[[11,2,1]]]);
//# sourceMappingURL=main.2ae2dadc.chunk.js.map