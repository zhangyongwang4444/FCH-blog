webpackJsonp([3],{"4FFw":function(e,t){},OpX7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),o=n("NYxO"),a={data:function(){return{username:"",password:""}},methods:s()({},Object(o.b)(["login"]),{onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(){e.$router.push({path:e.$route.query.redirect||"/"})}),console.log(this.username+""+this.password)}})},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h4",[e._v("用户名")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("h4",[e._v("密码")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onLogin(t):null},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录")]),e._v(" "),n("p",{staticClass:"notice"},[e._v("没有账号？"),n("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(a,i,!1,function(e){n("4FFw")},null,null);t.default=u.exports}});
//# sourceMappingURL=3.ec8958528df63fc08a90.js.map