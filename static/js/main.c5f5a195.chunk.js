(this.webpackJsonpdemochat=this.webpackJsonpdemochat||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(27),i=c.n(n),r=(c(49),c(50),c(20)),j=(c(51),c(40)),l=c.n(j),o=c(80),m=c(39),d=c.n(m),h=c(42).a.initializeApp({apiKey:"AIzaSyB-Ck6HpcBnKqopFf6cK6E1QRpmiTYW8V8",authDomain:"demochat-84888.firebaseapp.com",projectId:"demochat-84888",storageBucket:"demochat-84888.appspot.com",messagingSenderId:"1074685355553",appId:"1:1074685355553:web:b453762bc8165fe5d1e560",measurementId:"G-Z1SWRF74TN"}).firestore(),b=c(24),x=c(5);var p=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){h.collection("contact").onSnapshot((function(e){s(e.docs.map((function(e){return e.data()})))}))}),[]),Object(x.jsxs)("div",{className:"contacts__container",children:[Object(x.jsxs)("div",{className:"contact__head",children:[Object(x.jsxs)("div",{style:{display:"flex"},children:[Object(x.jsx)(b.b,{to:"/",children:Object(x.jsx)(d.a,{fontSize:"large",style:{color:"white"}})}),Object(x.jsx)("h2",{style:{marginTop:"0px",marginLeft:"5px"},className:"head__title",children:"DemoChat"})]}),Object(x.jsxs)("div",{className:"search__box",children:[Object(x.jsx)("input",{type:"text",placeholder:" Search...",className:"search"}),Object(x.jsx)("button",{className:"search__button",children:Object(x.jsx)(l.a,{})})]})]}),Object(x.jsx)("div",{className:"contact__list",children:c.map((function(e){return Object(x.jsxs)("div",{className:"list__item",children:[Object(x.jsx)(b.b,{to:"/chat",children:Object(x.jsx)(o.a,{src:e.url})}),Object(x.jsx)("h3",{className:"item__name",children:e.name}),Object(x.jsx)("p",{className:"item__time",children:e.time})]},e.name)}))})]})},_=c(21),u=(c(65),c(41)),O=c.n(u);var g=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([{name:"Mark",message:"Hello!",image:""}]),i=Object(r.a)(n,2),j=i[0],l=i[1];return Object(x.jsxs)("div",{className:"chats__container",children:[Object(x.jsxs)("div",{className:"avatar_box",children:[Object(x.jsxs)("div",{className:"avatar__container",children:[Object(x.jsx)(o.a,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"}),Object(x.jsx)("h3",{className:"name",children:"Mark"})]}),Object(x.jsx)("p",{className:"active",children:"Active an hour ago"})]}),Object(x.jsx)("div",{className:"chat__screen",children:j.map((function(e){return e.name?Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"chatScreen__message",children:Object(x.jsx)("p",{className:"chatScreen__textUser",children:e.message})}),Object(x.jsxs)("div",{className:"chatScreen__message",children:[Object(x.jsx)(o.a,{className:"chatScreen__image",src:e.image,alt:e.name}),Object(x.jsx)("p",{className:"chatScreen__text",children:e.message})]})]}):Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"chatScreen__message",children:Object(x.jsx)("p",{className:"chatScreen__textUser",children:e.message})})})}))}),Object(x.jsxs)("div",{className:"input__field",children:[Object(x.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},type:"text",placeholder:"Type your message...",className:"input__message"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),l([].concat(Object(_.a)(j),[{message:c}])),s(""),setTimeout((function(){l([].concat(Object(_.a)(j),[{name:"Akash",message:c}])),s("")}),400)},type:"submit",className:"input__button",children:Object(x.jsx)(O.a,{style:{color:"white"},fontSize:"large"})})]})]})},f=c(9);var v=function(){return Object(x.jsx)("div",{className:"homepage",children:Object(x.jsx)(b.a,{children:Object(x.jsxs)(f.c,{children:[Object(x.jsxs)(f.a,{path:"/chat",children:[Object(x.jsx)(p,{}),Object(x.jsx)(g,{})]}),Object(x.jsx)(f.a,{path:"/profile"}),Object(x.jsxs)(f.a,{path:"/",children:[Object(x.jsx)(p,{}),Object(x.jsx)("div",{className:"home__text"})]})]})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root")),N()}},[[67,1,2]]]);
//# sourceMappingURL=main.c5f5a195.chunk.js.map