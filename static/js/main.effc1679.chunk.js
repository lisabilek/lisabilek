(this.webpackJsonplisabilek=this.webpackJsonplisabilek||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},45:function(e,t,s){},54:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),c=s(9),n=s.n(c),l=(s(38),s(3)),r=s(4),o=s(6),j=s(5),b=(s(39),[{title:"Home",url:"Introduction",cName:"nav-links"},{title:"Projects",url:"Projects",cName:"nav-links"},{title:"Skills",url:"Skills",cName:"nav-links"},{title:"Timeline",url:"Timeline",cName:"nav-links"},{title:"Hobbies",url:"Hobbies",cName:"nav-links"},{title:"Contact",url:"Contact",cName:"nav-links"}]),d=s(26),m=s(17),u=(s(45),s(8)),g=s(0),O=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("nav",{className:"navbarItems",children:[Object(g.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(g.jsx)(d.a,{icon:this.state.clicked?m.b:m.a})}),Object(g.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:b.map((function(e,t){return Object(g.jsx)("li",{children:Object(g.jsx)(u.Link,{activeClass:"active",className:e.cName,to:e.url,spy:!0,smooth:!0,duration:500,children:e.title})},t)}))})]})}}]),s}(a.a.Component),p=s(31),h=s.n(p),v=s(32),x=s.n(v),f=s(27),k=s.n(f),N=s(29),y=s.n(N),C=s(30),w=s.n(C),_=(s(54),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"Footer",children:[Object(g.jsx)("div",{id:"left",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{className:"contact-element",children:[Object(g.jsx)(k.a,{style:{display:"inline-block",verticalAlign:"sub"},fontSize:"large"})," ",Object(g.jsx)("div",{className:"contact-text",children:" +33 7 52 54 06 32 "})]}),Object(g.jsxs)("li",{className:"contact-element",children:[Object(g.jsx)(y.a,{style:{display:"inline-block",verticalAlign:"sub"},fontSize:"large"})," ",Object(g.jsx)("div",{className:"contact-text",children:" bilek.lisa1@gmail.com "})]}),Object(g.jsxs)("li",{className:"contact-element",children:[Object(g.jsx)(w.a,{style:{display:"inline-block",verticalAlign:"sub"},fontSize:"large"})," ",Object(g.jsx)("div",{className:"contact-text",children:" Poitiers, France "})]})]})}),Object(g.jsxs)("div",{id:"right",children:[Object(g.jsx)("div",{className:"text-social",children:"Contact me"}),Object(g.jsxs)("div",{className:"social-media",children:[Object(g.jsx)("a",{href:"https://github.com/lisabilek",children:Object(g.jsx)(h.a,{fontSize:"large"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/lisa-bilek/",children:Object(g.jsx)(x.a,{fontSize:"large"})})]})]})]})}}]),s}(a.a.Component)),S=(s(58),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"timeline-tile",children:[Object(g.jsx)("div",{className:"date",children:this.props.date}),Object(g.jsx)("div",{className:"divider"}),Object(g.jsx)("div",{className:"place",children:this.props.place}),Object(g.jsx)("div",{className:"subject",children:this.props.subject})]})}}]),s}(a.a.Component)),P=(s(59),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"Timeline",children:[Object(g.jsx)("div",{className:"section-title",children:" Timeline "}),Object(g.jsxs)("ul",{className:"timeline-elements",children:[Object(g.jsx)(S,{date:"2021/2022 (Present)",place:"University of Poiters, France",subject:"Master's degree in computer science, specialized in software design and development"}),Object(g.jsx)(S,{date:"2020/2021",place:"University of Poiters, France",subject:"Bachelor's degree in computer science"}),Object(g.jsx)(S,{date:"2017/2020",place:"University of Tizi Ouzou, Algeria",subject:"Bachelor's degree in computer science"})]})]})}}]),s}(a.a.Component)),T=(s(60),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"skills-tile",children:[Object(g.jsx)("div",{className:"subject",children:this.props.subject}),Object(g.jsx)("div",{className:"divider"}),Object(g.jsx)("div",{className:"link",children:this.props.link}),Object(g.jsx)("div",{className:"image",children:Object(g.jsx)("img",{src:this.props.image,alt:this.props.alt})})]})}}]),s}(a.a.Component)),F=(s(61),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"Skills",children:[Object(g.jsx)("div",{className:"section-title",children:"Skills"}),Object(g.jsxs)("div",{className:"skills-elements",children:[Object(g.jsx)(T,{subject:"C++ Object Oriented programming ",image:"".concat("/lisabilek","/assets/images/c++.png"),alt:"c++_logo"}),Object(g.jsx)(T,{subject:"Application developement on Android Studio ",image:"".concat("/lisabilek","/assets/images/androids.png"),alt:"android_studio_logo"}),Object(g.jsx)(T,{subject:"Spring Boot backend web developement",image:"".concat("/lisabilek","/assets/images/spring.png"),alt:"spring_logo"}),Object(g.jsx)(T,{subject:"User Interface Design using Figma ",image:"".concat("/lisabilek","/assets/images/figma.png"),alt:"figma_logo"})]})]})}}]),s}(a.a.Component)),z=(s(62),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"hobbies-tile",children:Object(g.jsxs)("a",{href:this.props.link,children:[Object(g.jsx)("div",{className:"subject",children:this.props.subject}),Object(g.jsx)("div",{className:"divider"}),Object(g.jsx)("div",{className:"image",children:Object(g.jsx)("img",{src:this.props.image,alt:this.props.alt})})]})})}}]),s}(a.a.Component)),A=(s(63),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"Hobbies",children:[Object(g.jsx)("div",{className:"section-title",children:"Hobbies"}),Object(g.jsxs)("div",{className:"hobbies-elements",children:[Object(g.jsx)(z,{subject:"Nature photography, click to visit my instagram gallery",image:"".concat("/lisabilek","/assets/images/camera.png"),alt:"camera",link:"https://www.instagram.com/starrynight_618/"}),Object(g.jsx)(z,{subject:"Learning new languages",image:"".concat("/lisabilek","/assets/images/question.png"),alt:"question"}),Object(g.jsx)(z,{subject:"Reading thriller novels / writing short stories",image:"".concat("/lisabilek","/assets/images/book.png"),alt:"book"}),Object(g.jsx)(z,{subject:"Pastel and pencil drawing",image:"".concat("/lisabilek","/assets/images/drawing.png"),alt:"drawing"})]})]})}}]),s}(a.a.Component)),H=(s(64),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"projects-tile",children:[Object(g.jsx)("div",{className:"subject",children:this.props.subject}),Object(g.jsx)("div",{className:"divider"}),Object(g.jsx)("div",{className:"link",children:this.props.link}),Object(g.jsxs)("div",{className:"image",children:[Object(g.jsx)("img",{src:this.props.image,alt:this.props.alt}),Object(g.jsx)("img",{src:this.props.image2,alt:this.props.alt2}),Object(g.jsx)("img",{src:this.props.image3,alt:this.props.alt3})]})]})}}]),s}(a.a.Component)),E=(s(65),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"Projects",children:[Object(g.jsx)("div",{className:"section-title",children:"Projects"}),Object(g.jsxs)("ul",{className:"projects-elements",children:[Object(g.jsx)(H,{subject:"Creating this website, a react app to display my portfolio using github pages",image:"".concat("/lisabilek","/assets/images/github.png"),alt:"github_logo",image2:"".concat("/lisabilek","/assets/images/git.png"),alt2:"git_logo",image3:"".concat("/lisabilek","/assets/images/react.png"),alt3:"react_logo"}),Object(g.jsx)(H,{subject:"Creating a text adventure game and adapting it to a graphic user interface using Java and JavaFX",image:"".concat("/lisabilek","/assets/images/java.png"),alt:"java_logo",image2:"".concat("/lisabilek","/assets/images/javafx.png"),alt2:"javafx_logo",image3:"".concat("/lisabilek","/assets/images/scenebuilder.png"),alt3:"scenebuilder_logo"}),Object(g.jsx)(H,{subject:"Design and creation of a student planner website using HTML, CSS, PHP and an SQL database",image:"".concat("/lisabilek","/assets/images/html css.png"),alt:"html_css_logo",image2:"".concat("/lisabilek","/assets/images/php.png"),alt2:"php_logo",image3:"".concat("/lisabilek","/assets/images/mysql.png"),alt3:"mysql_logo"}),Object(g.jsx)(H,{subject:"Creation of a simple arcade mobile game using Unity and C#",image:"".concat("/lisabilek","/assets/images/unity.png"),alt:"unity_logo",image2:"".concat("/lisabilek","/assets/images/cs.png"),alt2:"c_sharp_logo",image3:"".concat("/lisabilek","/assets/images/android.png"),alt3:"android_logo"})]})]})}}]),s}(a.a.Component)),I=(s(66),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"Introduction",children:[Object(g.jsx)("div",{className:"section-title",children:"Welcome stranger!"}),Object(g.jsx)("div",{className:"intro-container",children:Object(g.jsx)("div",{className:"intro-image",children:Object(g.jsx)("img",{src:"".concat("/lisabilek","/assets/images/pcProfilePic.png"),alt:"profile"})})}),Object(g.jsx)("div",{className:"intro-container",children:Object(g.jsxs)("div",{className:"intro-text",children:["You've landed on my small corner of the internet! ",Object(g.jsx)("br",{}),"To get to know me better, just keep scolling or choose one of the sections in the menu bar to jump into it :)"]})})]})}}]),s}(a.a.Component)),L=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={visible:!0,activePage:"Introduction"},e}return Object(r.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"container-wrap",children:[Object(g.jsx)(O,{}),Object(g.jsxs)("div",{id:"main",children:[Object(g.jsx)(u.Element,{name:"Timeline",className:"element",children:Object(g.jsx)(I,{})}),Object(g.jsx)(u.Element,{name:"Projects",className:"element",children:Object(g.jsx)(E,{})}),Object(g.jsx)(u.Element,{name:"Skills",className:"element",children:Object(g.jsx)(F,{})}),Object(g.jsx)(u.Element,{name:"Timeline",className:"element",children:Object(g.jsx)(P,{})}),Object(g.jsx)(u.Element,{name:"Hobbies",className:"element",children:Object(g.jsx)(A,{})}),Object(g.jsx)(u.Element,{name:"Contact",className:"element",children:Object(g.jsx)(_,{})})]})]})}}]),s}(i.Component),B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,80)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),c(e),n(e)}))};n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),B()}},[[68,1,2]]]);
//# sourceMappingURL=main.effc1679.chunk.js.map