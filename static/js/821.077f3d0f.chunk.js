"use strict";(self.webpackChunkmaggie_rozell=self.webpackChunkmaggie_rozell||[]).push([[821],{6821:function(e,n,c){c.r(n),c.d(n,{Dicey:function(){return u},default:function(){return d}});var i=c(2982),t=c(885),r=c(2791),l=c(8014),s=c(184),o=function(e){var n=e.num;return 1===n?(0,s.jsx)(l.uPf,{}):2===n?(0,s.jsx)(l.f7D,{}):3===n?(0,s.jsx)(l.k3J,{}):4===n?(0,s.jsx)(l.bQe,{}):5===n?(0,s.jsx)(l.xfk,{}):(0,s.jsx)(l.BR6,{})},a=c(8820),u=function(e){var n=e.closeModal,c=e.openBtn,l=(0,r.useState)([]),u=(0,t.Z)(l,2),d=u[0],f=u[1],m=(0,r.useState)(!1),h=(0,t.Z)(m,2),x=h[0],j=h[1],C=(0,r.useRef)(null);(0,r.useEffect)((function(){C.current.getBoundingClientRect().bottom>=window.innerHeight-100&&j(!0)}),[d]);return(0,s.jsxs)("div",{className:"diceyContainer",children:[(0,s.jsx)("button",{className:"diceyCloseBtn",onClick:function(){n(!1),c(!0)},children:(0,s.jsx)(a.LHV,{})}),(0,s.jsx)("h1",{className:"diceGameH1",children:"Roll The Dice"}),(0,s.jsxs)("div",{className:"diceyBtnContainer",children:[(0,s.jsx)("button",{className:"newDie",onClick:function(){return function(){var e=Math.floor(6*Math.random())+1;f([].concat((0,i.Z)(d),[e]))}()},disabled:x,children:"New"}),(0,s.jsx)("button",{className:"rerollDie",onClick:function(){return function(){var e=d.map((function(){return Math.floor(6*Math.random())+1}));f(e)}()},children:"Reroll"}),(0,s.jsx)("button",{className:"sumDie",onClick:function(){return function(){var e=d.reduce((function(e,n){return e+n}));alert("The sum of all the dice is ".concat(e))}()},children:"Sum"})]}),(0,s.jsx)("p",{className:"diceyP",children:"DblClick on a die to remove it."}),(0,s.jsx)("div",{className:"diceContainerDiv",ref:C,children:(0,s.jsx)("ul",{className:"diceUl",children:d.map((function(e,n){return(0,s.jsx)("li",{className:"dice",onDoubleClick:function(){return function(e){var n=(0,i.Z)(d);n.splice(e,1),f(n)}(n)},children:(0,s.jsx)(o,{num:e})},n)}))})})]})},d=u}}]);
//# sourceMappingURL=821.077f3d0f.chunk.js.map