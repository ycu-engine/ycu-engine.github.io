(self.webpackChunkore_ore_gatsbyjs_template=self.webpackChunkore_ore_gatsbyjs_template||[]).push([[459],{3901:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(9756),a=n(5950),u=n(5444),l=n(7294),m=n(4506),i=function(e){var t=e.memberName,n=e.size,i=(0,r.Z)(e,["memberName","size"]),o=(0,u.K2)("1717575382"),s=l.useMemo((function(){var e=o.allFile.nodes.find((function(e){return e.name===t}));if(e)return e;var n=o.allFile.nodes.find((function(e){return"default"===e.name}));if(n)return n;throw Error("Default Image not found")}),[t,o]),c=l.useMemo((function(){var e=s[n];if(!e)throw Error("Image can't resolved");return e}),[s,n]);return l.createElement(u.rU,{to:"/members/"+t},l.createElement(m.f,Object.assign({},i,{file:c,alt:t+"のアイコン",width:a.N[n],height:a.N[n]})))}},3882:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(9756),a=n(5950),u=n(5444),l=n(7294),m=n(4506),i=function(e){var t=e.teamName,n=e.size,i=e.className,o=(0,r.Z)(e,["teamName","size","className"]),s=(0,u.K2)("906268290"),c=l.useMemo((function(){var e=s.svgs.nodes.find((function(e){return e.name===t}));if(e)return e;var r=s.images.nodes.find((function(e){return e.name===t}));if(r)return r[n];var a=s.images.nodes.find((function(e){return"default"===e.name}));if(a)return a[n];throw Error("Default Image not found")}),[t,s,n]),f=l.useMemo((function(){if(c)return c;throw Error("image is "+c)}),[c]);return l.createElement(u.rU,{to:"/team/"+t,className:i},l.createElement(m.f,Object.assign({},o,{file:f,alt:t+"のアイコン",width:a.N[n],height:a.N[n]})))}},5950:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var r={xxs:16,xs:24,sm:32,md:48,lg:64,xl:128}},225:function(e,t,n){"use strict";n.r(t);var r=n(3901),a=n(3882),u=n(8902),l=n(7294),m=n(5414);t.default=function(e){var t,n,i=e.data;return l.createElement("div",null,l.createElement(m.q,null,l.createElement("title",null,"チーム | "+(null===(t=i.site)||void 0===t||null===(n=t.siteMetadata)||void 0===n?void 0:n.title))),l.createElement("h1",null,"チーム一覧"),l.createElement("ul",null,i.allTeam.nodes.map((function(e){return l.createElement("li",{key:e.id},l.createElement(a.W,{teamName:e.name,size:"lg"}),e.nameJa,l.createElement("ul",null,e.members.map((function(e){return l.createElement("li",{key:e.id},l.createElement(r.g,{memberName:e.member.name,size:"sm",className:"rounded-full"}),e.member.name)}))))}))),l.createElement("p",null,"Now go build something great."),l.createElement(u.ZP,{to:"/"},"Go to Top"))}}}]);
//# sourceMappingURL=component---src-pages-teams-tsx-f8f4fbdd286f22cf51bc.js.map