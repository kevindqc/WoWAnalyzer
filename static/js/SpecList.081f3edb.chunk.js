(this.webpackJsonpwowanalyzer=this.webpackJsonpwowanalyzer||[]).push([[49],{1054:function(e,a,t){},1317:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(6),c=t(0),s=t.n(c),r=t(90),l=t(213),i=(t(1054),t(89)),m=function(e){var a=e.spec,t=e.exampleReport,c=e.contributors,r=e.patchCompatibility,l=a.className.replace(/ /g,""),m=t?"a":"div",p=0!==c.length?s.a.createElement(n.Trans,{id:"interface.specListItem.maintainer",components:[s.a.createElement("br",null)]}):s.a.createElement(n.Trans,{id:"interface.specListItem.unmaintained",render:"small",components:[s.a.createElement("em",null)]});return s.a.createElement(m,{key:a.id,href:t,title:t?"Open example report":void 0,className:"spec-card"},s.a.createElement("div",{className:"icon"},s.a.createElement("figure",null,s.a.createElement("img",{src:"/specs/".concat(l,"-").concat(a.specName.replace(" ",""),".jpg"),alt:"".concat(a.specName," ").concat(a.className)}))),s.a.createElement("div",{className:"description"},s.a.createElement("h4",{className:l},a.specName," ",a.className),s.a.createElement(n.Trans,{id:"interface.specListItem.patchCompatability",values:{patchCompatibility:r}}),s.a.createElement("br",null),p,c.map((function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,Object.assign({key:e.nickname,link:!1},e))," ")})),s.a.createElement("br",null)))},p=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{title:"Specializations"}),s.a.createElement("div",null,s.a.createElement(n.Trans,{id:"interface.specList.specs",render:"h1"})),s.a.createElement(n.Trans,{id:"interface.specList.specs.label",render:"small"}),s.a.createElement("div",{className:"spec-listing"},l.a.sort((function(e,a){return e.spec.className<a.spec.className?-1:e.spec.className>a.spec.className?1:e.spec.id-a.spec.id})).map((function(e){return s.a.createElement(m,Object.assign({key:e.spec.id},e))}))))}}}]);
//# sourceMappingURL=SpecList.081f3edb.chunk.js.map