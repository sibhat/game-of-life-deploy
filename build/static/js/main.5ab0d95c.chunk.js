(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),s=(a(15),a(1)),o=a(2),c=a(4),u=a(3),A=a(5),m=(a(8),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.cell?"cell on":"cell off",a=this.props,n=a.row,i=a.col;return r.a.createElement("div",{onClick:function(t){return e.props.onclick(n,i)},className:t},"")}}]),t}(n.Component)),h=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.continueAnimation=!1}},{key:"render",value:function(){var e=this,t=this.props.cells.map(function(t,a){return t.map(function(t,n){return r.a.createElement(m,{key:"".concat(n,"-").concat(a),onclick:e.props.onclick,cell:t,row:a,col:n})})});return r.a.createElement("div",{className:"canvas"},r.a.createElement("h1",null,"Generation ",this.props.generation),r.a.createElement("div",{style:{width:"400px",margin:"auto"}},t))}}]),t}(n.Component),d=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"},r.a.createElement("defs",null,r.a.createElement("image",{id:"image",width:"5",height:"15",href:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAPCAQAAACG/c0IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiCh8MIBktZzpHAAAAJ0lEQVQI12P8/4+BkYGBgYHhP+P//wxQwMQAY/5nYmBAiNKcid0NAF2CCxFJJMJVAAAAAElFTkSuQmCC"})),r.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},r.a.createElement("path",{className:"cls-1",d:"M11,24.5A14.5,14.5,0,1,0,25.5,10,14.516,14.516,0,0,0,11,24.5Zm1.16,0A13.34,13.34,0,1,1,25.5,37.84,13.355,13.355,0,0,1,12.16,24.5Z"}),r.a.createElement("use",{x:"27",y:"17",href:"#image"}),r.a.createElement("use",{x:"20",y:"17",href:"#image"})))},g=function(e){var t=e.playing?"cls-1 disable":"cls-1";return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"},r.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},r.a.createElement("path",{className:t,d:"M11,24.5A14.5,14.5,0,1,0,25.5,10,14.516,14.516,0,0,0,11,24.5Zm1.16,0A13.34,13.34,0,1,1,25.5,37.84,13.355,13.355,0,0,1,12.16,24.5Z"}),r.a.createElement("path",{className:t,d:"M34,24.5L20,17V32l14-7.5"})))},p=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"},r.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},r.a.createElement("path",{className:"cls-1",d:"M11,24.5A14.5,14.5,0,1,0,25.5,10,14.516,14.516,0,0,0,11,24.5Zm1.16,0A13.34,13.34,0,1,1,25.5,37.84,13.355,13.355,0,0,1,12.16,24.5Z"}),r.a.createElement("image",{x:"20",y:"19",width:"12",height:"11",href:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALAQAAAABjC1HyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiCh8MFhWtzecZAAAADklEQVQI12P4/4EBLwIAX3UVRkWOrR4AAAAASUVORK5CYII="})))},f=function(e){var t=e.text,a=e.onclick,n=e.play,i=e.playing,l=e.pause,s=e.stop,o=e.preset?"btn preset":"btn control";return r.a.createElement("button",{onClick:a,className:o},n&&r.a.createElement(g,{playing:i}),l&&r.a.createElement(d,null),s&&r.a.createElement(p,null),t&&t)},w=(a(18),function(e){var t=e.seed,a=e.showPreset,n=e.handlePresets;return r.a.createElement("div",{className:"Presets"},r.a.createElement("div",{onClick:n,className:"Presets__heading"},"Presets"),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{text:"Preset 1",onclick:t,preset:!0}),r.a.createElement(f,{text:"Preset 2",preset:!0}),r.a.createElement(f,{text:"Preset 3",preset:!0}),r.a.createElement(f,{text:"Preset 4",preset:!0})))}),E=function(e){e.seed;var t=e.showPreset,a=e.handlePresets;return r.a.createElement("div",{className:"Presets"},r.a.createElement("div",{onClick:a,className:"Presets__heading"},"Rules"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,"Any live cell with fewer than two live neighbors dies, as if by underpopulation."),r.a.createElement("li",null,"Any live cell with two or three live neighbors lives on to the next generation."),r.a.createElement("li",null,"Any live cell with more than three live neighbors dies, as if by overpopulation."),r.a.createElement("li",null,"Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction."))))},y=function(e){var t=e.showHistory,a=e.handleHistory;return r.a.createElement("div",{className:"Presets"},r.a.createElement("div",{onClick:a,className:"Presets__heading"},"Background of Cellular Automata"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,"In late 1940, John von Neumann defined life as a creation (as a being or organism) which can reproduce itself and simulate a Turing machine. Von Neumann was thinking about an engineering solution which would use electromagnetic components floating randomly in liquid or gas.[2] This turned out not to be realistic with the technology available at the time. Thus, ingeniously, Stanis\u0142aw Ulam invented cellular automata, which were intended to simulate von Neumann's theoretical electromagnetic constructions. Ulam discussed using computers to simulate his cellular automata in a two-dimensional lattice in several papers. In parallel, Von Neumann attempted to construct Ulam's cellular automaton. Although successful, he was busy with other projects and left some details unfinished. His construction was complicated because it tried to simulate his own engineering design. Over time, simpler life constructions were provided by other researchers, and published in papers and books.[citation needed]"))))},v=function(e){var t=e.landingPage;return r.a.createElement("div",{onClick:t,id:"landing"},r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,'Welcome to Conway\'s "Game of Life"'),r.a.createElement("span",null,"Click anywhere to start the game")),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1920",height:"1080"},r.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},r.a.createElement("path",{className:"landing",d:"M 24.412813186645508 48.32741165161133 L 32.953739166259766 938.2918090820312 L 1344.83984375 945.1245727539062 L 1344.83984375 55.16014862060547 L 24.412813186645508 48.32741165161133 Z"}))))},b=a(6),C=a.n(b),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={generation:0,row:10,col:10,cellArry:[],continueAnimation:!1,range:1,speed:1e3,seeded:!1,showPreset:!1,showRuls:!1,showHistory:!1,playing:!1,landingPage:!0},a.setTimeoutId=0,a.count=function(e,t,n){for(var r=0,i=-1;i<2;i++)for(var l=-1;l<2;l++){var s=(t+i+a.state.row)%a.state.row,o=(n+l+a.state.col)%a.state.col;e[s][o]&&r++}return r-=1},a.pauseGame=function(){a.setState({continueAnimation:!1,playing:!1})},a.stopGame=function(){a.setState({cellArry:new Array(a.state.row).fill().map(function(e){return new Array(a.state.col).fill(!1)}),generation:0,continueAnimation:!1,seeded:!1,playing:!1})},a.playGame=function(){a.state.seeded&&!a.state.playing&&(a.setState({continueAnimation:!a.state.continueAnimation}),requestAnimationFrame(function(e){return a.game(e)}))},a.seed=function(){var e=a.deepCopyArry(a.state.cellArry);e.forEach(function(t,a){t.forEach(function(t,n){var r=Math.floor(4*Math.random());e[a][n]=1===r})}),a.setState({cellArry:e,generation:0,seeded:!0})},a.start=null,a.clickHandlerForCell=function(e,t){if(!a.state.playing){var n=a.deepCopyArry(a.state.cellArry);n[e][t]=!n[e][t],a.setState({cellArry:n,seeded:!0})}},a.handleHistory=function(e){a.setState({showHistory:!a.state.showHistory})},a.deepCopyArry=function(e){return e.map(function(e){return e.slice()})},a.handleChange=function(e){a.setState({range:e.target.value})},a.handlePresets=function(e){a.setState({showPreset:!a.state.showPreset})},a.handleRules=function(e){a.setState({showRuls:!a.state.showRuls})},a.landingPage=function(e){var t=C.a.timeline({autoplay:!0,direction:"alternate",loop:!1});t.add({targets:".landing",d:[{value:"M -11.227057456970215 -4.013760566711426 L -13.176599502563477 996.1010131835938 L 1400.240966796875 1003.899169921875  1400.240966796875 1003.899169921875 1448.1765982807613 351.1380342811975 1187.740966796875 175.34405517578125 C 755.8670654296875 -70.72327423095703 -23.45390392705695 -8.822071536065808 -11.227057456970215 -4.013760566711426 Z"},{value:"M -7.327974081039429 898.6239187717438 L -9.277515888214111 978.55517578125 L 1406.0894775390625 984.4037475585938 1406.0894775390625 984.4037475585938 672.1298828125 892.896240234375 491.754638671875 894.7248687744141 C 139.91659545898438 854.8134765625 -7.327974081039429 898.6239187717438 -7.327974081039429 898.6239187717438 Z"}],opacity:0,duration:1e3,easing:"easeInQuad"}),t.finished.then(function(e){C()({targets:".landing",opacity:0,translateX:-500,easing:"easeInQuart",complete:function(){a.setState({landingPage:!1})}})})},a}return Object(A.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t,a){return{cellArry:new Array(e.state.row).fill().map(function(t){return new Array(e.state.col).fill(!1)})}},function(){e.seed(),requestAnimationFrame(function(t){return e.game(t)})})}},{key:"game",value:function(e){var t=this;if(this.state.continueAnimation&&(requestAnimationFrame(function(e){return t.game(e)}),null===this.start&&(this.start=e-30),e-this.start>this.state.speed/this.state.range/4)){this.start=e;var a=this.deepCopyArry(this.state.cellArry);a.forEach(function(e,n){e.forEach(function(e,r){var i=t.count(a,n,r);2===i?a[n][r]=!0:a[n][r]||3!==i?(i>3||i<2)&&(a[n][r]=!1):a[n][r]=!0})}),this.setState({cellArry:a,generation:this.state.generation+1,playing:!0})}}},{key:"componentWillUnmount",value:function(){this.continueAnimation=!1,clearInterval(this.setTimeoutId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"nav"},"Home"),this.state.landingPage&&r.a.createElement(v,{landingPage:this.landingPage}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"grid"},r.a.createElement(h,{cells:this.state.cellArry,row:this.state.row,col:this.state.col,generation:this.state.generation,onclick:this.clickHandlerForCell}),r.a.createElement("div",{className:"controles"},r.a.createElement(f,{onclick:this.playGame,play:!0,playing:this.state.playing}),r.a.createElement(f,{onclick:this.pauseGame,pause:!0}),r.a.createElement(f,{onclick:this.stopGame,stop:!0}),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"range"},"Speed: ",this.state.range,"X"),r.a.createElement("input",{type:"range",name:"range",min:"0",max:"5",value:this.state.range,onChange:this.handleChange})))),r.a.createElement("div",{className:"option"},r.a.createElement(w,{seed:this.seed,showPreset:this.state.showPreset,handlePresets:this.handlePresets}),r.a.createElement(E,{showPreset:this.state.showRuls,handlePresets:this.handleRules}),r.a.createElement(y,{showHistory:this.state.showHistory,handleHistory:this.handleHistory}))))}}]),t}(n.Component);l.a.render(r.a.createElement(P,null),document.getElementById("root"))},8:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.5ab0d95c.chunk.js.map