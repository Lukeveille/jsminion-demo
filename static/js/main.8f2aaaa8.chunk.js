(this.webpackJsonpjsminion=this.webpackJsonpjsminion||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"value":1,"cycle":"buy"},{"value":2,"cycle":"buy"},{"value":3,"cycle":"buy"}]')},function(e){e.exports=JSON.parse('[{"value":"a","cycle":"action"},{"value":"b","cycle":"action"},{"value":"c","cycle":"action"}]')},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),i=n.n(o),r=(n(14),n(1)),l=n(2),u=function(e){for(var t,n,a=Object(r.a)(e),c=a.length;0!==c;)n=Math.floor(Math.random()*c),t=a[c-=1],a[c]=a[n],a[n]=t;return a},s=function(e){return c.a.createElement("div",{className:"card-front",style:{backgroundColor:e.state[e.index]?"buy"===e.state[e.index].cycle?"#dd0":"#ccc":"#fff",cursor:e.state[e.index]?"pointer":"default"},onClick:e.onClick},e.state[e.index]?e.state[e.index].value:"","\xa0")},d=n(7),f=n(8);n(15);var m=function(){var e=Object(a.useState)("draw"),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(u(function(){for(var e=[],t=0;t<8;t++)e.push(d[0]);return f.forEach((function(t){e.push(t)})),e}())),m=Object(l.a)(i,2),v=m[0],b=m[1],h=Object(a.useState)([]),y=Object(l.a)(h,2),p=y[0],j=y[1],O=Object(a.useState)([]),k=Object(l.a)(O,2),E=k[0],g=k[1],w=Object(a.useState)([]),x=Object(l.a)(w,2),N=x[0],S=x[1],C=function(e,t,n,a){for(var o=[],i=function(i){o.push(c.a.createElement(s,{key:"card".concat(i+1),index:i,state:e,onClick:function(){J(e[i],e,t,n,a)}}))},r=0;r<5;r++)i(r);return o},J=function(e,t,a,c,o){if(e&&n===e.cycle){var i=Object(r.a)(t),l=i.findIndex((function(t){return t===e}));i.splice(l,1),a(i),c([].concat(Object(r.a)(o),[e]))}},B=function(e){var t=N.concat(E);e&&(t=t.concat(p),j([])),S(t),g([])};return c.a.createElement("div",{className:"App"},c.a.createElement("h3",null,n," phase"),c.a.createElement("div",null,c.a.createElement("button",{disabled:"draw"===n,onClick:function(){"action"===n?(B(),o("buy")):"buy"===n&&(B(!0),o("draw"))}},"buy"===n?"Buy":"Play Action")),c.a.createElement("div",{className:"hand in-play"},C(E,g,j,p)),c.a.createElement("div",{className:"deck",onClick:function(){if("draw"===n){var e=Object(r.a)(v),t=e.splice(0,5);if(v.length>5)b(e);else if(v.length>0){var a=u(N);S([]),console.log(a),t=t.concat(a.splice(0,5-t.length)),b(a)}var c=t.map((function(e){return"action"===e.cycle})).includes(!0);o(c?"action":"buy"),j(t)}}},v.length),c.a.createElement("div",{className:"hand"},C(p,j,g,E)),c.a.createElement("div",{className:"deck",onClick:function(){}},N.length))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8f2aaaa8.chunk.js.map