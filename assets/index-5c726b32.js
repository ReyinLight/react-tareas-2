(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();var I,f,ke,U,ee,Pe,Z,A={},$e=[],De=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function x(e,_){for(var t in _)e[t]=_[t];return e}function Se(e){var _=e.parentNode;_&&_.removeChild(e)}function G(e,_,t){var o,r,n,l={};for(n in _)n=="key"?o=_[n]:n=="ref"?r=_[n]:l[n]=_[n];if(arguments.length>2&&(l.children=arguments.length>3?I.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)l[n]===void 0&&(l[n]=e.defaultProps[n]);return D(e,l,o,r,null)}function D(e,_,t,o,r){var n={type:e,props:_,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++ke};return r==null&&f.vnode!=null&&f.vnode(n),n}function E(e){return e.children}function N(e,_){this.props=e,this.context=_}function M(e,_){if(_==null)return e.__?M(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?M(e):null}function we(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return we(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!R.__r++||ee!==f.debounceRendering)&&((ee=f.debounceRendering)||Pe)(R)}function R(){var e,_,t,o,r,n,l,u,c;for(U.sort(Z);e=U.shift();)e.__d&&(_=U.length,o=void 0,r=void 0,n=void 0,u=(l=(t=e).__v).__e,(c=t.__P)&&(o=[],r=[],(n=x({},l)).__v=l.__v+1,Y(c,l,n,t.__n,c.ownerSVGElement!==void 0,l.__h!=null?[u]:null,o,u??M(l),l.__h,r),He(o,l,r),l.__e!=u&&we(l)),U.length>_&&U.sort(Z));R.__r=0}function Ne(e,_,t,o,r,n,l,u,c,v,p){var i,h,d,a,s,O,m,y,$,S,k=0,P=o&&o.__k||$e,H=P.length,C=H,g=_.length;for(t.__k=[],i=0;i<g;i++)(a=t.__k[i]=(a=_[i])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?D(null,a,null,null,a):q(a)?D(E,{children:a},null,null,null):a.__b>0?D(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null&&(a.__=t,a.__b=t.__b+1,(y=We(a,P,m=i+k,C))===-1?d=A:(d=P[y]||A,P[y]=void 0,C--),Y(e,a,d,r,n,l,u,c,v,p),s=a.__e,(h=a.ref)&&d.ref!=h&&(d.ref&&J(d.ref,null,a),p.push(h,a.__c||s,a)),s!=null&&(O==null&&(O=s),S=!($=d===A||d.__v===null)&&y===m,$?y==-1&&k--:y!==m&&(y===m+1?(k++,S=!0):y>m?C>g-m?(k+=y-m,S=!0):k--:k=y<m&&y==m-1?y-m:0),m=i+k,S=S||y==i&&!$,typeof a.type!="function"||y===m&&d.__k!==a.__k?typeof a.type=="function"||S?a.__d!==void 0?(c=a.__d,a.__d=void 0):c=s.nextSibling:c=Ee(e,s,c):c=xe(a,c,e),typeof t.type=="function"&&(t.__d=c)));for(t.__e=O,i=H;i--;)P[i]!=null&&(typeof t.type=="function"&&P[i].__e!=null&&P[i].__e==t.__d&&(t.__d=P[i].__e.nextSibling),Ce(P[i],P[i]))}function xe(e,_,t){for(var o,r=e.__k,n=0;r&&n<r.length;n++)(o=r[n])&&(o.__=e,_=typeof o.type=="function"?xe(o,_,t):Ee(t,o.__e,_));return _}function V(e,_){return _=_||[],e==null||typeof e=="boolean"||(q(e)?e.some(function(t){V(t,_)}):_.push(e)),_}function Ee(e,_,t){return t==null||t.parentNode!==e?e.insertBefore(_,null):_==t&&_.parentNode!=null||e.insertBefore(_,t),_.nextSibling}function We(e,_,t,o){var r=e.key,n=e.type,l=t-1,u=t+1,c=_[t];if(c===null||c&&r==c.key&&n===c.type)return t;if(o>(c!=null?1:0))for(;l>=0||u<_.length;){if(l>=0){if((c=_[l])&&r==c.key&&n===c.type)return l;l--}if(u<_.length){if((c=_[u])&&r==c.key&&n===c.type)return u;u++}}return-1}function Fe(e,_,t,o,r){var n;for(n in t)n==="children"||n==="key"||n in _||B(e,n,null,t[n],o);for(n in _)r&&typeof _[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||t[n]===_[n]||B(e,n,_[n],t[n],o)}function te(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||De.test(_)?t:t+"px"}function B(e,_,t,o,r){var n;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(_ in o)t&&_ in t||te(e.style,_,"");if(t)for(_ in t)o&&t[_]===o[_]||te(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")n=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+n]=t,t?o||e.addEventListener(_,n?oe:ne,n):e.removeEventListener(_,n?oe:ne,n);else if(_!=="dangerouslySetInnerHTML"){if(r)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function ne(e){return this.l[e.type+!1](f.event?f.event(e):e)}function oe(e){return this.l[e.type+!0](f.event?f.event(e):e)}function Y(e,_,t,o,r,n,l,u,c,v){var p,i,h,d,a,s,O,m,y,$,S,k,P,H,C,g=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,u=_.__e=t.__e,_.__h=null,n=[u]),(p=f.__b)&&p(_);try{e:if(typeof g=="function"){if(m=_.props,y=(p=g.contextType)&&o[p.__c],$=p?y?y.props.value:p.__:o,t.__c?O=(i=_.__c=t.__c).__=i.__E:("prototype"in g&&g.prototype.render?_.__c=i=new g(m,$):(_.__c=i=new N(m,$),i.constructor=g,i.render=Re),y&&y.sub(i),i.props=m,i.state||(i.state={}),i.context=$,i.__n=o,h=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),g.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=x({},i.__s)),x(i.__s,g.getDerivedStateFromProps(m,i.__s))),d=i.props,a=i.state,i.__v=_,h)g.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(g.getDerivedStateFromProps==null&&m!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,$),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,$)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(i.props=m,i.state=i.__s,i.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(T){T&&(T.__=_)}),S=0;S<i._sb.length;S++)i.__h.push(i._sb[S]);i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,$),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,a,s)})}if(i.context=$,i.props=m,i.__P=e,i.__e=!1,k=f.__r,P=0,"prototype"in g&&g.prototype.render){for(i.state=i.__s,i.__d=!1,k&&k(_),p=i.render(i.props,i.state,i.context),H=0;H<i._sb.length;H++)i.__h.push(i._sb[H]);i._sb=[]}else do i.__d=!1,k&&k(_),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++P<25);i.state=i.__s,i.getChildContext!=null&&(o=x(x({},o),i.getChildContext())),h||i.getSnapshotBeforeUpdate==null||(s=i.getSnapshotBeforeUpdate(d,a)),Ne(e,q(C=p!=null&&p.type===E&&p.key==null?p.props.children:p)?C:[C],_,t,o,r,n,l,u,c,v),i.base=_.__e,_.__h=null,i.__h.length&&l.push(i),O&&(i.__E=i.__=null)}else n==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=Me(t.__e,_,t,o,r,n,l,c,v);(p=f.diffed)&&p(_)}catch(T){_.__v=null,(c||n!=null)&&(_.__e=u,_.__h=!!c,n[n.indexOf(u)]=null),f.__e(T,_,t)}}function He(e,_,t){for(var o=0;o<t.length;o++)J(t[o],t[++o],t[++o]);f.__c&&f.__c(_,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(n){n.call(r)})}catch(n){f.__e(n,r.__v)}})}function Me(e,_,t,o,r,n,l,u,c){var v,p,i,h=t.props,d=_.props,a=_.type,s=0;if(a==="svg"&&(r=!0),n!=null){for(;s<n.length;s++)if((v=n[s])&&"setAttribute"in v==!!a&&(a?v.localName===a:v.nodeType===3)){e=v,n[s]=null;break}}if(e==null){if(a===null)return document.createTextNode(d);e=r?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,d.is&&d),n=null,u=!1}if(a===null)h===d||u&&e.data===d||(e.data=d);else{if(n=n&&I.call(e.childNodes),p=(h=t.props||A).dangerouslySetInnerHTML,i=d.dangerouslySetInnerHTML,!u){if(n!=null)for(h={},s=0;s<e.attributes.length;s++)h[e.attributes[s].name]=e.attributes[s].value;(i||p)&&(i&&(p&&i.__html==p.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Fe(e,d,h,r,u),i)_.__k=[];else if(Ne(e,q(s=_.props.children)?s:[s],_,t,o,r&&a!=="foreignObject",n,l,n?n[0]:t.__k&&M(t,0),u,c),n!=null)for(s=n.length;s--;)n[s]!=null&&Se(n[s]);u||("value"in d&&(s=d.value)!==void 0&&(s!==e.value||a==="progress"&&!s||a==="option"&&s!==h.value)&&B(e,"value",s,h.value,!1),"checked"in d&&(s=d.checked)!==void 0&&s!==e.checked&&B(e,"checked",s,h.checked,!1))}return e}function J(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(o){f.__e(o,t)}}function Ce(e,_,t){var o,r;if(f.unmount&&f.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||J(o,null,_)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){f.__e(n,_)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&Ce(o[r],_,t||typeof e.type!="function");t||e.__e==null||Se(e.__e),e.__=e.__e=e.__d=void 0}function Re(e,_,t){return this.constructor(e,t)}function Ve(e,_,t){var o,r,n,l;f.__&&f.__(e,_),r=(o=typeof t=="function")?null:t&&t.__k||_.__k,n=[],l=[],Y(_,e=(!o&&t||_).__k=G(E,null,[e]),r||A,A,_.ownerSVGElement!==void 0,!o&&t?[t]:r?null:_.firstChild?I.call(_.childNodes):null,n,!o&&t?t:r?r.__e:_.firstChild,o,l),He(n,e,l)}I=$e.slice,f={__e:function(e,_,t,o){for(var r,n,l;_=_.__;)if((r=_.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(e)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),l=r.__d),l)return r.__E=r}catch(u){e=u}throw e}},ke=0,N.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},t),this.props)),e&&x(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),_e(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},N.prototype.render=E,U=[],Pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Z=function(e,_){return e.__v.__b-_.__v.__b},R.__r=0;var K,b,j,re,Q=0,Ue=[],W=[],ie=f.__b,le=f.__r,ue=f.diffed,ce=f.__c,fe=f.unmount;function Be(e,_){f.__h&&f.__h(b,e,Q||_),Q=0;var t=b.__H||(b.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:W}),t.__[e]}function Ie(e){return Q=1,qe(Oe,e)}function qe(e,_,t){var o=Be(K++,2);if(o.t=e,!o.__c&&(o.__=[t?t(_):Oe(void 0,_),function(u){var c=o.__N?o.__N[0]:o.__[0],v=o.t(c,u);c!==v&&(o.__N=[v,o.__[1]],o.__c.setState({}))}],o.__c=b,!b.u)){var r=function(u,c,v){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(h){return h.__c});if(p.every(function(h){return!h.__N}))return!n||n.call(this,u,c,v);var i=!1;return p.forEach(function(h){if(h.__N){var d=h.__[0];h.__=h.__N,h.__N=void 0,d!==h.__[0]&&(i=!0)}}),!(!i&&o.__c.props===u)&&(!n||n.call(this,u,c,v))};b.u=!0;var n=b.shouldComponentUpdate,l=b.componentWillUpdate;b.componentWillUpdate=function(u,c,v){if(this.__e){var p=n;n=void 0,r(u,c,v),n=p}l&&l.call(this,u,c,v)},b.shouldComponentUpdate=r}return o.__N||o.__}function je(){for(var e;e=Ue.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(F),e.__H.__h.forEach(X),e.__H.__h=[]}catch(_){e.__H.__h=[],f.__e(_,e.__v)}}f.__b=function(e){b=null,ie&&ie(e)},f.__r=function(e){le&&le(e),K=0;var _=(b=e.__c).__H;_&&(j===b?(_.__h=[],b.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=W,t.__N=t.i=void 0})):(_.__h.forEach(F),_.__h.forEach(X),_.__h=[],K=0)),j=b},f.diffed=function(e){ue&&ue(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(Ue.push(_)!==1&&re===f.requestAnimationFrame||((re=f.requestAnimationFrame)||ze)(je)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==W&&(t.__=t.__V),t.i=void 0,t.__V=W})),j=b=null},f.__c=function(e,_){_.some(function(t){try{t.__h.forEach(F),t.__h=t.__h.filter(function(o){return!o.__||X(o)})}catch(o){_.some(function(r){r.__h&&(r.__h=[])}),_=[],f.__e(o,t.__v)}}),ce&&ce(e,_)},f.unmount=function(e){fe&&fe(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{F(o)}catch(r){_=r}}),t.__H=void 0,_&&f.__e(_,t.__v))};var ae=typeof requestAnimationFrame=="function";function ze(e){var _,t=function(){clearTimeout(o),ae&&cancelAnimationFrame(_),setTimeout(e)},o=setTimeout(t,100);ae&&(_=requestAnimationFrame(t))}function F(e){var _=b,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),b=_}function X(e){var _=b;e.__c=e.__(),b=_}function Oe(e,_){return typeof _=="function"?_(e):_}function Ze(e,_){for(var t in _)e[t]=_[t];return e}function se(e,_){for(var t in e)if(t!=="__source"&&!(t in _))return!0;for(var o in _)if(o!=="__source"&&e[o]!==_[o])return!0;return!1}function pe(e){this.props=e}(pe.prototype=new N).isPureReactComponent=!0,pe.prototype.shouldComponentUpdate=function(e,_){return se(this.props,e)||se(this.state,_)};var de=f.__b;f.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),de&&de(e)};var Ge=f.__e;f.__e=function(e,_,t,o){if(e.then){for(var r,n=_;n=n.__;)if((r=n.__c)&&r.__c)return _.__e==null&&(_.__e=t.__e,_.__k=t.__k),r.__c(e,_)}Ge(e,_,t,o)};var he=f.unmount;function Ae(e,_,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Ze({},e)).__c!=null&&(e.__c.__P===t&&(e.__c.__P=_),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return Ae(o,_,t)})),e}function Te(e,_,t){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return Te(o,_,t)}),e.__c&&e.__c.__P===_&&(e.__e&&t.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=t)),e}function z(){this.__u=0,this.t=null,this.__b=null}function Le(e){var _=e.__.__c;return _&&_.__a&&_.__a(e)}function L(){this.u=null,this.o=null}f.unmount=function(e){var _=e.__c;_&&_.__R&&_.__R(),_&&e.__h===!0&&(e.type=null),he&&he(e)},(z.prototype=new N).__c=function(e,_){var t=_.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var r=Le(o.__v),n=!1,l=function(){n||(n=!0,t.__R=null,r?r(u):u())};t.__R=l;var u=function(){if(!--o.__u){if(o.state.__a){var v=o.state.__a;o.__v.__k[0]=Te(v,v.__c.__P,v.__c.__O)}var p;for(o.setState({__a:o.__b=null});p=o.t.pop();)p.forceUpdate()}},c=_.__h===!0;o.__u++||c||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(l,l)},z.prototype.componentWillUnmount=function(){this.t=[]},z.prototype.render=function(e,_){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=Ae(this.__b,t,o.__O=o.__P)}this.__b=null}var r=_.__a&&G(E,null,e.fallback);return r&&(r.__h=null),[G(E,null,_.__a?null:e.children),r]};var ve=function(e,_,t){if(++t[1]===t[0]&&e.o.delete(_),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};(L.prototype=new N).__a=function(e){var _=this,t=Le(_.__v),o=_.o.get(e);return o[0]++,function(r){var n=function(){_.props.revealOrder?(o.push(r),ve(_,e,o)):r()};t?t(n):n()}},L.prototype.render=function(e){this.u=null,this.o=new Map;var _=V(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&_.reverse();for(var t=_.length;t--;)this.o.set(_[t],this.u=[1,0,this.u]);return e.children},L.prototype.componentDidUpdate=L.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(_,t){ve(e,t,_)})};var Ke=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Xe=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ye=/[A-Z0-9]/g,Je=typeof document<"u",e_=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};N.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(N.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(_){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:_})}})});var me=f.event;function __(){}function t_(){return this.cancelBubble}function n_(){return this.defaultPrevented}f.event=function(e){return me&&(e=me(e)),e.persist=__,e.isPropagationStopped=t_,e.isDefaultPrevented=n_,e.nativeEvent=e};var o_={enumerable:!1,configurable:!0,get:function(){return this.class}},ye=f.vnode;f.vnode=function(e){typeof e.type=="string"&&function(_){var t=_.props,o=_.type,r={};for(var n in t){var l=t[n];if(!(n==="value"&&"defaultValue"in t&&l==null||Je&&n==="children"&&o==="noscript"||n==="class"||n==="className")){var u=n.toLowerCase();n==="defaultValue"&&"value"in t&&t.value==null?n="value":n==="download"&&l===!0?l="":u==="ondoubleclick"?n="ondblclick":u!=="onchange"||o!=="input"&&o!=="textarea"||e_(t.type)?u==="onfocus"?n="onfocusin":u==="onblur"?n="onfocusout":Xe.test(n)?n=u:o.indexOf("-")===-1&&Qe.test(n)?n=n.replace(Ye,"-$&").toLowerCase():l===null&&(l=void 0):u=n="oninput",u==="oninput"&&r[n=u]&&(n="oninputCapture"),r[n]=l}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=V(t.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=V(t.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",o_)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),_.props=r}(e),e.$$typeof=Ke,ye&&ye(e)};var be=f.__r;f.__r=function(e){be&&be(e),e.__c};var ge=f.diffed;f.diffed=function(e){ge&&ge(e);var _=e.props,t=e.__e;t!=null&&e.type==="textarea"&&"value"in _&&_.value!==t.value&&(t.value=_.value==null?"":_.value)};var r_=0;function w(e,_,t,o,r,n){var l,u,c={};for(u in _)u=="ref"?l=_[u]:c[u]=_[u];var v={type:e,props:c,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--r_,__source:r,__self:n};if(typeof e=="function"&&(l=e.defaultProps))for(u in l)c[u]===void 0&&(c[u]=l[u]);return f.vnode&&f.vnode(v),v}const i_=()=>{const[e,_]=Ie(0);return w(E,{children:[w("button",{onClick:()=>{_(e+1)},children:"~picale aqui~ uwu"}),w("br",{}),w("label",{children:[" ",e," "]}),w("br",{}),w("button",{onClick:()=>{_(0)},children:"muerele la suma >:c"}),w("br",{})]})};function l_(){return w(E,{children:w(i_,{})})}Ve(w(l_,{}),document.getElementById("app"));
