(this["webpackJsonpliiu-dev"]=this["webpackJsonpliiu-dev"]||[]).push([[0],{12:function(e,n,t){e.exports={background:"App_background__3CDGK",container:"App_container__1MQN3","contents-container":"App_contents-container__1l57U"}},15:function(e,n,t){e.exports={navigation:"navigation-menu_navigation__1IUZf","current-page":"navigation-menu_current-page__32qFp"}},18:function(e,n,t){e.exports={icon:"home_icon__3OWln",name:"home_name__1duu6","noise-anim-2":"home_noise-anim-2__19vf5","noise-anim":"home_noise-anim__1QSCP"}},32:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(1),r=t.n(c),i=t(20),s=t.n(i),o=(t(32),t(12)),l=t.n(o),j=t(11),u=t(2),b=t(21),m=t(22),h=t(26),x=t(24),d=t(25),O=t(15),p=t.n(O);function _(e){return Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/"+e.linkTo,className:e.isCurrentPage?p.a["current-page"]:"",onClick:e.onClick,children:e.name})})}var v=[{name:"HOME",linkTo:""},{name:"ABOUT ME",linkTo:"about-me"},{name:"LINKS",linkTo:"links"},{name:"PROJECTS",linkTo:"projects"},{name:"LIKES",linkTo:"likes"},{name:"EXTRA",linkTo:"extra"}];function f(){var e,n=function(){var e=window.location.pathname.split("/");return e[e.length-1]}(),t=new Map,a=Object(d.a)(v);try{for(a.s();!(e=a.n()).done;){var c=e.value;t.set(c.linkTo,c.name)}}catch(i){a.e(i)}finally{a.f()}var r=t.get(n);if(void 0===r)throw new Error("\u30da\u30fc\u30b8\u306e\u5b9a\u7fa9\u304c\u306a\u3044\u3067\u3059");return r}var k=function(e){Object(h.a)(t,e);var n=Object(x.a)(t);function t(e){var a;return Object(b.a)(this,t),(a=n.call(this,e)).state=void 0,a.state={pages:v,currentPageName:f()},a}return Object(m.a)(t,[{key:"clickNavLink",value:function(e){this.setState({currentPageName:e.name})}},{key:"render",value:function(){var e=this,n=this.state.pages.map((function(n){return Object(a.jsx)(_,{isCurrentPage:e.state.currentPageName===n.name,name:n.name,linkTo:n.linkTo,onClick:function(){return e.setState({currentPageName:n.name})}},n.name)}));return Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{className:p.a.navigation,children:n})})}}]),t}(r.a.Component),g=t(18),N=t.n(g),T=t(8),w=t.n(T),y=t.p+"static/media/icon.931927ff.png";function I(){var e="LIIU";return Object(a.jsxs)("div",{className:w.a.container,children:[Object(a.jsx)("img",{className:N.a.icon,src:y,alt:"icon"}),Object(a.jsx)("div",{className:N.a.name,"data-text":e,children:e})]})}var P=t(6),S=t.n(P);function C(){return Object(a.jsx)("article",{className:w.a.container,children:Object(a.jsxs)("section",{className:S.a["card-container"],children:[Object(a.jsx)("h1",{className:S.a.title,children:"ABOUT ME"}),Object(a.jsxs)("p",{className:S.a.contents,children:["ybrliiu / mp0liiu \u3068\u3044\u3046ID\u3067\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u3067\u6d3b\u52d5\u3092\u3057\u3066\u3044\u307e\u3059\u3002",Object(a.jsx)("br",{}),"\u6771\u4eac\u306eIT\u7cfb\u306e\u4f1a\u793e\u3067\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30a8\u30f3\u30b8\u30cb\u30a2\u3092\u3057\u3066\u3044\u307e\u3059\u3002",Object(a.jsx)("br",{}),"\u4ed5\u4e8b\u3067\u306fWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3092\u3044\u3058\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002",Object(a.jsx)("br",{}),"\u597d\u304d\u306a\u8a00\u8a9e\u306f Perl \u3068 TypeScript \u3067\u3059\u3002",Object(a.jsx)("br",{}),"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068\u304b\u306b\u8208\u5473\u304c\u3042\u308a\u307e\u3059\u3002",Object(a.jsx)("br",{})]})]})})}function A(){var e=[{name:"Twitter",url:"https://twitter.com/_ybrliiu"},{name:"Github",url:"https://github.com/ybrliiu"},{name:"Blog",url:"https://mp0liiu.hatenablog.com/"},{name:"Scrapbox",url:"https://scrapbox.io/ybrliiu-worklog/"},{name:"Speaker Deck",url:"https://speakerdeck.com/ybrliiu"},{name:"CPAN",url:"https://metacpan.org/author/MPOLIIU"}].map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.name})})}));return Object(a.jsx)("article",{className:w.a.container,children:Object(a.jsxs)("section",{className:S.a["card-container"],children:[Object(a.jsx)("h1",{className:S.a.title,children:"LINKS"}),Object(a.jsx)("ul",{className:S.a.contents,children:e})]})})}function E(){return Object(a.jsx)("article",{className:w.a.container,children:Object(a.jsxs)("section",{className:S.a["card-container"],children:[Object(a.jsx)("h1",{className:S.a.title,children:"\u5de5\u4e8b\u4e2d\uff01"}),Object(a.jsx)("p",{className:S.a.contents,children:"\u6c17\u304c\u5411\u3044\u305f\u3089\u66f8\u304d\u307e\u3059..."})]})})}var M=function(){return Object(a.jsxs)(j.a,{children:[Object(a.jsx)("div",{className:l.a.background}),Object(a.jsxs)("div",{className:l.a.container,children:[Object(a.jsx)(k,{}),Object(a.jsx)(u.c,{children:Object(a.jsxs)("div",{className:l.a["contents-container"],children:[Object(a.jsx)(u.a,{path:"/",exact:!0,children:Object(a.jsx)(I,{})}),Object(a.jsx)(u.a,{path:"/about-me",exact:!0,children:Object(a.jsx)(C,{})}),Object(a.jsx)(u.a,{path:"/links",exact:!0,children:Object(a.jsx)(A,{})}),Object(a.jsx)(u.a,{path:"/projects",exact:!0,children:Object(a.jsx)(E,{})}),Object(a.jsx)(u.a,{path:"/likes",exact:!0,children:Object(a.jsx)(E,{})}),Object(a.jsx)(u.a,{path:"/extra",exact:!0,children:Object(a.jsx)(E,{})})]})})]})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root"))},6:function(e,n,t){e.exports={"card-container":"card_card-container__jofdp",title:"card_title__iXwM9",contents:"card_contents__bAN_O"}},8:function(e,n,t){e.exports={container:"contents-container_container__x5uh8"}}},[[38,1,2]]]);
//# sourceMappingURL=main.abccc413.chunk.js.map