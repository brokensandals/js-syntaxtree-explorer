(this["webpackJsonpjs-syntaxtree-explorer"]=this["webpackJsonpjs-syntaxtree-explorer"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),l=n.n(o),i=(n(17),n(18),n(6)),h=n(7),d=n(10),s=n(8),c=n(1),u=n(11);n(19),n(20);function g(e){return null==e||"object"!==typeof e?[]:Array.isArray(e)?e.flatMap(g):e.type?[e]:Object.keys(e).flatMap((function(t){return g(e[t])}))}function f(e){var t=e.highlightedNodeId,n=e.node,a=e.source,o=e.onHighlightedNodeChange,l=n.range[0],i=[],h=!0,d=!1,s=void 0;try{for(var c,u=function(e){return Object.keys(e).flatMap((function(t){return g(e[t])}))}(n)[Symbol.iterator]();!(h=(c=u.next()).done);h=!0){var m=c.value;l<m.range[0]&&i.push(a.slice(l,m.range[0])),i.push(r.a.createElement(f,{key:m.astId,highlightedNodeId:t,node:m,source:a,onHighlightedNodeChange:o})),l=m.range[1]}}catch(p){d=!0,s=p}finally{try{h||null==u.return||u.return()}finally{if(d)throw s}}l<n.range[1]&&i.push(a.slice(l,n.range[1]));var y=n.astId===t?"highlighted":"";return r.a.createElement("span",{className:y,onMouseOver:function(e){o(n.astId),e.stopPropagation()}},i)}var m=function(e){var t=e.ast,n=e.highlightedNodeId,a=e.source,o=e.onHighlightedNodeChange;return r.a.createElement("pre",{className:"annotated-source",onMouseLeave:function(){return o(null)}},r.a.createElement("code",null,r.a.createElement(f,{highlightedNodeId:n,node:t,source:a,onHighlightedNodeChange:o})))},y=n(2),p=n(3);n(21);function v(e){var t=e.object,n=e.highlightedNodeId,a=e.onHighlightedNodeChange,o=t.astId,l=void 0===o?null:o,i=t.type,h=void 0===i?null:i,d=t.range,s=void 0===d?null:d,c=Object(p.a)(t,["astId","type","range"]),u=h?r.a.createElement("span",{className:"type"},h):null,g=s?r.a.createElement("span",{className:"range"},s[0],"-",s[1]):null,f=[];for(var m in c){var N=t[m];Array.isArray(N)?f.push([1,m,r.a.createElement("ol",null,N.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(v,{object:e,highlightedNodeId:n,onHighlightedNodeChange:a}))})))]):"object"===typeof N&&null!=N?f.push([1,m,r.a.createElement(v,{object:N,highlightedNodeId:n,onHighlightedNodeChange:a})]):f.push([0,m,r.a.createElement("span",{className:"primitive"},JSON.stringify(N))])}f.sort();var b=null==l?null:function(e){a(l),e.stopPropagation()},E=["ast-object",l&&l===n?"highlighted":null].join(" ");return r.a.createElement("div",{className:E,onMouseOver:b},u," ",g,r.a.createElement("dl",null,f.map((function(e,t){var n=Object(y.a)(e,3),a=(n[0],n[1]),o=n[2];return[r.a.createElement("dt",{key:"k"+t},a),r.a.createElement("dd",{key:"v"+t},o)]}))))}var N=function(e){var t=e.ast,n=e.highlightedNodeId,a=e.onHighlightedNodeChange;return r.a.createElement("div",{className:"syntax-tree",onMouseLeave:function(){return a(null)}},r.a.createElement(v,{object:t,highlightedNodeId:n,onHighlightedNodeChange:a}))};n(22);function b(e){var t=e.object,n=e.highlightedNodeId,a=e.depth,o=e.onHighlightedNodeChange;if("object"!==typeof t||null==t||void 0===t)return r.a.createElement("span",{className:"primitive"},JSON.stringify(t));if(Array.isArray(t)){if(0===t.length)return"[]";var l=["["],i=a+1,h=!0,d=!1,s=void 0;try{for(var c,u=t.entries()[Symbol.iterator]();!(h=(c=u.next()).done);h=!0){var g=c.value,f=Object(y.a)(g,2),m=f[0],v=f[1];l.push("\n"+"  ".repeat(i)),l.push(r.a.createElement(b,{object:v,highlightedNodeId:n,depth:i,onHighlightedNodeChange:o,key:m})),m<t.length-1&&l.push(",")}}catch(B){d=!0,s=B}finally{try{h||null==u.return||u.return()}finally{if(d)throw s}}return l.push("\n"+"  ".repeat(a)+"]"),l}var N=t.astId,E=void 0===N?null:N,j=Object(p.a)(t,["astId"]),C=Object.keys(j);if(0===C.length)return["{}"];var I=["{"],S=a+1,H=!0,k=!1,O=void 0;try{for(var x,w=C.entries()[Symbol.iterator]();!(H=(x=w.next()).done);H=!0){var M=x.value,A=Object(y.a)(M,2),T=A[0],J=A[1];I.push("\n"+"  ".repeat(S)),I.push(JSON.stringify(J)+": "),I.push(r.a.createElement(b,{object:t[J],highlightedNodeId:n,depth:S,onHighlightedNodeChange:o,key:T})),T<C.length-1&&I.push(",")}}catch(B){k=!0,O=B}finally{try{H||null==w.return||w.return()}finally{if(k)throw O}}I.push("\n"+"  ".repeat(a)+"}");var P=null==E?null:function(e){o(E),e.stopPropagation()},L=E&&E===n?"highlighted":"";return r.a.createElement("span",{className:L,onMouseOver:P},I)}var E=function(e){var t=e.ast,n=e.highlightedNodeId,a=e.onHighlightedNodeChange;return r.a.createElement("pre",{className:"json-syntax-tree",onMouseLeave:function(){return a(null)}},r.a.createElement("code",null,r.a.createElement(b,{object:t,highlightedNodeId:n,depth:0,onHighlightedNodeChange:a})))};var j=function(e){var t=e.ast,n=e.highlightedNodeId,a=e.source,o=e.treeStyle,l=e.onHighlightedNodeChange,i=e.onSourceChange,h=e.onTreeStyleChange;return r.a.createElement("div",{className:"ast-explorer"},r.a.createElement("textarea",{className:"source-entry",value:a,onChange:function(e){return i(e.target.value)}}),r.a.createElement(m,{ast:t,highlightedNodeId:n,source:a,onHighlightedNodeChange:l}),r.a.createElement("button",{className:"change-tree-style",onClick:function(){return h("json"===o?"styled":"json")}},"json"===o?"switch to styled view":"switch to json view"),"json"===o?r.a.createElement(E,{ast:t,highlightedNodeId:n,onHighlightedNodeChange:l}):r.a.createElement(N,{ast:t,highlightedNodeId:n,onHighlightedNodeChange:l}))},C=n(9);function I(e){try{return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{nextId:1};if("object"!==typeof t||null==t)return t;if(Array.isArray(t))return t.map((function(t){return e(t,n)}));var a={};for(var r in t.type&&(a.astId=n.nextId++),t)a[r]=e(t[r],n);return a}(C.parseModule(e,{comment:!0,range:!0}))}catch(t){return{type:"ParseError",message:t.message,astId:1,range:[0,e.length]}}}function S(e){return{source:e,ast:I(e)}}var H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(s.a)(t).call(this,e))).state=S(e.defaultSource),n.state.highlightedNodeId=null,n.state.treeStyle=e.defaultTreeStyle||"styled",n.handleHighlightedNodeChange=n.handleHighlightedNodeChange.bind(Object(c.a)(n)),n.handleSourceChange=n.handleSourceChange.bind(Object(c.a)(n)),n.handleTreeStyleChange=n.handleTreeStyleChange.bind(Object(c.a)(n)),n}return Object(u.a)(t,e),Object(h.a)(t,[{key:"handleHighlightedNodeChange",value:function(e){this.setState({highlightedNodeId:e})}},{key:"handleSourceChange",value:function(e){this.setState(S(e))}},{key:"handleTreeStyleChange",value:function(e){this.setState({treeStyle:e})}},{key:"render",value:function(){return r.a.createElement(j,{ast:this.state.ast,highlightedNodeId:this.state.highlightedNodeId,source:this.state.source,treeStyle:this.state.treeStyle,onHighlightedNodeChange:this.handleHighlightedNodeChange,onSourceChange:this.handleSourceChange,onTreeStyleChange:this.handleTreeStyleChange})}}]),t}(r.a.Component),k="function fib(n) {\n  if (n == 0 || n == 1) {\n    return n;\n  }\n  return fib(n - 2) + fib(n - 1);\n}";var O=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(H,{defaultSource:k}),r.a.createElement("div",{className:"blurb"},"created by ",r.a.createElement("a",{href:"https://brokensandals.net"},"brokensandals")," | source code on ",r.a.createElement("a",{href:"https://github.com/brokensandals/js-syntaxtree-explorer"},"github")," | built using ",r.a.createElement("a",{href:"https://esprima.org"},"esprima")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.70dbd2fb.chunk.js.map