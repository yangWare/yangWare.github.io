(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66b6d2ec"],{"533c":function(a,e,s){"use strict";var t=s("8e25"),o=s.n(t);o.a},"73cf":function(a,e,s){"use strict";s.r(e);var t=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"container"},[s("el-form",{ref:"dataForm",staticClass:"registerform",attrs:{model:a.dataForm,rules:a.rules,"auto-complete":"on","label-position":"left","status-icon":""}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[a._v("注册")])]),s("el-form-item",{attrs:{prop:"name",label:"用户名"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"name",attrs:{placeholder:"用户名",name:"name",type:"text",tabindex:"1","auto-complete":"off"},model:{value:a.dataForm.name,callback:function(e){a.$set(a.dataForm,"name",e)},expression:"dataForm.name"}})],1),s("el-form-item",{attrs:{prop:"mobile",label:"手机号"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"mobile"}})],1),s("el-input",{ref:"mobile",attrs:{placeholder:"手机号",name:"mobile",type:"text",tabindex:"2","auto-complete":"off"},model:{value:a.dataForm.mobile,callback:function(e){a.$set(a.dataForm,"mobile",e)},expression:"dataForm.mobile"}})],1),s("el-form-item",{attrs:{prop:"password",label:"密码"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:a.passwordType,ref:"password",attrs:{type:a.passwordType,placeholder:"密码",name:"password",tabindex:"3","auto-complete":"off"},model:{value:a.dataForm.password,callback:function(e){a.$set(a.dataForm,"password",e)},expression:"dataForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:a.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===a.passwordType?"eye":"eye-open"}})],1)],1),s("el-form-item",{attrs:{prop:"checkPass",label:"确认密码"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:a.passwordType,ref:"checkPass",attrs:{type:a.passwordType,placeholder:"确认密码",name:"checkPass",tabindex:"4","auto-complete":"off"},model:{value:a.dataForm.checkPass,callback:function(e){a.$set(a.dataForm,"checkPass",e)},expression:"dataForm.checkPass"}}),s("span",{staticClass:"show-pwd",on:{click:a.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===a.passwordType?"eye":"eye-open"}})],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:a.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),a.submitForm(e)}}},[a._v("注册\n    ")])],1)],1)},o=[],r=s("c24f"),n=s("61f7"),i={data:function(){var a=this,e=function(a,e,s){return""===e?s(new Error("用户名不能为空")):e.length<6||e.length>12||!Object(n["e"])(e)?s(new Error("用户名由6-12位的英文开头的英文和数字的组合")):void s()},s=function(a,e,s){return""===e?s(new Error("手机不能为空")):Object(n["b"])(e)?void s():s(new Error("请输入有效的手机号"))},t=function(e,s,t){""===s?t(new Error("请输入密码")):(Object(n["d"])(s)||t(new Error("密码长度6-18位，数字、字母、字符至少包含其中两种")),""!==a.dataForm.checkPass&&a.$refs.dataForm.validateField("checkPass"),t())},o=function(e,s,t){""===s?t(new Error("请再次输入密码")):s!==a.dataForm.password?t(new Error("两次输入密码不一致!")):t()};return{dataForm:{name:"",password:"",checkPass:"",mobile:""},rules:{name:[{validator:e,trigger:"blur"}],password:[{validator:t,trigger:"blur"}],checkPass:[{validator:o,trigger:"blur"}],mobile:[{validator:s,trigger:"blur"}]},loading:!1,passwordType:"password"}},methods:{showPwd:function(){var a=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){a.$refs.password.focus()})},submitForm:function(){var a=this;this.$refs.dataForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;a.loading=!0,Object(r["e"])(a.dataForm).then(function(e){0===e.code?(a.$router.push({path:a.redirect||"/"}),a.loading=!1):(a.$message({message:e.message,type:"warning"}),a.loading=!1)})})},resetForm:function(a){this.$refs[a].resetFields()}}},c=i,l=(s("533c"),s("2877")),d=Object(l["a"])(c,t,o,!1,null,"4a643bca",null);e["default"]=d.exports},"8e25":function(a,e,s){}}]);
//# sourceMappingURL=chunk-66b6d2ec.87c4a431.js.map