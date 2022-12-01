// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__;var c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,c){var f,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===e.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((s="value"in c)&&(o.call(r,t)||u.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=c.value,r.__proto__=f):r[t]=c.value),l="get"in c,p="set"in c,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,c.get),p&&a&&a.call(r,t,c.set),r};function f(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var p=Math.floor,y=Math.ceil;function d(r){return r<0?y(r):p(r)}var g=Number,v=g.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY;function b(r){return r===h||r===v}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return m&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var E=w()?function(r){var t,n,e,i,a;if(null==r)return N.call(r);n=r[_],a=_,t=null!=(i=r)&&A.call(i,a);try{r[_]=void 0}catch(t){return N.call(r)}return e=N.call(r),t?r[_]=n:delete r[_],e}:function(r){return N.call(r)},U="function"==typeof Uint32Array;var k="function"==typeof Uint32Array?Uint32Array:null;var S,I="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(U&&n instanceof Uint32Array||"[object Uint32Array]"===E(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var j=S,x="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var O,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F([1,3.14,-3.14,NaN]),n=t,r=(x&&n instanceof Float64Array||"[object Float64Array]"===E(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var V=O,$="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,H="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=t,r=($&&n instanceof Uint8Array||"[object Uint8Array]"===E(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?H:function(){throw new Error("not implemented")};var W=P,C="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var R,M="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,t,n;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,65536,65537]),n=t,r=(C&&n instanceof Uint16Array||"[object Uint16Array]"===E(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?M:function(){throw new Error("not implemented")};var Z,q={uint16:R,uint8:W};(Z=new q.uint16(1))[0]=4660;var X,Y,z=52===new q.uint8(Z.buffer)[0];!0===z?(X=1,Y=0):(X=0,Y=1);var B={HIGH:X,LOW:Y},D=new V(1),J=new j(D.buffer),K=B.HIGH,Q=B.LOW;function rr(r,t,n,e){return D[0]=r,t[e]=J[K],t[e+n]=J[Q],t}function tr(r){return rr(r,[0,0],1,0)}s(tr,"assign",rr);var nr,er,ir=!0===z?1:0,ar=new V(1),or=new j(ar.buffer);function ur(r){return ar[0]=r,or[ir]}!0===z?(nr=1,er=0):(nr=0,er=1);var cr={HIGH:nr,LOW:er},fr=new V(1),sr=new j(fr.buffer),lr=cr.HIGH,pr=cr.LOW;function yr(r,t){return sr[lr]=r,sr[pr]=t,fr[0]}var dr=[0,0];function gr(r,t,n,e){return l(r)||b(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}s((function(r){return gr(r,[0,0],1,0)}),"assign",gr);var vr=[0,0],hr=[0,0];function br(r,t){var n,e,i,a,o,u;return 0===t||0===r||l(r)||b(r)?r:(gr(r,vr,1,0),t+=vr[1],t+=function(r){var t=ur(r);return(t=(2146435072&t)>>>20)-1023|0}(r=vr[0]),t<-1074?(i=0,a=r,tr.assign(i,dr,1,0),o=dr[0],o&=2147483647,u=ur(a),yr(o|=u&=2147483648,dr[1])):t>1023?r<0?v:h:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,tr.assign(r,hr,1,0),n=hr[0],n&=2148532223,e*yr(n|=t+1023<<20,hr[1])))}function mr(r){var t;return l(r)||r===h?r:r===v?0:r>709.782712893384?h:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,i,a,o;return br(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=d(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function wr(r,t){return l(t)||t<0||t===h?NaN:r<0?0:1-mr(-t*r)}function Nr(r){return function(){return r}}function Ar(r,t,n){c(r,t,{configurable:!1,enumerable:!1,get:n})}function _r(r){return"number"==typeof r}s(wr,"factory",(function(r){return l(r)||r<0||r===h?Nr(NaN):function(t){if(t<0)return 0;return 1-mr(-r*t)}}));var Er=g.prototype.toString;var Ur=w();function kr(r){return"object"==typeof r&&(r instanceof g||(Ur?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Number]"===E(r)))}function Sr(r){return _r(r)||kr(r)}function Ir(r){return _r(r)&&r>0}function jr(r){return kr(r)&&r.valueOf()>0}function xr(r){return Ir(r)||jr(r)}s(Sr,"isPrimitive",_r),s(Sr,"isObject",kr),s(xr,"isPrimitive",Ir),s(xr,"isObject",jr);var Fr=!0===z?1:0,Or=new V(1),Tr=new j(Or.buffer);function Vr(r,t){return Or[0]=r,Tr[Fr]=t>>>0,Or[0]}var $r=.6931471803691238,Gr=1.9082149292705877e-10;function Pr(r){var t,n,e,i,a,o,u,c,f,s,p,y;return 0===r?v:l(r)||r<0?NaN:(a=0,(n=ur(r))<1048576&&(a-=54,n=ur(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(c=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=Vr(r,n|1072693248^c))-1,(1048575&2+n)<3?0===u?0===a?0:a*$r+a*Gr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*$r-(o-a*Gr-u)):(c=n-398458|0,f=440401-n|0,i=(p=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(c|=f)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*$r-(t-(s*(t+o)+a*Gr)-u)):0===a?u-s*(u-o):a*$r-(s*(u-o)-a*Gr-u))))}function Hr(r){return l(r)||r<0?NaN:1-Pr(r)}function Wr(r){return l(r)||r<0?NaN:6}function Cr(r){return l(r)||r<0?NaN:1/r}function Lr(r){return l(r)||r<0?NaN:1/r*.6931471805599453}function Rr(r){return l(r)||r<0?NaN:0}function Mr(r){return l(r)||r<0?NaN:2}function Zr(r){return l(r)||r<0?NaN:1/r}function qr(r){return l(r)||r<0?NaN:1/(r*r)}var Xr=.6931471803691238,Yr=1.9082149292705877e-10;function zr(r){var t,n,e,i,a,o,u,c,f,s;if(r<-1||l(r))return NaN;if(-1===r)return v;if(r===h)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(e<9007199254740992?(a=(s=((n=ur(f=1+r))>>20)-1023)>0?1-(f-r):r-(f-1),a/=f):(s=((n=ur(f=r))>>20)-1023,a=0),(n&=1048575)<434334?f=Vr(f,1072693248|n):(s+=1,f=Vr(f,1071644672|n),n=1048576-n>>2),i=f-1),t=.5*i*i,0===n?0===i?s*Xr+(a+=s*Yr):s*Xr-((c=t*(1-.6666666666666666*i))-(s*Yr+a)-i):(c=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-o*(t+c)):s*Xr-(t-(o*(t+c)+(s*Yr+a))-i))}function Br(r,t){return l(t)||t<0||t===h?NaN:r<0?v:zr(-mr(-t*r))}function Dr(r,t){return l(r)||l(t)||t<0||t===h?NaN:r<0?v:-r*t+Pr(t)}function Jr(r,t){return l(r)||l(t)||t<=0||t===h||r>=t?NaN:t/(t-r)}function Kr(r,t){var n;return l(r)||l(t)||t<0||t===h?NaN:r<0?0:mr(-r/(n=1/t))/n}function Qr(r,t){return l(t)||t<0||t===h||l(r)||r<0||r>1?NaN:-Pr(1-r)/t}function rt(r){return"number"==typeof r}function tt(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function nt(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+tt(i):tt(i)+r,e&&(r="-"+r)),r}s(Br,"factory",(function(r){return l(r)||r<0||r===h?Nr(NaN):function(t){if(t<0)return v;return zr(-mr(-r*t))}})),s(Dr,"factory",(function(r){return l(r)||r<0||r===h?Nr(NaN):function(t){if(l(t))return NaN;if(t<0)return v;return-t*r+Pr(r)}})),s(Jr,"factory",(function(r){return l(r)||r<=0||r===h?Nr(NaN):function(t){if(l(t)||t>=r)return NaN;return r/(r-t)}})),s(Kr,"factory",(function(r){var t;return l(r)||r<0||r===h?Nr(NaN):(t=1/r,function(r){if(l(r))return NaN;if(r<0)return 0;return mr(-r/t)/t})})),s(Qr,"factory",(function(r){return r<0||r===h||l(r)?Nr(NaN):function(t){if(l(t)||t<0||t>1)return NaN;return-Pr(1-t)/r}}));var et=String.prototype.toLowerCase,it=String.prototype.toUpperCase;function at(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!rt(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=nt(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=nt(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===it.call(r.specifier)?it.call(n):et.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function ot(r){return"string"==typeof r}var ut=Math.abs,ct=String.prototype.toLowerCase,ft=String.prototype.toUpperCase,st=String.prototype.replace,lt=/e\+(\d)$/,pt=/e-(\d)$/,yt=/^(\d+)$/,dt=/^(\d+)e/,gt=/\.0$/,vt=/\.0*e/,ht=/(\..*[^0])0*e/;function bt(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!rt(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":ut(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=st.call(n,ht,"$1e"),n=st.call(n,vt,"e"),n=st.call(n,gt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=st.call(n,lt,"e+0$1"),n=st.call(n,pt,"e-0$1"),r.alternate&&(n=st.call(n,yt,"$1."),n=st.call(n,dt,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===ft.call(r.specifier)?ft.call(n):ct.call(n)}function mt(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function wt(r,t,n){var e=t-r.length;return e<0?r:r=n?r+mt(e):mt(e)+r}var Nt=String.fromCharCode,At=isNaN,_t=Array.isArray;function Et(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Ut(r){var t,n,e,i,a,o,u,c,f;if(!_t(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(ot(e=r[c]))o+=e;else{if(t=void 0!==e.precision,!(e=Et(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,At(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,At(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=at(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!At(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=At(a)?String(e.arg):Nt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=bt(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=nt(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=wt(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var kt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function St(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function It(r){var t,n,e,i;for(n=[],i=0,e=kt.exec(r);e;)(t=r.slice(i,kt.lastIndex-e[0].length)).length&&n.push(t),n.push(St(e)),i=kt.lastIndex,e=kt.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function jt(r){return"string"==typeof r}function xt(r){var t,n,e;if(!jt(r))throw new TypeError(xt("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=It(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return Ut.apply(null,n)}function Ft(){var r;if(!(this instanceof Ft))return 0===arguments.length?new Ft:new Ft(arguments[0]);if(arguments.length){if(!Ir(r=arguments[0]))throw new TypeError(xt("invalid argument. Rate parameter must be a positive number. Value: `%s`.",r))}else r=1;return c(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Ir(t))throw new TypeError(xt("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),this}Ar(Ft.prototype,"entropy",(function(){return Hr(this.lambda)})),Ar(Ft.prototype,"kurtosis",(function(){return Wr(this.lambda)})),Ar(Ft.prototype,"mean",(function(){return Cr(this.lambda)})),Ar(Ft.prototype,"median",(function(){return Lr(this.lambda)})),Ar(Ft.prototype,"mode",(function(){return Rr(this.lambda)})),Ar(Ft.prototype,"skewness",(function(){return Mr(this.lambda)})),Ar(Ft.prototype,"stdev",(function(){return Zr(this.lambda)})),Ar(Ft.prototype,"variance",(function(){return qr(this.lambda)})),s(Ft.prototype,"cdf",(function(r){return wr(r,this.lambda)})),s(Ft.prototype,"logcdf",(function(r){return Br(r,this.lambda)})),s(Ft.prototype,"logpdf",(function(r){return Dr(r,this.lambda)})),s(Ft.prototype,"mgf",(function(r){return Jr(r,this.lambda)})),s(Ft.prototype,"pdf",(function(r){return Kr(r,this.lambda)})),s(Ft.prototype,"quantile",(function(r){return Qr(r,this.lambda)}));var Ot={};f(Ot,"cdf",wr),f(Ot,"Exponential",Ft),f(Ot,"entropy",Hr),f(Ot,"kurtosis",Wr),f(Ot,"logcdf",Br),f(Ot,"logpdf",Dr),f(Ot,"mean",Cr),f(Ot,"median",Lr),f(Ot,"mgf",Jr),f(Ot,"mode",Rr),f(Ot,"pdf",Kr),f(Ot,"quantile",Qr),f(Ot,"skewness",Mr),f(Ot,"stdev",Zr),f(Ot,"variance",qr);export{Ft as Exponential,wr as cdf,Ot as default,Hr as entropy,Wr as kurtosis,Br as logcdf,Dr as logpdf,Cr as mean,Lr as median,Jr as mgf,Rr as mode,Kr as pdf,Qr as quantile,Mr as skewness,Zr as stdev,qr as variance};
//# sourceMappingURL=mod.js.map
