(this.webpackJsonppixabay=this.webpackJsonppixabay||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=a(2),s=a.n(l),m=a(5),i=a(1),u=function(e){var t=e.message;return c.a.createElement("p",{className:"my-3 p4 text-center alert alert-danger"},t)},b=function(e){var t=e.setSearch,a=Object(n.useState)(""),r=Object(i.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),b=m[0],f=m[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(f(!1),t(o)):f(!0)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"form-group col-md-8"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Search an image: football, coffee...",onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",{className:"form-group col-md-4"},c.a.createElement("input",{type:"submit",className:"btn btn-lg btn-danger btn-block",value:"Search"}))),b?c.a.createElement(u,{message:"You must fill in the search bar to search"}):null)},f=function(e){var t=e.image,a=t.largeImageURL,n=t.likes,r=t.previewURL,o=t.tags,l=t.views;return c.a.createElement("div",{className:" col-12 col-sm-6 col-md-4 col-lg-3 mb-4"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:r,alt:o,className:"card-img-top"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},n," Likes "),c.a.createElement("p",{className:"card-text"},l," Views ")),c.a.createElement("div",{className:"card-footer"},c.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-block"},"View Image")))},p=function(e){var t=e.images;return c.a.createElement("div",{className:"col-12 p-5 row"},t.map((function(e){return c.a.createElement(f,{key:e.id,image:e})})))};var d=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),u=l[0],f=l[1],d=Object(n.useState)(1),v=Object(i.a)(d,2),g=v[0],E=v[1],h=Object(n.useState)(1),N=Object(i.a)(h,2),j=N[0],w=N[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=2;break}return e.abrupt("return");case 2:return t=32,"17968933-8b9fd410c145a9f70c1b97c9f",n="https://pixabay.com/api/?key=".concat("17968933-8b9fd410c145a9f70c1b97c9f","&q=").concat(a,"&per_page=").concat(t,"&page=").concat(g),e.next=7,fetch(n);case 7:return c=e.sent,e.next=10,c.json();case 10:r=e.sent,f(r.hits),w(Math.ceil(r.totalHits/t)),document.querySelector(".jumbotron").scrollIntoView({behavior:"smooth"});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,g]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("p",{className:"lead text-center "},"Search Image"),c.a.createElement(b,{setSearch:r})),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement(p,{images:u}),1!==g?c.a.createElement("button",{type:"button",className:"btn btn-info mr1",onClick:function(){1!==g&&E(g-1)}},"\xab Previous"):null,g!==j?c.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){g!==j&&E(g+1)}},"Next \xbb"):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.1d51665c.chunk.js.map