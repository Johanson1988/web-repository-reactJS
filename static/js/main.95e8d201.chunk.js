(this["webpackJsonpportfolio-johann-moreno"]=this["webpackJsonpportfolio-johann-moreno"]||[]).push([[0],{30:function(e,t,a){e.exports=a(50)},35:function(e,t,a){},36:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),i=a.n(r),l=(a(35),a(1)),c=a(2),s=a(4),m=a(3),p=a(5),u=a(14),h=(a(36),a(27)),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.navbarItem,t=e.link,a=e.content;return o.a.createElement("li",{className:"navv__item",onClick:function(e){return document.body.classList.remove("nav-open")}},o.a.createElement(h.HashLink,{to:"/"+t,className:"nav__link"},a))}}]),t}(n.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("button",{className:"nav-toggle","aria-label":"toogle navigation",onClick:function(e){return document.body.classList.toggle("nav-open")}},o.a.createElement("span",{className:"hamburger"})),o.a.createElement("nav",{className:"nav"},o.a.createElement("ul",{className:"nav__list"},o.a.createElement(g,{navbarItem:{link:"#home",content:"Home"}}),o.a.createElement(g,{navbarItem:{link:"#services",content:"What I do"}}),o.a.createElement(g,{navbarItem:{link:"#about",content:"About me"}}),o.a.createElement(g,{navbarItem:{link:"#work",content:"My work"}}))))}}]),t}(n.Component),b=a(13),f=a(16),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.socialNetwork,t=e.link,a=e.iconClass,n=e.title,r=e.iconData;return console.log("Social:",this.props.socialNetwork),o.a.createElement("li",{className:"social-list__item"},t?o.a.createElement("a",{href:t,className:"social-list__link",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:a,title:n,"data-icon":r})):o.a.createElement("i",{className:a,title:n,"data-icon":r}))}}]),t}(n.Component),j=a(8),E=a.n(j),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.introDetails,t=e.title,a=e.subtitle,n=e.imgSrc,r=e.imgAlt,i=this.props.technologies;return o.a.createElement("section",{className:"intro",id:"home"},o.a.createElement("h1",{className:"section__title section__title--intro"},o.a.createElement("strong",null,t)),Array.isArray(a)?o.a.createElement("div",null,o.a.createElement("p",{className:"section__subtitle section__subtitle--intro"},"Technologies involved:"),o.a.createElement("ul",{className:"tech-list__intro"},i.map((function(e){return o.a.createElement(k,{key:E.a.generate(),socialNetwork:e})})))):o.a.createElement("p",{className:"section__subtitle section__subtitle--intro"},a),o.a.createElement("img",{src:n,alt:r,className:"intro__img"}))}}]),t}(n.Component),y=Object(f.b)(u.o,Object(b.b)((function(e,t){var a=t.match.params.handle;if(a){var n=e.works.find((function(e){return e.projectName===a}));return{introDetails:{title:n.projectName,subtitle:n.technologies,imgSrc:n.projectLogo,imgAlt:"logo "+n.projectName},technologies:e.technologies.filter((function(e){return n.technologies.includes(e.title)}))}}return{introDetails:e.introDetails}})))(v),_=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.service,t=e.title,a=e.paragraph,n=this.props.service.qualifications;return o.a.createElement("div",{className:"service"},o.a.createElement("h3",null,t),o.a.createElement("p",null,"Academic Qualifications"!==t?a:o.a.createElement("ul",{class:"academic"},n.map((function(e){return o.a.createElement("li",null,o.a.createElement("p",null,e.title),o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{class:"academic-logo",src:e.imgPath,alt:e.altDesc})))})))))}}]),t}(n.Component),N={title:"Current ocupation",paragraph:"Design an automation system for device testing in Barcelona\u2019s Orange\u2019s networks laboratory. We write scripts in TCL, using the iTest(Spirent Communications) IDE, to communicate with the devices involved via SSH, Telnet or WinRS and perform the test actions. Then, a software called Velocity (Spirent Communications) is responsible for executions, collect results and present the data to the final user."},w={title:"Academic Qualifications",qualifications:[{title:"Web Development Bootcamp",link:"https://www.ironhack.com/en/web-development",imgPath:"images/ironhack-logo.svg",altDesc:"Ironhack"},{title:"AS Degree in Computer Science",link:"https://www.uopeople.edu/programs/cs/",imgPath:"images/logo_uopeople.png",altDesc:"University of the People"}]},O={title:"Personal projects",paragraph:"Below, you can see detailed information about my personal projects using the MERN (Mongo + Express + React + Node) stack. After I have consolidated some of these projects as solid WebApps, my aim is to learn mobile development and create the mobile native version of each using React-Native or Flutter."},C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"my-services",id:"services"},o.a.createElement("h2",{className:"section__title section__title--services"},"What I do"),o.a.createElement("div",{className:"services"},o.a.createElement(_,{service:N}),o.a.createElement(_,{service:w}),o.a.createElement(_,{service:O})),o.a.createElement("a",{href:"#work",className:"btn"},"My Projects"))}}]),t}(n.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"about-me",id:"about"},o.a.createElement("h2",{className:"section__title section__title--about"},"Who I am"),o.a.createElement("p",{className:"section__subtitle section__subtitle--about"},"Full Stack Web Developer based out of Barcelona"),o.a.createElement("div",{className:"about-me__body"},o.a.createElement("p",null,"I have been always related to technology in all my jobs. From the guy who fix computer problems at the office, to IT support specialist. My first professional contact to coding was writing Excel Macros in VBA to automate office\u2019s tasks. Then, I started an online degree in ",o.a.createElement("a",{href:"https://www.uopeople.edu/programs/cs/",target:"_blank",rel:"noopener noreferrer"},"Computer Science at the University of the People.")),o.a.createElement("p",null,"After passing all courses, I decided to move to Barcelona. Then I took the ",o.a.createElement("a",{href:"https://www.ironhack.com/en/web-development",target:"_blank",rel:"noopener noreferrer"},"Ironhack Web development Bootcamp")," to kick off my career as a Junior web-dev. The project I am working on at the moment is about to conclude, and I am seeking for new opportunities as a Junior front-end or back-end web developer.")),o.a.createElement("img",{src:"images/mern-stack.png",alt:"MERN STACK",className:"about-me__img"}))}}]),t}(n.Component),S=a(12),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.work,t=e.projectName,a=e.imgSrc,n=e.color,r=this.props.technologies;return o.a.createElement(S.Link,{to:"projects/"+t,className:"portfolio__item"},o.a.createElement("h3",{className:"portfolio__title ".concat(n)},t),o.a.createElement("div",{className:"portfolio__logo ".concat(n)},o.a.createElement("ul",{className:"tech-list__work ".concat(n)},r.map((function(e){return o.a.createElement(k,{key:E.a.generate(),socialNetwork:e})})))),o.a.createElement("img",{src:a,alt:"",className:"portfolio__img"}))}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.works,a=e.technologies;return o.a.createElement("section",{className:"my-work",id:"work"},o.a.createElement("h2",{className:"section__title"},"My projects"),o.a.createElement("p",{className:"section__subtitle"},"Selection of my range of personal projects"),o.a.createElement("div",{className:"portfolio"},t.map((function(e){var t=a.filter((function(t){return e.technologies.includes(t.title)}));return o.a.createElement(D,{key:E.a.generate(),work:e,technologies:t})}))))}}]),t}(n.Component),I=Object(b.b)((function(e){return{works:e.works,technologies:e.technologies}}))(A),x=[{link:"mailto:johanndmoreno24@gmail.com",iconClass:"far fa-envelope",title:"Email",iconData:""},{link:"https://linkedin.com/in/johannmoreno/",iconClass:"fab fa-linkedin-in",title:"Linkedin",iconData:""},{link:"https://github.com/Johanson1988",iconClass:"fab fa-github",title:"Github",iconData:""},{link:"https://codewars.com/users/johanson88",iconClass:"iconify",title:"Codewars",iconData:"simple-icons:codewars"},{link:"https://twitter.com/JohannDMoreno",iconClass:"fab fa-twitter",title:"Twitter",iconData:""}],M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("ul",{className:"social-list"},x.map((function(e){return o.a.createElement(k,{key:E.a.generate(),socialNetwork:e})}))))}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(y,null),o.a.createElement(C,null),o.a.createElement(L,null),o.a.createElement(I,null),o.a.createElement(M,null))}}]),t}(n.Component),R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.details,t=e.projectDescription,a=e.implementedFeatures,n=e.upcomingFeatures,r=e.imgSrc,i=e.imgAlt,l=e.trelloLink,c=e.frontEndLink,s=e.backEndLink,m=e.slidesLink,p=e.deployLink,u=e.collaborators;return o.a.createElement("div",{className:"portfolio-item-individual"},o.a.createElement("h2",{className:"project__title"},"Project Description"),o.a.createElement("p",{className:"project__description"},t),o.a.createElement("img",{className:"project__img",src:r,alt:i}),o.a.createElement("h2",{className:"project__title"},"Implemented features"),o.a.createElement("ul",{className:"project-features__list"},a?a.map((function(e){return o.a.createElement("li",{className:"project-features__item",key:E.a.generate()},e)})):null),o.a.createElement("h2",{className:"project__title"},"Upcoming features"),o.a.createElement("ul",{className:"project-features__list"},n?n.map((function(e){return o.a.createElement("li",{className:"project-features__item",key:E.a.generate()},e)})):o.a.createElement("li",{className:"project-features__item",key:E.a.generate()},"This project is finished")),u?o.a.createElement("div",null,o.a.createElement("h2",{className:"project__title"},"Collaborators"),o.a.createElement("ul",{className:"social-list"},u.map((function(e){return o.a.createElement("li",{className:"project-features__item",key:E.a.generate()},o.a.createElement("a",{href:e.githubLink},e.name))})))):null,o.a.createElement("h2",{className:"project__title"},"Links"),o.a.createElement("ul",{className:"social-list"},l?o.a.createElement("li",{className:"social-list__item project__link"},o.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-trello"}),o.a.createElement("p",{className:"text-repo-link__project"},"Trello"))):null,c?o.a.createElement("li",{className:"social-list__item project__link"},o.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github"}),o.a.createElement("p",{className:"text-repo-link__project"},"Frontend Repository"))):null,s?o.a.createElement("li",{className:"social-list__item project__link"},o.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github"}),o.a.createElement("p",{className:"text-repo-link__project"},"Backend Repository"))):null,m?o.a.createElement("li",{className:"social-list__item project__link"},o.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"iconify","data-icon":"bx:bx-slideshow","data-inline":"false"}),o.a.createElement("p",{className:"text-repo-link__project"},"Slides"))):null,p?o.a.createElement("li",{className:"social-list__item project__link"},o.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"iconify","data-icon":"logos:deploy","data-inline":"false"}),o.a.createElement("p",{className:"text-repo-link__project"},"Deploy"))):null))}}]),t}(n.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.work;return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(y,null),o.a.createElement(R,{details:e}),o.a.createElement(M,null))}}]),t}(n.Component),P=Object(b.b)((function(e,t){var a=t.match.params.handle;return{work:e.works.find((function(e){return e.projectName===a}))}}))(J),B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u.g,null,o.a.createElement(u.d,{exact:!0,path:"/",component:T}),o.a.createElement(u.d,{path:"/projects/:handle",component:P})))}}]),t}(n.Component),F={works:[{projectName:"ironball",color:"white",projectLogo:"/images/ironball-logo.png",imgSrc:"/images/ironball.png",imgAlt:"Ball breaking bricks",frontEndLink:"https://github.com/Johanson1988/project-iron-ball",backEndLink:"https://github.com/Johanson1988/ironball-api",trelloLink:"https://trello.com/b/eZAaYGcE/ironball",slidesLink:"https://docs.google.com/presentation/d/18911Of3tFYTkDpowqfjsfx49ftPjA5s2Uun3vg8jmAc/edit#slide=id.g6aeb787dc0_1_69",deployLink:"https://johanson1988.github.io/project-iron-ball/",projectDescription:'This project is a clone of the Arkanoid game. Arkanoid (\u30a2\u30eb\u30ab\u30ce\u30a4\u30c9 Arukanoido) is an arcade game released by Taito in 1986. The player controls the "Vaus", a space vessel that acts as the game\'s "paddle" which prevents a ball from falling from the playing field, attempting to bounce it against a number of bricks. The ball striking a brick causes the brick to disappear. When all the bricks are gone, the player goes to the next level, where another pattern of bricks appears',technologies:["Canvas","JavaScript ES6","NodeJs","MongoDB","CSS3","Express"],implementedFeatures:["sounds","keyboard control","infinite levels","pause","local scoreboard","autopilot"],upcomingFeatures:["mouse control","touch support","global scoreboard","responsive design","android version","iphone version","use Machine Learning to generate new levels","use machine learning to improve autopilot"],collaborators:null},{projectName:"epicplanner",color:"blue",projectLogo:"/images/epicplanner-logo.png",imgSrc:"/images/epicplanner.png",imgAlt:"Map showing an epic plan",frontEndLink:"https://github.com/Johanson1988/epic-planner",backEndLink:null,trelloLink:"https://trello.com/b/pawm0XYn/epic-planner",slidesLink:null,deployLink:"https://epic-planner.herokuapp.com/",projectDescription:"Epic planner is a urban micro-planner that allows you to create a legendary route in Barcelona on a specific day and area. Its features include an array of leisure options located in the desired area: concerts, cultural events, cafes and bars, with links to MeetUp event pages for more information.",technologies:["NodeJs","HBS","Google Maps API","Google Calendar API","MongoDB","CSS3","Express"],implementedFeatures:["Create your own dayplan","get events from Google Calendar","User autentication","View your plan in Google Maps","check bars and restaurants in your day plan area"],upcomingFeatures:["This project was part of a course, now is being redesigned from scratch using react"],collaborators:[{name:"Nuria Lopez",githubLink:"https://github.com/nurlopez"}]},{projectName:"project canary",color:"red",projectLogo:"/images/canary-logo.png",imgSrc:"/images/canary.png",imgAlt:"question with multianswer from the game",frontEndLink:"https://github.com/Falconairio/project-canary-frontend",backEndLink:"https://github.com/Johanson1988/project-canary",trelloLink:null,slidesLink:"https://docs.google.com/presentation/d/1vBcvZXhEdjzxD4XFTRFLVY-nSdr45eOb44Z1lwOhRo4/edit",deployLink:"https://iron-canary.herokuapp.com/home",projectDescription:"This is a live multiplayer game to prove the tech skills and knowledge gained during the bootcamp. A registered user will be able to create a game, select a field, UX, data or webdev, or even the three of them. Then, anonymous players will be able to join the game using a QR code.",technologies:["NodeJs","React","SocketIO","QRCode","MongoDB","CSS3","Express"],implementedFeatures:["User autentication","Create games for people to join","Games are created with random questions from categories you select","Join via game-specific QR Code using your phone camera","Add questions to the pool via the homescreen","Scores are shown in a leaderboard","Responsive"],upcomingFeatures:null,collaborators:[{name:" Griffith Terry",githubLink:"https://github.com/Falconairio"}]},{projectName:"web portfolio",color:"red",projectLogo:"/images/jm-logo.PNG",imgSrc:"/images/web-portfolio-logo.png",imgAlt:"JM Logo",frontEndLink:"https://github.com/Johanson1988/web-repository-reactJS",backEndLink:null,trelloLink:null,slidesLink:null,deployLink:null,projectDescription:"My web porftfolio to present my professional and personal projects. In the future it might become a template where the user can customise color and data and use it for their own portfolios.",technologies:["React","CSS3","Redux"],implementedFeatures:["General Info Page","Projects View","Animated Navbar"],upcomingFeatures:["Add Styled Components","Create an Editor to edit information from the website"],collaborators:[{name:"Nuria Lopez",githubLink:"https://github.com/nurlopez"}]},{projectName:"Epic Planner v2",color:"blue",projectLogo:"/images/epicplanner-logo.png",imgSrc:"/images/EpicPlannerCover-1.jpg",imgAlt:"question with multianswer from the game",frontEndLink:"https://github.com/Johanson1988/epic-planner-v2-react",backEndLink:"https://github.com/nurlopez/epic-planner-v2-nodejs",trelloLink:"https://trello.com/b/R3ox3u8A/epic-planner-v20",slidesLink:null,deployLink:null,projectDescription:"Epic planner is a urban micro-planner that allows you to create a legendary route in Barcelona on a specific day and area. This is an improved version of the previous project using React instead of HBS",technologies:["React","NodeJs","Google Maps API","Google Calendar API","MongoDB","CSS3","Express","Redux"],implementedFeatures:["DayPlan backend endpoints","Dayplan Reducer"],upcomingFeatures:["Events coming from different sources","Google Maps integration","Event chat support","Social Media functions"],collaborators:null},{projectName:"Envite online",color:"red",projectLogo:"/images/envite-logo.png",imgSrc:"/images/envite.png",imgAlt:"envite board wireframe",frontEndLink:"https://github.com/OscarTrujillo/envite-fe",backEndLink:"https://github.com/Johanson1988/envite-restAPI",trelloLink:"https://trello.com/b/6l3fd10L/envite",slidesLink:null,deployLink:null,projectDescription:"Multiplayer online version of the game Envite.",technologies:["React","NodeJs","SocketIO","MongoDB","CSS3","Express","Redux"],implementedFeatures:["User Auth","Chat","Socket auth","Card shuffling"],upcomingFeatures:[" play game","audio chat","tournaments","User stats","CPU Players"],collaborators:[{name:"Oscar Trujillo",githubLink:"https://github.com/OscarTrujillo"}]}],technologies:[{link:null,title:"NodeJs",iconClass:"fab fa-node-js"},{link:null,title:"JavaScript ES6",iconClass:"fab fa-js-square"},{link:null,title:"MongoDB",iconClass:"iconify",iconData:"cib:mongodb"},{link:null,title:"HBS",iconClass:"iconify",iconData:"logos:handlebars"},{link:null,title:"React",iconClass:"fab fa-react"},{link:null,title:"SocketIO",iconClass:"iconify",iconData:"cib:socket-io"},{link:null,title:"QRCode",iconClass:"iconify",iconData:"ion:qr-code-sharp"},{link:null,title:"Google Maps API",iconClass:"iconify",iconData:"mdi:google-maps"},{link:null,title:"Google Calendar API",iconClass:"iconify",iconData:"logos:google-calendar"},{link:null,title:"Canvas",iconClass:"iconify",iconData:"whh:canvas"},{link:null,title:"CSS3",iconClass:"fab fa-css3-alt"},{link:null,title:"Express",iconClass:"iconify",iconData:"logos:express"},{link:null,title:"Redux",iconClass:"iconify",iconData:"bx:bxl-redux"}],introDetails:{title:"Johann Moreno",subtitle:"fullstack dev",imgSrc:"./images/profile.jpg",imgAlt:"My profile picture"}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;arguments.length>1&&arguments[1];return e},U=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),W=Object(u.o)(U),q=Object(f.c)(G);i.a.render(o.a.createElement(b.a,{store:q},o.a.createElement(S.BrowserRouter,null,o.a.createElement(W,null,o.a.createElement(B,null)))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.95e8d201.chunk.js.map