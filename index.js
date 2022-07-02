// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return n({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__,l=e,y=function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,r.get),p&&a&&a.call(t,n,r.set),t},p=r()?l:y,b=p,s=function(t,n,r){b(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})},m=p,d=function(t,n,r){m(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},N=function(t){return t!=t},v=Math.floor,h=Math.ceil,w=v,g=h,A=function(t){return t<0?g(t):w(t)},_=Number,j=_.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,O=U,E=j,I=function(t){return t===O||t===E},S="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),T=function(){return S&&"symbol"==typeof Symbol.toStringTag},F=Object.prototype.toString,P=F,H=function(t){return P.call(t)},G=Object.prototype.hasOwnProperty,k=function(t,n){return null!=t&&G.call(t,n)},x="function"==typeof Symbol?Symbol.toStringTag:"",V=k,L=x,M=F,W=H,q=function(t){var n,r,e;if(null==t)return M.call(t);r=t[L],n=V(t,L);try{t[L]=void 0}catch(n){return M.call(t)}return e=M.call(t),n?t[L]=r:delete t[L],e},Y=T()?q:W,C=Y,R="function"==typeof Uint32Array,z="function"==typeof Uint32Array?Uint32Array:null,B=function(t){return R&&t instanceof Uint32Array||"[object Uint32Array]"===C(t)},D=z,J=function(){var t,n;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,4294967296,4294967297]),t=B(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},K="function"==typeof Uint32Array?Uint32Array:void 0,Q=function(){throw new Error("not implemented")},X=J()?K:Q,Z=Y,$="function"==typeof Float64Array,tt="function"==typeof Float64Array?Float64Array:null,nt=function(t){return $&&t instanceof Float64Array||"[object Float64Array]"===Z(t)},rt=tt,et=function(){var t,n;if("function"!=typeof rt)return!1;try{n=new rt([1,3.14,-3.14,NaN]),t=nt(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},ot="function"==typeof Float64Array?Float64Array:void 0,ut=function(){throw new Error("not implemented")},it=et()?ot:ut,at=Y,ft="function"==typeof Uint8Array,ct="function"==typeof Uint8Array?Uint8Array:null,lt=function(t){return ft&&t instanceof Uint8Array||"[object Uint8Array]"===at(t)},yt=ct,pt=function(){var t,n;if("function"!=typeof yt)return!1;try{n=new yt(n=[1,3.14,-3.14,256,257]),t=lt(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},bt="function"==typeof Uint8Array?Uint8Array:void 0,st=function(){throw new Error("not implemented")},mt=pt()?bt:st,dt=Y,Nt="function"==typeof Uint16Array,vt="function"==typeof Uint16Array?Uint16Array:null,ht=function(t){return Nt&&t instanceof Uint16Array||"[object Uint16Array]"===dt(t)},wt=vt,gt=function(){var t,n;if("function"!=typeof wt)return!1;try{n=new wt(n=[1,3.14,-3.14,65536,65537]),t=ht(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},At="function"==typeof Uint16Array?Uint16Array:void 0,_t=function(){throw new Error("not implemented")},jt={uint16:gt()?At:_t,uint8:mt};(t=new jt.uint16(1))[0]=4660;var Ut,Ot,Et=52===new jt.uint8(t.buffer)[0];!0===Et?(Ut=1,Ot=0):(Ut=0,Ot=1);var It,St,Tt=X,Ft={HIGH:Ut,LOW:Ot},Pt=new it(1),Ht=new Tt(Pt.buffer),Gt=Ft.HIGH,kt=Ft.LOW,xt=function(t,n){return Pt[0]=n,t[0]=Ht[Gt],t[1]=Ht[kt],t},Vt=function(t,n){return 1===arguments.length?xt([0,0],t):xt(t,n)},Lt=Vt,Mt=X,Wt=!0===Et?1:0,qt=new it(1),Yt=new Mt(qt.buffer),Ct=function(t){return qt[0]=t,Yt[Wt]};!0===Et?(It=1,St=0):(It=0,St=1);var Rt=X,zt={HIGH:It,LOW:St},Bt=new it(1),Dt=new Rt(Bt.buffer),Jt=zt.HIGH,Kt=zt.LOW,Qt=function(t,n){return Dt[Jt]=t,Dt[Kt]=n,Bt[0]},Xt=Lt,Zt=Ct,$t=Qt,tn=[0,0],nn=I,rn=N,en=function(t){return Math.abs(t)},on=function(t,n){return rn(n)||nn(n)?(t[0]=n,t[1]=0,t):0!==n&&en(n)<22250738585072014e-324?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)},un=function(t,n){return 1===arguments.length?on([0,0],t):on(t,n)},an=Ct,fn=function(t){var n=an(t);return(n=(2146435072&n)>>>20)-1023|0},cn=U,ln=j,yn=N,pn=I,bn=function(t,n){var r,e;return Xt(tn,t),r=tn[0],r&=2147483647,e=Zt(n),$t(r|=e&=2147483648,tn[1])},sn=un,mn=fn,dn=Lt,Nn=Qt,vn=[0,0],hn=[0,0],wn=function(t,n){var r,e;return 0===n||0===t||yn(t)||pn(t)?t:(sn(vn,t),n+=vn[1],(n+=mn(t=vn[0]))<-1074?bn(0,t):n>1023?t<0?ln:cn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,dn(hn,t),r=hn[0],r&=2148532223,e*Nn(r|=n+1023<<20,hn[1])))},gn=wn,An=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)},_n=N,jn=A,Un=j,On=U,En=function(t,n,r){var e,o,u;return u=(e=t-n)-(o=e*e)*An(o),gn(1-(n-e*u/(2-u)-t),r)},In=1.4426950408889634,Sn=1/(1<<28),Tn=function(t){var n;return _n(t)||t===On?t:t===Un?0:t>709.782712893384?On:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Sn?1+t:(n=jn(t<0?In*t-.5:In*t+.5),En(t-.6931471803691238*n,1.9082149292705877e-10*n,n))},Fn=N,Pn=Tn,Hn=U,Gn=function(t){return function(){return t}},kn=Gn,xn=N,Vn=Tn,Ln=U,Mn=function(t,n){return Fn(n)||n<0||n===Hn?NaN:t<0?0:1-Pn(-n*t)};d(Mn,"factory",(function(t){return xn(t)||t<0||t===Ln?kn(NaN):function(n){return n<0?0:1-Vn(-t*n)}}));var Wn=Mn,qn=p,Yn=function(t,n,r){qn(t,n,{configurable:!1,enumerable:!1,get:r})},Cn=function(t){return"number"==typeof t},Rn=_.prototype.toString,zn=Y,Bn=_,Dn=function(t){try{return Rn.call(t),!0}catch(t){return!1}},Jn=T(),Kn=function(t){return"object"==typeof t&&(t instanceof Bn||(Jn?Dn(t):"[object Number]"===zn(t)))},Qn=Cn,Xn=Kn,Zn=d,$n=function(t){return Qn(t)||Xn(t)},tr=Kn;Zn($n,"isPrimitive",Cn),Zn($n,"isObject",tr);var nr=$n.isPrimitive,rr=function(t){return nr(t)&&t>0},er=$n.isObject,or=function(t){return er(t)&&t.valueOf()>0},ur=rr,ir=or,ar=d,fr=function(t){return ur(t)||ir(t)},cr=or;ar(fr,"isPrimitive",rr),ar(fr,"isObject",cr);var lr=fr,yr=X,pr=!0===Et?1:0,br=new it(1),sr=new yr(br.buffer),mr=function(t,n){return br[0]=t,sr[pr]=n>>>0,br[0]},dr=Ct,Nr=mr,vr=N,hr=j,wr=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)},gr=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},Ar=.6931471803691238,_r=1.9082149292705877e-10,jr=1048575,Ur=function(t){var n,r,e,o,u,i,a,f,c,l,y;return 0===t?hr:vr(t)||t<0?NaN:(o=0,(r=dr(t))<1048576&&(o-=54,r=dr(t*=0x40000000000000)),r>=2146435072?t+t:(o+=(r>>20)-1023|0,o+=(a=614244+(r&=jr)&1048576|0)>>20|0,i=(t=Nr(t,r|1072693248^a))-1,(jr&2+r)<3?0===i?0===o?0:o*Ar+o*_r:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*Ar-(u-o*_r-i)):(a=r-398458|0,f=440401-r|0,e=(l=(y=(c=i/(2+i))*c)*y)*wr(l),u=y*gr(l)+e,(a|=f)>0?(n=.5*i*i,0===o?i-(n-c*(n+u)):o*Ar-(n-(c*(n+u)+o*_r)-i)):0===o?i-c*(i-u):o*Ar-(c*(i-u)-o*_r-i))))},Or=N,Er=Ur,Ir=function(t){return Or(t)||t<0?NaN:1-Er(t)},Sr=N,Tr=function(t){return Sr(t)||t<0?NaN:6},Fr=N,Pr=function(t){return Fr(t)||t<0?NaN:1/t},Hr=N,Gr=function(t){return Hr(t)||t<0?NaN:1/t*.6931471805599453},kr=N,xr=function(t){return kr(t)||t<0?NaN:0},Vr=N,Lr=function(t){return Vr(t)||t<0?NaN:2},Mr=N,Wr=function(t){return Mr(t)||t<0?NaN:1/t},qr=N,Yr=function(t){return qr(t)||t<0?NaN:1/(t*t)},Cr=N,Rr=Ct,zr=mr,Br=U,Dr=j,Jr=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))},Kr=.6931471803691238,Qr=1.9082149292705877e-10,Xr=function(t){var n,r,e,o,u,i,a,f,c,l;if(t<-1||Cr(t))return NaN;if(-1===t)return Dr;if(t===Br)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,r=1)}return 0!==l&&(e<9007199254740992?(u=(l=((r=Rr(c=1+t))>>20)-1023)>0?1-(c-t):t-(c-1),u/=c):(l=((r=Rr(c=t))>>20)-1023,u=0),(r&=1048575)<434334?c=zr(c,1072693248|r):(l+=1,c=zr(c,1071644672|r),r=1048576-r>>2),o=c-1),n=.5*o*o,0===r?0===o?l*Kr+(u+=l*Qr):l*Kr-((f=n*(1-.6666666666666666*o))-(l*Qr+u)-o):(f=(a=(i=o/(2+o))*i)*Jr(a),0===l?o-(n-i*(n+f)):l*Kr-(n-(i*(n+f)+(l*Qr+u))-o))},Zr=N,$r=Xr,te=Tn,ne=j,re=U,ee=Gn,oe=N,ue=Xr,ie=Tn,ae=j,fe=U,ce=function(t,n){return Zr(n)||n<0||n===re?NaN:t<0?ne:$r(-te(-n*t))};d(ce,"factory",(function(t){return oe(t)||t<0||t===fe?ee(NaN):function(n){return n<0?ae:ue(-ie(-t*n))}}));var le=ce,ye=N,pe=Ur,be=j,se=U,me=Gn,de=N,Ne=Ur,ve=j,he=U,we=function(t,n){return ye(t)||ye(n)||n<0||n===se?NaN:t<0?be:-t*n+pe(n)};d(we,"factory",(function(t){return de(t)||t<0||t===he?me(NaN):function(n){return de(n)?NaN:n<0?ve:-n*t+Ne(t)}}));var ge=we,Ae=N,_e=U,je=Gn,Ue=N,Oe=U,Ee=function(t,n){return Ae(t)||Ae(n)||n<=0||n===_e||t>=n?NaN:n/(n-t)};d(Ee,"factory",(function(t){return Ue(t)||t<=0||t===Oe?je(NaN):function(n){return Ue(n)||n>=t?NaN:t/(t-n)}}));var Ie=Ee,Se=N,Te=Tn,Fe=U,Pe=Gn,He=N,Ge=Tn,ke=U,xe=function(t,n){var r;return Se(t)||Se(n)||n<0||n===Fe?NaN:t<0?0:Te(-t/(r=1/n))/r};d(xe,"factory",(function(t){var n;return He(t)||t<0||t===ke?Pe(NaN):(n=1/t,function(t){return He(t)?NaN:t<0?0:Ge(-t/n)/n})}));var Ve=xe,Le=N,Me=Ur,We=U,qe=Gn,Ye=N,Ce=Ur,Re=U,ze=function(t,n){return Le(n)||n<0||n===We||Le(t)||t<0||t>1?NaN:-Me(1-t)/n};d(ze,"factory",(function(t){return t<0||t===Re||Ye(t)?qe(NaN):function(n){return Ye(n)||n<0||n>1?NaN:-Ce(1-n)/t}}));var Be=ze,De=p,Je=d,Ke=Yn,Qe=lr.isPrimitive,Xe=Ir,Ze=Tr,$e=Pr,to=Gr,no=xr,ro=Lr,eo=Wr,oo=Yr,uo=Wn,io=le,ao=ge,fo=Ie,co=Ve,lo=Be;function yo(){var t;if(!(this instanceof yo))return 0===arguments.length?new yo:new yo(arguments[0]);if(arguments.length){if(!Qe(t=arguments[0]))throw new TypeError("invalid argument. Rate parameter `lambda` must be a positive number. Value: `"+t+"`")}else t=1;return De(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!Qe(n))throw new TypeError("invalid value. Must be a positive number. Value: `"+n+"`");t=n}}),this}Ke(yo.prototype,"entropy",(function(){return Xe(this.lambda)})),Ke(yo.prototype,"kurtosis",(function(){return Ze(this.lambda)})),Ke(yo.prototype,"mean",(function(){return $e(this.lambda)})),Ke(yo.prototype,"median",(function(){return to(this.lambda)})),Ke(yo.prototype,"mode",(function(){return no(this.lambda)})),Ke(yo.prototype,"skewness",(function(){return ro(this.lambda)})),Ke(yo.prototype,"stdev",(function(){return eo(this.lambda)})),Ke(yo.prototype,"variance",(function(){return oo(this.lambda)})),Je(yo.prototype,"cdf",(function(t){return uo(t,this.lambda)})),Je(yo.prototype,"logcdf",(function(t){return io(t,this.lambda)})),Je(yo.prototype,"logpdf",(function(t){return ao(t,this.lambda)})),Je(yo.prototype,"mgf",(function(t){return fo(t,this.lambda)})),Je(yo.prototype,"pdf",(function(t){return co(t,this.lambda)})),Je(yo.prototype,"quantile",(function(t){return lo(t,this.lambda)}));var po=yo,bo={};return s(bo,"cdf",Wn),s(bo,"Exponential",po),s(bo,"entropy",Ir),s(bo,"kurtosis",Tr),s(bo,"logcdf",le),s(bo,"logpdf",ge),s(bo,"mean",Pr),s(bo,"median",Gr),s(bo,"mgf",Ie),s(bo,"mode",xr),s(bo,"pdf",Ve),s(bo,"quantile",Be),s(bo,"skewness",Lr),s(bo,"stdev",Wr),s(bo,"variance",Yr),bo},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).exponential=n();
//# sourceMappingURL=index.js.map
