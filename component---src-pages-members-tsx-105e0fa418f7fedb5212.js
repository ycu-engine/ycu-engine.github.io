(self.webpackChunkore_ore_gatsbyjs_template=self.webpackChunkore_ore_gatsbyjs_template||[]).push([[652],{3901:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});var a=n(9756),r=n(5950),i=n(5444),l=n(7294),m=n(4506),o=function(e){var t=e.memberName,n=e.size,o=(0,a.Z)(e,["memberName","size"]),c=(0,i.useStaticQuery)("1717575382"),s=l.useMemo((function(){var e=c.allFile.nodes.find((function(e){return e.name===t}));if(e)return e;var n=c.allFile.nodes.find((function(e){return"default"===e.name}));if(n)return n;throw Error("Default Image not found")}),[t,c]),u=l.useMemo((function(){var e=s[n];if(!e)throw Error("Image can't resolved");return e}),[s,n]);return l.createElement(i.Link,{to:"/members/"+t},l.createElement(m.f,Object.assign({},o,{file:u,alt:t+"のアイコン",width:r.N[n],height:r.N[n]})))}},3882:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var a=n(9756),r=n(5950),i=n(5444),l=n(7294),m=n(4506),o=function(e){var t=e.teamName,n=e.size,o=e.className,c=(0,a.Z)(e,["teamName","size","className"]),s=(0,i.useStaticQuery)("906268290"),u=l.useMemo((function(){var e=s.svgs.nodes.find((function(e){return e.name===t}));if(e)return e;var a=s.images.nodes.find((function(e){return e.name===t}));if(a)return a[n];var r=s.images.nodes.find((function(e){return"default"===e.name}));if(r)return r[n];throw Error("Default Image not found")}),[t,s,n]),d=l.useMemo((function(){if(u)return u;throw Error("image is "+u)}),[u]);return l.createElement(i.Link,{to:"/teams/"+t,className:o},l.createElement(m.f,Object.assign({},c,{file:d,alt:t+"のアイコン",width:r.N[n],height:r.N[n]})))}},1917:function(e,t,n){"use strict";n.d(t,{H:function(){return m}});var a=n(9499),r=n(5444),i=n(7294),l=n(5414),m=function(e){var t,n,m=e.title,o=e.image,c=e.lang,s=e.description,u=e.keywords,d=(0,r.useStaticQuery)("1080184343").site,f=(0,a.useLocation)().pathname,v=(0,i.useMemo)((function(){var e,t,n,a,r,i;return{title:m,description:s||(null==d||null===(e=d.siteMetadata)||void 0===e?void 0:e.defaultDescription),image:""+(null==d||null===(t=d.siteMetadata)||void 0===t?void 0:t.siteUrl)+(o||(null==d||null===(n=d.siteMetadata)||void 0===n?void 0:n.defaultImage))+"?"+Math.random().toFixed(5),lang:c||"ja",url:""+(null==d||null===(a=d.siteMetadata)||void 0===a?void 0:a.siteUrl)+f,keywords:((null==d||null===(r=d.siteMetadata)||void 0===r?void 0:r.keywords)||[]).concat((null==u||null===(i=u.filter)||void 0===i?void 0:i.call(u,(function(e){return!!e})))||[])}}),[d,m,s,o,c,u,f]);return i.createElement(l.q,{titleTemplate:(null==d||null===(t=d.siteMetadata)||void 0===t?void 0:t.titleTemplate)||void 0},i.createElement("title",null,v.title),i.createElement("html",{lang:v.lang}),i.createElement("meta",{name:"description",content:v.description||void 0}),i.createElement("meta",{name:"image",content:v.image}),i.createElement("meta",{name:"keywords",content:v.keywords.join(",")}),i.createElement("meta",{property:"og:url",content:v.url}),i.createElement("meta",{property:"og:type",content:"article"}),i.createElement("meta",{property:"og:title",content:v.title||void 0}),i.createElement("meta",{property:"og:description",content:v.description||void 0}),i.createElement("meta",{property:"og:image",content:v.image}),i.createElement("meta",{name:"twitter:card",content:"summary"}),i.createElement("meta",{name:"twitter:site",content:(null==d||null===(n=d.siteMetadata)||void 0===n?void 0:n.twitterUsername)||void 0}),i.createElement("meta",{name:"twitter:title",content:v.title||void 0}),i.createElement("meta",{name:"twitter:description",content:v.description||void 0}),i.createElement("meta",{name:"twitter:image",content:v.image}))}},5950:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var a={xxs:16,xs:24,sm:32,md:48,lg:64,xl:128}},5841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(9756),r=n(5444),i=n(7294),l=n(4506),m=function(e){var t=e.pageName,n=(0,a.Z)(e,["pageName"]),m=(0,r.useStaticQuery)("4204291425"),o=i.useMemo((function(){var e=m.allFile.nodes.find((function(e){return e.name===t+"-header"}));if(null!=e&&e.childImageSharp)return e.childImageSharp;throw Error("Image site/"+t+"-header.{png,jpeg...} not found!")}),[m,t]);return i.createElement(l.f,Object.assign({},n,{file:o.gatsbyImageData,alt:""}))},o=n(3901),c=n(3882),s=function(e){var t=e.member;return i.createElement("div",{className:"flex"},i.createElement("div",{className:"flex justify-center items-center p-3"},i.createElement(o.g,{className:"rounded-full",memberName:t.name,size:"lg"})),i.createElement("div",{className:"flex flex-col p-3 pl-4"},i.createElement("div",{className:"text-lg"},i.createElement(r.Link,{to:"/members/"+t.name},t.nameJa," ▷")),i.createElement("div",{className:"flex flex-row"},t.teams?t.teams.map((function(e){return i.createElement(c.W,{className:"mr-1",key:e.id,teamName:e.team.name,size:"sm"})})):null)))},u=n(1917),d=function(e){var t=e.tabs,n=e.items,a=e.children,r=i.useState(t[0]),l=r[0],m=r[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"flex flex-row"},t.map((function(e){return i.createElement("button",{key:e,className:"flex-grow-0 px-8 py-2 text-lg border rounded-t focus:outline-none hover:bg-accent "+(e===l?"border-b-0":""),onClick:function(){return m(e)}},e)})),i.createElement("div",{className:"flex-grow border-b"})),i.createElement("div",{className:"border border-t-0 rounded-b",style:{minHeight:100}},t.map((function(e){return i.createElement("div",{key:e,className:"divide-y-2 "+(e!==l?"hidden":"")},n[e].map((function(e,t){return a(e,t)})))}))))},f=n(8902),v=function(e){var t=e.data;return i.createElement(i.Fragment,null,i.createElement(u.H,{title:"メンバー"}),i.createElement("div",null,i.createElement(m,{pageName:"members"}),i.createElement("div",{className:"flex flex-col my-5 mx-5"},i.createElement("h1",{className:"text-center text-3xl"},"メンバー一覧"),i.createElement("p",{className:"text-base px-8 md:px-16 lg:px-32"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quod eveniet repellendus delectus doloribus excepturi recusandae, provident porro modi adipisci facilis reiciendis accusamus tempore, quisquam cumque magni ea. Aliquam, debitis.")),i.createElement("div",{className:"container px-4 mx-auto"},i.createElement(d,{tabs:["現役","OB"],items:{"現役":t.activeMemvers.nodes,OB:t.graduatedMembers.nodes}},(function(e){return i.createElement(s,{member:e,key:e.id})})),i.createElement(f.ZP,{to:"/"},"Go to Top"))))}}}]);
//# sourceMappingURL=component---src-pages-members-tsx-105e0fa418f7fedb5212.js.map