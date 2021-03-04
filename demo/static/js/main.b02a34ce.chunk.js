(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{21:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a,i,r,o,u,s,c,l,d,h,f=n(0),b=n.n(f),g=n(11),p=n.n(g),x=(n(21),n(4)),m=n(2),v=n(3),j=v.a.div(a||(a=Object(m.a)(["\n  text-align: center;\n  width: calc(100% - 80px);\n  margin: 0 40px;\n  display: flex;\n  font-family: 'Architects Daughter', cursive;\n"]))),y=v.a.div(i||(i=Object(m.a)(["\n  text-align: center;\n  font-family: 'Architects Daughter', cursive;\n  background-image: url(\"fon.jpg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  height: calc(100vh);\n"]))),O="375px",k="425px",w="768px",C="1024px",S="1440px",N="2560px",z={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(O,")"),mobileL:"(max-width: ".concat(k,")"),tablet:"(max-width: ".concat(w,")"),laptop:"(max-width: ".concat(C,")"),laptopL:"(max-width: ".concat(S,")"),desktop:"(max-width: ".concat(N,")"),desktopL:"(max-width: ".concat(N,")")},I=Object(v.a)(j)(r||(r=Object(m.a)(["\nheight: 20%;\nmax-height: 100px;\npadding-top: 20px;\nfont-size: 30px;\n@media "," { \n    height: 10%;\n    font-size: 20px;\n    }\n"])),z.tablet),V=v.a.div(o||(o=Object(m.a)(["\nflex-direction: column;\ncursor: pointer;\nmargin-left: 20px;\nfont-weight: 600;\ntext-align: start;\nz-index: 9999;\nwidth: 150px;\nbackground-color: white;\nopacity: 0.7;\n"]))),E=v.a.div(u||(u=Object(m.a)(["\ncursor: pointer;\nmargin-left: 20px;\n"]))),q=v.a.div(s||(s=Object(m.a)(["\nwidth: 150px;\nfont-weight: ","; \n&:hover {\n    opacity: 0.7;\n}\n"])),(function(t){return t.isValue?600:400})),M=v.a.div(c||(c=Object(m.a)(["\nwidth: 50%;\n"]))),D=v.a.img(l||(l=Object(m.a)(["\nheight: 50px;\nmargin-right: 5%;\n@media "," { \n    display: none;\n    }\n"])),z.tablet),L=v.a.div(d||(d=Object(m.a)(["\ndisplay: flex;\npadding-left: 20px;\nheight: 45px;\nbackground: rgba(255,255,255,0.94);\nborder-radius: 20px;\n"]))),R=v.a.div(h||(h=Object(m.a)(["\nwidth: 100px;\nmargin-left: 10px;\nborder-radius: 20px;\nbackground: ","; \n"])),(function(t){return t.isPause?"rgba(11, 92, 29, 0.34)":"rgba(245, 123, 123, 0.42)"})),A=[{name:"Easy",amount:78,index:0},{name:"Medium",amount:40,index:1},{name:"Hard",amount:35,index:2},{name:" Expert",amount:30,index:3}],J=n(1);var T,B,P,G,F,H,U,W,Y,_=function(t){var e=Object(f.useState)(JSON.parse(localStorage.getItem("difficulty")||"{}")||A[0]),n=Object(x.a)(e,2),a=n[0],i=n[1],r=Object(f.useState)(!1),o=Object(x.a)(r,2),u=o[0],s=o[1],c=Object(f.useState)(!1),l=Object(x.a)(c,2),d=l[0],h=l[1],b=function(e){i(e),localStorage.setItem("difficulty",JSON.stringify(e));var n=t.onChangeDifficulty;n&&n(e)};return Object(J.jsxs)(I,{children:[Object(J.jsx)(E,{onClick:function(){return s(!u)},children:"Difficulty"}),Object(J.jsx)(V,{onClick:function(){return s(!u)},children:u?A.map((function(t){return Object(J.jsx)(q,{onClick:function(){return b(t)},isValue:t.name===a.name,children:t.name},t.index)})):a.name}),Object(J.jsx)(M,{children:function(){for(var e=[],n=0;n<t.numberOfLives;n++)e.push(n);return e.map((function(t){return Object(J.jsx)(D,{src:"life.svg",alt:"life"},t)}))}()}),Object(J.jsxs)(L,{isPause:d,children:[" Music:",Object(J.jsx)(R,{onClick:function(){return h(!d),void t.onChangePause(d)},isPause:d,children:d?"Off":"On"})]})]})},K=n(5),Q=n(6),X=n(16),Z=n(15),$=Object(v.a)(j)(T||(T=Object(m.a)(["\n    display: flex;\n    justify-content: space-around;\n    @media "," { \n    flex-direction: column; \n    }\n"])),z.tablet),tt=v.a.div(B||(B=Object(m.a)(["\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n    display:flex;\n    flex-wrap: wrap;\n    width: 500px;\n    height: 500px;\n    margin-right: 0;\n    @media "," { \n    width: 400px;\n    height: 340px; \n    margin: auto;\n    }\n"])),z.tablet),et=v.a.div(P||(P=Object(m.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width: 30%;\n    border: 1px solid;\n    margin: 2px;\n"]))),nt=v.a.input(G||(G=Object(m.a)(["\n    font-family: 'Architects Daughter', cursive;\n    caret-color: transparent;\n    cursor: grab;\n    width: 30%;\n    margin: 2px auto;\n    text-align: center;\n    font-size: 34px;\n\n    border: 0px;\n    color:  ",";\n    font-weight: ","; \n    background: ","; \n    ","\n    &:hover {\n        opacity: 0.5;\n    }\n    &:focus{\n        opacity: 0.5;\n    }\n    @media "," { \n        font-size: 20px;\n        font-weight: ","; \n    }\n"])),(function(t){return t.isConst?"rgb(0, 0, 0)":"rgba(54, 54, 54, 1)"}),(function(t){return t.isConst?800:400}),(function(t){return t.isActive?"rgba(11, 92, 29, 0.34)":"rgba(213, 217, 214, 0.34)"}),(function(t){return t.isValue?"background: rgba(245, 123, 123, 0.42);":""}),z.tablet,(function(t){return t.isConst?400:200})),at=v.a.div(F||(F=Object(m.a)(["\ntext-align: center;\nwidth: 35%;\n@media "," { \n    width: 100%;\n    }\n"])),z.tablet),it=v.a.div(H||(H=Object(m.a)(["\nfont-family: 'Architects Daughter', cursive;\nfont-size: 40px;\npadding-top: 23px;\nheight: 80px;\ncolor: white;\nbackground-color: rgba(11,92,29,0.8);\ntext-align: center;\ncursor: pointer;\n:hover{\nopacity: 0.9;\n}\n@media "," { \n    height: 50px;\n    font-size: 25px;\n    }\n"])),z.tablet),rt=v.a.div(U||(U=Object(m.a)(["\ndisplay:flex;\nflex-wrap: wrap;\nbackground: rgba(255, 255, 255, 0.64);\n"]))),ot=v.a.div(W||(W=Object(m.a)(["\nfont-size: 30px;\n\nwidth: 33%;\ncursor: pointer;\n","\n\n:hover{\n    background: rgba(245, 123, 123, 0.42);\n}\n@media "," { \n    height: 50px;\n    width: 20%;\n    font-size: 20px;\n    }\n"])),(function(t){return t.isSelect?"background: rgba(245, 123, 123, 0.42);":""}),z.tablet),ut=v.a.img(Y||(Y=Object(m.a)(["\nwidth:50px;\n\ncursor: pointer;\n:hover{\n    opacity: 0.5;\n}\n@media "," { \n    width:40px;\n    }\n"])),z.tablet);var st,ct,lt=function(t){var e=[1,2,3,4,5,6,7,8,9],n=Object(f.useState)(0),a=Object(x.a)(n,2),i=a[0],r=a[1];return Object(J.jsxs)(at,{children:[Object(J.jsx)(it,{onClick:function(){return function(){var e=t.startNewGame;e&&e(!0),console.log("NEW GAME")}()},children:"New game"}),Object(J.jsx)(rt,{children:e.map((function(e,n){return Object(J.jsx)(ot,{isSelect:e===i,onClick:function(){return function(e){var n=i===e?0:e;r(n);var a=t.onChangeNumber;a&&a(n)}(e)},children:e},n)}))}),!t.isHistoryEmpty&&Object(J.jsx)(ut,{src:"back.png",alt:"back",width:"50px",onClick:function(){return function(e){var n=t.onChangekBack;n&&n()}()}})]})},dt=function(){function t(e,n,a,i){Object(K.a)(this,t),this.body=a||[],this.size=e,this.difficulty=n,this.history=i||[],a||this.create()}return Object(Q.a)(t,[{key:"hasEmptyCells",value:function(){for(var t=0;t<this.size*this.size;t++)if(""===this.body[t].defaultValue)return!0;return!1}},{key:"getRandomInt",value:function(t){return Math.floor(Math.random(t)*Math.floor(t))}},{key:"getColumn",value:function(t){return this.body.filter((function(e){return e.x===t}))}},{key:"getRow",value:function(t){return this.body.filter((function(e){return e.y===t}))}},{key:"getSquare",value:function(t){return this.body.filter((function(e){return e.square===t}))}},{key:"create",value:function(){this.createBase(),this.swap(),this.createNullCell()}},{key:"createNullCell",value:function(){for(var t=0;t<this.difficulty.amount;t++){var e=this.getRandomInt(this.size*this.size);null!==this.body[e].defaultValue?(this.body[e].defaultValue=this.body[e].value,this.body[e].isConst=!0):t--}}},{key:"swap",value:function(){for(var t=this.getRandomInt(30)+10,e=0;e<t;e++)this.swapRows(),this.swapColumn()}},{key:"findIndexToSwap",value:function(t){var e=this.getRandomInt(2)+1,n=this.body[t].square-1;return 3*n+2===t?t-e:3*n+1===t?0===e?t+1:t-1:3*n===t?t+e:t}},{key:"swapColumn",value:function(){for(var t=this.getRandomInt(8),e=this.findIndexToSwap(t),n=0;n<this.size;n++){var a=this.body[t+9*n].value;this.body[t+9*n].value=this.body[e+9*n].value,this.body[e+9*n].value=a}}},{key:"swapRows",value:function(){for(var t=this.getRandomInt(8),e=this.findIndexToSwap(t),n=0;n<this.size;n++){var a=this.body[9*t+n].value;this.body[9*t+n].value=this.body[9*e+n].value,this.body[9*e+n].value=a}}},{key:"createBase",value:function(){for(var t=0,e=0;e<this.size;e++)for(var n=0;n<this.size;n++){var a=Math.floor((e*Math.sqrt(this.size)+e/Math.sqrt(this.size)+n)%this.size+1);this.body.push({x:e,y:n,defaultValue:"",value:a,square:3*Math.floor(e/3)+Math.floor(n/3)+1,isConst:!1,index:t}),t++}}},{key:"setCell",value:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{x:t,y:e,value:n,square:3*Math.floor(t/3)+Math.floor(e/3)+1,isConst:a}}}]),t}(),ht=function(t){Object(X.a)(n,t);var e=Object(Z.a)(n);function n(t){var a;Object(K.a)(this,n),(a=e.call(this,t)).onChangekBack=function(){var t=a.state.sudoku;if(0!==t.history.length){var e=t.history.pop();t.body[e].defaultValue="",localStorage.setItem("sudoku",JSON.stringify(t)),a.setState({sudoku:t})}},a.handleChange=function(t){var e=a.state.sudoku,n=t.target.name,i=a.props.onError;if(!e.body[n].isConst){if(String(e.body[n].value)!==t.target.value)return e.body[n].defaultValue="",void(i&&i());e.body[n].defaultValue=e.body[n].value,e.history.push(n),localStorage.setItem("sudoku",JSON.stringify(e)),a.setState({activeElement:e.body[n],sudoku:e}),e.hasEmptyCells()||alert("YOU WON !!!")}},a.onClickToCell=function(t){var e=a.state,n=e.sudoku,i=e.selectNumber,r=t.target.name;t.target.value=i,a.setState({activeElement:n.body[r]}),0!==i&&a.handleChange(t)},a.onChangeNumber=function(t){var e=a.state.selectNumber;e=e===t?0:t,a.setState({selectNumber:e,activeElement:{x:-1,y:-1,defaultValue:0,value:"",square:0,isConst:!1}})},a.startNewGame=function(t){var e=a.state.sudoku,n=new dt(9,e.difficulty);a.setState({sudoku:n})},a.getTable=function(){var t=a.state.sudoku;if(t)return t.getRow(0).map((function(t){return Object(J.jsx)(et,{children:a.getSquare(t.x)},t.x)}))},a.getSquare=function(t){var e=a.state,n=e.sudoku,i=e.activeElement,r=e.selectNumber;return n.getSquare(t+1).map((function(t){return Object(J.jsx)(nt,{primary:t.square%2,isConst:t.isConst,isValue:r&&r===t.defaultValue||i.defaultValue&&t.defaultValue===i.defaultValue,isActive:i.x===t.x||i.y===t.y||i.square===t.square,value:t.defaultValue||"",name:t.index,maxLength:"1",onChange:a.handleChange,onClick:a.onClickToCell},t.index)}))};var i=JSON.parse(localStorage.getItem("sudoku")),r=new dt(9,localStorage.getItem("difficulty")||A[0],(null===i||void 0===i?void 0:i.body)||[],(null===i||void 0===i?void 0:i.history)||[]);return a.state={sudoku:r,activeElement:{x:-1,y:-1,defaultValue:0,value:"",square:0,isConst:!1},selectNumber:0},a}return Object(Q.a)(n,[{key:"componentDidUpdate",value:function(t){if(this.props.difficulty!==t.difficulty){var e=this.props.difficulty,n=new dt(9,e);localStorage.setItem("sudoku",JSON.stringify(n)),this.setState({sudoku:n})}}},{key:"render",value:function(){return Object(J.jsxs)($,{children:[Object(J.jsx)(tt,{children:this.getTable()}),Object(J.jsx)(lt,{startNewGame:this.startNewGame,onChangeNumber:this.onChangeNumber,onChangekBack:this.onChangekBack,isHistoryEmpty:0===this.state.sudoku.history.length})]})}}]),n}(b.a.Component),ft=Object(v.a)(j)(st||(st=Object(m.a)(["\n  position: absolute;\n  bottom: 0px;\n  height: 70px;\n  font-size: 40px;\n  font-weight: 800;\n  @media "," { \n    height: 50px;\n    }\n"])),z.tablet),bt=v.a.img(ct||(ct=Object(m.a)(["\n  height: 50px;\n  margin-right: 15px;\n  @media "," { \n    height: 30px;\n    }\n"])),z.tablet);var gt=function(){return Object(J.jsxs)(ft,{children:[Object(J.jsx)("a",{href:"https://rs.school/js/",children:Object(J.jsx)(bt,{src:"rs_school_js.svg",alt:"rs.school-logo"})}),Object(J.jsx)("a",{href:"https://github.com/DaryaSho",children:Object(J.jsx)(bt,{src:"github.svg",alt:"github-logo"})}),"2021"]})};var pt=function(){var t=Object(f.useState)(JSON.parse(localStorage.getItem("difficulty")||"{}")||A[0]),e=Object(x.a)(t,2),n=e[0],a=e[1],i=Object(f.useState)(3),r=Object(x.a)(i,2),o=r[0],u=r[1],s=Object(f.useState)(!1),c=Object(x.a)(s,2),l=c[0],d=c[1],h=Object(f.useState)(!1),b=Object(x.a)(h,2),g=(b[0],b[1]),p=Object(f.useState)(new Audio("melod.mp3")),m=Object(x.a)(p,2),v=m[0];return m[1],Object(J.jsxs)(y,{className:"App",children:[Object(J.jsx)(_,{onChangeDifficulty:function(t){a(t),u(3)},numberOfLives:o,onChangePause:function(t){g(t),t?v.pause():v.play()}}),!l&&Object(J.jsx)(ht,{difficulty:n,numberOfLives:o,onError:function(){u(--o),alert("".concat(o," lives left")),0===o&&(d(!0),alert("YOU LOSE!!!"))}}),Object(J.jsx)(gt,{})]})},xt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),r(t),o(t)}))};p.a.render(Object(J.jsx)(b.a.StrictMode,{children:Object(J.jsx)(pt,{})}),document.getElementById("root")),xt()}},[[27,1,2]]]);
//# sourceMappingURL=main.b02a34ce.chunk.js.map