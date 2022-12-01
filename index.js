// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,c){var f,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===e.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((s="value"in c)&&(o.call(r,t)||u.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=c.value,r.__proto__=f):r[t]=c.value),l="get"in c,p="set"in c,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,c.get),p&&a&&a.call(r,t,c.set),r};function f(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var p=Math.floor,y=Math.ceil;function d(r){return r<0?y(r):p(r)}var g=Number,h=g.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY,v=1023;function m(r){return r===b||r===h}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return w&&"symbol"==typeof Symbol.toStringTag}var A,_=Object.prototype.toString,E=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",k=N()?function(r){var t,n,e,i,a;if(null==r)return _.call(r);n=r[U],a=U,t=null!=(i=r)&&E.call(i,a);try{r[U]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[U]=n:delete r[U],e}:function(r){return _.call(r)},x="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(x&&n instanceof Uint32Array||"[object Uint32Array]"===k(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,F=A,T="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,V="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,t,n;if("function"!=typeof O)return!1;try{t=new O([1,3.14,-3.14,NaN]),n=t,r=(T&&n instanceof Float64Array||"[object Float64Array]"===k(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var $,G=I,P="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var r,t,n;if("function"!=typeof H)return!1;try{t=new H(t=[1,3.14,-3.14,256,257]),n=t,r=(P&&n instanceof Uint8Array||"[object Uint8Array]"===k(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var C,L=$,R="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,Z="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,t,n;if("function"!=typeof M)return!1;try{t=new M(t=[1,3.14,-3.14,65536,65537]),n=t,r=(R&&n instanceof Uint16Array||"[object Uint16Array]"===k(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var q,X={uint16:C,uint8:L};(q=new X.uint16(1))[0]=4660;var Y,z,B=52===new X.uint8(q.buffer)[0];!0===B?(Y=1,z=0):(Y=0,z=1);var D={HIGH:Y,LOW:z},J=new G(1),K=new F(J.buffer),Q=D.HIGH,rr=D.LOW;function tr(r,t,n,e){return J[0]=r,t[e]=K[Q],t[e+n]=K[rr],t}function nr(r){return tr(r,[0,0],1,0)}s(nr,"assign",tr);var er,ir,ar=!0===B?1:0,or=new G(1),ur=new F(or.buffer);function cr(r){return or[0]=r,ur[ar]}!0===B?(er=1,ir=0):(er=0,ir=1);var fr={HIGH:er,LOW:ir},sr=new G(1),lr=new F(sr.buffer),pr=fr.HIGH,yr=fr.LOW;function dr(r,t){return lr[pr]=r,lr[yr]=t,sr[0]}var gr=[0,0];function hr(r,t,n,e){return l(r)||m(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}s((function(r){return hr(r,[0,0],1,0)}),"assign",hr);var br=[0,0],vr=[0,0];function mr(r,t){var n,e,i,a,o,u;return 0===t||0===r||l(r)||m(r)?r:(hr(r,br,1,0),t+=br[1],t+=function(r){var t=cr(r);return(t=(2146435072&t)>>>20)-v|0}(r=br[0]),t<-1074?(i=0,a=r,nr.assign(i,gr,1,0),o=gr[0],o&=2147483647,u=cr(a),dr(o|=u&=2147483648,gr[1])):t>1023?r<0?h:b:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,nr.assign(r,vr,1,0),n=vr[0],n&=2148532223,e*dr(n|=t+v<<20,vr[1])))}var wr=1.4426950408889634,Nr=1/(1<<28);function Ar(r){var t;return l(r)||r===b?r:r===h?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Nr?1+r:function(r,t,n){var e,i,a,o;return mr(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=d(r<0?wr*r-.5:wr*r+.5)),1.9082149292705877e-10*t,t)}function _r(r,t){return l(t)||t<0||t===b?NaN:r<0?0:1-Ar(-t*r)}function Er(r){return function(){return r}}function Ur(r,t,n){c(r,t,{configurable:!1,enumerable:!1,get:n})}function kr(r){return"number"==typeof r}s(_r,"factory",(function(r){return l(r)||r<0||r===b?Er(NaN):function(t){return t<0?0:1-Ar(-r*t)}}));var xr=g.prototype.toString,Sr=N();function jr(r){return"object"==typeof r&&(r instanceof g||(Sr?function(r){try{return xr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===k(r)))}function Ir(r){return kr(r)||jr(r)}function Fr(r){return kr(r)&&r>0}function Tr(r){return jr(r)&&r.valueOf()>0}function Or(r){return Fr(r)||Tr(r)}s(Ir,"isPrimitive",kr),s(Ir,"isObject",jr),s(Or,"isPrimitive",Fr),s(Or,"isObject",Tr);var Vr=!0===B?1:0,$r=new G(1),Gr=new F($r.buffer);function Pr(r,t){return $r[0]=r,Gr[Vr]=t>>>0,$r[0]}var Hr=.6931471803691238,Wr=1.9082149292705877e-10,Cr=1048575;function Lr(r){var t,n,e,i,a,o,u,c,f,s,p,y;return 0===r?h:l(r)||r<0?NaN:(a=0,(n=cr(r))<1048576&&(a-=54,n=cr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-v|0,a+=(c=614244+(n&=Cr)&1048576|0)>>20|0,u=(r=Pr(r,n|1072693248^c))-1,(Cr&2+n)<3?0===u?0===a?0:a*Hr+a*Wr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Hr-(o-a*Wr-u)):(c=n-398458|0,f=440401-n|0,i=(p=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(c|=f)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*Hr-(t-(s*(t+o)+a*Wr)-u)):0===a?u-s*(u-o):a*Hr-(s*(u-o)-a*Wr-u))))}function Rr(r){return l(r)||r<0?NaN:1-Lr(r)}function Mr(r){return l(r)||r<0?NaN:6}function Zr(r){return l(r)||r<0?NaN:1/r}function qr(r){return l(r)||r<0?NaN:1/r*.6931471805599453}function Xr(r){return l(r)||r<0?NaN:0}function Yr(r){return l(r)||r<0?NaN:2}function zr(r){return l(r)||r<0?NaN:1/r}function Br(r){return l(r)||r<0?NaN:1/(r*r)}var Dr=.6931471803691238,Jr=1.9082149292705877e-10;function Kr(r){var t,n,e,i,a,o,u,c,f,s;if(r<-1||l(r))return NaN;if(-1===r)return h;if(r===b)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(e<9007199254740992?(a=(s=((n=cr(f=1+r))>>20)-v)>0?1-(f-r):r-(f-1),a/=f):(s=((n=cr(f=r))>>20)-v,a=0),(n&=1048575)<434334?f=Pr(f,1072693248|n):(s+=1,f=Pr(f,1071644672|n),n=1048576-n>>2),i=f-1),t=.5*i*i,0===n?0===i?s*Dr+(a+=s*Jr):s*Dr-((c=t*(1-.6666666666666666*i))-(s*Jr+a)-i):(c=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-o*(t+c)):s*Dr-(t-(o*(t+c)+(s*Jr+a))-i))}function Qr(r,t){return l(t)||t<0||t===b?NaN:r<0?h:Kr(-Ar(-t*r))}function rt(r,t){return l(r)||l(t)||t<0||t===b?NaN:r<0?h:-r*t+Lr(t)}function tt(r,t){return l(r)||l(t)||t<=0||t===b||r>=t?NaN:t/(t-r)}function nt(r,t){var n;return l(r)||l(t)||t<0||t===b?NaN:r<0?0:Ar(-r/(n=1/t))/n}function et(r,t){return l(t)||t<0||t===b||l(r)||r<0||r>1?NaN:-Lr(1-r)/t}function it(r){return"number"==typeof r}function at(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function ot(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+at(i):at(i)+r,e&&(r="-"+r)),r}s(Qr,"factory",(function(r){return l(r)||r<0||r===b?Er(NaN):function(t){return t<0?h:Kr(-Ar(-r*t))}})),s(rt,"factory",(function(r){return l(r)||r<0||r===b?Er(NaN):function(t){return l(t)?NaN:t<0?h:-t*r+Lr(r)}})),s(tt,"factory",(function(r){return l(r)||r<=0||r===b?Er(NaN):function(t){return l(t)||t>=r?NaN:r/(r-t)}})),s(nt,"factory",(function(r){var t;return l(r)||r<0||r===b?Er(NaN):(t=1/r,function(r){return l(r)?NaN:r<0?0:Ar(-r/t)/t})})),s(et,"factory",(function(r){return r<0||r===b||l(r)?Er(NaN):function(t){return l(t)||t<0||t>1?NaN:-Lr(1-t)/r}}));var ut=String.prototype.toLowerCase,ct=String.prototype.toUpperCase;function ft(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!it(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=ot(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=ot(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===ct.call(r.specifier)?ct.call(n):ut.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function st(r){return"string"==typeof r}var lt=Math.abs,pt=String.prototype.toLowerCase,yt=String.prototype.toUpperCase,dt=String.prototype.replace,gt=/e\+(\d)$/,ht=/e-(\d)$/,bt=/^(\d+)$/,vt=/^(\d+)e/,mt=/\.0$/,wt=/\.0*e/,Nt=/(\..*[^0])0*e/;function At(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!it(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":lt(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=dt.call(n,Nt,"$1e"),n=dt.call(n,wt,"e"),n=dt.call(n,mt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=dt.call(n,gt,"e+0$1"),n=dt.call(n,ht,"e-0$1"),r.alternate&&(n=dt.call(n,bt,"$1."),n=dt.call(n,vt,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===yt.call(r.specifier)?yt.call(n):pt.call(n)}function _t(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function Et(r,t,n){var e=t-r.length;return e<0?r:r=n?r+_t(e):_t(e)+r}var Ut=String.fromCharCode,kt=isNaN,xt=Array.isArray;function St(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function jt(r){var t,n,e,i,a,o,u,c,f;if(!xt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(st(e=r[c]))o+=e;else{if(t=void 0!==e.precision,!(e=St(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,kt(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,kt(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=ft(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!kt(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=kt(a)?String(e.arg):Ut(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=At(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=ot(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Et(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var It=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ft(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Tt(r){var t,n,e,i;for(n=[],i=0,e=It.exec(r);e;)(t=r.slice(i,It.lastIndex-e[0].length)).length&&n.push(t),n.push(Ft(e)),i=It.lastIndex,e=It.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function Ot(r){return"string"==typeof r}function Vt(r){var t,n,e;if(!Ot(r))throw new TypeError(Vt("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=Tt(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return jt.apply(null,n)}function $t(){var r;if(!(this instanceof $t))return 0===arguments.length?new $t:new $t(arguments[0]);if(arguments.length){if(!Fr(r=arguments[0]))throw new TypeError(Vt("invalid argument. Rate parameter must be a positive number. Value: `%s`.",r))}else r=1;return c(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Fr(t))throw new TypeError(Vt("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),this}Ur($t.prototype,"entropy",(function(){return Rr(this.lambda)})),Ur($t.prototype,"kurtosis",(function(){return Mr(this.lambda)})),Ur($t.prototype,"mean",(function(){return Zr(this.lambda)})),Ur($t.prototype,"median",(function(){return qr(this.lambda)})),Ur($t.prototype,"mode",(function(){return Xr(this.lambda)})),Ur($t.prototype,"skewness",(function(){return Yr(this.lambda)})),Ur($t.prototype,"stdev",(function(){return zr(this.lambda)})),Ur($t.prototype,"variance",(function(){return Br(this.lambda)})),s($t.prototype,"cdf",(function(r){return _r(r,this.lambda)})),s($t.prototype,"logcdf",(function(r){return Qr(r,this.lambda)})),s($t.prototype,"logpdf",(function(r){return rt(r,this.lambda)})),s($t.prototype,"mgf",(function(r){return tt(r,this.lambda)})),s($t.prototype,"pdf",(function(r){return nt(r,this.lambda)})),s($t.prototype,"quantile",(function(r){return et(r,this.lambda)}));var Gt={};return f(Gt,"cdf",_r),f(Gt,"Exponential",$t),f(Gt,"entropy",Rr),f(Gt,"kurtosis",Mr),f(Gt,"logcdf",Qr),f(Gt,"logpdf",rt),f(Gt,"mean",Zr),f(Gt,"median",qr),f(Gt,"mgf",tt),f(Gt,"mode",Xr),f(Gt,"pdf",nt),f(Gt,"quantile",et),f(Gt,"skewness",Yr),f(Gt,"stdev",zr),f(Gt,"variance",Br),Gt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).exponential=t();
//# sourceMappingURL=index.js.map
