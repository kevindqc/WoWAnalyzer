(this.webpackJsonpwowanalyzer=this.webpackJsonpwowanalyzer||[]).push([[2],{1028:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",className:"stroke icon"},t),r.a.createElement("path",{d:"M32,0C14.355,0,0,14.355,0,32c0,17.6445,14.355,32,32,32c17.6445,0,32-14.3555,32-32C64,14.355,49.6445,0,32,0z M32,62   C15.458,62,2,48.542,2,32S15.458,2,32,2s30,13.458,30,30S48.542,62,32,62z"}),r.a.createElement("path",{d:"M46.2412,26.3555H36.292l4.1357-15.9072c0.1182-0.4541-0.0957-0.9297-0.5146-1.1426   c-0.415-0.2134-0.9277-0.1069-1.2266,0.2568L16.9858,36.0098c-0.2456,0.2998-0.2964,0.7129-0.1309,1.0625   c0.165,0.3496,0.5171,0.5723,0.9038,0.5723h9.9492l-4.1353,15.9062c-0.1182,0.4551,0.0957,0.9307,0.5142,1.1436   c0.1445,0.0732,0.2993,0.1084,0.4531,0.1084c0.292,0,0.5786-0.1279,0.7734-0.3652l21.7012-26.4478   c0.2451-0.2988,0.2959-0.7124,0.1309-1.062C46.9795,26.5781,46.6279,26.3555,46.2412,26.3555z M26.6528,49.6523l3.3159-12.7559   c0.0781-0.2998,0.0127-0.6191-0.1768-0.8633c-0.1895-0.2451-0.4814-0.3887-0.791-0.3887H19.873l17.4746-21.2969L34.0312,27.104   c-0.0781,0.2993-0.0127,0.6182,0.1768,0.8633c0.1895,0.2446,0.4814,0.3882,0.791,0.3882h9.1279L26.6528,49.6523z"}))}},1130:function(e,t,a){},762:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return E}));var n=a(7),r=a(26),c=a(31),o=a(0),s=a.n(o),l=a(821),i=a(124),d=a(822),u=a(795);function m(e){var t=Object(r.a)(e);t.sort((function(e,t){return e-t}));var a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function h(e){return e.reduce((function(e,t){return e+t}),0)/e.length}function f(e){return e.length/e.reduce((function(e,t){return e+1/t}),0)}var E,p=s.a.createContext((function(e){}));!function(e){e.DEFAULT="DEFAULT",e.MEDIAN="MEDIAN",e.AVERAGE="AVERAGE",e.LOWEST="LOWEST",e.FIRST="FIRST",e.HARMONIC="HARMONIC"}(E||(E={}));t.c=function(e){var t=Object(o.useState)({requirementPerformances:[],performance:1,passed:!0,expanded:!1}),a=Object(c.a)(t,2),v=a[0],b=a[1],y=Object(o.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.DEFAULT;switch(t){case E.DEFAULT:return Math.min(m(e),h(e));case E.MEDIAN:return m(e);case E.AVERAGE:return h(e);case E.LOWEST:return Math.min.apply(Math,Object(r.a)(e));case E.FIRST:return e[0];case E.HARMONIC:return f(e);default:throw new Error("Unknown style: ".concat(t))}}),[]),g=e.name,w=e.children,k=e.description;if(!w||Array.isArray(w)&&!w.some((function(e){return!(!s.a.isValidElement(e)||!(null===e||void 0===e?void 0:e.props))})))return null;return s.a.createElement(p.Provider,{value:function(t){b((function(a){var n=[].concat(Object(r.a)(a.requirementPerformances),[t]),c=n.length>0?y(n,e.performanceMethod):1,o=c>.666;return{requirementPerformances:n,performance:c,passed:o,expanded:!o}}))}},s.a.createElement(d.a,{element:"li",className:v.passed?"passed":"failed",inverseExpanded:function(){b((function(e){return Object(n.a)(Object(n.a)({},e),{},{expanded:!e.expanded})}))},expanded:v.expanded,header:s.a.createElement("div",{className:"flex wrapable"},s.a.createElement("div",{className:"flex-main name"},g),s.a.createElement("div",{className:"flex-sub perf"},s.a.createElement("div",{className:"perf-container"},s.a.createElement("div",{className:"perf-bar",style:{width:"".concat(100*v.performance,"%"),backgroundColor:Object(u.a)(v.performance)}}))),s.a.createElement("div",{className:"flex-sub chevron"},s.a.createElement("div",null,s.a.createElement(l.a,null))))},k&&s.a.createElement("div",{className:"row text-muted description"},s.a.createElement(i.a,null),s.a.createElement("div",{className:"col-md-12"},k)),s.a.createElement("div",{className:"row"},w)))}},763:function(e,t,a){"use strict";var n=a(8),r=a(9),c=a(10),o=a(11),s=a(6),l=a(0),i=a.n(l),d=a(124),u=a(33),m=a(22),h=a(795),f=a(164);var E=a(762),p=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),r=t.call(this,e),e.setPerformance(r.performance),r}return Object(r.a)(a,[{key:"formatThresholdsActual",value:function(e){switch(e.style){case f.a.PERCENTAGE:return"".concat(Object(u.e)(e.actual),"%");case f.a.NUMBER:return"".concat(Object(u.d)(e.actual));case f.a.THOUSANDS:return"".concat(Object(u.f)(e.actual));case f.a.DECIMAL:return"".concat(e.actual.toFixed(2));case f.a.BOOLEAN:return e.actual?i.a.createElement(s.Trans,{id:"common.yes"}):i.a.createElement(s.Trans,{id:"common.no"});case f.a.SECONDS:return"".concat(e.actual.toFixed(2),"s");default:throw new Error("Unknown style: ".concat(e.style))}}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.thresholds,n=e.tooltip,r=e.valueTooltip,c=e.prefix,o=e.suffix,s=this.performance,l=void 0,u=a;void 0!==u.max&&(l="/ ".concat(u.max));var f=i.a.createElement(i.a.Fragment,null,c," ",this.formatThresholdsActual(a)," ",l," ",o);return i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex-main"},t),n&&i.a.createElement("div",{className:"flex-sub",style:{marginLeft:10}},i.a.createElement(m.b,{content:n},i.a.createElement("div",null,i.a.createElement(d.a,null)))),i.a.createElement("div",{className:"flex-sub content-middle text-muted",style:{minWidth:55,marginLeft:5,marginRight:10}},i.a.createElement("div",{className:"text-right",style:{width:"100%"}},r?i.a.createElement(m.a,{content:r},f):f)),i.a.createElement("div",{className:"flex-sub content-middle",style:{width:50}},i.a.createElement("div",{className:"performance-bar-container"},i.a.createElement("div",{className:"performance-bar small",style:{width:"".concat(100*s,"%"),transition:"background-color 800ms",backgroundColor:Object(h.a)(s)}})))))}},{key:"performance",get:function(){return function(e){if(e.isGreaterThan)return"object"===typeof e.isGreaterThan?function(e,t){var a=t.minor,n=t.average,r=t.major;return e>r?.333*r/e:e>n?.666-(e-n)/(r-n)*.333:e>a?1-(e-a)/(n-a)*.333:1}(e.actual,e.isGreaterThan):e.isGreaterThan/e.actual;if(e.isLessThan)return"object"===typeof e.isLessThan?function(e,t){var a=t.minor,n=t.average,r=t.major;return e<r?.333*e/r:e<n?.333+(e-r)/(n-r)*.333:e<a?.666+(e-n)/(a-n)*.333:1}(e.actual,e.isLessThan):e.actual/e.isLessThan;if(void 0!==e.isEqual)return e.actual!==e.isEqual?1:0;throw new Error("Failed to recognize threshold type")}(this.props.thresholds)}}]),a}(i.a.PureComponent);t.a=function(e){return i.a.createElement(E.b.Consumer,null,(function(t){return i.a.createElement(p,Object.assign({},e,{setPerformance:t}))}))}},770:function(e,t,a){"use strict";var n=a(6),r=a(0),c=a.n(r);a(830);t.a=function(e){var t=e.children;return c.a.createElement("ul",{className:"checklist"},!t&&c.a.createElement("li",null,c.a.createElement("div",{className:"alert alert-danger"},c.a.createElement(n.Trans,{id:"shared.checklist.missingChecklist",components:[c.a.createElement("a",{href:"https://github.com/WoWAnalyzer/WoWAnalyzer"}),c.a.createElement("a",{href:"https://discord.gg/AxphPxU"})]}))),t)}},771:function(e,t,a){"use strict";var n=a(8),r=a(9),c=a(10),o=a(11),s=a(6),l=a(0),i=a.n(l),d=a(762),u=a(763),m=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"renderPotionRequirements",value:function(){var e=this.props.thresholds;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.combatPotionsUsed"}),thresholds:e.potionsUsed}),i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.highQualityCombatPotionsUsed"}),thresholds:e.bestPotionUsed}))}},{key:"renderEnchantRequirements",value:function(){var e=this.props.thresholds;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.enchanted"}),thresholds:e.itemsEnchanted}),i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.enchantedHigh"}),thresholds:e.itemsBestEnchanted}))}},{key:"renderWeaponEnhancementRequirements",value:function(){var e=this.props.thresholds;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"All weapons enhanced (oils/stones)"}),thresholds:e.weaponsEnhanced}),i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"Using high quality weapon enhancements"}),thresholds:e.bestWeaponEnhancements}))}},{key:"renderFlaskRequirements",value:function(){var e=this.props.thresholds;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.flaskHigh"}),thresholds:e.higherFlaskPresent}),i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.flask"}),thresholds:e.flaskPresent}))}},{key:"renderFoodRequirements",value:function(){var e=this.props.thresholds;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.foodHigh"}),thresholds:e.higherFoodPresent}),i.a.createElement(u.a,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.food"}),thresholds:e.foodPresent}))}},{key:"render",value:function(){var e=this.props.children;return i.a.createElement(d.c,{name:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.wellPrepared"}),description:i.a.createElement(s.Trans,{id:"shared.modules.features.checklist.wellPreparedDetails"})},this.renderEnchantRequirements(),this.renderWeaponEnhancementRequirements(),this.renderPotionRequirements(),this.renderFlaskRequirements(),this.renderFoodRequirements(),e)}}]),a}(i.a.PureComponent);t.a=m},772:function(e,t,a){"use strict";var n=a(27),r=a(8),c=a(9),o=a(10),s=a(11),l=a(0),i=a.n(l),d=a(4),u=a(40),m=a(763),h=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.spell,a=e.name,r=Object(n.a)(e,["spell","name"]),c=this.thresholds;return c?i.a.createElement(m.a,Object.assign({name:a||i.a.createElement(d.a,{id:t}),thresholds:c},r)):null}},{key:"thresholds",get:function(){if(!this.props.castEfficiency)return Object(u.a)(new Error("GenericCastEfficiencyRequirement requires that you pass the castEfficiency object yourself. Spell: ".concat(this.props.spell))),null;if(this.props.isMaxCasts){var e=this.props.castEfficiency,t=e.casts,a=e.maxCasts;return{actual:t,max:a,isLessThan:{minor:a,average:a-1,major:a-2},style:"number"}}var n=this.props.castEfficiency,r=n.efficiency;return{actual:n.gotMaxCasts?1:r,isLessThan:{minor:n.recommendedEfficiency,average:n.averageIssueEfficiency,major:n.majorIssueEfficiency},style:"percentage"}}}]),a}(i.a.PureComponent);t.a=h},785:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n,r=a(26),c=a(7),o=a(8),s=a(9),l=a(10),i=a(11),d=a(6),u=a(0),m=a.n(u),h=a(3),f=a(49),E=a(1028),p=a(23),v=a(4),b=a(28),y=a(33),g=a(22),w=a(88),k=a(15),T=(a(1130),function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={showCastEvents:!1,showAllEvents:!1},e.handleExpandClick=e.handleExpandClick.bind(Object(p.a)(e)),e.handleShowHealsClick=e.handleShowHealsClick.bind(Object(p.a)(e)),e}return Object(s.a)(a,[{key:"handleExpandClick",value:function(){this.setState({showCastEvents:!this.state.showCastEvents,showAllEvents:!1})}},{key:"handleShowHealsClick",value:function(){this.setState({showAllEvents:!this.state.showAllEvents})}},{key:"groupHeals",value:function(e){var t=null;return e.reduce((function(e,a){if(a.type===k.b.Cast)e.push(a);else if(a.type===k.b.Heal){var n=a.ability.guid;if(t&&t.event.ability.guid===n)t.count+=1,t.amount+=a.amount,t.absorbed+=a.absorbed||0,t.overheal+=a.overheal||0;else{var r={event:a,amount:a.amount,absorbed:a.absorbed||0,overheal:a.overheal||0,count:1};e.push(r),t=r}}return e}),[])}},{key:"calculateHealingStatistics",value:function(e){var t=0,a=0;return e.events.filter((function(e){return e.type===k.b.Heal||e.type===k.b.Absorbed})).forEach((function(e){t+=e.amount+(e.absorbed||0),a+=e.overheal||0})),{healingDone:t,overhealingDone:a}}},{key:"calculateDamageStatistics",value:function(e){return{damageDone:e.events.reduce((function(e,t){return t.type===k.b.Damage?e+((t.amount||0)+(t.absorbed||0)):e}),0)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.cooldown,r=t.fightStart,c=t.fightEnd,o=null,s=a.start,l=a.end||c;return m.a.createElement("article",null,m.a.createElement("figure",null,m.a.createElement(v.a,{id:a.spell.id,icon:!1},m.a.createElement(b.a,{icon:a.spell.icon,alt:a.spell.name}))),m.a.createElement("div",{className:"row",style:{width:"100%"}},m.a.createElement("div",{className:this.state.showAllEvents?"col-md-12":"col-md-6"},m.a.createElement("header",{style:{marginTop:5,fontSize:"1.25em",marginBottom:".1em"}},m.a.createElement(v.a,{id:a.spell.id,icon:!1})," (",Object(y.a)((s-r)/1e3)," -> ",Object(y.a)((l-r)/1e3),") \xa0",m.a.createElement(g.a,{content:m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.events.tooltip"})},m.a.createElement("a",{href:"javascript:",onClick:function(){return e.props.applyTimeFilter(s-r,l-r)}},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.events"})))),!this.state.showCastEvents&&m.a.createElement("div",null,a.events.filter((function(e){return e.type===k.b.Cast&&1!==e.ability.guid})).map((function(e,t){return m.a.createElement(v.a,{key:"".concat(e.ability.guid,"-").concat(e.timestamp,"-").concat(t),id:e.ability.guid,icon:!1},m.a.createElement(b.a,{icon:e.ability.abilityIcon,alt:e.ability.name,style:{height:23,marginRight:4}}))})),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xs-12"},m.a.createElement("a",{href:"javascript:void(0)",onClick:this.handleExpandClick,style:{marginTop:".2em"}},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.expand"}))))),this.state.showCastEvents&&!this.state.showAllEvents&&m.a.createElement("div",{className:"container-fluid"},a.events.filter((function(e){return e.type===k.b.Cast&&1!==e.ability.guid})).map((function(e,t){return m.a.createElement("div",{className:"row",key:t},m.a.createElement("div",{className:"col-xs-2 text-right",style:{padding:0}},"+",((e.timestamp-a.start)/1e3).toFixed(3)),m.a.createElement("div",{className:"col-xs-10"},m.a.createElement(v.a,{key:"".concat(e.ability.guid,"-").concat(e.timestamp,"-").concat(t),id:e.ability.guid,icon:!1},m.a.createElement(b.a,{icon:e.ability.abilityIcon,alt:e.ability.name,style:{height:23,marginRight:4}})," ",e.ability.name)))})),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xs-12"},m.a.createElement("a",{href:"javascript:",onClick:this.handleShowHealsClick,style:{marginTop:".2em"}},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.expand.again"}))," | ",m.a.createElement("a",{href:"javascript:",onClick:this.handleExpandClick,style:{marginTop:".2em"}},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.shrink"}))))),this.state.showCastEvents&&this.state.showAllEvents&&m.a.createElement("div",{className:"container-fluid"},this.groupHeals(a.events.filter((function(e){return(e.type===k.b.Cast||e.type===k.b.Heal)&&1!==e.ability.guid}))).map((function(e,t){var n=e.event||e;return m.a.createElement("div",{className:"row",key:t},m.a.createElement("div",{className:"col-xs-1 text-right",style:{padding:0}},"+",((n.timestamp-a.start)/1e3).toFixed(3)),m.a.createElement("div",{className:"col-xs-4 ".concat(n.type===k.b.Heal?"col-xs-offset-1":"")},m.a.createElement(v.a,{key:"".concat(n.ability.guid,"-").concat(n.timestamp,"-").concat(t),id:n.ability.guid,icon:!1},m.a.createElement(b.a,{icon:n.ability.abilityIcon,alt:n.ability.name,style:{height:23,marginRight:4}})," ",n.ability.name),n.type===k.b.Heal&&m.a.createElement("span",null,m.a.createElement("span",{className:"grouped-heal-meta amount"}," x ",e.count))),n.type===k.b.Heal&&m.a.createElement("div",{className:"col-xs-4"},m.a.createElement("span",{className:"grouped-heal-meta healing"}," +",Object(y.f)(e.amount+e.absorbed)),m.a.createElement("span",{className:"grouped-heal-meta overhealing"}," (O: ",Object(y.f)(e.overheal),")")))})),m.a.createElement("a",{href:"javascript:",onClick:this.handleShowHealsClick,style:{marginTop:".2em"}},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.shrink"}))," | ",m.a.createElement("a",{href:"javascript:",onClick:this.handleExpandClick,style:{marginTop:".2em"}},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.simple"})))),!this.state.showAllEvents&&m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"row"},a.summary.map((function(t){switch(t){case n.HEALING:return o=o||e.calculateHealingStatistics(a),m.a.createElement("div",{className:"col-md-4 text-center",key:"healing"},m.a.createElement("div",{style:{fontSize:"2em"}},Object(y.d)(o.healingDone)),m.a.createElement(g.a,{content:m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.healing.tooltip"})},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.healing",values:{0:Object(y.d)(o.healingDone/(l-s)*1e3)}})));case n.OVERHEALING:return o=o||e.calculateHealingStatistics(a),m.a.createElement("div",{className:"col-md-4 text-center",key:"overhealing"},m.a.createElement("div",{style:{fontSize:"2em"}},Object(y.e)(o.overhealingDone/(o.healingDone+o.overhealingDone)),"%"),m.a.createElement(g.a,{content:m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.overhealing.tooltip"})},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.overhealing"})));case n.ABSORBED:var r=a.events.filter((function(e){return e.type===k.b.Absorbed})).reduce((function(e,t){return e+(t.amount||0)}),0);return m.a.createElement("div",{className:"col-md-4 text-center",key:"absorbed"},m.a.createElement("div",{style:{fontSize:"2em"}},Object(y.d)(r)),m.a.createElement(g.a,{content:m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.absorbed.tooltip"})},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.absorbed"})));case n.ABSORBS_APPLIED:var c=a.events.filter((function(e){return e.type===k.b.ApplyBuff})).reduce((function(e,t){return e+(t.absorb||0)}),0);return m.a.createElement("div",{className:"col-md-4 text-center",key:"absorbs-applied"},m.a.createElement("div",{style:{fontSize:"2em"}},Object(y.d)(c)),m.a.createElement(g.a,{content:m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.absorbApplied.tooltip"})},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.absorbApplied"})));case n.MANA:var i=0;return i=a.spell.id===h.a.INNERVATE.id?a.events.filter((function(e){return e.type===k.b.Cast})).reduce((function(e,t){return e+(t.rawResourceCost[w.a.MANA.id]||0)}),0):a.events.filter((function(e){return e.type===k.b.Cast})).reduce((function(e,t){return e+(t.resourceCost[w.a.MANA.id]||0)}),0),m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.manaUsed",render:"div",className:"col-md-4 text-center",key:"mana",values:{0:Object(y.d)(i)},components:[m.a.createElement("div",{style:{fontSize:"2em"}})]});case n.DAMAGE:var u=e.calculateDamageStatistics(a);return m.a.createElement("div",{className:"col-md-4 text-center",key:"damage"},m.a.createElement("div",{style:{fontSize:"2em"}},Object(y.d)(u.damageDone)),m.a.createElement(g.a,{content:m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.damageDone.tooltip"})},m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.cooldown.damageDone",values:{0:Object(y.d)(u.damageDone/(l-s)*1e3)}})));default:return m.a.createElement("div",{className:"col-md-4 text-center",key:t.label},m.a.createElement("div",{style:{fontSize:"2em"}},"string"===typeof t.value?t.value:Object(y.d)(t.value)),m.a.createElement(g.a,{content:t.tooltip},t.label))}}))))))}}]),a}(m.a.Component)),C=function(e){var t=e.fightStart,a=e.fightEnd,n=e.cooldowns,r=e.applyTimeFilter;return m.a.createElement("ul",{className:"list"},n.map((function(e){return m.a.createElement("li",{key:"".concat(e.spell.id,"-").concat(e.start),className:"item clearfix",style:{padding:"10px 30px"}},m.a.createElement(T,{cooldown:e,fightStart:t,fightEnd:a,applyTimeFilter:r}))})))},N=a(43),A=a(833),O=a(828),x=a(18),j=a(13);!function(e){e.HEALING="HEALING",e.OVERHEALING="OVERHEALING",e.ABSORBED="ABSORBED",e.ABSORBS_APPLIED="ABSORBS_APPLIED",e.MANA="MANA",e.DAMAGE="DAMAGE"}(n||(n={}));var S=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).eventHistory=void 0,n.pastCooldowns=[],n.activeCooldowns=[],n.addEventListener(k.f.fightend,n.onFightend),n.addEventListener(k.f.cast.by(N.a),n.onCast),n.addEventListener(k.f.heal.by(N.a),n.onHeal),n.addEventListener(k.f.absorbed.by(N.a),n.onAbsorb),n.addEventListener(k.f.damage.by(N.a),n.onDamage),n.addEventListener(k.f.damage.by(x.b),n.onPetDamage),n.addEventListener(k.f.applybuff.by(N.a),n.onApplyBuff),n.addEventListener(k.f.applybuff.to(N.a),n.onApplyBuffToPlayer),n.addEventListener(k.f.removebuff.to(N.a),n.onRemoveBuff),n.addEventListener(k.f.applydebuff.by(N.a),n.onApplyDebuff),n.addEventListener(k.f.removedebuff.by(N.a),n.onRemoveDebuff),n.addEventListener(k.f.summon.by(N.a),n.onSummon),n.addEventListener(k.f.death.to(x.b),n.onPetDeath),n}return Object(s.a)(a,[{key:"startCooldown",value:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ability.guid,r=this.constructor;if(t=a?r.castCooldowns.find((function(e){return e.spell.id===n})):r.cooldownSpells.find((function(e){return e.spell.id===n}))){var c=this.addCooldown(t,e.timestamp);this.activeCooldowns.push(c)}}},{key:"addCooldown",value:function(e,t){var a=[],n=t,r=e.startBufferMS;if(r||e.startBufferEvents){var o=e.startBufferFilter||k.f.cast.by(N.a);a=this.eventHistory.last(e.startBufferEvents,r,o),n=r?t-r:a[0]&&a[0].timestamp||n}var s=Object(c.a)(Object(c.a)({},e),{},{start:n,end:e.duration?1e3*e.duration+t:null,events:a});return this.pastCooldowns.push(s),s}},{key:"endCooldown",value:function(e){var t=e.ability.guid,a=this.activeCooldowns.findIndex((function(e){return e.spell.id===t}));if(-1!==a){var n=this.activeCooldowns[a];n.end=e.timestamp,this.activeCooldowns.splice(a,1)}}},{key:"onFightend",value:function(){var e=this;this.activeCooldowns.forEach((function(t){t.end=e.owner.fight.end_time})),this.activeCooldowns=[]}},{key:"trackEvent",value:function(e){this.constructor.castCooldowns.length&&(this.activeCooldowns=this.activeCooldowns.filter((function(t){return!t.end||e.timestamp<t.end}))),this.activeCooldowns.forEach((function(t){t.events.push(e)}))}},{key:"onCast",value:function(e){var t=this.constructor,a=e.ability.guid;t.ignoredSpells.includes(a)||(-1!==t.castCooldowns.findIndex((function(e){return e.spell.id===a}))?this.startCooldown(e,!0):this.trackEvent(e))}},{key:"onHeal",value:function(e){this.trackEvent(e)}},{key:"onAbsorb",value:function(e){this.trackEvent(e)}},{key:"onDamage",value:function(e){this.trackEvent(e)}},{key:"onPetDamage",value:function(e){this.trackEvent(e)}},{key:"onApplyBuff",value:function(e){this.trackEvent(e)}},{key:"onApplyBuffToPlayer",value:function(e){this.startCooldown(e)}},{key:"onRemoveBuff",value:function(e){this.endCooldown(e)}},{key:"onApplyDebuff",value:function(e){this.startCooldown(e)}},{key:"onRemoveDebuff",value:function(e){this.endCooldown(e)}},{key:"onSummon",value:function(e){var t=e.ability.guid,a=this.constructor.cooldownSpells.find((function(e){return e.spell.id===t}));if(a&&-1===this.activeCooldowns.findIndex((function(e){return e.spell.id===t}))){var n=this.addCooldown(a,e.timestamp);n.petID=e.targetID,this.activeCooldowns.push(n)}}},{key:"onPetDeath",value:function(e){var t=e.targetID,a=this.activeCooldowns.findIndex((function(e){return e.petID===t}));if(-1!==a){var n=this.activeCooldowns[a];n.end=e.timestamp,this.activeCooldowns.splice(a,1)}}},{key:"tab",value:function(){var e=this;return{title:j.i18n._({id:"shared.cooldownThroughputTracker.tab",defaults:"Cooldowns"}),icon:E.a,url:"cooldowns",render:function(){return m.a.createElement(f.a,{title:m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.tab.title"}),explanation:m.a.createElement(d.Trans,{id:"shared.cooldownThroughputTracker.tab.explanation",components:[m.a.createElement("i",null)]}),pad:!1},m.a.createElement(C,{fightStart:e.owner.fight.start_time-e.owner.fight.offset_time,fightEnd:e.owner.fight.end_time,cooldowns:e.pastCooldowns,applyTimeFilter:e.owner.applyTimeFilter}))}}}}]),a}(N.c);S.dependencies={eventHistory:O.a},S.cooldownSpells=[{spell:h.a.INNERVATE,summary:[n.HEALING,n.OVERHEALING,n.MANA]}],S.ignoredSpells=Object(r.a)(A.a),S.castCooldowns=[];t.b=S},795:function(e,t,a){"use strict";function n(e){return e>=1?"#4ec04e":e>.666?"#a6c34c":e>.5?"#ffc84a":e>.333?"#df7102":"#ac1f39"}a.d(t,"a",(function(){return n}))},821:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 9",className:"icon"},t),r.a.createElement("path",{d:"M14.0059397,2.26485497e-14 C15.1072288,2.26485497e-14 15.3722573,0.627746582 14.5881847,1.41182411 L8.70999225,7.29005337 C8.317902,7.68214607 7.67653023,7.6764822 7.29009898,7.29005337 L1.41183294,1.41182411 C0.632099139,0.632095183 0.894513756,2.26485497e-14 1.99406028,2.26485497e-14 L14.0059397,2.26485497e-14 Z"}))}},822:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(31),r=a(0),c=a.n(r),o=a(798),s=a.n(o),l=(a(823),function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),o=a[0],l=a[1],i=e.header,d=e.children,u=e.element,m=e.className;return c.a.createElement(u,{className:"expandable ".concat(o?"expanded":""," ").concat(m||"")},c.a.createElement("div",{className:"meta",onClick:function(){l((function(e){return!e}))}},i),c.a.createElement(s.a,{className:"details",height:o?"auto":0},d))}),i=function(e){var t=e.header,a=e.children,n=e.element,r=e.className;return c.a.createElement(n,{className:"expandable ".concat(e.expanded?"expanded":""," ").concat(r||"")},c.a.createElement("div",{className:"meta",onClick:e.inverseExpanded},t),c.a.createElement(s.a,{className:"details",height:e.expanded?"auto":0},a))}},823:function(e,t,a){},830:function(e,t,a){}}]);
//# sourceMappingURL=2.34a376e2.chunk.js.map