(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dda15fc"],{"4f24":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"dataForm",staticStyle:{"margin-top":"15px"},attrs:{model:e.accessPoint,rules:e.rules,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"API名称",prop:"name"}},[a("el-input",{model:{value:e.accessPoint.name,callback:function(t){e.$set(e.accessPoint,"name",t)},expression:"accessPoint.name"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"类型",prop:"accessPointTypeId"}},[a("el-select",{attrs:{placeholder:"类型"},model:{value:e.accessPoint.accessPointTypeId,callback:function(t){e.$set(e.accessPoint,"accessPointTypeId",t)},expression:"accessPoint.accessPointTypeId"}},e._l(e.codeOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"单价(元)",prop:"price"}},[a("el-input",{model:{value:e.accessPoint.price,callback:function(t){e.$set(e.accessPoint,"price",t)},expression:"accessPoint.price"}})],1)],1)],1),e._l(e.accessPoint.params,function(t,s){return a("el-form-item",{key:t.id,attrs:{label:"参数"+(s+1)}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{prop:"params."+s+".name",label:"参数名",rules:{required:!0,message:"名称不能为空",trigger:"blur"}}},[a("el-input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"param.name"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{prop:"params."+s+".location",label:"位置",rules:{required:!0,message:"请选择位置",trigger:"change"}}},[a("el-select",{attrs:{placeholder:"位置"},model:{value:t.location,callback:function(a){e.$set(t,"location",a)},expression:"param.location"}},e._l(e.locationOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.lable,value:e.value}})}),1)],1)],1)],1),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"必填",prop:"params."+s+".required"}},[a("el-switch",{model:{value:t.required,callback:function(a){e.$set(t,"required",a)},expression:"param.required"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"标识",prop:"params."+s+".marked"}},[a("el-switch",{model:{value:t.marked,callback:function(a){e.$set(t,"marked",a)},expression:"param.marked"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"验证",prop:"params."+s+".validated"}},[a("el-switch",{model:{value:t.validated,callback:function(a){e.$set(t,"validated",a)},expression:"param.validated"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"签名",prop:"params."+s+".identified"}},[a("el-switch",{model:{value:t.identified,callback:function(a){e.$set(t,"identified",a)},expression:"param.identified"}})],1)],1),a("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:2}},[a("el-button",{on:{click:function(a){return a.preventDefault(),e.removeParam(t)}}},[e._v("删除")])],1)],1)],1)}),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("dataForm")}}},[e._v("保存")]),a("el-button",{on:{click:e.addParam}},[e._v("新增参数")]),a("el-button",{on:{click:function(t){return e.resetForm("dataForm")}}},[e._v("重置")])],1)],2)},n=[],i=(a("7f7f"),a("991c")),r=a("61f7"),c={id:void 0,name:"",accessPointTypeId:void 0,price:0,status:1,params:[{id:"",name:"",location:"",required:!1,marked:!1,identified:!1,validated:!1,status:1}]},o=[{value:"PARAMETER",lable:"PARAMETER"},{value:"JSON",lable:"JSON"}],l={props:{isEdit:{type:Boolean,default:!1}},created:function(){var e=this;this.isEdit?(this.accessPoint.id=this.$route.params&&this.$route.params.id,this.fetchData(this.accessPoint.id)):this.accessPoint=Object.assign({},c),Object(i["a"])({status:1}).then(function(t){0===t.code?e.codeOptions=t.data.record:e.$message({message:t.message,type:"warning"})})},data:function(){var e=function(e,t,a){t||0===t?Object(r["c"])(t)?a():a(new Error("金额错误")):a(new Error("金额不能为空"))};return{locationOptions:o,idx:1,codeOptions:[],accessPoint:Object.assign({},c),rules:{name:[{required:!0,message:"请输入API名称",trigger:"blur",max:20}],accessPointTypeId:[{required:!0,message:"请选择API类型",trigger:"change"}],price:[{required:!0,validator:e,trigger:"blur"}]}}},methods:{fetchData:function(e){var t=this;Object(i["d"])(e).then(function(e){if(0===e.code){var a=e.data;t.accessPoint.name=a.name,t.accessPoint.accessPointTypeId=a.accessPointTypeId,t.accessPoint.price=a.price/100,t.accessPoint.params=a.accessPointParamList,t.idx=a.accessPointParamList?a.accessPointParamList.length+1:0}})},submitForm:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var a=JSON.parse(JSON.stringify(e.accessPoint));a.price=100*a.price,e.isEdit?e.updateAccessPoint(a):e.createAccessPoint(a)}})},createAccessPoint:function(e){var t=this;Object(i["b"])(e).then(function(e){0===e.code&&(t.$notify({title:"成功",message:"保存成功",type:"success",duration:2e3}),t.$router.push({path:"/api/list"}))})},updateAccessPoint:function(e){var t=this;Object(i["g"])(e).then(function(e){0===e.code&&(t.$notify({title:"成功",message:"保存成功",type:"success",duration:2e3}),t.$router.push({path:"/api/list"}))})},resetForm:function(e){this.accessPoint.params=[],this.$refs[e].resetFields()},removeParam:function(e){var t=this.accessPoint.params.indexOf(e);-1!==t&&this.accessPoint.params.splice(t,1)},addParam:function(){this.accessPoint.params.push({id:this.idx++,name:"",location:"PARAMETER",required:!1,marked:!1,identified:!1,validated:!1,status:1})}}},u=l,p=a("2877"),d=Object(p["a"])(u,s,n,!1,null,null,null);t["a"]=d.exports},"98cd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("detail",{attrs:{"is-edit":!1}})},n=[],i=a("4f24"),r={name:"CreateForm",components:{detail:i["a"]}},c=r,o=a("2877"),l=Object(o["a"])(c,s,n,!1,null,null,null);t["default"]=l.exports},"991c":function(e,t,a){"use strict";a.d(t,"f",function(){return n}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return r}),a.d(t,"g",function(){return c}),a.d(t,"e",function(){return o}),a.d(t,"a",function(){return l}),a.d(t,"c",function(){return u}),a.d(t,"h",function(){return p});var s=a("b775");function n(e){return Object(s["a"])({url:"/accessPoint/list",method:"post",headers:{"Content-Type":"application/json"},data:e})}function i(e){return Object(s["a"])({url:"/accessPoint/"+e,method:"get"})}function r(e){return Object(s["a"])({url:"/accessPoint/create",method:"post",headers:{"Content-Type":"application/json"},data:e})}function c(e){return Object(s["a"])({url:"/accessPoint/update",method:"post",headers:{"Content-Type":"application/json"},data:e})}function o(e){return Object(s["a"])({url:"/accessPoint/grant",method:"post",headers:{"Content-Type":"application/json"},data:e})}function l(e){return Object(s["a"])({url:"/accessPointType/list",method:"post",headers:{"Content-Type":"application/json"},data:e})}function u(e){return Object(s["a"])({url:"/accessPointType/create",method:"post",headers:{"Content-Type":"application/json"},data:e})}function p(e){return Object(s["a"])({url:"/accessPointType/update",method:"post",headers:{"Content-Type":"application/json"},data:e})}}}]);
//# sourceMappingURL=chunk-0dda15fc.c784c7c2.js.map