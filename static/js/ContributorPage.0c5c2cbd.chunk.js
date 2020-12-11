(this.webpackJsonpwowanalyzer=this.webpackJsonpwowanalyzer||[]).push([[19],{1299:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(8),i=a(9),r=a(23),s=a(10),o=a(11),l=a(0),c=a.n(l),u=a(136),m=a(5),h=a(207),d=a(821),f=a(49),g=a(822),p=a(213),v=a(2),y=Object.assign({},v),b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).filterChangelog=i.filterChangelog.bind(Object(r.a)(i)),i}return Object(i.a)(a,[{key:"removeWhiteSpaces",value:function(e){return e.replace(" ","")}},{key:"renderCharacter",value:function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("a",{href:e.link,className:this.removeWhiteSpaces(e.spec.className)},c.a.createElement(h.a,{id:e.spec.id})," ",e.name))}},{key:"filterChangelog",value:function(e){return e.contributors.includes(y[this.props.contributorId])}},{key:"contributionHeader",value:function(e){return 0===e?c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"/favicon.png",style:{height:"2em",width:"2em",marginRight:10},alt:"Core"}),"Core"):c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{id:e,style:{height:"2em",width:"2em",marginRight:10}}),m.a[e].specName," ",m.a[e].className)}},{key:"links",value:function(e){if(!e)return null;var t=[];return Object.keys(e).forEach((function(a){t.push(c.a.createElement("div",null,c.a.createElement("a",{href:e[a],target:"_blank",rel:"noopener noreferrer"},a)))})),c.a.createElement("div",{className:"row",style:{marginBottom:20}},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("b",null,"Links:")),c.a.createElement("div",{className:"col-md-9"},t))}},{key:"additionalInfo",value:function(e){if(void 0===e)return null;var t=[];return Object.keys(e).forEach((function(a){var n=e[a];if(Array.isArray(n)){var i=[];n.forEach((function(e){i.push(c.a.createElement("div",null,e))})),t.push(c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("b",null,a,":")),c.a.createElement("div",{className:"col-md-9"},i)))}else"string"===typeof n&&t.push(c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("b",null,a,":")),c.a.createElement("div",{className:"col-md-9"},e[a])))})),t}},{key:"chars",value:function(e,t){var a=this,n=t?e.mains:e.alts;if(!n)return null;var i=t?{marginTop:20}:{marginBottom:20};return c.a.createElement("div",{className:"row",style:i},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("b",null,t?"Mains":"Alts",":")),c.a.createElement("div",{className:"col-md-9"},n.map((function(e){return a.renderCharacter(e)}))))}},{key:"text",value:function(e,t){return e?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("b",null,t,":")),c.a.createElement("div",{className:"col-md-9"},e)):null}},{key:"invalidContributor",value:function(){return c.a.createElement("section",null,c.a.createElement("header",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h1",null,"Invalid Contributor")))))}},{key:"componentDidMount",value:function(){this.props.ownPage||document.body.classList.toggle("no-scroll")}},{key:"componentWillUnmount",value:function(){this.props.ownPage||document.body.classList.remove("no-scroll")}},{key:"render",value:function(){var e=this,t=this.props.contributorId,a=y[t];if(!a)return this.invalidContributor();var n={0:u.a},i=p.a.reduce((function(e,t){return e[t.spec.id]=t.changelog,e}),n);return Object.keys(i).map(Number).forEach((function(t){i[t]=i[t].filter(e.filterChangelog),0===i[t].length&&delete i[t]})),a.avatar||(a.avatar="/favicon.png"),c.a.createElement("div",{className:"contributor-detail"},c.a.createElement("div",{className:"flex-main"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement(f.a,{title:a.nickname},c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("img",{src:a.avatar,alt:"Avatar",style:{marginTop:20,maxHeight:200,borderRadius:"50%"}})),c.a.createElement("div",{className:"flex-main contributorlist"},this.text(a.about,"About"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("b",null,"GitHub:")),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("a",{href:"https://github.com/"+a.github,target:"_blank",rel:"noopener noreferrer"},a.github))),this.text(a.discord,"Discord"),this.maintainer,this.links(a.links),this.additionalInfo(a.others),this.chars(a,!0),this.chars(a,!1)))),c.a.createElement("div",{className:"col-md-7"},c.a.createElement(f.a,{title:"Contributions this expansion",pad:!1},c.a.createElement("ul",{className:"list"},Object.keys(i).map(Number).map((function(t,a){return c.a.createElement(g.b,{key:a,element:"li",header:c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"flex-main name"},e.contributionHeader(t)," (",i[t].length," ",1===i[t].length?"change":"changes",")"),c.a.createElement("div",{className:"flex-sub chevron"},c.a.createElement(d.a,null)))},c.a.createElement("ul",{className:"list text depad"},i[t].map((function(e,t){return c.a.createElement("li",{key:t,className:"row"},c.a.createElement("div",{className:"col-md-2"},e.date.toLocaleDateString()),c.a.createElement("div",{className:"col-md-10"},e.changes))}))))}))))))))}},{key:"maintainer",get:function(){var e=this,t=p.a.filter((function(t){return t.contributors.filter((function(t){return t.nickname===e.props.contributorId})).length>0})).map((function(e){return e.spec}));return 0===t.length?null:c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("b",null,"Maintainer:")),c.a.createElement("div",{className:"col-md-9"},t.map((function(t){return c.a.createElement("div",{key:t.id,className:e.removeWhiteSpaces(t.className)},c.a.createElement(h.a,{id:t.id})," ",t.specName," ",t.className)}))))}}]),a}(c.a.PureComponent)},1320:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a(27),i=a(0),r=a.n(i),s=a(90),o=a(1299),l=function(e){var t=e.contributorId,a=Object(n.a)(e,["contributorId"]);return r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{title:t}),r.a.createElement(o.default,Object.assign({ownPage:!0,contributorId:t},a)))}},798:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=c(a(0)),o=c(a(37)),l=c(a(395));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function d(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];if(!a.length)return e;for(var i={},r=Object.keys(e),s=0;s<r.length;s++){var o=r[s];-1===a.indexOf(o)&&(i[o]=e[o])}return i}function f(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function g(e){return!isNaN(parseFloat(e))&&isFinite(e)}function p(e){return"string"===typeof e&&e.search("%")===e.length-1&&g(e.substr(0,e.length-1))}function v(e,t){e&&"function"===typeof e&&e(t)}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.animationFrameIDs=[];var n="auto",r="visible";g(e.height)?(n=e.height<0||"0"===e.height?0:e.height,r="hidden"):p(e.height)&&(n="0%"===e.height?0:e.height,r="hidden"),a.animationStateClasses=i({},m,e.animationStateClasses);var s=a.getStaticStateClasses(n);return a.state={animationStateClasses:s,height:n,overflow:r,shouldUseTransitions:!1},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props,i=n.delay,r=n.duration,s=n.height,o=n.onAnimationEnd,c=n.onAnimationStart;if(this.contentElement&&s!==e.height){var m;this.showContent(t.height),this.contentElement.style.overflow="hidden";var h=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var d=r+i,y=null,b={height:null,overflow:"hidden"},E="auto"===t.height;g(s)?(y=s<0||"0"===s?0:s,b.height=y):p(s)?(y="0%"===s?0:s,b.height=y):(y=h,b.height="auto",b.overflow=null),E&&(b.height=y,y=h);var N=(0,l.default)((u(m={},this.animationStateClasses.animating,!0),u(m,this.animationStateClasses.animatingUp,"auto"===e.height||s<e.height),u(m,this.animationStateClasses.animatingDown,"auto"===s||s>e.height),u(m,this.animationStateClasses.animatingToHeightZero,0===b.height),u(m,this.animationStateClasses.animatingToHeightAuto,"auto"===b.height),u(m,this.animationStateClasses.animatingToHeightSpecific,b.height>0),m)),C=this.getStaticStateClasses(b.height);this.setState({animationStateClasses:N,height:y,overflow:"hidden",shouldUseTransitions:!E}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),E?(b.shouldUseTransitions=!0,f(this.animationFrameIDs),this.animationFrameIDs=function(e){var t=[];return t[0]=requestAnimationFrame((function(){t[1]=requestAnimationFrame((function(){e()}))})),t}((function(){a.setState(b),v(c,{newHeight:b.height})})),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:C,shouldUseTransitions:!1}),a.hideContent(b.height),v(o,{newHeight:b.height})}),d)):(v(c,{newHeight:y}),this.timeoutID=setTimeout((function(){b.animationStateClasses=C,b.shouldUseTransitions=!1,a.setState(b),"auto"!==s&&a.hideContent(y),v(o,{newHeight:y})}),d))}}},{key:"componentWillUnmount",value:function(){f(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,l.default)((u(t={},this.animationStateClasses.static,!0),u(t,this.animationStateClasses.staticHeightZero,0===e),u(t,this.animationStateClasses.staticHeightSpecific,e>0),u(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.animateOpacity,r=a.applyInlineTransitions,o=a.children,c=a.className,m=a.contentClassName,f=a.delay,g=a.duration,p=a.easing,v=a.id,y=a.style,b=this.state,E=b.height,N=b.overflow,C=b.animationStateClasses,w=b.shouldUseTransitions,S=i({},y,{height:E,overflow:N||y.overflow});w&&r&&(S.transition="height "+g+"ms "+p+" "+f+"ms",y.transition&&(S.transition=y.transition+", "+S.transition),S.WebkitTransition=S.transition);var k={};n&&(k.transition="opacity "+g+"ms "+p+" "+f+"ms",k.WebkitTransition=k.transition,0===E&&(k.opacity=0));var O=(0,l.default)((u(e={},C,!0),u(e,c,c),e)),T="undefined"!==typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===E;return s.default.createElement("div",i({},d.apply(void 0,[this.props].concat(h)),{"aria-hidden":T,className:O,id:v,style:S}),s.default.createElement("div",{className:m,style:k,ref:function(e){return t.contentElement=e}},o))}}]),t}(s.default.Component);y.propTypes={"aria-hidden":o.default.bool,animateOpacity:o.default.bool,animationStateClasses:o.default.object,applyInlineTransitions:o.default.bool,children:o.default.any.isRequired,className:o.default.string,contentClassName:o.default.string,delay:o.default.number,duration:o.default.number,easing:o.default.string,height:function(e,t,a){var i=e[t];return"number"===typeof i&&i>=0||p(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+("undefined"===typeof i?"undefined":n(i))+'" is invalid type for '+t+" in "+a+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:o.default.string,onAnimationEnd:o.default.func,onAnimationStart:o.default.func,style:o.default.object},y.defaultProps={animateOpacity:!1,animationStateClasses:m,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=y},821:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=Object.assign({},e);return i.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 9",className:"icon"},t),i.a.createElement("path",{d:"M14.0059397,2.26485497e-14 C15.1072288,2.26485497e-14 15.3722573,0.627746582 14.5881847,1.41182411 L8.70999225,7.29005337 C8.317902,7.68214607 7.67653023,7.6764822 7.29009898,7.29005337 L1.41183294,1.41182411 C0.632099139,0.632095183 0.894513756,2.26485497e-14 1.99406028,2.26485497e-14 L14.0059397,2.26485497e-14 Z"}))}},822:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c}));var n=a(31),i=a(0),r=a.n(i),s=a(798),o=a.n(s),l=(a(823),function(e){var t=Object(i.useState)(!1),a=Object(n.a)(t,2),s=a[0],l=a[1],c=e.header,u=e.children,m=e.element,h=e.className;return r.a.createElement(m,{className:"expandable ".concat(s?"expanded":""," ").concat(h||"")},r.a.createElement("div",{className:"meta",onClick:function(){l((function(e){return!e}))}},c),r.a.createElement(o.a,{className:"details",height:s?"auto":0},u))}),c=function(e){var t=e.header,a=e.children,n=e.element,i=e.className;return r.a.createElement(n,{className:"expandable ".concat(e.expanded?"expanded":""," ").concat(i||"")},r.a.createElement("div",{className:"meta",onClick:e.inverseExpanded},t),r.a.createElement(o.a,{className:"details",height:e.expanded?"auto":0},a))}},823:function(e,t,a){}}]);
//# sourceMappingURL=ContributorPage.0c5c2cbd.chunk.js.map