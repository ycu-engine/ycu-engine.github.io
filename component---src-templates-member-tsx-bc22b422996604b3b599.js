(self.webpackChunkore_ore_gatsbyjs_template=self.webpackChunkore_ore_gatsbyjs_template||[]).push([[255],{3721:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var a=l(1478),n=l(3901),m=l(5950),r=l(7294);const i=({size:e="md",className:t=""})=>r.createElement("img",{className:""+t,src:"/social-icon/twitter.svg",alt:"twitter",width:m.N[e],height:m.N[e]}),s=({size:e="md",className:t=""})=>r.createElement("img",{className:""+t,src:"/social-icon/github.svg",alt:"github",width:m.N[e],height:m.N[e]}),c=({username:e})=>r.createElement("a",{className:"hover:underline",href:"https://twitter.com/"+e,target:"_blank",rel:"noreferrer"},"@",e),o=({username:e})=>r.createElement("a",{className:"hover:underline",href:"https://github.com/"+e,target:"_blank",rel:"noreferrer"},"@",e);var u=l(3882),d=l(1161),v=l(1917),E=l(5444);var N=({data:{member:e}})=>{var t,l,m,N,f,b,h,g,p,k,w,x,y;if(!e)throw Error("Member not found");return r.createElement(r.Fragment,null,r.createElement(v.H,{title:e.nameJa+" | メンバー",keywords:[e.name,null==e?void 0:e.nameJa]}),r.createElement("section",{className:"px-8 py-6"},r.createElement("div",null,r.createElement(n.g,{className:"rounded-full",memberName:e.name,size:"xl"})),r.createElement("div",{className:"mb-3"},r.createElement("p",null,e.nameJa,r.createElement("span",{className:"text-sm ml-3"},e.belongs.faculty.nameJa," ",e.belongs.grade,"年")),r.createElement("p",{className:"px-5 text-sm"},e.description)),r.createElement("div",{className:"mb-3 flex flex-row justify-around max-w-sm"},null!==(t=e.social)&&void 0!==t&&t.twitter?r.createElement("div",{className:""},r.createElement(i,{size:"xs",className:"inline"}),r.createElement(c,{username:e.social.twitter})):null,null!==(l=e.social)&&void 0!==l&&l.github?r.createElement("div",{className:""},r.createElement(s,{size:"xs",className:"inline"}),r.createElement(o,{username:e.social.github})):null),r.createElement(d.$,{title:"所属チーム"},r.createElement("ul",{className:"mb-1"},null===(m=e.teams)||void 0===m||null===(N=m.map)||void 0===N?void 0:N.call(m,(e=>r.createElement("li",{key:e.id},r.createElement(u.W,{teamName:e.team.name,size:"xs"}),r.createElement(E.Link,{className:"hover:underline",to:"/teams/"+e.team.name},e.leader?"🚩":r.createElement("span",{className:"inline-block w-4"}),e.team.nameJa||e.team.name)))))),r.createElement(d.$,{title:"スキル"},r.createElement("ul",{className:"mb-1"},null===(f=e.skills)||void 0===f||null===(b=f.map)||void 0===b?void 0:b.call(f,(e=>r.createElement("li",{key:e.id},e.skill.name," lv.",e.level))))),r.createElement(d.$,{title:"ポートフォリオ"},r.createElement("ul",{className:"mb-1"},null===(h=e.contributions)||void 0===h||null===(g=h.map)||void 0===g?void 0:g.call(h,(e=>r.createElement("li",{key:e.id},e.portfolio.nameJa||e.portfolio.name))))),r.createElement(d.$,{title:"活動記録"},r.createElement("ul",{className:"mb-1"},null===(p=(0,a.Z)(null!==(y=e.activities)&&void 0!==y?y:[],"frontmatter.date"))||void 0===p||null===(k=p.reverse())||void 0===k||null===(w=k.slice(0,5))||void 0===w||null===(x=w.map)||void 0===x?void 0:x.call(w,(e=>{var t,l,a;return r.createElement("li",{key:null==e?void 0:e.id},null==e||null===(t=e.frontmatter)||void 0===t?void 0:t.date," ",null!=e&&null!==(l=e.frontmatter)&&void 0!==l&&l.team?r.createElement(r.Fragment,null,r.createElement(E.Link,{className:"hover:underline",to:"/teams/"+e.frontmatter.team.name},e.frontmatter.team.nameJa||e.frontmatter.team.name)," "):null,null==e||null===(a=e.frontmatter)||void 0===a?void 0:a.title," ")}))))))}}}]);
//# sourceMappingURL=component---src-templates-member-tsx-bc22b422996604b3b599.js.map