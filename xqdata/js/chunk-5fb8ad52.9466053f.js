(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb8ad52"],{1169:function(e,t,n){var a=n("2d95");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"37c8":function(e,t,n){t.f=n("2b4c")},"3a72":function(e,t,n){var a=n("7726"),r=n("8378"),i=n("2d00"),o=n("37c8"),c=n("86cc").f;e.exports=function(e){var t=r.Symbol||(r.Symbol=i?{}:a.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:o.f(e)})}},"67ab":function(e,t,n){var a=n("ca5a")("meta"),r=n("d3f4"),i=n("69a8"),o=n("86cc").f,c=0,s=Object.isExtensible||function(){return!0},u=!n("79e5")(function(){return s(Object.preventExtensions({}))}),l=function(e){o(e,a,{value:{i:"O"+ ++c,w:{}}})},p=function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,a)){if(!s(e))return"F";if(!t)return"E";l(e)}return e[a].i},d=function(e,t){if(!i(e,a)){if(!s(e))return!0;if(!t)return!1;l(e)}return e[a].w},f=function(e){return u&&h.NEED&&s(e)&&!i(e,a)&&l(e),e},h=e.exports={KEY:a,NEED:!1,fastKey:p,getWeak:d,onFreeze:f}},"7bbc":function(e,t,n){var a=n("6821"),r=n("9093").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return r(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?c(e):r(a(e))}},"8a81":function(e,t,n){"use strict";var a=n("7726"),r=n("69a8"),i=n("9e1e"),o=n("5ca1"),c=n("2aba"),s=n("67ab").KEY,u=n("79e5"),l=n("5537"),p=n("7f20"),d=n("ca5a"),f=n("2b4c"),h=n("37c8"),m=n("3a72"),b=n("d4c0"),v=n("1169"),y=n("cb7c"),g=n("d3f4"),O=n("4bf8"),j=n("6821"),P=n("6a99"),w=n("4630"),x=n("2aeb"),S=n("7bbc"),I=n("11e9"),k=n("2621"),T=n("86cc"),$=n("0d58"),E=I.f,N=T.f,C=S.f,F=a.Symbol,L=a.JSON,_=L&&L.stringify,J="prototype",q=f("_hidden"),D=f("toPrimitive"),z={}.propertyIsEnumerable,A=l("symbol-registry"),B=l("symbols"),K=l("op-symbols"),W=Object[J],M="function"==typeof F&&!!k.f,R=a.QObject,Y=!R||!R[J]||!R[J].findChild,G=i&&u(function(){return 7!=x(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(e,t,n){var a=E(W,t);a&&delete W[t],N(e,t,n),a&&e!==W&&N(W,t,a)}:N,Q=function(e){var t=B[e]=x(F[J]);return t._k=e,t},H=M&&"symbol"==typeof F.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof F},U=function(e,t,n){return e===W&&U(K,t,n),y(e),t=P(t,!0),y(n),r(B,t)?(n.enumerable?(r(e,q)&&e[q][t]&&(e[q][t]=!1),n=x(n,{enumerable:w(0,!1)})):(r(e,q)||N(e,q,w(1,{})),e[q][t]=!0),G(e,t,n)):N(e,t,n)},V=function(e,t){y(e);var n,a=b(t=j(t)),r=0,i=a.length;while(i>r)U(e,n=a[r++],t[n]);return e},X=function(e,t){return void 0===t?x(e):V(x(e),t)},Z=function(e){var t=z.call(this,e=P(e,!0));return!(this===W&&r(B,e)&&!r(K,e))&&(!(t||!r(this,e)||!r(B,e)||r(this,q)&&this[q][e])||t)},ee=function(e,t){if(e=j(e),t=P(t,!0),e!==W||!r(B,t)||r(K,t)){var n=E(e,t);return!n||!r(B,t)||r(e,q)&&e[q][t]||(n.enumerable=!0),n}},te=function(e){var t,n=C(j(e)),a=[],i=0;while(n.length>i)r(B,t=n[i++])||t==q||t==s||a.push(t);return a},ne=function(e){var t,n=e===W,a=C(n?K:j(e)),i=[],o=0;while(a.length>o)!r(B,t=a[o++])||n&&!r(W,t)||i.push(B[t]);return i};M||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===W&&t.call(K,n),r(this,q)&&r(this[q],e)&&(this[q][e]=!1),G(this,e,w(1,n))};return i&&Y&&G(W,e,{configurable:!0,set:t}),Q(e)},c(F[J],"toString",function(){return this._k}),I.f=ee,T.f=U,n("9093").f=S.f=te,n("52a7").f=Z,k.f=ne,i&&!n("2d00")&&c(W,"propertyIsEnumerable",Z,!0),h.f=function(e){return Q(f(e))}),o(o.G+o.W+o.F*!M,{Symbol:F});for(var ae="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;ae.length>re;)f(ae[re++]);for(var ie=$(f.store),oe=0;ie.length>oe;)m(ie[oe++]);o(o.S+o.F*!M,"Symbol",{for:function(e){return r(A,e+="")?A[e]:A[e]=F(e)},keyFor:function(e){if(!H(e))throw TypeError(e+" is not a symbol!");for(var t in A)if(A[t]===e)return t},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),o(o.S+o.F*!M,"Object",{create:X,defineProperty:U,defineProperties:V,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne});var ce=u(function(){k.f(1)});o(o.S+o.F*ce,"Object",{getOwnPropertySymbols:function(e){return k.f(O(e))}}),L&&o(o.S+o.F*(!M||u(function(){var e=F();return"[null]"!=_([e])||"{}"!=_({a:e})||"{}"!=_(Object(e))})),"JSON",{stringify:function(e){var t,n,a=[e],r=1;while(arguments.length>r)a.push(arguments[r++]);if(n=t=a[1],(g(t)||void 0!==e)&&!H(e))return v(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!H(t))return t}),a[1]=t,_.apply(L,a)}}),F[J][D]||n("32e9")(F[J],D,F[J].valueOf),p(F,"Symbol"),p(Math,"Math",!0),p(a.JSON,"JSON",!0)},"991c":function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"g",function(){return c}),n.d(t,"e",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"h",function(){return p});var a=n("b775");function r(e){return Object(a["a"])({url:"/accessPoint/list",method:"post",headers:{"Content-Type":"application/json"},data:e})}function i(e){return Object(a["a"])({url:"/accessPoint/"+e,method:"get"})}function o(e){return Object(a["a"])({url:"/accessPoint/create",method:"post",headers:{"Content-Type":"application/json"},data:e})}function c(e){return Object(a["a"])({url:"/accessPoint/update",method:"post",headers:{"Content-Type":"application/json"},data:e})}function s(e){return Object(a["a"])({url:"/accessPoint/grant",method:"post",headers:{"Content-Type":"application/json"},data:e})}function u(e){return Object(a["a"])({url:"/accessPointType/list",method:"post",headers:{"Content-Type":"application/json"},data:e})}function l(e){return Object(a["a"])({url:"/accessPointType/create",method:"post",headers:{"Content-Type":"application/json"},data:e})}function p(e){return Object(a["a"])({url:"/accessPointType/update",method:"post",headers:{"Content-Type":"application/json"},data:e})}},a6b9:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"g",function(){return o}),n.d(t,"f",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"h",function(){return l}),n.d(t,"c",function(){return p});var a=n("b775");function r(e){return Object(a["a"])({url:"/supplier/list",method:"post",headers:{"Content-Type":"application/json"},data:e})}function i(e){return Object(a["a"])({url:"/supplier/create",method:"post",headers:{"Content-Type":"application/json"},data:e})}function o(e){return Object(a["a"])({url:"/supplier/update",method:"post",headers:{"Content-Type":"application/json"},data:e})}function c(e){return Object(a["a"])({url:"/supplier/task",method:"post",headers:{"Content-Type":"application/json"},data:e})}function s(e){return Object(a["a"])({url:"/supplier/channel",method:"post",headers:{"Content-Type":"application/json"},data:e})}function u(e){return Object(a["a"])({url:"/supplier/channel/"+e,method:"get"})}function l(e){return Object(a["a"])({url:"/supplier/channel/update",method:"post",headers:{"Content-Type":"application/json"},data:e})}function p(e){return Object(a["a"])({url:"/supplier/channel/create",method:"post",headers:{"Content-Type":"application/json"},data:e})}},a848:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"dataForm",staticStyle:{"margin-top":"15px"},attrs:{model:e.channel,rules:e.rules,"label-width":"100px"}},[n("el-row",[n("el-col",{attrs:{span:16}},[n("el-form-item",{attrs:{label:"接入点",prop:"accessPointId"}},[n("el-cascader",{staticStyle:{width:"100%"},attrs:{props:e.typeOptions,placeholder:"接入点"},on:{change:e.handleBlur},model:{value:e.channel.accessPointId,callback:function(t){e.$set(e.channel,"accessPointId",t)},expression:"channel.accessPointId"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"通道名称",prop:"name"}},[n("el-input",{attrs:{maxlength:"20","show-word-limit":""},model:{value:e.channel.name,callback:function(t){e.$set(e.channel,"name",t)},expression:"channel.name"}})],1)],1),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"单价(元)",prop:"price"}},[n("el-input",{model:{value:e.channel.price,callback:function(t){e.$set(e.channel,"price",t)},expression:"channel.price"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"编码",prop:"code"}},[n("el-input",{model:{value:e.channel.code,callback:function(t){e.$set(e.channel,"code",t)},expression:"channel.code"}})],1)],1),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"方法",prop:"code"}},[n("el-input",{model:{value:e.channel.method,callback:function(t){e.$set(e.channel,"method",t)},expression:"channel.method"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:16}},[n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"请输入"},model:{value:e.channel.description,callback:function(t){e.$set(e.channel,"description",t)},expression:"channel.description"}})],1)],1)],1),e._l(e.channel.params,function(t,a){return n("el-form-item",{key:t.id,attrs:{label:"参数"+(a+1)}},[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{prop:"params."+a+".name",label:"参数名",rules:{required:!0,message:"名称不能为空",trigger:"blur"}}},[n("el-input",{model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"param.name"}})],1)],1),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{prop:"params."+a+".accessPointName",label:"接入名称",rules:{required:!0,message:"名称不能为空",trigger:"blur"}}},[n("el-input",{model:{value:t.accessPointName,callback:function(n){e.$set(t,"accessPointName",n)},expression:"param.accessPointName"}})],1)],1),n("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:2}},[n("el-button",{on:{click:function(n){return n.preventDefault(),e.removeParam(t)}}},[e._v("删除")])],1)],1)],1)}),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("dataForm")}}},[e._v("保存")]),n("el-button",{on:{click:e.addParam}},[e._v("新增参数")]),n("el-button",{on:{click:function(t){return e.resetForm()}}},[e._v("重置")])],1)],2)},r=[],i=(n("ac4d"),n("8a81"),n("ac6a"),n("7f7f"),n("991c")),o=n("a6b9"),c=n("61f7"),s={id:void 0,supplierId:void 0,accessPointId:void 0,name:"",code:"",method:"",description:"",price:0,status:1,params:[{id:"",name:"",accessPointName:"",status:1}]},u={props:{isEdit:{type:Boolean,default:!1}},created:function(){var e=this;this.isEdit?(this.channel.id=this.$route.params&&this.$route.params.id,this.fetchData(this.channel.id)):(this.supplierId=this.$route.params&&this.$route.params.supplierId,this.supplierId||this.$router.push({path:"/supplier"}),this.channel=Object.assign({},s)),Object(i["a"])({status:1}).then(function(t){0===t.code&&(e.codeOptions=t.data.record)}),this.formLoading=!1},data:function(){var e=function(e,t,n){t||0===t?Object(c["c"])(t)?n():n(new Error("金额错误")):n(new Error("金额不能为空"))};return{typeOptions:{emitPath:!1,lazy:!0,lazyLoad:function(e,t){var n=this,a=e.level;if(0===a)Object(i["a"])({status:1}).then(function(e){if(0===e.code){n.codeOptions=e.data.record;var a=n.codeOptions.map(function(e){return{value:-1*e.id,label:e.name,leaf:!1}});t(a)}});else{var r=-1*e.data.value;Object(i["f"])({status:1,accessPointTypeId:r}).then(function(e){if(0===e.code){n.codeOptions=e.data.record;var a=n.codeOptions.map(function(e){return{value:e.id,label:e.name,leaf:!0}});t(a)}})}}},idx:1,formLoading:!0,codeOptions:[],supplierId:void 0,channel:Object.assign({},s),rules:{name:[{required:!0,message:"请输入通道名称",trigger:"blur",max:20}],code:[{required:!0,message:"请输入Spring编码",trigger:"blur",max:20}],method:[{required:!0,message:"请输入方法名称",trigger:"blur"}],accessPointId:[{required:!0,message:"请选择接入点",trigger:"blur"}],price:[{required:!0,validator:e,trigger:"blur"}]}}},methods:{fetchData:function(e){var t=this;this.formLoading=!0,Object(o["d"])(e).then(function(e){if(0===e.code){var n=e.data;t.supplierId=n.supplierId,t.channel.supplierId=n.supplierId,t.channel.name=n.name,t.channel.method=n.method,t.channel.code=n.code,t.channel.description=n.description,t.channel.accessPointId=n.accessPointId,t.channel.price=n.price/100,t.channel.params=n.supplierParamList,t.idx=n.supplierParamList?n.supplierParamList.length+1:0}t.formLoading=!1})},submitForm:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var n=JSON.parse(JSON.stringify(e.channel));n.price=100*n.price,n.supplierId=e.supplierId,e.isEdit?e.update(n):e.create(n)}})},create:function(e){var t=this;this.formLoading=!0,Object(o["c"])(e).then(function(e){0===e.code&&(t.$notify({title:"成功",message:"保存成功",type:"success",duration:2e3}),t.$router.push({name:"Channel",params:{supplierId:t.supplierId}})),t.formLoading=!1})},update:function(e){var t=this;this.formLoading=!0,Object(o["h"])(e).then(function(e){0===e.code&&(t.$notify({title:"成功",message:"保存成功",type:"success",duration:2e3}),t.$router.push({name:"Channel",params:{supplierId:t.supplierId}})),t.formLoading=!1})},resetForm:function(){this.channel=Object.assign({},s),this.$refs["dataForm"].resetFields()},removeParam:function(e){var t=this.channel.params.indexOf(e);-1!==t&&this.channel.params.splice(t,1)},addParam:function(){this.channel.params.push({id:this.idx++,name:"",accessPointName:"",status:1})},handleBlur:function(e){var t=this;this.formLoading=!0,e&&Object(i["d"])(e).then(function(e){if(0===e.code){var n=e.data;if(t.channel.name=n.name,n.accessPointParamList){var a=!0,r=!1,i=void 0;try{for(var o,c=n.accessPointParamList[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var s=o.value;t.channel.params.push({id:t.idx++,name:s.name,accessPointName:s.name,status:s.status})}}catch(u){r=!0,i=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}}}}),this.formLoading=!1}}},l=u,p=n("2877"),d=Object(p["a"])(l,a,r,!1,null,null,null);t["a"]=d.exports},aa60:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("detail",{attrs:{"is-edit":!1}})},r=[],i=n("a848"),o={name:"editForm",components:{detail:i["a"]}},c=o,s=n("2877"),u=Object(s["a"])(c,a,r,!1,null,null,null);t["default"]=u.exports},ac4d:function(e,t,n){n("3a72")("asyncIterator")},d4c0:function(e,t,n){var a=n("0d58"),r=n("2621"),i=n("52a7");e.exports=function(e){var t=a(e),n=r.f;if(n){var o,c=n(e),s=i.f,u=0;while(c.length>u)s.call(e,o=c[u++])&&t.push(o)}return t}}}]);
//# sourceMappingURL=chunk-5fb8ad52.9466053f.js.map