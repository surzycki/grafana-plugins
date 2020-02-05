define(["react","@grafana/data","@grafana/ui"],(function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(1),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function a(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var u=n(0),l=n.n(u),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){return l.a.createElement("input",{type:"text",name:"generic"})},e}(l.a.Component),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){return l.a.createElement("button",null,"Hello Button")},e}(l.a.Component),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Form"),l.a.createElement(c,null),l.a.createElement("br",null),l.a.createElement(p,null))},e}(l.a.Component),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){var t=this.props,e=t.options,n=t.data,r=t.width,o=t.height;return l.a.createElement("div",{style:{position:"relative",width:r,height:o}},l.a.createElement("svg",{style:{position:"absolute",top:0,left:0},width:r,height:o,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-"+r/2+" -"+o/2+" "+r+" "+o},l.a.createElement("g",null,l.a.createElement("circle",{style:{fill:"#FF00FF"},r:160}))),l.a.createElement("div",{style:{position:"absolute",bottom:0,left:0,padding:"10px"}},l.a.createElement("div",null,"Count: ",n.series.length),l.a.createElement("div",null,e.text),l.a.createElement(s,null),l.a.createElement("img",{src:"assets/images/nova-c.jpg"})))},e}(u.PureComponent),d=n(2),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onTextChanged=function(t){var n=t.target;e.props.onOptionsChange(i(i({},e.props.options),{text:n.value}))},e}return a(e,t),e.prototype.render=function(){var t=this.props.options;return l.a.createElement("div",{className:"section gf-form-group"},l.a.createElement("h5",{className:"section-heading"},"Display"),l.a.createElement(d.FormField,{label:"Text",labelWidth:5,inputWidth:20,type:"text",onChange:this.onTextChanged,value:t.text||""}))},e}(u.PureComponent);n.d(e,"plugin",(function(){return m}));var m=new r.PanelPlugin(f).setDefaults({text:"The default text!"}).setEditor(h)}])}));