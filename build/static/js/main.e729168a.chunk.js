(this.webpackJsonppsatt=this.webpackJsonppsatt||[]).push([[0],{101:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},126:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(56),c=a.n(s),r=(a(94),a(95),a(11)),o=a(4),l=a(140),d=a(12),j=(a(96),a.p+"static/media/Web Dev Resume.eac0911a.pdf"),b=a(139),m=a.p+"static/media/logo.df31dbca.svg",h=a.p+"static/media/menu.62f9a425.svg",p=(a(97),a(2));var u=function(){var e=Object(o.e)().pathname;return Object(p.jsxs)("div",{className:"miniNavContainer",children:[Object(p.jsx)(r.b,{className:"/"===e?"miniNavActive":"miniNavLink",to:"/",children:"Home"}),Object(p.jsx)(r.b,{className:"/about"===e?"miniNavActive":"miniNavLink",to:"/about",children:"About"}),Object(p.jsx)(r.b,{className:"/mywork"===e?"miniNavActive":"miniNavLink",to:"/mywork",children:"My Work"}),Object(p.jsx)(r.b,{className:"/contact"===e?"miniNavActive":"miniNavLink",to:"/contact",children:"Contact"}),Object(p.jsx)("a",{className:"miniNavLink",href:j,target:"_blank",rel:"noreferrer",children:"Resume"})]})};var x=function(){var e=Object(o.e)().pathname,t=Object(i.useState)(!1),a=Object(d.a)(t,2),n=a[0],s=a[1];return Object(p.jsxs)("div",{className:"mainNavContainer",children:[Object(p.jsxs)(b.a.div,{className:"nav",exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("img",{src:m,alt:""})}),Object(p.jsxs)("div",{className:"menu",children:[Object(p.jsx)(r.b,{to:"/mywork",children:Object(p.jsx)(b.a.button,{className:"navButton",whileHover:{scale:1.06},whileTap:{scale:.95},children:"See My Work"})}),Object(p.jsx)("button",{className:"hamburgerMenuContainer",onClick:function(){return s(!n)},children:Object(p.jsx)("img",{src:h,alt:"menu"})})]}),Object(p.jsxs)("div",{className:"navContainer",children:[Object(p.jsx)(r.b,{className:"/"===e?"active":"",to:"/",children:"Home"}),Object(p.jsx)(r.b,{className:"/about"===e?"active":"",to:"/about",children:"About"}),Object(p.jsx)(r.b,{className:"/mywork"===e?"active":"",to:"/mywork",children:"My Work"}),Object(p.jsx)(r.b,{className:"/contact"===e?"active":"",to:"/contact",children:"Contact"}),Object(p.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:"Resume"})]})]}),Object(p.jsx)(l.a,{initial:!0,exitBeforeEnter:!0,children:Object(p.jsx)(b.a.div,{variants:{hidden:{y:"-100vh"},visible:{y:"0",opacity:1,transition:{duration:.9,type:"spring",damping:25,stiffness:500}},exit:{y:"-100vh"}},initial:"hidden",animate:"visible",exit:"exit",children:n&&Object(p.jsx)(u,{})})})]})},g=(a(99),a.p+"static/media/blob.a20d0ca2.svg");var O=function(){return document.body.style="\n        background-image: url(".concat(g,"); \n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 120vh;\n    "),Object(p.jsx)(b.a.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},className:"bg",children:Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)("h1",{children:"Welcome!"}),Object(p.jsx)("h4",{children:"My name is Parker. I'm an engineer, founder, and web developer based in Birmingham"}),Object(p.jsx)(r.b,{to:"/mywork",children:Object(p.jsx)(b.a.button,{className:"myWorkButton",whileHover:{scale:1.06},whileTap:{scale:.95},children:"See My Work \ud83d\udc49\ud83c\udffb"})})]})})},v=a(3),f=a(49),y=a.n(f),k=a(72),N=(a(101),a.p+"static/media/blob.6a63517d.svg"),w=a(86),I=a.n(w);var C=function(){document.body.style="\n        background-image: url(".concat(N,"); \n        background-repeat: no-repeat;\n        background-position: top 120% left -250px;\n        background-size: 160vh;\n    ");var e="https://submit-form.com/".concat("9oEYMWJB"),t=Object(i.useState)({name:"",email:"",message:""}),a=Object(d.a)(t,2),n=a[0],s=a[1],c=function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(!0),e.next=4,r();case 4:h(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var t=Object(k.a)(y.a.mark((function t(){var a,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:n.name,email:n.email,message:n.message},t.prev=1,t.next=4,I.a.post(e,a);case 4:i=t.sent,console.log(i),O({text:"Thanks for the message!",color:"red"}),s({name:"",email:"",message:""}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0),O({text:"Something went wrong. Please try again.",color:"green"});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),o=function(e){var t=e.target,a=t.id,i=t.value,c=a,r=Object(v.a)({},n);r[c]=i,s(r)},l=Object(i.useState)(!1),j=Object(d.a)(l,2),m=j[0],h=j[1],u=Object(i.useState)({text:"",color:""}),x=Object(d.a)(u,2),g=x[0],O=x[1];return Object(p.jsx)(b.a.div,{className:"contact",exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},children:Object(p.jsx)("form",{className:"formContainer",children:Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"form",onSubmit:c,children:[Object(p.jsx)("h4",{children:"Hit me up!"}),Object(p.jsx)("div",{className:"linkContainer",children:Object(p.jsx)("div",{className:"links",children:Object(p.jsxs)("div",{className:"linksList",children:[Object(p.jsx)("a",{class:"fa fa-github",href:"https://github.com/parkersatterfield",target:"_blank",rel:"noreferrer",children:" "}),Object(p.jsx)("a",{class:"fa fa-linkedin",href:"https://www.linkedin.com/in/parker-satterfield-22313b160/",target:"_blank",rel:"noreferrer",children:" "}),Object(p.jsx)("a",{class:"fa fa-instagram",href:"https://www.instagram.com/parker_satterfield/",target:"_blank",rel:"noreferrer",children:" "})]})})}),g&&Object(p.jsx)("div",{className:"message ".concat(g.color),children:g.text}),Object(p.jsxs)("div",{className:"singles",children:[Object(p.jsxs)("div",{className:"singleInput",children:[Object(p.jsx)("label",{children:"Email"}),Object(p.jsx)("input",{id:"email",type:"email",value:n.email,onChange:o})]}),Object(p.jsxs)("div",{className:"singleInput",children:[Object(p.jsx)("label",{children:"Name"}),Object(p.jsx)("input",{id:"name",type:"text",value:n.name,onChange:o})]})]}),Object(p.jsxs)("div",{className:"multi",children:[Object(p.jsx)("label",{children:"Message"}),Object(p.jsx)("textarea",{id:"message",type:"text",value:n.message,onChange:o}),Object(p.jsx)("div",{className:"buttonContainer",children:Object(p.jsx)("button",{className:"submitButton",disabled:m||""===n.message||""===n.name||""===n.email,onClick:c,children:m?"Submitting...":"Submit"})})]})]})})})})};a(119),a(120);var M=function(e){return Object(p.jsx)("div",{className:"project",children:Object(p.jsx)("a",{href:e.projectLink,target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{id:"example",src:e.projectImage,alt:e.projectName})})})},S=a.p+"static/media/CMS.8ed01e8e.png",P=a.p+"static/media/Reloc8.06c093ed.png",A=a.p+"static/media/Weather.fcf4b1ea.png",W=a.p+"static/media/Dibs.bc36eb14.png";a.p;var L=function(){return document.body.style='\n    background-image: ""; ',Object(p.jsx)(b.a.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},className:"mainContainer",children:Object(p.jsxs)("div",{className:"projectContainer",children:[Object(p.jsxs)("div",{className:"flexRow",children:[Object(p.jsx)(M,{projectLink:"https://parkersatterfield.github.io/Project-1/",projectImage:P,projectName:"Reloc8"}),Object(p.jsxs)("div",{className:"desc",children:[Object(p.jsx)("h4",{children:"Reloc8"}),Object(p.jsx)("p",{children:"Reloc8 was the first project that we did for bootcamp. As a team, we wanted to put together 2 APIs and throw them together in an app. Originally, we wanted to use the Zillow API and the Monster API to allow for users to search a job and then receive housing results based on the job location, but we were having some issued with both the Monster and Zillow public API keys. We ended up going with the Yelp API and hard coding a list of jobs"})]})]}),Object(p.jsxs)("div",{className:"flexRow switch",children:[Object(p.jsx)(M,{projectLink:"https://dibsfunding.com/",projectImage:W,projectName:"Dibs"}),Object(p.jsxs)("div",{className:"desc",children:[Object(p.jsx)("h4",{children:"Dibs"}),Object(p.jsx)("p",{children:"While working at my first job out of school, I decided I wanted to pursue a startup project that my friend and I had been working on for a little while. Without knowing anything about web design, I decided to try and learn how to code and build an MVP using bubble.io. Dibs is an online social networking and seed funding platform for early stage startups. "})]})]}),Object(p.jsxs)("div",{className:"flexRow",children:[Object(p.jsx)(M,{projectLink:"https://parkersatterfield.github.io/Weather-Dashboard/",projectImage:A,projectName:"Weather App"}),Object(p.jsxs)("div",{className:"desc",children:[Object(p.jsx)("h4",{children:"Wether Dashboard"}),Object(p.jsx)("p",{children:"Building a weather app is a right of passage for front end developers. This was one of the first bootcamp assignments. We were given an image of what it was supposed to look like and the API it was supposed to use and told to build it."})]})]}),Object(p.jsxs)("div",{className:"flexRow switch",children:[Object(p.jsx)(M,{projectLink:"https://github.com/parkersatterfield/Employee-Tracker-CMS",projectImage:S,projectName:"Employee Tracker CMS"}),Object(p.jsxs)("div",{className:"desc",children:[Object(p.jsx)("h4",{children:"Employee Tracker CMS"}),Object(p.jsx)("p",{children:"Here is another bootcamp assignment. This was my first Node.js terminal app. It utilizes MySQL and Node. In the future, I'd like to build a deployed front end for this as a little SaaS project. "})]})]})]})})},D=(a(121),a(134),a.p+"static/media/blob.6a63517d.svg"),R=a.p+"static/media/headshot.3138cb27.jpg",B=a(87),T=a(89),E=(a(126),a(141)),H=a.p+"static/media/image1.ac3a6326.jpg",_=a.p+"static/media/image2.b32949d6.jpg",z=a.p+"static/media/image3.7c83cf12.jpg",F=a.p+"static/media/image4.3354d47b.jpg",J=a.p+"static/media/image5.a6e93325.JPG",V=a.p+"static/media/image6.a7bcf188.jpg",Y=a(66);var Z=function(){var e=Object(E.a)(),t=Object(Y.a)(),a=t.ref,n=t.inView;Object(i.useEffect)((function(){n&&e.start("visible"),n||e.start("hidden")}),[e,n]);var s={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return Object(p.jsx)(b.a.div,{ref:a,variants:{hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.3}}},className:"container",initial:"hidden",animate:e,exit:"exit",transition:{duration:1,ease:[.43,.13,.23,.96]},children:Object(p.jsx)("div",{className:"flexContainer",children:Object(p.jsxs)("div",{className:"galleryContainer",children:[Object(p.jsx)(b.a.img,{variants:s,className:"gallery",src:_,alt:"Picture of Me"}),Object(p.jsx)(b.a.img,{variants:s,className:"gallery",src:H,alt:"Picture of Me"}),Object(p.jsx)(b.a.img,{variants:s,className:"gallery",src:z,alt:"Picture of Me"}),Object(p.jsx)(b.a.img,{variants:s,className:"gallery",src:F,alt:"Picture of Me"}),Object(p.jsx)(b.a.img,{variants:s,className:"gallery",src:J,alt:"Picture of Me"}),Object(p.jsx)(b.a.img,{variants:s,className:"gallery",src:V,alt:"Picture of Me"})]})})})},G=a(88);var Q=function(){return document.body.style="\n        background-image: url(".concat(D,"); \n        background-repeat: no-repeat;\n        background-position: right -250px  top 120%;\n        background-size: 120vh;\n    "),Object(p.jsxs)(b.a.div,{className:"bio",exit:{opacity:0},variants:{hidden:{y:"-100vh",opacity:0},visible:{y:"0"},exit:{y:"-100vh",opacity:0}},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},children:[Object(p.jsxs)("div",{className:"aboutmemain",children:[Object(p.jsx)("h4",{children:"Parker Satterfield "}),Object(p.jsx)("h5",{children:"Founder, Dibs"}),Object(p.jsxs)("div",{className:"bioContainer",children:[Object(p.jsx)("img",{src:R,alt:"Headshot"}),Object(p.jsx)("p",{children:"I graduated from Auburn University in 2019 with a degree in biological systems engineering and a minor in business. After a short stent as an engineering consultant at a firm in Atlanta, I left to start my own company, Dibs. Dibs is a social media and seed funding platform for early stage startup companies to share their experiences, network, and raise money. Working on Dibs is where I was first exposed to web development, and I've been learning ever since. I am currently seeking a position as a junior engineer, so I can hone my skills and work on some cool projects. "})]}),Object(p.jsx)(G.Link,{to:"moreAbout",spy:!0,smooth:!0,children:Object(p.jsxs)("div",{className:"seemore",children:[Object(p.jsx)("p",{children:"See More!"}),Object(p.jsx)(B.a,{icon:T.a,size:"2x",className:"arrow"})]})})]}),Object(p.jsx)("div",{id:"moreAbout",children:Object(p.jsx)(Z,{})})]})};var U=function(){return Object(p.jsx)(r.a,{basename:"/",children:Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{initial:!0,exitBeforeEnter:!0,children:[Object(p.jsx)(b.a.div,{className:"main",exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:Object(p.jsx)(x,{className:"nav"})}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",element:Object(p.jsx)(O,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/about",element:Object(p.jsx)(Q,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/mywork",element:Object(p.jsx)(L,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/contact",element:Object(p.jsx)(C,{})})]})]})})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root")),q()},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.e729168a.chunk.js.map