// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,v,"$1e"),e=l.call(e,b,"e"),e=l.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,p,"e+0$1"),e=l.call(e,y,"e-0$1"),r.alternate&&(e=l.call(e,d,"$1."),e=l.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):f.call(e)}function w(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,a,o,c,f,s,l,p,y,d,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,A(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!A(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(p=e.arg,y=e.width,d=e.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+w(g):w(g)+p)),c+=e.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function S(r){var t,n,e,i;for(n=[],i=0,e=k.exec(r);e;)(t=r.slice(i,k.lastIndex-e[0].length)).length&&n.push(t),n.push(x(e)),i=k.lastIndex,e=k.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function j(r){var t,n;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[S(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var I=Object.prototype,F=I.toString,T=I.__defineGetter__,O=I.__defineSetter__,V=I.__lookupGetter__,$=I.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||$.call(r,t)?(e=r.__proto__,r.__proto__=I,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,t,n.get),o&&O&&O.call(r,t,n.set),r};function P(r,t,n){G(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function H(r,t,n){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Math.floor,L=Math.ceil;function R(r){return r<0?L(r):C(r)}var M=Number,Z=M.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,B=-1074;function D(r){return r===q||r===Z}var J=2147483648,K=2147483647,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var tr,nr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=rr()?function(r){var t,n,e,i,a;if(null==r)return nr.call(r);n=r[ar],a=ar,t=null!=(i=r)&&er.call(i,a);try{r[ar]=void 0}catch(t){return nr.call(r)}return e=nr.call(r),t?r[ar]=n:delete r[ar],e}:function(r){return nr.call(r)},ur="function"==typeof Uint32Array,cr="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ur&&n instanceof Uint32Array||"[object Uint32Array]"===or(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr,lr=tr,pr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,dr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr([1,3.14,-3.14,NaN]),n=t,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var gr,hr=sr,br="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,mr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),n=t,r=(br&&n instanceof Uint8Array||"[object Uint8Array]"===or(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr,Nr=gr,Ar="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,Er="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof _r)return!1;try{t=new _r(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===or(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Ur,kr={uint16:wr,uint8:Nr};(Ur=new kr.uint16(1))[0]=4660;var xr,Sr,jr=52===new kr.uint8(Ur.buffer)[0];!0===jr?(xr=1,Sr=0):(xr=0,Sr=1);var Ir={HIGH:xr,LOW:Sr},Fr=new hr(1),Tr=new lr(Fr.buffer),Or=Ir.HIGH,Vr=Ir.LOW;function $r(r,t,n,e){return Fr[0]=r,t[e]=Tr[Or],t[e+n]=Tr[Vr],t}function Gr(r){return $r(r,[0,0],1,0)}H(Gr,"assign",$r);var Pr,Hr,Wr=!0===jr?1:0,Cr=new hr(1),Lr=new lr(Cr.buffer);function Rr(r){return Cr[0]=r,Lr[Wr]}!0===jr?(Pr=1,Hr=0):(Pr=0,Hr=1);var Mr={HIGH:Pr,LOW:Hr},Zr=new hr(1),qr=new lr(Zr.buffer),Xr=Mr.HIGH,Yr=Mr.LOW;function zr(r,t){return qr[Xr]=r,qr[Yr]=t,Zr[0]}var Br=[0,0],Dr=22250738585072014e-324,Jr=4503599627370496;function Kr(r,t,n,e){return W(r)||D(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<Dr?(t[e]=r*Jr,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}H((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=2146435072,rt=2220446049250313e-31,tt=2148532223,nt=[0,0],et=[0,0];function it(r,t){var n,e,i,a,o,u;return 0===t||0===r||W(r)||D(r)?r:(Kr(r,nt,1,0),r=nt[0],t+=nt[1],t+=function(r){var t=Rr(r);return(t=(t&Qr)>>>20)-X|0}(r),t<B?(i=0,a=r,Gr.assign(i,Br,1,0),o=Br[0],o&=K,u=Rr(a),zr(o|=u&=J,Br[1])):t>Y?r<0?Z:q:(t<=z?(t+=52,e=rt):e=1,Gr.assign(r,et,1,0),n=et[0],n&=tt,e*zr(n|=t+X<<20,et[1])))}var at=.6931471803691238,ot=1.9082149292705877e-10,ut=1.4426950408889634,ct=709.782712893384,ft=-745.1332191019411,st=1/(1<<28),lt=-st;function pt(r){var t;return W(r)||r===q?r:r===Z?0:r>ct?q:r<ft?0:r>lt&&r<st?1+r:function(r,t,n){var e,i,a,o;return it(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(t=R(r<0?ut*r-.5:ut*r+.5))*at,t*ot,t)}function yt(r,t){return W(t)||t<0||t===q?NaN:r<0?0:1-pt(-t*r)}function dt(r){return function(){return r}}function gt(r,t,n){G(r,t,{configurable:!1,enumerable:!1,get:n})}function ht(r){return"number"==typeof r}H(yt,"factory",(function(r){return W(r)||r<0||r===q?dt(NaN):function(t){return t<0?0:1-pt(-r*t)}}));var bt=M.prototype.toString,vt=rr();function mt(r){return"object"==typeof r&&(r instanceof M||(vt?function(r){try{return bt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function wt(r){return ht(r)||mt(r)}function Nt(r){return ht(r)&&r>0}function At(r){return mt(r)&&r.valueOf()>0}function _t(r){return Nt(r)||At(r)}H(wt,"isPrimitive",ht),H(wt,"isObject",mt),H(_t,"isPrimitive",Nt),H(_t,"isObject",At);var Et=!0===jr?1:0,Ut=new hr(1),kt=new lr(Ut.buffer);function xt(r,t){return Ut[0]=r,kt[Et]=t>>>0,Ut[0]}var St=.6931471803691238,jt=1.9082149292705877e-10,It=0x40000000000000,Ft=.3333333333333333,Tt=1048575,Ot=2146435072,Vt=1048576,$t=1072693248;function Gt(r){var t,n,e,i,a,o,u,c,f,s,l,p;return 0===r?Z:W(r)||r<0?NaN:(a=0,(n=Rr(r))<Vt&&(a-=54,n=Rr(r*=It)),n>=Ot?r+r:(a+=(n>>20)-X|0,a+=(c=614244+(n&=Tt)&1048576|0)>>20|0,u=(r=xt(r,n|c^$t))-1,(Tt&2+n)<3?0===u?0===a?0:a*St+a*jt:(o=u*u*(.5-Ft*u),0===a?u-o:a*St-(o-a*jt-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(c|=f)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*St-(t-(s*(t+o)+a*jt)-u)):0===a?u-s*(u-o):a*St-(s*(u-o)-a*jt-u))))}function Pt(r){return W(r)||r<0?NaN:1-Gt(r)}function Ht(r){return W(r)||r<0?NaN:6}function Wt(r){return W(r)||r<0?NaN:1/r}function Ct(r){return W(r)||r<0?NaN:1/r*.6931471805599453}function Lt(r){return W(r)||r<0?NaN:0}function Rt(r){return W(r)||r<0?NaN:2}function Mt(r){return W(r)||r<0?NaN:1/r}function Zt(r){return W(r)||r<0?NaN:1/(r*r)}var qt=.6931471803691238,Xt=1.9082149292705877e-10,Yt=.41421356237309503,zt=-.2928932188134525,Bt=1.862645149230957e-9,Dt=5551115123125783e-32,Jt=9007199254740992,Kt=.6666666666666666;function Qt(r){var t,n,e,i,a,o,u,c,f,s;if(r<-1||W(r))return NaN;if(-1===r)return Z;if(r===q)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<Yt){if(e<Bt)return e<Dt?r:r-r*r*.5;r>zt&&(s=0,i=r,n=1)}return 0!==s&&(e<Jt?(a=(s=((n=Rr(f=1+r))>>20)-X)>0?1-(f-r):r-(f-1),a/=f):(s=((n=Rr(f=r))>>20)-X,a=0),(n&=1048575)<434334?f=xt(f,1072693248|n):(s+=1,f=xt(f,1071644672|n),n=1048576-n>>2),i=f-1),t=.5*i*i,0===n?0===i?s*qt+(a+=s*Xt):s*qt-((c=t*(1-Kt*i))-(s*Xt+a)-i):(c=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-o*(t+c)):s*qt-(t-(o*(t+c)+(s*Xt+a))-i))}function rn(r,t){return W(t)||t<0||t===q?NaN:r<0?Z:Qt(-pt(-t*r))}function tn(r,t){return W(r)||W(t)||t<0||t===q?NaN:r<0?Z:-r*t+Gt(t)}function nn(r,t){return W(r)||W(t)||t<=0||t===q||r>=t?NaN:t/(t-r)}function en(r,t){var n;return W(r)||W(t)||t<0||t===q?NaN:r<0?0:pt(-r/(n=1/t))/n}function an(r,t){return W(t)||t<0||t===q||W(r)||r<0||r>1?NaN:-Gt(1-r)/t}function on(){var r;if(!(this instanceof on))return 0===arguments.length?new on:new on(arguments[0]);if(arguments.length){if(!Nt(r=arguments[0]))throw new TypeError(j("invalid argument. Rate parameter must be a positive number. Value: `%s`.",r))}else r=1;return G(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Nt(t))throw new TypeError(j("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),this}H(rn,"factory",(function(r){return W(r)||r<0||r===q?dt(NaN):function(t){return t<0?Z:Qt(-pt(-r*t))}})),H(tn,"factory",(function(r){return W(r)||r<0||r===q?dt(NaN):function(t){return W(t)?NaN:t<0?Z:-t*r+Gt(r)}})),H(nn,"factory",(function(r){return W(r)||r<=0||r===q?dt(NaN):function(t){return W(t)||t>=r?NaN:r/(r-t)}})),H(en,"factory",(function(r){var t;return W(r)||r<0||r===q?dt(NaN):(t=1/r,function(r){return W(r)?NaN:r<0?0:pt(-r/t)/t})})),H(an,"factory",(function(r){return r<0||r===q||W(r)?dt(NaN):function(t){return W(t)||t<0||t>1?NaN:-Gt(1-t)/r}})),gt(on.prototype,"entropy",(function(){return Pt(this.lambda)})),gt(on.prototype,"kurtosis",(function(){return Ht(this.lambda)})),gt(on.prototype,"mean",(function(){return Wt(this.lambda)})),gt(on.prototype,"median",(function(){return Ct(this.lambda)})),gt(on.prototype,"mode",(function(){return Lt(this.lambda)})),gt(on.prototype,"skewness",(function(){return Rt(this.lambda)})),gt(on.prototype,"stdev",(function(){return Mt(this.lambda)})),gt(on.prototype,"variance",(function(){return Zt(this.lambda)})),H(on.prototype,"cdf",(function(r){return yt(r,this.lambda)})),H(on.prototype,"logcdf",(function(r){return rn(r,this.lambda)})),H(on.prototype,"logpdf",(function(r){return tn(r,this.lambda)})),H(on.prototype,"mgf",(function(r){return nn(r,this.lambda)})),H(on.prototype,"pdf",(function(r){return en(r,this.lambda)})),H(on.prototype,"quantile",(function(r){return an(r,this.lambda)}));var un={};return P(un,"cdf",yt),P(un,"Exponential",on),P(un,"entropy",Pt),P(un,"kurtosis",Ht),P(un,"logcdf",rn),P(un,"logpdf",tn),P(un,"mean",Wt),P(un,"median",Ct),P(un,"mgf",nn),P(un,"mode",Lt),P(un,"pdf",en),P(un,"quantile",an),P(un,"skewness",Rt),P(un,"stdev",Mt),P(un,"variance",Zt),un},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).exponential=t();
//# sourceMappingURL=browser.js.map
