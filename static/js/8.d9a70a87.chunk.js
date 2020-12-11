(this.webpackJsonpwowanalyzer=this.webpackJsonpwowanalyzer||[]).push([[8],{1033:function(e,t,n){"use strict";var a=n(8),i=n(9),r=n(10),s=n(11),o=n(768),l=n(3),c=n(15),u=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"normalize",value:function(e){for(var t=this.getFightStartIndex(e),n=0;n<e.length;n+=1){var a=e[n];if(a.ability&&a.ability.guid===l.a.GRIMOIRE_OF_SACRIFICE_BUFF&&[c.b.ApplyBuff,c.b.RemoveBuff].includes(a.type))break;if(a.ability&&a.ability.guid===l.a.GRIMOIRE_OF_SACRIFICE_DAMAGE.id&&a.type===c.b.Damage){var i={timestamp:e[t].timestamp,type:c.b.ApplyBuff,sourceID:a.sourceID,targetID:a.sourceID,sourceIsFriendly:!0,targetIsFriendly:!0,ability:{guid:l.a.GRIMOIRE_OF_SACRIFICE_BUFF.id,name:l.a.GRIMOIRE_OF_SACRIFICE_BUFF.name,abilityIcon:l.a.GRIMOIRE_OF_SACRIFICE_BUFF.icon},__fabricated:!0};e.unshift(i);break}}return e}}]),n}(o.a);t.a=u},1034:function(e,t,n){},1035:function(e,t,n){"use strict";var a=n(8),i=n(9),r=n(10),s=n(11),o=n(0),l=n.n(o),c=n(43),u=n(755),d=n(3),h=n(33),m=n(4),f=n(746),p=n(747),g=n(748),b=n(13),y=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).active=e.selectedCombatant.hasTalent(d.a.GRIMOIRE_OF_SACRIFICE_TALENT.id),e}return Object(i.a)(n,[{key:"uptime",get:function(){return this.selectedCombatant.getBuffUptime(d.a.GRIMOIRE_OF_SACRIFICE_BUFF.id)/this.owner.fightDuration}},{key:"suggestionThresholds",get:function(){return{actual:this.uptime,isLessThan:{minor:.95,average:.9,major:.85},style:"percentage"}}}]),Object(i.a)(n,[{key:"suggestions",value:function(e){e(this.suggestionThresholds).addSuggestion((function(e,t,n){return e(l.a.createElement(l.a.Fragment,null,"Your uptime on ",l.a.createElement(m.a,{id:d.a.GRIMOIRE_OF_SACRIFICE_TALENT.id})," is too low. If you picked this talent, you should always have your pet sacrificed. If you died or summoned your pet, make sure to sacrifice it again to gain this buff.")).icon(d.a.GRIMOIRE_OF_SACRIFICE_TALENT.icon).actual(b.i18n._({id:"warlock.shared.suggestions.grimoireOfSacrifice.uptime",defaults:"{0} % Grimoire of Sacrifice uptime.",values:{0:Object(h.e)(t)}})).recommended(">= ".concat(Object(h.e)(n)," % is recommended"))}))}},{key:"statistic",value:function(){var e=this.abilityTracker.getAbility(d.a.GRIMOIRE_OF_SACRIFICE_DAMAGE.id),t=e.damageEffective+e.damageAbsorbed,n=t/this.owner.fightDuration*1e3;return l.a.createElement(f.a,{position:p.a.OPTIONAL(4),size:"small",tooltip:l.a.createElement(l.a.Fragment,null,Object(h.f)(t)," damage",l.a.createElement("br",null),"Buff uptime: ",Object(h.e)(this.uptime)," %")},l.a.createElement(g.a,{spell:d.a.GRIMOIRE_OF_SACRIFICE_TALENT},Object(h.d)(n)," DPS ",l.a.createElement("small",null,Object(h.e)(this.owner.getPercentageOfTotalDamageDone(t))," % of total")))}}]),n}(c.c);y.dependencies={abilityTracker:u.a},t.a=y},748:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(53),s=n(4);t.a=function(e){var t=e.spell,n=e.children,a=e.className;return i.a.createElement("div",{className:"pad boring-text ".concat(a||"")},i.a.createElement("label",null,i.a.createElement(r.a,{id:t.id})," ",i.a.createElement(s.a,{id:t.id,icon:!1})),i.a.createElement("div",{className:"value"},n))}},752:function(e,t,n){"use strict";function a(e,t){var n=(e.amount||0)+(e.absorbed||0);return n-n/(1+t)}n.d(t,"a",(function(){return a}))},773:function(e,t,n){"use strict";var a=n(8),i=n(9),r=n(10),s=n(11),o=n(43),l=n(123),c=n(15),u=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).eventEmitter=void 0,i.current=0,i.resourceUpdates=[],i.buildersObj={},i.spendersObj={},i.resource=void 0,i.maxResource=void 0,i.addEventListener(c.f.energize.to(o.a),i.onEnergize),i.addEventListener(c.f.cast.by(o.a),i.onCast),i}return Object(i.a)(n,[{key:"initBuilderAbility",value:function(e){this.buildersObj[e]={generated:0,wasted:0,casts:0}}},{key:"initSpenderAbility",value:function(e){this.spendersObj[e]={spent:0,spentByCast:[],casts:0}}},{key:"onEnergize",value:function(e){var t=e.ability.guid;if(e.resourceChangeType===this.resource.id){var n=e.waste,a=e.resourceChange-n;this._applyBuilder(t,a,n,this.getResource(e),e.timestamp)}}},{key:"processInvisibleEnergize",value:function(e,t){var n=void 0!==this.maxResource?this.maxResource-this.current:t,a=Math.min(t,n),i=Math.max(t-n,0);this._applyBuilder(e,a,i)}},{key:"_applyBuilder",value:function(e,t,n,a,i){this.buildersObj[e]||this.initBuilderAbility(e),this.buildersObj[e].wasted+=n,this.buildersObj[e].generated+=t,this.buildersObj[e].casts+=1,null!==a&&void 0!==a&&void 0!==a.amount?(this.current=a.amount,void 0!==a.max&&(this.maxResource=a.max)):this.current+=t,this.resourceUpdates.push({timestamp:i,current:this.current,waste:n,generated:t,used:0})}},{key:"onCast",value:function(e){var t=e.ability.guid;if(this.shouldProcessCastEvent(e)){var n=this.getResource(e);if(n){n.max&&(this.maxResource=n.max);var a=this.getReducedCost(e);this.spendersObj[t]||this.initSpenderAbility(t),a&&0!==a&&(this.spendersObj[t].casts+=1,this.spendersObj[t].spentByCast.push(a),a>0&&(this.spendersObj[t].spent+=a),this.current=n.amount-a,this.resourceUpdates.push({timestamp:e.timestamp,current:this.current,waste:0,generated:0,used:n.amount}),this.triggerSpendEvent(a,e))}}}},{key:"getReducedCost",value:function(e){var t;return e.resourceCost&&void 0!==e.resourceCost[this.resource.id]?e.resourceCost[this.resource.id]:null===(t=this.getResource(e))||void 0===t?void 0:t.cost}},{key:"getResource",value:function(e){var t=this;return e.classResources?e.classResources.find((function(e){return e.type===t.resource.id})):void 0}},{key:"triggerSpendEvent",value:function(e,t){var n={type:c.b.SpendResource,timestamp:t.timestamp,sourceID:t.sourceID,targetID:t.targetID,resourceChange:e,resourceChangeType:this.resource.id,ability:t.ability,__fabricated:!0};this.eventEmitter.fabricateEvent(n,t)}},{key:"shouldProcessCastEvent",value:function(e){return Boolean(this.getResource(e))}},{key:"getGeneratedBySpell",value:function(e){return this.buildersObj[e]&&this.buildersObj[e].generated||0}},{key:"getWastedBySpell",value:function(e){return this.buildersObj[e]&&this.buildersObj[e].wasted||0}},{key:"getBuilderCastsBySpell",value:function(e){return this.buildersObj[e]&&this.buildersObj[e].casts||0}},{key:"generated",get:function(){return Object.values(this.buildersObj).reduce((function(e,t){return e+t.generated}),0)}},{key:"wasted",get:function(){return Object.values(this.buildersObj).reduce((function(e,t){return e+t.wasted}),0)}},{key:"spent",get:function(){return Object.values(this.spendersObj).reduce((function(e,t){return e+t.spent}),0)}},{key:"spendersCasts",get:function(){return Object.values(this.spendersObj).reduce((function(e,t){return e+t.casts}),0)}}]),n}(o.c);u.dependencies={eventEmitter:l.a},t.a=u},781:function(e,t,n){"use strict";var a=n(8),i=n(9),r=n(10),s=n(11),o=n(0),l=n.n(o),c=n(4),u=n(33),d=n(22),h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"prepareGenerated",value:function(e){return Object.keys(e).map((function(t){return{abilityId:Number(t),generated:e[Number(t)].generated,wasted:e[Number(t)].wasted}})).sort((function(e,t){return t.generated-e.generated})).filter((function(e){return e.generated>0||e.wasted}))}},{key:"prepareSpent",value:function(e){return Object.keys(e).map((function(t){return{abilityId:Number(t),spent:e[Number(t)].spent,casts:e[Number(t)].casts}})).sort((function(e,t){return t.spent-e.spent})).filter((function(e){return e.spent>0}))}},{key:"render",value:function(){var e=this.props,t=e.tracker,n=e.showSpenders,a=t.resource.name,i=this.prepareGenerated(t.buildersObj),r=this.prepareSpent(t.spendersObj),s=t.generated,o=t.wasted,h=t.spent,m=t.spendersCasts;return s=0===s?1:s,o=0===o?1:o,h=0===h?1:h,m=0===m?1:m,l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:"data-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ability"),l.a.createElement("th",{colSpan:2},a," generated"),l.a.createElement("th",{colSpan:2},l.a.createElement(d.a,{content:"This is the amount of resources that were generated while you were already at cap."},a," wasted")))),l.a.createElement("tbody",null,i&&i.map((function(e){return l.a.createElement("tr",{key:e.abilityId},l.a.createElement("td",{style:{width:"30%"}},l.a.createElement(c.a,{id:e.abilityId})),l.a.createElement("td",{style:{width:50,paddingRight:5,textAlign:"center"}},l.a.createElement(d.a,{content:"".concat(Object(u.e)(e.generated/s)," %")},e.generated.toFixed(0))),l.a.createElement("td",{style:{width:"40%"}},l.a.createElement("div",{className:"performance-bar",style:{width:"".concat(e.generated/s*100,"%")}})),l.a.createElement("td",{style:{width:50,paddingRight:5,textAlign:"center"}},l.a.createElement(d.a,{content:"".concat(Object(u.e)(e.wasted/o)," %")},e.wasted.toFixed(0))),l.a.createElement("td",{style:{width:"30%"}},l.a.createElement("div",{className:"performance-bar",style:{width:"".concat(e.wasted/o*100,"%")}})))})))),n&&l.a.createElement("table",{className:"data-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ability"),l.a.createElement("th",{colSpan:2},a," spent"),l.a.createElement("th",{colSpan:2},"Casts"))),l.a.createElement("tbody",null,r&&r.map((function(e){return l.a.createElement("tr",{key:e.abilityId},l.a.createElement("td",{style:{width:"30%"}},l.a.createElement(c.a,{id:e.abilityId})),l.a.createElement("td",{style:{width:50,paddingRight:5,textAlign:"center"}},l.a.createElement(d.a,{content:"".concat(Object(u.e)(e.spent/h)," %")},e.spent.toFixed(0))),l.a.createElement("td",{style:{width:"40%"}},l.a.createElement("div",{className:"performance-bar",style:{width:"".concat(e.spent/h*100,"%")}})),l.a.createElement("td",{style:{width:50,paddingRight:5,textAlign:"center"}},l.a.createElement(d.a,{content:"".concat(Object(u.e)(e.casts/m)," %")},e.casts)),l.a.createElement("td",{style:{width:"30%"}},l.a.createElement("div",{className:"performance-bar",style:{width:"".concat(e.casts/m*100,"%")}})))})))))}}]),n}(l.a.Component);t.a=h},798:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=c(n(0)),o=c(n(37)),l=c(n(395));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function m(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;for(var i={},r=Object.keys(e),s=0;s<r.length;s++){var o=r[s];-1===n.indexOf(o)&&(i[o]=e[o])}return i}function f(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function p(e){return!isNaN(parseFloat(e))&&isFinite(e)}function g(e){return"string"===typeof e&&e.search("%")===e.length-1&&p(e.substr(0,e.length-1))}function b(e,t){e&&"function"===typeof e&&e(t)}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.animationFrameIDs=[];var a="auto",r="visible";p(e.height)?(a=e.height<0||"0"===e.height?0:e.height,r="hidden"):g(e.height)&&(a="0%"===e.height?0:e.height,r="hidden"),n.animationStateClasses=i({},d,e.animationStateClasses);var s=n.getStaticStateClasses(a);return n.state={animationStateClasses:s,height:a,overflow:r,shouldUseTransitions:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.props,i=a.delay,r=a.duration,s=a.height,o=a.onAnimationEnd,c=a.onAnimationStart;if(this.contentElement&&s!==e.height){var d;this.showContent(t.height),this.contentElement.style.overflow="hidden";var h=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var m=r+i,y=null,v={height:null,overflow:"hidden"},E="auto"===t.height;p(s)?(y=s<0||"0"===s?0:s,v.height=y):g(s)?(y="0%"===s?0:s,v.height=y):(y=h,v.height="auto",v.overflow=null),E&&(v.height=y,y=h);var O=(0,l.default)((u(d={},this.animationStateClasses.animating,!0),u(d,this.animationStateClasses.animatingUp,"auto"===e.height||s<e.height),u(d,this.animationStateClasses.animatingDown,"auto"===s||s>e.height),u(d,this.animationStateClasses.animatingToHeightZero,0===v.height),u(d,this.animationStateClasses.animatingToHeightAuto,"auto"===v.height),u(d,this.animationStateClasses.animatingToHeightSpecific,v.height>0),d)),w=this.getStaticStateClasses(v.height);this.setState({animationStateClasses:O,height:y,overflow:"hidden",shouldUseTransitions:!E}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),E?(v.shouldUseTransitions=!0,f(this.animationFrameIDs),this.animationFrameIDs=function(e){var t=[];return t[0]=requestAnimationFrame((function(){t[1]=requestAnimationFrame((function(){e()}))})),t}((function(){n.setState(v),b(c,{newHeight:v.height})})),this.animationClassesTimeoutID=setTimeout((function(){n.setState({animationStateClasses:w,shouldUseTransitions:!1}),n.hideContent(v.height),b(o,{newHeight:v.height})}),m)):(b(c,{newHeight:y}),this.timeoutID=setTimeout((function(){v.animationStateClasses=w,v.shouldUseTransitions=!1,n.setState(v),"auto"!==s&&n.hideContent(y),b(o,{newHeight:y})}),m))}}},{key:"componentWillUnmount",value:function(){f(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,l.default)((u(t={},this.animationStateClasses.static,!0),u(t,this.animationStateClasses.staticHeightZero,0===e),u(t,this.animationStateClasses.staticHeightSpecific,e>0),u(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.animateOpacity,r=n.applyInlineTransitions,o=n.children,c=n.className,d=n.contentClassName,f=n.delay,p=n.duration,g=n.easing,b=n.id,y=n.style,v=this.state,E=v.height,O=v.overflow,w=v.animationStateClasses,C=v.shouldUseTransitions,I=i({},y,{height:E,overflow:O||y.overflow});C&&r&&(I.transition="height "+p+"ms "+g+" "+f+"ms",y.transition&&(I.transition=y.transition+", "+I.transition),I.WebkitTransition=I.transition);var j={};a&&(j.transition="opacity "+p+"ms "+g+" "+f+"ms",j.WebkitTransition=j.transition,0===E&&(j.opacity=0));var S=(0,l.default)((u(e={},w,!0),u(e,c,c),e)),R="undefined"!==typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===E;return s.default.createElement("div",i({},m.apply(void 0,[this.props].concat(h)),{"aria-hidden":R,className:S,id:b,style:I}),s.default.createElement("div",{className:d,style:j,ref:function(e){return t.contentElement=e}},o))}}]),t}(s.default.Component);y.propTypes={"aria-hidden":o.default.bool,animateOpacity:o.default.bool,animationStateClasses:o.default.object,applyInlineTransitions:o.default.bool,children:o.default.any.isRequired,className:o.default.string,contentClassName:o.default.string,delay:o.default.number,duration:o.default.number,easing:o.default.string,height:function(e,t,n){var i=e[t];return"number"===typeof i&&i>=0||g(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+("undefined"===typeof i?"undefined":a(i))+'" is invalid type for '+t+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:o.default.string,onAnimationEnd:o.default.func,onAnimationStart:o.default.func,style:o.default.object},y.defaultProps={animateOpacity:!1,animationStateClasses:d,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=y},802:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return O}));var a=n(26),i=n(8),r=n(9),s=n(10),o=n(11),l=n(0),c=n.n(l),u=n(788),d=n(779),h=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={hover:null},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.probabilities,n=e.actualEvent,a=e.xAxis,i=e.yAxis,r=e.yDomain,s=e.tooltip,o={probabilities:t,actual:n},l={encoding:{x:{field:"x",type:"quantitative",title:a.title,axis:{grid:!1,format:a.tickFormat}},y:{field:"y",type:"quantitative",title:i.title,axis:{grid:!1,format:".0%"},scale:{domain:r}}},layer:[{data:{name:"probabilities"},mark:{type:"area",color:"rgba(250, 183, 0, 0.15)",line:{color:"#fab700",strokeWidth:1}}},{data:{name:"actual"},mark:{type:"point",filled:!0,color:"#00ff96",size:60},encoding:{tooltip:[{field:"x",title:s}]}}]};return c.a.createElement(u.a,{disableHeight:!0},(function(e){var t=e.width;return c.a.createElement(d.a,{height:150,width:t,spec:l,data:o})}))}}]),n}(c.a.Component);function m(e,t){return e*t}function f(e,t,n){return function(e,t){for(var n=1,a=1,i=e-t+1;i<=e;i+=1)n*=i;for(var r=1;r<=t;r+=1)a*=r;return n/a}(t,e)*Math.pow(n,e)*Math.pow(1-n,t-e)}function p(e,t,n){for(var a=0,i=0;i<=e;i+=1)a+=f(i,t,n);return a}function g(e,t){for(var n=-1,a=0,i=0;i<=e;i+=1){var r=t(i,e);r>a&&(n=i,a=r)}return{max:n,p:a}}function b(e,t,n){return Array.from({length:t},(function(e,a){return"number"===typeof n?{x:a,y:f(a,t,n)}:{x:a,y:E(a,t,n)}}))}function y(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.001,i=b(0,t,n),r=i.findIndex((function(e){return e.y>=a})),s=r+i.slice(r).findIndex((function(e){return e.y<a}));return{procProbabilities:i,rangeMin:r,rangeMax:s}}function v(e,t,n,a){if(-1===e)return 0;if(e===t+1)return 0;if(0===e&&0===t)return 1;if(null!==a[e][t])return a[e][t];var i=(1-n[t-1])*v(e,t-1,n,a)+n[t-1]*v(e-1,t-1,n,a);return a[e][t]=i,i}function E(e,t,n){if(n.length!==t)throw new Error("You must supply a probability vector with the same length as the number of total tries into Poisson Binomial PMF");var i=Object(a.a)(Array(t+1)).map((function(e){return Array(t+1).fill(null)}));return v(e,t,n,i)}function O(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Procs",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[0,.4],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{title:a,tickFormat:"~k"},o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{title:"Likelihood"},l=y(e,t,n),u=l.procProbabilities,d=l.rangeMin,m=l.rangeMax,p="number"===typeof n?f(e,t,n):E(e,t,n);return c.a.createElement(h,{probabilities:u.slice(d,m+1),actualEvent:{x:e,y:p},yDomain:r,xAxis:s,yAxis:o,tooltip:i})}},859:function(e,t,n){"use strict";var a=n(6),i=n(0),r=n.n(i),s=n(33);t.a=function(e){var t=e.value;return r.a.createElement("div",{className:"flex",style:{textAlign:"center",marginTop:12}},r.a.createElement(a.Trans,{id:"interface.statistics.components.gauge.low",render:"div",className:"flex-main text-right text-muted",style:{paddingTop:23,paddingRight:8,fontSize:12}}),r.a.createElement("div",{className:"flex-sub",style:{position:"relative"}},r.a.createElement("svg",{width:"98",height:"85",viewBox:"19 19 101 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{fill:"none"}},r.a.createElement("path",{d:"M101.459 101.459C119.033 83.8858 119.033 55.3934 101.459 37.8198C83.8859 20.2462 55.3934 20.2462 37.8198 37.8198C20.2463 55.3934 20.2463 83.8858 37.8198 101.459",stroke:"#f8b700",strokeWidth:"8",strokeLinecap:"round"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.6396 28.6396H70.6396V32.6396H68.6396V28.6396Z",fill:"#f8b700"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M87.7656 32.8389L89.5485 33.7451L87.7368 37.3097L85.9539 36.4035L87.7656 32.8389Z",fill:"#f8b700"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M101.207 50.1829L100.077 48.5324L103.378 46.2732L104.508 47.9236L101.207 50.1829Z",fill:"#f8b700"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M106.622 67.3762L106.417 65.3868L110.398 64.9765L110.603 66.966L106.622 67.3762Z",fill:"#f8b700"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M103.658 84.4276L104.376 82.5609L108.11 83.9969L107.392 85.8635L103.658 84.4276Z",fill:"#f8b700"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M52.0547 32.5298L50.2627 33.4179L52.039 37.0019L53.831 36.1137L52.0547 32.5298Z",fill:"#f8b700"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.1157 45.9784L34.965 47.6142L38.2354 49.9147L39.3861 48.2789L36.1157 45.9784Z",fill:"#f8b700"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.8926 64.968L28.6883 66.9576L32.6626 67.3657L32.8669 65.3761L28.8926 64.968Z",fill:"#f8b700"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.3486 84.3921L32.0806 86.2533L35.8031 84.7895L35.0711 82.9282L31.3486 84.3921Z",fill:"#f8b700"})),r.a.createElement("div",{style:{position:"absolute",top:49,left:"50%",width:32,height:32,transform:"translate(-50%, -50%)",marginTop:-13}},r.a.createElement("svg",{width:"10",height:"32",viewBox:"0 0 10 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{fill:"none",margin:0,transformOrigin:"5px 27px",transform:"rotate(".concat(280*t-140,"deg)")}},r.a.createElement("path",{d:"M9 27C9 29.2091 7.20914 31 5 31C2.79086 31 1 29.2091 1 27C1 24.7909 2.79086 23 5 23C7.20914 23 9 24.7909 9 27Z",stroke:"#f8b700",strokeWidth:"2"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 0L6 23H4L4 0L6 0Z",fill:"#f8b700"}))),r.a.createElement("div",{className:"value",style:{marginTop:-18,fontSize:"1.25em"}},Object(s.e)(t,0),"%")),r.a.createElement(a.Trans,{id:"interface.statistics.components.gauge.high",render:"div",className:"flex-main text-left text-muted",style:{paddingTop:23,paddingLeft:8,fontSize:12}}))}},862:function(e,t,n){"use strict";var a=n(27),i=n(0),r=n.n(i);n(979);t.a=function(e){var t=e.uptimeHistory,n=e.start,i=e.end,s=Object(a.a)(e,["uptimeHistory","start","end"]),o=i-n;return r.a.createElement("div",Object.assign({className:"uptime-bar"},s),t.map((function(e){var t=e.start,a=null!==e.end?e.end:i;return r.a.createElement("div",{key:"".concat(t,"-").concat(a),style:{left:"".concat((t-n)/o*100,"%"),width:"".concat((a-t)/o*100,"%")}})})))}},979:function(e,t,n){}}]);
//# sourceMappingURL=8.d9a70a87.chunk.js.map