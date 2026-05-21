(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function c(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(d){if(d.ep)return;d.ep=!0;const p=c(d);fetch(d.href,p)}})();function ug(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var qc={exports:{}},Ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function fg(){if(rm)return Ki;rm=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(s,d,p){var g=null;if(p!==void 0&&(g=""+p),d.key!==void 0&&(g=""+d.key),"key"in d){p={};for(var x in d)x!=="key"&&(p[x]=d[x])}else p=d;return d=p.ref,{$$typeof:l,type:s,key:g,ref:d!==void 0?d:null,props:p}}return Ki.Fragment=o,Ki.jsx=c,Ki.jsxs=c,Ki}var sm;function dg(){return sm||(sm=1,qc.exports=fg()),qc.exports}var u=dg(),Gc={exports:{}},Ji={},Qc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function pg(){return om||(om=1,(function(l){function o(D,Z){var $=D.length;D.push(Z);t:for(;0<$;){var lt=$-1>>>1,W=D[lt];if(0<d(W,Z))D[lt]=Z,D[$]=W,$=lt;else break t}}function c(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var Z=D[0],$=D.pop();if($!==Z){D[0]=$;t:for(var lt=0,W=D.length,b=W>>>1;lt<b;){var U=2*(lt+1)-1,I=D[U],ut=U+1,yt=D[ut];if(0>d(I,$))ut<W&&0>d(yt,I)?(D[lt]=yt,D[ut]=$,lt=ut):(D[lt]=I,D[U]=$,lt=U);else if(ut<W&&0>d(yt,$))D[lt]=yt,D[ut]=$,lt=ut;else break t}}return Z}function d(D,Z){var $=D.sortIndex-Z.sortIndex;return $!==0?$:D.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var g=Date,x=g.now();l.unstable_now=function(){return g.now()-x}}var v=[],m=[],y=1,S=null,T=3,A=!1,j=!1,tt=!1,G=!1,O=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function _(D){for(var Z=c(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=D)s(m),Z.sortIndex=Z.expirationTime,o(v,Z);else break;Z=c(m)}}function Y(D){if(tt=!1,_(D),!j)if(c(v)!==null)j=!0,F||(F=!0,nt());else{var Z=c(m);Z!==null&&St(Y,Z.startTime-D)}}var F=!1,B=-1,k=5,J=-1;function dt(){return G?!0:!(l.unstable_now()-J<k)}function L(){if(G=!1,F){var D=l.unstable_now();J=D;var Z=!0;try{t:{j=!1,tt&&(tt=!1,V(B),B=-1),A=!0;var $=T;try{e:{for(_(D),S=c(v);S!==null&&!(S.expirationTime>D&&dt());){var lt=S.callback;if(typeof lt=="function"){S.callback=null,T=S.priorityLevel;var W=lt(S.expirationTime<=D);if(D=l.unstable_now(),typeof W=="function"){S.callback=W,_(D),Z=!0;break e}S===c(v)&&s(v),_(D)}else s(v);S=c(v)}if(S!==null)Z=!0;else{var b=c(m);b!==null&&St(Y,b.startTime-D),Z=!1}}break t}finally{S=null,T=$,A=!1}Z=void 0}}finally{Z?nt():F=!1}}}var nt;if(typeof Q=="function")nt=function(){Q(L)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Ct=st.port2;st.port1.onmessage=L,nt=function(){Ct.postMessage(null)}}else nt=function(){O(L,0)};function St(D,Z){B=O(function(){D(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return T},l.unstable_next=function(D){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var $=T;T=Z;try{return D()}finally{T=$}},l.unstable_requestPaint=function(){G=!0},l.unstable_runWithPriority=function(D,Z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=T;T=D;try{return Z()}finally{T=$}},l.unstable_scheduleCallback=function(D,Z,$){var lt=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?lt+$:lt):$=lt,D){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=$+W,D={id:y++,callback:Z,priorityLevel:D,startTime:$,expirationTime:W,sortIndex:-1},$>lt?(D.sortIndex=$,o(m,D),c(v)===null&&D===c(m)&&(tt?(V(B),B=-1):tt=!0,St(Y,$-lt))):(D.sortIndex=W,o(v,D),j||A||(j=!0,F||(F=!0,nt()))),D},l.unstable_shouldYield=dt,l.unstable_wrapCallback=function(D){var Z=T;return function(){var $=T;T=Z;try{return D.apply(this,arguments)}finally{T=$}}}})(Vc)),Vc}var cm;function mg(){return cm||(cm=1,Qc.exports=pg()),Qc.exports}var Zc={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function hg(){if(um)return At;um=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),T=Symbol.iterator;function A(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tt=Object.assign,G={};function O(b,U,I){this.props=b,this.context=U,this.refs=G,this.updater=I||j}O.prototype.isReactComponent={},O.prototype.setState=function(b,U){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,U,"setState")},O.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function V(){}V.prototype=O.prototype;function Q(b,U,I){this.props=b,this.context=U,this.refs=G,this.updater=I||j}var _=Q.prototype=new V;_.constructor=Q,tt(_,O.prototype),_.isPureReactComponent=!0;var Y=Array.isArray;function F(){}var B={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function J(b,U,I){var ut=I.ref;return{$$typeof:l,type:b,key:U,ref:ut!==void 0?ut:null,props:I}}function dt(b,U){return J(b.type,U,b.props)}function L(b){return typeof b=="object"&&b!==null&&b.$$typeof===l}function nt(b){var U={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(I){return U[I]})}var st=/\/+/g;function Ct(b,U){return typeof b=="object"&&b!==null&&b.key!=null?nt(""+b.key):U.toString(36)}function St(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(F,F):(b.status="pending",b.then(function(U){b.status==="pending"&&(b.status="fulfilled",b.value=U)},function(U){b.status==="pending"&&(b.status="rejected",b.reason=U)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function D(b,U,I,ut,yt){var wt=typeof b;(wt==="undefined"||wt==="boolean")&&(b=null);var Ot=!1;if(b===null)Ot=!0;else switch(wt){case"bigint":case"string":case"number":Ot=!0;break;case"object":switch(b.$$typeof){case l:case o:Ot=!0;break;case y:return Ot=b._init,D(Ot(b._payload),U,I,ut,yt)}}if(Ot)return yt=yt(b),Ot=ut===""?"."+Ct(b,0):ut,Y(yt)?(I="",Ot!=null&&(I=Ot.replace(st,"$&/")+"/"),D(yt,U,I,"",function(kt){return kt})):yt!=null&&(L(yt)&&(yt=dt(yt,I+(yt.key==null||b&&b.key===yt.key?"":(""+yt.key).replace(st,"$&/")+"/")+Ot)),U.push(yt)),1;Ot=0;var jt=ut===""?".":ut+":";if(Y(b))for(var Ut=0;Ut<b.length;Ut++)ut=b[Ut],wt=jt+Ct(ut,Ut),Ot+=D(ut,U,I,wt,yt);else if(Ut=A(b),typeof Ut=="function")for(b=Ut.call(b),Ut=0;!(ut=b.next()).done;)ut=ut.value,wt=jt+Ct(ut,Ut++),Ot+=D(ut,U,I,wt,yt);else if(wt==="object"){if(typeof b.then=="function")return D(St(b),U,I,ut,yt);throw U=String(b),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return Ot}function Z(b,U,I){if(b==null)return b;var ut=[],yt=0;return D(b,ut,"","",function(wt){return U.call(I,wt,yt++)}),ut}function $(b){if(b._status===-1){var U=b._result;U=U(),U.then(function(I){(b._status===0||b._status===-1)&&(b._status=1,b._result=I)},function(I){(b._status===0||b._status===-1)&&(b._status=2,b._result=I)}),b._status===-1&&(b._status=0,b._result=U)}if(b._status===1)return b._result.default;throw b._result}var lt=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},W={map:Z,forEach:function(b,U,I){Z(b,function(){U.apply(this,arguments)},I)},count:function(b){var U=0;return Z(b,function(){U++}),U},toArray:function(b){return Z(b,function(U){return U})||[]},only:function(b){if(!L(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return At.Activity=S,At.Children=W,At.Component=O,At.Fragment=c,At.Profiler=d,At.PureComponent=Q,At.StrictMode=s,At.Suspense=v,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,At.__COMPILER_RUNTIME={__proto__:null,c:function(b){return B.H.useMemoCache(b)}},At.cache=function(b){return function(){return b.apply(null,arguments)}},At.cacheSignal=function(){return null},At.cloneElement=function(b,U,I){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var ut=tt({},b.props),yt=b.key;if(U!=null)for(wt in U.key!==void 0&&(yt=""+U.key),U)!k.call(U,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&U.ref===void 0||(ut[wt]=U[wt]);var wt=arguments.length-2;if(wt===1)ut.children=I;else if(1<wt){for(var Ot=Array(wt),jt=0;jt<wt;jt++)Ot[jt]=arguments[jt+2];ut.children=Ot}return J(b.type,yt,ut)},At.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:p,_context:b},b},At.createElement=function(b,U,I){var ut,yt={},wt=null;if(U!=null)for(ut in U.key!==void 0&&(wt=""+U.key),U)k.call(U,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(yt[ut]=U[ut]);var Ot=arguments.length-2;if(Ot===1)yt.children=I;else if(1<Ot){for(var jt=Array(Ot),Ut=0;Ut<Ot;Ut++)jt[Ut]=arguments[Ut+2];yt.children=jt}if(b&&b.defaultProps)for(ut in Ot=b.defaultProps,Ot)yt[ut]===void 0&&(yt[ut]=Ot[ut]);return J(b,wt,yt)},At.createRef=function(){return{current:null}},At.forwardRef=function(b){return{$$typeof:x,render:b}},At.isValidElement=L,At.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:$}},At.memo=function(b,U){return{$$typeof:m,type:b,compare:U===void 0?null:U}},At.startTransition=function(b){var U=B.T,I={};B.T=I;try{var ut=b(),yt=B.S;yt!==null&&yt(I,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(F,lt)}catch(wt){lt(wt)}finally{U!==null&&I.types!==null&&(U.types=I.types),B.T=U}},At.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},At.use=function(b){return B.H.use(b)},At.useActionState=function(b,U,I){return B.H.useActionState(b,U,I)},At.useCallback=function(b,U){return B.H.useCallback(b,U)},At.useContext=function(b){return B.H.useContext(b)},At.useDebugValue=function(){},At.useDeferredValue=function(b,U){return B.H.useDeferredValue(b,U)},At.useEffect=function(b,U){return B.H.useEffect(b,U)},At.useEffectEvent=function(b){return B.H.useEffectEvent(b)},At.useId=function(){return B.H.useId()},At.useImperativeHandle=function(b,U,I){return B.H.useImperativeHandle(b,U,I)},At.useInsertionEffect=function(b,U){return B.H.useInsertionEffect(b,U)},At.useLayoutEffect=function(b,U){return B.H.useLayoutEffect(b,U)},At.useMemo=function(b,U){return B.H.useMemo(b,U)},At.useOptimistic=function(b,U){return B.H.useOptimistic(b,U)},At.useReducer=function(b,U,I){return B.H.useReducer(b,U,I)},At.useRef=function(b){return B.H.useRef(b)},At.useState=function(b){return B.H.useState(b)},At.useSyncExternalStore=function(b,U,I){return B.H.useSyncExternalStore(b,U,I)},At.useTransition=function(){return B.H.useTransition()},At.version="19.2.6",At}var fm;function du(){return fm||(fm=1,Zc.exports=hg()),Zc.exports}var Kc={exports:{}},Be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function gg(){if(dm)return Be;dm=1;var l=du();function o(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(v,m,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:v,containerInfo:m,implementation:y}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Be.createPortal=function(v,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(o(299));return p(v,m,null,y)},Be.flushSync=function(v){var m=g.T,y=s.p;try{if(g.T=null,s.p=2,v)return v()}finally{g.T=m,s.p=y,s.d.f()}},Be.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Be.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Be.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var y=m.as,S=x(y,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:A}):y==="script"&&s.d.X(v,{crossOrigin:S,integrity:T,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Be.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=x(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(v)},Be.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,S=x(y,m.crossOrigin);s.d.L(v,y,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Be.preloadModule=function(v,m){if(typeof v=="string")if(m){var y=x(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(v)},Be.requestFormReset=function(v){s.d.r(v)},Be.unstable_batchedUpdates=function(v,m){return v(m)},Be.useFormState=function(v,m,y){return g.H.useFormState(v,m,y)},Be.useFormStatus=function(){return g.H.useHostTransitionStatus()},Be.version="19.2.6",Be}var pm;function yg(){if(pm)return Kc.exports;pm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Kc.exports=gg(),Kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function xg(){if(mm)return Ji;mm=1;var l=mg(),o=du(),c=yg();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(p(t)!==t)throw Error(s(188))}function m(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return v(i),t;if(r===n)return v(i),e;r=r.sibling}throw Error(s(188))}if(a.return!==n.return)a=i,n=r;else{for(var f=!1,h=i.child;h;){if(h===a){f=!0,a=i,n=r;break}if(h===n){f=!0,n=i,a=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===a){f=!0,a=r,n=i;break}if(h===n){f=!0,n=r,a=i;break}h=h.sibling}if(!f)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=y(t),e!==null)return e;t=t.sibling}return null}var S=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function Ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case tt:return"Fragment";case O:return"Profiler";case G:return"StrictMode";case Y:return"Suspense";case F:return"SuspenseList";case J:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case j:return"Portal";case Q:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case _:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return e=t.displayName||null,e!==null?e:Ct(t.type)||"Memo";case k:e=t._payload,t=t._init;try{return Ct(t(e))}catch{}}return null}var St=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},lt=[],W=-1;function b(t){return{current:t}}function U(t){0>W||(t.current=lt[W],lt[W]=null,W--)}function I(t,e){W++,lt[W]=t.current,t.current=e}var ut=b(null),yt=b(null),wt=b(null),Ot=b(null);function jt(t,e){switch(I(wt,e),I(yt,t),I(ut,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Op(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Op(e),t=Np(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}U(ut),I(ut,t)}function Ut(){U(ut),U(yt),U(wt)}function kt(t){t.memoizedState!==null&&I(Ot,t);var e=ut.current,a=Np(e,t.type);e!==a&&(I(yt,t),I(ut,a))}function Dt(t){yt.current===t&&(U(ut),U(yt)),Ot.current===t&&(U(Ot),Gi._currentValue=$)}var ot,ae;function Xt(t){if(ot===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ot=e&&e[1]||"",ae=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ot+t+ae}var Jt=!1;function le(t,e){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var at=function(){throw Error()};if(Object.defineProperty(at.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(at,[])}catch(K){var q=K}Reflect.construct(t,[],at)}else{try{at.call()}catch(K){q=K}t.call(at.prototype)}}else{try{throw Error()}catch(K){q=K}(at=t())&&typeof at.catch=="function"&&at.catch(function(){})}}catch(K){if(K&&q&&typeof K.stack=="string")return[K.stack,q.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var w=f.split(`
`),H=h.split(`
`);for(i=n=0;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;for(;i<H.length&&!H[i].includes("DetermineComponentFrameRoot");)i++;if(n===w.length||i===H.length)for(n=w.length-1,i=H.length-1;1<=n&&0<=i&&w[n]!==H[i];)i--;for(;1<=n&&0<=i;n--,i--)if(w[n]!==H[i]){if(n!==1||i!==1)do if(n--,i--,0>i||w[n]!==H[i]){var P=`
`+w[n].replace(" at new "," at ");return t.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",t.displayName)),P}while(1<=n&&0<=i);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function ze(t,e){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return t.child!==e&&e!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return Xt("Activity");default:return""}}function Rt(t){try{var e="",a=null;do e+=ze(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Nt=Object.prototype.hasOwnProperty,gt=l.unstable_scheduleCallback,ce=l.unstable_cancelCallback,Ca=l.unstable_shouldYield,Je=l.unstable_requestPaint,ue=l.unstable_now,xt=l.unstable_getCurrentPriorityLevel,z=l.unstable_ImmediatePriority,R=l.unstable_UserBlockingPriority,X=l.unstable_NormalPriority,it=l.unstable_LowPriority,ct=l.unstable_IdlePriority,ht=l.log,ft=l.unstable_setDisableYieldValue,rt=null,pt=null;function mt(t){if(typeof ht=="function"&&ft(t),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(rt,t)}catch{}}var vt=Math.clz32?Math.clz32:fe,Ht=Math.log,_t=Math.LN2;function fe(t){return t>>>=0,t===0?32:31-(Ht(t)/_t|0)|0}var ie=256,sa=262144,Pa=4194304;function tn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function il(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var h=n&134217727;return h!==0?(n=h&~r,n!==0?i=tn(n):(f&=h,f!==0?i=tn(f):a||(a=h&~t,a!==0&&(i=tn(a))))):(h=n&~r,h!==0?i=tn(h):f!==0?i=tn(f):a||(a=n&~t,a!==0&&(i=tn(a)))),i===0?0:e!==0&&e!==i&&(e&r)===0&&(r=i&-i,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:i}function We(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function er(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(){var t=Pa;return Pa<<=1,(Pa&62914560)===0&&(Pa=4194304),t}function Xe(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function en(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fe(t,e,a,n,i,r){var f=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var h=t.entanglements,w=t.expirationTimes,H=t.hiddenUpdates;for(a=f&~a;0<a;){var P=31-vt(a),at=1<<P;h[P]=0,w[P]=-1;var q=H[P];if(q!==null)for(H[P]=null,P=0;P<q.length;P++){var K=q[P];K!==null&&(K.lane&=-536870913)}a&=~at}n!==0&&an(t,n,0),r!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=r&~(f&~e))}function an(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-vt(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function Na(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-vt(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function ai(t,e){var a=e&-e;return a=(a&42)!==0?1:nn(a),(a&(t.suspendedLanes|e))!==0?0:a}function nn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rl(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ni(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Pp(t.type))}function li(t,e){var a=Z.p;try{return Z.p=t,e()}finally{Z.p=a}}var ln=Math.random().toString(36).slice(2),Ye="__reactFiber$"+ln,$e="__reactProps$"+ln,sl="__reactContainer$"+ln,Ds="__reactEvents$"+ln,Pm="__reactListeners$"+ln,th="__reactHandles$"+ln,hu="__reactResources$"+ln,ii="__reactMarker$"+ln;function Ys(t){delete t[Ye],delete t[$e],delete t[Ds],delete t[Pm],delete t[th]}function ol(t){var e=t[Ye];if(e)return e;for(var a=t.parentNode;a;){if(e=a[sl]||a[Ye]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Hp(t);t!==null;){if(a=t[Ye])return a;t=Hp(t)}return e}t=a,a=t.parentNode}return null}function cl(t){if(t=t[Ye]||t[sl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ri(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function ul(t){var e=t[hu];return e||(e=t[hu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ae(t){t[ii]=!0}var gu=new Set,yu={};function Yn(t,e){fl(t,e),fl(t+"Capture",e)}function fl(t,e){for(yu[t]=e,t=0;t<e.length;t++)gu.add(e[t])}var eh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xu={},vu={};function ah(t){return Nt.call(vu,t)?!0:Nt.call(xu,t)?!1:eh.test(t)?vu[t]=!0:(xu[t]=!0,!1)}function nr(t,e,a){if(ah(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function lr(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Aa(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}function oa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nh(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _s(t){if(!t._valueTracker){var e=bu(t)?"checked":"value";t._valueTracker=nh(t,e,""+t[e])}}function Su(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=bu(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function ir(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var lh=/[\n"\\]/g;function ca(t){return t.replace(lh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Es(t,e,a,n,i,r,f,h){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+oa(e)):t.value!==""+oa(e)&&(t.value=""+oa(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?Hs(t,f,oa(e)):a!=null?Hs(t,f,oa(a)):n!=null&&t.removeAttribute("value"),i==null&&r!=null&&(t.defaultChecked=!!r),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+oa(h):t.removeAttribute("name")}function wu(t,e,a,n,i,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){_s(t);return}a=a!=null?""+oa(a):"",e=e!=null?""+oa(e):a,h||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=h?t.checked:!!n,t.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f),_s(t)}function Hs(t,e,a){e==="number"&&ir(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dl(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+oa(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cu(t,e,a){if(e!=null&&(e=""+oa(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+oa(a):""}function Mu(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(s(92));if(St(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=oa(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),_s(t)}function pl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var ih=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tu(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||ih.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ju(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&Tu(t,i,n)}else for(var r in e)e.hasOwnProperty(r)&&Tu(t,r,e[r])}function Us(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rr(t){return sh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ka(){}var Bs=null;function Ls(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ml=null,hl=null;function zu(t){var e=cl(t);if(e&&(t=e.stateNode)){var a=t[$e]||null;t:switch(t=e.stateNode,e.type){case"input":if(Es(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ca(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[$e]||null;if(!i)throw Error(s(90));Es(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Su(n)}break t;case"textarea":Cu(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&dl(t,!!a.multiple,e,!1)}}}var Xs=!1;function Ru(t,e,a){if(Xs)return t(e,a);Xs=!0;try{var n=t(e);return n}finally{if(Xs=!1,(ml!==null||hl!==null)&&(Zr(),ml&&(e=ml,t=hl,hl=ml=null,zu(e),t)))for(e=0;e<t.length;e++)zu(t[e])}}function si(t,e){var a=t.stateNode;if(a===null)return null;var n=a[$e]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var Da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=!1;if(Da)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){$s=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{$s=!1}var rn=null,qs=null,sr=null;function Ou(){if(sr)return sr;var t,e=qs,a=e.length,n,i="value"in rn?rn.value:rn.textContent,r=i.length;for(t=0;t<a&&e[t]===i[t];t++);var f=a-t;for(n=1;n<=f&&e[a-n]===i[r-n];n++);return sr=i.slice(t,1<n?1-n:void 0)}function or(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cr(){return!0}function Nu(){return!1}function qe(t){function e(a,n,i,r,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(a=t[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?cr:Nu,this.isPropagationStopped=Nu,this}return S(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),e}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ur=qe(_n),ci=S({},_n,{view:0,detail:0}),oh=qe(ci),Gs,Qs,ui,fr=S({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ui&&(ui&&t.type==="mousemove"?(Gs=t.screenX-ui.screenX,Qs=t.screenY-ui.screenY):Qs=Gs=0,ui=t),Gs)},movementY:function(t){return"movementY"in t?t.movementY:Qs}}),Au=qe(fr),ch=S({},fr,{dataTransfer:0}),uh=qe(ch),fh=S({},ci,{relatedTarget:0}),Vs=qe(fh),dh=S({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),ph=qe(dh),mh=S({},_n,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hh=qe(mh),gh=S({},_n,{data:0}),ku=qe(gh),yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vh[t])?!!e[t]:!1}function Zs(){return bh}var Sh=S({},ci,{key:function(t){if(t.key){var e=yh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=or(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(t){return t.type==="keypress"?or(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?or(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wh=qe(Sh),Ch=S({},fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=qe(Ch),Mh=S({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),Th=qe(Mh),jh=S({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),zh=qe(jh),Rh=S({},fr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oh=qe(Rh),Nh=S({},_n,{newState:0,oldState:0}),Ah=qe(Nh),kh=[9,13,27,32],Ks=Da&&"CompositionEvent"in window,fi=null;Da&&"documentMode"in document&&(fi=document.documentMode);var Dh=Da&&"TextEvent"in window&&!fi,Yu=Da&&(!Ks||fi&&8<fi&&11>=fi),_u=" ",Eu=!1;function Hu(t,e){switch(t){case"keyup":return kh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gl=!1;function Yh(t,e){switch(t){case"compositionend":return Uu(e);case"keypress":return e.which!==32?null:(Eu=!0,_u);case"textInput":return t=e.data,t===_u&&Eu?null:t;default:return null}}function _h(t,e){if(gl)return t==="compositionend"||!Ks&&Hu(t,e)?(t=Ou(),sr=qs=rn=null,gl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yu&&e.locale!=="ko"?null:e.data;default:return null}}var Eh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Eh[t.type]:e==="textarea"}function Lu(t,e,a,n){ml?hl?hl.push(n):hl=[n]:ml=n,e=ts(e,"onChange"),0<e.length&&(a=new ur("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var di=null,pi=null;function Hh(t){Cp(t,0)}function dr(t){var e=ri(t);if(Su(e))return t}function Xu(t,e){if(t==="change")return e}var $u=!1;if(Da){var Js;if(Da){var Ws="oninput"in document;if(!Ws){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),Ws=typeof qu.oninput=="function"}Js=Ws}else Js=!1;$u=Js&&(!document.documentMode||9<document.documentMode)}function Gu(){di&&(di.detachEvent("onpropertychange",Qu),pi=di=null)}function Qu(t){if(t.propertyName==="value"&&dr(pi)){var e=[];Lu(e,pi,t,Ls(t)),Ru(Hh,e)}}function Uh(t,e,a){t==="focusin"?(Gu(),di=e,pi=a,di.attachEvent("onpropertychange",Qu)):t==="focusout"&&Gu()}function Bh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dr(pi)}function Lh(t,e){if(t==="click")return dr(e)}function Xh(t,e){if(t==="input"||t==="change")return dr(e)}function $h(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ie=typeof Object.is=="function"?Object.is:$h;function mi(t,e){if(Ie(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Nt.call(e,i)||!Ie(t[i],e[i]))return!1}return!0}function Vu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zu(t,e){var a=Vu(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vu(a)}}function Ku(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ku(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ju(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ir(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=ir(t.document)}return e}function Fs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var qh=Da&&"documentMode"in document&&11>=document.documentMode,yl=null,Is=null,hi=null,Ps=!1;function Wu(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ps||yl==null||yl!==ir(n)||(n=yl,"selectionStart"in n&&Fs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),hi&&mi(hi,n)||(hi=n,n=ts(Is,"onSelect"),0<n.length&&(e=new ur("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=yl)))}function En(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var xl={animationend:En("Animation","AnimationEnd"),animationiteration:En("Animation","AnimationIteration"),animationstart:En("Animation","AnimationStart"),transitionrun:En("Transition","TransitionRun"),transitionstart:En("Transition","TransitionStart"),transitioncancel:En("Transition","TransitionCancel"),transitionend:En("Transition","TransitionEnd")},to={},Fu={};Da&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function Hn(t){if(to[t])return to[t];if(!xl[t])return t;var e=xl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Fu)return to[t]=e[a];return t}var Iu=Hn("animationend"),Pu=Hn("animationiteration"),tf=Hn("animationstart"),Gh=Hn("transitionrun"),Qh=Hn("transitionstart"),Vh=Hn("transitioncancel"),ef=Hn("transitionend"),af=new Map,eo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eo.push("scrollEnd");function xa(t,e){af.set(t,e),Yn(e,[t])}var pr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ua=[],vl=0,ao=0;function mr(){for(var t=vl,e=ao=vl=0;e<t;){var a=ua[e];ua[e++]=null;var n=ua[e];ua[e++]=null;var i=ua[e];ua[e++]=null;var r=ua[e];if(ua[e++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}r!==0&&nf(a,i,r)}}function hr(t,e,a,n){ua[vl++]=t,ua[vl++]=e,ua[vl++]=a,ua[vl++]=n,ao|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function no(t,e,a,n){return hr(t,e,a,n),gr(t)}function Un(t,e){return hr(t,null,null,e),gr(t)}function nf(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=t.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(i=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,i&&e!==null&&(i=31-vt(a),t=r.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),r):null}function gr(t){if(50<Hi)throw Hi=0,pc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var bl={};function Zh(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(t,e,a,n){return new Zh(t,e,a,n)}function lo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ya(t,e){var a=t.alternate;return a===null?(a=Pe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function yr(t,e,a,n,i,r){var f=0;if(n=t,typeof t=="function")lo(t)&&(f=1);else if(typeof t=="string")f=I0(t,a,ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case J:return t=Pe(31,a,e,i),t.elementType=J,t.lanes=r,t;case tt:return Bn(a.children,i,r,e);case G:f=8,i|=24;break;case O:return t=Pe(12,a,e,i|2),t.elementType=O,t.lanes=r,t;case Y:return t=Pe(13,a,e,i),t.elementType=Y,t.lanes=r,t;case F:return t=Pe(19,a,e,i),t.elementType=F,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q:f=10;break t;case V:f=9;break t;case _:f=11;break t;case B:f=14;break t;case k:f=16,n=null;break t}f=29,a=Error(s(130,t===null?"null":typeof t,"")),n=null}return e=Pe(f,a,e,i),e.elementType=t,e.type=n,e.lanes=r,e}function Bn(t,e,a,n){return t=Pe(7,t,n,e),t.lanes=a,t}function io(t,e,a){return t=Pe(6,t,null,e),t.lanes=a,t}function rf(t){var e=Pe(18,null,null,0);return e.stateNode=t,e}function ro(t,e,a){return e=Pe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var sf=new WeakMap;function fa(t,e){if(typeof t=="object"&&t!==null){var a=sf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Rt(e)},sf.set(t,e),e)}return{value:t,source:e,stack:Rt(e)}}var Sl=[],wl=0,xr=null,gi=0,da=[],pa=0,sn=null,Ma=1,Ta="";function _a(t,e){Sl[wl++]=gi,Sl[wl++]=xr,xr=t,gi=e}function of(t,e,a){da[pa++]=Ma,da[pa++]=Ta,da[pa++]=sn,sn=t;var n=Ma;t=Ta;var i=32-vt(n)-1;n&=~(1<<i),a+=1;var r=32-vt(e)+i;if(30<r){var f=i-i%5;r=(n&(1<<f)-1).toString(32),n>>=f,i-=f,Ma=1<<32-vt(e)+i|a<<i|n,Ta=r+t}else Ma=1<<r|a<<i|n,Ta=t}function so(t){t.return!==null&&(_a(t,1),of(t,1,0))}function oo(t){for(;t===xr;)xr=Sl[--wl],Sl[wl]=null,gi=Sl[--wl],Sl[wl]=null;for(;t===sn;)sn=da[--pa],da[pa]=null,Ta=da[--pa],da[pa]=null,Ma=da[--pa],da[pa]=null}function cf(t,e){da[pa++]=Ma,da[pa++]=Ta,da[pa++]=sn,Ma=e.id,Ta=e.overflow,sn=t}var _e=null,re=null,Qt=!1,on=null,ma=!1,co=Error(s(519));function cn(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yi(fa(e,t)),co}function uf(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[Ye]=t,e[$e]=n,a){case"dialog":Lt("cancel",e),Lt("close",e);break;case"iframe":case"object":case"embed":Lt("load",e);break;case"video":case"audio":for(a=0;a<Bi.length;a++)Lt(Bi[a],e);break;case"source":Lt("error",e);break;case"img":case"image":case"link":Lt("error",e),Lt("load",e);break;case"details":Lt("toggle",e);break;case"input":Lt("invalid",e),wu(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Lt("invalid",e);break;case"textarea":Lt("invalid",e),Mu(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||zp(e.textContent,a)?(n.popover!=null&&(Lt("beforetoggle",e),Lt("toggle",e)),n.onScroll!=null&&Lt("scroll",e),n.onScrollEnd!=null&&Lt("scrollend",e),n.onClick!=null&&(e.onclick=ka),e=!0):e=!1,e||cn(t,!0)}function ff(t){for(_e=t.return;_e;)switch(_e.tag){case 5:case 31:case 13:ma=!1;return;case 27:case 3:ma=!0;return;default:_e=_e.return}}function Cl(t){if(t!==_e)return!1;if(!Qt)return ff(t),Qt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Rc(t.type,t.memoizedProps)),a=!a),a&&re&&cn(t),ff(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));re=Ep(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));re=Ep(t)}else e===27?(e=re,Cn(t.type)?(t=Dc,Dc=null,re=t):re=e):re=_e?ga(t.stateNode.nextSibling):null;return!0}function Ln(){re=_e=null,Qt=!1}function uo(){var t=on;return t!==null&&(Ze===null?Ze=t:Ze.push.apply(Ze,t),on=null),t}function yi(t){on===null?on=[t]:on.push(t)}var fo=b(null),Xn=null,Ea=null;function un(t,e,a){I(fo,e._currentValue),e._currentValue=a}function Ha(t){t._currentValue=fo.current,U(fo)}function po(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function mo(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;t:for(;r!==null;){var h=r;r=i;for(var w=0;w<e.length;w++)if(h.context===e[w]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),po(r.return,a,t),n||(f=null);break t}r=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(s(341));f.lanes|=a,r=f.alternate,r!==null&&(r.lanes|=a),po(f,a,t),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===t){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Ml(t,e,a,n){t=null;for(var i=e,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var h=i.type;Ie(i.pendingProps.value,f.value)||(t!==null?t.push(h):t=[h])}}else if(i===Ot.current){if(f=i.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Gi):t=[Gi])}i=i.return}t!==null&&mo(e,t,a,n),e.flags|=262144}function vr(t){for(t=t.firstContext;t!==null;){if(!Ie(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $n(t){Xn=t,Ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ee(t){return df(Xn,t)}function br(t,e){return Xn===null&&$n(t),df(t,e)}function df(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ea===null){if(t===null)throw Error(s(308));Ea=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ea=Ea.next=e;return a}var Kh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Jh=l.unstable_scheduleCallback,Wh=l.unstable_NormalPriority,Se={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ho(){return{controller:new Kh,data:new Map,refCount:0}}function xi(t){t.refCount--,t.refCount===0&&Jh(Wh,function(){t.controller.abort()})}var vi=null,go=0,Tl=0,jl=null;function Fh(t,e){if(vi===null){var a=vi=[];go=0,Tl=vc(),jl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return go++,e.then(pf,pf),e}function pf(){if(--go===0&&vi!==null){jl!==null&&(jl.status="fulfilled");var t=vi;vi=null,Tl=0,jl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ih(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var mf=D.S;D.S=function(t,e){Fd=ue(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Fh(t,e),mf!==null&&mf(t,e)};var qn=b(null);function yo(){var t=qn.current;return t!==null?t:ee.pooledCache}function Sr(t,e){e===null?I(qn,qn.current):I(qn,e.pool)}function hf(){var t=yo();return t===null?null:{parent:Se._currentValue,pool:t}}var zl=Error(s(460)),xo=Error(s(474)),wr=Error(s(542)),Cr={then:function(){}};function gf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yf(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ka,ka),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vf(t),t;default:if(typeof e.status=="string")e.then(ka,ka);else{if(t=ee,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vf(t),t}throw Qn=e,zl}}function Gn(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qn=a,zl):a}}var Qn=null;function xf(){if(Qn===null)throw Error(s(459));var t=Qn;return Qn=null,t}function vf(t){if(t===zl||t===wr)throw Error(s(483))}var Rl=null,bi=0;function Mr(t){var e=bi;return bi+=1,Rl===null&&(Rl=[]),yf(Rl,t,e)}function Si(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Tr(t,e){throw e.$$typeof===T?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function bf(t){function e(N,M){if(t){var E=N.deletions;E===null?(N.deletions=[M],N.flags|=16):E.push(M)}}function a(N,M){if(!t)return null;for(;M!==null;)e(N,M),M=M.sibling;return null}function n(N){for(var M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function i(N,M){return N=Ya(N,M),N.index=0,N.sibling=null,N}function r(N,M,E){return N.index=E,t?(E=N.alternate,E!==null?(E=E.index,E<M?(N.flags|=67108866,M):E):(N.flags|=67108866,M)):(N.flags|=1048576,M)}function f(N){return t&&N.alternate===null&&(N.flags|=67108866),N}function h(N,M,E,et){return M===null||M.tag!==6?(M=io(E,N.mode,et),M.return=N,M):(M=i(M,E),M.return=N,M)}function w(N,M,E,et){var Tt=E.type;return Tt===tt?P(N,M,E.props.children,et,E.key):M!==null&&(M.elementType===Tt||typeof Tt=="object"&&Tt!==null&&Tt.$$typeof===k&&Gn(Tt)===M.type)?(M=i(M,E.props),Si(M,E),M.return=N,M):(M=yr(E.type,E.key,E.props,null,N.mode,et),Si(M,E),M.return=N,M)}function H(N,M,E,et){return M===null||M.tag!==4||M.stateNode.containerInfo!==E.containerInfo||M.stateNode.implementation!==E.implementation?(M=ro(E,N.mode,et),M.return=N,M):(M=i(M,E.children||[]),M.return=N,M)}function P(N,M,E,et,Tt){return M===null||M.tag!==7?(M=Bn(E,N.mode,et,Tt),M.return=N,M):(M=i(M,E),M.return=N,M)}function at(N,M,E){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=io(""+M,N.mode,E),M.return=N,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case A:return E=yr(M.type,M.key,M.props,null,N.mode,E),Si(E,M),E.return=N,E;case j:return M=ro(M,N.mode,E),M.return=N,M;case k:return M=Gn(M),at(N,M,E)}if(St(M)||nt(M))return M=Bn(M,N.mode,E,null),M.return=N,M;if(typeof M.then=="function")return at(N,Mr(M),E);if(M.$$typeof===Q)return at(N,br(N,M),E);Tr(N,M)}return null}function q(N,M,E,et){var Tt=M!==null?M.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return Tt!==null?null:h(N,M,""+E,et);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case A:return E.key===Tt?w(N,M,E,et):null;case j:return E.key===Tt?H(N,M,E,et):null;case k:return E=Gn(E),q(N,M,E,et)}if(St(E)||nt(E))return Tt!==null?null:P(N,M,E,et,null);if(typeof E.then=="function")return q(N,M,Mr(E),et);if(E.$$typeof===Q)return q(N,M,br(N,E),et);Tr(N,E)}return null}function K(N,M,E,et,Tt){if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return N=N.get(E)||null,h(M,N,""+et,Tt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case A:return N=N.get(et.key===null?E:et.key)||null,w(M,N,et,Tt);case j:return N=N.get(et.key===null?E:et.key)||null,H(M,N,et,Tt);case k:return et=Gn(et),K(N,M,E,et,Tt)}if(St(et)||nt(et))return N=N.get(E)||null,P(M,N,et,Tt,null);if(typeof et.then=="function")return K(N,M,E,Mr(et),Tt);if(et.$$typeof===Q)return K(N,M,E,br(M,et),Tt);Tr(M,et)}return null}function bt(N,M,E,et){for(var Tt=null,Vt=null,Mt=M,Et=M=0,qt=null;Mt!==null&&Et<E.length;Et++){Mt.index>Et?(qt=Mt,Mt=null):qt=Mt.sibling;var Zt=q(N,Mt,E[Et],et);if(Zt===null){Mt===null&&(Mt=qt);break}t&&Mt&&Zt.alternate===null&&e(N,Mt),M=r(Zt,M,Et),Vt===null?Tt=Zt:Vt.sibling=Zt,Vt=Zt,Mt=qt}if(Et===E.length)return a(N,Mt),Qt&&_a(N,Et),Tt;if(Mt===null){for(;Et<E.length;Et++)Mt=at(N,E[Et],et),Mt!==null&&(M=r(Mt,M,Et),Vt===null?Tt=Mt:Vt.sibling=Mt,Vt=Mt);return Qt&&_a(N,Et),Tt}for(Mt=n(Mt);Et<E.length;Et++)qt=K(Mt,N,Et,E[Et],et),qt!==null&&(t&&qt.alternate!==null&&Mt.delete(qt.key===null?Et:qt.key),M=r(qt,M,Et),Vt===null?Tt=qt:Vt.sibling=qt,Vt=qt);return t&&Mt.forEach(function(Rn){return e(N,Rn)}),Qt&&_a(N,Et),Tt}function zt(N,M,E,et){if(E==null)throw Error(s(151));for(var Tt=null,Vt=null,Mt=M,Et=M=0,qt=null,Zt=E.next();Mt!==null&&!Zt.done;Et++,Zt=E.next()){Mt.index>Et?(qt=Mt,Mt=null):qt=Mt.sibling;var Rn=q(N,Mt,Zt.value,et);if(Rn===null){Mt===null&&(Mt=qt);break}t&&Mt&&Rn.alternate===null&&e(N,Mt),M=r(Rn,M,Et),Vt===null?Tt=Rn:Vt.sibling=Rn,Vt=Rn,Mt=qt}if(Zt.done)return a(N,Mt),Qt&&_a(N,Et),Tt;if(Mt===null){for(;!Zt.done;Et++,Zt=E.next())Zt=at(N,Zt.value,et),Zt!==null&&(M=r(Zt,M,Et),Vt===null?Tt=Zt:Vt.sibling=Zt,Vt=Zt);return Qt&&_a(N,Et),Tt}for(Mt=n(Mt);!Zt.done;Et++,Zt=E.next())Zt=K(Mt,N,Et,Zt.value,et),Zt!==null&&(t&&Zt.alternate!==null&&Mt.delete(Zt.key===null?Et:Zt.key),M=r(Zt,M,Et),Vt===null?Tt=Zt:Vt.sibling=Zt,Vt=Zt);return t&&Mt.forEach(function(cg){return e(N,cg)}),Qt&&_a(N,Et),Tt}function te(N,M,E,et){if(typeof E=="object"&&E!==null&&E.type===tt&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case A:t:{for(var Tt=E.key;M!==null;){if(M.key===Tt){if(Tt=E.type,Tt===tt){if(M.tag===7){a(N,M.sibling),et=i(M,E.props.children),et.return=N,N=et;break t}}else if(M.elementType===Tt||typeof Tt=="object"&&Tt!==null&&Tt.$$typeof===k&&Gn(Tt)===M.type){a(N,M.sibling),et=i(M,E.props),Si(et,E),et.return=N,N=et;break t}a(N,M);break}else e(N,M);M=M.sibling}E.type===tt?(et=Bn(E.props.children,N.mode,et,E.key),et.return=N,N=et):(et=yr(E.type,E.key,E.props,null,N.mode,et),Si(et,E),et.return=N,N=et)}return f(N);case j:t:{for(Tt=E.key;M!==null;){if(M.key===Tt)if(M.tag===4&&M.stateNode.containerInfo===E.containerInfo&&M.stateNode.implementation===E.implementation){a(N,M.sibling),et=i(M,E.children||[]),et.return=N,N=et;break t}else{a(N,M);break}else e(N,M);M=M.sibling}et=ro(E,N.mode,et),et.return=N,N=et}return f(N);case k:return E=Gn(E),te(N,M,E,et)}if(St(E))return bt(N,M,E,et);if(nt(E)){if(Tt=nt(E),typeof Tt!="function")throw Error(s(150));return E=Tt.call(E),zt(N,M,E,et)}if(typeof E.then=="function")return te(N,M,Mr(E),et);if(E.$$typeof===Q)return te(N,M,br(N,E),et);Tr(N,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,M!==null&&M.tag===6?(a(N,M.sibling),et=i(M,E),et.return=N,N=et):(a(N,M),et=io(E,N.mode,et),et.return=N,N=et),f(N)):a(N,M)}return function(N,M,E,et){try{bi=0;var Tt=te(N,M,E,et);return Rl=null,Tt}catch(Mt){if(Mt===zl||Mt===wr)throw Mt;var Vt=Pe(29,Mt,null,N.mode);return Vt.lanes=et,Vt.return=N,Vt}finally{}}}var Vn=bf(!0),Sf=bf(!1),fn=!1;function vo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function dn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pn(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Kt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=gr(t),nf(t,null,a),e}return hr(t,n,e,a),gr(t)}function wi(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Na(t,a)}}function So(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,a=a.next}while(a!==null);r===null?i=r=e:r=r.next=e}else i=r=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var wo=!1;function Ci(){if(wo){var t=jl;if(t!==null)throw t}}function Mi(t,e,a,n){wo=!1;var i=t.updateQueue;fn=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var w=h,H=w.next;w.next=null,f===null?r=H:f.next=H,f=w;var P=t.alternate;P!==null&&(P=P.updateQueue,h=P.lastBaseUpdate,h!==f&&(h===null?P.firstBaseUpdate=H:h.next=H,P.lastBaseUpdate=w))}if(r!==null){var at=i.baseState;f=0,P=H=w=null,h=r;do{var q=h.lane&-536870913,K=q!==h.lane;if(K?($t&q)===q:(n&q)===q){q!==0&&q===Tl&&(wo=!0),P!==null&&(P=P.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var bt=t,zt=h;q=e;var te=a;switch(zt.tag){case 1:if(bt=zt.payload,typeof bt=="function"){at=bt.call(te,at,q);break t}at=bt;break t;case 3:bt.flags=bt.flags&-65537|128;case 0:if(bt=zt.payload,q=typeof bt=="function"?bt.call(te,at,q):bt,q==null)break t;at=S({},at,q);break t;case 2:fn=!0}}q=h.callback,q!==null&&(t.flags|=64,K&&(t.flags|=8192),K=i.callbacks,K===null?i.callbacks=[q]:K.push(q))}else K={lane:q,tag:h.tag,payload:h.payload,callback:h.callback,next:null},P===null?(H=P=K,w=at):P=P.next=K,f|=q;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;K=h,h=K.next,K.next=null,i.lastBaseUpdate=K,i.shared.pending=null}}while(!0);P===null&&(w=at),i.baseState=w,i.firstBaseUpdate=H,i.lastBaseUpdate=P,r===null&&(i.shared.lanes=0),xn|=f,t.lanes=f,t.memoizedState=at}}function wf(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Cf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wf(a[t],e)}var Ol=b(null),jr=b(0);function Mf(t,e){t=Va,I(jr,t),I(Ol,e),Va=t|e.baseLanes}function Co(){I(jr,Va),I(Ol,Ol.current)}function Mo(){Va=jr.current,U(Ol),U(jr)}var ta=b(null),ha=null;function mn(t){var e=t.alternate;I(ge,ge.current&1),I(ta,t),ha===null&&(e===null||Ol.current!==null||e.memoizedState!==null)&&(ha=t)}function To(t){I(ge,ge.current),I(ta,t),ha===null&&(ha=t)}function Tf(t){t.tag===22?(I(ge,ge.current),I(ta,t),ha===null&&(ha=t)):hn()}function hn(){I(ge,ge.current),I(ta,ta.current)}function ea(t){U(ta),ha===t&&(ha=null),U(ge)}var ge=b(0);function zr(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ac(a)||kc(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ua=0,Yt=null,It=null,we=null,Rr=!1,Nl=!1,Zn=!1,Or=0,Ti=0,Al=null,Ph=0;function me(){throw Error(s(321))}function jo(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ie(t[a],e[a]))return!1;return!0}function zo(t,e,a,n,i,r){return Ua=r,Yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?od:$o,Zn=!1,r=a(n,i),Zn=!1,Nl&&(r=zf(e,a,n,i)),jf(t),r}function jf(t){D.H=Ri;var e=It!==null&&It.next!==null;if(Ua=0,we=It=Yt=null,Rr=!1,Ti=0,Al=null,e)throw Error(s(300));t===null||Ce||(t=t.dependencies,t!==null&&vr(t)&&(Ce=!0))}function zf(t,e,a,n){Yt=t;var i=0;do{if(Nl&&(Al=null),Ti=0,Nl=!1,25<=i)throw Error(s(301));if(i+=1,we=It=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=cd,r=e(a,n)}while(Nl);return r}function t0(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?ji(e):e,t=t.useState()[0],(It!==null?It.memoizedState:null)!==t&&(Yt.flags|=1024),e}function Ro(){var t=Or!==0;return Or=0,t}function Oo(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function No(t){if(Rr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Rr=!1}Ua=0,we=It=Yt=null,Nl=!1,Ti=Or=0,Al=null}function Le(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?Yt.memoizedState=we=t:we=we.next=t,we}function ye(){if(It===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=we===null?Yt.memoizedState:we.next;if(e!==null)we=e,It=t;else{if(t===null)throw Yt.alternate===null?Error(s(467)):Error(s(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},we===null?Yt.memoizedState=we=t:we=we.next=t}return we}function Nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ji(t){var e=Ti;return Ti+=1,Al===null&&(Al=[]),t=yf(Al,t,e),e=Yt,(we===null?e.memoizedState:we.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?od:$o),t}function Ar(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ji(t);if(t.$$typeof===Q)return Ee(t)}throw Error(s(438,String(t)))}function Ao(t){var e=null,a=Yt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=Yt.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Nr(),Yt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=dt;return e.index++,a}function Ba(t,e){return typeof e=="function"?e(t):e}function kr(t){var e=ye();return ko(e,It,t)}function ko(t,e,a){var n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=t.baseQueue,r=n.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}e.baseQueue=i=r,n.pending=null}if(r=t.baseState,i===null)t.memoizedState=r;else{e=i.next;var h=f=null,w=null,H=e,P=!1;do{var at=H.lane&-536870913;if(at!==H.lane?($t&at)===at:(Ua&at)===at){var q=H.revertLane;if(q===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),at===Tl&&(P=!0);else if((Ua&q)===q){H=H.next,q===Tl&&(P=!0);continue}else at={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},w===null?(h=w=at,f=r):w=w.next=at,Yt.lanes|=q,xn|=q;at=H.action,Zn&&a(r,at),r=H.hasEagerState?H.eagerState:a(r,at)}else q={lane:at,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},w===null?(h=w=q,f=r):w=w.next=q,Yt.lanes|=at,xn|=at;H=H.next}while(H!==null&&H!==e);if(w===null?f=r:w.next=h,!Ie(r,t.memoizedState)&&(Ce=!0,P&&(a=jl,a!==null)))throw a;t.memoizedState=r,t.baseState=f,t.baseQueue=w,n.lastRenderedState=r}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Do(t){var e=ye(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,r=e.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do r=t(r,f.action),f=f.next;while(f!==i);Ie(r,e.memoizedState)||(Ce=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,n]}function Rf(t,e,a){var n=Yt,i=ye(),r=Qt;if(r){if(a===void 0)throw Error(s(407));a=a()}else a=e();var f=!Ie((It||i).memoizedState,a);if(f&&(i.memoizedState=a,Ce=!0),i=i.queue,Eo(Af.bind(null,n,i,t),[t]),i.getSnapshot!==e||f||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,kl(9,{destroy:void 0},Nf.bind(null,n,i,a,e),null),ee===null)throw Error(s(349));r||(Ua&127)!==0||Of(n,e,a)}return a}function Of(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Yt.updateQueue,e===null?(e=Nr(),Yt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Nf(t,e,a,n){e.value=a,e.getSnapshot=n,kf(e)&&Df(t)}function Af(t,e,a){return a(function(){kf(e)&&Df(t)})}function kf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ie(t,a)}catch{return!0}}function Df(t){var e=Un(t,2);e!==null&&Ke(e,t,2)}function Yo(t){var e=Le();if(typeof t=="function"){var a=t;if(t=a(),Zn){mt(!0);try{a()}finally{mt(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e}function Yf(t,e,a,n){return t.baseState=a,ko(t,It,typeof n=="function"?n:Ba)}function e0(t,e,a,n,i){if(_r(t))throw Error(s(485));if(t=e.action,t!==null){var r={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};D.T!==null?a(!0):r.isTransition=!1,n(r),a=e.pending,a===null?(r.next=e.pending=r,_f(e,r)):(r.next=a.next,e.pending=a.next=r)}}function _f(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var r=D.T,f={};D.T=f;try{var h=a(i,n),w=D.S;w!==null&&w(f,h),Ef(t,e,h)}catch(H){_o(t,e,H)}finally{r!==null&&f.types!==null&&(r.types=f.types),D.T=r}}else try{r=a(i,n),Ef(t,e,r)}catch(H){_o(t,e,H)}}function Ef(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Hf(t,e,n)},function(n){return _o(t,e,n)}):Hf(t,e,a)}function Hf(t,e,a){e.status="fulfilled",e.value=a,Uf(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,_f(t,a)))}function _o(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Uf(e),e=e.next;while(e!==n)}t.action=null}function Uf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Bf(t,e){return e}function Lf(t,e){if(Qt){var a=ee.formState;if(a!==null){t:{var n=Yt;if(Qt){if(re){e:{for(var i=re,r=ma;i.nodeType!==8;){if(!r){i=null;break e}if(i=ga(i.nextSibling),i===null){i=null;break e}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){re=ga(i.nextSibling),n=i.data==="F!";break t}}cn(n)}n=!1}n&&(e=a[0])}}return a=Le(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bf,lastRenderedState:e},a.queue=n,a=id.bind(null,Yt,n),n.dispatch=a,n=Yo(!1),r=Xo.bind(null,Yt,!1,n.queue),n=Le(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=e0.bind(null,Yt,i,r,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Xf(t){var e=ye();return $f(e,It,t)}function $f(t,e,a){if(e=ko(t,e,Bf)[0],t=kr(Ba)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=ji(e)}catch(f){throw f===zl?wr:f}else n=e;e=ye();var i=e.queue,r=i.dispatch;return a!==e.memoizedState&&(Yt.flags|=2048,kl(9,{destroy:void 0},a0.bind(null,i,a),null)),[n,r,t]}function a0(t,e){t.action=e}function qf(t){var e=ye(),a=It;if(a!==null)return $f(e,a,t);ye(),e=e.memoizedState,a=ye();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function kl(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=Yt.updateQueue,e===null&&(e=Nr(),Yt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Gf(){return ye().memoizedState}function Dr(t,e,a,n){var i=Le();Yt.flags|=t,i.memoizedState=kl(1|e,{destroy:void 0},a,n===void 0?null:n)}function Yr(t,e,a,n){var i=ye();n=n===void 0?null:n;var r=i.memoizedState.inst;It!==null&&n!==null&&jo(n,It.memoizedState.deps)?i.memoizedState=kl(e,r,a,n):(Yt.flags|=t,i.memoizedState=kl(1|e,r,a,n))}function Qf(t,e){Dr(8390656,8,t,e)}function Eo(t,e){Yr(2048,8,t,e)}function n0(t){Yt.flags|=4;var e=Yt.updateQueue;if(e===null)e=Nr(),Yt.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Vf(t){var e=ye().memoizedState;return n0({ref:e,nextImpl:t}),function(){if((Kt&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function Zf(t,e){return Yr(4,2,t,e)}function Kf(t,e){return Yr(4,4,t,e)}function Jf(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wf(t,e,a){a=a!=null?a.concat([t]):null,Yr(4,4,Jf.bind(null,e,t),a)}function Ho(){}function Ff(t,e){var a=ye();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&jo(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function If(t,e){var a=ye();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&jo(e,n[1]))return n[0];if(n=t(),Zn){mt(!0);try{t()}finally{mt(!1)}}return a.memoizedState=[n,e],n}function Uo(t,e,a){return a===void 0||(Ua&1073741824)!==0&&($t&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Pd(),Yt.lanes|=t,xn|=t,a)}function Pf(t,e,a,n){return Ie(a,e)?a:Ol.current!==null?(t=Uo(t,a,n),Ie(t,e)||(Ce=!0),t):(Ua&42)===0||(Ua&1073741824)!==0&&($t&261930)===0?(Ce=!0,t.memoizedState=a):(t=Pd(),Yt.lanes|=t,xn|=t,e)}function td(t,e,a,n,i){var r=Z.p;Z.p=r!==0&&8>r?r:8;var f=D.T,h={};D.T=h,Xo(t,!1,e,a);try{var w=i(),H=D.S;if(H!==null&&H(h,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var P=Ih(w,n);zi(t,e,P,la(t))}else zi(t,e,n,la(t))}catch(at){zi(t,e,{then:function(){},status:"rejected",reason:at},la())}finally{Z.p=r,f!==null&&h.types!==null&&(f.types=h.types),D.T=f}}function l0(){}function Bo(t,e,a,n){if(t.tag!==5)throw Error(s(476));var i=ed(t).queue;td(t,i,e,$,a===null?l0:function(){return ad(t),a(n)})}function ed(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:$},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ad(t){var e=ed(t);e.next===null&&(e=t.alternate.memoizedState),zi(t,e.next.queue,{},la())}function Lo(){return Ee(Gi)}function nd(){return ye().memoizedState}function ld(){return ye().memoizedState}function i0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=la();t=dn(a);var n=pn(e,t,a);n!==null&&(Ke(n,e,a),wi(n,e,a)),e={cache:ho()},t.payload=e;return}e=e.return}}function r0(t,e,a){var n=la();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_r(t)?rd(e,a):(a=no(t,e,a,n),a!==null&&(Ke(a,t,n),sd(a,e,n)))}function id(t,e,a){var n=la();zi(t,e,a,n)}function zi(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_r(t))rd(e,i);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var f=e.lastRenderedState,h=r(f,a);if(i.hasEagerState=!0,i.eagerState=h,Ie(h,f))return hr(t,e,i,0),ee===null&&mr(),!1}catch{}finally{}if(a=no(t,e,i,n),a!==null)return Ke(a,t,n),sd(a,e,n),!0}return!1}function Xo(t,e,a,n){if(n={lane:2,revertLane:vc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_r(t)){if(e)throw Error(s(479))}else e=no(t,a,n,2),e!==null&&Ke(e,t,2)}function _r(t){var e=t.alternate;return t===Yt||e!==null&&e===Yt}function rd(t,e){Nl=Rr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function sd(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Na(t,a)}}var Ri={readContext:Ee,use:Ar,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me};Ri.useEffectEvent=me;var od={readContext:Ee,use:Ar,useCallback:function(t,e){return Le().memoizedState=[t,e===void 0?null:e],t},useContext:Ee,useEffect:Qf,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Dr(4194308,4,Jf.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Dr(4194308,4,t,e)},useInsertionEffect:function(t,e){Dr(4,2,t,e)},useMemo:function(t,e){var a=Le();e=e===void 0?null:e;var n=t();if(Zn){mt(!0);try{t()}finally{mt(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Le();if(a!==void 0){var i=a(e);if(Zn){mt(!0);try{a(e)}finally{mt(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=r0.bind(null,Yt,t),[n.memoizedState,t]},useRef:function(t){var e=Le();return t={current:t},e.memoizedState=t},useState:function(t){t=Yo(t);var e=t.queue,a=id.bind(null,Yt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Ho,useDeferredValue:function(t,e){var a=Le();return Uo(a,t,e)},useTransition:function(){var t=Yo(!1);return t=td.bind(null,Yt,t.queue,!0,!1),Le().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=Yt,i=Le();if(Qt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),ee===null)throw Error(s(349));($t&127)!==0||Of(n,e,a)}i.memoizedState=a;var r={value:a,getSnapshot:e};return i.queue=r,Qf(Af.bind(null,n,r,t),[t]),n.flags|=2048,kl(9,{destroy:void 0},Nf.bind(null,n,r,a,e),null),a},useId:function(){var t=Le(),e=ee.identifierPrefix;if(Qt){var a=Ta,n=Ma;a=(n&~(1<<32-vt(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Or++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Ph++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Lo,useFormState:Lf,useActionState:Lf,useOptimistic:function(t){var e=Le();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Xo.bind(null,Yt,!0,a),a.dispatch=e,[t,e]},useMemoCache:Ao,useCacheRefresh:function(){return Le().memoizedState=i0.bind(null,Yt)},useEffectEvent:function(t){var e=Le(),a={impl:t};return e.memoizedState=a,function(){if((Kt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$o={readContext:Ee,use:Ar,useCallback:Ff,useContext:Ee,useEffect:Eo,useImperativeHandle:Wf,useInsertionEffect:Zf,useLayoutEffect:Kf,useMemo:If,useReducer:kr,useRef:Gf,useState:function(){return kr(Ba)},useDebugValue:Ho,useDeferredValue:function(t,e){var a=ye();return Pf(a,It.memoizedState,t,e)},useTransition:function(){var t=kr(Ba)[0],e=ye().memoizedState;return[typeof t=="boolean"?t:ji(t),e]},useSyncExternalStore:Rf,useId:nd,useHostTransitionStatus:Lo,useFormState:Xf,useActionState:Xf,useOptimistic:function(t,e){var a=ye();return Yf(a,It,t,e)},useMemoCache:Ao,useCacheRefresh:ld};$o.useEffectEvent=Vf;var cd={readContext:Ee,use:Ar,useCallback:Ff,useContext:Ee,useEffect:Eo,useImperativeHandle:Wf,useInsertionEffect:Zf,useLayoutEffect:Kf,useMemo:If,useReducer:Do,useRef:Gf,useState:function(){return Do(Ba)},useDebugValue:Ho,useDeferredValue:function(t,e){var a=ye();return It===null?Uo(a,t,e):Pf(a,It.memoizedState,t,e)},useTransition:function(){var t=Do(Ba)[0],e=ye().memoizedState;return[typeof t=="boolean"?t:ji(t),e]},useSyncExternalStore:Rf,useId:nd,useHostTransitionStatus:Lo,useFormState:qf,useActionState:qf,useOptimistic:function(t,e){var a=ye();return It!==null?Yf(a,It,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ao,useCacheRefresh:ld};cd.useEffectEvent=Vf;function qo(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:S({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Go={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=la(),i=dn(n);i.payload=e,a!=null&&(i.callback=a),e=pn(t,i,n),e!==null&&(Ke(e,t,n),wi(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=la(),i=dn(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=pn(t,i,n),e!==null&&(Ke(e,t,n),wi(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=la(),n=dn(a);n.tag=2,e!=null&&(n.callback=e),e=pn(t,n,a),e!==null&&(Ke(e,t,a),wi(e,t,a))}};function ud(t,e,a,n,i,r,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,r,f):e.prototype&&e.prototype.isPureReactComponent?!mi(a,n)||!mi(i,r):!0}function fd(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Go.enqueueReplaceState(e,e.state,null)}function Kn(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=S({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function dd(t){pr(t)}function pd(t){console.error(t)}function md(t){pr(t)}function Er(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function hd(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Qo(t,e,a){return a=dn(a),a.tag=3,a.payload={element:null},a.callback=function(){Er(t,e)},a}function gd(t){return t=dn(t),t.tag=3,t}function yd(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){hd(e,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){hd(e,a,n),typeof i!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function s0(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&Ml(e,a,i,!0),a=ta.current,a!==null){switch(a.tag){case 31:case 13:return ha===null?Kr():a.alternate===null&&he===0&&(he=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Cr?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),gc(t,n,i)),!1;case 22:return a.flags|=65536,n===Cr?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),gc(t,n,i)),!1}throw Error(s(435,a.tag))}return gc(t,n,i),Kr(),!1}if(Qt)return e=ta.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==co&&(t=Error(s(422),{cause:n}),yi(fa(t,a)))):(n!==co&&(e=Error(s(423),{cause:n}),yi(fa(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=fa(n,a),i=Qo(t.stateNode,n,i),So(t,i),he!==4&&(he=2)),!1;var r=Error(s(520),{cause:n});if(r=fa(r,a),Ei===null?Ei=[r]:Ei.push(r),he!==4&&(he=2),e===null)return!0;n=fa(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Qo(a.stateNode,n,t),So(a,t),!1;case 1:if(e=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=gd(i),yd(i,t,a,n),So(a,i),!1}a=a.return}while(a!==null);return!1}var Vo=Error(s(461)),Ce=!1;function He(t,e,a,n){e.child=t===null?Sf(e,null,a,n):Vn(e,t.child,a,n)}function xd(t,e,a,n,i){a=a.render;var r=e.ref;if("ref"in n){var f={};for(var h in n)h!=="ref"&&(f[h]=n[h])}else f=n;return $n(e),n=zo(t,e,a,f,r,i),h=Ro(),t!==null&&!Ce?(Oo(t,e,i),La(t,e,i)):(Qt&&h&&so(e),e.flags|=1,He(t,e,n,i),e.child)}function vd(t,e,a,n,i){if(t===null){var r=a.type;return typeof r=="function"&&!lo(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,bd(t,e,r,n,i)):(t=yr(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!tc(t,i)){var f=r.memoizedProps;if(a=a.compare,a=a!==null?a:mi,a(f,n)&&t.ref===e.ref)return La(t,e,i)}return e.flags|=1,t=Ya(r,n),t.ref=e.ref,t.return=e,e.child=t}function bd(t,e,a,n,i){if(t!==null){var r=t.memoizedProps;if(mi(r,n)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=n=r,tc(t,i))(t.flags&131072)!==0&&(Ce=!0);else return e.lanes=t.lanes,La(t,e,i)}return Zo(t,e,a,n,i)}function Sd(t,e,a,n){var i=n.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,e.child=null;return wd(t,e,r,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sr(e,r!==null?r.cachePool:null),r!==null?Mf(e,r):Co(),Tf(e);else return n=e.lanes=536870912,wd(t,e,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(Sr(e,r.cachePool),Mf(e,r),hn(),e.memoizedState=null):(t!==null&&Sr(e,null),Co(),hn());return He(t,e,i,a),e.child}function Oi(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function wd(t,e,a,n,i){var r=yo();return r=r===null?null:{parent:Se._currentValue,pool:r},e.memoizedState={baseLanes:a,cachePool:r},t!==null&&Sr(e,null),Co(),Tf(e),t!==null&&Ml(t,e,n,!0),e.childLanes=i,null}function Hr(t,e){return e=Br({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Cd(t,e,a){return Vn(e,t.child,null,a),t=Hr(e,e.pendingProps),t.flags|=2,ea(e),e.memoizedState=null,t}function o0(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Qt){if(n.mode==="hidden")return t=Hr(e,n),e.lanes=536870912,Oi(null,t);if(To(e),(t=re)?(t=_p(t,ma),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:sn!==null?{id:Ma,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},a=rf(t),a.return=e,e.child=a,_e=e,re=null)):t=null,t===null)throw cn(e);return e.lanes=536870912,null}return Hr(e,n)}var r=t.memoizedState;if(r!==null){var f=r.dehydrated;if(To(e),i)if(e.flags&256)e.flags&=-257,e=Cd(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(Ce||Ml(t,e,a,!1),i=(a&t.childLanes)!==0,Ce||i){if(n=ee,n!==null&&(f=ai(n,a),f!==0&&f!==r.retryLane))throw r.retryLane=f,Un(t,f),Ke(n,t,f),Vo;Kr(),e=Cd(t,e,a)}else t=r.treeContext,re=ga(f.nextSibling),_e=e,Qt=!0,on=null,ma=!1,t!==null&&cf(e,t),e=Hr(e,n),e.flags|=4096;return e}return t=Ya(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ur(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Zo(t,e,a,n,i){return $n(e),a=zo(t,e,a,n,void 0,i),n=Ro(),t!==null&&!Ce?(Oo(t,e,i),La(t,e,i)):(Qt&&n&&so(e),e.flags|=1,He(t,e,a,i),e.child)}function Md(t,e,a,n,i,r){return $n(e),e.updateQueue=null,a=zf(e,n,a,i),jf(t),n=Ro(),t!==null&&!Ce?(Oo(t,e,r),La(t,e,r)):(Qt&&n&&so(e),e.flags|=1,He(t,e,a,r),e.child)}function Td(t,e,a,n,i){if($n(e),e.stateNode===null){var r=bl,f=a.contextType;typeof f=="object"&&f!==null&&(r=Ee(f)),r=new a(n,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Go,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=n,r.state=e.memoizedState,r.refs={},vo(e),f=a.contextType,r.context=typeof f=="object"&&f!==null?Ee(f):bl,r.state=e.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(qo(e,a,f,n),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Go.enqueueReplaceState(r,r.state,null),Mi(e,n,r,i),Ci(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){r=e.stateNode;var h=e.memoizedProps,w=Kn(a,h);r.props=w;var H=r.context,P=a.contextType;f=bl,typeof P=="object"&&P!==null&&(f=Ee(P));var at=a.getDerivedStateFromProps;P=typeof at=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,P||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||H!==f)&&fd(e,r,n,f),fn=!1;var q=e.memoizedState;r.state=q,Mi(e,n,r,i),Ci(),H=e.memoizedState,h||q!==H||fn?(typeof at=="function"&&(qo(e,a,at,n),H=e.memoizedState),(w=fn||ud(e,a,w,n,q,H,f))?(P||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=H),r.props=n,r.state=H,r.context=f,n=w):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{r=e.stateNode,bo(t,e),f=e.memoizedProps,P=Kn(a,f),r.props=P,at=e.pendingProps,q=r.context,H=a.contextType,w=bl,typeof H=="object"&&H!==null&&(w=Ee(H)),h=a.getDerivedStateFromProps,(H=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==at||q!==w)&&fd(e,r,n,w),fn=!1,q=e.memoizedState,r.state=q,Mi(e,n,r,i),Ci();var K=e.memoizedState;f!==at||q!==K||fn||t!==null&&t.dependencies!==null&&vr(t.dependencies)?(typeof h=="function"&&(qo(e,a,h,n),K=e.memoizedState),(P=fn||ud(e,a,P,n,q,K,w)||t!==null&&t.dependencies!==null&&vr(t.dependencies))?(H||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,K,w),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,K,w)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===t.memoizedProps&&q===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&q===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=K),r.props=n,r.state=K,r.context=w,n=P):(typeof r.componentDidUpdate!="function"||f===t.memoizedProps&&q===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&q===t.memoizedState||(e.flags|=1024),n=!1)}return r=n,Ur(t,e),n=(e.flags&128)!==0,r||n?(r=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&n?(e.child=Vn(e,t.child,null,i),e.child=Vn(e,null,a,i)):He(t,e,a,i),e.memoizedState=r.state,t=e.child):t=La(t,e,i),t}function jd(t,e,a,n){return Ln(),e.flags|=256,He(t,e,a,n),e.child}var Ko={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jo(t){return{baseLanes:t,cachePool:hf()}}function Wo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=na),t}function zd(t,e,a){var n=e.pendingProps,i=!1,r=(e.flags&128)!==0,f;if((f=r)||(f=t!==null&&t.memoizedState===null?!1:(ge.current&2)!==0),f&&(i=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Qt){if(i?mn(e):hn(),(t=re)?(t=_p(t,ma),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:sn!==null?{id:Ma,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},a=rf(t),a.return=e,e.child=a,_e=e,re=null)):t=null,t===null)throw cn(e);return kc(t)?e.lanes=32:e.lanes=536870912,null}var h=n.children;return n=n.fallback,i?(hn(),i=e.mode,h=Br({mode:"hidden",children:h},i),n=Bn(n,i,a,null),h.return=e,n.return=e,h.sibling=n,e.child=h,n=e.child,n.memoizedState=Jo(a),n.childLanes=Wo(t,f,a),e.memoizedState=Ko,Oi(null,n)):(mn(e),Fo(e,h))}var w=t.memoizedState;if(w!==null&&(h=w.dehydrated,h!==null)){if(r)e.flags&256?(mn(e),e.flags&=-257,e=Io(t,e,a)):e.memoizedState!==null?(hn(),e.child=t.child,e.flags|=128,e=null):(hn(),h=n.fallback,i=e.mode,n=Br({mode:"visible",children:n.children},i),h=Bn(h,i,a,null),h.flags|=2,n.return=e,h.return=e,n.sibling=h,e.child=n,Vn(e,t.child,null,a),n=e.child,n.memoizedState=Jo(a),n.childLanes=Wo(t,f,a),e.memoizedState=Ko,e=Oi(null,n));else if(mn(e),kc(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var H=f.dgst;f=H,n=Error(s(419)),n.stack="",n.digest=f,yi({value:n,source:null,stack:null}),e=Io(t,e,a)}else if(Ce||Ml(t,e,a,!1),f=(a&t.childLanes)!==0,Ce||f){if(f=ee,f!==null&&(n=ai(f,a),n!==0&&n!==w.retryLane))throw w.retryLane=n,Un(t,n),Ke(f,t,n),Vo;Ac(h)||Kr(),e=Io(t,e,a)}else Ac(h)?(e.flags|=192,e.child=t.child,e=null):(t=w.treeContext,re=ga(h.nextSibling),_e=e,Qt=!0,on=null,ma=!1,t!==null&&cf(e,t),e=Fo(e,n.children),e.flags|=4096);return e}return i?(hn(),h=n.fallback,i=e.mode,w=t.child,H=w.sibling,n=Ya(w,{mode:"hidden",children:n.children}),n.subtreeFlags=w.subtreeFlags&65011712,H!==null?h=Ya(H,h):(h=Bn(h,i,a,null),h.flags|=2),h.return=e,n.return=e,n.sibling=h,e.child=n,Oi(null,n),n=e.child,h=t.child.memoizedState,h===null?h=Jo(a):(i=h.cachePool,i!==null?(w=Se._currentValue,i=i.parent!==w?{parent:w,pool:w}:i):i=hf(),h={baseLanes:h.baseLanes|a,cachePool:i}),n.memoizedState=h,n.childLanes=Wo(t,f,a),e.memoizedState=Ko,Oi(t.child,n)):(mn(e),a=t.child,t=a.sibling,a=Ya(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=a,e.memoizedState=null,a)}function Fo(t,e){return e=Br({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Br(t,e){return t=Pe(22,t,null,e),t.lanes=0,t}function Io(t,e,a){return Vn(e,t.child,null,a),t=Fo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Rd(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),po(t.return,e,a)}function Po(t,e,a,n,i,r){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(f.isBackwards=e,f.rendering=null,f.renderingStartTime=0,f.last=n,f.tail=a,f.tailMode=i,f.treeForkCount=r)}function Od(t,e,a){var n=e.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var f=ge.current,h=(f&2)!==0;if(h?(f=f&1|2,e.flags|=128):f&=1,I(ge,f),He(t,e,n,a),n=Qt?gi:0,!h&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rd(t,a,e);else if(t.tag===19)Rd(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&zr(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Po(e,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zr(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Po(e,!0,a,null,r,n);break;case"together":Po(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function La(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),xn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Ml(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=Ya(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ya(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function tc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&vr(t)))}function c0(t,e,a){switch(e.tag){case 3:jt(e,e.stateNode.containerInfo),un(e,Se,t.memoizedState.cache),Ln();break;case 27:case 5:kt(e);break;case 4:jt(e,e.stateNode.containerInfo);break;case 10:un(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,To(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(mn(e),e.flags|=128,null):(a&e.child.childLanes)!==0?zd(t,e,a):(mn(e),t=La(t,e,a),t!==null?t.sibling:null);mn(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(Ml(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return Od(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(ge,ge.current),n)break;return null;case 22:return e.lanes=0,Sd(t,e,a,e.pendingProps);case 24:un(e,Se,t.memoizedState.cache)}return La(t,e,a)}function Nd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ce=!0;else{if(!tc(t,a)&&(e.flags&128)===0)return Ce=!1,c0(t,e,a);Ce=(t.flags&131072)!==0}else Ce=!1,Qt&&(e.flags&1048576)!==0&&of(e,gi,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=Gn(e.elementType),e.type=t,typeof t=="function")lo(t)?(n=Kn(t,n),e.tag=1,e=Td(null,e,t,n,a)):(e.tag=0,e=Zo(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===_){e.tag=11,e=xd(null,e,t,n,a);break t}else if(i===B){e.tag=14,e=vd(null,e,t,n,a);break t}}throw e=Ct(t)||t,Error(s(306,e,""))}}return e;case 0:return Zo(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=Kn(n,e.pendingProps),Td(t,e,n,i,a);case 3:t:{if(jt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));n=e.pendingProps;var r=e.memoizedState;i=r.element,bo(t,e),Mi(e,n,null,a);var f=e.memoizedState;if(n=f.cache,un(e,Se,n),n!==r.cache&&mo(e,[Se],a,!0),Ci(),n=f.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=jd(t,e,n,a);break t}else if(n!==i){i=fa(Error(s(424)),e),yi(i),e=jd(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(re=ga(t.firstChild),_e=e,Qt=!0,on=null,ma=!0,a=Sf(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ln(),n===i){e=La(t,e,a);break t}He(t,e,n,a)}e=e.child}return e;case 26:return Ur(t,e),t===null?(a=Xp(e.type,null,e.pendingProps,null))?e.memoizedState=a:Qt||(a=e.type,t=e.pendingProps,n=es(wt.current).createElement(a),n[Ye]=e,n[$e]=t,Ue(n,a,t),Ae(n),e.stateNode=n):e.memoizedState=Xp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return kt(e),t===null&&Qt&&(n=e.stateNode=Up(e.type,e.pendingProps,wt.current),_e=e,ma=!0,i=re,Cn(e.type)?(Dc=i,re=ga(n.firstChild)):re=i),He(t,e,e.pendingProps.children,a),Ur(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Qt&&((i=n=re)&&(n=B0(n,e.type,e.pendingProps,ma),n!==null?(e.stateNode=n,_e=e,re=ga(n.firstChild),ma=!1,i=!0):i=!1),i||cn(e)),kt(e),i=e.type,r=e.pendingProps,f=t!==null?t.memoizedProps:null,n=r.children,Rc(i,r)?n=null:f!==null&&Rc(i,f)&&(e.flags|=32),e.memoizedState!==null&&(i=zo(t,e,t0,null,null,a),Gi._currentValue=i),Ur(t,e),He(t,e,n,a),e.child;case 6:return t===null&&Qt&&((t=a=re)&&(a=L0(a,e.pendingProps,ma),a!==null?(e.stateNode=a,_e=e,re=null,t=!0):t=!1),t||cn(e)),null;case 13:return zd(t,e,a);case 4:return jt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Vn(e,null,n,a):He(t,e,n,a),e.child;case 11:return xd(t,e,e.type,e.pendingProps,a);case 7:return He(t,e,e.pendingProps,a),e.child;case 8:return He(t,e,e.pendingProps.children,a),e.child;case 12:return He(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,un(e,e.type,n.value),He(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,$n(e),i=Ee(i),n=n(i),e.flags|=1,He(t,e,n,a),e.child;case 14:return vd(t,e,e.type,e.pendingProps,a);case 15:return bd(t,e,e.type,e.pendingProps,a);case 19:return Od(t,e,a);case 31:return o0(t,e,a);case 22:return Sd(t,e,a,e.pendingProps);case 24:return $n(e),n=Ee(Se),t===null?(i=yo(),i===null&&(i=ee,r=ho(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),e.memoizedState={parent:n,cache:i},vo(e),un(e,Se,i)):((t.lanes&a)!==0&&(bo(t,e),Mi(e,null,null,a),Ci()),i=t.memoizedState,r=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),un(e,Se,n)):(n=r.cache,un(e,Se,n),n!==i.cache&&mo(e,[Se],a,!0))),He(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Xa(t){t.flags|=4}function ec(t,e,a,n,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(np())t.flags|=8192;else throw Qn=Cr,xo}else t.flags&=-16777217}function Ad(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vp(e))if(np())t.flags|=8192;else throw Qn=Cr,xo}function Lr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ar():536870912,t.lanes|=e,El|=e)}function Ni(t,e){if(!Qt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function se(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function u0(t,e,a){var n=e.pendingProps;switch(oo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(e),null;case 1:return se(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ha(Se),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?Xa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,uo())),se(e),null;case 26:var i=e.type,r=e.memoizedState;return t===null?(Xa(e),r!==null?(se(e),Ad(e,r)):(se(e),ec(e,i,null,n,a))):r?r!==t.memoizedState?(Xa(e),se(e),Ad(e,r)):(se(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Xa(e),se(e),ec(e,i,t,n,a)),null;case 27:if(Dt(e),a=wt.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Xa(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return se(e),null}t=ut.current,Cl(e)?uf(e):(t=Up(i,n,a),e.stateNode=t,Xa(e))}return se(e),null;case 5:if(Dt(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Xa(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return se(e),null}if(r=ut.current,Cl(e))uf(e);else{var f=es(wt.current);switch(r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?f.createElement("select",{is:n.is}):f.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?f.createElement(i,{is:n.is}):f.createElement(i)}}r[Ye]=e,r[$e]=n;t:for(f=e.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break t;for(;f.sibling===null;){if(f.return===null||f.return===e)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}e.stateNode=r;t:switch(Ue(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Xa(e)}}return se(e),ec(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Xa(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(s(166));if(t=wt.current,Cl(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=_e,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[Ye]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||zp(t.nodeValue,a)),t||cn(e,!0)}else t=es(t).createTextNode(n),t[Ye]=e,e.stateNode=t}return se(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=Cl(e),a!==null){if(t===null){if(!n)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ye]=e}else Ln(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;se(e),t=!1}else a=uo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ea(e),e):(ea(e),null);if((e.flags&128)!==0)throw Error(s(558))}return se(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Cl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ye]=e}else Ln(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;se(e),i=!1}else i=uo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(ea(e),e):(ea(e),null)}return ea(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Lr(e,e.updateQueue),se(e),null);case 4:return Ut(),t===null&&Cc(e.stateNode.containerInfo),se(e),null;case 10:return Ha(e.type),se(e),null;case 19:if(U(ge),n=e.memoizedState,n===null)return se(e),null;if(i=(e.flags&128)!==0,r=n.rendering,r===null)if(i)Ni(n,!1);else{if(he!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=zr(t),r!==null){for(e.flags|=128,Ni(n,!1),t=r.updateQueue,e.updateQueue=t,Lr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)lf(a,t),a=a.sibling;return I(ge,ge.current&1|2),Qt&&_a(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&ue()>Qr&&(e.flags|=128,i=!0,Ni(n,!1),e.lanes=4194304)}else{if(!i)if(t=zr(r),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Lr(e,t),Ni(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!Qt)return se(e),null}else 2*ue()-n.renderingStartTime>Qr&&a!==536870912&&(e.flags|=128,i=!0,Ni(n,!1),e.lanes=4194304);n.isBackwards?(r.sibling=e.child,e.child=r):(t=n.last,t!==null?t.sibling=r:e.child=r,n.last=r)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=ue(),t.sibling=null,a=ge.current,I(ge,i?a&1|2:a&1),Qt&&_a(e,n.treeForkCount),t):(se(e),null);case 22:case 23:return ea(e),Mo(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(se(e),e.subtreeFlags&6&&(e.flags|=8192)):se(e),a=e.updateQueue,a!==null&&Lr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&U(qn),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ha(Se),se(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function f0(t,e){switch(oo(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ha(Se),Ut(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Dt(e),null;case 31:if(e.memoizedState!==null){if(ea(e),e.alternate===null)throw Error(s(340));Ln()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ea(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Ln()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return U(ge),null;case 4:return Ut(),null;case 10:return Ha(e.type),null;case 22:case 23:return ea(e),Mo(),t!==null&&U(qn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ha(Se),null;case 25:return null;default:return null}}function kd(t,e){switch(oo(e),e.tag){case 3:Ha(Se),Ut();break;case 26:case 27:case 5:Dt(e);break;case 4:Ut();break;case 31:e.memoizedState!==null&&ea(e);break;case 13:ea(e);break;case 19:U(ge);break;case 10:Ha(e.type);break;case 22:case 23:ea(e),Mo(),t!==null&&U(qn);break;case 24:Ha(Se)}}function Ai(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var r=a.create,f=a.inst;n=r(),f.destroy=n}a=a.next}while(a!==i)}}catch(h){Ft(e,e.return,h)}}function gn(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&t)===t){var f=n.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=e;var w=a,H=h;try{H()}catch(P){Ft(i,w,P)}}}n=n.next}while(n!==r)}}catch(P){Ft(e,e.return,P)}}function Dd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Cf(e,a)}catch(n){Ft(t,t.return,n)}}}function Yd(t,e,a){a.props=Kn(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Ft(t,e,n)}}function ki(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){Ft(t,e,i)}}function ja(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ft(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ft(t,e,i)}else a.current=null}function _d(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ft(t,t.return,i)}}function ac(t,e,a){try{var n=t.stateNode;D0(n,t.type,a,e),n[$e]=e}catch(i){Ft(t,t.return,i)}}function Ed(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Cn(t.type)||t.tag===4}function nc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ed(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Cn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lc(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ka));else if(n!==4&&(n===27&&Cn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(lc(t,e,a),t=t.sibling;t!==null;)lc(t,e,a),t=t.sibling}function Xr(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&Cn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xr(t,e,a),t=t.sibling;t!==null;)Xr(t,e,a),t=t.sibling}function Hd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ue(e,n,a),e[Ye]=t,e[$e]=a}catch(r){Ft(t,t.return,r)}}var $a=!1,Me=!1,ic=!1,Ud=typeof WeakSet=="function"?WeakSet:Set,ke=null;function d0(t,e){if(t=t.containerInfo,jc=os,t=Ju(t),Fs(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break t}var f=0,h=-1,w=-1,H=0,P=0,at=t,q=null;e:for(;;){for(var K;at!==a||i!==0&&at.nodeType!==3||(h=f+i),at!==r||n!==0&&at.nodeType!==3||(w=f+n),at.nodeType===3&&(f+=at.nodeValue.length),(K=at.firstChild)!==null;)q=at,at=K;for(;;){if(at===t)break e;if(q===a&&++H===i&&(h=f),q===r&&++P===n&&(w=f),(K=at.nextSibling)!==null)break;at=q,q=at.parentNode}at=K}a=h===-1||w===-1?null:{start:h,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(zc={focusedElem:t,selectionRange:a},os=!1,ke=e;ke!==null;)if(e=ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ke=t;else for(;ke!==null;){switch(e=ke,r=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,a=e,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var bt=Kn(a.type,i);t=n.getSnapshotBeforeUpdate(bt,r),n.__reactInternalSnapshotBeforeUpdate=t}catch(zt){Ft(a,a.return,zt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Nc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,ke=t;break}ke=e.return}}function Bd(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ga(t,a),n&4&&Ai(5,a);break;case 1:if(Ga(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(f){Ft(a,a.return,f)}else{var i=Kn(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Ft(a,a.return,f)}}n&64&&Dd(a),n&512&&ki(a,a.return);break;case 3:if(Ga(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Cf(t,e)}catch(f){Ft(a,a.return,f)}}break;case 27:e===null&&n&4&&Hd(a);case 26:case 5:Ga(t,a),e===null&&n&4&&_d(a),n&512&&ki(a,a.return);break;case 12:Ga(t,a);break;case 31:Ga(t,a),n&4&&$d(t,a);break;case 13:Ga(t,a),n&4&&qd(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=S0.bind(null,a),X0(t,a))));break;case 22:if(n=a.memoizedState!==null||$a,!n){e=e!==null&&e.memoizedState!==null||Me,i=$a;var r=Me;$a=n,(Me=e)&&!r?Qa(t,a,(a.subtreeFlags&8772)!==0):Ga(t,a),$a=i,Me=r}break;case 30:break;default:Ga(t,a)}}function Ld(t){var e=t.alternate;e!==null&&(t.alternate=null,Ld(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ys(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var de=null,Ge=!1;function qa(t,e,a){for(a=a.child;a!==null;)Xd(t,e,a),a=a.sibling}function Xd(t,e,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(rt,a)}catch{}switch(a.tag){case 26:Me||ja(a,e),qa(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Me||ja(a,e);var n=de,i=Ge;Cn(a.type)&&(de=a.stateNode,Ge=!1),qa(t,e,a),Xi(a.stateNode),de=n,Ge=i;break;case 5:Me||ja(a,e);case 6:if(n=de,i=Ge,de=null,qa(t,e,a),de=n,Ge=i,de!==null)if(Ge)try{(de.nodeType===9?de.body:de.nodeName==="HTML"?de.ownerDocument.body:de).removeChild(a.stateNode)}catch(r){Ft(a,e,r)}else try{de.removeChild(a.stateNode)}catch(r){Ft(a,e,r)}break;case 18:de!==null&&(Ge?(t=de,Dp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gl(t)):Dp(de,a.stateNode));break;case 4:n=de,i=Ge,de=a.stateNode.containerInfo,Ge=!0,qa(t,e,a),de=n,Ge=i;break;case 0:case 11:case 14:case 15:gn(2,a,e),Me||gn(4,a,e),qa(t,e,a);break;case 1:Me||(ja(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Yd(a,e,n)),qa(t,e,a);break;case 21:qa(t,e,a);break;case 22:Me=(n=Me)||a.memoizedState!==null,qa(t,e,a),Me=n;break;default:qa(t,e,a)}}function $d(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gl(t)}catch(a){Ft(e,e.return,a)}}}function qd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gl(t)}catch(a){Ft(e,e.return,a)}}function p0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ud),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ud),e;default:throw Error(s(435,t.tag))}}function $r(t,e){var a=p0(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=w0.bind(null,t,n);n.then(i,i)}})}function Qe(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=t,f=e,h=f;t:for(;h!==null;){switch(h.tag){case 27:if(Cn(h.type)){de=h.stateNode,Ge=!1;break t}break;case 5:de=h.stateNode,Ge=!1;break t;case 3:case 4:de=h.stateNode.containerInfo,Ge=!0;break t}h=h.return}if(de===null)throw Error(s(160));Xd(r,f,i),de=null,Ge=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Gd(e,t),e=e.sibling}var va=null;function Gd(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qe(e,t),Ve(t),n&4&&(gn(3,t,t.return),Ai(3,t),gn(5,t,t.return));break;case 1:Qe(e,t),Ve(t),n&512&&(Me||a===null||ja(a,a.return)),n&64&&$a&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=va;if(Qe(e,t),Ve(t),n&512&&(Me||a===null||ja(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[ii]||r[Ye]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),Ue(r,n,a),r[Ye]=t,Ae(r),n=r;break t;case"link":var f=Gp("link","href",i).get(n+(a.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(h,1);break e}}r=i.createElement(n),Ue(r,n,a),i.head.appendChild(r);break;case"meta":if(f=Gp("meta","content",i).get(n+(a.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(h,1);break e}}r=i.createElement(n),Ue(r,n,a),i.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ye]=t,Ae(r),n=r}t.stateNode=n}else Qp(i,t.type,t.stateNode);else t.stateNode=qp(i,n,t.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Qp(i,t.type,t.stateNode):qp(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&ac(t,t.memoizedProps,a.memoizedProps)}break;case 27:Qe(e,t),Ve(t),n&512&&(Me||a===null||ja(a,a.return)),a!==null&&n&4&&ac(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Qe(e,t),Ve(t),n&512&&(Me||a===null||ja(a,a.return)),t.flags&32){i=t.stateNode;try{pl(i,"")}catch(bt){Ft(t,t.return,bt)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,ac(t,i,a!==null?a.memoizedProps:i)),n&1024&&(ic=!0);break;case 6:if(Qe(e,t),Ve(t),n&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(bt){Ft(t,t.return,bt)}}break;case 3:if(ls=null,i=va,va=as(e.containerInfo),Qe(e,t),va=i,Ve(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Gl(e.containerInfo)}catch(bt){Ft(t,t.return,bt)}ic&&(ic=!1,Qd(t));break;case 4:n=va,va=as(t.stateNode.containerInfo),Qe(e,t),Ve(t),va=n;break;case 12:Qe(e,t),Ve(t);break;case 31:Qe(e,t),Ve(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,$r(t,n)));break;case 13:Qe(e,t),Ve(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gr=ue()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,$r(t,n)));break;case 22:i=t.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,H=$a,P=Me;if($a=H||i,Me=P||w,Qe(e,t),Me=P,$a=H,Ve(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||w||$a||Me||Jn(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){w=a=e;try{if(r=w.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=w.stateNode;var at=w.memoizedProps.style,q=at!=null&&at.hasOwnProperty("display")?at.display:null;h.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(bt){Ft(w,w.return,bt)}}}else if(e.tag===6){if(a===null){w=e;try{w.stateNode.nodeValue=i?"":w.memoizedProps}catch(bt){Ft(w,w.return,bt)}}}else if(e.tag===18){if(a===null){w=e;try{var K=w.stateNode;i?Yp(K,!0):Yp(w.stateNode,!1)}catch(bt){Ft(w,w.return,bt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,$r(t,a))));break;case 19:Qe(e,t),Ve(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,$r(t,n)));break;case 30:break;case 21:break;default:Qe(e,t),Ve(t)}}function Ve(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Ed(n)){a=n;break}n=n.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var i=a.stateNode,r=nc(t);Xr(t,r,i);break;case 5:var f=a.stateNode;a.flags&32&&(pl(f,""),a.flags&=-33);var h=nc(t);Xr(t,h,f);break;case 3:case 4:var w=a.stateNode.containerInfo,H=nc(t);lc(t,H,w);break;default:throw Error(s(161))}}catch(P){Ft(t,t.return,P)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Qd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ga(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Bd(t,e.alternate,e),e=e.sibling}function Jn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:gn(4,e,e.return),Jn(e);break;case 1:ja(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Yd(e,e.return,a),Jn(e);break;case 27:Xi(e.stateNode);case 26:case 5:ja(e,e.return),Jn(e);break;case 22:e.memoizedState===null&&Jn(e);break;case 30:Jn(e);break;default:Jn(e)}t=t.sibling}}function Qa(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,r=e,f=r.flags;switch(r.tag){case 0:case 11:case 15:Qa(i,r,a),Ai(4,r);break;case 1:if(Qa(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(H){Ft(n,n.return,H)}if(n=r,i=n.updateQueue,i!==null){var h=n.stateNode;try{var w=i.shared.hiddenCallbacks;if(w!==null)for(i.shared.hiddenCallbacks=null,i=0;i<w.length;i++)wf(w[i],h)}catch(H){Ft(n,n.return,H)}}a&&f&64&&Dd(r),ki(r,r.return);break;case 27:Hd(r);case 26:case 5:Qa(i,r,a),a&&n===null&&f&4&&_d(r),ki(r,r.return);break;case 12:Qa(i,r,a);break;case 31:Qa(i,r,a),a&&f&4&&$d(i,r);break;case 13:Qa(i,r,a),a&&f&4&&qd(i,r);break;case 22:r.memoizedState===null&&Qa(i,r,a),ki(r,r.return);break;case 30:break;default:Qa(i,r,a)}e=e.sibling}}function rc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&xi(a))}function sc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xi(t))}function ba(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vd(t,e,a,n),e=e.sibling}function Vd(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ba(t,e,a,n),i&2048&&Ai(9,e);break;case 1:ba(t,e,a,n);break;case 3:ba(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xi(t)));break;case 12:if(i&2048){ba(t,e,a,n),t=e.stateNode;try{var r=e.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){Ft(e,e.return,w)}}else ba(t,e,a,n);break;case 31:ba(t,e,a,n);break;case 13:ba(t,e,a,n);break;case 23:break;case 22:r=e.stateNode,f=e.alternate,e.memoizedState!==null?r._visibility&2?ba(t,e,a,n):Di(t,e):r._visibility&2?ba(t,e,a,n):(r._visibility|=2,Dl(t,e,a,n,(e.subtreeFlags&10256)!==0||!1)),i&2048&&rc(f,e);break;case 24:ba(t,e,a,n),i&2048&&sc(e.alternate,e);break;default:ba(t,e,a,n)}}function Dl(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,f=e,h=a,w=n,H=f.flags;switch(f.tag){case 0:case 11:case 15:Dl(r,f,h,w,i),Ai(8,f);break;case 23:break;case 22:var P=f.stateNode;f.memoizedState!==null?P._visibility&2?Dl(r,f,h,w,i):Di(r,f):(P._visibility|=2,Dl(r,f,h,w,i)),i&&H&2048&&rc(f.alternate,f);break;case 24:Dl(r,f,h,w,i),i&&H&2048&&sc(f.alternate,f);break;default:Dl(r,f,h,w,i)}e=e.sibling}}function Di(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Di(a,n),i&2048&&rc(n.alternate,n);break;case 24:Di(a,n),i&2048&&sc(n.alternate,n);break;default:Di(a,n)}e=e.sibling}}var Yi=8192;function Yl(t,e,a){if(t.subtreeFlags&Yi)for(t=t.child;t!==null;)Zd(t,e,a),t=t.sibling}function Zd(t,e,a){switch(t.tag){case 26:Yl(t,e,a),t.flags&Yi&&t.memoizedState!==null&&P0(a,va,t.memoizedState,t.memoizedProps);break;case 5:Yl(t,e,a);break;case 3:case 4:var n=va;va=as(t.stateNode.containerInfo),Yl(t,e,a),va=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Yi,Yi=16777216,Yl(t,e,a),Yi=n):Yl(t,e,a));break;default:Yl(t,e,a)}}function Kd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function _i(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];ke=n,Wd(n,t)}Kd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jd(t),t=t.sibling}function Jd(t){switch(t.tag){case 0:case 11:case 15:_i(t),t.flags&2048&&gn(9,t,t.return);break;case 3:_i(t);break;case 12:_i(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,qr(t)):_i(t);break;default:_i(t)}}function qr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];ke=n,Wd(n,t)}Kd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:gn(8,e,e.return),qr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,qr(e));break;default:qr(e)}t=t.sibling}}function Wd(t,e){for(;ke!==null;){var a=ke;switch(a.tag){case 0:case 11:case 15:gn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:xi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,ke=n;else t:for(a=t;ke!==null;){n=ke;var i=n.sibling,r=n.return;if(Ld(n),n===a){ke=null;break t}if(i!==null){i.return=r,ke=i;break t}ke=r}}}var m0={getCacheForType:function(t){var e=Ee(Se),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ee(Se).controller.signal}},h0=typeof WeakMap=="function"?WeakMap:Map,Kt=0,ee=null,Bt=null,$t=0,Wt=0,aa=null,yn=!1,_l=!1,oc=!1,Va=0,he=0,xn=0,Wn=0,cc=0,na=0,El=0,Ei=null,Ze=null,uc=!1,Gr=0,Fd=0,Qr=1/0,Vr=null,vn=null,Re=0,bn=null,Hl=null,Za=0,fc=0,dc=null,Id=null,Hi=0,pc=null;function la(){return(Kt&2)!==0&&$t!==0?$t&-$t:D.T!==null?vc():ni()}function Pd(){if(na===0)if(($t&536870912)===0||Qt){var t=sa;sa<<=1,(sa&3932160)===0&&(sa=262144),na=t}else na=536870912;return t=ta.current,t!==null&&(t.flags|=32),na}function Ke(t,e,a){(t===ee&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Ul(t,0),Sn(t,$t,na,!1)),en(t,a),((Kt&2)===0||t!==ee)&&(t===ee&&((Kt&2)===0&&(Wn|=a),he===4&&Sn(t,$t,na,!1)),za(t))}function tp(t,e,a){if((Kt&6)!==0)throw Error(s(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||We(t,e),i=n?x0(t,e):hc(t,e,!0),r=n;do{if(i===0){_l&&!n&&Sn(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!g0(a)){i=hc(t,e,!1),r=!1;continue}if(i===2){if(r=e,t.errorRecoveryDisabledLanes&r)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var h=t;i=Ei;var w=h.current.memoizedState.isDehydrated;if(w&&(Ul(h,f).flags|=256),f=hc(h,f,!1),f!==2){if(oc&&!w){h.errorRecoveryDisabledLanes|=r,Wn|=r,i=4;break t}r=Ze,Ze=i,r!==null&&(Ze===null?Ze=r:Ze.push.apply(Ze,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Ul(t,0),Sn(t,e,0,!0);break}t:{switch(n=t,r=i,r){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Sn(n,e,na,!yn);break t;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=Gr+300-ue(),10<i)){if(Sn(n,e,na,!yn),il(n,0,!0)!==0)break t;Za=e,n.timeoutHandle=Ap(ep.bind(null,n,a,Ze,Vr,uc,e,na,Wn,El,yn,r,"Throttled",-0,0),i);break t}ep(n,a,Ze,Vr,uc,e,na,Wn,El,yn,r,null,-0,0)}}break}while(!0);za(t)}function ep(t,e,a,n,i,r,f,h,w,H,P,at,q,K){if(t.timeoutHandle=-1,at=e.subtreeFlags,at&8192||(at&16785408)===16785408){at={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ka},Zd(e,r,at);var bt=(r&62914560)===r?Gr-ue():(r&4194048)===r?Fd-ue():0;if(bt=tg(at,bt),bt!==null){Za=r,t.cancelPendingCommit=bt(cp.bind(null,t,e,r,a,n,i,f,h,w,P,at,null,q,K)),Sn(t,r,f,!H);return}}cp(t,e,r,a,n,i,f,h,w)}function g0(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!Ie(r(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e,a,n){e&=~cc,e&=~Wn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var r=31-vt(i),f=1<<r;n[r]=-1,i&=~f}a!==0&&an(t,a,e)}function Zr(){return(Kt&6)===0?(Ui(0),!1):!0}function mc(){if(Bt!==null){if(Wt===0)var t=Bt.return;else t=Bt,Ea=Xn=null,No(t),Rl=null,bi=0,t=Bt;for(;t!==null;)kd(t.alternate,t),t=t.return;Bt=null}}function Ul(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,E0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Za=0,mc(),ee=t,Bt=a=Ya(t.current,null),$t=e,Wt=0,aa=null,yn=!1,_l=We(t,e),oc=!1,El=na=cc=Wn=xn=he=0,Ze=Ei=null,uc=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-vt(n),r=1<<i;e|=t[i],n&=~r}return Va=e,mr(),a}function ap(t,e){Yt=null,D.H=Ri,e===zl||e===wr?(e=xf(),Wt=3):e===xo?(e=xf(),Wt=4):Wt=e===Vo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,aa=e,Bt===null&&(he=1,Er(t,fa(e,t.current)))}function np(){var t=ta.current;return t===null?!0:($t&4194048)===$t?ha===null:($t&62914560)===$t||($t&536870912)!==0?t===ha:!1}function lp(){var t=D.H;return D.H=Ri,t===null?Ri:t}function ip(){var t=D.A;return D.A=m0,t}function Kr(){he=4,yn||($t&4194048)!==$t&&ta.current!==null||(_l=!0),(xn&134217727)===0&&(Wn&134217727)===0||ee===null||Sn(ee,$t,na,!1)}function hc(t,e,a){var n=Kt;Kt|=2;var i=lp(),r=ip();(ee!==t||$t!==e)&&(Vr=null,Ul(t,e)),e=!1;var f=he;t:do try{if(Wt!==0&&Bt!==null){var h=Bt,w=aa;switch(Wt){case 8:mc(),f=6;break t;case 3:case 2:case 9:case 6:ta.current===null&&(e=!0);var H=Wt;if(Wt=0,aa=null,Bl(t,h,w,H),a&&_l){f=0;break t}break;default:H=Wt,Wt=0,aa=null,Bl(t,h,w,H)}}y0(),f=he;break}catch(P){ap(t,P)}while(!0);return e&&t.shellSuspendCounter++,Ea=Xn=null,Kt=n,D.H=i,D.A=r,Bt===null&&(ee=null,$t=0,mr()),f}function y0(){for(;Bt!==null;)rp(Bt)}function x0(t,e){var a=Kt;Kt|=2;var n=lp(),i=ip();ee!==t||$t!==e?(Vr=null,Qr=ue()+500,Ul(t,e)):_l=We(t,e);t:do try{if(Wt!==0&&Bt!==null){e=Bt;var r=aa;e:switch(Wt){case 1:Wt=0,aa=null,Bl(t,e,r,1);break;case 2:case 9:if(gf(r)){Wt=0,aa=null,sp(e);break}e=function(){Wt!==2&&Wt!==9||ee!==t||(Wt=7),za(t)},r.then(e,e);break t;case 3:Wt=7;break t;case 4:Wt=5;break t;case 7:gf(r)?(Wt=0,aa=null,sp(e)):(Wt=0,aa=null,Bl(t,e,r,7));break;case 5:var f=null;switch(Bt.tag){case 26:f=Bt.memoizedState;case 5:case 27:var h=Bt;if(f?Vp(f):h.stateNode.complete){Wt=0,aa=null;var w=h.sibling;if(w!==null)Bt=w;else{var H=h.return;H!==null?(Bt=H,Jr(H)):Bt=null}break e}}Wt=0,aa=null,Bl(t,e,r,5);break;case 6:Wt=0,aa=null,Bl(t,e,r,6);break;case 8:mc(),he=6;break t;default:throw Error(s(462))}}v0();break}catch(P){ap(t,P)}while(!0);return Ea=Xn=null,D.H=n,D.A=i,Kt=a,Bt!==null?0:(ee=null,$t=0,mr(),he)}function v0(){for(;Bt!==null&&!Ca();)rp(Bt)}function rp(t){var e=Nd(t.alternate,t,Va);t.memoizedProps=t.pendingProps,e===null?Jr(t):Bt=e}function sp(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Md(a,e,e.pendingProps,e.type,void 0,$t);break;case 11:e=Md(a,e,e.pendingProps,e.type.render,e.ref,$t);break;case 5:No(e);default:kd(a,e),e=Bt=lf(e,Va),e=Nd(a,e,Va)}t.memoizedProps=t.pendingProps,e===null?Jr(t):Bt=e}function Bl(t,e,a,n){Ea=Xn=null,No(e),Rl=null,bi=0;var i=e.return;try{if(s0(t,i,e,a,$t)){he=1,Er(t,fa(a,t.current)),Bt=null;return}}catch(r){if(i!==null)throw Bt=i,r;he=1,Er(t,fa(a,t.current)),Bt=null;return}e.flags&32768?(Qt||n===1?t=!0:_l||($t&536870912)!==0?t=!1:(yn=t=!0,(n===2||n===9||n===3||n===6)&&(n=ta.current,n!==null&&n.tag===13&&(n.flags|=16384))),op(e,t)):Jr(e)}function Jr(t){var e=t;do{if((e.flags&32768)!==0){op(e,yn);return}t=e.return;var a=u0(e.alternate,e,Va);if(a!==null){Bt=a;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);he===0&&(he=5)}function op(t,e){do{var a=f0(t.alternate,t);if(a!==null){a.flags&=32767,Bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Bt=t;return}Bt=t=a}while(t!==null);he=6,Bt=null}function cp(t,e,a,n,i,r,f,h,w){t.cancelPendingCommit=null;do Wr();while(Re!==0);if((Kt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(r=e.lanes|e.childLanes,r|=ao,Fe(t,a,r,f,h,w),t===ee&&(Bt=ee=null,$t=0),Hl=e,bn=t,Za=a,fc=r,dc=i,Id=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,C0(X,function(){return mp(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=Z.p,Z.p=2,f=Kt,Kt|=4;try{d0(t,e,a)}finally{Kt=f,Z.p=i,D.T=n}}Re=1,up(),fp(),dp()}}function up(){if(Re===1){Re=0;var t=bn,e=Hl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=Z.p;Z.p=2;var i=Kt;Kt|=4;try{Gd(e,t);var r=zc,f=Ju(t.containerInfo),h=r.focusedElem,w=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&Ku(h.ownerDocument.documentElement,h)){if(w!==null&&Fs(h)){var H=w.start,P=w.end;if(P===void 0&&(P=H),"selectionStart"in h)h.selectionStart=H,h.selectionEnd=Math.min(P,h.value.length);else{var at=h.ownerDocument||document,q=at&&at.defaultView||window;if(q.getSelection){var K=q.getSelection(),bt=h.textContent.length,zt=Math.min(w.start,bt),te=w.end===void 0?zt:Math.min(w.end,bt);!K.extend&&zt>te&&(f=te,te=zt,zt=f);var N=Zu(h,zt),M=Zu(h,te);if(N&&M&&(K.rangeCount!==1||K.anchorNode!==N.node||K.anchorOffset!==N.offset||K.focusNode!==M.node||K.focusOffset!==M.offset)){var E=at.createRange();E.setStart(N.node,N.offset),K.removeAllRanges(),zt>te?(K.addRange(E),K.extend(M.node,M.offset)):(E.setEnd(M.node,M.offset),K.addRange(E))}}}}for(at=[],K=h;K=K.parentNode;)K.nodeType===1&&at.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<at.length;h++){var et=at[h];et.element.scrollLeft=et.left,et.element.scrollTop=et.top}}os=!!jc,zc=jc=null}finally{Kt=i,Z.p=n,D.T=a}}t.current=e,Re=2}}function fp(){if(Re===2){Re=0;var t=bn,e=Hl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=Z.p;Z.p=2;var i=Kt;Kt|=4;try{Bd(t,e.alternate,e)}finally{Kt=i,Z.p=n,D.T=a}}Re=3}}function dp(){if(Re===4||Re===3){Re=0,Je();var t=bn,e=Hl,a=Za,n=Id;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Re=5:(Re=0,Hl=bn=null,pp(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(vn=null),rl(a),e=e.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(rt,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=D.T,i=Z.p,Z.p=2,D.T=null;try{for(var r=t.onRecoverableError,f=0;f<n.length;f++){var h=n[f];r(h.value,{componentStack:h.stack})}}finally{D.T=e,Z.p=i}}(Za&3)!==0&&Wr(),za(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===pc?Hi++:(Hi=0,pc=t):Hi=0,Ui(0)}}function pp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,xi(e)))}function Wr(){return up(),fp(),dp(),mp()}function mp(){if(Re!==5)return!1;var t=bn,e=fc;fc=0;var a=rl(Za),n=D.T,i=Z.p;try{Z.p=32>a?32:a,D.T=null,a=dc,dc=null;var r=bn,f=Za;if(Re=0,Hl=bn=null,Za=0,(Kt&6)!==0)throw Error(s(331));var h=Kt;if(Kt|=4,Jd(r.current),Vd(r,r.current,f,a),Kt=h,Ui(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(rt,r)}catch{}return!0}finally{Z.p=i,D.T=n,pp(t,e)}}function hp(t,e,a){e=fa(a,e),e=Qo(t.stateNode,e,2),t=pn(t,e,2),t!==null&&(en(t,2),za(t))}function Ft(t,e,a){if(t.tag===3)hp(t,t,a);else for(;e!==null;){if(e.tag===3){hp(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(vn===null||!vn.has(n))){t=fa(a,t),a=gd(2),n=pn(e,a,2),n!==null&&(yd(a,n,e,t),en(n,2),za(n));break}}e=e.return}}function gc(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new h0;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(oc=!0,i.add(a),t=b0.bind(null,t,e,a),e.then(t,t))}function b0(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ee===t&&($t&a)===a&&(he===4||he===3&&($t&62914560)===$t&&300>ue()-Gr?(Kt&2)===0&&Ul(t,0):cc|=a,El===$t&&(El=0)),za(t)}function gp(t,e){e===0&&(e=ar()),t=Un(t,e),t!==null&&(en(t,e),za(t))}function S0(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),gp(t,a)}function w0(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(e),gp(t,a)}function C0(t,e){return gt(t,e)}var Fr=null,Ll=null,yc=!1,Ir=!1,xc=!1,wn=0;function za(t){t!==Ll&&t.next===null&&(Ll===null?Fr=Ll=t:Ll=Ll.next=t),Ir=!0,yc||(yc=!0,T0())}function Ui(t,e){if(!xc&&Ir){xc=!0;do for(var a=!1,n=Fr;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var f=n.suspendedLanes,h=n.pingedLanes;r=(1<<31-vt(42|t)+1)-1,r&=i&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,bp(n,r))}else r=$t,r=il(n,n===ee?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||We(n,r)||(a=!0,bp(n,r));n=n.next}while(a);xc=!1}}function M0(){yp()}function yp(){Ir=yc=!1;var t=0;wn!==0&&_0()&&(t=wn);for(var e=ue(),a=null,n=Fr;n!==null;){var i=n.next,r=xp(n,e);r===0?(n.next=null,a===null?Fr=i:a.next=i,i===null&&(Ll=a)):(a=n,(t!==0||(r&3)!==0)&&(Ir=!0)),n=i}Re!==0&&Re!==5||Ui(t),wn!==0&&(wn=0)}function xp(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var f=31-vt(r),h=1<<f,w=i[f];w===-1?((h&a)===0||(h&n)!==0)&&(i[f]=er(h,e)):w<=e&&(t.expiredLanes|=h),r&=~h}if(e=ee,a=$t,a=il(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&ce(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||We(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&ce(n),rl(a)){case 2:case 8:a=R;break;case 32:a=X;break;case 268435456:a=ct;break;default:a=X}return n=vp.bind(null,t),a=gt(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&ce(n),t.callbackPriority=2,t.callbackNode=null,2}function vp(t,e){if(Re!==0&&Re!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wr()&&t.callbackNode!==a)return null;var n=$t;return n=il(t,t===ee?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(tp(t,n,e),xp(t,ue()),t.callbackNode!=null&&t.callbackNode===a?vp.bind(null,t):null)}function bp(t,e){if(Wr())return null;tp(t,e,!0)}function T0(){H0(function(){(Kt&6)!==0?gt(z,M0):yp()})}function vc(){if(wn===0){var t=Tl;t===0&&(t=ie,ie<<=1,(ie&261888)===0&&(ie=256)),wn=t}return wn}function Sp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rr(""+t)}function wp(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function j0(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var r=Sp((i[$e]||null).action),f=n.submitter;f&&(e=(e=f[$e]||null)?Sp(e.formAction):f.getAttribute("formAction"),e!==null&&(r=e,f=null));var h=new ur("action","action",null,n,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(wn!==0){var w=f?wp(i,f):new FormData(i);Bo(a,{pending:!0,data:w,method:i.method,action:r},null,w)}}else typeof r=="function"&&(h.preventDefault(),w=f?wp(i,f):new FormData(i),Bo(a,{pending:!0,data:w,method:i.method,action:r},r,w))},currentTarget:i}]})}}for(var bc=0;bc<eo.length;bc++){var Sc=eo[bc],z0=Sc.toLowerCase(),R0=Sc[0].toUpperCase()+Sc.slice(1);xa(z0,"on"+R0)}xa(Iu,"onAnimationEnd"),xa(Pu,"onAnimationIteration"),xa(tf,"onAnimationStart"),xa("dblclick","onDoubleClick"),xa("focusin","onFocus"),xa("focusout","onBlur"),xa(Gh,"onTransitionRun"),xa(Qh,"onTransitionStart"),xa(Vh,"onTransitionCancel"),xa(ef,"onTransitionEnd"),fl("onMouseEnter",["mouseout","mouseover"]),fl("onMouseLeave",["mouseout","mouseover"]),fl("onPointerEnter",["pointerout","pointerover"]),fl("onPointerLeave",["pointerout","pointerover"]),Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bi));function Cp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var r=void 0;if(e)for(var f=n.length-1;0<=f;f--){var h=n[f],w=h.instance,H=h.currentTarget;if(h=h.listener,w!==r&&i.isPropagationStopped())break t;r=h,i.currentTarget=H;try{r(i)}catch(P){pr(P)}i.currentTarget=null,r=w}else for(f=0;f<n.length;f++){if(h=n[f],w=h.instance,H=h.currentTarget,h=h.listener,w!==r&&i.isPropagationStopped())break t;r=h,i.currentTarget=H;try{r(i)}catch(P){pr(P)}i.currentTarget=null,r=w}}}}function Lt(t,e){var a=e[Ds];a===void 0&&(a=e[Ds]=new Set);var n=t+"__bubble";a.has(n)||(Mp(e,t,2,!1),a.add(n))}function wc(t,e,a){var n=0;e&&(n|=4),Mp(a,t,n,e)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function Cc(t){if(!t[Pr]){t[Pr]=!0,gu.forEach(function(a){a!=="selectionchange"&&(O0.has(a)||wc(a,!1,t),wc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pr]||(e[Pr]=!0,wc("selectionchange",!1,e))}}function Mp(t,e,a,n){switch(Pp(e)){case 2:var i=ng;break;case 8:i=lg;break;default:i=Uc}a=i.bind(null,e,a,t),i=void 0,!$s||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Mc(t,e,a,n,i){var r=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var h=n.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=n.return;f!==null;){var w=f.tag;if((w===3||w===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=ol(h),f===null)return;if(w=f.tag,w===5||w===6||w===26||w===27){n=r=f;continue t}h=h.parentNode}}n=n.return}Ru(function(){var H=r,P=Ls(a),at=[];t:{var q=af.get(t);if(q!==void 0){var K=ur,bt=t;switch(t){case"keypress":if(or(a)===0)break t;case"keydown":case"keyup":K=wh;break;case"focusin":bt="focus",K=Vs;break;case"focusout":bt="blur",K=Vs;break;case"beforeblur":case"afterblur":K=Vs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Th;break;case Iu:case Pu:case tf:K=ph;break;case ef:K=zh;break;case"scroll":case"scrollend":K=oh;break;case"wheel":K=Oh;break;case"copy":case"cut":case"paste":K=hh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Du;break;case"toggle":case"beforetoggle":K=Ah}var zt=(e&4)!==0,te=!zt&&(t==="scroll"||t==="scrollend"),N=zt?q!==null?q+"Capture":null:q;zt=[];for(var M=H,E;M!==null;){var et=M;if(E=et.stateNode,et=et.tag,et!==5&&et!==26&&et!==27||E===null||N===null||(et=si(M,N),et!=null&&zt.push(Li(M,et,E))),te)break;M=M.return}0<zt.length&&(q=new K(q,bt,null,a,P),at.push({event:q,listeners:zt}))}}if((e&7)===0){t:{if(q=t==="mouseover"||t==="pointerover",K=t==="mouseout"||t==="pointerout",q&&a!==Bs&&(bt=a.relatedTarget||a.fromElement)&&(ol(bt)||bt[sl]))break t;if((K||q)&&(q=P.window===P?P:(q=P.ownerDocument)?q.defaultView||q.parentWindow:window,K?(bt=a.relatedTarget||a.toElement,K=H,bt=bt?ol(bt):null,bt!==null&&(te=p(bt),zt=bt.tag,bt!==te||zt!==5&&zt!==27&&zt!==6)&&(bt=null)):(K=null,bt=H),K!==bt)){if(zt=Au,et="onMouseLeave",N="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(zt=Du,et="onPointerLeave",N="onPointerEnter",M="pointer"),te=K==null?q:ri(K),E=bt==null?q:ri(bt),q=new zt(et,M+"leave",K,a,P),q.target=te,q.relatedTarget=E,et=null,ol(P)===H&&(zt=new zt(N,M+"enter",bt,a,P),zt.target=E,zt.relatedTarget=te,et=zt),te=et,K&&bt)e:{for(zt=N0,N=K,M=bt,E=0,et=N;et;et=zt(et))E++;et=0;for(var Tt=M;Tt;Tt=zt(Tt))et++;for(;0<E-et;)N=zt(N),E--;for(;0<et-E;)M=zt(M),et--;for(;E--;){if(N===M||M!==null&&N===M.alternate){zt=N;break e}N=zt(N),M=zt(M)}zt=null}else zt=null;K!==null&&Tp(at,q,K,zt,!1),bt!==null&&te!==null&&Tp(at,te,bt,zt,!0)}}t:{if(q=H?ri(H):window,K=q.nodeName&&q.nodeName.toLowerCase(),K==="select"||K==="input"&&q.type==="file")var Vt=Xu;else if(Bu(q))if($u)Vt=Xh;else{Vt=Bh;var Mt=Uh}else K=q.nodeName,!K||K.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?H&&Us(H.elementType)&&(Vt=Xu):Vt=Lh;if(Vt&&(Vt=Vt(t,H))){Lu(at,Vt,a,P);break t}Mt&&Mt(t,q,H),t==="focusout"&&H&&q.type==="number"&&H.memoizedProps.value!=null&&Hs(q,"number",q.value)}switch(Mt=H?ri(H):window,t){case"focusin":(Bu(Mt)||Mt.contentEditable==="true")&&(yl=Mt,Is=H,hi=null);break;case"focusout":hi=Is=yl=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Wu(at,a,P);break;case"selectionchange":if(qh)break;case"keydown":case"keyup":Wu(at,a,P)}var Et;if(Ks)t:{switch(t){case"compositionstart":var qt="onCompositionStart";break t;case"compositionend":qt="onCompositionEnd";break t;case"compositionupdate":qt="onCompositionUpdate";break t}qt=void 0}else gl?Hu(t,a)&&(qt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(qt="onCompositionStart");qt&&(Yu&&a.locale!=="ko"&&(gl||qt!=="onCompositionStart"?qt==="onCompositionEnd"&&gl&&(Et=Ou()):(rn=P,qs="value"in rn?rn.value:rn.textContent,gl=!0)),Mt=ts(H,qt),0<Mt.length&&(qt=new ku(qt,t,null,a,P),at.push({event:qt,listeners:Mt}),Et?qt.data=Et:(Et=Uu(a),Et!==null&&(qt.data=Et)))),(Et=Dh?Yh(t,a):_h(t,a))&&(qt=ts(H,"onBeforeInput"),0<qt.length&&(Mt=new ku("onBeforeInput","beforeinput",null,a,P),at.push({event:Mt,listeners:qt}),Mt.data=Et)),j0(at,t,H,a,P)}Cp(at,e)})}function Li(t,e,a){return{instance:t,listener:e,currentTarget:a}}function ts(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=si(t,a),i!=null&&n.unshift(Li(t,i,r)),i=si(t,e),i!=null&&n.push(Li(t,i,r))),t.tag===3)return n;t=t.return}return[]}function N0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tp(t,e,a,n,i){for(var r=e._reactName,f=[];a!==null&&a!==n;){var h=a,w=h.alternate,H=h.stateNode;if(h=h.tag,w!==null&&w===n)break;h!==5&&h!==26&&h!==27||H===null||(w=H,i?(H=si(a,r),H!=null&&f.unshift(Li(a,H,w))):i||(H=si(a,r),H!=null&&f.push(Li(a,H,w)))),a=a.return}f.length!==0&&t.push({event:e,listeners:f})}var A0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(A0,`
`).replace(k0,"")}function zp(t,e){return e=jp(e),jp(t)===e}function Pt(t,e,a,n,i,r){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||pl(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&pl(t,""+n);break;case"className":lr(t,"class",n);break;case"tabIndex":lr(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":lr(t,a,n);break;case"style":ju(t,n,r);break;case"data":if(e!=="object"){lr(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=rr(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&Pt(t,e,"name",i.name,i,null),Pt(t,e,"formEncType",i.formEncType,i,null),Pt(t,e,"formMethod",i.formMethod,i,null),Pt(t,e,"formTarget",i.formTarget,i,null)):(Pt(t,e,"encType",i.encType,i,null),Pt(t,e,"method",i.method,i,null),Pt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=rr(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=ka);break;case"onScroll":n!=null&&Lt("scroll",t);break;case"onScrollEnd":n!=null&&Lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=rr(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":Lt("beforetoggle",t),Lt("toggle",t),nr(t,"popover",n);break;case"xlinkActuate":Aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Aa(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Aa(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Aa(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Aa(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":nr(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rh.get(a)||a,nr(t,a,n))}}function Tc(t,e,a,n,i,r){switch(a){case"style":ju(t,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof n=="string"?pl(t,n):(typeof n=="number"||typeof n=="bigint")&&pl(t,""+n);break;case"onScroll":n!=null&&Lt("scroll",t);break;case"onScrollEnd":n!=null&&Lt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=ka);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),r=t[$e]||null,r=r!=null?r[a]:null,typeof r=="function"&&t.removeEventListener(e,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):nr(t,a,n)}}}function Ue(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",t),Lt("load",t);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var f=a[r];if(f!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pt(t,e,r,f,a,null)}}i&&Pt(t,e,"srcSet",a.srcSet,a,null),n&&Pt(t,e,"src",a.src,a,null);return;case"input":Lt("invalid",t);var h=r=f=i=null,w=null,H=null;for(n in a)if(a.hasOwnProperty(n)){var P=a[n];if(P!=null)switch(n){case"name":i=P;break;case"type":f=P;break;case"checked":w=P;break;case"defaultChecked":H=P;break;case"value":r=P;break;case"defaultValue":h=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,e));break;default:Pt(t,e,n,P,a,null)}}wu(t,r,h,w,H,f,i,!1);return;case"select":Lt("invalid",t),n=f=r=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":n=h;default:Pt(t,e,i,h,a,null)}e=r,a=f,t.multiple=!!n,e!=null?dl(t,!!n,e,!1):a!=null&&dl(t,!!n,a,!0);return;case"textarea":Lt("invalid",t),r=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(h=a[f],h!=null))switch(f){case"value":n=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Pt(t,e,f,h,a,null)}Mu(t,n,i,r);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Pt(t,e,w,n,a,null)}return;case"dialog":Lt("beforetoggle",t),Lt("toggle",t),Lt("cancel",t),Lt("close",t);break;case"iframe":case"object":Lt("load",t);break;case"video":case"audio":for(n=0;n<Bi.length;n++)Lt(Bi[n],t);break;case"image":Lt("error",t),Lt("load",t);break;case"details":Lt("toggle",t);break;case"embed":case"source":case"link":Lt("error",t),Lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in a)if(a.hasOwnProperty(H)&&(n=a[H],n!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pt(t,e,H,n,a,null)}return;default:if(Us(e)){for(P in a)a.hasOwnProperty(P)&&(n=a[P],n!==void 0&&Tc(t,e,P,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&Pt(t,e,h,n,a,null))}function D0(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,h=null,w=null,H=null,P=null;for(K in a){var at=a[K];if(a.hasOwnProperty(K)&&at!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":w=at;default:n.hasOwnProperty(K)||Pt(t,e,K,null,n,at)}}for(var q in n){var K=n[q];if(at=a[q],n.hasOwnProperty(q)&&(K!=null||at!=null))switch(q){case"type":r=K;break;case"name":i=K;break;case"checked":H=K;break;case"defaultChecked":P=K;break;case"value":f=K;break;case"defaultValue":h=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,e));break;default:K!==at&&Pt(t,e,q,K,n,at)}}Es(t,f,h,w,H,P,r,i);return;case"select":K=f=h=q=null;for(r in a)if(w=a[r],a.hasOwnProperty(r)&&w!=null)switch(r){case"value":break;case"multiple":K=w;default:n.hasOwnProperty(r)||Pt(t,e,r,null,n,w)}for(i in n)if(r=n[i],w=a[i],n.hasOwnProperty(i)&&(r!=null||w!=null))switch(i){case"value":q=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==w&&Pt(t,e,i,r,n,w)}e=h,a=f,n=K,q!=null?dl(t,!!a,q,!1):!!n!=!!a&&(e!=null?dl(t,!!a,e,!0):dl(t,!!a,a?[]:"",!1));return;case"textarea":K=q=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Pt(t,e,h,null,n,i)}for(f in n)if(i=n[f],r=a[f],n.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":q=i;break;case"defaultValue":K=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==r&&Pt(t,e,f,i,n,r)}Cu(t,q,K);return;case"option":for(var bt in a)if(q=a[bt],a.hasOwnProperty(bt)&&q!=null&&!n.hasOwnProperty(bt))switch(bt){case"selected":t.selected=!1;break;default:Pt(t,e,bt,null,n,q)}for(w in n)if(q=n[w],K=a[w],n.hasOwnProperty(w)&&q!==K&&(q!=null||K!=null))switch(w){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Pt(t,e,w,q,n,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var zt in a)q=a[zt],a.hasOwnProperty(zt)&&q!=null&&!n.hasOwnProperty(zt)&&Pt(t,e,zt,null,n,q);for(H in n)if(q=n[H],K=a[H],n.hasOwnProperty(H)&&q!==K&&(q!=null||K!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,e));break;default:Pt(t,e,H,q,n,K)}return;default:if(Us(e)){for(var te in a)q=a[te],a.hasOwnProperty(te)&&q!==void 0&&!n.hasOwnProperty(te)&&Tc(t,e,te,void 0,n,q);for(P in n)q=n[P],K=a[P],!n.hasOwnProperty(P)||q===K||q===void 0&&K===void 0||Tc(t,e,P,q,n,K);return}}for(var N in a)q=a[N],a.hasOwnProperty(N)&&q!=null&&!n.hasOwnProperty(N)&&Pt(t,e,N,null,n,q);for(at in n)q=n[at],K=a[at],!n.hasOwnProperty(at)||q===K||q==null&&K==null||Pt(t,e,at,q,n,K)}function Rp(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,f=i.initiatorType,h=i.duration;if(r&&h&&Rp(f)){for(f=0,h=i.responseEnd,n+=1;n<a.length;n++){var w=a[n],H=w.startTime;if(H>h)break;var P=w.transferSize,at=w.initiatorType;P&&Rp(at)&&(w=w.responseEnd,f+=P*(w<h?1:(h-H)/(w-H)))}if(--n,e+=8*(r+f)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jc=null,zc=null;function es(t){return t.nodeType===9?t:t.ownerDocument}function Op(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Np(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=null;function _0(){var t=window.event;return t&&t.type==="popstate"?t===Oc?!1:(Oc=t,!0):(Oc=null,!1)}var Ap=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(t){return kp.resolve(null).then(t).catch(U0)}:Ap;function U0(t){setTimeout(function(){throw t})}function Cn(t){return t==="head"}function Dp(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),Gl(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Xi(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Xi(a);for(var r=a.firstChild;r;){var f=r.nextSibling,h=r.nodeName;r[ii]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=f}}else a==="body"&&Xi(t.ownerDocument.body);a=i}while(a);Gl(e)}function Yp(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function Nc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nc(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function B0(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[ii])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=ga(t.nextSibling),t===null)break}return null}function L0(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ga(t.nextSibling),t===null))return null;return t}function _p(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ga(t.nextSibling),t===null))return null;return t}function Ac(t){return t.data==="$?"||t.data==="$~"}function kc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function X0(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function ga(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Dc=null;function Ep(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return ga(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Up(t,e,a){switch(e=es(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Xi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ys(t)}var ya=new Map,Bp=new Set;function as(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ka=Z.d;Z.d={f:$0,r:q0,D:G0,C:Q0,L:V0,m:Z0,X:J0,S:K0,M:W0};function $0(){var t=Ka.f(),e=Zr();return t||e}function q0(t){var e=cl(t);e!==null&&e.tag===5&&e.type==="form"?ad(e):Ka.r(t)}var Xl=typeof document>"u"?null:document;function Lp(t,e,a){var n=Xl;if(n&&typeof e=="string"&&e){var i=ca(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Bp.has(i)||(Bp.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Ue(e,"link",t),Ae(e),n.head.appendChild(e)))}}function G0(t){Ka.D(t),Lp("dns-prefetch",t,null)}function Q0(t,e){Ka.C(t,e),Lp("preconnect",t,e)}function V0(t,e,a){Ka.L(t,e,a);var n=Xl;if(n&&t&&e){var i='link[rel="preload"][as="'+ca(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ca(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ca(a.imageSizes)+'"]')):i+='[href="'+ca(t)+'"]';var r=i;switch(e){case"style":r=$l(t);break;case"script":r=ql(t)}ya.has(r)||(t=S({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ya.set(r,t),n.querySelector(i)!==null||e==="style"&&n.querySelector($i(r))||e==="script"&&n.querySelector(qi(r))||(e=n.createElement("link"),Ue(e,"link",t),Ae(e),n.head.appendChild(e)))}}function Z0(t,e){Ka.m(t,e);var a=Xl;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ca(n)+'"][href="'+ca(t)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ql(t)}if(!ya.has(r)&&(t=S({rel:"modulepreload",href:t},e),ya.set(r,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qi(r)))return}n=a.createElement("link"),Ue(n,"link",t),Ae(n),a.head.appendChild(n)}}}function K0(t,e,a){Ka.S(t,e,a);var n=Xl;if(n&&t){var i=ul(n).hoistableStyles,r=$l(t);e=e||"default";var f=i.get(r);if(!f){var h={loading:0,preload:null};if(f=n.querySelector($i(r)))h.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ya.get(r))&&Yc(t,a);var w=f=n.createElement("link");Ae(w),Ue(w,"link",t),w._p=new Promise(function(H,P){w.onload=H,w.onerror=P}),w.addEventListener("load",function(){h.loading|=1}),w.addEventListener("error",function(){h.loading|=2}),h.loading|=4,ns(f,e,n)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(r,f)}}}function J0(t,e){Ka.X(t,e);var a=Xl;if(a&&t){var n=ul(a).hoistableScripts,i=ql(t),r=n.get(i);r||(r=a.querySelector(qi(i)),r||(t=S({src:t,async:!0},e),(e=ya.get(i))&&_c(t,e),r=a.createElement("script"),Ae(r),Ue(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function W0(t,e){Ka.M(t,e);var a=Xl;if(a&&t){var n=ul(a).hoistableScripts,i=ql(t),r=n.get(i);r||(r=a.querySelector(qi(i)),r||(t=S({src:t,async:!0,type:"module"},e),(e=ya.get(i))&&_c(t,e),r=a.createElement("script"),Ae(r),Ue(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Xp(t,e,a,n){var i=(i=wt.current)?as(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=$l(a.href),a=ul(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$l(a.href);var r=ul(i).hoistableStyles,f=r.get(t);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,f),(r=i.querySelector($i(t)))&&!r._p&&(f.instance=r,f.state.loading=5),ya.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ya.set(t,a),r||F0(i,t,a,f.state))),e&&n===null)throw Error(s(528,""));return f}if(e&&n!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ql(a),a=ul(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function $l(t){return'href="'+ca(t)+'"'}function $i(t){return'link[rel="stylesheet"]['+t+"]"}function $p(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function F0(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Ue(e,"link",a),Ae(e),t.head.appendChild(e))}function ql(t){return'[src="'+ca(t)+'"]'}function qi(t){return"script[async]"+t}function qp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+ca(a.href)+'"]');if(n)return e.instance=n,Ae(n),n;var i=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Ae(n),Ue(n,"style",i),ns(n,a.precedence,t),e.instance=n;case"stylesheet":i=$l(a.href);var r=t.querySelector($i(i));if(r)return e.state.loading|=4,e.instance=r,Ae(r),r;n=$p(a),(i=ya.get(i))&&Yc(n,i),r=(t.ownerDocument||t).createElement("link"),Ae(r);var f=r;return f._p=new Promise(function(h,w){f.onload=h,f.onerror=w}),Ue(r,"link",n),e.state.loading|=4,ns(r,a.precedence,t),e.instance=r;case"script":return r=ql(a.src),(i=t.querySelector(qi(r)))?(e.instance=i,Ae(i),i):(n=a,(i=ya.get(r))&&(n=S({},a),_c(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),Ae(i),Ue(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,ns(n,a.precedence,t));return e.instance}function ns(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,f=0;f<n.length;f++){var h=n[f];if(h.dataset.precedence===e)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Yc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function _c(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ls=null;function Gp(t,e,a){if(ls===null){var n=new Map,i=ls=new Map;i.set(a,n)}else i=ls,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var r=a[i];if(!(r[ii]||r[Ye]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(e)||"";f=t+f;var h=n.get(f);h?h.push(r):n.set(f,[r])}}return n}function Qp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function I0(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Vp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function P0(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=$l(n.href),r=e.querySelector($i(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=is.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=r,Ae(r);return}r=e.ownerDocument||e,n=$p(n),(i=ya.get(i))&&Yc(n,i),r=r.createElement("link"),Ae(r);var f=r;f._p=new Promise(function(h,w){f.onload=h,f.onerror=w}),Ue(r,"link",n),a.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=is.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Ec=0;function tg(t,e){return t.stylesheets&&t.count===0&&ss(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&ss(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&Ec===0&&(Ec=62500*Y0());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ss(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>Ec?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function is(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ss(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rs=null;function ss(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rs=new Map,e.forEach(eg,t),rs=null,is.call(t))}function eg(t,e){if(!(e.state.loading&4)){var a=rs.get(t);if(a)var n=a.get(null);else{a=new Map,rs.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=e.instance,f=i.getAttribute("data-precedence"),r=a.get(f)||n,r===n&&a.set(null,i),a.set(f,i),this.count++,n=is.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Gi={$$typeof:Q,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function ag(t,e,a,n,i,r,f,h,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Zp(t,e,a,n,i,r,f,h,w,H,P,at){return t=new ag(t,e,a,f,w,H,P,at,h),e=1,r===!0&&(e|=24),r=Pe(3,null,null,e),t.current=r,r.stateNode=t,e=ho(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:e},vo(r),t}function Kp(t){return t?(t=bl,t):bl}function Jp(t,e,a,n,i,r){i=Kp(i),n.context===null?n.context=i:n.pendingContext=i,n=dn(e),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=pn(t,n,e),a!==null&&(Ke(a,t,e),wi(a,t,e))}function Wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Hc(t,e){Wp(t,e),(t=t.alternate)&&Wp(t,e)}function Fp(t){if(t.tag===13||t.tag===31){var e=Un(t,67108864);e!==null&&Ke(e,t,67108864),Hc(t,67108864)}}function Ip(t){if(t.tag===13||t.tag===31){var e=la();e=nn(e);var a=Un(t,e);a!==null&&Ke(a,t,e),Hc(t,e)}}var os=!0;function ng(t,e,a,n){var i=D.T;D.T=null;var r=Z.p;try{Z.p=2,Uc(t,e,a,n)}finally{Z.p=r,D.T=i}}function lg(t,e,a,n){var i=D.T;D.T=null;var r=Z.p;try{Z.p=8,Uc(t,e,a,n)}finally{Z.p=r,D.T=i}}function Uc(t,e,a,n){if(os){var i=Bc(n);if(i===null)Mc(t,e,n,cs,a),tm(t,n);else if(rg(i,t,e,a,n))n.stopPropagation();else if(tm(t,n),e&4&&-1<ig.indexOf(t)){for(;i!==null;){var r=cl(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=tn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var w=1<<31-vt(f);h.entanglements[1]|=w,f&=~w}za(r),(Kt&6)===0&&(Qr=ue()+500,Ui(0))}}break;case 31:case 13:h=Un(r,2),h!==null&&Ke(h,r,2),Zr(),Hc(r,2)}if(r=Bc(n),r===null&&Mc(t,e,n,cs,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else Mc(t,e,n,null,a)}}function Bc(t){return t=Ls(t),Lc(t)}var cs=null;function Lc(t){if(cs=null,t=ol(t),t!==null){var e=p(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=g(e),t!==null)return t;t=null}else if(a===31){if(t=x(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return cs=t,null}function Pp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case z:return 2;case R:return 8;case X:case it:return 32;case ct:return 268435456;default:return 32}default:return 32}}var Xc=!1,Mn=null,Tn=null,jn=null,Qi=new Map,Vi=new Map,zn=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Qi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(e.pointerId)}}function Zi(t,e,a,n,i,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},e!==null&&(e=cl(e),e!==null&&Fp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rg(t,e,a,n,i){switch(e){case"focusin":return Mn=Zi(Mn,t,e,a,n,i),!0;case"dragenter":return Tn=Zi(Tn,t,e,a,n,i),!0;case"mouseover":return jn=Zi(jn,t,e,a,n,i),!0;case"pointerover":var r=i.pointerId;return Qi.set(r,Zi(Qi.get(r)||null,t,e,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Vi.set(r,Zi(Vi.get(r)||null,t,e,a,n,i)),!0}return!1}function em(t){var e=ol(t.target);if(e!==null){var a=p(e);if(a!==null){if(e=a.tag,e===13){if(e=g(a),e!==null){t.blockedOn=e,li(t.priority,function(){Ip(a)});return}}else if(e===31){if(e=x(a),e!==null){t.blockedOn=e,li(t.priority,function(){Ip(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function us(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Bc(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Bs=n,a.target.dispatchEvent(n),Bs=null}else return e=cl(a),e!==null&&Fp(e),t.blockedOn=a,!1;e.shift()}return!0}function am(t,e,a){us(t)&&a.delete(e)}function sg(){Xc=!1,Mn!==null&&us(Mn)&&(Mn=null),Tn!==null&&us(Tn)&&(Tn=null),jn!==null&&us(jn)&&(jn=null),Qi.forEach(am),Vi.forEach(am)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Xc||(Xc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,sg)))}var ds=null;function nm(t){ds!==t&&(ds=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ds===t&&(ds=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Lc(n||a)===null)continue;break}var r=cl(a);r!==null&&(t.splice(e,3),e-=3,Bo(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Gl(t){function e(w){return fs(w,t)}Mn!==null&&fs(Mn,t),Tn!==null&&fs(Tn,t),jn!==null&&fs(jn,t),Qi.forEach(e),Vi.forEach(e);for(var a=0;a<zn.length;a++){var n=zn[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)em(a),a.blockedOn===null&&zn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],f=i[$e]||null;if(typeof r=="function")f||nm(a);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[$e]||null)h=f.formAction;else if(Lc(i)!==null)continue}else h=f.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),nm(a)}}}function lm(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function $c(t){this._internalRoot=t}ps.prototype.render=$c.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,n=la();Jp(a,n,t,e,null,null)},ps.prototype.unmount=$c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jp(t.current,2,null,t,null,null),Zr(),e[sl]=null}};function ps(t){this._internalRoot=t}ps.prototype.unstable_scheduleHydration=function(t){if(t){var e=ni();t={blockedOn:null,target:t,priority:e};for(var a=0;a<zn.length&&e!==0&&e<zn[a].priority;a++);zn.splice(a,0,t),a===0&&em(t)}};var im=o.version;if(im!=="19.2.6")throw Error(s(527,im,"19.2.6"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(e),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var og={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{rt=ms.inject(og),pt=ms}catch{}}return Ji.createRoot=function(t,e){if(!d(t))throw Error(s(299));var a=!1,n="",i=dd,r=pd,f=md;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError)),e=Zp(t,1,!1,null,null,a,n,null,i,r,f,lm),t[sl]=e.current,Cc(t),new $c(e)},Ji.hydrateRoot=function(t,e,a){if(!d(t))throw Error(s(299));var n=!1,i="",r=dd,f=pd,h=md,w=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(w=a.formState)),e=Zp(t,1,!0,e,a??null,n,i,w,r,f,h,lm),e.context=Kp(null),a=e.current,n=la(),n=nn(n),i=dn(n),i.callback=null,pn(a,i,n),a=n,e.current.lanes=a,en(e,a),za(e),t[sl]=e.current,Cc(t),new ps(e)},Ji.version="19.2.6",Ji}var hm;function vg(){if(hm)return Gc.exports;hm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Gc.exports=xg(),Gc.exports}var bg=vg(),C=du();const In=ug(C),ve="cubic-bezier(0.0, 0.0, 0.2, 1)",ru="cubic-bezier(0.4, 0.0, 1, 1)",Kl="cubic-bezier(0.4, 0.0, 0.2, 1)",Ne="cubic-bezier(0.34, 1.56, 0.64, 1)",Pn="cubic-bezier(0.25, 0.46, 0.45, 0.94)",xe=[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-4px)"}],Ja=[{opacity:0,transform:"translateY(4px)"},{opacity:1,transform:"translateY(0)"}],Jc=[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.96)"}],Sg=[{opacity:0,transform:"scale(0.96)"},{opacity:1,transform:"scale(1)"}],wg={fadeSwap:{out:[{opacity:1,transform:"translateY(0)",filter:"blur(0px)"},{opacity:.92,transform:"translateY(0)",filter:"blur(0px)",offset:.28},{opacity:0,transform:"translateY(-0.12em)",filter:"blur(1.5px)"}],in:[{opacity:0,transform:"translateY(0.14em)",filter:"blur(2px)"},{opacity:.9,transform:"translateY(0.02em)",filter:"blur(0.35px)",offset:.72},{opacity:1,transform:"translateY(0)",filter:"blur(0px)"}]},morph:{out:Jc,in:Sg},slideUp:{out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-10px)"}],in:[{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}]},slideDown:{out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(10px)"}],in:[{opacity:0,transform:"translateY(-10px)"},{opacity:1,transform:"translateY(0)"}]},highlight:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},bump:{out:[{opacity:1,transform:"scale(1)"},{opacity:1,transform:"scale(1.08)",offset:.45},{opacity:1,transform:"scale(1)"}],in:[]},blur:{out:[{opacity:1,filter:"blur(0px)",transform:"translateY(0)"},{opacity:0,filter:"blur(4px)",transform:"translateY(-4px)"}],in:[{opacity:0,filter:"blur(4px)",transform:"translateY(4px)"},{opacity:1,filter:"blur(0px)",transform:"translateY(0)"}]},decoder:{out:xe,in:Ja},fadeAway:{out:xe,in:Ja},fadeIn:{out:xe,in:Ja},slideReplace:{out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-10px)"}],in:[{opacity:0,transform:"translateX(10px)"},{opacity:1,transform:"translateX(0)"}]},letterDrop:{out:xe,in:[{opacity:0,transform:"translateY(-18px)"},{opacity:1,transform:"translateY(2px)",offset:.72},{opacity:1,transform:"translateY(0)"}]},glitch:{out:xe,in:[{opacity:0,transform:"translateX(-3px)"},{opacity:1,transform:"translateX(3px)",offset:.45},{opacity:1,transform:"translateX(0)"}]},textReveal:{out:xe,in:Ja},liftReveal:{out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-10px)"}],in:[{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}]},scatter:{out:xe,in:[{opacity:0,transform:"translateY(8px) scale(0.96)"},{opacity:1,transform:"translateY(0) scale(1)"}]},typewriter:{out:xe,in:[{opacity:0,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}]},splash:{out:xe,in:[{opacity:0,transform:"translateY(12px) scale(0.92)"},{opacity:1,transform:"translateY(0) scale(1)"}]},jitter:{out:xe,in:[{opacity:1,transform:"translateX(0)"},{opacity:1,transform:"translateX(-6px)",offset:.2},{opacity:1,transform:"translateX(6px)",offset:.4},{opacity:1,transform:"translateX(-4px)",offset:.6},{opacity:1,transform:"translateX(4px)",offset:.8},{opacity:1,transform:"translateX(0)"}]},popUp:{out:xe,in:[{opacity:0,transform:"translateY(10px) scale(0.92)"},{opacity:1,transform:"translateY(-2px) scale(1.04)",offset:.65},{opacity:1,transform:"translateY(0) scale(1)"}]},jello:{out:xe,in:[{opacity:1,transform:"scale(1, 1)"},{opacity:1,transform:"scale(1.08, 0.94)",offset:.24},{opacity:1,transform:"scale(0.96, 1.05)",offset:.48},{opacity:1,transform:"scale(1.03, 0.98)",offset:.72},{opacity:1,transform:"scale(1, 1)"}]},scramble:{out:xe,in:Ja},flip:{out:[{opacity:1,transform:"perspective(600px) rotateY(0deg)"},{opacity:0,transform:"perspective(600px) rotateY(-36deg)"}],in:[{opacity:0,transform:"perspective(600px) rotateY(36deg)"},{opacity:1,transform:"perspective(600px) rotateY(0deg)"}]},bounce:{out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.92)"}],in:[{opacity:0,transform:"scale(0.88)"},{opacity:1,transform:"scale(1.06)",offset:.55},{opacity:1,transform:"scale(1)"}]},shake:{out:xe,in:[{opacity:1,transform:"translateX(0)"},{opacity:1,transform:"translateX(-6px)",offset:.2},{opacity:1,transform:"translateX(6px)",offset:.4},{opacity:1,transform:"translateX(-4px)",offset:.6},{opacity:1,transform:"translateX(4px)",offset:.8},{opacity:1,transform:"translateX(0)"}]},pulse:{out:[{opacity:1,transform:"scale(1)"},{opacity:1,transform:"scale(0.98)"}],in:[{opacity:1,transform:"scale(1)"},{opacity:1,transform:"scale(1.04)",offset:.5},{opacity:1,transform:"scale(1)"}]},blink:{out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(0)"}],in:[{opacity:1,transform:"translateY(0)"},{opacity:.28,transform:"translateY(0)",offset:.5},{opacity:1,transform:"translateY(0)"}]},wave:{out:xe,in:Ja},ping:{out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(1.12)"}],in:[{opacity:0,transform:"scale(0.92)"},{opacity:1,transform:"scale(1.08)",offset:.52},{opacity:1,transform:"scale(1)"}]},popIn:{out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.92)"}],in:[{opacity:0,transform:"scale(0.92)"},{opacity:1,transform:"scale(1.06)",offset:.65},{opacity:1,transform:"scale(1)"}]},dropIn:{out:xe,in:[{opacity:0,transform:"translateY(-20px)"},{opacity:1,transform:"translateY(2px)",offset:.72},{opacity:1,transform:"translateY(0)"}]},riseUp:{out:xe,in:[{opacity:0,transform:"translateY(18px)"},{opacity:1,transform:"translateY(0)"}]},expandIn:{out:Jc,in:[{opacity:0,transform:"scaleX(0.92)"},{opacity:1,transform:"scaleX(1)"}]},shrinkOut:{out:Jc,in:[{opacity:1,transform:"scaleX(1)"},{opacity:0,transform:"scaleX(0.92)"}]},boldFlash:{out:xe,in:[{opacity:0,transform:"scale(0.98)"},{opacity:1,transform:"scale(1.02)",offset:.35},{opacity:1,transform:"scale(1)"}]},strikeThrough:{out:xe,in:Ja},odometer:{out:xe,in:Ja},ticker:{out:xe,in:Ja},splitReveal:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},splitSlide:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},bigBang:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},scatterAssemble:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},pixelRain:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},dominoFall:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},vortex:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},pendulum:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},centerBurst:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},gravityBounce:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},scrollFanIn:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},textRotate:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},gooeyMorph:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},randomLetterSwap:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},textEffect:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]},staggerText:{out:[{opacity:1,transform:"translateY(0)"},{opacity:1,transform:"translateY(0)"}],in:[]}};function Cg(l){const o=C.useRef(void 0),c=o.current!==void 0&&o.current!==l,s=o.current;return o.current=l,{changed:c,prev:s,current:l}}let On=null;function Mg(){return On||(On=document.createElement("span"),On.style.position="absolute",On.style.visibility="hidden",On.style.pointerEvents="none",On.style.whiteSpace="pre",On.style.display="inline-block"),On}function Tg(l,o){const c=l.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);return c?`rgba(${c[1]}, ${c[2]}, ${c[3]}, ${o})`:`rgba(0, 0, 0, ${o})`}function jg(l,o){const c=o[0];c&&(c.opacity!==void 0&&(l.style.opacity=String(c.opacity)),c.transform!==void 0&&(l.style.transform=String(c.transform)))}function zg(l,o){const c=o[o.length-1];c&&(c.opacity!==void 0&&(l.style.opacity=String(c.opacity)),c.transform!==void 0&&(l.style.transform=String(c.transform)))}function Rg(l,o,c,s="single",d,p,g){const x=ne(l);l.style.willChange="transform, opacity";const v=wg[o];if(!v){const T=l.animate([],c);return T.addEventListener("finish",()=>{l.style.willChange="auto"}),T.addEventListener("cancel",()=>{l.style.willChange="auto"}),T}const m=s==="change"?[...v.out,...v.in]:v.in.length?[...v.in]:[...v.out],y=Te()?Og(m):m;jg(l,y);const S=l.animate(y,{...c,fill:"forwards"});return S.addEventListener("finish",()=>{zg(l,y),Gt(l,x)&&(l.style.willChange="auto")}),S.addEventListener("cancel",()=>{Gt(l,x)&&(l.style.willChange="auto")}),S}function Te(){var l;return typeof window>"u"?!1:((l=window.matchMedia)==null?void 0:l.call(window,"(prefers-reduced-motion: reduce)").matches)??!1}function Og(l){return l.map(({opacity:o})=>({opacity:o??1}))}function Ng(l,o,c){if(!o||Object.keys(o).length===0)return null;const s={},d={};for(const[g,x]of Object.entries(o))s[g]=x[0],d[g]=x[1];for(const[g,x]of Object.entries(s))l.style[g]=x;const p=l.animate([s,d],{...c,fill:"forwards"});return p.addEventListener("finish",()=>{for(const[g,x]of Object.entries(o))l.style[g]=String(x[1])}),p}function Ag(l){l.getAnimations({subtree:!0}).forEach(o=>o.cancel())}function ne(l){const o=String((Number.parseInt(l.dataset.trigrRunId??"0",10)||0)+1);return l.dataset.trigrRunId=o,o}function Gt(l,o){return l.dataset.trigrRunId===o}function kg(l){let o=l.parentElement;for(;o&&o!==document.body&&o!==document.documentElement;){const c=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(`${c.overflowY}${c.overflow}`)&&o.scrollHeight>o.clientHeight)return o;o=o.parentElement}return null}function Dg(l,o){const c=kg(l),s=(c==null?void 0:c.clientHeight)??window.innerHeight,d=Math.min(.95,Math.max(.05,o)),p=Math.round(s*Math.min(.48,d/2));return{root:c,rootMargin:`-${p}px 0px -${p}px 0px`,threshold:0}}function Ia(l){return l==="center"?"center":l==="right"||l==="end"?"flex-end":"flex-start"}function je(l,o){const c=Mg();c.textContent=o||" ",c.style.whiteSpace=getComputedStyle(l).whiteSpace==="normal"?"pre":getComputedStyle(l).whiteSpace,l.appendChild(c);const s=c.getBoundingClientRect();return c.remove(),{width:s.width,height:s.height}}function Cs(l,o,c,s){const d=getComputedStyle(l),p=je(l,o),g=je(l,c),x=Math.max(p.width,g.width,l.getBoundingClientRect().width),v=Math.max(p.height,g.height,l.getBoundingClientRect().height),m=Ia(d.textAlign),y={position:l.style.position,overflow:l.style.overflow,display:l.style.display,width:l.style.width,minWidth:l.style.minWidth,height:l.style.height,verticalAlign:l.style.verticalAlign,willChange:l.style.willChange};l.style.position="relative",l.style.overflow="hidden",l.style.display="inline-block",l.style.verticalAlign=y.verticalAlign||"baseline",l.style.width=`${x}px`,l.style.minWidth=`${x}px`,v>0&&(l.style.height=`${v}px`),l.innerHTML="";const S=document.createElement("span");S.textContent=o,S.style.display="flex",S.style.alignItems="center",S.style.justifyContent=m,S.style.whiteSpace="pre",S.style.position="absolute",S.style.left="0",S.style.top="0",S.style.width="100%",S.style.height="100%",S.style.lineHeight=d.lineHeight;const T=document.createElement("span");T.textContent=c,T.style.display="flex",T.style.alignItems="center",T.style.justifyContent=m,T.style.whiteSpace="pre",T.style.position="absolute",T.style.left="0",T.style.top="0",T.style.width="100%",T.style.height="100%",T.style.lineHeight=d.lineHeight,l.appendChild(S),l.appendChild(T);function A(){s&&!Gt(l,s)||(l.textContent=c,Object.assign(l.style,y))}return{oldEl:S,newEl:T,cleanup:A}}function gm(l,o,c){const s=je(l,o),d=je(l,c),p=l.getBoundingClientRect().width,g=Number.parseFloat(l.dataset.trigrStableWidth??"0"),x=Math.ceil(Math.max(s.width,d.width,p,g));x>0&&(l.dataset.trigrStableWidth=String(x),l.style.minWidth=`${x}px`,l.style.overflow="visible",getComputedStyle(l).display==="inline"&&(l.style.display="inline-block"))}function Ns(l,o,c=.8,s=.9){const d=getComputedStyle(l),p=Number.parseFloat(d.fontSize)||16,g=l.getBoundingClientRect(),x=je(l,o),v=Math.ceil(p*c),m=Math.ceil(p*s),y=Number.parseFloat(l.style.minWidth||"0"),S=Math.ceil(Math.max(g.width,x.width,y))+v*2,T=Math.ceil(Math.max(g.height,x.height))+m*2,A=Math.max(x.height,g.height,p);return{width:S,height:T,sideSafe:v,verticalSafe:m,innerHeight:A}}function pu(l){const o=Intl.Segmenter;if(o){const c=new o("en",{granularity:"grapheme"});return Array.from(c.segment(l),({segment:s})=>s)}return Array.from(l)}function Yg(l){const o=l.dataset.trigrSplitRevealPrevious;if(o){try{Object.assign(l.style,JSON.parse(o))}catch{l.style.color="",l.style.textShadow="",l.style.overflow=""}delete l.dataset.trigrSplitRevealPrevious}}function su(l){if(l==null||typeof l=="boolean")return"";if(typeof l=="string"||typeof l=="number")return String(l);if(Array.isArray(l))return l.map(su).join("");if(typeof l=="object"&&"props"in l){const o=l.props;return su(o.children)}return""}function ym(l,o,c=1.35){const s=[];l.textContent="";const d=document.createDocumentFragment();for(const p of o)if(p===" ")d.appendChild(document.createTextNode(" "));else{const g=document.createElement("span");g.style.display="inline-flex",g.style.alignItems="flex-start",g.style.overflow="hidden",g.style.height=`${c}em`,g.style.lineHeight=`${c}`,g.style.verticalAlign="baseline";const x=document.createElement("span");x.textContent=p,x.style.display="block",x.style.lineHeight="1.35",x.style.willChange="transform, opacity",g.appendChild(x),d.appendChild(g),s.push(x)}return l.appendChild(d),s}function Nn(l,o,c){const s=[];l.textContent="";const d=document.createDocumentFragment();for(let p=0;p<o.length;p++){const g=o[p];if(g===" ")d.appendChild(document.createTextNode(" "));else{const x=document.createElement("span");x.textContent=g,x.style.display="inline-block",c==null||c(x,g,p),d.appendChild(x),s.push(x)}}return l.appendChild(d),s}function _g(l,o,c,s){Yg(l),l.getAnimations({subtree:!0}).forEach(J=>J.cancel());const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const J=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:Ne,fill:"forwards"});return J.onfinish=()=>{Gt(l,p)&&(s==null||s())},J.oncancel=()=>{},J}const x=getComputedStyle(l),v=x.color||"#111",m=Number.parseFloat(x.fontSize)||16,y=Number.parseFloat(x.lineHeight)||m*1.2||64,S=y/2,T=je(l,d),A=Math.ceil(T.width*.75),j=Math.max(3,Math.round(m*.08)),tt={position:l.style.position,display:l.style.display,overflow:l.style.overflow,color:l.style.color,textShadow:l.style.textShadow,minWidth:l.style.minWidth,willChange:l.style.willChange};l.dataset.trigrSplitRevealPrevious=JSON.stringify(tt),l.style.position="relative",l.style.display="inline-block",l.style.overflow="hidden",l.style.color="transparent",l.style.textShadow=`0 0 0 ${v}`,l.style.minWidth=`${Math.ceil(l.getBoundingClientRect().width)}px`,l.style.willChange="transform, opacity",l.innerHTML="";const G=document.createElement("span");G.textContent=d,G.style.visibility="hidden",G.style.display="block";const O=document.createElement("span");Object.assign(O.style,{position:"absolute",width:`${A}px`,height:`${j}px`,left:"0",top:`${Math.round((y-j)/2)}px`,background:v,borderRadius:"999px",pointerEvents:"none",willChange:"transform"});function V(J){const dt=document.createElement("span"),L=document.createElement("span");return L.textContent=d,Object.assign(dt.style,{position:"absolute",left:"0",width:"100%",height:"50%",overflow:"hidden",pointerEvents:"none",willChange:"transform, opacity",top:J==="top"?"0":"",bottom:J==="bottom"?"0":""}),Object.assign(L.style,{display:"block",color:v,willChange:"transform, opacity",transform:J==="top"?`translateY(${S}px)`:`translateY(${-S}px)`}),dt.appendChild(L),{half:dt,inner:L}}const Q=V("top"),_=V("bottom");l.append(G,O,Q.half,_.half);const Y=[];Y.push(O.animate([{transform:`translateX(-${A}px)`},{transform:`translateX(${T.width}px)`}],{duration:c*.58,easing:Kl,fill:"forwards"})),Y.push(Q.inner.animate([{transform:`translateY(${S}px)`},{transform:"translateY(0)"}],{duration:c*.42,delay:c*.38,easing:ru,fill:"forwards"}));const F=_.inner.animate([{transform:`translateY(${-S}px)`},{transform:`translateY(${-S}px)`}],{duration:c*.42,delay:c*.38,easing:ru,fill:"forwards"});Y.push(F);let B=!1;function k(){B||(B=!0,Y.forEach(J=>{J.playState!=="idle"&&J.cancel()}),Gt(l,p)&&(l.textContent=d,Object.assign(l.style,tt),delete l.dataset.trigrSplitRevealPrevious))}return F.onfinish=()=>{k(),s==null||s()},F.oncancel=k,F}function Eg(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const j=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return j.onfinish=()=>{Gt(l,p)&&(s==null||s())},j.oncancel=()=>{},j}const x=Math.ceil(d.length/2),v=d.slice(0,x),m=d.slice(x),y={display:l.style.display,overflow:l.style.overflow,whiteSpace:l.style.whiteSpace,minWidth:l.style.minWidth,willChange:l.style.willChange};l.style.display="inline-flex",l.style.overflow="hidden",l.style.whiteSpace="pre",l.style.minWidth=`${Math.ceil(l.getBoundingClientRect().width)}px`,l.style.willChange="transform, opacity",l.innerHTML="";const S=document.createElement("span"),T=document.createElement("span");S.textContent=v,T.textContent=m,Object.assign(S.style,{display:"inline-block",willChange:"transform, opacity"}),Object.assign(T.style,{display:"inline-block",willChange:"transform, opacity"}),l.append(S,T),S.animate([{opacity:0,transform:"translateX(-120%)"},{opacity:1,transform:"translateX(0)"}],{duration:c,easing:Ne,fill:"forwards"});const A=T.animate([{opacity:0,transform:"translateX(120%)"},{opacity:1,transform:"translateX(0)"}],{duration:c,easing:Ne,fill:"forwards"});return A.onfinish=()=>{Gt(l,p)&&(l.textContent=d,Object.assign(l.style,y),s==null||s())},A.oncancel=()=>{Gt(l,p)&&(l.textContent=d,Object.assign(l.style,y))},A}function Hg(l,o,c,s){const d=ne(l),p=o===void 0?l.textContent??"":String(o);if(!p)return;if(Te()){const lt=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return lt.onfinish=()=>s==null?void 0:s(),lt}l.style.color="";const g=getComputedStyle(l),x=je(l,p),v=Number.parseFloat(g.fontSize)||48,m=Math.max(180,Math.ceil(x.width+v*1.4)),y=Math.max(v*1.7,Math.ceil(x.height+v*1.2)),S=g.color||"rgb(232, 234, 240)",T={position:l.style.position,display:l.style.display,overflow:l.style.overflow,color:l.style.color,willChange:l.style.willChange};l.style.position="relative",l.style.display="inline-block",l.style.overflow="visible",l.style.color="transparent",l.style.willChange="transform, opacity";const A=Math.min(window.devicePixelRatio||1,2),j=document.createElement("canvas");j.width=Math.round(m*A),j.height=Math.round(y*A),j.style.position="absolute",j.style.left="50%",j.style.top="50%",j.style.transform="translate(-50%, -50%)",j.style.width=`${m}px`,j.style.height=`${y}px`,j.style.pointerEvents="none",j.style.zIndex="1";const tt=j.getContext("2d");if(!tt){l.textContent=p;return}const G=tt;G.scale(A,A),l.appendChild(j);const O=document.createElement("canvas");O.width=m,O.height=y;const V=O.getContext("2d");if(!V){l.textContent=p;return}V.font=g.font||`700 ${v}px sans-serif`,V.textAlign="center",V.textBaseline="middle",V.fillStyle="#fff",V.fillText(p,m/2,y/2);const{data:Q}=V.getImageData(0,0,m,y),_=Math.max(3,Math.round(v/18)),Y=[];for(let lt=0;lt<y;lt+=_)for(let W=0;W<m;W+=_)Q[(lt*m+W)*4+3]>128&&Y.push({x:W,y:lt});if(Y.length===0){l.textContent=p;return}const B=Math.max(1,Math.ceil(Y.length/900)),k=Y.filter((lt,W)=>W%B===0),J=m/2,dt=y/2,L=k.map(lt=>{const W=Math.random()*Math.PI*2,b=6+Math.random()*10;return{x:J,y:dt,vx:Math.cos(W)*b,vy:Math.sin(W)*b,ox:lt.x,oy:lt.y}});let nt=0,st=!1;const Ct=Math.max(1200,c),St=performance.now(),D=l.animate([{opacity:1},{opacity:1}],{duration:Ct,fill:"forwards"});function Z(){st||(st=!0,cancelAnimationFrame(nt),Gt(l,d)&&(l.textContent=p,Object.assign(l.style,T)))}function $(lt){if(st||!Gt(l,d))return;const W=lt-St;G.clearRect(0,0,m,y),L.forEach(b=>{b.vx+=(b.ox-b.x)*.045,b.vx*=.88,b.x+=b.vx,b.vy+=(b.oy-b.y)*.045,b.vy*=.88,b.y+=b.vy;const U=Math.hypot(b.x-b.ox,b.y-b.oy),I=Math.min(.92,.28+(1-Math.min(1,U/160))*.64);G.globalAlpha=I,G.fillStyle=S,G.beginPath(),G.arc(b.x,b.y,Math.max(1,_*.34),0,Math.PI*2),G.fill()}),G.globalAlpha=1,!st&&Gt(l,d)&&W<Ct&&(nt=requestAnimationFrame($))}return $(St),D.onfinish=()=>{Z(),s==null||s()},D.oncancel=Z,D}function Ug(l,o,c,s){const d=ne(l),p=o===void 0?l.textContent??"":String(o);if(!p)return;if(Te()){const Z=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return Z.onfinish=()=>s==null?void 0:s(),Z}l.style.color="";const g=getComputedStyle(l),x=je(l,p),v=Number.parseFloat(g.fontSize)||48,m=Math.max(180,Math.ceil(x.width+v*1.4)),y=Math.max(v*1.7,Math.ceil(x.height+v*1.2)),S=g.color||"rgb(232, 234, 240)",T={position:l.style.position,display:l.style.display,overflow:l.style.overflow,color:l.style.color,willChange:l.style.willChange};l.style.position="relative",l.style.display="inline-block",l.style.overflow="visible",l.style.color="transparent",l.style.willChange="transform, opacity";const A=Math.min(window.devicePixelRatio||1,2),j=document.createElement("canvas");j.width=Math.round(m*A),j.height=Math.round(y*A),j.style.position="absolute",j.style.left="50%",j.style.top="50%",j.style.transform="translate(-50%, -50%)",j.style.width=`${m}px`,j.style.height=`${y}px`,j.style.pointerEvents="none",j.style.zIndex="1";const tt=j.getContext("2d");if(!tt){l.textContent=p;return}const G=tt;G.scale(A,A),l.appendChild(j);const O=document.createElement("canvas");O.width=m,O.height=y;const V=O.getContext("2d");if(!V){l.textContent=p;return}V.font=g.font||`700 ${v}px sans-serif`,V.textAlign="center",V.textBaseline="middle",V.fillStyle="#fff",V.fillText(p,m/2,y/2);const{data:Q}=V.getImageData(0,0,m,y),_=Math.max(3,Math.round(v/18)),Y=[];for(let Z=0;Z<y;Z+=_)for(let $=0;$<m;$+=_)Q[(Z*m+$)*4+3]>128&&Y.push({x:$,y:Z});if(Y.length===0){l.textContent=p;return}const B=Math.max(1,Math.ceil(Y.length/900)),J=Y.filter((Z,$)=>$%B===0).map(Z=>({x:Math.random()*m,y:Math.random()*y,vx:0,vy:0,ox:Z.x,oy:Z.y,delay:Math.random()*Math.min(160,c*.18)}));let dt=0,L=!1;const nt=Math.max(1200,c),st=performance.now(),Ct=l.animate([{opacity:1},{opacity:1}],{duration:nt,fill:"forwards"});function St(){L||(L=!0,cancelAnimationFrame(dt),Gt(l,d)&&(l.textContent=p,Object.assign(l.style,T)))}function D(Z){if(L||!Gt(l,d))return;const $=Z-st,lt=Math.min(1,$/nt);G.clearRect(0,0,m,y),J.forEach(W=>{if($<W.delay)return;W.vx+=(W.ox-W.x)*.055,W.vx*=.8,W.x+=W.vx,W.vy+=(W.oy-W.y)*.055,W.vy*=.8,W.y+=W.vy;const b=Math.hypot(W.x-W.ox,W.y-W.oy),U=1-Math.min(1,b/180);G.globalAlpha=Math.min(.92,.38+lt*.28+U*.34),G.fillStyle=S,G.beginPath(),G.arc(W.x,W.y,Math.max(1.2,_*.36),0,Math.PI*2),G.fill()}),G.globalAlpha=1,!L&&Gt(l,d)&&$<nt&&(dt=requestAnimationFrame(D))}return D(st),Ct.onfinish=()=>{St(),s==null||s()},Ct.oncancel=St,Ct}function Bg(l,o,c,s){const d=ne(l),p=o===void 0?l.textContent??"":String(o);if(!p)return;if(Te()){const Z=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return Z.onfinish=()=>s==null?void 0:s(),Z}l.style.color="";const g=getComputedStyle(l),x=je(l,p),v=Number.parseFloat(g.fontSize)||48,m=Math.max(180,Math.ceil(x.width+v*1.4)),y=Math.max(v*1.7,Math.ceil(x.height+v*1.2)),S=g.color||"rgb(232, 234, 240)",T={position:l.style.position,display:l.style.display,overflow:l.style.overflow,color:l.style.color,willChange:l.style.willChange};l.style.position="relative",l.style.display="inline-block",l.style.overflow="visible",l.style.color="transparent",l.style.willChange="transform, opacity";const A=Math.min(window.devicePixelRatio||1,2),j=document.createElement("canvas");j.width=Math.round(m*A),j.height=Math.round(y*A),j.style.position="absolute",j.style.left="50%",j.style.top="50%",j.style.transform="translate(-50%, -50%)",j.style.width=`${m}px`,j.style.height=`${y}px`,j.style.pointerEvents="none",j.style.zIndex="1";const tt=j.getContext("2d");if(!tt){l.textContent=p;return}const G=tt;G.scale(A,A),l.appendChild(j);const O=document.createElement("canvas");O.width=m,O.height=y;const V=O.getContext("2d");if(!V){l.textContent=p;return}V.font=g.font||`700 ${v}px sans-serif`,V.textAlign="center",V.textBaseline="middle",V.fillStyle="#fff",V.fillText(p,m/2,y/2);const{data:Q}=V.getImageData(0,0,m,y),_=Math.max(3,Math.round(v/18)),Y=[];for(let Z=0;Z<y;Z+=_)for(let $=0;$<m;$+=_)Q[(Z*m+$)*4+3]>128&&Y.push({x:$,y:Z});if(Y.length===0){l.textContent=p;return}const B=Math.max(1,Math.ceil(Y.length/900)),J=Y.filter((Z,$)=>$%B===0).map(Z=>({x:Z.x+(Math.random()-.5)*v*.8,y:Math.max(0,Z.y-v*(.8+Math.random()*1.3)),vx:(Math.random()-.5)*2.2,vy:1.4+Math.random()*2.2,ox:Z.x,oy:Z.y}));let dt=0,L=!1;const nt=Math.max(1200,c),st=performance.now(),Ct=l.animate([{opacity:1},{opacity:1}],{duration:nt,fill:"forwards"});function St(){L||(L=!0,cancelAnimationFrame(dt),Gt(l,d)&&(l.textContent=p,Object.assign(l.style,T)))}function D(Z){if(L||!Gt(l,d))return;const $=Z-st,lt=Math.min(1,$/nt);G.clearRect(0,0,m,y),J.forEach(W=>{W.vy+=.12*(1-lt),W.vx+=(W.ox-W.x)*.045,W.vx*=.84,W.x+=W.vx,W.vy+=(W.oy-W.y)*.045,W.vy*=.84,W.y+=W.vy;const b=Math.hypot(W.x-W.ox,W.y-W.oy),U=Math.min(.94,.32+lt*.22+(1-Math.min(1,b/170))*.4);G.globalAlpha=U,G.fillStyle=S,G.beginPath(),G.arc(W.x,W.y,Math.max(1.2,_*.34),0,Math.PI*2),G.fill()}),G.globalAlpha=1,!L&&Gt(l,d)&&$<nt&&(dt=requestAnimationFrame(D))}return D(st),Ct.onfinish=()=>{St(),s==null||s()},Ct.oncancel=St,Ct}function Lg(l,o,c,s){const d=ne(l),p=o===void 0?l.textContent??"":String(o);if(!p)return;if(Te()){const W=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return W.onfinish=()=>s==null?void 0:s(),W}l.style.color="";const g=getComputedStyle(l),x=je(l,p),v=Number.parseFloat(g.fontSize)||48,m=Math.max(180,Math.ceil(x.width+v*1.4)),y=Math.max(v*1.7,Math.ceil(x.height+v*1.2)),S=g.color||"rgb(232, 234, 240)",T={position:l.style.position,display:l.style.display,overflow:l.style.overflow,color:l.style.color,willChange:l.style.willChange};l.style.position="relative",l.style.display="inline-block",l.style.overflow="visible",l.style.color="transparent",l.style.willChange="transform, opacity";const A=Math.min(window.devicePixelRatio||1,2),j=document.createElement("canvas");j.width=Math.round(m*A),j.height=Math.round(y*A),j.style.position="absolute",j.style.left="50%",j.style.top="50%",j.style.transform="translate(-50%, -50%)",j.style.width=`${m}px`,j.style.height=`${y}px`,j.style.pointerEvents="none",j.style.zIndex="1";const tt=j.getContext("2d");if(!tt){l.textContent=p;return}const G=tt;G.scale(A,A),l.appendChild(j);const O=document.createElement("canvas");O.width=m,O.height=y;const V=O.getContext("2d");if(!V){l.textContent=p;return}V.font=g.font||`700 ${v}px sans-serif`,V.textAlign="center",V.textBaseline="middle",V.fillStyle="#fff",V.fillText(p,m/2,y/2);const{data:Q}=V.getImageData(0,0,m,y),_=Math.max(3,Math.round(v/18)),Y=[];for(let W=0;W<y;W+=_)for(let b=0;b<m;b+=_)Q[(W*m+b)*4+3]>128&&Y.push({x:b,y:W});if(Y.length===0){l.textContent=p;return}const B=Math.max(1,Math.ceil(Y.length/900)),k=Y.filter((W,b)=>b%B===0),J=m/2,dt=y/2,L=Math.min(m,y)*.45,nt=k.map(W=>{const b=Math.random()*Math.PI*2,U=L*(.62+Math.random()*.42);return{x:J+Math.cos(b)*U,y:dt+Math.sin(b)*U,vx:-Math.sin(b)*3.5,vy:Math.cos(b)*3.5,ox:W.x,oy:W.y}});let st=0,Ct=!1;const St=Math.max(1200,c),D=performance.now(),Z=l.animate([{opacity:1},{opacity:1}],{duration:St,fill:"forwards"});function $(){Ct||(Ct=!0,cancelAnimationFrame(st),Gt(l,d)&&(l.textContent=p,Object.assign(l.style,T)))}function lt(W){if(Ct||!Gt(l,d))return;const b=W-D,U=Math.min(1,b/St);G.clearRect(0,0,m,y),nt.forEach(I=>{const ut=(1-U)*.18,yt=I.x-J,wt=I.y-dt;I.vx+=-wt*ut*.01,I.vy+=yt*ut*.01,I.vx+=(I.ox-I.x)*.045,I.vx*=.88,I.x+=I.vx,I.vy+=(I.oy-I.y)*.045,I.vy*=.88,I.y+=I.vy;const Ot=1-Math.min(1,Math.hypot(I.x-I.ox,I.y-I.oy)/180);G.globalAlpha=Math.min(.94,.36+U*.18+Ot*.42),G.fillStyle=S,G.beginPath(),G.arc(I.x,I.y,Math.max(1.2,_*.36),0,Math.PI*2),G.fill()}),G.globalAlpha=1,!Ct&&Gt(l,d)&&b<St&&(st=requestAnimationFrame(lt))}return lt(D),Z.onfinish=()=>{$(),s==null||s()},Z.oncancel=$,Z}function Xg(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const F=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return F.onfinish=()=>s==null?void 0:s(),F}const g={display:l.style.display,position:l.style.position,flexWrap:l.style.flexWrap,whiteSpace:l.style.whiteSpace,width:l.style.width,minWidth:l.style.minWidth,height:l.style.height,minHeight:l.style.minHeight,overflow:l.style.overflow,boxSizing:l.style.boxSizing,willChange:l.style.willChange},x=getComputedStyle(l),v=Ia(x.textAlign),m=Ns(l,d,1.2,1.15);l.style.display="inline-block",l.style.position="relative",l.style.whiteSpace="pre-wrap",l.style.overflow="visible",l.style.boxSizing="border-box",l.style.width=`${m.width}px`,l.style.minWidth=`${m.width}px`,l.style.height=`${m.height}px`,l.style.minHeight=`${m.height}px`,l.style.willChange="transform, opacity",l.innerHTML="";const y=document.createElement("span");y.style.display="flex",y.style.width="100%",y.style.height=`${m.innerHeight}px`,y.style.justifyContent=v,y.style.whiteSpace="pre",y.style.textAlign=x.textAlign,y.style.alignItems="baseline",y.style.position="absolute",y.style.left="0",y.style.top=`${m.verticalSafe}px`,y.style.paddingLeft=`${m.sideSafe}px`,y.style.paddingRight=`${m.sideSafe}px`,y.style.boxSizing="border-box",l.appendChild(y);const S=Array.from(d).map(F=>{const B=document.createElement("span");return B.textContent=F,B.style.display="inline-block",B.style.whiteSpace="pre",B.style.transformOrigin="50% 100%",B.style.willChange="transform",y.appendChild(B),B}),T=S.map(()=>({angle:0,velocity:0,active:!1,done:!1}));T[0]&&(T[0].active=!0);let A=0,j=!1,tt=!1;const G=Math.max(c,S.length*90+360),O=performance.now(),V=l.animate([{opacity:1},{opacity:1}],{duration:G,fill:"forwards"});function Q(){Gt(l,p)&&(cancelAnimationFrame(A),!j&&(j=!0,l.textContent=d,Object.assign(l.style,g)))}function _(){Q(),!tt&&(tt=!0,s==null||s())}function Y(F){let B=!0;const k=F-O;S.forEach((J,dt)=>{const L=T[dt];if(!L.active||L.done){L.done||(B=!1);return}L.velocity+=(90-L.angle)*.035,L.velocity*=.94,L.angle+=L.velocity,L.angle>50&&T[dt+1]&&!T[dt+1].active&&(T[dt+1].active=!0),L.angle>=90?(L.angle=90,L.velocity=0,L.done=!0):B=!1,J.style.transform=`rotateZ(${L.angle}deg)`}),!B&&k<G?A=requestAnimationFrame(Y):_()}return A=requestAnimationFrame(Y),V.onfinish=_,V.oncancel=Q,V}function $g(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const F=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return F.onfinish=()=>s==null?void 0:s(),F}const g={display:l.style.display,position:l.style.position,whiteSpace:l.style.whiteSpace,width:l.style.width,minWidth:l.style.minWidth,height:l.style.height,minHeight:l.style.minHeight,overflow:l.style.overflow,boxSizing:l.style.boxSizing,willChange:l.style.willChange},x=getComputedStyle(l),v=Ia(x.textAlign),m=Ns(l,d,1.25,1.05);l.style.display="inline-block",l.style.position="relative",l.style.whiteSpace="pre-wrap",l.style.overflow="visible",l.style.boxSizing="border-box",l.style.width=`${m.width}px`,l.style.minWidth=`${m.width}px`,l.style.height=`${m.height}px`,l.style.minHeight=`${m.height}px`,l.style.willChange="transform, opacity",l.innerHTML="";const y=document.createElement("span");y.style.display="flex",y.style.width="100%",y.style.height=`${m.innerHeight}px`,y.style.justifyContent=v,y.style.whiteSpace="pre",y.style.textAlign=x.textAlign,y.style.alignItems="baseline",y.style.position="absolute",y.style.left="0",y.style.top=`${m.verticalSafe}px`,y.style.paddingLeft=`${m.sideSafe}px`,y.style.paddingRight=`${m.sideSafe}px`,y.style.boxSizing="border-box",l.appendChild(y);const S=Array.from(d).map(F=>{const B=document.createElement("span");return B.textContent=F,B.style.display="inline-block",B.style.whiteSpace="pre",B.style.transformOrigin="50% 100%",B.style.willChange="transform",y.appendChild(B),B}),T=S.map((F,B)=>({position:(B%2===0?1:-1)*(14+B*1.8),velocity:0}));let A=0,j=!1,tt=!1;const G=Math.max(c,S.length*80+600),O=performance.now(),V=l.animate([{opacity:1},{opacity:1}],{duration:G,fill:"forwards"});function Q(){Gt(l,p)&&(cancelAnimationFrame(A),!j&&(j=!0,l.textContent=d,Object.assign(l.style,g)))}function _(){Q(),!tt&&(tt=!0,s==null||s())}function Y(F){const B=F-O;let k=!0;S.forEach((J,dt)=>{if(B<dt*90){k=!1;return}const L=T[dt];L.velocity+=(0-L.position)*.016,L.velocity*=.986,L.position+=L.velocity,J.style.transform=`rotateZ(${L.position}deg)`,Math.abs(L.velocity)+Math.abs(L.position)>=.05&&(k=!1)}),!k&&B<G?A=requestAnimationFrame(Y):_()}return A=requestAnimationFrame(Y),V.onfinish=_,V.oncancel=Q,V}function qg(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const nt=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return nt.onfinish=()=>s==null?void 0:s(),nt}const g={display:l.style.display,position:l.style.position,alignItems:l.style.alignItems,justifyContent:l.style.justifyContent,whiteSpace:l.style.whiteSpace,width:l.style.width,minWidth:l.style.minWidth,height:l.style.height,minHeight:l.style.minHeight,overflow:l.style.overflow,boxSizing:l.style.boxSizing,willChange:l.style.willChange},x=getComputedStyle(l),v=Ia(x.textAlign),m=Ns(l,d,1.15,.75);l.style.display="inline-block",l.style.position="relative",l.style.whiteSpace="pre-wrap",l.style.overflow="visible",l.style.boxSizing="border-box",l.style.width=`${m.width}px`,l.style.minWidth=`${m.width}px`,l.style.height=`${m.height}px`,l.style.minHeight=`${m.height}px`,l.style.willChange="transform, opacity",l.innerHTML="";const y=document.createElement("span");y.style.display="flex",y.style.width="100%",y.style.height=`${m.innerHeight}px`,y.style.justifyContent=v,y.style.whiteSpace="pre",y.style.textAlign=x.textAlign,y.style.alignItems="baseline",y.style.position="absolute",y.style.left="0",y.style.top=`${m.verticalSafe}px`,y.style.paddingLeft=`${m.sideSafe}px`,y.style.paddingRight=`${m.sideSafe}px`,y.style.boxSizing="border-box",l.appendChild(y);const S=Array.from(d).map(nt=>{const st=document.createElement("span");return st.textContent=nt,st.style.display="inline-block",st.style.whiteSpace="pre",st.style.opacity="0",st.style.willChange="transform, opacity",y.appendChild(st),st}),T=l.getBoundingClientRect(),A=T.left+T.width/2,j=S.map(nt=>{const st=nt.getBoundingClientRect();return st.left+st.width/2-A}),tt=S.map((nt,st)=>({position:-j[st],velocity:0})),G=S.map(()=>({position:(Math.random()-.5)*40,velocity:0})),O=S.map(()=>({position:0,velocity:0}));let V=0,Q=!1,_=!1;const Y=Math.max(c,900),F=performance.now(),B=l.animate([{opacity:1},{opacity:1}],{duration:Y,fill:"forwards"});function k(){Gt(l,p)&&(cancelAnimationFrame(V),!Q&&(Q=!0,l.textContent=d,Object.assign(l.style,g)))}function J(){k(),!_&&(_=!0,s==null||s())}function dt(nt,st,Ct,St){return nt.velocity+=(st-nt.position)*Ct,nt.velocity*=St,nt.position+=nt.velocity,Math.abs(nt.velocity)+Math.abs(st-nt.position)<.05}function L(nt){const st=nt-F;let Ct=!0;S.forEach((St,D)=>{const Z=dt(tt[D],0,.07,.7),$=dt(G[D],0,.09,.68);dt(O[D],1,.08,.74),St.style.transform=`translate(${tt[D].position}px, ${G[D].position}px)`,St.style.opacity=String(Math.max(0,Math.min(1,O[D].position))),(!Z||!$)&&(Ct=!1)}),!Ct&&st<Y?V=requestAnimationFrame(L):J()}return V=requestAnimationFrame(L),B.onfinish=J,B.oncancel=k,B}function Gg(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const F=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return F.onfinish=()=>s==null?void 0:s(),F}const g={display:l.style.display,position:l.style.position,alignItems:l.style.alignItems,justifyContent:l.style.justifyContent,whiteSpace:l.style.whiteSpace,width:l.style.width,minWidth:l.style.minWidth,height:l.style.height,minHeight:l.style.minHeight,overflow:l.style.overflow,boxSizing:l.style.boxSizing,willChange:l.style.willChange},x=getComputedStyle(l),v=Ia(x.textAlign),m=Ns(l,d,1.05,1.45);l.style.display="inline-block",l.style.position="relative",l.style.whiteSpace="pre-wrap",l.style.overflow="visible",l.style.boxSizing="border-box",l.style.width=`${m.width}px`,l.style.minWidth=`${m.width}px`,l.style.height=`${m.height}px`,l.style.minHeight=`${m.height}px`,l.style.willChange="transform, opacity",l.innerHTML="";const y=document.createElement("span");y.style.display="flex",y.style.width="100%",y.style.height=`${m.innerHeight}px`,y.style.justifyContent=v,y.style.whiteSpace="pre",y.style.textAlign=x.textAlign,y.style.alignItems="baseline",y.style.position="absolute",y.style.left="0",y.style.top=`${m.verticalSafe}px`,y.style.paddingLeft=`${m.sideSafe}px`,y.style.paddingRight=`${m.sideSafe}px`,y.style.boxSizing="border-box",l.appendChild(y);const S=Array.from(d).map(F=>{const B=document.createElement("span");return B.textContent=F,B.style.display="inline-block",B.style.whiteSpace="pre",B.style.opacity="0",B.style.willChange="transform, opacity",y.appendChild(B),B}),T=S.map((F,B)=>({position:-(60+B*12),velocity:0,settled:!1,opacity:0,opacityVelocity:0}));let A=0,j=!1,tt=!1;const G=Math.max(c,S.length*90+900),O=performance.now(),V=l.animate([{opacity:1},{opacity:1}],{duration:G,fill:"forwards"});function Q(){Gt(l,p)&&(cancelAnimationFrame(A),!j&&(j=!0,l.textContent=d,Object.assign(l.style,g)))}function _(){Q(),!tt&&(tt=!0,s==null||s())}function Y(F){const B=F-O;let k=!0;S.forEach((J,dt)=>{if(B<dt*64){k=!1;return}const L=T[dt];L.settled||(L.velocity+=.9,L.position+=L.velocity,L.position>=0?(L.position=0,L.velocity*=-.42,Math.abs(L.velocity)<1?(L.velocity=0,L.settled=!0):k=!1):k=!1),L.opacityVelocity+=(1-L.opacity)*.07,L.opacityVelocity*=.78,L.opacity+=L.opacityVelocity,J.style.transform=`translateY(${L.position}px)`,J.style.opacity=String(Math.max(0,Math.min(1,L.opacity)))}),!k&&B<G?A=requestAnimationFrame(Y):_()}return A=requestAnimationFrame(Y),V.onfinish=_,V.oncancel=Q,V}function Qg(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const F=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return F.onfinish=()=>s==null?void 0:s(),F}const g={display:l.style.display,whiteSpace:l.style.whiteSpace,perspective:l.style.perspective,width:l.style.width,minWidth:l.style.minWidth,willChange:l.style.willChange},x=getComputedStyle(l),v=Ia(x.textAlign),m=l.getBoundingClientRect(),y=Math.ceil(je(l,d).width),S=Number.parseFloat(g.minWidth||"0"),T=Math.ceil(Math.max(S,m.width,y));l.style.display="inline-block",l.style.whiteSpace="pre-wrap",l.style.perspective="500px",l.style.width=`${Math.ceil(Math.max(m.width,y))}px`,l.style.minWidth=`${T}px`,l.style.willChange="transform, opacity",l.innerHTML="";const A=Array.from(d),j=document.createElement("span");j.style.display="flex",j.style.width="100%",j.style.justifyContent=v,j.style.whiteSpace="pre",j.style.textAlign=x.textAlign,l.appendChild(j);const tt=Math.floor(A.length/2),G=A.map((F,B)=>{const k=document.createElement("span"),J=B-tt,dt=Math.max(-260,Math.min(260,J*50)),L=Math.max(-70,Math.min(70,J*50));return k.textContent=F,k.style.display="inline-block",k.style.whiteSpace="pre",k.style.color="currentColor",k.style.willChange="transform, opacity",k.style.transformOrigin="center",k.style.transform=`translateX(${dt}px) rotateX(${L}deg)`,k.style.opacity="0",j.appendChild(k),{span:k,x:dt,rotateX:L}}),O=Math.max(420,c*.75);let V=G.length,Q=!1;const _=l.animate([{opacity:1},{opacity:1}],{duration:O+120,fill:"forwards"});function Y(){Gt(l,p)&&(Q||(Q=!0,l.textContent=d,Object.assign(l.style,g)))}return G.forEach(({span:F,x:B,rotateX:k})=>{const J=F.animate([{opacity:0,transform:`translateX(${B}px) rotateX(${k}deg) scale(0.96)`},{opacity:1,transform:"translateX(0) rotateX(0deg) scale(1)"}],{duration:O,easing:Kl,fill:"forwards"});J.onfinish=()=>{V-=1,V===0&&(Y(),s==null||s())}}),_.oncancel=Y,_}function Vg(l,o,c,s,d){const p=o===void 0?l.textContent??"":String(o),g=c===void 0?l.textContent??"":String(c);if(!g)return;const x=ne(l);if(Te()){const $=l.animate([{opacity:0},{opacity:1}],{duration:s/2,easing:ve,fill:"forwards"});return $.onfinish=()=>d==null?void 0:d(),$}const v=je(l,p),m=je(l,g),y=l.getBoundingClientRect(),S=getComputedStyle(l),T=Ia(S.textAlign),A=Number.parseFloat(S.fontSize)||16,j=Math.ceil(A*.3)*2,tt=Math.ceil(Math.max(v.width,m.width,y.width))+j,G=Math.ceil(Math.max(v.height,m.height,y.height)),O={position:l.style.position,display:l.style.display,overflow:l.style.overflow,whiteSpace:l.style.whiteSpace,width:l.style.width,minWidth:l.style.minWidth,height:l.style.height,minHeight:l.style.minHeight,perspective:l.style.perspective,willChange:l.style.willChange};l.style.position="relative",l.style.display="inline-block",l.style.overflow="hidden",l.style.whiteSpace="pre-wrap",l.style.width=`${tt}px`,l.style.minWidth=`${tt}px`,l.style.height=`${G}px`,l.style.minHeight=`${G}px`,l.style.perspective="600px",l.style.willChange="transform, opacity",l.innerHTML="";function V($){const lt=document.createElement("span");return lt.style.display="flex",lt.style.alignItems="center",lt.style.justifyContent=T,lt.style.flexWrap="wrap",lt.style.whiteSpace="pre-wrap",lt.style.textAlign=S.textAlign,lt.style.width="100%",lt.style.height="100%",pu($).forEach(W=>{const b=document.createElement("span");b.textContent=W,b.style.display="inline-block",b.style.whiteSpace="pre",b.style.willChange="transform, opacity",lt.appendChild(b)}),lt}const Q=V(p),_=V(g);Q.style.position="absolute",Q.style.left="0",Q.style.top="0",_.style.position="absolute",_.style.left="0",_.style.top="0",l.append(Q,_);const Y=Array.from(Q.children),F=Array.from(_.children),B=Math.max(180,s*.35),k=Math.min(30,Math.max(10,s*.03)),J=Math.max(300,s*.55),dt=B+20,L=dt+J+Math.max(0,F.length-1)*k+50;let nt=Y.length+F.length,st=!1,Ct=!1;const St=l.animate([{opacity:1},{opacity:1}],{duration:L,fill:"forwards"});function D(){Gt(l,x)&&(Ct||(Ct=!0,l.textContent=g,Object.assign(l.style,O)))}function Z(){nt-=1,!(nt>0||st)&&(st=!0,D(),d==null||d())}return nt===0?(D(),d==null||d(),St):(Y.forEach($=>{$.style.transformOrigin="50% 0%";const lt=$.animate([{opacity:1,transform:"rotateX(0deg)"},{opacity:0,transform:"rotateX(-90deg)"}],{duration:B,easing:ve,fill:"forwards"});lt.onfinish=Z}),Y.length>0&&setTimeout(()=>{Q.style.display="none"},B+10),F.forEach(($,lt)=>{$.style.transformOrigin="50% 100%";const W=$.animate([{opacity:0,transform:"rotateX(90deg)"},{opacity:1,transform:"rotateX(0deg)"}],{duration:J,delay:dt+lt*k,easing:Ne,fill:"forwards"});W.onfinish=Z}),St.oncancel=D,St)}function Zg(l,o,c,s,d){const p=o===void 0?l.textContent??"":String(o),g=c===void 0?l.textContent??"":String(c);if(!g)return;const x=ne(l);if(Te()){const lt=l.animate([{opacity:0},{opacity:1}],{duration:s/2,easing:ve,fill:"forwards"});return lt.onfinish=()=>d==null?void 0:d(),lt}const v=Math.random().toString(36).slice(2),m=je(l,p),y=je(l,g),S=l.getBoundingClientRect(),T=getComputedStyle(l),A=Ia(T.textAlign),j=A==="center"?"center":A==="flex-end"?"end":"start",tt=Number.parseFloat(T.fontSize)||16,G=Math.ceil(tt*.3)*2,O=Math.ceil(Math.max(m.width,y.width,S.width))+G,V=Math.ceil(Math.max(m.height,y.height,S.height)),Q={position:l.style.position,display:l.style.display,overflow:l.style.overflow,width:l.style.width,minWidth:l.style.minWidth,height:l.style.height,minHeight:l.style.minHeight,willChange:l.style.willChange};l.style.position="relative",l.style.display="inline-block",l.style.overflow="visible",l.style.width=`${O}px`,l.style.minWidth=`${O}px`,l.style.height=`${V}px`,l.style.minHeight=`${V}px`,l.style.willChange="transform, opacity",l.innerHTML="";const _=document.createElementNS("http://www.w3.org/2000/svg","svg");_.setAttribute("aria-hidden","true"),_.setAttribute("focusable","false"),_.style.position="absolute",_.style.width="0",_.style.height="0";const Y=document.createElementNS("http://www.w3.org/2000/svg","defs"),F=document.createElementNS("http://www.w3.org/2000/svg","filter");F.setAttribute("id",`trigr-gooey-${v}`);const B=document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix");B.setAttribute("in","SourceGraphic"),B.setAttribute("type","matrix"),B.setAttribute("values","1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8"),F.append(B),Y.appendChild(F),_.appendChild(Y);const k=document.createElement("span");k.style.display="grid",k.style.alignItems="center",k.style.justifyItems=j,k.style.width="100%",k.style.height="100%",k.style.textAlign=T.textAlign,k.style.filter=`url(#trigr-gooey-${v})`;const J=document.createElement("span"),dt=document.createElement("span");J.textContent=p,dt.textContent=g,[J,dt].forEach(lt=>{lt.style.gridArea="1 / 1",lt.style.display="inline-block",lt.style.textAlign=T.textAlign,lt.style.justifySelf=j,lt.style.userSelect="none",lt.style.willChange="filter, opacity"}),J.style.opacity="1",dt.style.opacity="0",k.append(J,dt),l.append(_,k);let L=0,nt=!1;const st=Math.max(650,s),Ct=performance.now(),St=l.animate([{opacity:1},{opacity:1}],{duration:st,fill:"forwards"});function D(){Gt(l,x)&&(cancelAnimationFrame(L),!nt&&(nt=!0,l.textContent=g,Object.assign(l.style,Q)))}function Z(lt){const W=Math.max(0,Math.min(1,lt)),b=1-W,U=(1-W)*4,I=W*4;dt.style.filter=`blur(${U.toFixed(2)}px)`,dt.style.opacity=`${Math.pow(W,.65)}`,J.style.filter=`blur(${I.toFixed(2)}px)`,J.style.opacity=`${Math.pow(b,.65)}`}function $(lt){const W=Math.min(1,(lt-Ct)/st);Z(W),W<1&&(L=requestAnimationFrame($))}return L=requestAnimationFrame($),St.onfinish=()=>{D(),d==null||d()},St.oncancel=D,St}function Kg(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const O=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return O.onfinish=()=>s==null?void 0:s(),O}const g={display:l.style.display,alignItems:l.style.alignItems,justifyContent:l.style.justifyContent,overflow:l.style.overflow,whiteSpace:l.style.whiteSpace,willChange:l.style.willChange};l.style.display="inline-block",l.style.overflow="hidden",l.style.whiteSpace="pre",l.style.willChange="transform, opacity",l.innerHTML="";const x=pu(d),v=x.map((O,V)=>V).sort(()=>Math.random()-.5),m=x.map(O=>{const V=document.createElement("span"),Q=document.createElement("span"),_=document.createElement("span");return V.style.display="inline-flex",V.style.position="relative",V.style.alignItems="flex-end",V.style.overflow="hidden",V.style.height="1.22em",V.style.lineHeight="1.22",V.style.verticalAlign="baseline",V.style.whiteSpace="pre",Q.textContent=O,_.textContent=O,Q.style.display="inline-block",Q.style.position="relative",Q.style.willChange="transform",_.style.display="inline-block",_.style.position="absolute",_.style.left="0",_.style.top="-100%",_.style.willChange="transform",V.append(Q,_),l.appendChild(V),{primary:Q,secondary:_}}),y=Math.max(14,Math.min(36,c*.04)),S=Math.max(220,c*.62);let T=m.length*2,A=!1;const j=l.animate([{opacity:1},{opacity:1}],{duration:S+m.length*y+40,fill:"forwards"});function tt(){Gt(l,p)&&(A||(A=!0,m.forEach(({primary:O,secondary:V})=>{V.remove(),O.style.position="",O.style.willChange="",O.style.display=""}),m.forEach(({primary:O})=>{const V=O.parentElement;V&&V.replaceWith(O)}),Object.assign(l.style,g)))}function G(){T-=1,!(T>0)&&(tt(),s==null||s())}return T===0?(tt(),s==null||s(),j):(v.forEach((O,V)=>{const Q=m[O],_=V*y,Y=Q.primary.animate([{transform:"translateY(0)"},{transform:"translateY(100%)"}],{duration:S,delay:_,easing:Ne,fill:"forwards"}),F=Q.secondary.animate([{transform:"translateY(0)"},{transform:"translateY(100%)"}],{duration:S,delay:_,easing:Ne,fill:"forwards"});Y.onfinish=G,F.onfinish=G}),j.oncancel=tt,j)}function Jg(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const _=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return _.onfinish=()=>s==null?void 0:s(),_}const g={display:l.style.display,whiteSpace:l.style.whiteSpace,width:l.style.width,minWidth:l.style.minWidth,willChange:l.style.willChange},x=l.getBoundingClientRect(),v=Math.ceil(je(l,d).width),m=Number.parseFloat(g.minWidth||"0"),y=Math.ceil(Math.max(m,x.width,v));l.style.display="inline-block",l.style.whiteSpace="pre-wrap",l.style.width=`${Math.ceil(Math.max(x.width,v))}px`,l.style.minWidth=`${y}px`,l.style.willChange="transform, opacity",l.innerHTML="";const T=d.split(/(\s+)/).map(_=>{const Y=document.createElement("span");return Y.textContent=_,Y.style.display=/^\s+$/.test(_)?"inline":"inline-block",Y.style.whiteSpace="pre",Y.style.willChange="transform, opacity, filter",Y.style.opacity=/^\s+$/.test(_)?"1":"0",l.appendChild(Y),Y}).filter(_=>!/^\s+$/.test(_.textContent??"")),A=Math.max(24,Math.min(60,c*.08)),j=Math.max(320,c*.72);let tt=T.length,G=!1;const O=l.animate([{opacity:1},{opacity:1}],{duration:j+T.length*A,fill:"forwards"});function V(){Gt(l,p)&&(G||(G=!0,l.textContent=d,Object.assign(l.style,g),l.style.minWidth=`${y}px`))}function Q(){tt-=1,!(tt>0)&&(V(),s==null||s())}return tt===0?(V(),s==null||s(),O):(T.forEach((_,Y)=>{const F=_.animate([{opacity:0,filter:"blur(12px)",transform:"translateY(20px)"},{opacity:1,filter:"blur(0px)",transform:"translateY(0)"}],{duration:j,delay:Y*A,easing:Pn,fill:"forwards"});F.onfinish=Q}),O.oncancel=V,O)}function Wg(l,o,c,s){const d=o===void 0?l.textContent??"":String(o);if(!d)return;const p=ne(l);if(Te()){const Q=l.animate([{opacity:0},{opacity:1}],{duration:c/2,easing:ve,fill:"forwards"});return Q.onfinish=()=>s==null?void 0:s(),Q}const g={display:l.style.display,flexWrap:l.style.flexWrap,whiteSpace:l.style.whiteSpace,width:l.style.width,minWidth:l.style.minWidth,willChange:l.style.willChange},x=l.getBoundingClientRect(),v=Math.ceil(je(l,d).width),m=Number.parseFloat(g.minWidth||"0"),y=Math.ceil(Math.max(m,x.width,v));l.style.display="inline-block",l.style.flexWrap="wrap",l.style.whiteSpace="pre-wrap",l.style.width=`${Math.ceil(Math.max(x.width,v))}px`,l.style.minWidth=`${y}px`,l.style.willChange="transform, opacity",l.innerHTML="";const S=[];d.split(" ").forEach((Q,_,Y)=>{const F=document.createElement("span");F.style.display="inline-block",F.style.whiteSpace="nowrap",pu(Q).forEach(B=>{const k=document.createElement("span"),J=document.createElement("span");k.style.display="inline-block",k.style.overflow="hidden",J.textContent=B,J.style.display="inline-block",J.style.opacity="0",J.style.transform="translateY(100%)",J.style.willChange="transform, opacity",k.appendChild(J),F.appendChild(k),S.push(J)}),l.appendChild(F),_<Y.length-1&&l.appendChild(document.createTextNode(" "))});const T=Math.max(18,Math.min(50,c*.06)),A=Math.max(280,c*.68);let j=S.length,tt=!1;const G=l.animate([{opacity:1},{opacity:1}],{duration:A+S.length*T,fill:"forwards"});function O(){Gt(l,p)&&(tt||(tt=!0,l.textContent=d,Object.assign(l.style,g),l.style.minWidth=`${y}px`))}function V(){j-=1,!(j>0)&&(O(),s==null||s())}return j===0?(O(),s==null||s(),G):(S.forEach((Q,_)=>{const Y=Q.animate([{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],{duration:A,delay:_*T,easing:Ne,fill:"forwards"});Y.onfinish=V}),G.oncancel=O,G)}function Fg(l,o,c,s,d){const p=o===void 0?"":String(o),g=c===void 0?l.textContent??"":String(c),x=ne(l);if(Te()){const{oldEl:B,newEl:k,cleanup:J}=Cs(l,p,g,x);B.animate([{opacity:1},{opacity:0}],{duration:s/2,easing:ve,fill:"forwards"});const dt=k.animate([{opacity:0},{opacity:1}],{duration:s/2,easing:Ne,fill:"forwards"});return dt.onfinish=()=>{J(),d==null||d()},dt.oncancel=J,dt}const v=Array.from(g.length>p.length?g:p),m=je(l,p),y=je(l,g),S=l.getBoundingClientRect(),T=getComputedStyle(l),A=Ia(T.textAlign),j=Number.parseFloat(T.fontSize)||16,tt=Math.ceil(j*.3)*2,G=Math.ceil(Math.max(m.width,y.width,S.width))+tt,O={display:l.style.display,whiteSpace:l.style.whiteSpace,width:l.style.width,minWidth:l.style.minWidth,willChange:l.style.willChange},V=Number.parseFloat(O.minWidth||"0"),Q=Math.ceil(Math.max(V,G));l.style.willChange="transform, opacity",l.style.display="inline-block",l.style.whiteSpace="pre",l.style.width=`${G}px`,l.style.minWidth=`${Q}px`,l.innerHTML="";const _=Math.max(400,s+Math.max(0,v.length-5)*15),Y=document.createElement("span");Y.style.display="flex",Y.style.alignItems="baseline",Y.style.justifyContent=A,Y.style.whiteSpace="pre",Y.style.width="100%",Y.style.textAlign=T.textAlign,l.appendChild(Y),v.forEach((B,k)=>{const J=p[k],dt=g[k],L=J!==void 0&&J===dt,nt=document.createElement("span");if(nt.style.display="inline-grid",nt.style.placeItems="center",nt.style.position="relative",nt.style.minWidth=L||dt===void 0?"auto":"0.55em",Y.appendChild(nt),L){nt.textContent=dt,nt.animate([{opacity:1,transform:"scale(1)"},{opacity:1,transform:"scale(1)"}],{duration:_*.55,delay:k*15,easing:Pn,fill:"forwards"});return}if(J!==void 0){const st=document.createElement("span");st.textContent=J,st.style.gridArea="1 / 1",nt.appendChild(st),st.animate([{opacity:1,transform:"translateY(0) scale(1)"},{opacity:0,transform:"translateY(-4px) scale(0.5)"}],{duration:_*.45,delay:k*15,easing:ve,fill:"forwards"})}if(dt!==void 0){const st=document.createElement("span");st.textContent=dt,st.style.gridArea="1 / 1",nt.appendChild(st),st.animate([{opacity:0,transform:"translateY(4px) scale(0.5)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:_*.65,delay:k*15+55,easing:Ne,fill:"forwards"})}});const F=l.animate([{opacity:1},{opacity:1}],{duration:_,fill:"forwards"});return F.onfinish=()=>{l.textContent=g,Object.assign(l.style,O),l.style.minWidth=`${Q}px`,d==null||d()},F.oncancel=()=>{Gt(l,x)&&(l.textContent=g,Object.assign(l.style,O),l.style.minWidth=`${Q}px`)},F}const Ig={splitReveal:_g,splitSlide:Eg,bigBang:Hg,scatterAssemble:Ug,pixelRain:Bg,vortex:Lg,dominoFall:Xg,pendulum:$g,centerBurst:qg,gravityBounce:Gg,scrollFanIn:Qg,randomLetterSwap:Kg,textEffect:Jg,staggerText:Wg},Pg={morph:Fg,textRotate:Vg,gooeyMorph:Zg},ty=C.forwardRef(function({value:o,trigger:c="change",animation:s,scrollAnimation:d,highlightColor:p,properties:g,duration:x=300,easing:v=Ne,delay:m=0,threshold:y=.4,repeat:S=!1,once:T,as:A="span",className:j,style:tt,onClick:G,onEnter:O,onExit:V,onHoverStart:Q,onHoverEnd:_,onAnimationEnd:Y,children:F},B){const k=C.useRef(null),J=C.useRef(null),dt=C.useRef(null),L=C.useRef(null),nt=C.useRef(null),st=C.useRef(null),Ct=C.useRef(0),St=C.useRef(!1),D=C.useRef([]),[Z,$]=C.useState(null),lt=C.useMemo(()=>o??su(F),[F,o]),{changed:W,prev:b,current:U}=Cg(lt),I=C.useRef(b);W&&(I.current=b);const ut=T??!S,yt=C.useMemo(()=>Array.isArray(c)?c.slice(0,2):[c],[c]),wt=C.useCallback(Rt=>yt.includes(Rt),[yt]),Ot=(Z==null?void 0:Z.source)??yt[0]??"change",jt=Ot==="scroll"&&d?d:s,Ut=C.useCallback(Rt=>{St.current=!0,Ct.current+=1,$({id:Ct.current,source:Rt})},[]),kt=C.useCallback(Rt=>{if(St.current){Rt!=="scroll"&&D.current.length<2&&D.current.push(Rt);return}Ut(Rt)},[Ut]),Dt=C.useCallback(()=>{st.current!==null&&(clearTimeout(st.current),st.current=null),Y==null||Y(),St.current=!1,J.current=null;const Rt=D.current.shift();Rt?Ut(Rt):$(null)},[Y,Ut]),ot=Dt,ae=C.useCallback(()=>{kt("manual")},[kt]);C.useImperativeHandle(B,()=>({animate:ae,get element(){return k.current}}),[ae]);const Xt=C.useRef(!1);C.useEffect(()=>{if(!wt("scroll"))return;const Rt=k.current;if(!Rt)return;Xt.current=!1;const Nt=new IntersectionObserver(([gt])=>{if(gt.isIntersecting){if(Xt.current)return;Xt.current=!0,O==null||O(),kt("scroll"),ut&&Nt.disconnect()}else Xt.current=!1,S&&(V==null||V())},Dg(Rt,y));return Nt.observe(Rt),()=>Nt.disconnect()},[wt,O,V,S,kt,ut,y]),C.useEffect(()=>{!wt("change")||!W||kt("change")},[W,wt,kt]),C.useEffect(()=>{wt("mount")&&kt("mount")},[wt,kt]);const Jt=C.useCallback(Rt=>{G==null||G(Rt),wt("click")&&kt("click")},[wt,G,kt]),le=C.useCallback(()=>{Q==null||Q(),wt("hover")&&kt("hover")},[wt,Q,kt]),ze=C.useCallback(()=>{_==null||_()},[_]);return C.useEffect(()=>()=>{var Rt,Nt;L.current!==null&&cancelAnimationFrame(L.current),nt.current!==null&&clearTimeout(nt.current),st.current!==null&&clearTimeout(st.current),(Rt=J.current)==null||Rt.cancel(),(Nt=dt.current)==null||Nt.cancel()},[]),C.useLayoutEffect(()=>{if(!Z||!k.current)return;L.current!==null&&cancelAnimationFrame(L.current),nt.current!==null&&clearTimeout(nt.current),st.current!==null&&(clearTimeout(st.current),st.current=null),Ag(k.current),J.current=null,dt.current=null;const Rt=Ot==="change"?U:o??k.current.textContent??"",gt=Te()?x/2:x;st.current=setTimeout(()=>{st.current=null,Dt()},Math.max(900,gt*2+600));const ce=Ot==="change"?I.current:k.current.textContent??"";Ot==="change"&&ce!==void 0&&jt!=="highlight"&&gm(k.current,String(ce),String(Rt)),dt.current=Ng(k.current,g,{duration:gt,easing:v,delay:m});const Ca=Pg[jt];if(Ca){J.current=Ca(k.current,ce,Rt,gt,ot)??null;return}const Je=Ig[jt];if(Je){J.current=Je(k.current,Rt,gt,ot)??null;return}if(jt==="decoder"){let z=function(rt){const pt=rt-ft;let mt="",vt=!0;for(let Ht=0;Ht<it;Ht++){if(R[Ht]===" "){mt+=" ";continue}pt-Ht*ht>=ct?mt+=R[Ht]:(mt+=X[Math.floor(Math.random()*X.length)],vt=!1)}k.current&&(k.current.textContent=mt),vt?(L.current=null,ot==null||ot()):L.current=requestAnimationFrame(z)};const R=String(Rt),X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",it=R.length,ct=gt*.7,ht=it>1?gt*.3/(it-1):0,ft=performance.now();L.current=requestAnimationFrame(z);return}if(jt==="fadeAway"){const z=I.current!==void 0?String(I.current):null;if(!z)return;const R=String(Rt),X=k.current,it=ne(X),ct=Nn(X,z),ht=40,ft=gt+(ct.length-1)*ht+50;ct.forEach((mt,vt)=>{mt.animate([{opacity:1,filter:"blur(0px)"},{opacity:0,filter:"blur(2px)"}],{duration:gt,delay:vt*ht,fill:"forwards",easing:ru})});const rt=X.animate([{opacity:1},{opacity:1}],{duration:ft,fill:"forwards"}),pt=()=>{Gt(X,it)&&(X.textContent=R)};rt.onfinish=()=>{pt(),ot==null||ot()},rt.oncancel=pt,J.current=rt;return}if(jt==="fadeIn"){const z=String(Rt);if(!z)return;const R=k.current,X=ne(R),it=Nn(R,z,pt=>{pt.style.opacity="0",pt.style.filter="blur(2px)"}),ct=40,ht=gt+(it.length-1)*ct+50;it.forEach((pt,mt)=>{pt.animate([{opacity:0,filter:"blur(2px)"},{opacity:1,filter:"blur(0px)"}],{duration:gt,delay:(it.length-1-mt)*ct,fill:"forwards",easing:Ne})});const ft=R.animate([{opacity:1},{opacity:1}],{duration:ht,fill:"forwards"}),rt=()=>{Gt(R,X)&&(R.textContent=z)};ft.onfinish=()=>{rt(),ot==null||ot()},ft.oncancel=rt,J.current=ft;return}if(jt==="slideReplace"){const z=I.current!==void 0?String(I.current):null,R=String(Rt);if(!z||!R)return;const X=k.current,it=ne(X),{oldEl:ct,newEl:ht,cleanup:ft}=Cs(X,z,R,it);ht.style.transform="translateX(100%)";const rt=document.createElement("span");rt.style.position="absolute",rt.style.bottom="0",rt.style.left="0",rt.style.width="100%",rt.style.height="2px",rt.style.background="currentColor",rt.style.transform="scaleX(0)",rt.style.transformOrigin="0% 50%",X.appendChild(rt);const pt=gt*.45,mt=gt*.55,vt=gt*.65;ct.animate([{transform:"translateX(0)"},{transform:"translateX(-100%)"}],{duration:pt,easing:ve,fill:"forwards"});const Ht=ht.animate([{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:mt,easing:Ne,fill:"forwards"});rt.animate([{transform:"scaleX(0)"},{transform:"scaleX(1)"}],{duration:vt,easing:Kl,fill:"forwards"}),J.current=Ht,Ht.onfinish=()=>{if(J.current=null,X){const _t=X.querySelector("span:last-child");_t&&_t.remove(),ft()}ot==null||ot()},Ht.oncancel=ft;return}if(jt==="letterDrop"){const z=String(Rt);if(!z)return;const R=Nn(k.current,z,ct=>{ct.style.willChange="transform, opacity"}),X=Math.max(18,Math.min(45,gt*.08)),it=R.length>0?R.length-1:0;R.forEach((ct,ht)=>{const ft=ct.animate([{transform:"translateY(-24px)",opacity:0},{transform:"translateY(2px)",opacity:1,offset:.78},{transform:"translateY(0)"}],{duration:gt,delay:ht*X,fill:"forwards",easing:Ne});ht===it&&(ft.onfinish=()=>{R.forEach(rt=>{rt.style.willChange="auto"}),k.current.textContent=z,ot==null||ot()})});return}if(jt==="glitch"){if(!String(Rt))return;const R=[1,2,3,4,5].map(ct=>`${ct}px ${ct}px`).join(", "),X=[0,0,0,0,0].map(()=>"0px 0px").join(", "),it=k.current.animate([{textShadow:R,transform:"translate(-6px, -6px) skewX(-2deg)"},{textShadow:X,transform:"translate(0, 0) skewX(0deg)"}],{duration:gt,easing:Kl,fill:"forwards"});J.current=it,it.onfinish=()=>{J.current=null,ot==null||ot()};return}if(jt==="textReveal"){const z=getComputedStyle(k.current).backgroundColor,R=document.createElement("div");R.style.position="absolute",R.style.top="0",R.style.left="0",R.style.width="100%",R.style.height="100%",R.style.background=z!=="rgba(0, 0, 0, 0)"&&z!=="transparent"?z:"currentColor",R.style.transform="translateX(-100%)",R.style.pointerEvents="none",k.current.style.position="relative",k.current.style.overflow="hidden",k.current.appendChild(R);const X=R.animate([{transform:"translateX(-100%)"},{transform:"translateX(100%)"}],{duration:gt,easing:Kl,fill:"forwards"});J.current=X,X.onfinish=()=>{J.current=null,R.remove(),k.current&&(k.current.style.position="",k.current.style.overflow=""),ot==null||ot()};return}if(jt==="liftReveal"){const z=I.current!==void 0?String(I.current):null,R=String(Rt);if(!z)return;const X=k.current,it=ne(X),{oldEl:ct,newEl:ht,cleanup:ft}=Cs(X,z,R,it);ht.style.transform="translateY(100%)",ct.animate([{transform:"translateY(0)"},{transform:"translateY(-100%)"}],{duration:gt,easing:v,fill:"forwards"});const rt=ht.animate([{transform:"translateY(100%)"},{transform:"translateY(0)"}],{duration:gt,easing:v,fill:"forwards"});J.current=rt,rt.onfinish=()=>{J.current=null,ft(),ot==null||ot()},rt.oncancel=ft;return}if(jt==="scatter"){const z=String(Rt);if(!z)return;const R=k.current,X=Nn(R,z),it=X.map((ft,rt)=>rt).sort(()=>Math.random()-.5),ct=gt/X.length;let ht=X.length;if(ht===0){ot==null||ot();return}X.forEach((ft,rt)=>{const pt=ft.animate([{opacity:0},{opacity:1}],{duration:gt,delay:it[rt]*ct,fill:"forwards"});pt.onfinish=()=>{ht-=1,ht===0&&(R.textContent=z,ot==null||ot())}});return}if(jt==="typewriter"){const z=String(Rt);if(!z)return;const R=z.length||1,X=k.current,it=ne(X),ct=je(X,z),ht=X.style.display;X.style.display="inline-flex",X.textContent="";const ft=document.createElement("span");ft.textContent=z,ft.style.overflow="hidden",ft.style.whiteSpace="nowrap",ft.style.width="0",ft.style.willChange="width";const rt=document.createElement("span");rt.textContent="|",rt.style.display="inline-block",rt.style.fontWeight="100",rt.style.marginLeft="1px",rt.style.opacity="0",X.appendChild(ft),X.appendChild(rt);const pt=ft.animate([{width:"0"},{width:`${ct.width}px`}],{duration:gt,easing:`steps(${R}, end)`,fill:"forwards"}),mt=()=>{rt.style.opacity="1"},vt=Math.max(1,gt/R),Ht=setTimeout(mt,vt),_t=rt.animate([{opacity:1,offset:0},{opacity:.3,offset:.5},{opacity:1,offset:1}],{duration:500,iterations:1/0}),fe=()=>{clearTimeout(Ht),_t.cancel(),rt.animate([{opacity:1},{opacity:0}],{duration:120,fill:"forwards"})},ie=()=>{Gt(X,it)&&(fe(),X.textContent=z,X.style.display=ht)};J.current=pt,pt.onfinish=()=>{J.current=null,fe(),setTimeout(()=>{J.current||(X.textContent=z,X.style.display=ht,ot==null||ot())},150)},pt.oncancel=ie;return}if(jt==="splash"){const z=String(Rt);if(!z)return;const R=k.current,X=Nn(R,z);let it=X.length;if(it===0){ot==null||ot();return}X.forEach((ct,ht)=>{const ft=(Math.random()-.5)*32,rt=(Math.random()-.5)*32,pt=(Math.random()-.5)*8,mt=ct.animate([{transform:`translate(${ft}px, ${rt}px) rotate(${pt}deg)`,opacity:0},{transform:"translate(0, 0) rotate(0deg)",opacity:1}],{duration:gt*.8,delay:Math.random()*gt*.3,fill:"forwards",easing:ve});mt.onfinish=()=>{it-=1,it===0&&(R.textContent=z,ot==null||ot())}});return}if(jt==="jitter"){const z=String(Rt);if(!z)return;const R=k.current,X=Nn(R,z);let it=X.length;if(it===0){ot==null||ot();return}X.forEach((ct,ht)=>{const ft=(Math.random()-.5)*8,rt=(Math.random()-.5)*8,pt=(Math.random()-.5)*12,mt=ct.animate([{transform:"translate(0, 0) rotate(0deg)"},{transform:`translate(${ft}px, ${rt}px) rotate(${pt}deg)`,offset:.15},{transform:`translate(${-ft*.6}px, ${-rt*.6}px) rotate(${-pt*.6}deg)`,offset:.35},{transform:`translate(${ft*.3}px, ${rt*.3}px) rotate(${pt*.3}deg)`,offset:.55},{transform:`translate(${-ft*.1}px, ${-rt*.1}px) rotate(${-pt*.1}deg)`,offset:.75},{transform:"translate(0, 0) rotate(0deg)"}],{duration:gt*.6,delay:Math.random()*gt*.2,fill:"forwards",easing:Kl});mt.onfinish=()=>{it-=1,it===0&&(R.textContent=z,ot==null||ot())}});return}if(jt==="popUp"){const z=getComputedStyle(k.current).color,R=Array.from({length:9},(it,ct)=>`0 ${ct+1}px 0 ${z}`).join(", "),X=k.current.animate([{transform:"translateY(0)",textShadow:"none"},{transform:"translateY(-14px)",textShadow:`${R}, 0 14px 16px rgba(0,0,0,0.2)`,offset:.55},{transform:"translateY(0)",textShadow:"none"}],{duration:gt,easing:Ne});J.current=X,X.onfinish=()=>{J.current=null,ot==null||ot()};return}if(jt==="jello"){const z=k.current.animate([{transform:"scale(1, 1)"},{transform:"scale(1.08, 0.94)",offset:.167},{transform:"scale(0.96, 1.06)",offset:.333},{transform:"scale(1.04, 0.97)",offset:.5},{transform:"scale(0.98, 1.02)",offset:.667},{transform:"scale(1.02, 0.99)",offset:.833},{transform:"scale(1, 1)"}],{duration:gt,easing:Ne});J.current=z,z.onfinish=()=>{J.current=null,ot==null||ot()};return}if(jt==="scramble"){let z=function(pt){const mt=pt-rt;if(mt>=ft){ct.forEach((_t,fe)=>{_t.textContent=it[fe],_t.style.willChange="auto"}),k.current.textContent=R,L.current=null,ot==null||ot();return}const vt=mt/ft,Ht=Math.floor(mt/ht)%2===0;ct.forEach((_t,fe)=>{const ie=fe/Math.max(1,ct.length)*.72;vt>=ie?_t.textContent=it[fe]:Ht&&(_t.textContent=X[Math.floor(Math.random()*X.length)])}),L.current=requestAnimationFrame(z)};const R=String(Rt);if(!R)return;const X="!@#$%^&*()_+-=[]{}|;:,.<>?/~`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/░▒▓<>",it=[],ct=Nn(k.current,R,(pt,mt)=>{it.push(mt),pt.style.willChange="contents, opacity"}),ht=42,ft=Math.max(280,Math.min(gt+ct.length*20,ht*Math.max(7,ct.length))),rt=performance.now();L.current=requestAnimationFrame(z);return}if(jt==="wave"){const z=String(Rt);if(!z)return;if(Te()){const ct=k.current.animate([{opacity:0},{opacity:1}],{duration:gt/2,easing:Ne,fill:"forwards"});J.current=ct,ct.onfinish=()=>{k.current.style.textShadow="",J.current=null,ot==null||ot()};return}const R=Nn(k.current,z),X=Math.max(45,Math.min(90,gt*.08)),it=R.length>0?R.length-1:0;R.forEach((ct,ht)=>{const ft=ct.animate([{transform:"translateY(0)",opacity:1},{transform:"translateY(-10px)",opacity:1,offset:.5},{transform:"translateY(0)",opacity:1}],{duration:Math.max(520,gt),delay:ht*X,iterations:1,easing:Pn});ht===0&&(J.current=ft),ht===it&&(ft.onfinish=()=>{k.current.textContent=z,ot==null||ot()})});return}if(jt==="strikeThrough"){const z=I.current!==void 0?String(I.current):null,R=String(Rt);if(!z||!R)return;const X=k.current,it=ne(X);gm(X,z,R);const ct=Number.parseFloat(getComputedStyle(X).fontSize)||16,ht=Math.max(3,Math.round(ct*.12)),ft=document.createElement("span");ft.textContent=z,ft.style.display="inline-block",ft.style.position="relative",ft.style.whiteSpace="pre";const rt=document.createElement("span");rt.style.position="absolute",rt.style.left="0",rt.style.top="50%",rt.style.width="100%",rt.style.height=`${ht}px`,rt.style.marginTop=`${-Math.round(ht/2)}px`,rt.style.background="currentColor",rt.style.borderRadius="2px",rt.style.transform="scaleX(0)",rt.style.transformOrigin="0% 50%",ft.appendChild(rt),X.textContent="",X.appendChild(ft);const pt=gt*.35,mt=gt*.65;rt.animate([{transform:"scaleX(0)"},{transform:"scaleX(1)"}],{duration:pt,easing:Pn,fill:"forwards"});const vt=document.createElement("span");vt.textContent=R,vt.style.display="inline-block",vt.style.whiteSpace="pre",vt.style.position="absolute",vt.style.left="0",vt.style.top="0",vt.style.opacity="0",X.appendChild(vt),ft.animate([{opacity:1},{opacity:0}],{duration:mt,delay:pt,easing:ve,fill:"forwards"});const Ht=vt.animate([{opacity:0},{opacity:1}],{duration:mt,delay:pt,easing:Ne,fill:"forwards"}),_t=X.animate([{opacity:1},{opacity:1}],{duration:pt+mt+50,fill:"forwards"});J.current=_t,Ht.onfinish=()=>{X.textContent=R,J.current=null,ot==null||ot()},_t.oncancel=()=>{Gt(X,it)&&(X.textContent=R)};return}if(jt==="odometer"){const z=String(Rt);if(!z)return;const R=ym(k.current,z),X=40;R.forEach((ct,ht)=>{ct.animate([{transform:"translateY(-100%)",opacity:0},{transform:"translateY(4px)",opacity:1,offset:.7},{transform:"translateY(0)"}],{duration:gt*.5,delay:ht*X,fill:"forwards",easing:Ne})});const it=setTimeout(()=>{k.current.textContent=z,ot==null||ot()},gt*.5+R.length*X+50);nt.current=it;return}if(jt==="ticker"){const z=String(Rt);if(!z)return;const R=ym(k.current,z),X=30;R.forEach((ct,ht)=>{ct.animate([{transform:"translateY(100%)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:gt*.6,delay:ht*X,fill:"forwards",easing:Ne})});const it=setTimeout(()=>{k.current.textContent=z,ot==null||ot()},gt*.6+R.length*X+50);nt.current=it;return}if(jt==="fadeSwap"){const z=ce!==void 0?String(ce):"",R=String(Rt);if(!z&&!R)return;const X=k.current,it=ne(X),{oldEl:ct,newEl:ht,cleanup:ft}=Cs(X,z,R,it);ct.style.opacity="1",ct.style.transform="translateY(0)",ct.style.filter="blur(0px)",ct.style.willChange="transform, opacity, filter",ht.style.opacity="0",ht.style.transform="translateY(0.16em)",ht.style.filter="blur(1.8px)",ht.style.willChange="transform, opacity, filter";const rt=gt*.42,pt=Math.min(80,Math.max(30,gt*.12)),mt=gt*.62,vt=Math.max(rt,pt+mt);ct.animate([{opacity:1,transform:"translateY(0)",filter:"blur(0px)"},{opacity:.72,transform:"translateY(-0.04em)",filter:"blur(0.35px)",offset:.58},{opacity:0,transform:"translateY(-0.14em)",filter:"blur(1.5px)"}],{duration:rt,easing:Pn,fill:"forwards"}),ht.animate([{opacity:0,transform:"translateY(0.16em)",filter:"blur(1.8px)"},{opacity:.78,transform:"translateY(0.025em)",filter:"blur(0.35px)",offset:.55},{opacity:1,transform:"translateY(0)",filter:"blur(0px)"}],{duration:mt,delay:pt,easing:Pn,fill:"forwards"});const Ht=X.animate([{opacity:1},{opacity:1}],{duration:vt,fill:"forwards"});J.current=Ht,Ht.onfinish=()=>{J.current=null,ft(),ot==null||ot()},Ht.oncancel=ft;return}if(jt==="highlight"){const z=k.current,R=ne(z),X=p??Tg(getComputedStyle(z).color,.55),it=gt;z.style.background=`linear-gradient(120deg, ${X} 50%, transparent 50%)`,z.style.backgroundSize="200% 100%",z.style.backgroundRepeat="no-repeat",z.style.backgroundPosition="100% 0",z.style.willChange="transform, opacity";const ct=z.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"0% 0"}],{duration:it,easing:Pn,fill:"forwards",delay:m});J.current=ct,ct.onfinish=()=>{Gt(z,R)&&(J.current=null,z.style.background="",z.style.backgroundSize="",z.style.backgroundRepeat="",z.style.backgroundPosition="",z.style.willChange="auto",ot==null||ot())},ct.oncancel=()=>{z.style.willChange="auto"};return}const xt=Rg(k.current,jt,{duration:gt,easing:v,delay:m,iterations:void 0},Ot==="change"?"change":"single");J.current=xt,xt.onfinish=()=>{J.current=null,ot==null||ot()}},[Ot,jt,Z,m,x,v,Dt,g,o,U]),C.createElement(A,{ref:k,className:j,style:tt,onClick:wt("click")||G?Jt:void 0,onMouseEnter:wt("hover")||Q?le:void 0,onMouseLeave:_?ze:void 0},F)}),Fl={Text:ty};function ey(l){const o=C.useRef(void 0),c=o.current!==void 0&&o.current!==l,s=o.current;return o.current=l,{changed:c,prev:s,current:l}}const ay="cubic-bezier(0.0, 0.0, 0.2, 1)",Rs="cubic-bezier(0.4, 0.0, 1, 1)",Bm="cubic-bezier(0.4, 0.0, 0.2, 1)",Lm="cubic-bezier(0.34, 1.56, 0.64, 1)",De="cubic-bezier(0.25, 0.46, 0.45, 0.94)",Ql=[{opacity:0,transform:"translateY(4px)"},{opacity:1,transform:"translateY(0)"}],Ra=[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-4px)"}],ny={fadeIn:{out:[],in:Ql},fadeOut:{out:Ra,in:[]},fadeSwap:{out:Ra,in:Ql},fadeMask:{out:Ra,in:Ql},morphText:{out:Ra,in:Ql},slideUp:{out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-14px)"}],in:[{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"translateY(0)"}]},slideDown:{out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(14px)"}],in:[{opacity:0,transform:"translateY(-14px)"},{opacity:1,transform:"translateY(0)"}]},slideLeft:{out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-14px)"}],in:[{opacity:0,transform:"translateX(14px)"},{opacity:1,transform:"translateX(0)"}]},slideRight:{out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(14px)"}],in:[{opacity:0,transform:"translateX(-14px)"},{opacity:1,transform:"translateX(0)"}]},slideReplace:{out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-12px)"}],in:[{opacity:0,transform:"translateX(12px)"},{opacity:1,transform:"translateX(0)"}]},popIn:{out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.94)"}],in:[{opacity:0,transform:"scale(0.92)"},{opacity:1,transform:"scale(1.05)",offset:.62},{opacity:1,transform:"scale(1)"}]},popOut:{out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.94)"}],in:[]},expandIn:{out:[{opacity:1,transform:"scaleY(1)",transformOrigin:"top"},{opacity:0,transform:"scaleY(0.92)",transformOrigin:"top"}],in:[{opacity:0,transform:"scaleY(0.92)",transformOrigin:"top"},{opacity:1,transform:"scaleY(1)",transformOrigin:"top"}]},collapseOut:{out:[{opacity:1,transform:"scaleY(1)",transformOrigin:"top"},{opacity:0,transform:"scaleY(0)",transformOrigin:"top"}],in:[]},zoomIn:{out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.96)"}],in:[{opacity:0,transform:"scale(0.96)"},{opacity:1,transform:"scale(1)"}]},zoomOut:{out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.96)"}],in:[]},wordFadeIn:{out:[{opacity:1},{opacity:0}],in:[{opacity:0},{opacity:1}]},wordSlideUp:{out:Ra,in:[{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}]},wordPop:{out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.96)"}],in:[{opacity:0,transform:"scale(0.92)"},{opacity:1,transform:"scale(1.05)",offset:.62},{opacity:1,transform:"scale(1)"}]},lineFadeIn:{out:[{opacity:1},{opacity:0}],in:[{opacity:0},{opacity:1}]},lineSlideUp:{out:Ra,in:[{opacity:0,transform:"translateY(12px)"},{opacity:1,transform:"translateY(0)"}]},streamIn:{out:[{opacity:1},{opacity:0}],in:[{opacity:0},{opacity:1}]},streamFade:{out:[{opacity:1},{opacity:0}],in:[{opacity:0},{opacity:1}]},streamSlide:{out:Ra,in:[{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}]},cursorBlink:{out:[{opacity:1},{opacity:0}],in:[{opacity:0},{opacity:1}]},expandCollapse:{out:Ra,in:Ql},heightAuto:{out:Ra,in:Ql},crossFade:{out:[{opacity:1},{opacity:0}],in:[{opacity:0},{opacity:1}]},pulse:{out:[{opacity:1,transform:"scale(1)"},{opacity:1,transform:"scale(0.98)"}],in:[{opacity:1,transform:"scale(1)"},{opacity:1,transform:"scale(1.03)",offset:.5},{opacity:1,transform:"scale(1)"}]},shake:{out:Ra,in:[{opacity:1,transform:"translateX(0)"},{opacity:1,transform:"translateX(-6px)",offset:.2},{opacity:1,transform:"translateX(6px)",offset:.4},{opacity:1,transform:"translateX(-4px)",offset:.6},{opacity:1,transform:"translateX(4px)",offset:.8},{opacity:1,transform:"translateX(0)"}]},highlight:{out:[{opacity:1},{opacity:1}],in:[]},flash:{out:[],in:[]},pushLeft:{out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-18px)"}],in:[{opacity:0,transform:"translateX(18px)"},{opacity:1,transform:"translateX(0)"}]},pushRight:{out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(18px)"}],in:[{opacity:0,transform:"translateX(-18px)"},{opacity:1,transform:"translateX(0)"}]},flipPage:{out:[{opacity:1,transform:"perspective(800px) rotateY(0deg)"},{opacity:0,transform:"perspective(800px) rotateY(-32deg)"}],in:[{opacity:0,transform:"perspective(800px) rotateY(32deg)"},{opacity:1,transform:"perspective(800px) rotateY(0deg)"}]},morphBlur:{out:[{opacity:1,filter:"blur(0px)",transform:"translateY(0)"},{opacity:.2,filter:"blur(4px)",transform:"translateY(-4px)"}],in:[{opacity:.2,filter:"blur(4px)",transform:"translateY(4px)"},{opacity:1,filter:"blur(0px)",transform:"translateY(0)"}]},diffAnimate:{out:[],in:[]},scrollWordReveal:{out:[],in:[]}};let An=null;function ly(){return An||(An=document.createElement("div"),An.style.position="absolute",An.style.visibility="hidden",An.style.pointerEvents="none",An.style.whiteSpace="pre-wrap",An.style.width="max-content"),An}function Jl(l,o){const c=ly();c.textContent=o||" ";const s=getComputedStyle(l);c.style.whiteSpace=s.whiteSpace||"pre-wrap";const d=l.clientWidth||l.getBoundingClientRect().width;d>0?(c.style.width=`${d}px`,c.style.maxWidth=`${d}px`):(c.style.width="max-content",c.style.maxWidth="none"),l.appendChild(c);const p=c.getBoundingClientRect();return c.remove(),{width:p.width,height:p.height}}function mu(){var l;return typeof window>"u"?!1:((l=window.matchMedia)==null?void 0:l.call(window,"(prefers-reduced-motion: reduce)").matches)??!1}function iy(l){l.getAnimations({subtree:!0}).forEach(o=>o.cancel())}function ry(l){let o=l.parentElement;for(;o&&o!==document.body&&o!==document.documentElement;){const c=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(`${c.overflowY}${c.overflow}`)&&o.scrollHeight>o.clientHeight)return o;o=o.parentElement}return null}function Pi(l,o){const c=ry(l),s=(c==null?void 0:c.clientHeight)??window.innerHeight,d=Math.min(.95,Math.max(.05,o)),p=Math.round(s*Math.min(.48,d/2));return{root:c,rootMargin:`-${p}px 0px -${p}px 0px`,threshold:0}}function sy(l,o,c){if(!o||Object.keys(o).length===0)return null;const s={},d={};for(const[g,x]of Object.entries(o))s[g]=x[0],d[g]=x[1];for(const[g,x]of Object.entries(s))l.style[g]=x;const p=l.animate([s,d],{...c,fill:"forwards"});return p.addEventListener("finish",()=>{for(const[g,x]of Object.entries(o))l.style[g]=String(x[1])}),p}function Ms(l){const o=l.match(/\S+|\s+/g)||[],c=[];for(const s of o)if(/^\s+$/.test(s))c.push(document.createTextNode(s));else{const d=document.createElement("span");d.textContent=s,c.push(d)}return c}function oy(l,o){if(l.length<=1)return[l];const c=getComputedStyle(o),s=document.createElement("div");s.style.position="absolute",s.style.visibility="hidden",s.style.pointerEvents="none",s.style.left="0",s.style.top="0",s.style.width=`${o.clientWidth||o.getBoundingClientRect().width}px`,s.style.whiteSpace="pre-wrap",s.style.wordBreak="break-word",s.style.overflowWrap="break-word",s.style.font=c.font,s.style.lineHeight=c.lineHeight,s.style.letterSpacing=c.letterSpacing,s.style.wordSpacing=c.wordSpacing,s.style.padding="0",s.style.margin="0",s.textContent=l,o.appendChild(s);const d=s.firstChild;if(!d)return s.remove(),[l];const p=[],g=document.createRange();let x=0;for(;x<l.length;){if(g.setStart(d,x),g.setEnd(d,l.length),g.getClientRects().length<=1){p.push(l.slice(x));break}let m=x,y=l.length;for(;m<y-1;){const S=Math.ceil((m+y)/2);g.setStart(d,x),g.setEnd(d,S),g.getClientRects().length>1?y=S:m=S}p.push(l.slice(x,m)),x=m}return s.remove(),p}function As(l,o){if(o&&l.length>15){const s=oy(l,o);if(s.length>1)return s.map(d=>{const p=document.createElement("div");return p.textContent=d||" ",p})}return l.split(`
`).map(s=>{const d=document.createElement("div");return d.textContent=s||" ",d})}function cy(l,o,c,s,d){const p=o??"",g=c??l.textContent??"";if(!g)return;if(mu()){const{oldEl:_,newEl:Y,cleanup:F}=nl(l,p,g);_.animate([{opacity:1},{opacity:0}],{duration:s/2,easing:Rs,fill:"forwards"});const B=Y.animate([{opacity:0},{opacity:1}],{duration:s/2,easing:De,fill:"forwards"});return B.onfinish=()=>{F(),d==null||d()},B.oncancel=F,B}const x=Math.max(p.length,g.length),{oldEl:v,newEl:m,cleanup:y}=nl(l,p,g);let S=!1;const T=()=>{S||(S=!0,y(),d==null||d())},A=()=>{S||(S=!0,y())};v.textContent="";for(let _=0;_<x;_++){const Y=document.createElement("span");Y.textContent=p[_]||" ",Y.style.display="inline-block",Y.style.willChange="transform, opacity",v.appendChild(Y)}m.textContent="";for(let _=0;_<x;_++){const Y=document.createElement("span");Y.textContent=g[_]||" ",Y.style.display="inline-block",Y.style.willChange="transform, opacity",Y.style.opacity="0",m.appendChild(Y)}const j=Array.from(v.children),tt=Array.from(m.children);let G=x*2;const O=Math.max(120,s*.35);if(j.forEach((_,Y)=>{if(!(Y>=g.length||p[Y]!==g[Y])&&Y<g.length&&p[Y]===g[Y]){G--;return}const B=_.animate([{opacity:1,transform:"translateY(0) scale(1)"},{opacity:0,transform:"translateY(-6px) scale(0.9)"}],{duration:O,easing:Rs,fill:"forwards"});B.onfinish=()=>{G--,G<=0&&T()},B.oncancel=A}),tt.forEach((_,Y)=>{if(!(Y>=p.length||p[Y]!==g[Y])){_.style.opacity="1",G--;return}const B=_.animate([{opacity:0,transform:"translateY(6px) scale(0.9)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:O,delay:Math.min(40,O*.2),easing:Lm,fill:"forwards"});B.onfinish=()=>{G--,G<=0&&T()},B.oncancel=A}),G<=0){T();return}const V=O+Math.min(40,O*.2)+O,Q=l.animate([{opacity:1},{opacity:1}],{duration:V,fill:"forwards"});return Q.oncancel=A,Q}function uy(l,o,c,s,d){const p=o??"",g=c??l.textContent??"";if(!p&&!g)return;const{oldEl:x,newEl:v,cleanup:m}=nl(l,p,g);x.style.opacity="1",x.style.transform="translateY(0)",x.style.filter="blur(0px)",x.style.willChange="transform, opacity, filter",v.style.opacity="0",v.style.transform="translateY(0.16em)",v.style.filter="blur(1.8px)",v.style.willChange="transform, opacity, filter",x.animate([{opacity:1,transform:"translateY(0)",filter:"blur(0px)"},{opacity:.72,transform:"translateY(-0.04em)",filter:"blur(0.35px)",offset:.58},{opacity:0,transform:"translateY(-0.14em)",filter:"blur(1.5px)"}],{duration:Math.max(150,s*.42),easing:De,fill:"forwards"});const y=v.animate([{opacity:0,transform:"translateY(0.16em)",filter:"blur(1.8px)"},{opacity:.78,transform:"translateY(0.025em)",filter:"blur(0.35px)",offset:.55},{opacity:1,transform:"translateY(0)",filter:"blur(0px)"}],{duration:Math.max(220,s*.62),delay:Math.min(80,Math.max(30,s*.12)),easing:De,fill:"forwards"});return y.onfinish=()=>{m(),d==null||d()},y.oncancel=m,y}function Wc(l,o,c,s,d,p){const g=o??"",x=c??l.textContent??"";if(!g&&!x)return;const{oldEl:v,newEl:m,cleanup:y}=nl(l,g,x);m.style.transform=`translateX(${100*s}%)`,v.animate([{transform:"translateX(0)"},{transform:`translateX(${-100*s}%)`}],{duration:d*.4,easing:Rs,fill:"forwards"});const S=m.animate([{transform:`translateX(${100*s}%)`},{transform:"translateX(0)"}],{duration:d*.6,easing:ay,fill:"forwards"});return S.onfinish=()=>{y(),p==null||p()},S.oncancel=y,S}function fy(l,o,c,s,d){const p=o??"",g=c??l.textContent??"";if(!p&&!g)return;const{oldEl:x,newEl:v,cleanup:m}=nl(l,p,g);x.style.opacity="1",v.style.opacity="0",x.animate([{opacity:1},{opacity:0}],{duration:s,easing:De,fill:"forwards"});const y=v.animate([{opacity:0},{opacity:1}],{duration:s,easing:De,fill:"forwards"});return y.onfinish=()=>{m(),d==null||d()},y.oncancel=m,y}function dy(l,o,c){const s=getComputedStyle(l).color,d=document.createElement("div");d.style.position="absolute",d.style.inset="0",d.style.background=`linear-gradient(to bottom, ${s} 0%, transparent 100%)`,d.style.pointerEvents="none";const p=l.style.position,g=l.style.overflow;l.style.position="relative",l.style.overflow="hidden",l.appendChild(d);const x=d.animate([{transform:"translateY(0%)"},{transform:"translateY(-100%)"}],{duration:o,easing:Bm,fill:"forwards"}),v=()=>{d.remove(),l.style.position=p,l.style.overflow=g};return x.onfinish=()=>{v(),c==null||c()},x.oncancel=v,x}function Xm(l){return l.map(o=>{const{transform:c,...s}=o;return s})}function Ts(l,o,c,s,d,p,g){if(o.length>30){const A=As(o,l);if(A.length>1){l.textContent="";for(const O of A)O.style.willChange="transform, opacity",l.appendChild(O);let j=A.length;const tt=(A.length-1)*(d*2),G=s+tt;return A.forEach((O,V)=>{const Q=O.animate(c,{duration:s,delay:V*(d*2),fill:"forwards",easing:p});Q.onfinish=()=>{j--,j===0&&(A.forEach(_=>_.style.willChange="auto"),g==null||g())}}),l.animate([{opacity:1},{opacity:1}],{duration:G,fill:"forwards"})}}const x=Xm(c),v=Ms(o);l.textContent="";const m=[];for(const A of v)l.appendChild(A),A instanceof HTMLSpanElement&&(m.push(A),A.style.willChange="opacity");if(m.length===0){g==null||g();return}let y=m.length;const S=(m.length-1)*d,T=s+S;return m.forEach((A,j)=>{const tt=A.animate(x,{duration:s,delay:j*d,fill:"forwards",easing:p});tt.onfinish=()=>{y--,y===0&&(m.forEach(G=>G.style.willChange="auto"),g==null||g())}}),l.animate([{opacity:1},{opacity:1}],{duration:T,fill:"forwards"})}function xm(l,o,c,s,d,p,g){const x=As(o,l);l.textContent="";for(const S of x)S.style.willChange="transform, opacity",l.appendChild(S);if(x.length===0){g==null||g();return}let v=x.length;const m=(x.length-1)*d,y=s+m;return x.forEach((S,T)=>{const A=S.animate(c,{duration:s,delay:T*d,fill:"forwards",easing:p});A.onfinish=()=>{v--,v===0&&(x.forEach(j=>j.style.willChange="auto"),g==null||g())}}),l.animate([{opacity:1},{opacity:1}],{duration:y,fill:"forwards"})}function Fc(l,o,c,s,d,p,g,x){const m=c??l.textContent??"";if(!m)return;const y=m.startsWith("")&&m.length>0,S=y?m.slice(0):m;if(!S)return;const T=Xm(s),A=S.match(/\S+|\s+/g)||[];if(A.length===0){x==null||x();return}if(y){l.textContent="",A.forEach((G,O)=>{if(/^\s+$/.test(G))l.appendChild(document.createTextNode(G));else{const V=document.createElement("span");V.textContent=G,V.style.willChange="opacity",V.animate(T,{duration:d,delay:O*p,fill:"forwards",easing:g}),l.appendChild(V)}});const j=d+A.length*p+50,tt=l.animate([{opacity:1},{opacity:1}],{duration:j,fill:"forwards"});return tt.onfinish=()=>x==null?void 0:x(),tt}else return Ts(l,m,s,d,p,g,x)}function py(l,o,c,s,d){const p=ks(l)??l,g=o||p.textContent||"",x=As(g,p);if(x.length===0){d==null||d();return}const v={minHeight:p.style.minHeight,overflow:p.style.overflow},m=p.getBoundingClientRect();m.height>0&&(p.style.minHeight=v.minHeight||`${Math.ceil(m.height)}px`),p.style.overflow="visible";const y=s??ou(getComputedStyle(p).color,.55);p.textContent="";const S=[],T=[];for(const k of x){const J=k.textContent||" ",dt=document.createElement("span"),L=document.createElement("span");L.textContent=J,L.style.willChange="background-size, background-position",L.style.background=`linear-gradient(120deg, ${y} 50%, transparent 50%)`,L.style.backgroundSize="200% 100%",L.style.backgroundRepeat="no-repeat",L.style.backgroundPosition="100% 0",L.style.borderRadius="0.18em",L.style.paddingInline="0.08em",L.style.marginInline="-0.08em",L.style.boxDecorationBreak="clone",L.style.webkitBoxDecorationBreak="clone",dt.style.display="block",dt.style.margin="0",dt.style.padding="0",dt.style.lineHeight="inherit",dt.appendChild(L),S.push(L),T.push(dt),p.appendChild(dt)}let A=T.length;const j=70,tt=(T.length-1)*j,G=Math.max(260,c),O=140,V=G+tt+O;let Q=!1,_=!1,Y=null;const F=()=>{Q||(Q=!0,Y!==null&&(window.clearTimeout(Y),Y=null),S.forEach(k=>{k.style.willChange="auto",k.style.background="",k.style.backgroundSize="",k.style.backgroundRepeat="",k.style.backgroundPosition=""}),T.some(k=>k.parentElement===p)&&(p.textContent=g),p.style.minHeight=v.minHeight,p.style.overflow=v.overflow)};S.forEach((k,J)=>{const dt=k.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"0% 0"}],{duration:G,delay:J*j,fill:"forwards",easing:De});dt.onfinish=()=>{A--,A===0&&(Y=window.setTimeout(()=>{Y=null,!_&&(F(),d==null||d())},O))},dt.oncancel=()=>{_=!0,F()}});const B=p.animate([{opacity:1},{opacity:1}],{duration:V,fill:"forwards"});return B.oncancel=()=>{_=!0,F()},B}function my(l,o,c,s,d){const p=o??"",g=ks(l)??l,x=c??g.textContent??"";if(!x)return;const v=p.match(/\S+|\s+/g)||[],m=x.match(/\S+|\s+/g)||[],y={minHeight:g.style.minHeight,overflow:g.style.overflow},S=g.getBoundingClientRect();S.height>0&&(g.style.minHeight=y.minHeight||`${Math.ceil(S.height)}px`),g.style.overflow="visible",g.textContent="";const T=[];for(let Q=0;Q<m.length;Q++){const _=m[Q];if(/^\s+$/.test(_))g.appendChild(document.createTextNode(_));else{const Y=document.createElement("span");Y.textContent=_,Y.style.willChange="transform, opacity, filter",Y.style.display="inline-block",(Q>=v.length||v[Q]!==_)&&Y.setAttribute("data-diff",""),g.appendChild(Y),(Q>=v.length||v[Q]!==_)&&T.push(Y)}}let A=!1;const j=()=>{A||(A=!0,T.forEach(Q=>{Q.style.willChange="auto",Q.style.transform="",Q.style.filter=""}),(T.length===0||T.some(Q=>Q.parentElement===g))&&(g.textContent=x),g.style.minHeight=y.minHeight,g.style.overflow=y.overflow)};if(T.length===0){j(),d==null||d();return}let tt=T.length;const G=(T.length-1)*30,O=s+G;T.forEach((Q,_)=>{const Y=Q.animate([{opacity:0,transform:"translateY(0.16em)",filter:"blur(1.5px)"},{opacity:1,transform:"translateY(0)",filter:"blur(0px)"}],{duration:s,delay:_*30,fill:"forwards",easing:De});Y.onfinish=()=>{tt--,tt===0&&(j(),d==null||d())},Y.oncancel=j});const V=g.animate([{opacity:1},{opacity:1}],{duration:O,fill:"forwards"});return V.oncancel=j,V}function vm(l,o,c,s,d){const p=o??"",g=c??"",x=p?Jl(l,p).height:0,v=g?Jl(l,g).height:l.scrollHeight;if(!x&&!v){d==null||d();return}if(x===v){d==null||d();return}const{oldEl:m,newEl:y,cleanup:S}=nl(l,p,g);l.style.minHeight="",l.style.overflow="hidden",l.style.height=`${Math.ceil(x)}px`,l.offsetHeight;const T=l.animate([{height:`${Math.ceil(x)}px`},{height:`${Math.ceil(v)}px`}],{duration:s,easing:Bm,fill:"forwards"});function A(){l.style.overflow="",l.style.height="",l.style.minHeight=""}return T.onfinish=()=>{A(),S(),d==null||d()},T.oncancel=()=>{A(),S()},T}function $m(l,o,c=.4,s){const d=ks(l),p=o||(d==null?void 0:d.textContent)||l.textContent||"",g=p.length>20;if(d&&!g){const j=l.style.width,tt=l.style.minHeight,G=l.style.overflow,O=Ms(p),V=O.filter(Y=>Y instanceof HTMLSpanElement);if(V.length===0){s==null||s();return}l.style.width=j||`${Math.ceil(l.getBoundingClientRect().width)}px`,l.style.minHeight=tt||`${Math.ceil(l.getBoundingClientRect().height)}px`,l.style.overflow="hidden";const Q=d.innerHTML;d.textContent="";for(const Y of O)d.appendChild(Y),Y instanceof HTMLSpanElement&&(Y.style.opacity="0.18",Y.style.transition="opacity 120ms linear",Y.style.willChange="opacity");const _=new IntersectionObserver(Y=>{for(const F of Y)if(F.isIntersecting){const B=F.target;B.style.opacity="1",_.unobserve(B)}},Pi(l,c));return V.forEach(Y=>_.observe(Y)),()=>{_.disconnect(),V.forEach(Y=>Y.style.willChange="auto"),d.innerHTML=Q,l.style.width=j,l.style.minHeight=tt,l.style.overflow=G,s==null||s()}}if(g){const tt=As(p,d||l);if(tt.length<=1){if(!d){const F=l.style.width,B=l.style.minHeight,k=l.style.overflow,J=l.getBoundingClientRect(),dt=Ms(p),L=dt.filter(st=>st instanceof HTMLSpanElement);if(L.length===0){s==null||s();return}l.textContent="",l.style.width=F||`${Math.ceil(J.width)}px`,l.style.minHeight=B||`${Math.ceil(J.height)}px`,l.style.overflow="hidden";for(const st of dt)l.appendChild(st),st instanceof HTMLSpanElement&&(st.style.opacity="0.18",st.style.transition="opacity 120ms linear",st.style.willChange="opacity");const nt=new IntersectionObserver(st=>{for(const Ct of st)if(Ct.isIntersecting){const St=Ct.target;St.style.opacity="1",nt.unobserve(St)}},Pi(l,c));return L.forEach(st=>nt.observe(st)),()=>{nt.disconnect(),L.forEach(st=>st.style.willChange="auto"),l.textContent=p,l.style.width=F,l.style.minHeight=B,l.style.overflow=k,s==null||s()}}s==null||s();return}const G=d||l,O=l.style.width,V=l.style.minHeight,Q=l.style.overflow,_=G.innerHTML;l.style.width=O||`${Math.ceil(l.getBoundingClientRect().width)}px`,l.style.minHeight=V||`${Math.ceil(l.getBoundingClientRect().height)}px`,l.style.overflow="hidden",G.textContent="";for(const F of tt)F.style.opacity="0",F.style.transition=`opacity 500ms ${De}`,F.style.willChange="opacity",G.appendChild(F);const Y=new IntersectionObserver(F=>{for(const B of F)if(B.isIntersecting){const k=B.target;k.style.opacity="1",Y.unobserve(k)}},Pi(l,c));return tt.forEach(F=>Y.observe(F)),()=>{Y.disconnect(),tt.forEach(F=>F.style.willChange="auto"),G.innerHTML=_,l.style.width=O,l.style.minHeight=V,l.style.overflow=Q,s==null||s()}}const x=l.style.width,v=l.style.minHeight,m=l.style.overflow,y=l.getBoundingClientRect(),S=Ms(p),T=S.filter(j=>j instanceof HTMLSpanElement);if(T.length===0){s==null||s();return}l.textContent="",l.style.width=x||`${Math.ceil(y.width)}px`,l.style.minHeight=v||`${Math.ceil(y.height)}px`,l.style.overflow="hidden";for(const j of S)l.appendChild(j),j instanceof HTMLSpanElement&&(j.style.opacity="0.18",j.style.transition="opacity 120ms linear",j.style.willChange="opacity");const A=new IntersectionObserver(j=>{for(const tt of j)if(tt.isIntersecting){const G=tt.target;G.style.opacity="1",A.unobserve(G)}},Pi(l,c));return T.forEach(j=>A.observe(j)),()=>{A.disconnect(),T.forEach(j=>j.style.willChange="auto"),l.style.width=x,l.style.minHeight=v,l.style.overflow=m,l.textContent=p,s==null||s()}}function ks(l){const o=l.querySelector("p");if(o&&o!==l)return o;const c=l.lastElementChild;return c&&c!==l?c:null}function nl(l,o,c){const s=getComputedStyle(l),d=ks(l),p={position:l.style.position,minWidth:l.style.minWidth,minHeight:l.style.minHeight,overflow:l.style.overflow};if(l.style.position="relative",l.style.overflow="hidden",l.offsetHeight>0&&(l.style.minHeight=`${l.offsetHeight}px`),d){let tt=function(){B.remove(),k.remove(),d.style.visibility=Y,Object.assign(l.style,p)};const G=getComputedStyle(d),O=l.getBoundingClientRect(),V=d.getBoundingClientRect(),Q=V.top-O.top,_=V.left-O.left,Y=d.style.visibility;d.style.visibility="hidden";const F={position:"absolute",left:`${_}px`,right:"0",top:`${Q}px`,pointerEvents:"none",font:G.font,lineHeight:G.lineHeight,color:G.color,textAlign:G.textAlign,whiteSpace:G.whiteSpace,margin:"0",padding:G.padding,boxSizing:"border-box",display:"block"},B=document.createElement("div");B.textContent=o,Object.assign(B.style,F);const k=document.createElement("div");return k.textContent=c,Object.assign(k.style,F),l.appendChild(B),l.appendChild(k),{oldEl:B,newEl:k,cleanup:tt}}const g=Jl(l,o).height,x=Jl(l,c).height,v=l.getBoundingClientRect(),m=Math.max(g,x,v.height),y=l.innerHTML;m>0&&(l.style.minHeight=`${Math.ceil(m)}px`);const S={position:"absolute",left:"0",top:"0",width:"100%",height:"100%",display:"block",textAlign:s.textAlign,font:s.font,color:s.color,lineHeight:s.lineHeight,whiteSpace:"pre-wrap",pointerEvents:"none",boxSizing:"border-box",margin:"0",padding:"0",overflow:"hidden"},T=document.createElement("div");T.innerHTML=y,Object.assign(T.style,S);const A=document.createElement("div");A.innerHTML=y,Object.assign(A.style,S),l.appendChild(T),l.appendChild(A);function j(){T.remove(),A.remove(),l.innerHTML=y,Object.assign(l.style,p)}return{oldEl:T,newEl:A,cleanup:j}}function hy(l,o,c){const s=Jl(l,o),d=Jl(l,c),p=l.getBoundingClientRect(),g=Math.ceil(Math.max(s.width,d.width,p.width)),x=Math.ceil(Math.max(s.height,d.height,p.height));g>0&&(l.style.minWidth=`${g}px`),x>0&&(l.style.minHeight=`${x}px`)}function kn(l,o,c,s,d,p){const g=o??"",x=c??l.textContent??"";if(!x)return;const{oldEl:v,newEl:m,cleanup:y}=nl(l,g,x);let S=!1;const T=()=>{S||(S=!0,y())},A=()=>{T(),d==null||d()};v.animate([{opacity:1},{opacity:0}],{duration:Math.min(120,s*.3),easing:Rs,fill:"forwards"});const j=p(m,x,s,A);if(!j){A();return}const tt=j.oncancel;return j.oncancel=G=>{tt==null||tt.call(j,G),T()},j}const gy={morphText:(l,o,c,s,d)=>cy(l,o,c,s,d),fadeSwap:(l,o,c,s,d)=>uy(l,o,c,s,d),slideReplace:(l,o,c,s,d)=>Wc(l,o,c,1,s,d),pushLeft:(l,o,c,s,d)=>Wc(l,o,c,1,s,d),pushRight:(l,o,c,s,d)=>Wc(l,o,c,-1,s,d),crossFade:(l,o,c,s,d)=>fy(l,o,c,s,d),fadeMask:(l,o,c,s,d)=>dy(l,s,d),wordFadeIn:(l,o,c,s,d)=>kn(l,o,c,s,d,(p,g,x,v)=>Ts(p,g,Ic,350,30,De,v)),wordSlideUp:(l,o,c,s,d)=>kn(l,o,c,s,d,(p,g,x,v)=>Ts(p,g,bm,350,30,De,v)),wordPop:(l,o,c,s,d)=>kn(l,o,c,s,d,(p,g,x,v)=>Ts(p,g,yy,350,30,De,v)),lineFadeIn:(l,o,c,s,d)=>kn(l,o,c,s,d,(p,g,x,v)=>xm(p,g,xy,s*.6,80,De,v)),lineSlideUp:(l,o,c,s,d)=>kn(l,o,c,s,d,(p,g,x,v)=>xm(p,g,vy,s*.6,80,De,v)),streamIn:(l,o,c,s,d)=>kn(l,o,c,s,d,(p,g,x,v)=>Fc(p,void 0,g,Ic,300,80,De,v)),streamFade:(l,o,c,s,d)=>kn(l,o,c,s,d,(p,g,x,v)=>Fc(p,void 0,g,Ic,300,80,De,v)),streamSlide:(l,o,c,s,d)=>kn(l,o,c,s,d,(p,g,x,v)=>Fc(p,void 0,g,bm,300,80,De,v)),diffAnimate:(l,o,c,s,d)=>my(l,o,c,Math.max(260,s),d),highlight:(l,o,c,s,d,p)=>py(l,c??"",Math.max(280,s),p,d),scrollWordReveal:(l,o,c)=>{$m(l,String(c??l.textContent??""))},expandCollapse:(l,o,c,s,d)=>vm(l,o,c,s,d),heightAuto:(l,o,c,s,d)=>vm(l,o,c,s,d)},Ic=[{opacity:0},{opacity:1}],bm=[{opacity:0,transform:"translateY(6px)"},{opacity:1,transform:"translateY(0)"}],yy=[{opacity:0,transform:"scale(0.92)"},{opacity:1,transform:"scale(1.04)",offset:.55},{opacity:1,transform:"scale(1)"}],xy=[{opacity:0},{opacity:1}],vy=[{transform:"translateY(8px)",opacity:0},{transform:"translateY(0)",opacity:1}];function ou(l,o){if(!l)return`rgba(0, 0, 0, ${o})`;const c=l.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(c)return`rgba(${c[1]}, ${c[2]}, ${c[3]}, ${o})`;if(l.startsWith("oklch(")||l.startsWith("lab(")||l.startsWith("hsl(")){const s=document.createElement("div");s.style.color=l,document.body.appendChild(s);const d=getComputedStyle(s).color;s.remove();const p=d.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(p)return`rgba(${p[1]}, ${p[2]}, ${p[3]}, ${o})`}return`rgba(0, 0, 0, ${o})`}function by(l,o){const c=o[0];c&&(c.opacity!==void 0&&(l.style.opacity=String(c.opacity)),c.transform!==void 0&&(l.style.transform=String(c.transform)))}function Sy(l,o){const c=o[o.length-1];c&&(c.opacity!==void 0&&(l.style.opacity=String(c.opacity)),c.transform!==void 0&&(l.style.transform=String(c.transform)))}function wy(l,o,c,s="single"){if(l.style.willChange="transform, opacity",o==="highlight"){const v=ou(getComputedStyle(l).color,.5);l.style.background=`linear-gradient(to right, ${v} 50%, transparent 50%)`,l.style.backgroundSize="200% 100%",l.style.backgroundRepeat="no-repeat",l.style.backgroundPosition="100% 0";const m=c.duration??280,y=l.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"0% 0"}],{duration:m,easing:De,fill:"forwards"}),S=()=>{l.style.background="",l.style.backgroundSize="",l.style.backgroundRepeat="",l.style.backgroundPosition="",l.style.willChange="auto"};return y.addEventListener("finish",S),y.addEventListener("cancel",S),y}if(o==="flash"){const v=ou(getComputedStyle(l).color,.6);l.style.backgroundColor=v;const m=c.duration??280,y=l.animate([{backgroundColor:v},{backgroundColor:"rgba(0,0,0,0)"}],{duration:m,easing:De,fill:"forwards"}),S=()=>{l.style.backgroundColor="",l.style.willChange="auto"};return y.addEventListener("finish",S),y.addEventListener("cancel",S),y}const d=ny[o];if(!d){const v=l.animate([],c);return v.addEventListener("finish",()=>{l.style.willChange="auto"}),v.addEventListener("cancel",()=>{l.style.willChange="auto"}),v}const p=s==="change"?[...d.out,...d.in]:d.in.length?[...d.in]:[...d.out],g=mu()?p.map(({opacity:v})=>({opacity:v??1})):p;by(l,g);const x=l.animate(g,{...c,fill:"forwards"});return x.addEventListener("finish",()=>{Sy(l,g),l.style.willChange="auto"}),x.addEventListener("cancel",()=>{l.style.willChange="auto"}),x}const Cy=C.forwardRef(function({value:o,trigger:c="change",animation:s,scrollAnimation:d,properties:p,highlightColor:g,duration:x=300,easing:v=Lm,delay:m=0,threshold:y=.4,repeat:S=!1,once:T,as:A="div",className:j,style:tt,onClick:G,onEnter:O,onExit:V,onHoverStart:Q,onHoverEnd:_,onAnimationEnd:Y,children:F},B){const k=C.useRef(null),J=C.useRef(null),dt=C.useRef(null),L=C.useRef(null),nt=C.useRef(null),st=C.useRef(null),Ct=C.useRef(0),St=C.useRef(o),D=C.useRef(!1),Z=C.useRef([]),$=C.useRef(0),lt=C.useRef(!1),[W,b]=C.useState(0),[U,I]=C.useState(null),{changed:ut,prev:yt,current:wt}=ey(o),Ot=C.useRef(yt);ut&&(Ot.current=yt);const jt=T??!S,Ut=C.useMemo(()=>Array.isArray(c)?c.slice(0,2):[c],[c]),kt=C.useCallback(Nt=>Ut.includes(Nt),[Ut]),ot=((U==null?void 0:U.source)??Ut[0]??"change")==="scroll"&&d?d:s,ae=C.useCallback(()=>{st.current!==null&&(clearTimeout(st.current),st.current=null),D.current=!1,J.current=null,Y==null||Y();const Nt=Z.current.shift();Nt?(D.current=!0,I({id:++$.current,source:Nt}),b(gt=>gt+1)):I(null)},[Y]),Xt=C.useCallback(Nt=>{if(D.current){Nt!=="scroll"&&(Z.current=[...Z.current,Nt].slice(-2));return}D.current=!0,I({id:++$.current,source:Nt}),b(gt=>gt+1)},[]),Jt=C.useCallback(()=>Xt("manual"),[Xt]);C.useImperativeHandle(B,()=>({animate:Jt,get element(){return k.current}}),[Jt]),C.useEffect(()=>{if(!kt("scroll"))return;const Nt=k.current;if(!Nt)return;lt.current=!1;const gt=new IntersectionObserver(([ce])=>{if(ce.isIntersecting){if(lt.current)return;lt.current=!0,O==null||O(),Xt("scroll"),jt&&gt.disconnect()}else lt.current=!1,S&&(V==null||V())},Pi(Nt,y));return gt.observe(Nt),()=>gt.disconnect()},[kt,O,V,S,Xt,jt,y]),C.useEffect(()=>{kt("change")&&ut&&Xt("change")},[ut,kt,Xt]),C.useEffect(()=>{kt("mount")&&Xt("mount")},[kt,Xt]);const le=C.useCallback(Nt=>{G==null||G(Nt),kt("click")&&Xt("click")},[kt,G,Xt]),ze=C.useCallback(()=>{Q==null||Q(),kt("hover")&&Xt("hover")},[kt,Q,Xt]),Rt=C.useCallback(()=>_==null?void 0:_(),[_]);return C.useEffect(()=>{if(ot!=="scrollWordReveal"||!kt("scroll")||!U||U.source!=="scroll")return;const Nt=k.current;if(!Nt)return;const gt=String(o??Nt.textContent??"");if(!gt)return;const ce=$m(Nt,gt,y,ae);return()=>ce==null?void 0:ce()},[ot,U,ae,kt,y,o]),o!==St.current&&k.current&&(Ct.current=k.current.offsetHeight),St.current=o,C.useLayoutEffect(()=>{var R;if(W<=0||!U||!k.current||ot==="scrollWordReveal"&&U.source==="scroll")return;iy(k.current),J.current=null,dt.current=null,(R=L.current)==null||R.call(L),nt.current!==null&&clearTimeout(nt.current),st.current!==null&&(clearTimeout(st.current),st.current=null);const Nt=k.current,gt=U.source==="change"?wt:o??Nt.textContent??"",ce=String(gt),Je=mu()?x/2:x,ue=U.source==="change"?Ot.current:void 0;st.current=setTimeout(()=>{st.current=null,ae()},Math.max(900,Je*2+600)),U.source==="change"&&ue!==void 0&&hy(Nt,String(ue),ce),dt.current=sy(Nt,p,{duration:Je,easing:v,delay:m});const xt=gy[ot];if(xt){J.current=xt(Nt,ue!==void 0?String(ue):void 0,ce,Je,ae,g)??null;return}const z=wy(Nt,ot,{duration:Je,easing:v,delay:m},U.source==="change"?"change":"single");J.current=z,z.onfinish=ae},[ot,U,m,x,v,ae,g,W,yt,p,o,wt]),C.useEffect(()=>()=>{var Nt,gt,ce;(Nt=J.current)==null||Nt.cancel(),(gt=dt.current)==null||gt.cancel(),(ce=L.current)==null||ce.call(L),nt.current!==null&&clearTimeout(nt.current),st.current!==null&&clearTimeout(st.current),Z.current=[]},[]),C.createElement(A,{ref:k,className:j,style:tt,onClick:kt("click")||G?le:void 0,onMouseEnter:kt("hover")||Q?ze:void 0,onMouseLeave:_?Rt:void 0},F)}),Il={Paragraph:Cy},My="cubic-bezier(0.34, 1.56, 0.64, 1)",Ty="cubic-bezier(0.2, 0, 0, 1)",js="cubic-bezier(0.25, 0.46, 0.45, 0.94)",Sa={fadeIn:"oneshot",fadeOut:"oneshot",fadeSwap:"oneshot",slideUp:"oneshot",slideDown:"oneshot",slideLeft:"oneshot",slideRight:"oneshot",scaleIn:"oneshot",scaleOut:"oneshot",popIn:"oneshot",popOut:"oneshot",rotateIn:"oneshot",rotateOut:"oneshot",flipX:"oneshot",flipY:"oneshot",bounceIn:"oneshot",bounceOut:"oneshot",shake:"oneshot",wiggle:"oneshot",jello:"oneshot",flash:"oneshot",heartBeat:"oneshot",glideIn:"oneshot",glideOut:"oneshot",dropIn:"oneshot",riseUp:"oneshot",expandIn:"oneshot",collapseOut:"oneshot",expandHeight:"oneshot",fadeSlideUp:"oneshot",blurIn:"oneshot",blurOut:"oneshot",clipUp:"oneshot",clipLeft:"oneshot",zoomIn:"oneshot",zoomOut:"oneshot",press:"oneshot",parallax:"scrollLink",parallaxFast:"scrollLink",parallaxReverse:"scrollLink",tiltScroll:"scrollLink",scaleScroll:"scrollLink",lift:"hoverState",sink:"hoverState",grow:"hoverState",glow:"hoverState",shadow:"hoverState",borderPop:"hoverState",tilt:"cursorTrack",tilt3D:"cursorTrack",rotate3D:"cursorTrack",depth:"cursorTrack",float:"continuous",pulse:"continuous",spin:"continuous",ping:"continuous",shimmer:"continuous",ripple:"overlay",burst:"overlay"},Pc={fadeIn:{in:[{opacity:0},{opacity:1}],out:[{opacity:1},{opacity:0}]},fadeOut:{in:[{opacity:0},{opacity:1}],out:[{opacity:1},{opacity:0}]},fadeSwap:{in:[{opacity:0,transform:"translateY(10px)"},{opacity:.72,transform:"translateY(2px)",offset:.58},{opacity:1,transform:"translateY(0)"}],out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-10px)"}]},slideUp:{in:[{opacity:0,transform:"translateY(32px)"},{opacity:.76,transform:"translateY(7px)",offset:.62},{opacity:1,transform:"translateY(0)"}],out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-24px)"}]},slideDown:{in:[{opacity:0,transform:"translateY(-32px)"},{opacity:.76,transform:"translateY(-7px)",offset:.62},{opacity:1,transform:"translateY(0)"}],out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(24px)"}]},slideLeft:{in:[{opacity:0,transform:"translateX(-32px)"},{opacity:.76,transform:"translateX(-7px)",offset:.62},{opacity:1,transform:"translateX(0)"}],out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-24px)"}]},slideRight:{in:[{opacity:0,transform:"translateX(32px)"},{opacity:.76,transform:"translateX(7px)",offset:.62},{opacity:1,transform:"translateX(0)"}],out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(24px)"}]},scaleIn:{in:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}]},scaleOut:{in:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}]},popIn:{in:[{opacity:0,transform:"scale(0.92)"},{opacity:1,transform:"scale(1.04)",offset:.6},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.92)"}]},popOut:{in:[{opacity:0,transform:"scale(0.92)"},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(1.05)",offset:.45},{opacity:0,transform:"scale(0.92)"}]},rotateIn:{in:[{opacity:0,transform:"rotate(-12deg) scale(0.9)"},{opacity:1,transform:"rotate(0deg) scale(1)"}],out:[{opacity:1,transform:"rotate(0deg) scale(1)"},{opacity:0,transform:"rotate(12deg) scale(0.9)"}]},rotateOut:{in:[{opacity:0,transform:"rotate(-12deg) scale(0.9)"},{opacity:1,transform:"rotate(0deg) scale(1)"}],out:[{opacity:1,transform:"rotate(0deg) scale(1)"},{opacity:0,transform:"rotate(12deg) scale(0.9)"}]},flipX:{in:[{opacity:0,transform:"perspective(600px) rotateX(-90deg)"},{opacity:1,transform:"perspective(600px) rotateX(0deg)"}],out:[{opacity:1,transform:"perspective(600px) rotateX(0deg)"},{opacity:0,transform:"perspective(600px) rotateX(90deg)"}]},flipY:{in:[{opacity:0,transform:"perspective(600px) rotateY(-90deg)"},{opacity:1,transform:"perspective(600px) rotateY(0deg)"}],out:[{opacity:1,transform:"perspective(600px) rotateY(0deg)"},{opacity:0,transform:"perspective(600px) rotateY(90deg)"}]},bounceIn:{in:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1.05)",offset:.55},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}]},bounceOut:{in:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1.05)",offset:.55},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(1.04)",offset:.45},{opacity:0,transform:"scale(0.9)"}]},shake:{in:[{opacity:1,transform:"translateX(0)"},{opacity:1,transform:"translateX(-6px)",offset:.15},{opacity:1,transform:"translateX(6px)",offset:.3},{opacity:1,transform:"translateX(-4px)",offset:.45},{opacity:1,transform:"translateX(4px)",offset:.6},{opacity:1,transform:"translateX(-2px)",offset:.75},{opacity:1,transform:"translateX(2px)",offset:.9},{opacity:1,transform:"translateX(0)"}],out:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-6px)"}]},wiggle:{in:[{opacity:1,transform:"rotate(0deg)"},{opacity:1,transform:"rotate(8deg)",offset:.2},{opacity:1,transform:"rotate(-6deg)",offset:.4},{opacity:1,transform:"rotate(4deg)",offset:.6},{opacity:1,transform:"rotate(-2deg)",offset:.8},{opacity:1,transform:"rotate(0deg)"}],out:[{opacity:1,transform:"rotate(0deg)"},{opacity:0,transform:"rotate(8deg)"}]},jello:{in:[{opacity:1,transform:"scale(1, 1)"},{opacity:1,transform:"scale(1.06, 0.96)",offset:.25},{opacity:1,transform:"scale(0.97, 1.04)",offset:.5},{opacity:1,transform:"scale(1.02, 0.99)",offset:.75},{opacity:1,transform:"scale(1, 1)"}],out:[{opacity:1,transform:"scale(1, 1)"},{opacity:0,transform:"scale(0.9, 0.9)"}]},flash:{in:[{opacity:1},{opacity:.72,offset:.28},{opacity:1,offset:.5},{opacity:.78,offset:.78},{opacity:1}],out:[{opacity:1},{opacity:0}]},heartBeat:{in:[{opacity:1,transform:"scale(1)"},{opacity:1,transform:"scale(1.12)",offset:.15},{opacity:1,transform:"scale(1)",offset:.3},{opacity:1,transform:"scale(1.12)",offset:.45},{opacity:1,transform:"scale(1)",offset:.6},{opacity:1,transform:"scale(1.06)",offset:.75},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}]},glideIn:{in:[{opacity:0,transform:"translateY(24px) scale(0.97)"},{opacity:.82,transform:"translateY(5px) scale(0.995)",offset:.62},{opacity:1,transform:"translateY(0) scale(1)"}],out:[{opacity:1,transform:"translateY(0) scale(1)"},{opacity:0,transform:"translateY(-18px) scale(0.97)"}]},glideOut:{in:[{opacity:0,transform:"translateY(24px) scale(0.97)"},{opacity:.82,transform:"translateY(5px) scale(0.995)",offset:.62},{opacity:1,transform:"translateY(0) scale(1)"}],out:[{opacity:1,transform:"translateY(0) scale(1)"},{opacity:0,transform:"translateY(-18px) scale(0.97)"}]},dropIn:{in:[{opacity:0,transform:"translateY(-30px)"},{opacity:1,transform:"translateY(3px)",offset:.7},{opacity:1,transform:"translateY(0)"}],out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-30px)"}]},riseUp:{in:[{opacity:0,transform:"translateY(30px)"},{opacity:1,transform:"translateY(-3px)",offset:.7},{opacity:1,transform:"translateY(0)"}],out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(30px)"}]},expandIn:{in:[{opacity:0,transform:"scaleX(0.9)"},{opacity:1,transform:"scaleX(1)"}],out:[{opacity:1,transform:"scaleX(1)"},{opacity:0,transform:"scaleX(0.9)"}]},collapseOut:{in:[{opacity:0,transform:"scaleX(0.9)"},{opacity:1,transform:"scaleX(1)"}],out:[{opacity:1,transform:"scaleX(1)"},{opacity:0,transform:"scaleX(0.9)"}]},expandHeight:{in:[{opacity:0,transform:"scaleY(0.5)",transformOrigin:"top"},{opacity:1,transform:"scaleY(1)",transformOrigin:"top"}],out:[{opacity:1,transform:"scaleY(1)",transformOrigin:"top"},{opacity:0,transform:"scaleY(0.5)",transformOrigin:"top"}]},fadeSlideUp:{in:[{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"translateY(0)"}],out:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-16px)"}]},blurIn:{in:[{opacity:0,filter:"blur(4px)"},{opacity:1,filter:"blur(0px)"}],out:[{opacity:1,filter:"blur(0px)"},{opacity:0,filter:"blur(4px)"}]},blurOut:{in:[{opacity:0,filter:"blur(4px)"},{opacity:1,filter:"blur(0px)"}],out:[{opacity:1,filter:"blur(0px)"},{opacity:0,filter:"blur(4px)"}]},clipUp:{in:[{opacity:0,transform:"translateY(10px)",clipPath:"inset(100% 0 0 0)"},{opacity:1,transform:"translateY(0)",clipPath:"inset(0 0 0 0)"}],out:[{opacity:1,transform:"translateY(0)",clipPath:"inset(0 0 0 0)"},{opacity:0,transform:"translateY(-8px)",clipPath:"inset(0 0 100% 0)"}]},clipLeft:{in:[{opacity:0,transform:"translateX(10px)",clipPath:"inset(0 100% 0 0)"},{opacity:1,transform:"translateX(0)",clipPath:"inset(0 0 0 0)"}],out:[{opacity:1,transform:"translateX(0)",clipPath:"inset(0 0 0 0)"},{opacity:0,transform:"translateX(-8px)",clipPath:"inset(0 0 0 100%)"}]},zoomIn:{in:[{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}]},zoomOut:{in:[{opacity:0,transform:"scale(1.15)"},{opacity:1,transform:"scale(1)"}],out:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(1.15)"}]},press:{in:[{transform:"scale(1)",opacity:1},{transform:"scale(0.96)",opacity:1}],out:[{transform:"scale(0.96)",opacity:1},{transform:"scale(1)",opacity:1}]}},Sm=new Set;function Dn(){var l;return typeof window>"u"?!1:((l=window.matchMedia)==null?void 0:l.call(window,"(prefers-reduced-motion: reduce)").matches)??!1}function Fn(l){l.style.willChange="auto"}function Wi(l){return Dn()?l/2:l}function jy(l){l.getAnimations({subtree:!0}).forEach(o=>o.cancel())}function qm(l){let o=l.parentElement;for(;o&&o!==document.body&&o!==document.documentElement;){const c=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(`${c.overflowY}${c.overflow}`)&&o.scrollHeight>o.clientHeight)return o;o=o.parentElement}return null}function zy(l,o){const c=qm(l),s=(c==null?void 0:c.clientHeight)??window.innerHeight,d=Math.min(.95,Math.max(.05,o)),p=Math.round(s*Math.min(.48,d/2));return{root:c,rootMargin:`-${p}px 0px -${p}px 0px`,threshold:0}}function Ry(l,o){const c=l.getBoundingClientRect(),s=o==null?void 0:o.getBoundingClientRect(),d=(s==null?void 0:s.top)??0,p=(s==null?void 0:s.height)??window.innerHeight,g=d+p/2;return(c.top+c.height/2-g)/Math.max(p,1)}const hs={lift:{transform:"translateY(-4px)"},sink:{transform:"translateY(4px)"},grow:{transform:"scale(1.03)"},glow:{filter:"brightness(1.15)"},shadow:{boxShadow:"0 8px 24px currentColor"},borderPop:{borderColor:"currentColor",borderWidth:"2px"}},Fi={pulse:{keyframes:[{transform:"scale(1)"},{transform:"scale(1.05)",offset:.5},{transform:"scale(1)"}],duration:2e3,easing:js},float:{keyframes:[{transform:"translateY(0)"},{transform:"translateY(-5px)",offset:.5},{transform:"translateY(0)"}],duration:1500,easing:js},spin:{keyframes:[{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],duration:2e3,easing:"linear"},ping:{keyframes:[{transform:"scale(1)",opacity:1},{transform:"scale(1.15)",opacity:0}],duration:1500,easing:js},shimmer:{keyframes:[{backgroundPosition:"-200% 0"},{backgroundPosition:"200% 0"}],duration:2500,easing:"linear"}};function Oy(l){return l.some(o=>{const c=o.transform;return c?/\bscalef?[a-zA-Z]*\(/.test(c):!1})}function Ny(l,o){const c=o[0];c&&(c.opacity!==void 0&&(l.style.opacity=String(c.opacity)),c.transform!==void 0&&(l.style.transform=String(c.transform)))}function Ay(l,o){const c=o[o.length-1];c&&(c.opacity!==void 0&&(l.style.opacity=String(c.opacity)),c.transform!==void 0&&(l.style.transform=String(c.transform)))}function Ii(l,o,c,s){l.style.willChange="transform, opacity";const d=l.style.transition;l.style.transition="none";const p=Oy(o),g=l.style.transformOrigin;p&&(l.style.transformOrigin="center"),Ny(l,o);const x=Dn()?o.map(({opacity:y})=>({opacity:y??1})):o,v=l.animate(x,{...c,fill:"forwards"}),m=()=>{l.style.transition=d,p&&(l.style.transformOrigin=g)};return v.addEventListener("finish",()=>{Ay(l,o),Fn(l),m(),s==null||s()}),v.addEventListener("cancel",()=>{m()}),v}function ky(l,o){for(const c in o)l.style[c]=o[c]}function wm(l,o){for(const c in o)l.style[c]=""}function Cm(l,o,c){if(!o||Object.keys(o).length===0)return null;const s={},d={};for(const[g,x]of Object.entries(o))s[g]=x[0],d[g]=x[1];for(const[g,x]of Object.entries(s))l.style[g]=x;const p=l.animate([s,d],{...c,fill:"forwards"});return p.addEventListener("finish",()=>{for(const[g,x]of Object.entries(o))l.style[g]=String(x[1])}),p}function Dy(l,o,c,s){const d=l.getBoundingClientRect(),p=c-d.left,g=s-d.top,x=l.style.position,v=l.style.overflow;l.style.position="relative",l.style.overflow="hidden";const m=getComputedStyle(l).getPropertyValue("--trigr-overlay-color")||"currentColor";let y=0;function S(){y-=1,y<=0&&(l.style.position=x,l.style.overflow=v)}if(o==="ripple"){y=1;const T=Math.max(d.width,d.height)*2.5,A=document.createElement("span");A.style.cssText=`
      position: absolute; left: ${p}px; top: ${g}px; width: 0; height: 0;
      border-radius: 50%; background: ${m};
      transform: translate(-50%, -50%); pointer-events: none;
      opacity: 1;
    `,l.appendChild(A),A.animate([{width:"0",height:"0",opacity:1},{width:`${T}px`,height:`${T}px`,opacity:0}],{duration:400,easing:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fill:"forwards"}).onfinish=()=>{A.remove(),S()}}if(o==="burst"){y=8;for(let T=0;T<8;T++){const A=Math.PI*2*T/8,j=document.createElement("span");j.style.cssText=`
        position: absolute; left: ${p}px; top: ${g}px; width: 6px; height: 6px;
        border-radius: 50%; background: ${m};
        pointer-events: none; transform: translate(-50%, -50%);
      `,l.appendChild(j);const tt=Math.cos(A)*60,G=Math.sin(A)*60;j.animate([{transform:"translate(-50%, -50%) scale(1)",opacity:1},{transform:`translate(calc(-50% + ${tt}px), calc(-50% + ${G}px)) scale(0)`,opacity:0}],{duration:360,easing:"cubic-bezier(0.4, 0.0, 1, 1)",fill:"forwards"}).onfinish=()=>{j.remove(),S()}}}}const Yy=C.forwardRef(function({value:o,trigger:c="change",animation:s,scrollAnimation:d,properties:p,exitAnimation:g,show:x,unmountOnExit:v=!0,duration:m=400,easing:y=My,delay:S=0,speed:T=.5,threshold:A=.4,repeat:j=!1,once:tt,as:G="div",className:O,style:V,onClick:Q,onEnter:_,onExit:Y,onHoverStart:F,onHoverEnd:B,onAnimationEnd:k,children:J},dt){const L=C.useRef(null),nt=C.useRef(null),st=C.useRef(null),Ct=C.useRef(null),St=C.useRef(null),D=C.useRef(o),Z=C.useRef(!1),$=C.useRef(!1),lt=C.useRef([]),W=C.useRef(0),[b,U]=C.useState(null),[I,ut]=C.useState(x!==!1?"entered":"exited"),yt=C.useRef(null),wt=C.useRef(0),Ot=C.useRef(!1),jt=C.useRef(!1),Ut=tt??!j,kt=C.useMemo(()=>Array.isArray(c)?c.slice(0,2):[c],[c]),Dt=C.useCallback(xt=>kt.includes(xt),[kt]),ot=(b==null?void 0:b.source)??kt[0]??"change",ae=ot==="scroll"&&d?d:s,Xt=Sa[ae]??"oneshot",Jt=C.useCallback(xt=>xt==="scroll"&&d?d:s,[s,d]),le=C.useCallback(()=>{St.current!==null&&(clearTimeout(St.current),St.current=null),$.current=!1,k==null||k();const xt=lt.current.shift();xt?($.current=!0,U({id:++W.current,source:xt})):U(null)},[k]),ze=C.useCallback(xt=>{if($.current){xt!=="scroll"&&(lt.current=[...lt.current,xt].slice(-2));return}$.current=!0,U({id:++W.current,source:xt})},[]),Rt=C.useCallback((xt=ot,z)=>{const R=L.current;if(!R){le();return}const X=z??Jt(xt);jy(R),nt.current=null,st.current=null,Ct.current!==null&&cancelAnimationFrame(Ct.current),St.current!==null&&(clearTimeout(St.current),St.current=null);const it=Wi(m),ct=Sa[X]??"oneshot";st.current=Cm(R,p,{duration:it,easing:y,delay:S});const ht={};if(Z.current){const mt=hs[X];if(mt)for(const vt in mt)ht[vt]=R.style[vt],R.style[vt]=""}function ft(){if(Z.current)for(const mt in ht)R.style[mt]=ht[mt]}if(ct==="overlay"||ct==="hoverState"||ct==="cursorTrack"){le();return}if(ct==="continuous"){const mt=Fi[X];if(!mt||Dn()){le();return}const vt=Math.max(360,mt.duration);nt.current=Ii(R,mt.keyframes,{duration:vt,easing:mt.easing,delay:S,iterations:1,fill:"forwards"},le),Object.keys(ht).length&&(nt.current.addEventListener("finish",ft,{once:!0}),nt.current.addEventListener("cancel",ft,{once:!0})),St.current=setTimeout(le,vt+S+80);return}const rt=Pc[X];if(!rt){Sm.has(X)||Sm.add(X),le();return}const pt=X==="press"?Ty:y;St.current=setTimeout(le,Math.max(500,it+S+300)),nt.current=Ii(R,rt.in,{duration:it,easing:pt,delay:S},le),Object.keys(ht).length&&(nt.current.addEventListener("finish",ft,{once:!0}),nt.current.addEventListener("cancel",ft,{once:!0})),X==="press"&&nt.current.addEventListener("finish",()=>{R.animate([{transform:"scale(1)"},{transform:"scale(1)"}],{duration:80,fill:"forwards"})},{once:!0})},[ot,S,m,y,le,Jt,p]),Nt=C.useCallback(()=>{ze("manual")},[ze]);C.useImperativeHandle(dt,()=>({animate:Nt,get element(){return L.current}}),[Nt]),C.useEffect(()=>{const xt=Jt("scroll"),z=Sa[xt]??"oneshot";if(!Dt("scroll")||z!=="oneshot")return;const R=L.current;if(!R)return;jt.current=!1;const X=new IntersectionObserver(([it])=>{if(!it.isIntersecting){jt.current=!1,j&&(Y==null||Y());return}jt.current||(jt.current=!0,_==null||_(),ze("scroll"),Ut&&X.disconnect())},zy(R,A));return X.observe(R),()=>X.disconnect()},[Jt,Dt,_,Y,j,ze,Ut,A]),C.useEffect(()=>{const xt=D.current;if(!Dt("change")||Xt!=="oneshot"){D.current=o;return}D.current=o,!(xt===void 0||Object.is(xt,o)||!L.current)&&ze("change")},[Xt,Dt,o,ze]),C.useEffect(()=>{if(Xt!=="continuous"||Dt("hover")||Dt("click")||Dt("manual")||Dt("mount"))return;const xt=L.current;if(!xt)return;const z=Fi[ae];if(!(!z||Dn())){if(ae==="shimmer"){const R=getComputedStyle(xt).color;xt.style.background=`linear-gradient(90deg, transparent 0%, ${R}33 50%, transparent 100%)`,xt.style.backgroundSize="200% 100%"}return xt.style.willChange="transform, opacity",nt.current=xt.animate(z.keyframes,{duration:z.duration,iterations:1/0,easing:z.easing}),nt.current.addEventListener("cancel",()=>Fn(xt)),()=>{nt.current&&(nt.current.cancel(),nt.current=null),ae==="shimmer"&&(xt.style.background="",xt.style.backgroundSize="")}}},[ae,Xt,Dt]),C.useEffect(()=>{if(!Dt("mount")||I!=="entered"||Ot.current||!(x??!0))return;Ot.current=!0;const z=L.current;if(z){if(Xt==="continuous"){const R=Fi[ae];return!R||Dn()?void 0:(z.style.willChange="transform, opacity",nt.current=z.animate(R.keyframes,{duration:R.duration,iterations:1/0,easing:R.easing}),nt.current.addEventListener("cancel",()=>Fn(z)),()=>{var X;(X=nt.current)==null||X.cancel(),nt.current=null})}if(Xt==="oneshot"){const R=Wi(m),X=Pc[ae];if(!X)return;st.current=Cm(z,p,{duration:R,easing:y,delay:S}),St.current=setTimeout(le,Math.max(600,R+S+300)),nt.current=Ii(z,X.in,{duration:R,easing:y,delay:S},le)}}},[Dt,I,x,ae,Xt,m,y,S,le,p]),C.useEffect(()=>{(I==="exiting"||I==="exited")&&(Ot.current=!1)},[I]),C.useLayoutEffect(()=>{b&&Rt(b.source)},[b,Rt]),C.useEffect(()=>{var ct,ht;if(x===void 0)return;if(x){(ct=yt.current)==null||ct.cancel(),yt.current=null,ut("entered");return}const xt=++wt.current;if(!g){ut("exited");return}const z=L.current;if(!z){ut("exited");return}(ht=nt.current)==null||ht.cancel();const R=Wi(m),X=Sa[g]??"oneshot",it=()=>{wt.current===xt&&(ut("exited"),yt.current=null)};if(ut("exiting"),X==="continuous"){const ft=Fi[g];ft&&!Dn()?yt.current=Ii(z,ft.keyframes,{duration:R||ft.duration,easing:ft.easing,fill:"forwards"},it):ut("exited")}else{const ft=Pc[g];if(!ft){ut("exited");return}yt.current=Ii(z,ft.out,{duration:R,easing:y,fill:"forwards"},it)}return()=>{var ft;wt.current===xt&&((ft=yt.current)==null||ft.cancel(),yt.current=null)}},[x,g,m,y]),C.useEffect(()=>{const xt=Jt("hover");if((Sa[xt]??"oneshot")!=="cursorTrack"||!Dt("hover"))return;const R=L.current;if(!R)return;const X=R.style.transform,it=R.style.transition;function ct(ft){const rt=R.getBoundingClientRect(),pt=(ft.clientX-rt.left)/rt.width-.5,mt=(ft.clientY-rt.top)/rt.height-.5;switch(xt){case"tilt":R.style.transform=`perspective(400px) rotateY(${pt*12}deg) rotateX(${-mt*8}deg)`;break;case"tilt3D":R.style.transform=`perspective(600px) rotateY(${pt*20}deg) rotateX(${-mt*15}deg) rotateZ(${pt*mt*5}deg)`;break;case"rotate3D":R.style.transform=`perspective(800px) rotateX(${-mt*30}deg) rotateY(${pt*30}deg)`;break;case"depth":R.style.transform=`perspective(600px) translateZ(${(1-Math.abs(pt)-Math.abs(mt))*40}px)`;break}R.style.transition="none"}function ht(){R&&(R.style.transition=`transform 220ms ${js}`,R.style.transform=X)}return R.addEventListener("mousemove",ct),R.addEventListener("mouseleave",ht),()=>{R.removeEventListener("mousemove",ct),R.removeEventListener("mouseleave",ht),R.style.transform=X,R.style.transition=it}},[Jt,Dt]),C.useEffect(()=>{const xt=Jt("scroll");if((Sa[xt]??"oneshot")!=="scrollLink"||!Dt("scroll"))return;const R=L.current;if(!R)return;const X=R.style.transform,it=R.style.transformOrigin,ct=qm(R),ht=ct??window;let ft=!1,rt;function pt(){clearTimeout(rt)}function mt(){R&&Fn(R)}function vt(){ft||(Ct.current=requestAnimationFrame(Ht),ft=!0)}function Ht(){if(ft=!1,!R)return;pt(),R.style.willChange="transform",rt=setTimeout(mt,300);const _t=Math.max(-1.25,Math.min(1.25,Ry(R,ct))),fe=Number.isFinite(T)?Math.min(1.5,Math.max(.05,T)):.5,ie=80*fe;switch(xt){case"parallax":R.style.transform=`translateY(${_t*ie}px)`;break;case"parallaxFast":R.style.transform=`translateY(${_t*ie*1.45}px)`;break;case"parallaxReverse":R.style.transform=`translateY(${-_t*ie}px)`;break;case"tiltScroll":R.style.transform=`perspective(400px) rotateX(${-_t*30*fe}deg)`;break;case"scaleScroll":{const sa=1-Math.min(1,Math.abs(_t)),Pa=Math.min(1.12,Math.max(.9,.9+sa*(.18+fe*.08)));R.style.transformOrigin="center",R.style.transform=`scale(${Pa.toFixed(3)})`}break}}return ht.addEventListener("scroll",vt,{passive:!0}),window.addEventListener("resize",vt,{passive:!0}),vt(),()=>{ht.removeEventListener("scroll",vt),window.removeEventListener("resize",vt),pt(),Ct.current!==null&&cancelAnimationFrame(Ct.current),Fn(R),R.style.transform=X,R.style.transformOrigin=it}},[Jt,Dt,T]);const gt=C.useCallback(xt=>{Q==null||Q(xt);const z=L.current;if(!z)return;const R=Jt("click"),X=Sa[R]??"oneshot";X==="overlay"&&Dy(z,R,xt.clientX,xt.clientY),Dt("click")&&X==="continuous"&&ze("click"),Dt("click")&&X==="oneshot"&&ze("click")},[Jt,Dt,Q,ze]),ce=C.useCallback(()=>{var X;F==null||F();const xt=L.current;if(!xt)return;const z=Jt("hover"),R=Sa[z]??"oneshot";if(R==="hoverState"){const it=hs[z];if(it&&!Dn()){const ct=`${Wi(m)}ms`;xt.style.transition=`transform ${ct} ${y}, filter ${ct} ${y}, box-shadow ${ct} ${y}, border-color ${ct} ${y}, border-width ${ct} ${y}`,ky(xt,it),Z.current=!0}}if(Dt("hover")&&R==="continuous"){const it=Fi[z];it&&!Dn()&&((X=nt.current)==null||X.cancel(),xt.style.willChange="transform, opacity",nt.current=xt.animate(it.keyframes,{duration:it.duration,iterations:1/0,easing:it.easing}),nt.current.addEventListener("cancel",()=>Fn(xt)))}Dt("hover")&&R==="oneshot"&&ze("hover")},[Jt,Dt,F,ze,m,y]),Ca=C.useCallback(()=>{B==null||B();const xt=L.current;if(!xt)return;const z=Jt("hover"),R=Sa[z]??"oneshot";if(R==="hoverState"){const X=hs[z];if(X){const it=`${Wi(m)}ms`;xt.style.transition=`transform ${it} ${y}, filter ${it} ${y}, box-shadow ${it} ${y}, border-color ${it} ${y}, border-width ${it} ${y}`,wm(xt,X),Z.current=!1}}Dt("hover")&&R==="continuous"&&nt.current&&(nt.current.cancel(),nt.current=null,Fn(xt))},[Jt,B,m,y,Dt]);if(C.useEffect(()=>()=>{var xt,z,R;if((xt=nt.current)==null||xt.cancel(),(z=st.current)==null||z.cancel(),(R=yt.current)==null||R.cancel(),Ct.current!==null&&cancelAnimationFrame(Ct.current),St.current!==null&&clearTimeout(St.current),lt.current=[],Z.current&&L.current){const X=hs[ae];X&&wm(L.current,X)}},[]),I==="exited"&&v!==!1)return null;const Je=Sa[Jt("click")]??"oneshot",ue=Sa[Jt("hover")]??"oneshot";return C.createElement(G,{ref:L,className:O,style:I==="exited"?{...V,visibility:"hidden",pointerEvents:"none"}:V,onClick:Dt("click")||Q||Je==="overlay"?gt:void 0,onMouseEnter:Dt("hover")||F||ue==="hoverState"?ce:void 0,onMouseLeave:B||ue==="hoverState"?Ca:void 0},J)}),Fa={Block:Yy},_y="cubic-bezier(0.0, 0.0, 0.2, 1)",ia="cubic-bezier(0.4, 0.0, 1, 1)",gs="cubic-bezier(0.4, 0.0, 0.2, 1)",Gm="cubic-bezier(0.34, 1.56, 0.64, 1)",Ey="cubic-bezier(0.2, 0, 0, 1)",Hy="cubic-bezier(0.25, 0.46, 0.45, 0.94)",ra=Gm,Wa=Hy,Uy=Ey,By={staggerFadeIn:{keyframes:[{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],options:{duration:280,easing:ra}},staggerSlideUp:{keyframes:[{transform:"translateY(14px)",opacity:0},{transform:"translateY(0)",opacity:1}],options:{duration:300,easing:ra}},staggerSlideLeft:{keyframes:[{transform:"translateX(20px)",opacity:0},{transform:"translateX(0)",opacity:1}],options:{duration:300,easing:ra}},staggerZoomIn:{keyframes:[{transform:"scale(0.88)",opacity:0},{transform:"scale(1)",opacity:1}],options:{duration:320,easing:ra}},staggerPopIn:{keyframes:[{transform:"scale(0.88)",opacity:0},{transform:"scale(1.04)",opacity:1,offset:.6},{transform:"scale(0.99)",opacity:1,offset:.82},{transform:"scale(1)",opacity:1}],options:{duration:340,easing:ra}},stackIn:{keyframes:[{transform:"translateY(24px) scale(0.93)",opacity:0},{transform:"translateY(0) scale(1)",opacity:1}],options:{duration:350,easing:Wa}},wordCascade:{keyframes:[{transform:"translateY(12px)",opacity:0},{transform:"translateY(0)",opacity:1}],options:{duration:280,easing:Wa}},wordWave:{keyframes:[{transform:"translateY(0)",opacity:1},{transform:"translateY(-10px)",opacity:1,offset:.5},{transform:"translateY(0)",opacity:1}],options:{duration:360,easing:Wa}},wordDrop:{keyframes:[{transform:"translateY(-18px)",opacity:0},{transform:"translateY(0)",opacity:1}],options:{duration:320,easing:Wa}},wordFadeIn:{keyframes:[{opacity:0},{opacity:1}],options:{duration:260,easing:Wa}},marquee:{keyframes:[]},marqueeReverse:{keyframes:[]},marqueeFade:{keyframes:[]},parallax:{keyframes:[]},parallaxFast:{keyframes:[]},parallaxReverse:{keyframes:[]},tiltScroll:{keyframes:[]},scaleScroll:{keyframes:[]},parallaxStagger:{keyframes:[]},itemFadeIn:{keyframes:[{opacity:0},{opacity:1}],options:{duration:220,easing:ra}},itemSlideIn:{keyframes:[{transform:"translateY(12px)",opacity:0},{transform:"translateY(0)",opacity:1}],options:{duration:250,easing:ra}},itemPopIn:{keyframes:[{transform:"scale(0.9)",opacity:0},{transform:"scale(1)",opacity:1}],options:{duration:250,easing:Uy}},itemBounceIn:{keyframes:[{transform:"scale(0.88)",opacity:0},{transform:"scale(1.06)",opacity:1,offset:.45},{transform:"scale(0.98)",opacity:1,offset:.68},{transform:"scale(1)",opacity:1}],options:{duration:320,easing:ra}},itemFadeOut:{keyframes:[{opacity:1},{opacity:0}],options:{duration:180,easing:ia}},itemSlideOut:{keyframes:[{transform:"translateY(0)",opacity:1},{transform:"translateY(-14px)",opacity:0}],options:{duration:210,easing:ia}},itemCollapseOut:{keyframes:[{transform:"scaleY(1)",opacity:1,transformOrigin:"top"},{transform:"scaleY(0)",opacity:0,transformOrigin:"top"}],options:{duration:230,easing:ia}},flip:{keyframes:[{transform:"translate(0, 0)"},{transform:"translate(0, 0)"}]},smooth:{keyframes:[{transform:"translate(0, 0)"},{transform:"translate(0, 0)"}]},spring:{keyframes:[{transform:"translate(0, 0)"},{transform:"translate(0, 0)"}]},none:{keyframes:[]}},Ly={fadeIn:{keyframes:[{opacity:0,transform:"translateY(6px)"},{opacity:1,transform:"translateY(0)"}],options:{duration:300,easing:Wa}},slideIn:{keyframes:[{transform:"translateY(20px)",opacity:0},{transform:"translateY(0)",opacity:1}],options:{duration:320,easing:Wa}},slideInLeft:{keyframes:[{transform:"translateX(-20px)",opacity:0},{transform:"translateX(0)",opacity:1}],options:{duration:300,easing:ra}},slideInRight:{keyframes:[{transform:"translateX(20px)",opacity:0},{transform:"translateX(0)",opacity:1}],options:{duration:300,easing:ra}},popIn:{keyframes:[{transform:"scale(0.9)",opacity:0},{transform:"scale(1.05)",opacity:1,offset:.55},{transform:"scale(0.99)",opacity:1,offset:.78},{transform:"scale(1)",opacity:1}],options:{duration:320,easing:ra}},bounceIn:{keyframes:[{transform:"translateY(10px) scale(0.9)",opacity:0},{transform:"translateY(-6px) scale(1.06)",opacity:1,offset:.45},{transform:"translateY(2px) scale(0.99)",opacity:1,offset:.7},{transform:"translateY(0) scale(1)",opacity:1}],options:{duration:340,easing:ra}},expandIn:{keyframes:[{transform:"scaleY(0.85)",opacity:0,transformOrigin:"top"},{transform:"scaleY(1)",opacity:1,transformOrigin:"top"}],options:{duration:300,easing:ra}},flipIn:{keyframes:[{transform:"perspective(500px) rotateX(-75deg)",opacity:0},{transform:"perspective(500px) rotateX(4deg)",opacity:1,offset:.75},{transform:"perspective(500px) rotateX(0deg)",opacity:1}],options:{duration:380,easing:Wa}},glideIn:{keyframes:[{transform:"translateX(-12px)",opacity:0},{transform:"translateX(0)",opacity:1}],options:{duration:280,easing:Wa}},fadeOut:{keyframes:[{opacity:1},{opacity:0}],options:{duration:180,easing:ia}},slideOut:{keyframes:[{transform:"translateY(0)",opacity:1},{transform:"translateY(20px)",opacity:0}],options:{duration:210,easing:ia}},slideOutLeft:{keyframes:[{transform:"translateX(0)",opacity:1},{transform:"translateX(-20px)",opacity:0}],options:{duration:210,easing:ia}},slideOutRight:{keyframes:[{transform:"translateX(0)",opacity:1},{transform:"translateX(20px)",opacity:0}],options:{duration:210,easing:ia}},popOut:{keyframes:[{transform:"scale(1)",opacity:1},{transform:"scale(1.03)",opacity:1,offset:.3},{transform:"scale(0.9)",opacity:0}],options:{duration:210,easing:ia}},bounceOut:{keyframes:[{transform:"scale(1)",opacity:1},{transform:"translateY(-4px) scale(1.04)",opacity:1,offset:.32},{transform:"translateY(8px) scale(0.9)",opacity:0}],options:{duration:240,easing:ia}},collapseOut:{keyframes:[{transform:"scaleY(1)",opacity:1,transformOrigin:"top"},{transform:"scaleY(0)",opacity:0,transformOrigin:"top"}],options:{duration:230,easing:ia}},flipOut:{keyframes:[{transform:"perspective(500px) rotateX(0deg)",opacity:1},{transform:"perspective(500px) rotateX(75deg)",opacity:0}],options:{duration:250,easing:ia}},glideOut:{keyframes:[{transform:"translateX(0)",opacity:1},{transform:"translateX(-12px)",opacity:0}],options:{duration:200,easing:ia}}},Xy={...By,...Ly},tu=Xy;function $y(l){const o=C.useRef(l),c=o.current,s=new Set(c),d=new Set(l),p=l.filter(y=>!s.has(y)),g=c.filter(y=>!d.has(y)),x=[],v=[],m=new Map(c.map((y,S)=>[y,S]));return l.forEach((y,S)=>{s.has(y)&&d.has(y)&&(m.get(y)!==S?v.push(y):x.push(y))}),o.current=l,{added:p,removed:g,reordered:v,stable:x}}function qy(l){const o=C.useRef(new Map),c=C.useCallback(()=>{const d=l.current;if(!d)return;const p=new Map,g=d.getBoundingClientRect();for(const x of d.children){const v=x.getAttribute("data-trigr-key");if(!v)continue;const m=x.getBoundingClientRect();p.set(v,{top:m.top-g.top,left:m.left-g.left,width:m.width,height:m.height})}o.current=p},[l]),s=C.useCallback(()=>new Map(o.current),[]);return{snapshot:c,getPositions:s}}const Mm=new Set;function ys(l,o,c){if(o==="enter"&&(c!=null&&c.enter))return c.enter;if(o==="exit"&&(c!=null&&c.exit))return c.exit;const s=tu[l];return s||(Mm.has(l)||(Mm.add(l),console.warn(`[trigr/list] Unknown animation "${l}", falling back to "${o==="enter"?"staggerFadeIn":"itemFadeOut"}"`)),o==="enter"?tu.staggerFadeIn:tu.itemFadeOut)}function Gy(l,o){const c=o[0];c&&(c.opacity!==void 0&&(l.style.opacity=String(c.opacity)),c.transform!==void 0&&(l.style.transform=String(c.transform)))}function Qy(l,o){const c=o[o.length-1];c&&(c.opacity!==void 0&&(l.style.opacity=String(c.opacity)),c.transform!==void 0&&(l.style.transform=String(c.transform)))}function xs(l,o,c){l.style.willChange="transform, opacity";const s=Vy()?o.keyframes.map(({opacity:p})=>({opacity:p??1})):o.keyframes;Gy(l,s);const d=l.animate(s,{...o.options,...c,fill:"forwards"});return d.addEventListener("finish",()=>{Qy(l,s),l.style.willChange="auto"}),d.addEventListener("cancel",()=>{l.style.willChange="auto"}),d}function Tm(l){l.getAnimations({subtree:!0}).forEach(o=>o.cancel())}function Vy(){var l;return typeof window>"u"?!1:((l=window.matchMedia)==null?void 0:l.call(window,"(prefers-reduced-motion: reduce)").matches)??!1}function eu(l,o,c){if(!o||Object.keys(o).length===0)return null;const s={},d={};for(const[g,x]of Object.entries(o))s[g]=x[0],d[g]=x[1];for(const[g,x]of Object.entries(s))l.style[g]=x;const p=l.animate([s,d],{...c,fill:"forwards"});return p.addEventListener("finish",()=>{for(const[g,x]of Object.entries(o))l.style[g]=String(x[1])}),p}function Qm(l){let o=l.parentElement;for(;o&&o!==document.body&&o!==document.documentElement;){const c=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(`${c.overflowY}${c.overflow}`)&&o.scrollHeight>o.clientHeight)return o;o=o.parentElement}return null}function Zy(l,o){const c=Qm(l),s=(c==null?void 0:c.clientHeight)??window.innerHeight,d=Math.min(.95,Math.max(.05,o)),p=Math.round(s*Math.min(.48,d/2));return{root:c,rootMargin:`-${p}px 0px -${p}px 0px`,threshold:0}}function Ky(l){const o=[];return In.Children.forEach(l,c=>{In.isValidElement(c)&&c.key!=null&&o.push(c.key)}),o}function jm(l){return l==="marquee"||l==="marqueeReverse"||l==="marqueeFade"}function vs(l){return l==="parallax"||l==="parallaxFast"||l==="parallaxReverse"||l==="tiltScroll"||l==="scaleScroll"||l==="parallaxStagger"}function Jy(l){return Number.isFinite(l)?Math.min(1.5,Math.max(.05,l)):.5}function zm(l,o){return l.closest("[data-trigr-key]")}function Rm(l){return l.getAttribute("data-trigr-key")}const Wy=C.forwardRef(function({animation:o="staggerFadeIn",scrollAnimation:c,properties:s,exitAnimation:d="itemFadeOut",reorderAnimation:p="flip",reorder:g="flip",duration:x=300,reorderDuration:v=250,stagger:m=60,exitStagger:y=0,speed:S=50,trigger:T="mount",threshold:A=.4,easing:j=_y,reorderEasing:tt=gs,as:G="div",className:O,style:V,onItemEnter:Q,onItemExit:_,onReorder:Y,children:F,customAnimation:B},k){var xt;const J=C.useRef(null),dt=Ky(F),L=$y(dt),{getPositions:nt}=qy(J),st=C.useRef(F),[Ct,St]=C.useState(new Map),D=C.useRef(new Set),Z=C.useRef(new Map),$=C.useRef(null),lt=C.useRef(!1),W=C.useRef([]),b=C.useRef(0),U=C.useRef(!1),I=C.useMemo(()=>Array.isArray(T)?T.slice(0,2):[T],[T]),ut=C.useCallback(z=>I.includes(z),[I]),[yt,wt]=C.useState(null),[Ot,jt]=C.useState(!ut("scroll")),Ut=(yt==null?void 0:yt.source)??I[0]??"mount",kt=Ut==="scroll"&&c?c:o;typeof window<"u"&&(U.current=((xt=window.matchMedia)==null?void 0:xt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1),C.useEffect(()=>{jt(!ut("scroll"))},[ut]),C.useEffect(()=>{if(!ut("scroll"))return;const z=J.current;if(!z)return;const R=new IntersectionObserver(X=>{for(const it of X)it.target===z&&jt(it.isIntersecting)},Zy(z,A));return R.observe(z),()=>R.disconnect()},[ut,A]);const Dt=C.useCallback(()=>{$.current!==null&&(clearTimeout($.current),$.current=null),lt.current=!1;const z=W.current.shift();z?(lt.current=!0,wt({id:++b.current,source:z})):wt(null)},[]),ot=C.useCallback(z=>{if(lt.current){z!=="scroll"&&(W.current=[...W.current,z].slice(-2));return}lt.current=!0,wt({id:++b.current,source:z})},[]),ae=p??g,Xt=C.useCallback((z=Ut)=>{var ft;const R=J.current;if(!R){Dt();return}if(U.current){Dt();return}const X=z==="scroll"&&c?c:o;if(vs(X)||jm(X)){Dt();return}const it=ys(X,"enter",B),ct=Array.from(R.querySelectorAll("[data-trigr-key]"));if(ct.length===0){Dt();return}$.current!==null&&(clearTimeout($.current),$.current=null),Tm(R);const ht=U.current?x/2:Number(((ft=it.options)==null?void 0:ft.duration)??x);ct.forEach((rt,pt)=>{var mt;xs(rt,it,{duration:ht,easing:((mt=it.options)==null?void 0:mt.easing)??j,delay:pt*m,fill:"forwards"}),eu(rt,s,{duration:ht,easing:j,delay:pt*m})}),$.current=setTimeout(Dt,ht+Math.max(0,ct.length-1)*m+80)},[Ut,o,B,x,j,Dt,s,c,m]),Jt=C.useRef(null),le=C.useCallback(z=>{var ht;const R=J.current;if(!R||U.current)return;const X=R.querySelector(`[data-trigr-key="${z}"]`);if(!X)return;Tm(X);const it=ys(o,"enter",B),ct=U.current?x/2:x;xs(X,it,{duration:ct,easing:((ht=it.options)==null?void 0:ht.easing)??j,fill:"forwards"}),eu(X,s,{duration:ct,easing:j})},[o,x,j,B,s]),ze=C.useCallback(z=>{if(!ut("hover")||!J.current)return;const X=zm(z.target);if(!X)return;const it=Rm(X);it==null||it===Jt.current||(Jt.current=it,le(it))},[ut,le]),Rt=C.useCallback(()=>{Jt.current=null},[]),Nt=C.useCallback(z=>{if(!ut("click")||!J.current)return;const X=zm(z.target);if(!X)return;const it=Rm(X);it!=null&&le(it)},[ut,le]);C.useImperativeHandle(k,()=>({animate:()=>ot("manual")}),[ot]);const gt={flip:gs,smooth:gs,spring:Gm,none:gs};if(C.useEffect(()=>{const z=J.current;if(!z)return;const R=x,X=v;if(U.current){L.removed.length>0&&L.removed.forEach(rt=>_==null?void 0:_(rt)),L.added.length>0&&L.added.forEach(rt=>Q==null?void 0:Q(rt)),st.current=F;return}const it=rt=>z.querySelector(`[data-trigr-key="${rt}"]`),ct=z.getBoundingClientRect(),ht=()=>{const rt=new Map;for(const pt of z.children){const mt=pt.getAttribute("data-trigr-key");if(!mt)continue;const vt=pt.getBoundingClientRect();rt.set(mt,{top:vt.top-ct.top,left:vt.left-ct.left,width:vt.width,height:vt.height})}return rt},ft=nt();if(L.reordered.length>0&&ae!=="none"){const rt=ht(),pt=gt[ae]??tt;for(const mt of L.reordered){const vt=ft.get(mt),Ht=rt.get(mt);if(!vt||!Ht)continue;const _t=vt.left-Ht.left,fe=vt.top-Ht.top;if(_t===0&&fe===0)continue;const ie=it(mt);if(!ie)continue;ie.style.zIndex="1",ie.style.willChange="transform",ie.style.transform=`translate(${_t}px, ${fe}px)`,ie.getBoundingClientRect();const sa=ie.animate([{transform:`translate(${_t}px, ${fe}px)`},{transform:"translate(0, 0)"}],{duration:X,easing:pt,fill:"forwards"});sa.onfinish=()=>{ie.style.zIndex="",ie.style.willChange="auto"},ie.style.transform=""}Y==null||Y()}if(L.added.length>0){const rt=ys(kt,"enter",B);L.added.forEach((pt,mt)=>{var Ht;const vt=it(pt);vt&&(xs(vt,rt,{duration:R,easing:((Ht=rt.options)==null?void 0:Ht.easing)??j,delay:mt*m,fill:"forwards"}),eu(vt,s,{duration:R,easing:j,delay:mt*m})),Q==null||Q(pt)})}if(L.removed.length>0){const rt=In.Children.toArray(st.current),pt=new Map(Ct);L.removed.forEach(mt=>{if(Ct.has(mt))return;const vt=rt.find(_t=>In.isValidElement(_t)&&_t.key===mt),Ht=ft.get(mt);vt&&Ht&&pt.set(mt,{key:mt,element:vt,...Ht})}),pt.size!==Ct.size&&St(pt)}st.current=F},[L,F,kt,d,x,v,m,y,ae,tt,s]),C.useEffect(()=>{if(U.current)return;const z=J.current;if(!z||Ct.size===0)return;const R=ys(d,"exit",B),X=[];Ct.forEach((it,ct)=>{D.current.has(ct)||X.push([ct,it])}),X.length!==0&&X.forEach(([it],ct)=>{var rt;D.current.add(it);const ht=setTimeout(()=>{St(pt=>{const mt=new Map(pt);return mt.delete(it),mt}),D.current.delete(it),Z.current.delete(it)},x+ct*y);Z.current.set(it,ht);const ft=z.querySelector(`[data-trigr-key="${it}"]`);ft&&(ft.getAnimations().forEach(pt=>pt.cancel()),xs(ft,R,{duration:x,easing:((rt=R.options)==null?void 0:rt.easing)??ia,delay:ct*y,fill:"forwards"})),_==null||_(it)})},[Ct,d,x,y,B]),C.useEffect(()=>{const z=c??o;if(!ut("scroll")||!vs(z))return;const R=J.current;if(!R||U.current)return;const X=Qm(R),it=X??window,ct=new Map;let ht=0,ft=!1,rt=null;function pt(){return X?{top:X.getBoundingClientRect().top,height:X.clientHeight}:{top:0,height:window.innerHeight}}function mt(){return Array.from(R.children).filter(_t=>_t instanceof HTMLElement&&_t.hasAttribute("data-trigr-key"))}function vt(){if(ft=!1,!R)return;rt&&clearTimeout(rt);const _t=mt(),fe=_t.length;if(fe===0)return;const ie=R.getBoundingClientRect(),sa=pt(),Pa=sa.top+sa.height/2,il=(ie.top+ie.height/2-Pa)/Math.max(sa.height,1),We=Math.max(-1.25,Math.min(1.25,il)),er=Jy(S),ar=(fe-1)/2;_t.forEach((Xe,en)=>{ct.has(Xe)||ct.set(Xe,{transform:Xe.style.transform,zIndex:Xe.style.zIndex,willChange:Xe.style.willChange});const Fe=en-ar,an=er*(44+Math.abs(Fe)*18);let Na=-We*an+Fe*10,ai=0,nn=1-Math.min(.04,Math.abs(Fe)*.012),rl=0,ni="";if(z==="parallaxFast"&&(Na=-We*an*1.45+Fe*12),z==="parallaxReverse"&&(Na=We*an+Fe*10),z==="tiltScroll"&&(Na=-We*an*.62+Fe*8,rl=-We*(7+Math.abs(Fe)*2),nn=1-Math.min(.035,Math.abs(Fe)*.01),ni=`perspective(720px) translate3d(0, ${Na.toFixed(2)}px, 0) rotateX(${rl.toFixed(2)}deg) scale(${nn.toFixed(3)})`),z==="scaleScroll"){const li=1-Math.min(1,Math.abs(We));Na=-We*an*.28+Fe*8,ai=Fe*li*5,nn=Math.min(1.12,Math.max(.9,.9+li*(.18+er*.08)-Math.abs(Fe)*.01))}Xe.style.willChange="transform",Xe.style.zIndex=String(en+1),Xe.style.transform=ni||`translate3d(${ai.toFixed(2)}px, ${Na.toFixed(2)}px, 0) scale(${nn.toFixed(3)})`}),rt=setTimeout(()=>{_t.forEach(Xe=>{Xe.style.willChange="auto"})},300)}function Ht(){ft||(ht=requestAnimationFrame(vt),ft=!0)}return it.addEventListener("scroll",Ht,{passive:!0}),window.addEventListener("resize",Ht,{passive:!0}),Ht(),()=>{it.removeEventListener("scroll",Ht),window.removeEventListener("resize",Ht),ht&&cancelAnimationFrame(ht),rt&&clearTimeout(rt),ct.forEach((_t,fe)=>{fe.style.transform=_t.transform,fe.style.zIndex=_t.zIndex,fe.style.willChange=_t.willChange})}},[o,ut,c,S]),C.useEffect(()=>{if(ut("mount")){if(vs(o))return;ot("mount");return}const z=c??o;ut("scroll")&&Ot&&!vs(z)&&ot("scroll")},[o,ut,Ot,ot,c]),C.useEffect(()=>{yt&&Xt(yt.source)},[Xt,yt]),C.useEffect(()=>()=>{Z.current.forEach(z=>clearTimeout(z)),Z.current.clear(),$.current!==null&&clearTimeout($.current),W.current=[]},[]),jm(kt)){const z=In.Children.toArray(F),R=[...z,...z],X=kt==="marqueeReverse",it=kt==="marqueeFade",ct=Math.max(S,1),ht=Math.max(800,z.length*180),ft=Math.round(ht/ct*1e3);return C.createElement(G,{ref:J,className:O,style:{position:"relative",overflow:"hidden",width:"100%",...it?{maskImage:"linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)"}:null,...V}},C.createElement("style",{key:"trigr-list-marquee-keyframes",dangerouslySetInnerHTML:{__html:"@keyframes trigr-list-marquee-x{from{transform:translateX(0)}to{transform:translateX(-50%)}}"}}),C.createElement("div",{style:{display:"inline-flex",width:"max-content",gap:"1rem",whiteSpace:"nowrap",animation:U.current?void 0:`trigr-list-marquee-x ${ft}ms linear infinite${X?" reverse":""}`,willChange:U.current?void 0:"transform"}},R.map((rt,pt)=>C.createElement("div",{key:`mq-${pt}`,style:{display:"inline-flex",alignItems:"center"}},rt))))}const Ca=[];Ct.forEach(z=>{Ca.push(C.createElement("div",{key:`ghost-${z.key}`,"data-trigr-key":z.key,style:{position:"absolute",top:z.top,left:z.left,width:z.width,height:z.height,overflow:"visible",pointerEvents:"none"}},z.element))});const Je={position:"relative",...V},ue=In.Children.map(F,z=>In.isValidElement(z)?C.createElement("div",{key:z.key,"data-trigr-key":z.key??"",style:{overflow:"visible"}},z):z);return C.createElement(G,{ref:J,className:O,style:Je,onMouseOver:ut("hover")?ze:void 0,onMouseLeave:ut("hover")?Rt:void 0,onClick:ut("click")?Nt:void 0},ue,...Ca)}),Wl={List:Wy},zs=[["Spring","cubic-bezier(0.34, 1.56, 0.64, 1)"],["Smooth","cubic-bezier(0.25, 0.46, 0.45, 0.94)"],["Snappy","cubic-bezier(0.2, 0, 0, 1)"],["Standard in","cubic-bezier(0.0, 0.0, 0.2, 1)"],["Standard out","cubic-bezier(0.4, 0.0, 1, 1)"],["Standard inOut","cubic-bezier(0.4, 0.0, 0.2, 1)"]],Fy=["fadeSwap","morph","slideReplace","typewriter","decoder","scramble","odometer","ticker","textRotate","gooeyMorph","strikeThrough","highlight","boldFlash","blur","letterDrop","glitch","textReveal","scatter","splash","textEffect","staggerText","splitReveal","splitSlide","scrollFanIn","bigBang","scatterAssemble","pixelRain","vortex","dominoFall","pendulum","centerBurst","gravityBounce","randomLetterSwap","fadeIn","slideUp","slideDown","flip","bounce","popIn","dropIn","riseUp","expandIn","bump","jitter","popUp","jello","shake","pulse","blink","wave","ping"],Iy=["fadeIn","letterDrop","textReveal","scatter","splash","textEffect","staggerText","splitReveal","splitSlide","scrollFanIn","bigBang","scatterAssemble","pixelRain","vortex","dominoFall","pendulum","centerBurst","gravityBounce","slideUp","slideDown","flip","bounce","popIn","dropIn","riseUp","expandIn"],au=["bump","jitter","popUp","jello","shake","pulse","blink","wave","ping","highlight","boldFlash","blur","randomLetterSwap","splitReveal","splitSlide","textReveal"],Py=["fadeIn","decoder","letterDrop","textReveal","scatter","splash","scramble","textEffect","staggerText","splitReveal","splitSlide","scrollFanIn","bigBang","scatterAssemble","pixelRain","vortex","dominoFall","pendulum","centerBurst","gravityBounce","slideUp","slideDown","flip","bounce","popIn","dropIn","riseUp","expandIn"],tx=["fadeSwap","morphText","slideReplace","crossFade","expandCollapse","diffAnimate","morphBlur","pushLeft","pushRight","flipPage","highlight","flash","fadeIn","fadeOut","wordFadeIn","wordSlideUp","wordPop","lineFadeIn","lineSlideUp","streamIn","streamSlide","slideUp","slideDown","slideLeft","slideRight","popIn","expandIn","zoomIn","pulse","shake"],ex=["fadeIn","wordFadeIn","wordSlideUp","wordPop","lineFadeIn","lineSlideUp","streamIn","streamSlide","scrollWordReveal","slideUp","slideDown","slideLeft","slideRight","popIn","expandIn","zoomIn","highlight","flash"],nu=["highlight","flash","pulse","shake","fadeIn","wordFadeIn","wordSlideUp","wordPop","lineFadeIn","lineSlideUp","slideUp","slideDown","popIn","zoomIn"],ax=["fadeIn","wordFadeIn","wordSlideUp","wordPop","lineFadeIn","lineSlideUp","streamIn","streamSlide","slideUp","slideDown","slideLeft","slideRight","popIn","expandIn","zoomIn","highlight","flash"],cu=["fadeOut","slideOut","slideOutLeft","slideOutRight","popOut","bounceOut","collapseOut","flipOut","itemFadeOut","itemSlideOut","itemCollapseOut","glideOut"],tl=["fadeIn","slideIn","slideInLeft","slideInRight","popIn","bounceIn","expandIn","flipIn","staggerFadeIn","staggerSlideUp","staggerSlideLeft","staggerZoomIn","staggerPopIn","stackIn","wordCascade","wordWave","wordDrop","wordFadeIn","itemFadeIn","itemSlideIn","itemPopIn","itemBounceIn","glideIn"],Vm=["flip","smooth","spring","none"],Os=["marquee","marqueeReverse","marqueeFade"],Pl=["parallax","parallaxFast","parallaxReverse","tiltScroll","scaleScroll","parallaxStagger"],nx=["fadeIn","fadeOut","fadeSwap","slideUp","slideDown","slideLeft","slideRight","scaleIn","scaleOut","popIn","popOut","rotateIn","rotateOut","flipX","flipY","bounceIn","bounceOut","shake","wiggle","jello","flash","heartBeat","glideIn","glideOut","dropIn","riseUp","expandIn","collapseOut","expandHeight","fadeSlideUp","blurIn","blurOut","clipUp","clipLeft","zoomIn","zoomOut","press"],uu=["pulse","float","spin","ping","shimmer"],lx=["parallax","parallaxFast","parallaxReverse","tiltScroll","scaleScroll"],ix=["lift","sink","grow","glow","shadow","borderPop"],rx=["tilt","tilt3D","rotate3D","depth"],lu=["fadeIn","slideUp","slideDown","slideLeft","slideRight","scaleIn","popIn","rotateIn","flipX","flipY","bounceIn","glideIn","dropIn","riseUp","expandIn","expandHeight","fadeSlideUp","blurIn","clipUp","clipLeft","zoomIn"],sx=nx,ox=["press","shake","wiggle","jello","flash","heartBeat","popIn","bounceIn",...ix,...rx,...uu],cx=["press","ripple","burst","shake","wiggle","jello","flash","heartBeat","popIn","bounceIn","scaleIn"],ux={text:{change:Fy,scroll:Iy,hover:au,click:au,manual:au,mount:Py},paragraph:{change:tx,scroll:ex,hover:nu,click:nu,manual:nu,mount:ax},list:{scroll:[...tl,...Pl],hover:tl,click:tl,manual:[...tl,...Os],mount:[...tl,...Os]},block:{change:sx,scroll:[...lu,...lx],hover:ox,click:cx,manual:[...lu,"shake","wiggle","jello","flash","heartBeat",...uu],mount:[...lu,...uu]}};function Zl(l,o){if(l==="docs")return[];const c=ux[l];return Array.isArray(c)?c:c[o]??[]}const Zm="trigr.playground.state",Oe={module:"docs",trigger:"change",preset:"fadeSwap",duration:400,easing:"cubic-bezier(0.34, 1.56, 0.64, 1)",threshold:.8,stagger:60,listSpeed:50,propertyMode:"none",secondaryTrigger:"none"};function bs(l,o,c,s){return typeof l=="number"&&Number.isFinite(l)?Math.min(s,Math.max(c,l)):o}function fx(){if(typeof window>"u")return Oe;try{const l=window.localStorage.getItem(Zm);if(!l)return Oe;const o=JSON.parse(l),c=o.module&&al[o.module]?o.module:Oe.module,s=c!=="docs"&&o.trigger&&al[c].triggers.includes(o.trigger)?o.trigger:Oe.trigger,d=Zl(c,s),p=o.preset&&d.includes(o.preset)?o.preset:d[0]??Oe.preset,g=bs(o.duration,Oe.duration,100,1e3),x=typeof o.easing=="string"&&zs.some(([,A])=>A===o.easing)?o.easing:Oe.easing,v=bs(o.threshold,Oe.threshold,.05,1),m=bs(o.stagger,Oe.stagger,0,240),y=bs(o.listSpeed,Oe.listSpeed,10,180),S=o.propertyMode&&el[o.propertyMode]?o.propertyMode:Oe.propertyMode,T=o.secondaryTrigger&&(o.secondaryTrigger==="none"||al[c].triggers.includes(o.secondaryTrigger))?o.secondaryTrigger:Oe.secondaryTrigger;return{module:c,trigger:s,preset:p,duration:g,easing:x,threshold:v,stagger:m,listSpeed:y,propertyMode:S,secondaryTrigger:T}}catch{return Oe}}const el={none:{label:"None",description:"Run only the selected animation preset."},brandShift:{label:"Brand shift",description:"Tween color and subtle letter spacing alongside the animation.",properties:{color:["#111111","#7F77DD"],letterSpacing:["0px","0.5px"]}},typeScale:{label:"Type scale",description:"Animate font size and color together for typography transitions.",properties:{color:["#111111","#0f766e"],fontSize:["14px","18px"]}},softEmphasis:{label:"Soft emphasis",description:"Add gentle background and color changes without changing layout.",properties:{color:["#1a1a1a","#111111"],backgroundColor:["rgba(255,255,255,0)","rgba(255,230,167,0.75)"]}}},al={docs:{title:"Docs",desc:"A complete guide to trigr: mental model, modules, triggers, presets, best practices, and real-world recipes.",color:"#111111",triggers:[]},text:{title:"Text",desc:"Animate individual characters, words, and numbers on change, scroll, hover, click, manual, or mount trigger. Perfect for headlines, live counters, navigation, and interactive labels.",color:"#6366f1",triggers:["change","scroll","hover","click","manual","mount"]},paragraph:{title:"Paragraph",desc:"Word and line-level animations for prose, articles, and card descriptions. Supports the same trigger system as Text for content transitions and scroll reveals.",color:"#06b6d4",triggers:["change","scroll","hover","click","manual","mount"]},list:{title:"List",desc:"Animate any repeated collection: cards, buttons, menu items, feature rows, pricing options, logos, dashboard rows, and scroll-depth stacks.",color:"#f59e0b",triggers:["mount","scroll","hover","click","manual"]},block:{title:"Block",desc:"Animate any element — cards, sections, notifications — with scroll, hover, click, change, manual, or mount triggers. Includes parallax, 3D tilt, hover states, overlays, and exit animations.",color:"#a855f7",triggers:["change","scroll","hover","click","manual","mount"]}},Km=["fadeOut","slideUp","slideDown","slideLeft","slideRight","scaleOut","popOut","zoomOut","flipX","flipY","collapseOut","blurOut","fadeSlideUp","glideOut","dropIn"],Jm=C.createContext(null),Wm=C.createContext({threshold:Oe.threshold,stagger:Oe.stagger,listSpeed:Oe.listSpeed,propertyMode:Oe.propertyMode,secondaryTrigger:Oe.secondaryTrigger});function pe(){return C.useContext(Wm)}function wa(l){return l?`
  properties={{
${Object.entries(l).map(([c,[s,d]])=>`    ${c}: [${JSON.stringify(s)}, ${JSON.stringify(d)}],`).join(`
`)}
  }}`:""}function be(l,o){return o!=="none"&&o!==l?[l,o]:l}function Oa(l,o){const c=be(l,o);return Array.isArray(c)?`{[${c.map(s=>`"${s}"`).join(", ")}]}`:`"${c}"`}function dx({module:l,trigger:o,preset:c}){const{threshold:s,stagger:d,listSpeed:p,propertyMode:g,secondaryTrigger:x}=pe(),v=el[g],m=l==="list"&&Pl.includes(c),y=l==="list"&&Os.includes(c),S=[x!=="none"&&x!==o?`${o} + ${x}`:`${o} trigger`,`${c} preset`,l==="list"&&o!=="scroll"?`${d}ms stagger`:`${s} threshold`,m?`${(p/100).toFixed(2)} parallax speed`:y?`${p}px/s marquee`:l==="list"?`${v.label} properties`:`${v.label} properties`];return u.jsxs("div",{className:"capability-panel",children:[u.jsxs("div",{children:[u.jsx("span",{className:"capability-eyebrow",children:"This demo covers"}),u.jsx("div",{className:"capability-chips",children:S.map(T=>u.jsx("span",{children:T},T))})]}),u.jsx("p",{children:v.description})]})}function oe({children:l}){const o=C.useContext(Jm),[c,s]=C.useState(!1),d=o?o.codeOpen:c;return u.jsxs("div",{className:"code-wrap",children:[!o&&u.jsx("button",{type:"button",className:"view-code-btn",onClick:()=>s(p=>!p),children:c?"Hide Code":"View Code"}),d&&u.jsx("pre",{className:"code",children:l.split(/("(?:[^"]*)")/g).map((p,g)=>u.jsx("span",{className:p.startsWith('"')?"code-string":p.includes("<")||p.includes(">")?"code-tag":"",children:p},g))})]})}function Om({children:l}){return u.jsx("pre",{className:"code docs-code",children:l.split(/("(?:[^"]*)")/g).map((o,c)=>u.jsx("span",{className:o.startsWith('"')?"code-string":o.includes("<")||o.includes(">")?"code-tag":"",children:o},c))})}function tr({value:l,options:o,onChange:c}){const[s,d]=C.useState(!1),[p,g]=C.useState(""),x=C.useRef(null),v=C.useMemo(()=>{const y=p.trim().toLowerCase();return y?o.filter(S=>S.toLowerCase().includes(y)):o},[o,p]),m=C.useCallback(y=>{x.current&&(x.current.contains(y.target)||(d(!1),g("")))},[]);return C.useEffect(()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)),[m]),u.jsxs("div",{className:`select-menu${s?" open":""}`,ref:x,children:[u.jsxs("button",{type:"button",className:"select-trigger",onClick:()=>d(y=>!y),children:[u.jsx("span",{className:"select-value",children:l}),u.jsx("span",{className:"select-caret",children:"⌄"})]}),s&&u.jsxs("div",{className:"select-popover",children:[u.jsx("div",{className:"select-search-wrap",children:u.jsx("input",{autoFocus:!0,className:"select-search",value:p,onChange:y=>g(y.target.value),placeholder:"Search..."})}),v.map(y=>u.jsx("button",{type:"button",className:`select-option${y===l?" active":""}`,onClick:()=>{c(y),d(!1),g("")},children:y},y)),v.length===0&&u.jsx("div",{className:"select-empty",children:"No matches"})]})]})}function ti({children:l,header:o,toolbar:c,className:s="",enableCodeToggle:d=!0}){const[p,g]=C.useState(!1);function x(){g(v=>!v)}return u.jsxs("div",{className:`preview-card${s?` ${s}`:""}`,children:[u.jsxs("div",{className:"preview-header",children:[u.jsxs("div",{className:"traffic-lights",children:[u.jsx("span",{className:"dot dot-red"}),u.jsx("span",{className:"dot dot-yellow"}),u.jsx("span",{className:"dot dot-green"})]}),u.jsxs("div",{className:"preview-actions",children:[d&&u.jsx("button",{type:"button",className:"window-action-btn view-code-header-btn",onClick:x,children:p?"Hide Code":"View Code"}),o]})]}),c&&u.jsx("div",{className:"preview-toolbar",children:c}),u.jsx("div",{className:`preview-body${p?" code-open":" preview-open"}`,children:u.jsx(Jm.Provider,{value:{inPreview:!0,codeOpen:p},children:l})})]})}function px({onClick:l}){return u.jsxs("button",{className:"replay-btn",onClick:l,children:[u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 2v6h-6"}),u.jsx("path",{d:"M3 12a9 9 0 0 1 15-6.7L21 8"})]}),"Replay"]})}const Nm=["trigr","animation","motion","design","morph","scroll","hover","click","physics","spring","easing","keyframe","stagger","parallax","interaction","playground","typography","gradient","overlay","reveal"];function mx({preset:l,duration:o,easing:c}){const[s,d]=C.useState("trigr"),{properties:p,secondaryTrigger:g}=pe(),x=be("change",g);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Live search — type or click random to see text animate with each change"}),u.jsxs("div",{className:"search-field",children:[u.jsx("input",{value:s,onChange:v=>d(v.target.value),placeholder:"Search..."}),u.jsx("button",{className:"random-btn",onClick:()=>d(Nm[Math.floor(Math.random()*Nm.length)]),children:"Random"})]}),u.jsx("div",{className:"search-result-display",children:u.jsx(Fl.Text,{trigger:x,value:s,animation:l,duration:o,easing:c,properties:p,as:"h2",...l==="highlight"?{highlightColor:"yellow"}:{},children:s})}),u.jsxs("span",{className:"demo-meta",children:["Results for: ",s||" "]}),u.jsx(oe,{children:`import { Animate } from "trigr/text"

function SearchDemo() {
  const [query, setQuery] = useState("")

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Animate.Text
        trigger=${Oa("change",g)}
        value={query}
        animation="${l}"
        duration={${o}}
        easing="${c}"${wa(p)}
        as="h2"
      >
        {query}
      </Animate.Text>
    </div>
  )
}`})]})}const Am=["Home","Products","Pricing","About","Contact"];function hx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(""),{properties:p,secondaryTrigger:g}=pe(),x=be("hover",g);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Hover over each nav item to animate the text"}),u.jsx("nav",{className:"nav-links-demo",children:Am.map(v=>u.jsx(Fl.Text,{trigger:x,animation:l,duration:o,easing:c,properties:p,as:"button",className:"nav-link-item",onHoverStart:()=>d(v),onHoverEnd:()=>d(""),children:v},v))}),u.jsxs("span",{className:"demo-meta",children:["Hovered: ",s||"—"]}),u.jsx(oe,{children:`import { Animate } from "trigr/text"

function NavBar() {
  return (
    <nav>
      ${Am.map(v=>`<Animate.Text
  trigger="hover"
  animation="${l}"
  duration={${o}}
  easing="${c}"
  as="button"
>
  ${v}
</Animate.Text>`).join(`
      `)}
    </nav>
  )
}`})]})}function km({preset:l,duration:o,easing:c}){const[s,d]=C.useState(0),{properties:p,secondaryTrigger:g}=pe(),x=be("click",g);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Click the text — the animation runs on every click"}),u.jsx(Fl.Text,{trigger:x,animation:l,duration:o,easing:c,properties:p,onClick:()=>d(v=>v+1),as:"span",style:{cursor:"pointer",fontSize:"clamp(28px, 4vw, 48px)",fontWeight:600},children:"Click Me"}),u.jsxs("span",{className:"demo-meta",children:[s," clicks"]}),u.jsx(oe,{children:`import { Animate } from "trigr/text"

function ClickableText() {
  const [count, setCount] = useState(0)

  return (
    <Animate.Text
      trigger="click"
      animation="${l}"
      duration={${o}}
      easing="${c}"
      onClick={() => setCount((c) => c + 1)}
      as="span"
      style={{ cursor: "pointer", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600 }}
    >
      Click Me
    </Animate.Text>
  )
}`})]})}const Dm=["Features","Blog","Testimonials","FAQ"];function gx({preset:l,duration:o,easing:c}){const{threshold:s,properties:d,secondaryTrigger:p}=pe(),g=be("scroll",p);return u.jsxs("div",{className:"real-demo scroll-demo",children:[u.jsx("div",{className:"scroll-entry-screen",children:u.jsx("div",{className:"scroll-intro",children:"Scroll ⌄"})}),u.jsx("div",{className:"scroll-hfeed",children:Dm.map(x=>u.jsxs("div",{className:"scroll-reveal-item",children:[u.jsx(Fl.Text,{trigger:g,animation:l,duration:o,easing:c,threshold:s,properties:d,once:!1,repeat:!0,as:"h2",...l==="highlight"?{highlightColor:"yellow"}:{},children:x}),u.jsxs("p",{className:"demo-label",children:["This is the ",x.toLowerCase()," section. It animates each time you scroll back."]})]},x))}),u.jsx(oe,{children:`import { Animate } from "trigr/text"

const sections = ${JSON.stringify(Dm)}

function PageSections() {
  return sections.map((heading) => (
    <section key={heading}>
      <Animate.Text
        trigger=${Oa("scroll",p)}
        animation="${l}"
        duration={${o}}
        easing="${c}"
        threshold={${s}}${wa(d)}${l==="highlight"?`
        highlightColor="yellow"`:""}
        once={false}
        repeat
        as="h2"
      >
        {heading}
      </Animate.Text>
    </section>
  ))
}`})]})}const iu=["The best interface is no interface.","Design is not just what it looks like.","Simplicity is the ultimate sophistication."];function yx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(0),[p,g]=C.useState(0),x=C.useRef(null),{properties:v,secondaryTrigger:m}=pe(),y=be("manual",m),S=iu[s];function T(){var A;d(j=>(j+1)%iu.length),g(j=>j+1),(A=x.current)==null||A.animate()}return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:'Click "Next" to manually trigger the quote transition'}),u.jsx("div",{className:"quote-display",children:u.jsxs(Fl.Text,{ref:x,trigger:y,animation:l,duration:o,easing:c,properties:v,as:"blockquote",children:['"',S,'"']})}),u.jsxs("div",{className:"manual-controls",children:[u.jsx("button",{className:"fire-button",onClick:T,children:"Next Quote"}),u.jsxs("span",{className:"demo-meta",children:[p," transitions"]})]}),u.jsx(oe,{children:`import { Animate } from "trigr/text"

const quotes = ${JSON.stringify(iu)}

function QuoteRotator() {
  const ref = useRef(null)
  const [idx, setIdx] = useState(0)
  const quote = quotes[idx]

  function next() {
    setIdx((i) => (i + 1) % quotes.length)
    ref.current?.animate()
  }

  return (
    <div>
      <Animate.Text
        ref={ref}
        trigger="manual"
        animation="${l}"
        duration={${o}}
        easing="${c}"
        as="blockquote"
      >
        "{quote}"
      </Animate.Text>
      <button onClick={next}>Next Quote</button>
    </div>
  )
}`})]})}const Ym=["Page Loaded","Welcome Back","Section Ready"];function xx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(!0),{properties:p,secondaryTrigger:g}=pe(),x=be("mount",g);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Toggle to mount/unmount the headline with an entrance animation"}),u.jsx("div",{className:"manual-controls",children:u.jsx("button",{className:"fire-button",onClick:()=>d(v=>!v),children:s?"Unmount":"Mount"})}),u.jsx("div",{className:"search-result-display",style:{minHeight:60},children:s&&u.jsx(Fl.Text,{trigger:x,animation:l,duration:o,easing:c,properties:p,as:"h2",children:Ym[Math.floor(Math.random()*Ym.length)]},String(s))}),u.jsx(oe,{children:`import { Animate } from "trigr/text"

function MountDemo() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow((v) => !v)}>
        {show ? "Unmount" : "Mount"}
      </button>
      {show && (
        <Animate.Text
          trigger="mount"
          animation="${l}"
          duration={${o}}
          easing="${c}"
          as="h2"
        >
          Page Loaded
        </Animate.Text>
      )}
    </div>
  )
}`})]})}function vx({preset:l,duration:o,easing:c,trigger:s}){const d=s==="change"?u.jsx(mx,{preset:l,duration:o,easing:c}):s==="hover"?u.jsx(hx,{preset:l,duration:o,easing:c}):s==="click"?u.jsx(km,{preset:l,duration:o,easing:c}):s==="scroll"?u.jsx(gx,{preset:l,duration:o,easing:c}):s==="manual"?u.jsx(yx,{preset:l,duration:o,easing:c}):s==="mount"?u.jsx(xx,{preset:l,duration:o,easing:c}):u.jsx(km,{preset:l,duration:o,easing:c});return u.jsx("div",{className:"section",children:u.jsx(ti,{children:d})})}const Ss=[{title:"Designing Microinteractions",body:"Small, functional moments that guide users and create delightful experiences. The key is keeping them subtle and purposeful."},{title:"The Physics of Animation",body:"Good motion follows real-world physics — objects accelerate naturally and create interfaces that feel alive."}],_m=["The quick brown fox jumps over the lazy dog near the riverbank.","Motion design brings user interfaces to life with purpose and grace.","Every pixel should serve a purpose in the grand design of things.","Spring physics create natural-feeling animations that users love.","A well-timed transition can make the difference between good and great.","Scroll-triggered animations reveal content progressively as users explore.","Hover states provide immediate feedback that guides user interaction.","Staggered animations add depth and polish to interface elements.","Keyframe animations give precise control over every motion and pause.","Responsive design ensures your animations look great at any screen size."];function ei(l){return l==="highlight"?{highlightColor:"yellow"}:{}}function Fm(l){return l==="highlight"?`
      highlightColor="yellow"`:""}function Em({preset:l,duration:o,easing:c}){const[s,d]=C.useState(0),[p,g]=C.useState(null),{properties:x,secondaryTrigger:v}=pe(),m=be("change",v),y=s>=0?Ss[s]:{title:"Random Article"},S=s>=0?Ss[s].body:p??"";return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:'Click "Next Article" to transition between full paragraphs'}),u.jsx("div",{className:"paragraph-display",children:u.jsxs(Il.Paragraph,{trigger:m,value:S,animation:l,duration:o,easing:c,properties:x,as:"article",...ei(l),children:[u.jsx("h3",{children:y.title}),u.jsx("p",{children:S})]})}),u.jsxs("div",{className:"manual-controls",children:[u.jsx("button",{className:"fire-button",onClick:()=>d(T=>(T+1)%Ss.length),children:"Next Article"}),u.jsx("button",{className:"random-btn",onClick:()=>{g(_m[Math.floor(Math.random()*_m.length)]),d(-1)},children:"Random"}),u.jsxs("span",{className:"demo-meta",children:[s+1," / ",Ss.length]})]}),u.jsx(oe,{children:`import { Animate } from "trigr/paragraph"

const articles = [
  { title: "Designing Microinteractions", body: "Small functional moments that create delightful experiences." },
  { title: "The Physics of Animation", body: "Good motion follows real-world physics and feels alive." },
]

function ArticleViewer() {
  const [idx, setIdx] = useState(0)
  const article = articles[idx]

  return (
    <Animate.Paragraph
      trigger=${Oa("change",v)}
      value={article.body}
      animation="${l}"
      duration={${o}}
      easing="${c}"${wa(x)}${Fm(l)}
      as="article"
    >
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </Animate.Paragraph>
  )
}`})]})}const Hm=["The morning light filtered through the tall windows of the old library.","Dust motes danced in the golden beams, swirling with each passing breeze.","She ran her fingers along the worn spines of the books, reading their faded titles.","Each volume held a world within its pages, waiting to be discovered anew."];function bx({preset:l,duration:o,easing:c}){const{threshold:s,properties:d,secondaryTrigger:p}=pe(),g=be("scroll",p);return u.jsxs("div",{className:"real-demo scroll-demo",children:[u.jsx("div",{className:"scroll-entry-screen",children:u.jsx("div",{className:"scroll-intro",children:"Scroll ⌄"})}),u.jsx("div",{className:"story-content",children:Hm.map((x,v)=>u.jsx("div",{className:"story-paragraph",children:u.jsx(Il.Paragraph,{trigger:g,animation:l,duration:o,easing:c,threshold:s,properties:d,once:!1,repeat:!0,as:"div",...ei(l),children:u.jsx("p",{children:x})})},v))}),u.jsx(oe,{children:`import { Animate } from "trigr/paragraph"

const paragraphs = ${JSON.stringify(Hm)}

function StoryPage() {
  return paragraphs.map((text, i) => (
    <Animate.Paragraph
      key={i}
      trigger=${Oa("scroll",p)}
      animation="${l}"
      duration={${o}}
      easing="${c}"
      threshold={${s}}${wa(d)}${Fm(l)}
      once={false}
      repeat
      as="div"
    >
      <p>{text}</p>
    </Animate.Paragraph>
  ))
}`})]})}function Sx({preset:l,duration:o,easing:c}){const s=C.useRef(null),{properties:d,secondaryTrigger:p}=pe(),g=be("hover",p);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Hover over the text to animate it"}),u.jsxs(Il.Paragraph,{ref:s,trigger:g,animation:l,duration:o,easing:c,properties:d,as:"p",className:"paragraph-hover-demo",...ei(l),children:["Hover over this paragraph to see the ",l," animation in action. The text animates each time you hover, making it perfect for interactive content and micro-copy."]}),u.jsx(oe,{children:`import { Animate } from "trigr/paragraph"

function InteractiveText() {
  return (
    <Animate.Paragraph
      trigger="hover"
      animation="${l}"
      duration={${o}}
      easing="${c}"
      ${l==="highlight"?`highlightColor="yellow"
      `:""}as="p"
    >
      Hover over this paragraph to see the ${l} animation in action.
    </Animate.Paragraph>
  )
}`})]})}function wx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(!1),p=C.useRef(null),{properties:g,secondaryTrigger:x}=pe(),v=be("click",x);function m(){var y;d(S=>!S),(y=p.current)==null||y.animate()}return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:'Click "Read more" to see the paragraph animate with the full content'}),u.jsx(Il.Paragraph,{ref:p,trigger:v,animation:l,duration:o,easing:c,properties:g,onClick:m,as:"div",className:"readmore-card",...ei(l),children:u.jsx("p",{children:s?"This is the full expanded content. The paragraph animates smoothly when the text changes, giving the user a clear sense of what changed and where to look next.":"A short preview of the content. Click below to read the full article with a smooth paragraph transition."})}),u.jsx("button",{className:"fire-button",onClick:m,children:s?"Show Less":"Read More"}),u.jsx(oe,{children:`import { Animate } from "trigr/paragraph"

function ReadMoreCard() {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)

  function handleClick() {
    setExpanded((e) => !e)
    ref.current?.animate()
  }

  return (
    <Animate.Paragraph
      ref={ref}
      trigger="click"
      animation="${l}"
      duration={${o}}
      easing="${c}"
      onClick={handleClick}
      ${l==="highlight"?`highlightColor="yellow"
      `:""}as="div"
    >
      <p>{expanded ? "Full content…" : "Preview…"}</p>
    </Animate.Paragraph>
  )
}`})]})}const Vl=[{title:"Introduction",body:"Welcome to the presentation. This is the first slide showing an overview of the topics we will cover today."},{title:"Key Concepts",body:"Understanding the fundamental principles behind motion in user interfaces and how they improve the user experience."},{title:"Implementation",body:"Practical examples of how to implement these animations using the trigr library with various triggers and presets."}];function Cx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(0),[p,g]=C.useState(0),x=C.useRef(null),{properties:v,secondaryTrigger:m}=pe(),y=be("manual",m),S=Vl[s];function T(){var j;d(tt=>(tt+1)%Vl.length),g(tt=>tt+1),(j=x.current)==null||j.animate()}function A(){var j;d(tt=>(tt-1+Vl.length)%Vl.length),g(tt=>tt+1),(j=x.current)==null||j.animate()}return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Use the arrows to navigate slides with paragraph transitions"}),u.jsx("div",{className:"slide-deck",children:u.jsxs(Il.Paragraph,{ref:x,trigger:y,animation:l,duration:o,easing:c,properties:v,as:"div",...ei(l),children:[u.jsxs("span",{className:"slide-number",children:[s+1," / ",Vl.length]}),u.jsx("h3",{children:S.title}),u.jsx("p",{children:S.body})]})}),u.jsxs("div",{className:"manual-controls",children:[u.jsx("button",{className:"fire-button",onClick:A,children:"← Prev"}),u.jsx("button",{className:"fire-button",onClick:T,children:"Next →"}),u.jsxs("span",{className:"demo-meta",children:[p," transitions"]})]}),u.jsx(oe,{children:`import { Animate } from "trigr/paragraph"

const slides = ${JSON.stringify(Vl,null,2).replace(/\n/g,`
  `)}

function SlideDeck() {
  const ref = useRef(null)
  const [idx, setIdx] = useState(0)
  const slide = slides[idx]

  function next() {
    setIdx((i) => (i + 1) % slides.length)
    ref.current?.animate()
  }

  return (
    <Animate.Paragraph
      ref={ref}
      trigger="manual"
      animation="${l}"
      duration={${o}}
      easing="${c}"
      ${l==="highlight"?`highlightColor="yellow"
      `:""}as="div"
    >
      <h3>{slide.title}</h3>
      <p>{slide.body}</p>
    </Animate.Paragraph>
  )
}`})]})}const Mx="This paragraph appears with a smooth entrance animation as soon as it mounts. Perfect for loading states, dynamic content, and page transitions.";function Tx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(!0),{properties:p,secondaryTrigger:g}=pe(),x=be("mount",g);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Toggle to mount/unmount content with an entrance animation"}),u.jsx("div",{className:"manual-controls",children:u.jsx("button",{className:"fire-button",onClick:()=>d(v=>!v),children:s?"Unmount":"Mount"})}),u.jsx("div",{style:{minHeight:80},children:s&&u.jsx(Il.Paragraph,{trigger:x,animation:l,duration:o,easing:c,properties:p,...ei(l),children:Mx},String(s))}),u.jsx(oe,{children:`import { Animate } from "trigr/paragraph"

function MountDemo() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow((v) => !v)}>
        {show ? "Unmount" : "Mount"}
      </button>
      {show && (
        <Animate.Paragraph
          trigger="mount"
          animation="${l}"
          duration={${o}}
          easing="${c}"
          ${l==="highlight"?`highlightColor="yellow"
          `:""}>
          This paragraph fades in on mount.
        </Animate.Paragraph>
      )}
    </div>
  )
}`})]})}function jx({preset:l,duration:o,easing:c,trigger:s}){const d=s==="change"?u.jsx(Em,{preset:l,duration:o,easing:c}):s==="scroll"?u.jsx(bx,{preset:l,duration:o,easing:c}):s==="hover"?u.jsx(Sx,{preset:l,duration:o,easing:c}):s==="click"?u.jsx(wx,{preset:l,duration:o,easing:c}):s==="manual"?u.jsx(Cx,{preset:l,duration:o,easing:c}):s==="mount"?u.jsx(Tx,{preset:l,duration:o,easing:c}):u.jsx(Em,{preset:l,duration:o,easing:c});return u.jsx("div",{className:"section",children:u.jsx(ti,{children:d})})}function zx(l){if(l==="marquee"||l==="marqueeReverse"||l==="marqueeFade")return{animation:l};if(Pl.includes(l))return{animation:l};const o=cu.includes(l),c=tl.includes(l);if(Vm.includes(l))return{animation:"slideIn",exitAnimation:"slideOut",reorderAnimation:l};if(o)return{animation:tl.find(p=>{const g=p.replace(/In$/,"").replace(/Left|Right/,""),x=l.replace(/Out$/,"").replace(/Left|Right/,"");return g.trim()===x.trim()})??"slideIn",exitAnimation:l,reorderAnimation:"flip"};if(c){const d=cu.find(p=>{const g=p.replace(/Out$/,"").replace(/Left|Right/,""),x=l.replace(/In$/,"").replace(/Left|Right/,"");return g.trim()===x.trim()});return{animation:l,exitAnimation:d??"slideOut",reorderAnimation:"flip"}}return{animation:l,exitAnimation:"slideOut",reorderAnimation:"flip"}}const fu=[{id:"revenue",title:"Revenue",desc:"$48.2k this month",meta:"+12.4%",tone:"green"},{id:"activation",title:"Activation",desc:"1,284 completed flows",meta:"+8.1%",tone:"blue"},{id:"retention",title:"Retention",desc:"74% returning accounts",meta:"-1.2%",tone:"amber"},{id:"support",title:"Support",desc:"18 open conversations",meta:"Live",tone:"pink"},{id:"deploys",title:"Deploys",desc:"6 releases this week",meta:"Ready",tone:"violet"}],Rx=["Linear","Vercel","Stripe","Raycast","Figma","Notion"],Ox=["Motion","Tokens","Layout","Scroll","Hover","State"];function Nx(l){return l==="marquee"||l==="marqueeReverse"||l==="marqueeFade"?"marquee":Pl.includes(l)?"parallax":l==="wordCascade"||l==="wordWave"||l==="wordDrop"||l==="wordFadeIn"?"cascade":Vm.includes(l)?"reorder":l.startsWith("item")||cu.includes(l)?"presence":l==="slideInLeft"||l==="glideIn"?"slideLeft":l==="slideInRight"||l==="staggerSlideLeft"?"slideRight":l==="flipIn"||l==="flipOut"?"flip":l==="bounceIn"||l==="bounceOut"||l==="itemBounceIn"?"bounce":l==="staggerPopIn"||l==="popIn"||l==="popOut"?"pop":"stagger"}function Ax({preset:l,duration:o,easing:c}){const[s,d]=C.useState(fu.slice(0,4)),[p,g]=C.useState(""),{stagger:x,listSpeed:v,properties:m}=pe(),y=Nx(l),S=y==="marquee",T=C.useMemo(()=>zx(l),[l]),A=C.useCallback(()=>{const O=p.trim();if(!O){const Q=fu.find(_=>!s.some(Y=>Y.id===_.id));Q&&d(_=>[Q,..._]);return}const V=`${O.toLowerCase().replace(/\W+/g,"-")}-${Date.now()}`;d(Q=>[{id:V,title:O,desc:"Custom collection item",meta:"New",tone:"blue"},...Q]),g("")},[p,s]),j=C.useCallback(O=>{d(V=>V.filter(Q=>Q.id!==O))},[]),tt=S?void 0:u.jsxs("div",{className:"field-row",children:[u.jsx("input",{value:p,onChange:O=>g(O.target.value),onKeyDown:O=>O.key==="Enter"&&A(),placeholder:"Add item..."}),u.jsx("button",{onClick:A,children:"Add"}),u.jsx("button",{onClick:()=>d(O=>O.slice(0,-1)),children:"Remove"}),u.jsx("button",{onClick:()=>d(O=>[...O].reverse()),children:"Reorder"}),u.jsxs("span",{className:"toolbar-count",children:[s.length," items"]})]}),G=S?`import { Animate } from "trigr/list"

<Animate.List animation="${l}" speed={${v}}${wa(m)}>
  {logos.map((logo) => (
    <span key={logo}>{logo}</span>
  ))}
</Animate.List>`:`import { Animate } from "trigr/list"

<Animate.List
  animation="${T.animation}"
  exitAnimation="${T.exitAnimation}"
  duration={${o}}
  easing="${c}"
  stagger={${x}}${wa(m)}
>
  {items.map((item) => (
    <DashboardRow key={item.id} item={item} />
  ))}
</Animate.List>`;return u.jsx("div",{className:"section",children:u.jsxs(ti,{header:u.jsx(px,{onClick:()=>d(O=>[...O].reverse())}),toolbar:tt,children:[S?u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Marquee carousel — repeated children loop continuously without the collection knowing what they are."}),u.jsxs("div",{className:"marquee-demo",children:[u.jsx("span",{className:"marquee-prefix",children:"trusted by"}),u.jsx(Wl.List,{animation:l,duration:o,speed:v,properties:m,children:Rx.map(O=>u.jsx("span",{className:"marquee-item",children:O},O))})]})]}):u.jsxs("div",{className:`list-demo list-demo-${y}`,children:[u.jsx("p",{className:"demo-label",children:y==="cascade"?"Cascade presets work well for tags, words, filters, and compact repeated UI.":y==="reorder"?"Reorder presets use keyed children to animate dashboard rows with FLIP.":y==="presence"?"Presence presets keep removed children alive long enough to exit cleanly.":y==="slideLeft"?"Items animate in from the left — ideal for sidebars, navigation, and menus.":y==="slideRight"?"Items animate in from the right — great for panels, drawers, and notifications.":y==="flip"?"Items flip into view with a 3D perspective — perfect for cards, tiles, and galleries.":y==="bounce"?"Items bounce into place with elastic energy — use for playful UIs and highlights.":y==="pop"?"Items pop with a scale overshoot — works well for callouts, alerts, and emphasis.":"Stagger presets reveal repeated cards, blocks, and feature rows with an offset per child."}),u.jsx(Wl.List,{animation:T.animation,exitAnimation:T.exitAnimation,reorderAnimation:T.reorderAnimation,duration:o,reorderDuration:o,easing:c,stagger:x,properties:m,children:y==="cascade"?Ox.map(O=>u.jsx("button",{className:"list-tag-pill",children:O},O)):s.map(O=>{if(y==="stagger")return u.jsxs("article",{className:`list-feature-card tone-${O.tone}`,children:[u.jsx("span",{children:O.meta}),u.jsx("strong",{children:O.title}),u.jsx("p",{children:O.desc})]},O.id);if(y==="presence")return u.jsxs("div",{className:"list-notification-row",children:[u.jsx("span",{className:`list-status-dot tone-${O.tone}`}),u.jsxs("div",{children:[u.jsx("strong",{children:O.title}),u.jsx("p",{children:O.desc})]}),u.jsx("button",{className:"list-remove-btn",onClick:()=>j(O.id),"aria-label":"Remove",children:"Dismiss"})]},O.id);if(y==="slideLeft"||y==="slideRight"){const V=y==="slideLeft"?"left":"right";return u.jsxs("div",{className:`list-nav-row side-${V}`,children:[u.jsx("span",{className:`nav-icon tone-${O.tone}`}),u.jsx("strong",{children:O.title}),u.jsx("span",{className:"nav-meta",children:O.meta})]},O.id)}return y==="flip"?u.jsxs("div",{className:"list-flip-card",children:[u.jsx("span",{className:`flip-dot tone-${O.tone}`}),u.jsxs("div",{children:[u.jsx("strong",{children:O.title}),u.jsx("p",{children:O.desc})]}),u.jsx("span",{className:"flip-meta",children:O.meta})]},O.id):y==="bounce"?u.jsxs("div",{className:"list-bounce-item",children:[u.jsx("span",{className:`bounce-ball tone-${O.tone}`}),u.jsx("div",{children:u.jsx("strong",{children:O.title})})]},O.id):y==="pop"?u.jsxs("div",{className:"list-pop-row",children:[u.jsx("strong",{children:O.title}),u.jsx("span",{className:"pop-badge",children:O.meta})]},O.id):u.jsxs("div",{className:"list-dashboard-row",children:[u.jsx("span",{className:`list-status-dot tone-${O.tone}`}),u.jsxs("div",{children:[u.jsx("strong",{children:O.title}),u.jsx("p",{children:O.desc})]}),u.jsx("span",{children:O.meta})]},O.id)})})]}),u.jsx(oe,{children:G})]})})}const Im=[{id:"overview",title:"Overview",desc:"Workspace pulse and recent changes"},{id:"projects",title:"Projects",desc:"Active launches and timelines"},{id:"reports",title:"Reports",desc:"Weekly metrics and exports"},{id:"settings",title:"Settings",desc:"Team permissions and billing"}];function kx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(!0),{stagger:p,properties:g}=pe();return u.jsx("div",{className:"section",children:u.jsxs(ti,{children:[u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Toggle list mount/unmount — items animate in with staggered entrance"}),u.jsx("div",{className:"manual-controls",children:u.jsx("button",{className:"fire-button",onClick:()=>d(x=>!x),children:s?"Unmount":"Mount"})}),u.jsx("div",{className:"list-demo list-demo-presence",style:{minHeight:260},children:s&&u.jsx(Wl.List,{trigger:"mount",animation:l,duration:o,easing:c,stagger:p,properties:g,children:Im.map(x=>u.jsxs("div",{className:"list-dashboard-row",children:[u.jsx("span",{className:"list-status-dot tone-blue"}),u.jsxs("div",{children:[u.jsx("strong",{children:x.title}),u.jsx("p",{children:x.desc})]}),u.jsx("span",{children:"Open"})]},x.id))},String(s))})]}),u.jsx(oe,{children:`import { Animate } from "trigr/list"

function ListMountDemo() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow((v) => !v)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <Animate.List
          trigger="mount"
          animation="${l}"
          duration={${o}}
          easing="${c}"
          stagger={${p}}${wa(g)}
        >
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </Animate.List>
      )}
    </div>
  )
}`})]})})}function Dx({preset:l,duration:o,easing:c}){const{stagger:s,threshold:d,properties:p,secondaryTrigger:g,listSpeed:x}=pe(),v=be("scroll",g),m=Number((x/100).toFixed(2));if(Pl.includes(l)){const S=[{id:"urban",title:"Urban Reflections",desc:"Cards travel at slightly different depths while the preview scrolls.",tone:"pricing"},{id:"wild",title:"Wilderness Silence",desc:"Each keyed child remains developer-owned; trigr only controls collection motion.",tone:"features"},{id:"ocean",title:"Ocean Whispers",desc:"Use this for card stacks, hero panels, logos, pricing rows, or feature blocks.",tone:"basic"},{id:"mountain",title:"Mountain Echoes",desc:"The collection creates depth without changing the public child structure.",tone:"faq"}];return u.jsxs("div",{className:"real-demo scroll-demo list-parallax-demo",children:[u.jsx("div",{className:"scroll-entry-screen",children:u.jsx("div",{className:"scroll-intro",children:"Scroll ⌄"})}),u.jsx(Wl.List,{trigger:v,animation:l,speed:m,threshold:d,className:"list-parallax-stack",children:S.map(T=>u.jsxs("article",{className:`list-parallax-card card-${T.tone}`,children:[u.jsx("span",{children:T.id}),u.jsx("strong",{children:T.title}),u.jsx("p",{children:T.desc}),u.jsx("button",{children:"See more →"})]},T.id))}),u.jsx(oe,{children:`import { Animate } from "trigr/list"

function CollectionParallax({ cards }) {
  return (
    <Animate.List
      trigger=${Oa("scroll",g)}
      animation="${l}"
      speed={${m}}
      threshold={${d}}
    >
      {cards.map((card) => (
        <article key={card.id}>{card.title}</article>
      ))}
    </Animate.List>
  )
}`})]})}return u.jsxs("div",{className:"real-demo scroll-demo",children:[u.jsx("div",{className:"scroll-entry-screen",children:u.jsx("div",{className:"scroll-intro",children:"Scroll ⌄"})}),["Metrics","Notifications","Pricing"].map((S,T)=>u.jsx("div",{className:"list-scroll-item",children:u.jsx(Wl.List,{trigger:v,animation:l,duration:o,easing:c,stagger:s,threshold:d,properties:p,children:fu.slice(T,T+3).map(A=>u.jsxs("div",{className:"list-dashboard-row",children:[u.jsx("span",{className:`list-status-dot tone-${A.tone}`}),u.jsxs("div",{children:[u.jsx("strong",{children:A.title}),u.jsx("p",{children:A.desc})]}),u.jsx("span",{children:A.meta})]},`${S}-${A.id}`))})},S)),u.jsx(oe,{children:`import { Animate } from "trigr/list"

function ScrollCollection() {
  return (
    <Animate.List
      trigger=${Oa("scroll",g)}
      animation="${l}"
      threshold={${d}}
      duration={${o}}
      easing="${c}"
      stagger={${s}}${wa(p)}
    >
      {rows.map((row) => (
        <DashboardRow key={row.id} {...row} />
      ))}
    </Animate.List>
  )
}`})]})}function Yx({preset:l,duration:o,easing:c,trigger:s}){const d=C.useRef(null),[p,g]=C.useState(0),{stagger:x,properties:v,secondaryTrigger:m}=pe(),y=be(s,m),S=s==="manual";return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:s==="hover"?"Hover the menu group to replay the collection animation.":s==="click"?"Click the collection to replay the animation across keyed children.":"Fire the collection animation imperatively with ref.current.animate()."}),S&&u.jsx("button",{className:"fire-button",onClick:()=>{var T;(T=d.current)==null||T.animate(),g(A=>A+1)},children:"Fire collection"}),u.jsx("div",{className:"list-demo list-demo-presence",children:u.jsx(Wl.List,{ref:d,trigger:y,animation:l,duration:o,easing:c,stagger:x,properties:v,onReorder:()=>g(T=>T+1),children:Im.map(T=>u.jsxs("button",{className:"list-menu-button",children:[u.jsx("span",{className:"list-status-dot tone-violet"}),u.jsx("span",{children:T.title})]},T.id))})}),u.jsx("span",{className:"demo-meta",children:S?`${p} manual fires`:`${s} trigger`}),u.jsx(oe,{children:`import { Animate } from "trigr/list"

function MenuMotion() {
  const ref = useRef(null)

  return (
    <>
      ${S?"<button onClick={() => ref.current?.animate()}>Fire</button>":""}
      <Animate.List
        ref={ref}
        trigger=${Oa(s,m)}
        animation="${l}"
        duration={${o}}
        easing="${c}"
        stagger={${x}}${wa(v)}
      >
        {items.map((item) => (
          <button key={item.id}>{item.title}</button>
        ))}
      </Animate.List>
    </>
  )
}`})]})}function _x({preset:l,duration:o,easing:c,trigger:s}){if(s==="mount")return u.jsx(kx,{preset:l,duration:o,easing:c});const d=s==="scroll"?u.jsx(Dx,{preset:l,duration:o,easing:c}):s==="hover"||s==="click"||s==="manual"?u.jsx(Yx,{preset:l,duration:o,easing:c,trigger:s}):u.jsx(Ax,{preset:l,duration:o,easing:c});return u.jsx("div",{className:"section",children:u.jsx(ti,{children:d})})}function ll({title:l,desc:o,tone:c}){return u.jsxs("div",{className:`block-demo-card${c?` card-${c}`:""}`,children:[u.jsx("div",{className:"block-card-icon",children:u.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4"}),u.jsx("path",{d:"M3 9h18"})]})}),u.jsx("h3",{children:l}),u.jsx("p",{children:o}),u.jsx("button",{children:"Learn More →"})]})}function Um({preset:l,duration:o,easing:c,onReplay:s}){const[d,p]=C.useState(0),{properties:g,secondaryTrigger:x}=pe(),v=be("change",x);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Each notification triggers a block animation on value change"}),u.jsx("button",{className:"fire-button",onClick:()=>{p(m=>m+1),s()},children:"New Notification"}),u.jsx("div",{className:"block-preview-area",children:u.jsx(Fa.Block,{trigger:v,value:d,animation:l,duration:o,easing:c,properties:g,children:u.jsx(ll,{title:`Notification #${d}`,desc:`This card animates in using the "${l}" preset when data changes.`})})}),u.jsx(oe,{children:`import { Animate } from "trigr/block"

function NotificationFeed() {
  const [tick, setTick] = useState(0)

  function addNotif() {
    setTick((c) => c + 1)
  }

  return (
    <>
      <button onClick={addNotif}>New Notification</button>
      <Animate.Block
        trigger=${Oa("change",x)}
        value={tick}
        animation="${l}"
        duration={${o}}
        easing="${c}"${wa(g)}
      >
        <Card title={\`Notification #\${tick}\`} desc="..." />
      </Animate.Block>
    </>
  )
}`})]})}function Ex({preset:l,duration:o,easing:c}){const s=["parallax","parallaxFast","parallaxReverse","tiltScroll","scaleScroll"].includes(l),{threshold:d,properties:p,secondaryTrigger:g}=pe(),x=be("scroll",g);return s?u.jsxs("div",{className:"real-demo scroll-demo block-parallax-demo",children:[u.jsx("div",{className:"scroll-entry-screen",children:u.jsxs("div",{className:"scroll-intro",children:["Scroll ",u.jsx("span",{"aria-hidden":"true",children:"⌄"})]})}),u.jsx("div",{className:"block-scroll-item",children:u.jsx(Fa.Block,{trigger:x,animation:l,speed:.5,threshold:d,duration:o,easing:c,className:"block-parallax-element",children:u.jsxs("div",{className:"block-parallax-visual",children:[u.jsx("span",{children:"Hero media"}),u.jsx("strong",{children:"One block, independent scroll speed"}),u.jsx("p",{children:"Use block parallax for a single visual, card, image, or section moving against the page."})]})})}),u.jsx(oe,{children:`import { Animate } from "trigr/block"

function HeroParallax() {
  return (
    <Animate.Block
      trigger=${Oa("scroll",g)}
      animation="${l}"
      speed={${.5}}
      threshold={${d}}
    >
      <div className="hero-image" />
    </Animate.Block>
  )
}`})]}):u.jsxs("div",{className:"real-demo scroll-demo",children:[u.jsx("div",{className:"scroll-entry-screen",children:u.jsx("div",{className:"scroll-intro",children:"Scroll ⌄"})}),["Features","Pricing","FAQ"].map(v=>u.jsx("div",{className:"block-scroll-item",children:u.jsx(Fa.Block,{animation:l,trigger:x,duration:o,easing:c,threshold:d,properties:p,once:!1,repeat:!0,children:u.jsx(ll,{title:v,desc:`This ${v.toLowerCase()} section animates each time it scrolls into view.`,tone:v.toLowerCase()})})},v)),u.jsx(oe,{children:`import { Animate } from "trigr/block"

const sections = ["Features", "Pricing", "FAQ"]

function LandingPage() {
  return sections.map((section) => (
    <section key={section}>
      <Animate.Block
        trigger=${Oa("scroll",g)}
        animation="${l}"
        duration={${o}}
        easing="${c}"
        threshold={${d}}${wa(p)}
        once={false}
        repeat
      >
        <Card title={section} desc="..." />
      </Animate.Block>
    </section>
  ))
}`})]})}function Hx({preset:l,duration:o,easing:c}){const{properties:s,secondaryTrigger:d}=pe(),p=be("hover",d);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Hover over each card to see the hover state animation"}),u.jsxs("div",{className:"block-hover-grid",children:[u.jsx(Fa.Block,{trigger:p,animation:l,duration:o,easing:c,properties:s,children:u.jsx(ll,{title:"Basic Plan",desc:"$19/mo — Great for individuals getting started.",tone:"basic"})}),u.jsx(Fa.Block,{trigger:p,animation:l,duration:o,easing:c,properties:s,children:u.jsx(ll,{title:"Pro Plan",desc:"$49/mo — Advanced features for teams.",tone:"pro"})})]}),u.jsx(oe,{children:`import { Animate } from "trigr/block"

const plans = [
  { title: "Basic Plan", desc: "..." },
  { title: "Pro Plan", desc: "..." },
]

function PricingGrid() {
  return plans.map((plan) => (
    <Animate.Block
      key={plan.title}
      trigger="hover"
      animation="${l}"
      duration={${o}}
      easing="${c}"
    >
      <Card title={plan.title} desc={plan.desc} />
    </Animate.Block>
  ))
}`})]})}function Ux({preset:l,duration:o,easing:c}){const[s,d]=C.useState(0),p=C.useRef(null),{properties:g,secondaryTrigger:x}=pe(),v=be("click",x);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Click the card to trigger the animation"}),u.jsx(Fa.Block,{ref:p,trigger:v,animation:l,duration:o,easing:c,properties:g,onClick:()=>d(m=>m+1),children:u.jsx(ll,{title:`Clicked ${s} times`,desc:`The "${l}" animation plays each time you click this card.`})}),u.jsx(oe,{children:`import { Animate } from "trigr/block"

function InteractiveCard() {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  return (
    <Animate.Block
      ref={ref}
      trigger="click"
      animation="${l}"
      duration={${o}}
      easing="${c}"
      onClick={() => setCount((c) => c + 1)}
    >
      <Card title={\`Clicked \${count} times\`} desc="..." />
    </Animate.Block>
  )
}`})]})}const ws=["Fill in your details","Verify your email","Set up billing","Done!"];function Bx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(0),[p,g]=C.useState(0),x=C.useRef(null),{properties:v,secondaryTrigger:m}=pe(),y=be("manual",m);function S(){var T;(T=x.current)==null||T.animate(),d(A=>(A+1)%ws.length),g(A=>A+1)}return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Step through the onboarding flow — each step triggers a manual animation"}),u.jsx(Fa.Block,{ref:x,trigger:y,animation:l,duration:o,easing:c,properties:v,children:u.jsx(ll,{title:`Step ${s+1}: ${ws[s]}`,desc:'This card animates via ref.current?.animate() when you click "Next Step".'})}),u.jsxs("div",{className:"manual-controls",children:[u.jsx("button",{className:"fire-button",onClick:S,children:"Next Step"}),u.jsxs("span",{className:"demo-meta",children:["Step ",s+1," of ",ws.length]})]}),u.jsx(oe,{children:`import { Animate } from "trigr/block"

const steps = ${JSON.stringify(ws)}

function OnboardingFlow() {
  const ref = useRef(null)
  const [step, setStep] = useState(0)

  function next() {
    ref.current?.animate()
    setStep((s) => (s + 1) % steps.length)
  }

  return (
    <Animate.Block
      ref={ref}
      trigger="manual"
      animation="${l}"
      duration={${o}}
      easing="${c}"
    >
      <Card title={steps[step]} desc="..." />
    </Animate.Block>
  )
}`})]})}function Lx({preset:l,duration:o,easing:c}){const[s,d]=C.useState(0),{properties:p,secondaryTrigger:g}=pe(),x=be("mount",g);return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"This card animates in as soon as it mounts"}),u.jsx(Fa.Block,{trigger:x,animation:l,duration:o,easing:c,properties:p,children:u.jsx(ll,{title:"Welcome!",desc:`Animating in with "${l}" triggered on mount.`,tone:"welcome"})},s),u.jsx("button",{className:"fire-button",onClick:()=>d(v=>v+1),children:"Remount Card"}),u.jsx(oe,{children:`import { Animate } from "trigr/block"

function PageEntrance() {
  return (
    <Animate.Block
      trigger="mount"
      animation="${l}"
      duration={${o}}
      easing="${c}"
    >
      <Card title="Welcome!" desc="..." />
    </Animate.Block>
  )
}`})]})}function Xx({duration:l,easing:o}){const[c,s]=C.useState([{id:1,title:"Build pipeline failed",desc:"The production build failed on commit a3f2c1d."},{id:2,title:"Deployment complete",desc:"Version 2.4.1 deployed to staging successfully."},{id:3,title:"New comment on PR #42",desc:"Alex requested changes to the animation module."}]),[d,p]=C.useState("fadeOut"),{properties:g}=pe();function x(v){s(m=>m.filter(y=>y.id!==v))}return u.jsxs("div",{className:"real-demo",children:[u.jsx("p",{className:"demo-label",children:"Dismiss each notification — it exits with the selected animation"}),u.jsxs("div",{className:"exit-controls",children:[u.jsx("label",{className:"control-label-sm",children:"Exit animation:"}),u.jsx(tr,{value:d,options:Km,onChange:v=>p(v)})]}),u.jsx("div",{className:"notif-stack",children:c.map(v=>u.jsx(Fa.Block,{trigger:"mount",animation:"fadeIn",show:!0,exitAnimation:d,duration:l,easing:o,properties:g,unmountOnExit:!0,children:u.jsxs("div",{className:"notif-card",onClick:()=>x(v.id),children:[u.jsxs("div",{className:"notif-body",children:[u.jsx("strong",{children:v.title}),u.jsx("p",{children:v.desc})]}),u.jsx("button",{className:"notif-dismiss",onClick:m=>{m.stopPropagation(),x(v.id)},"aria-label":"Dismiss",children:"✕"})]})},v.id))}),c.length===0&&u.jsx("div",{className:"empty-notifs",children:u.jsxs("p",{children:["All cleared! ",u.jsx("button",{className:"fire-button",onClick:()=>s([{id:1,title:"Build pipeline failed",desc:"The production build failed on commit a3f2c1d."},{id:2,title:"Deployment complete",desc:"Version 2.4.1 deployed to staging successfully."},{id:3,title:"New comment on PR #42",desc:"Alex requested changes to the animation module."}]),children:"Reset"})]})}),u.jsx(oe,{children:`import { useState } from "react"
import { Animate } from "trigr/block"

const notifications = [
  { id: 1, title: "Build failed", desc: "..." },
  { id: 2, title: "Deploy complete", desc: "..." },
]

function NotificationStack() {
  const [items, setItems] = useState(notifications)

  function dismiss(id) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  return items.map((item) => (
    <Animate.Block
      key={item.id}
      trigger="mount"
      animation="fadeIn"
      show={true}
      exitAnimation="${d}"
      duration={${l}}
      easing="${o}"
      unmountOnExit
    >
      <div onClick={() => dismiss(item.id)}>
        <strong>{item.title}</strong>
        <p>{item.desc}</p>
      </div>
    </Animate.Block>
  ))
}`})]})}function $x({preset:l,duration:o,easing:c,trigger:s}){const d=C.useCallback(()=>{},[]),g=s==="exit"?u.jsx(Xx,{duration:o,easing:c}):s==="change"?u.jsx(Um,{preset:l,duration:o,easing:c,onReplay:d}):s==="scroll"?u.jsx(Ex,{preset:l,duration:o,easing:c}):s==="hover"?u.jsx(Hx,{preset:l,duration:o,easing:c}):s==="click"?u.jsx(Ux,{preset:l,duration:o,easing:c}):s==="manual"?u.jsx(Bx,{preset:l,duration:o,easing:c}):s==="mount"?u.jsx(Lx,{preset:l,duration:o,easing:c}):u.jsx(Um,{preset:l,duration:o,easing:c,onReplay:d});return u.jsx("div",{className:"section",children:u.jsx(ti,{children:g})})}const qx=[{title:"Text",importPath:"trigr/text",component:"Animate.Text",use:"Short, inline text: words, labels, counters, nav items, headings, and tiny state changes.",examples:"Search labels, pricing words, changing numbers, hero keywords, command buttons."},{title:"Paragraph",importPath:"trigr/paragraph",component:"Animate.Paragraph",use:"Longer prose where words and lines need to remain readable while animating.",examples:"Article intros, marketing copy, FAQ answers, onboarding descriptions, feature summaries."},{title:"List",importPath:"trigr/list",component:"Animate.List",use:"Any repeated keyed collection, not only list tags.",examples:"Cards, buttons, menu items, dashboard rows, feature rows, logos, pricing options."},{title:"Block",importPath:"trigr/block",component:"Animate.Block",use:"One complete element or surface moving as a unit.",examples:"Cards, panels, modals, notifications, hero images, sections, hover surfaces."}],Gx=[{name:"change",desc:"Runs when the value prop changes. Best for replacing or updating content.",best:"fadeSwap, morph, slideReplace, typewriter, diffAnimate, block entrances."},{name:"scroll",desc:"Runs when the element reaches the configured viewport threshold.",best:"fadeIn, slide, line/word reveals, block parallax, list parallax variants."},{name:"hover",desc:"Runs on pointer hover. Best for short feedback that resets on leave.",best:"bump, lift, glow, press-like feedback, compact list item reveals."},{name:"click",desc:"Runs on click or tap. Best for tactile confirmation.",best:"press, ripple, burst, shake, bounce, list item feedback."},{name:"manual",desc:"Runs from ref.current.animate(). Use when outside state controls the timing.",best:"Replay buttons, guided tours, command palettes, step-by-step flows."},{name:"mount",desc:"Runs when the component appears. Best for first paint and conditional UI.",best:"fadeIn, popIn, stackIn, staggerSlideUp, block entrances."}],Qx=[{module:"Text",groups:[{title:"Swap and replace",presets:["fadeSwap","morph","slideReplace","typewriter","decoder","scramble","odometer","ticker","textRotate","gooeyMorph"],best:"Use with change when old and new text both matter."},{title:"Reveal",presets:["fadeIn","letterDrop","textReveal","scatter","splash","splitReveal","splitSlide","staggerText","textEffect","scrollFanIn"],best:"Use on mount or scroll for headings and labels."},{title:"Particle and physics",presets:["bigBang","scatterAssemble","pixelRain","vortex","dominoFall","pendulum","centerBurst","gravityBounce"],best:"Use sparingly for hero moments and expressive text."},{title:"Interaction",presets:["bump","jitter","popUp","jello","shake","pulse","blink","wave","ping","highlight","boldFlash","blur","randomLetterSwap"],best:"Use with hover, click, or manual feedback."}]},{module:"Paragraph",groups:[{title:"Word and line reveal",presets:["wordFadeIn","wordSlideUp","wordPop","lineFadeIn","lineSlideUp","streamIn","streamSlide","scrollWordReveal"],best:"Use with scroll or mount for readable prose."},{title:"Content replacement",presets:["fadeSwap","morphText","slideReplace","crossFade","expandCollapse","morphBlur","pushLeft","pushRight","flipPage"],best:"Use with change when paragraph copy updates."},{title:"Review and emphasis",presets:["highlight","diffAnimate","flash"],best:"Use for text review, edits, changed words, or attention states."},{title:"Block-like paragraph motion",presets:["fadeIn","slideUp","slideDown","slideLeft","slideRight","popIn","expandIn","zoomIn","pulse","shake"],best:"Use when the paragraph acts like a UI block."}]},{module:"List",groups:[{title:"Stagger",presets:["staggerFadeIn","staggerSlideUp","staggerSlideLeft","staggerZoomIn","staggerPopIn","stackIn"],best:"Use for cards, rows, blocks, buttons, and feature lists."},{title:"Cascade",presets:["wordCascade","wordWave","wordDrop","wordFadeIn"],best:"Use for compact word, tag, and button collections."},{title:"Presence",presets:["itemFadeIn","itemSlideIn","itemPopIn","itemBounceIn","itemFadeOut","itemSlideOut","itemCollapseOut"],best:"Use when keyed children are added or removed."},{title:"Motion systems",presets:["marquee","marqueeReverse","marqueeFade","parallax","parallaxFast","parallaxReverse","tiltScroll","scaleScroll","parallaxStagger","flip","smooth","spring","none"],best:"Use for logos, scroll-depth card groups, and keyed reorder."}]},{module:"Block",groups:[{title:"Entrance and exit",presets:["fadeIn","fadeSwap","slideUp","slideDown","slideLeft","slideRight","scaleIn","popIn","rotateIn","flipX","flipY","bounceIn","blurIn","clipUp","clipLeft","zoomIn"],best:"Use for cards, panels, sections, and notifications."},{title:"Scroll-linked",presets:["parallax","parallaxFast","parallaxReverse","tiltScroll","scaleScroll"],best:"Use for one hero image, card, or section moving at a different scroll speed."},{title:"Hover and cursor",presets:["lift","sink","grow","glow","shadow","borderPop","tilt","tilt3D","rotate3D","depth"],best:"Use for interactive cards, pricing panels, and clickable surfaces."},{title:"Feedback and overlays",presets:["press","ripple","burst","shake","wiggle","jello","flash","heartBeat","pulse","float","spin","ping","shimmer"],best:"Use for click feedback, loading surfaces, and status moments."}]}];function Vx(){return u.jsxs("div",{className:"docs-page",children:[u.jsxs("section",{className:"docs-hero",children:[u.jsx("span",{className:"docs-kicker",children:"Documentation"}),u.jsx("h2",{children:"Wrap content, choose a trigger, ship polished motion."}),u.jsx("p",{children:"trigr is a small React animation system built around a simple idea: the import tells trigr what kind of content is being animated, and the trigger tells trigr when that animation should run."}),u.jsx(Om,{children:`import { Animate } from "trigr/text"

<Animate.Text trigger="change" animation="fadeSwap" value={label}>
  <span>{label}</span>
</Animate.Text>

import { Animate } from "trigr/list"

<Animate.List trigger="scroll" animation="staggerSlideUp" stagger={80}>
  {cards.map((card) => <Card key={card.id} {...card} />)}
</Animate.List>`})]}),u.jsxs("section",{className:"docs-section",children:[u.jsxs("div",{className:"docs-section-head",children:[u.jsx("span",{children:"01"}),u.jsx("h3",{children:"Core Model"}),u.jsx("p",{children:"One component per content type. One trigger system everywhere."})]}),u.jsxs("div",{className:"docs-principle-grid",children:[u.jsxs("article",{children:[u.jsx("strong",{children:"Import by what animates"}),u.jsx("p",{children:"Use text for inline words, paragraph for prose, list for repeated keyed children, and block for one full surface."})]}),u.jsxs("article",{children:[u.jsx("strong",{children:"Trigger by when it runs"}),u.jsx("p",{children:"Use scroll, change, hover, click, manual, or mount. Multi-trigger arrays support up to two triggers."})]}),u.jsxs("article",{children:[u.jsx("strong",{children:"Presets stay content-aware"}),u.jsx("p",{children:"The same idea can feel different by module because text, paragraphs, lists, and blocks have different layout needs."})]})]})]}),u.jsxs("section",{className:"docs-section",children:[u.jsxs("div",{className:"docs-section-head",children:[u.jsx("span",{children:"02"}),u.jsx("h3",{children:"Modules"}),u.jsx("p",{children:"Pick the wrapper that matches the content shape, not the visual style."})]}),u.jsx("div",{className:"docs-module-grid",children:qx.map(l=>u.jsxs("article",{className:"docs-module-card",children:[u.jsxs("div",{children:[u.jsx("h4",{children:l.title}),u.jsx("code",{children:l.importPath})]}),u.jsx("p",{children:l.use}),u.jsx("small",{children:l.examples}),u.jsx("strong",{children:l.component})]},l.title))})]}),u.jsxs("section",{className:"docs-section",children:[u.jsxs("div",{className:"docs-section-head",children:[u.jsx("span",{children:"03"}),u.jsx("h3",{children:"Triggers"}),u.jsx("p",{children:"Triggers decide when motion fires. Presets decide how it feels."})]}),u.jsx("div",{className:"docs-trigger-grid",children:Gx.map(l=>u.jsxs("article",{children:[u.jsx("h4",{children:l.name}),u.jsx("p",{children:l.desc}),u.jsx("small",{children:l.best})]},l.name))}),u.jsx(Om,{children:`<Animate.Text
  trigger={["scroll", "change"]}
  scrollAnimation="fadeIn"
  animation="fadeSwap"
  threshold={0.3}
>
  <span>{text}</span>
</Animate.Text>`})]}),u.jsxs("section",{className:"docs-section",children:[u.jsxs("div",{className:"docs-section-head",children:[u.jsx("span",{children:"04"}),u.jsx("h3",{children:"Animation Categories"}),u.jsx("p",{children:"Every preset is grouped by intent so teams can choose motion deliberately."})]}),u.jsx("div",{className:"docs-animation-groups",children:Qx.map(l=>u.jsxs("article",{className:"docs-animation-module",children:[u.jsx("h4",{children:l.module}),u.jsx("div",{className:"docs-preset-groups",children:l.groups.map(o=>u.jsxs("div",{className:"docs-preset-group",children:[u.jsxs("div",{children:[u.jsx("strong",{children:o.title}),u.jsx("small",{children:o.best})]}),u.jsx("div",{className:"docs-preset-pills",children:o.presets.map(c=>u.jsx("span",{children:c},c))})]},o.title))})]},l.module))})]}),u.jsxs("section",{className:"docs-section docs-best-practices",children:[u.jsxs("div",{className:"docs-section-head",children:[u.jsx("span",{children:"05"}),u.jsx("h3",{children:"Best Practices"}),u.jsx("p",{children:"Rules for using trigr in production without making the interface feel busy."})]}),u.jsxs("div",{className:"docs-practice-grid",children:[u.jsxs("article",{children:[u.jsx("strong",{children:"Use change presets for replacement"}),u.jsx("p",{children:"fadeSwap, morph, typewriter, and slideReplace need old and new values to feel correct."})]}),u.jsxs("article",{children:[u.jsx("strong",{children:"Use scroll presets for reveal"}),u.jsx("p",{children:"Scroll should reveal content or link motion to scroll depth. Avoid forcing swap-only presets into scroll demos."})]}),u.jsxs("article",{children:[u.jsx("strong",{children:"Use list for keyed collections"}),u.jsx("p",{children:"Every child needs a stable key. trigr uses keys for presence, reorder, and item tracking."})]}),u.jsxs("article",{children:[u.jsx("strong",{children:"Keep hover and click short"}),u.jsx("p",{children:"Interaction feedback should feel immediate. Use shorter duration and snappy easing."})]}),u.jsxs("article",{children:[u.jsx("strong",{children:"Prefer block for one surface"}),u.jsx("p",{children:"If one complete card or image moves together, use block. If many children move as a collection, use list."})]}),u.jsxs("article",{children:[u.jsx("strong",{children:"Add properties for parallel style transitions"}),u.jsx("p",{children:"Use properties when color, font size, or background should tween alongside the animation."})]})]})]})]})}function Zx(){var Z;const l=C.useMemo(fx,[]),[o,c]=C.useState(l.module),[s,d]=C.useState(l.trigger),[p,g]=C.useState(l.preset),[x,v]=C.useState(l.duration),[m,y]=C.useState(l.easing),[S,T]=C.useState(l.threshold),[A,j]=C.useState(l.stagger),[tt,G]=C.useState(l.listSpeed),[O,V]=C.useState(l.propertyMode),[Q,_]=C.useState(l.secondaryTrigger),[Y,F]=C.useState(!1),B=C.useMemo(()=>({threshold:S,stagger:A,listSpeed:tt,propertyMode:O,secondaryTrigger:Q,properties:el[O].properties}),[tt,O,Q,A,S]),k=al[o],J=Zl(o,s),dt=k.triggers.filter($=>$!==s&&Zl(o,$).includes(p)),L=`${o}:${s}:${p}`,nt=o==="list"&&Pl.includes(p),st=o==="list"&&Os.includes(p);k.triggers,C.useEffect(()=>{if(o==="docs"){p&&g("");return}J.includes(p)||g(J[0]??"fadeIn")},[J,o,p]),C.useEffect(()=>{Q!=="none"&&!dt.includes(Q)&&_("none")},[dt,Q]),C.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Zm,JSON.stringify({module:o,trigger:s,preset:p,duration:x,easing:m,threshold:S,stagger:A,listSpeed:tt,propertyMode:O,secondaryTrigger:Q}))},[o,s,p,x,m,S,A,tt,O,Q]);function Ct($,lt){c($);const W=lt??al[$].triggers[0]??Oe.trigger;d(W),_("none"),g($==="docs"?"":Zl($,W)[0]??"fadeIn"),F(!1)}function St($){if(o==="docs")return;d($),_(W=>W===$?"none":W);const lt=Zl(o,$);g(lt[0]??"fadeIn")}const D=C.useMemo(()=>Object.keys(al),[]);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Kx}),u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("button",{className:"sidebar-toggle",onClick:()=>F(!Y),"aria-label":"Toggle sidebar",children:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),u.jsx("span",{className:"logo",children:u.jsxs("svg",{viewBox:"0 0 240 80",width:"100",height:"34",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("rect",{width:"240",height:"80",fill:"transparent"}),u.jsxs("g",{fill:"#111",children:[u.jsx("rect",{x:"10",y:"14",width:"8",height:"8"}),u.jsx("rect",{x:"20",y:"14",width:"8",height:"8"}),u.jsx("rect",{x:"30",y:"14",width:"8",height:"8"}),u.jsx("rect",{x:"10",y:"28",width:"8",height:"8"}),u.jsx("rect",{x:"30",y:"28",width:"8",height:"8"}),u.jsx("rect",{x:"10",y:"42",width:"8",height:"8"}),u.jsx("rect",{x:"20",y:"42",width:"8",height:"8"}),u.jsx("rect",{x:"30",y:"42",width:"8",height:"8"})]}),u.jsx("text",{x:"50",y:"48",fontFamily:"'Courier New', monospace",fontSize:"36",fontWeight:"bold",fill:"#111",letterSpacing:"2",children:"trigr"})]})}),u.jsxs("nav",{className:"topbar-nav",children:[u.jsx("button",{type:"button",onClick:()=>Ct("docs"),children:"Docs"}),u.jsx("a",{href:"#",children:"GitHub"})]})]})}),Y&&u.jsx("div",{className:"sidebar-overlay",onClick:()=>F(!1)}),u.jsxs("div",{className:"layout",children:[u.jsx("aside",{className:`sidebar${Y?" open":""}`,children:u.jsxs("div",{className:"sidebar-scroll",children:[D.map($=>{const lt=al[$],W=o===$;return u.jsxs("div",{className:`sidebar-module${W?" active":""}`,style:W?{"--module-color":lt.color}:{},children:[u.jsxs("button",{className:"sidebar-module-btn",onClick:()=>Ct($,lt.triggers[0]),children:[u.jsx("span",{className:"sidebar-module-indicator"}),u.jsx("span",{className:"sidebar-module-title",children:lt.title})]}),W&&lt.triggers.length>0&&u.jsxs("div",{className:"sidebar-triggers",children:[lt.triggers.map(b=>u.jsxs("button",{className:`sidebar-trigger${s===b?" active":""}`,onClick:()=>St(b),children:[u.jsx("span",{className:"sidebar-trigger-name",children:b}),u.jsx("span",{className:"sidebar-trigger-count",children:Zl($,b).length})]},b)),$==="block"&&u.jsxs("button",{className:`sidebar-trigger${s==="exit"?" active":""}`,onClick:()=>{d("exit"),g("fadeOut")},children:[u.jsx("span",{className:"sidebar-trigger-name",children:"exit"}),u.jsx("span",{className:"sidebar-trigger-count",children:Km.length})]})]})]},$)}),o!=="docs"&&u.jsxs("div",{className:"controls-section",children:[u.jsx("div",{className:"controls-header",children:u.jsx("span",{className:"controls-title",children:"Controls"})}),u.jsxs("div",{className:"control-group",children:[u.jsx("label",{className:"control-label",children:"Animation"}),u.jsx(tr,{value:p,options:J,onChange:g})]}),u.jsxs("div",{className:"control-group",children:[u.jsxs("div",{className:"control-label-row",children:[u.jsx("label",{className:"control-label",children:"Duration"}),u.jsxs("span",{className:"control-value",children:[x,"ms"]})]}),u.jsx("input",{type:"range",min:"100",max:"1000",step:"10",value:x,onChange:$=>v(Number($.target.value)),className:"control-slider"})]}),u.jsxs("div",{className:"control-group",children:[u.jsx("label",{className:"control-label",children:"Easing"}),u.jsx(tr,{value:((Z=zs.find(([,$])=>$===m))==null?void 0:Z[0])??"Spring",options:zs.map(([$])=>$),onChange:$=>{var W;const lt=(W=zs.find(([b])=>b===$))==null?void 0:W[1];lt&&y(lt)}})]}),u.jsxs("div",{className:"control-group",children:[u.jsx("label",{className:"control-label",children:"Properties"}),u.jsx(tr,{value:el[O].label,options:Object.values(el).map($=>$.label),onChange:$=>{var W;const lt=(W=Object.entries(el).find(([,b])=>b.label===$))==null?void 0:W[0];lt&&V(lt)}}),u.jsx("span",{className:"control-hint",children:el[O].description})]}),(o==="text"||o==="paragraph"||o==="block"||o==="list")&&u.jsxs("div",{className:"control-group",children:[u.jsx("label",{className:"control-label",children:"Second trigger"}),u.jsx(tr,{value:Q==="none"?"None":Q,options:["None",...dt],onChange:$=>_($==="None"?"none":$)}),u.jsx("span",{className:"control-hint",children:"Optional. Max two triggers run through the queue."})]}),(o==="text"||o==="paragraph"||o==="block"||o==="list")&&s==="scroll"&&u.jsxs("div",{className:"control-group",children:[u.jsxs("div",{className:"control-label-row",children:[u.jsx("label",{className:"control-label",children:"Threshold"}),u.jsx("span",{className:"control-value",children:S.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0.1",max:"1",step:"0.05",value:S,onChange:$=>T(Number($.target.value)),className:"control-slider"})]}),o==="list"&&u.jsxs(u.Fragment,{children:[!nt&&!st&&u.jsxs("div",{className:"control-group",children:[u.jsxs("div",{className:"control-label-row",children:[u.jsx("label",{className:"control-label",children:"Stagger"}),u.jsxs("span",{className:"control-value",children:[A,"ms"]})]}),u.jsx("input",{type:"range",min:"0",max:"240",step:"10",value:A,onChange:$=>j(Number($.target.value)),className:"control-slider"})]}),(nt||st)&&u.jsxs("div",{className:"control-group",children:[u.jsxs("div",{className:"control-label-row",children:[u.jsx("label",{className:"control-label",children:nt?"Parallax speed":"Marquee speed"}),u.jsx("span",{className:"control-value",children:nt?(tt/100).toFixed(2):`${tt}px/s`})]}),u.jsx("input",{type:"range",min:"10",max:"180",step:"5",value:tt,onChange:$=>G(Number($.target.value)),className:"control-slider"})]})]})]})]})}),u.jsxs("main",{className:"main",children:[u.jsxs("div",{className:"main-header",children:[u.jsxs("h1",{children:[k.title," ",o!=="docs"&&u.jsx("span",{className:"badge",children:s})]}),u.jsx("p",{className:"main-desc",children:k.desc})]}),u.jsx("div",{className:"main-content",children:u.jsxs(Wm.Provider,{value:B,children:[o!=="docs"&&u.jsx(dx,{module:o,trigger:s,preset:p}),o==="docs"&&u.jsx(Vx,{}),o==="text"&&u.jsx(vx,{preset:p,duration:x,easing:m,trigger:s},L),o==="paragraph"&&u.jsx(jx,{preset:p,duration:x,easing:m,trigger:s},L),o==="list"&&u.jsx(_x,{preset:p,duration:x,easing:m,trigger:s},L),o==="block"&&u.jsx($x,{preset:p,duration:x,easing:m,trigger:s},L)]})})]})]})]})}const Kx=`
*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #f3f3f3;
  --bg-elevated: #ffffff;
  --bg-sidebar: #efefef;
  --border: #d5d5d5;
  --border-subtle: #e4e4e4;
  --text: #1a1a1a;
  --text-secondary: #5f5f5f;
  --text-tertiary: #8c8c8c;
  --accent: #111111;
  --radius-sm: 6px;
  --radius: 11px;
  --radius-lg: 12px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow: 0 1px 3px rgba(0,0,0,0.05), 0 10px 28px rgba(0,0,0,0.04);
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  --sidebar-width: 260px;
  --preview-stage-height: clamp(420px, calc(100dvh - 210px), 560px);
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font: 14px/1.6 var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── Topbar ─────────────────────────────── */
.topbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: #f7f7f7;
  border-bottom: 1px solid var(--border-subtle);
  height: 54px;
}
.topbar-inner {
  max-width: 1600px; margin: 0 auto; padding: 0 20px;
  height: 100%; display: flex; align-items: center; justify-content: space-between;
}
.sidebar-toggle {
  display: none;
  width: 36px; height: 36px; border: none; background: transparent;
  color: var(--text); border-radius: var(--radius-sm); cursor: pointer;
  align-items: center; justify-content: center; padding: 0;
}
.sidebar-toggle:hover { background: var(--bg-sidebar); }
.sidebar-toggle svg { display: block; }
.logo { display: flex; align-items: center; }
.logo svg { display: block; }
.topbar-nav { display: flex; align-items: center; gap: 20px; }
.topbar-nav a,
.topbar-nav button {
  color: var(--text-tertiary); text-decoration: none;
  font-size: 13px; font-weight: 500; letter-spacing: 0.01em;
  transition: color 0.2s var(--ease);
  border: 0;
  background: transparent;
  padding: 0;
  font-family: var(--font);
  cursor: pointer;
}
.topbar-nav a:hover,
.topbar-nav button:hover { color: var(--text); }

/* ── Sidebar Overlay (mobile) ───────────── */
.sidebar-overlay {
  display: none;
  position: fixed; inset: 0; z-index: 90;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(4px);
}
.layout { display: flex; padding-top: 54px; min-height: 100vh; }

/* ── Sidebar ────────────────────────────── */
.sidebar {
  width: var(--sidebar-width); position: fixed; top: 54px; left: 0; bottom: 0;
  background: var(--bg-sidebar); border-right: 1px solid var(--border-subtle);
  display: flex; flex-direction: column; overflow: hidden;
  z-index: 95;
}
.sidebar-scroll {
  flex: 1; overflow-y: auto; padding: 16px 0;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
.sidebar-scroll::-webkit-scrollbar { width: 4px; }
.sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
.sidebar-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
.sidebar-category { margin-bottom: 8px; }
.sidebar-category-label {
  font-size: 10px; font-weight: 600; color: var(--text-tertiary);
  text-transform: uppercase; letter-spacing: 0.08em;
  padding: 8px 20px 6px; font-family: var(--mono);
}
.sidebar-module { margin: 1px 8px; }
.sidebar-module-btn {
  display: flex; align-items: center; gap: 10px;
  width: 100%; padding: 8px 12px; border: none; background: transparent;
  font-size: 13.5px; font-weight: 500; color: var(--text-secondary);
  border-radius: var(--radius-sm); text-align: left;
  transition: all 0.15s var(--ease); cursor: pointer;
}
.sidebar-module-btn:hover { background: rgba(0,0,0,0.04); color: var(--text); }
.sidebar-module.active .sidebar-module-btn { color: var(--text); font-weight: 600; background: rgba(0,0,0,0.03); }
.sidebar-module-indicator {
  display: block; width: 3px; height: 16px; border-radius: 2px;
  background: transparent; transition: all 0.2s var(--ease);
  flex-shrink: 0;
}
.sidebar-module.active .sidebar-module-indicator {
  background: var(--module-color, var(--accent));
  box-shadow: 0 0 6px var(--module-color, rgba(0,0,0,0.1));
}
.sidebar-module-title { flex: 1; }
.sidebar-triggers { padding: 2px 0 8px 25px; display: flex; flex-direction: column; gap: 1px; }
.sidebar-trigger {
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; padding: 5px 10px; border: none; background: transparent;
  font-size: 12.5px; font-weight: 500; color: var(--text-tertiary);
  text-transform: capitalize; text-align: left; border-radius: var(--radius-sm);
  letter-spacing: 0.01em; transition: all 0.15s var(--ease); cursor: pointer;
}
.sidebar-trigger:hover { background: rgba(0,0,0,0.03); color: var(--text-secondary); }
.sidebar-trigger.active { background: rgba(0,0,0,0.05); color: var(--text); font-weight: 600; }
.sidebar-trigger-name { flex: 1; }
.sidebar-trigger-count {
  font-size: 10px; font-weight: 600; color: var(--text-tertiary);
  background: rgba(0,0,0,0.04); padding: 1px 6px; border-radius: 8px;
  font-family: var(--mono);
}
.sidebar-trigger.active .sidebar-trigger-count { color: var(--text-secondary); background: rgba(0,0,0,0.06); }

/* ── Controls ───────────────────────────── */
.controls-section {
  margin: 12px 8px 0; padding: 12px;
  background: var(--bg-elevated); border-radius: var(--radius);
  border: 1px solid var(--border);
  display: flex; flex-direction: column; gap: 12px;
}
.controls-header { margin-bottom: 2px; }
.controls-title {
  font-size: 10px; font-weight: 700; color: var(--text-tertiary);
  text-transform: uppercase; letter-spacing: 0.1em; font-family: var(--mono);
}
.control-group { display: flex; flex-direction: column; gap: 6px; }
.control-label {
  font-size: 11px; font-weight: 600; color: var(--text-secondary);
  letter-spacing: 0.01em;
}
.control-label-sm { font-size: 11px; font-weight: 600; color: var(--text-secondary); }
.control-label-row { display: flex; align-items: center; justify-content: space-between; }
.control-value {
  font-size: 11px; font-weight: 600; color: var(--text-tertiary);
  font-family: var(--mono);
}
.control-hint {
  color: var(--text-tertiary);
  font-size: 11px;
  line-height: 1.4;
}
.select-menu { position: relative; width: 100%; }
.select-trigger {
  width: 100%;
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: #fcfcfc;
  color: var(--text);
  font: 500 12.5px/1.2 var(--font);
  cursor: pointer;
  transition: all 0.15s var(--ease);
}
.select-trigger:hover { border-color: #bdbdbd; }
.select-menu.open .select-trigger { border-color: #9f9f9f; box-shadow: 0 0 0 2px rgba(17,17,17,0.06); }
.select-value { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.select-caret { color: #7a7a7a; font-size: 12px; line-height: 1; }
.select-popover {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 90;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
  padding: 6px;
  max-height: 240px;
  overflow: auto;
}
.select-search-wrap {
  position: sticky;
  top: -6px;
  z-index: 1;
  padding: 0 0 6px;
  background: #fff;
}
.select-search {
  width: 100%;
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #f7f7f7;
  color: var(--text);
  font: 500 12.5px/1 var(--font);
}
.select-search:focus {
  outline: none;
  border-color: #9f9f9f;
  box-shadow: 0 0 0 2px rgba(17,17,17,0.06);
}
.select-option {
  width: 100%;
  border: none;
  background: transparent;
  border-radius: 7px;
  text-align: left;
  padding: 8px 9px;
  color: #252525;
  font: 500 12.5px/1.25 var(--font);
  cursor: pointer;
}
.select-option:hover { background: #f1f1f1; }
.select-option.active { background: #ebebeb; color: #111; font-weight: 600; }
.select-empty {
  padding: 12px 9px;
  color: var(--text-tertiary);
  font: 500 12px/1.4 var(--font);
  text-align: center;
}
.control-slider {
  width: 100%; height: 4px; -webkit-appearance: none; appearance: none;
  background: var(--border); border-radius: 2px; outline: none; cursor: pointer;
  transition: background 0.15s var(--ease);
}
.control-slider:hover { background: var(--text-tertiary); }
.control-slider::-webkit-slider-thumb {
  -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%;
  background: var(--accent); border: 2px solid var(--bg-elevated); cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  transition: transform 0.15s var(--ease);
}
.control-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
.control-slider::-moz-range-thumb { width: 14px; height: 14px; border-radius: 50%; background: var(--accent); border: 2px solid var(--bg-elevated); cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,0.15); }


/* ── Main ───────────────────────────────── */
.main { margin-left: var(--sidebar-width); flex: 1; min-width: 0; padding: 28px 30px 70px; }
.main-header { margin: 0 auto 22px; max-width: 1300px; }
.main-header h1 { margin: 0; font-size: clamp(42px, 4.4vw, 58px); font-weight: 700; letter-spacing: -0.05em; line-height: 1.05; }
.badge {
  display: inline-flex; align-items: center; font-size: 11px; font-weight: 600;
  text-transform: capitalize; color: var(--text-secondary); background: var(--bg-elevated);
  border: 1px solid var(--border); padding: 3px 10px; border-radius: 100px;
  vertical-align: middle; letter-spacing: 0.01em; margin-left: 10px; font-family: var(--mono);
}
.main-desc { margin: 10px 0 0; font-size: 14.5px; color: var(--text-secondary); line-height: 1.65; max-width: 760px; }
.main-content { max-width: 1300px; margin: 0 auto; }
.capability-panel {
  max-width: 1300px;
  margin: 0 auto 18px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
}
.capability-eyebrow {
  display: block;
  margin-bottom: 8px;
  color: var(--text-tertiary);
  font: 700 10px/1 var(--mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.capability-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.capability-chips span {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 4px 9px;
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  background: #f7f7f7;
  color: var(--text-secondary);
  font: 600 11px/1 var(--mono);
}
.capability-panel p {
  max-width: 360px;
  margin: 0;
  color: var(--text-secondary);
  font-size: 12.5px;
  line-height: 1.5;
  text-align: right;
}

/* ── Docs ───────────────────────────────── */
.docs-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.docs-hero,
.docs-section {
  border: 1px solid var(--border);
  border-radius: 14px;
  background: #fff;
  padding: clamp(22px, 3vw, 34px);
}
.docs-hero {
  display: grid;
  gap: 18px;
}
.docs-kicker {
  color: var(--text-tertiary);
  font: 700 10px/1 var(--mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.docs-hero h2 {
  max-width: 760px;
  margin: 0;
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.02;
  letter-spacing: -0.06em;
}
.docs-hero p {
  max-width: 760px;
  margin: 0;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.7;
}
.docs-code {
  max-width: 920px;
  border-radius: 12px;
}
.docs-section {
  display: grid;
  gap: 22px;
}
.docs-section-head {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 14px;
  row-gap: 4px;
  align-items: baseline;
}
.docs-section-head span {
  grid-row: span 2;
  color: var(--text-tertiary);
  font: 700 11px/1 var(--mono);
}
.docs-section-head h3 {
  margin: 0;
  font-size: clamp(24px, 2.4vw, 34px);
  line-height: 1.1;
  letter-spacing: -0.04em;
}
.docs-section-head p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.55;
}
.docs-principle-grid,
.docs-module-grid,
.docs-trigger-grid,
.docs-practice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
}
.docs-principle-grid article,
.docs-module-card,
.docs-trigger-grid article,
.docs-practice-grid article {
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  background: #fafafa;
  padding: 16px;
}
.docs-principle-grid strong,
.docs-module-card h4,
.docs-trigger-grid h4,
.docs-practice-grid strong {
  margin: 0;
  color: var(--text);
  font-size: 15px;
  letter-spacing: -0.02em;
}
.docs-principle-grid p,
.docs-module-card p,
.docs-trigger-grid p,
.docs-practice-grid p {
  margin: 8px 0 0;
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.55;
}
.docs-module-card {
  display: grid;
  gap: 12px;
}
.docs-module-card div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.docs-module-card code {
  padding: 3px 7px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font: 700 10px/1.2 var(--mono);
}
.docs-module-card small,
.docs-trigger-grid small,
.docs-preset-group small {
  color: var(--text-tertiary);
  font-size: 12px;
  line-height: 1.5;
}
.docs-module-card > strong {
  color: var(--text);
  font: 700 12px/1 var(--mono);
}
.docs-trigger-grid h4 {
  text-transform: capitalize;
}
.docs-animation-groups {
  display: grid;
  gap: 14px;
}
.docs-animation-module {
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  background: #fafafa;
  padding: 16px;
}
.docs-animation-module h4 {
  margin: 0 0 14px;
  font-size: 18px;
  letter-spacing: -0.03em;
}
.docs-preset-groups {
  display: grid;
  gap: 12px;
}
.docs-preset-group {
  display: grid;
  grid-template-columns: minmax(160px, 240px) 1fr;
  gap: 14px;
  align-items: start;
  padding: 12px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid var(--border-subtle);
}
.docs-preset-group strong {
  display: block;
  margin-bottom: 4px;
}
.docs-preset-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.docs-preset-pills span {
  padding: 5px 8px;
  border-radius: 999px;
  background: #f5f5f5;
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font: 700 11px/1 var(--mono);
}

/* ── Section ────────────────────────────── */
.section { margin-top: 28px; display: flex; flex-direction: column; gap: 16px; }
.real-demo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 32px 28px;
  text-align: center;
}
.demo-label {
  font-size: 13px;
  color: var(--text-tertiary);
  margin: 0;
  max-width: 520px;
  line-height: 1.5;
}
.demo-meta {
  font-size: 12px;
  color: var(--text-tertiary);
  font-family: var(--mono);
  letter-spacing: 0.01em;
}

/* ── Code ───────────────────────────────── */
.code-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
}
.view-code-btn {
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: #f6f6f6;
  color: var(--text-secondary);
  font: 500 12px/1.2 var(--font);
  padding: 7px 12px;
  cursor: pointer;
  transition: all 0.15s var(--ease);
}
.view-code-btn:hover {
  color: var(--text);
  background: var(--bg-sidebar);
}
.code {
  width: 100%;
  margin: 0; padding: 16px 20px; background: #111; border-radius: var(--radius);
  color: #a0a0a0; font: 12px/1.7 var(--mono); white-space: pre; overflow-x: auto;
  border: 1px solid rgba(255,255,255,0.06); letter-spacing: -0.01em;
  text-align: left;
}
.code-tag { color: #7dd3fc; }
.code-string { color: #fbbf24; }

/* ── Preview Card ───────────────────────── */
.preview-card {
  border: 1px solid var(--border); border-radius: 12px;
  background: var(--bg-elevated); box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s var(--ease);
  display: flex; flex-direction: column;
  width: 100%;
}
.preview-card:hover { box-shadow: var(--shadow); }
.preview-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 9px 16px; background: #e9e9e9; border-bottom: 1px solid var(--border);
}
.traffic-lights { display: flex; gap: 7px; align-items: center; }
.dot { width: 8px; height: 8px; border-radius: 50%; opacity: 0.95; }
.dot-red { background: #ff5f57; }
.dot-yellow { background: #febc2e; }
.dot-green { background: #28c840; }
.preview-actions { display: flex; gap: 6px; }
.window-action-btn {
  border: 1px solid #cfcfcf;
  background: #f3f3f3;
  color: #1c1c1c;
  border-radius: 9px;
  height: 32px;
  min-width: 32px;
  padding: 0 11px;
  font: 500 12px/1 var(--font);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.window-action-btn:hover { background: #ececec; }
.view-code-header-btn { min-width: 92px; }
.window-icon-btn { font-size: 14px; padding: 0; width: 32px; }
.replay-btn {
  display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px;
  font-size: 12px; font-weight: 500; border: 1px solid #cbcbcb;
  background: #f4f4f4; color: #2b2b2b; border-radius: 10px;
  transition: all 0.15s var(--ease); cursor: pointer;
}
.replay-btn:hover { background: #efefef; color: var(--text); }
.replay-btn:active { transform: scale(0.97); }

.preview-toolbar {
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  padding: 9px 16px;
  background: #f2f2f2;
  border-bottom: 1px solid var(--border-subtle);
}
.preview-toolbar .field-row { gap: 8px; width: auto; }

.preview-body {
  flex: 1 1 auto;
  height: var(--preview-stage-height);
  max-height: var(--preview-stage-height);
  min-height: var(--preview-stage-height);
  overflow-y: auto;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0;
}
.preview-body::-webkit-scrollbar {
  width: 8px;
}
.preview-body::-webkit-scrollbar-track {
  background: transparent;
}
.preview-body::-webkit-scrollbar-thumb {
  background: #cfcfcf;
  border-radius: 999px;
}
.preview-body {
  scrollbar-color: #cfcfcf transparent;
  scrollbar-width: thin;
}
.preview-body.preview-open .code-wrap { display: none; }
.preview-body.code-open > :not(.code-wrap):not(:has(.code-wrap)) { display: none !important; }
.preview-body.code-open .real-demo,
.preview-body.code-open .demo-stage,
.preview-body.code-open .list-demo {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  min-height: 100%;
  padding: 0;
}
.preview-body.code-open .real-demo > :not(.code-wrap),
.preview-body.code-open .demo-stage > :not(.code-wrap),
.preview-body.code-open .list-demo > :not(.code-wrap) { display: none !important; }
.preview-body.code-open .code-wrap {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  padding: 16px;
}
.preview-body.code-open .code {
  flex: 1;
  min-height: 0;
  margin: 0;
}

/* ── Demo Stage ─────────────────────────── */
.demo-stage {
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 40px;
  text-align: center;
}

/* ── Search Demo ────────────────────────── */
.search-field {
  width: 100%;
  max-width: 400px;
  display: flex;
  gap: 8px;
}
.search-field input {
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  transition: all 0.15s var(--ease);
}
.search-field input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(17,17,17,0.06);
}
.random-btn {
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  cursor: pointer;
  font-family: var(--font);
  white-space: nowrap;
  transition: all 0.12s var(--ease);
}
.random-btn:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.random-btn:active {
  transform: scale(0.96);
}
.search-result-display {
  width: 100%;
  height: clamp(112px, 16vw, 164px);
  min-height: clamp(112px, 16vw, 164px);
  display: grid;
  place-items: center;
  overflow: visible;
}
.search-result-display h2 {
  font-size: clamp(28px, 3.2vw, 44px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.12;
  color: var(--text);
  margin: 0;
}

/* ── Nav Links Demo ─────────────────────── */
.nav-links-demo {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}
.nav-link-item {
  all: unset;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: background 0.15s var(--ease);
}
.nav-link-item:hover {
  background: var(--bg);
  color: var(--text);
}

/* ── CTA Button ─────────────────────────── */
.cta-button {
  all: unset;
  cursor: pointer;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius);
  letter-spacing: -0.01em;
  transition: opacity 0.15s var(--ease);
}
.cta-button:hover { opacity: 0.9; }
.cta-button:active { transform: scale(0.98); }

/* ── Scroll Demos ───────────────────────── */
.scroll-demo {
  min-height: auto !important;
  padding: 0 !important;
  gap: 0 !important;
  align-items: stretch;
  position: relative;
  width: 100%;
}
.scroll-entry-screen {
  width: 100%;
  min-height: var(--preview-stage-height);
  height: var(--preview-stage-height);
  display: grid;
  place-items: center;
}
.scroll-intro {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  border: none;
  padding: 0;
  border-radius: 0;
  background: transparent;
  text-transform: none;
}
.scroll-hfeed {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 500px;
  align-items: center;
  align-self: center;
  margin-inline: auto;
}
.scroll-reveal-item {
  min-height: var(--preview-stage-height);
  height: var(--preview-stage-height);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
}
.scroll-reveal-item h2 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text);
  margin: 0;
}

/* ── Quote Demo ─────────────────────────── */
.quote-display {
  max-width: 480px;
}
.quote-display blockquote {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text);
  margin: 0;
  letter-spacing: -0.02em;
}

/* ── Manual Controls ────────────────────── */
.manual-controls {
  display: flex;
  align-items: center;
  gap: 14px;
}
.manual-target {
  font-size: clamp(24px, 2.5vw, 36px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--text);
}

/* ── Buttons ────────────────────────────── */
button {
  cursor: pointer; padding: 7px 16px; font-size: 13px; font-weight: 500;
  border: 1px solid var(--border); background: var(--bg-elevated); color: var(--text);
  border-radius: var(--radius-sm); transition: all 0.15s var(--ease); font-family: var(--font);
}
button:hover { background: var(--bg-sidebar); border-color: #d0cec8; }
button:active { transform: scale(0.97); background: #eeece6; }
button:disabled { cursor: not-allowed; opacity: 0.35; }
button:disabled:hover { background: var(--bg-elevated); border-color: var(--border); transform: none; }
.fire-button { background: var(--accent); color: #fff; border-color: var(--accent); }
.fire-button:hover { background: #2a2a2a; border-color: #2a2a2a; }
.fire-button:active { transform: scale(0.97); }
.demo-fire-btn { min-width: 180px; }

/* ── Paragraph Display ──────────────────── */
.paragraph-display {
  width: 100%;
  max-width: 520px;
  text-align: left;
}
.paragraph-display article h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--text);
}
.paragraph-display article p {
  font-size: 15px;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

/* ── Story Scroll ───────────────────────── */
.story-content {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 520px;
  text-align: center;
  align-items: center;
  align-self: center;
  margin-inline: auto;
}
.story-paragraph {
  min-height: var(--preview-stage-height);
  height: var(--preview-stage-height);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.story-paragraph p {
  max-width: 760px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--text);
  margin: 0;
  text-align: center;
}

/* ── Paragraph Hover Demo ────────────────── */
.paragraph-hover-demo {
  width: 100%;
  max-width: 460px;
  margin: 0;
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--text);
  cursor: default;
  text-align: left;
}

/* ── Read More ──────────────────────────── */
.readmore-card {
  width: 100%;
  max-width: 460px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-align: left;
  cursor: pointer;
  transition: background 0.15s var(--ease);
}
.readmore-card:hover { background: var(--bg); }
.readmore-card p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text);
}

/* ── Slide Deck ─────────────────────────── */
.slide-deck {
  width: 100%;
  max-width: 500px;
  min-height: 200px;
}
.slide-deck > div {
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-elevated);
  text-align: left;
}
.slide-number {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  font-family: var(--mono);
}
.slide-deck h3 {
  margin: 8px 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
}
.slide-deck p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* ── List Demo ──────────────────────────── */
.list-demo {
  width: 100%;
  padding: 24px;
}
.list-demo-stagger,
.list-demo-reorder,
.list-demo-presence,
.list-demo-cascade,
.list-demo-slideLeft,
.list-demo-slideRight,
.list-demo-flip,
.list-demo-bounce,
.list-demo-pop {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.list-demo-stagger > div,
.list-demo-reorder > div,
.list-demo-presence > div,
.list-demo-cascade > div,
.list-demo-slideLeft > div,
.list-demo-slideRight > div,
.list-demo-flip > div,
.list-demo-bounce > div,
.list-demo-pop > div {
  width: min(100%, 680px);
}
.list-demo-stagger > div {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.list-demo-cascade > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.list-demo-reorder > div,
.list-demo-presence > div,
.list-demo-flip > div,
.list-demo-pop > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.list-demo-slideLeft > div,
.list-demo-slideRight > div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.list-demo-bounce > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.list-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 14px;
  color: var(--text);
  gap: 12px;
}
.list-row:last-child { border-bottom: none; }
.list-feature-card {
  min-height: 132px;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.list-feature-card span {
  align-self: flex-start;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(17,17,17,0.06);
  color: var(--text-secondary);
  font: 600 11px/1 var(--mono);
}
.list-feature-card strong,
.list-dashboard-row strong,
.list-notification-row strong {
  color: var(--text);
  font-size: 15px;
  letter-spacing: -0.02em;
}
.list-feature-card p,
.list-dashboard-row p,
.list-notification-row p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.45;
}
.list-dashboard-row,
.list-notification-row {
  min-height: 72px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  text-align: left;
}
.list-dashboard-row > span:last-child {
  color: var(--text-secondary);
  font: 600 12px/1 var(--mono);
}
.list-status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #bbb;
}
.tone-green { background-color: #b8f4cc; }
.tone-blue { background-color: #cce7ff; }
.tone-amber { background-color: #ffe1a7; }
.tone-pink { background-color: #ffd1dc; }
.tone-violet { background-color: #e0d5ff; }
.list-status-dot.tone-green { background: #31c66d; }
.list-status-dot.tone-blue { background: #4aa3ff; }
.list-status-dot.tone-amber { background: #e8a300; }
.list-status-dot.tone-pink { background: #f06f93; }
.list-status-dot.tone-violet { background: #8d75ff; }
.list-tag-pill {
  min-height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid var(--border);
  font-weight: 650;
  letter-spacing: -0.02em;
}
.list-nav-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--border);
  text-align: left;
  transition: box-shadow 0.15s ease;
}
.list-nav-row.side-left { justify-content: flex-start; }
.list-nav-row.side-right { justify-content: flex-end; }
.list-nav-row strong {
  color: var(--text);
  font-size: 14px;
  letter-spacing: -0.01em;
}
.nav-icon {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
}
.nav-meta {
  color: var(--text-tertiary);
  font: 600 11px/1 var(--mono);
  margin-left: auto;
}
.list-nav-row.side-right .nav-meta { margin-left: 0; margin-right: auto; }
.list-flip-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--border);
  text-align: left;
  transform-style: preserve-3d;
}
.list-flip-card strong {
  color: var(--text);
  font-size: 14px;
  letter-spacing: -0.01em;
}
.list-flip-card p {
  margin: 2px 0 0;
  color: var(--text-secondary);
  font-size: 12.5px;
  line-height: 1.4;
}
.flip-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.flip-meta {
  color: var(--text-tertiary);
  font: 600 11px/1 var(--mono);
  margin-left: auto;
}
.list-bounce-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--border);
  text-align: left;
}
.list-bounce-item strong {
  color: var(--text);
  font-size: 14px;
  letter-spacing: -0.01em;
}
.bounce-ball {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
}
.list-pop-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--border);
  text-align: left;
}
.list-pop-row strong {
  color: var(--text);
  font-size: 15px;
  letter-spacing: -0.02em;
}
.pop-badge {
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(17,17,17,0.06);
  color: var(--text-secondary);
  font: 600 11px/1 var(--mono);
}
.list-scroll-item {
  min-height: var(--preview-stage-height);
  height: var(--preview-stage-height);
  display: grid;
  place-items: center;
  width: 100%;
  padding: 24px;
}
.list-scroll-item > div {
  width: min(100%, 620px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.list-parallax-demo {
  position: relative;
  background: #fff;
}
.list-parallax-stack {
  position: relative;
  min-height: calc(var(--preview-stage-height) * 3.2);
  width: 100%;
  padding: calc(var(--preview-stage-height) * 0.28) 24px calc(var(--preview-stage-height) * 0.4);
}
.list-parallax-stack > [data-trigr-key] {
  position: sticky;
  top: calc((var(--preview-stage-height) - 240px) / 2);
  width: min(650px, calc(100% - 48px));
  margin-inline: auto;
  display: grid;
  place-items: center;
  transform-origin: center;
}
.list-parallax-stack > [data-trigr-key] + [data-trigr-key] {
  margin-top: -124px;
}
.list-parallax-card {
  width: 100%;
  min-height: 214px;
  padding: 30px 38px;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.05);
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
  text-align: center;
  color: #111;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.list-parallax-card span {
  font: 700 11px/1 var(--mono);
  color: rgba(17,17,17,0.45);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.list-parallax-card strong {
  font-size: clamp(24px, 3vw, 31px);
  letter-spacing: -0.03em;
}
.list-parallax-card p {
  margin: 0;
  max-width: 520px;
  color: rgba(17,17,17,0.7);
  font-size: 15px;
  line-height: 1.45;
}
.list-parallax-card button {
  margin-top: 10px;
  background: #111;
  color: #fff;
  border-color: #111;
}
.list-menu-button {
  width: min(100%, 420px);
  min-height: 54px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: start;
  gap: 12px;
  padding: 0 18px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-align: left;
  font-weight: 650;
}
.list-remove-btn {
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
  flex-shrink: 0;
}
.list-remove-btn:hover { color: #ef4444; }

/* ── Toolbar ────────────────────────────── */
.toolbar-count {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  font-family: var(--mono);
  letter-spacing: 0.01em;
  padding: 3px 10px;
  background: var(--bg-sidebar);
  border-radius: 100px;
}
.field-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.field-row input {
  width: 200px; padding: 8px 12px; font-size: 13px;
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  background: var(--bg); color: var(--text); font-family: var(--font);
  transition: all 0.15s var(--ease);
}
.field-row input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(17,17,17,0.06); }

/* ── Marquee ────────────────────────────── */
.marquee-demo {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.marquee-prefix { color: var(--text-tertiary); font-size: 22px; font-weight: 600; letter-spacing: -0.02em; }
.marquee-item { display: inline-flex; align-items: center; height: 40px; color: var(--text); font-size: 22px; font-weight: 800; letter-spacing: -0.035em; }

/* ── Mount Demo ─────────────────────────── */
.toast-banner {
  position: fixed;
  top: 72px;
  right: 24px;
  z-index: 1000;
}
.toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: #1a1a1a;
  color: #fff;
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  font-size: 14px;
}
.toast-dismiss {
  border: none;
  background: transparent;
  color: rgba(255,255,255,0.5);
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
}
.toast-dismiss:hover { color: #fff; }

/* ── Modal ──────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 0;
  max-width: 420px;
  width: calc(100vw - 48px);
  box-shadow: 0 24px 64px rgba(0,0,0,0.15);
}
.modal-card-inner {
  padding: 32px;
}
.modal-card-inner h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
}
.modal-card-inner p {
  margin: 0 0 24px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}
.modal-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

/* ── Block Demo Card ────────────────────── */
.block-demo-card {
  width: clamp(280px, 50vw, 400px);
  padding: 28px 32px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  background: #fff;
  text-align: center;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s var(--ease);
}
.block-demo-card:hover { box-shadow: var(--shadow); }
.block-card-icon { color: var(--text-tertiary); }
.block-demo-card h3 {
  margin: 0;
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text);
}
.block-demo-card p {
  margin: 0;
  max-width: 300px;
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.55;
}
.block-demo-card button {
  margin-top: 4px;
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  font-weight: 600;
}
.block-demo-card button:hover { background: #2a2a2a; border-color: #2a2a2a; }
.card-basic { background: #fff5d9; }
.card-pro { background: #e4f1ff; }
.card-features { background: #e8f9ee; }
.card-pricing { background: #ffe8ea; }
.card-faq { background: #f0f0ff; }
.card-welcome { background: #e8f9ee; }

/* ── Block Preview Area ─────────────────── */
.block-preview-area {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Block Scroll ───────────────────────── */
.block-scroll-item {
  min-height: var(--preview-stage-height);
  height: var(--preview-stage-height);
  display: grid;
  place-items: center;
  padding: 24px;
  width: 100%;
  justify-items: center;
}
.block-scroll-item > * {
  justify-self: center;
}
.scroll-demo .block-scroll-item + .block-scroll-item {
  margin-top: 0;
}
.parallax-demo {
  position: relative;
  width: 100%;
  min-height: auto !important;
  padding: 0 !important;
  gap: 0 !important;
  display: block !important;
  background: #fff;
}
.parallax-stack {
  width: 100%;
}
.parallax-demo .trigr-parallax-layer {
  width: 100%;
  display: grid;
  place-items: center;
  padding: 42px 24px;
  transform-origin: center;
}
.parallax-demo .block-demo-card {
  width: min(650px, calc(100% - 48px));
  max-width: 650px;
  min-height: 206px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 36px;
  position: relative;
  isolation: isolate;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  color: #111;
}
.parallax-demo .block-demo-card.card-features {
  background: #b9f5cd;
}
.parallax-demo .block-demo-card.card-pricing {
  background: #ffc8cc;
}
.parallax-demo .block-demo-card.card-basic {
  background: #ffd8a7;
}
.parallax-demo .block-demo-card.card-faq {
  background: #dec8ff;
}
.parallax-demo .block-demo-card h3 {
  font-size: clamp(24px, 3vw, 31px);
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.03em;
}
.parallax-demo .block-demo-card p {
  font-size: 16px;
  opacity: 0.74;
  max-width: 520px;
  text-align: center;
  line-height: 1.45;
}
.parallax-demo .block-demo-card button {
  margin-top: 24px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #000;
  background: #111;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}
.parallax-demo .block-demo-card button:hover {
  background: #262626;
}
.parallax-demo .block-card-icon {
  margin-bottom: 16px;
  opacity: 0.6;
}
.parallax-demo .code {
  position: relative;
  z-index: 100;
}
.block-parallax-demo {
  position: relative;
  background: #fff;
}
.block-parallax-element {
  display: grid;
  place-items: center;
}
.block-parallax-visual {
  width: min(680px, calc(100% - 48px));
  min-height: 260px;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.06);
  background:
    linear-gradient(135deg, rgba(255,200,204,0.9), rgba(184,244,204,0.9)),
    #f7f7f7;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
  padding: 34px;
  text-align: center;
  color: #111;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.block-parallax-visual span {
  font: 700 11px/1 var(--mono);
  color: rgba(17,17,17,0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.block-parallax-visual strong {
  font-size: clamp(24px, 3vw, 34px);
  letter-spacing: -0.04em;
}
.block-parallax-visual p {
  margin: 0;
  max-width: 460px;
  color: rgba(17,17,17,0.68);
  line-height: 1.5;
}

/* ── Block Hover Grid ───────────────────── */
.block-hover-grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ── Exit / Notification Stack ──────────── */
.exit-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 360px;
}
.exit-controls .select-menu { flex: 1; }
.notif-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 480px;
  text-align: left;
}
.notif-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 14px 18px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  cursor: pointer;
  transition: all 0.15s var(--ease);
  gap: 12px;
}
.notif-card:hover { border-color: var(--border); background: var(--bg); }
.notif-body { flex: 1; }
.notif-body strong {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}
.notif-body p {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.4;
}
.notif-dismiss {
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
  flex-shrink: 0;
}
.notif-dismiss:hover { color: #ef4444; }
.empty-notifs {
  padding: 24px;
  color: var(--text-tertiary);
  font-size: 14px;
}

/* ── Responsive ─────────────────────────── */
@media (max-width: 900px) {
  .sidebar-toggle { display: flex; }
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s var(--ease);
    width: 280px;
  }
  .sidebar.open { transform: translateX(0); }
  .sidebar-overlay { display: block; }
  .main { margin-left: 0; padding: 22px 16px 56px; }
  .main-header h1 { font-size: 26px; }
  .main-desc { font-size: 14px; }
  .preview-body { min-height: 280px; }
  .real-demo { padding: 24px 20px; }
  .field-row input { width: 100%; }
  .docs-preset-group { grid-template-columns: 1fr; }
  .docs-section-head { grid-template-columns: 1fr; }
  .docs-section-head span { grid-row: auto; }
}

@media (max-width: 600px) {
  .topbar-inner { padding: 0 16px; }
  .topbar-nav a,
  .topbar-nav button { font-size: 12px; }
  .main { padding: 20px 16px 48px; }
  .main-header h1 { font-size: 22px; }
  .main-desc { font-size: 13.5px; }
  .docs-hero,
  .docs-section { padding: 18px; }
  .docs-hero h2 { font-size: 30px; }
  .docs-module-card div { align-items: flex-start; flex-direction: column; }
  .code { padding: 12px 14px; font-size: 11px; }
  .preview-header { padding: 8px 14px; }
  .preview-toolbar { padding: 8px 14px; }
  .real-demo { padding: 20px 14px; }
  .field-row { flex-direction: column; align-items: stretch; }
  .field-row button { width: 100%; }
  .block-hover-grid { flex-direction: column; align-items: center; }
  .exit-controls { flex-direction: column; align-items: stretch; }
  .controls-section { padding: 12px; gap: 12px; }
}
`;bg.createRoot(document.getElementById("root")).render(u.jsx(Zx,{}));
