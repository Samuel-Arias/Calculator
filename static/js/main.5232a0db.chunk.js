(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{14:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return switchBotones}));var switchBotones=function switchBotones(numOperacion,setNumOperacion,resultado,setResultado,name,value){switch(value){case"C":setNumOperacion(""),setResultado("");break;case"DEL":setNumOperacion(numOperacion.slice(0,-1));break;case"=":try{setResultado(eval(numOperacion))}catch(err){setResultado("Error")}break;case"x":case"/":case"-":case"+":""===resultado?setNumOperacion(numOperacion.concat(name)):(setResultado(""),setNumOperacion(resultado+name));break;default:setResultado(""),setNumOperacion(numOperacion.concat(name))}}},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a,c,r,o,s,u,i,l=n(1),j=n(10),b=n.n(j),d=n(4),x=n(3),O=n(2),p={white:"#FFFFFF",black:"#000000",lessWhite:"#DDDDDD",lessBlack:"#222222"},m=O.a.div(a||(a=Object(x.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: ",";\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])),(function(e){return"light"===e.tema?p.white:"#111111"})),h=O.a.div(c||(c=Object(x.a)(["\n    width: min-content;\n    padding: 15px 10px 18px;\n    background-color: ",";\n    border-radius: 10px;\n"])),(function(e){return"light"===e.tema?p.lessBlack:p.white})),v=O.a.button(r||(r=Object(x.a)(["\n    border-radius :",";\n    width: 100%;\n    height: 100%;\n    border: none;\n    outline: none;\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n    box-shadow: 5px 5px 10px -3px #000000;\n\n    grid-column: ",";\n    \n    &:active {\n        background-color: ",";\n    }\n"])),(function(e){var t=e.col;return t?"30px":t?void 0:"50%"}),(function(e){return"light"===e.tema?p.white:p.lessBlack}),(function(e){return"light"===e.tema?p.black:p.white}),(function(e){if("2"===e.col)return"span 2"}),(function(e){return"light"===e.tema?"#CCCCCC":"#111111"})),g=O.a.input(o||(o=Object(x.a)(["\n    width: 100%;\n    height: 40px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n    cursor: default;\n    font-size: 1.5rem;\n    text-align: ",";\n\n    &::placeholder {\n        font-size: 1.5rem;\n    }\n"])),(function(e){return e.alignEnd?"end":"start"})),f=O.a.button(s||(s=Object(x.a)(["\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    border: none;\n    outline: none;\n    background: transparent;\n    cursor: pointer;\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"]))),w=n(0),C=Object(l.createContext)(),k=function(e){var t=e.children,n=Object(l.useState)("light"),a=Object(d.a)(n,2),c=a[0],r=a[1],o={Boton:v,Input:g,Calcu:h,ContDiv:m,tema:c,setTema:r};return Object(w.jsx)(C.Provider,{value:o,children:t})},_=C,F=n(9),y=n(15),D=Object(l.createContext)(),B=function(e){var t=e.children,n=Object(l.useState)(""),a=Object(d.a)(n,2),c=a[0],r=a[1],o=Object(l.useState)(""),s=Object(d.a)(o,2),u={numOperacion:c,setNumOperacion:r,resultado:s[0],setResultado:s[1]};return Object(w.jsx)(D.Provider,{value:u,children:t})},N=D,R=n(14),E=["value","name"],I=function(e){var t=e.value,n=e.name,a=Object(y.a)(e,E),c=Object(l.useContext)(N),r=c.numOperacion,o=c.setNumOperacion,s=c.resultado,u=c.setResultado,i=Object(l.useContext)(_),j=i.tema,b=i.Boton;return Object(w.jsx)(b,Object(F.a)(Object(F.a)({onClick:function(e){Object(R.a)(r,o,s,u,n,t)},tema:j},a),{},{children:t}))},S=O.a.div(u||(u=Object(x.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 60px);\n    grid-template-rows: repeat(5, 60px);\n    grid-gap: 5px;\n    margin-top: 10px;\n"]))),L=function(){return Object(w.jsxs)(S,{children:[Object(w.jsx)(I,{col:"2",value:"C"}),Object(w.jsx)(I,{value:"DEL"}),Object(w.jsx)(I,{name:"/",value:"/"}),Object(w.jsx)(I,{name:"7",value:"7"}),Object(w.jsx)(I,{name:"8",value:"8"}),Object(w.jsx)(I,{name:"9",value:"9"}),Object(w.jsx)(I,{name:"*",value:"x"}),Object(w.jsx)(I,{name:"4",value:"4"}),Object(w.jsx)(I,{name:"5",value:"5"}),Object(w.jsx)(I,{name:"6",value:"6"}),Object(w.jsx)(I,{name:"-",value:"-"}),Object(w.jsx)(I,{name:"1",value:"1"}),Object(w.jsx)(I,{name:"2",value:"2"}),Object(w.jsx)(I,{name:"3",value:"3"}),Object(w.jsx)(I,{name:"+",value:"+"}),Object(w.jsx)(I,{name:"0",value:"0"}),Object(w.jsx)(I,{name:".",value:"."}),Object(w.jsx)(I,{col:"2",value:"="})]})},T=function(){var e=Object(l.useContext)(N).numOperacion,t=Object(l.useContext)(_).Input;return Object(w.jsx)(t,{type:"text",placeholder:"\xa1Calcula!",value:e,readOnly:!0})},q=function(){var e=Object(l.useContext)(N).resultado,t=Object(l.useContext)(_).Input;return Object(w.jsx)(t,{type:"text",placeholder:"0",readOnly:!0,alignEnd:!0,value:e})},z=O.a.div(i||(i=Object(x.a)(["\n    width: 100%;\n    height: 100px;\n    background-color: #FFFFFF;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px 2px #0003;\n    padding: 0 5px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"]))),J=function(){return Object(w.jsxs)(z,{children:[Object(w.jsx)(T,{}),Object(w.jsx)(q,{})]})},P=function(){var e=Object(l.useContext)(_),t=e.tema,n=e.Calcu;return Object(w.jsxs)(n,{tema:t,children:[Object(w.jsx)(J,{}),Object(w.jsx)(L,{})]})},A=(n(25),function(e){var t=e.children,n=Object(l.useContext)(_),a=n.tema,c=n.ContDiv;n.setTema;return Object(w.jsx)(c,{tema:a,children:t})}),W=n.p+"static/media/moon.5c99433b.svg",G=n.p+"static/media/sun.7c810cd4.svg",H=function(){var e=Object(l.useContext)(_),t=e.tema,n=e.setTema;return Object(w.jsx)(f,{onClick:function(){n("light"===t?"dark":"light")},children:"light"===t?Object(w.jsx)("img",{src:W,alt:"Luna tema"}):Object(w.jsx)("img",{src:G,alt:"Sol tema"})})},K=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(B,{children:Object(w.jsx)(k,{children:Object(w.jsxs)(A,{children:[Object(w.jsx)(P,{}),Object(w.jsx)(H,{})]})})})})};b.a.render(Object(w.jsx)(K,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5232a0db.chunk.js.map