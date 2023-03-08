(globalThis["webpackChunkntv"]=globalThis["webpackChunkntv"]||[]).push([[165],{4567:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(1959),a=s(5331),n=s.n(a),o=s(120),i=s.n(o);const c=new(n())({allErrors:!0,removeAdditional:!0,useDefaults:!0,coerceTypes:!0,$data:!0});s(3611)(c),s(4007)(c),s(5917)(c),c.addKeyword({keyword:"is-checkout",validate:(e,t)=>{const s=i()(t),r=i()();return!!s&&(s.format(e)===t&&s.format("YYYYMMDD")>=r.format("YYYYMMDD"))},errors:!0}),c.addFormat("datetime-to",{validate:()=>!0,compare:(e,t)=>e&&t&&i()(e)&&i()(t)?i()(e)>i()(t)?1:i()(t)>i()(e)?-1:0:0}),c.addKeyword({keyword:"isNotEmpty",type:"string",validate:function(e,t){return"string"===typeof t&&""!==t.trim()||(this.errors=[{keyword:"isNotEmpty",params:{keyword:"isNotEmpty"}}],!1)},errors:!0});const l=c;function u(){const e=(0,r.iH)({}),t=(t,s)=>{const r=l.compile(t),a=r(s);if(r.errors){const t={};r.errors.forEach((e=>{const s=e.instancePath.slice(1,e.instancePath.length);t[s]||(t[s]=e.message)})),e.value=t}return a};return{errors:e,validateData:t}}},5786:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const r={companycode:{type:"string",minLength:1,pattern:"^[a-zA-z0-9_\\-\\+\\.]+$",maxLength:10},username:{type:"string",minLength:1,maxLength:100},password:{type:"string",minLength:8,maxLength:16,pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"},mail:{type:"string",pattern:"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",maxLength:100},name:{type:"string",maxLength:40},type:{type:"integer",enum:[1,2,9]}},a=r},4446:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(2250),a=s.n(r);class n{getRepository(e){const t=s(7044)(`./${e}.repository`);return t.default}}const o=new n;class i{constructor(e){a()(this,"serviceName",void 0),a()(this,"dao",void 0),this.serviceName=e,this.dao=o.getRepository(e)}}var c=s(539);class l extends i{async login(e){const{signIn:t}=(0,c.t)(),s=await this.dao.login(e),{code:r,payload:a}=s;0===r&&t(a)}async checklogin(){const{signIn:e,signOut:t}=(0,c.t)();try{const t=await this.dao.checklogin(),{code:s,payload:r}=t;0===s&&e(r)}catch(s){t()}}async getDashboards(){const e=await this.dao.getDashboards(),{code:t,payload:s}=e;return 0===t?s:null}async getListContent(e){const t=await this.dao.getListContent(e),{code:s,payload:r}=t;return 0===s?r:null}async getContentById(e){const t=await this.dao.getContentById(e),{code:s,payload:r}=t;return 0===s?r:null}async getListTag(){const e=await this.dao.getListTag(),{code:t,payload:s}=e;return 0===t?s:null}async getSuggestList(){const e=await this.dao.getSuggestList(),{code:t,payload:s}=e;return 0===t?s:{}}async updateUser(e){const t=await this.dao.updateUser(e),{message:s}=t;return s}async deleteReport(e){const t=await this.dao.deleteReport(e),{message:s}=t;return s}async updateViewMember(e,t){const s=await this.dao.updateViewMember(e,t),{code:r}=s;return 0===r}async getNotices(){const e=await this.dao.getNotices(),{code:t,payload:s}=e;return 0===t?s:null}}const u=new l("member")},1701:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var r=s(2250),a=s.n(r),n=s(1661),o=s.n(n),i=s(52),c=s.n(i),l=s(397),u=s(9533),d=s(539);function p(e,t){const s=Object.assign(t||{},{params:e});return s}var g=new WeakMap,m=new WeakMap;class h{constructor(e){o()(this,g,{writable:!0,value:void 0}),o()(this,m,{writable:!0,value:void 0}),a()(this,"onRequest",(async e=>{await this.extendTokenValidityPeriod();const{token:t}=(0,d.t)();return e.headers&&(e.headers.Authorization=`Bearer ${t}`),e})),this.client=this.createAxiosClient(),this.servicePath=e}createAxiosClient(){const e=c().create({baseURL:void 0,headers:{"Content-type":"application/json","x-api-key":void 0}});return e.interceptors.request.use(this.onRequest,this.onRequestError),e}onRequestError(e){return Promise.reject(e)}async extendTokenValidityPeriod(){}request(e,t,s,r){const{setLoading:a}=(0,u.q)();return new Promise(((n,o)=>{a(!0);const i=Object.assign(r,{url:`${this.servicePath}${t}`,method:e,data:s});this.client.request(i).then((e=>{const t=e.data;0!==t.code&&(l.Z.error(t.message),o(t)),n(t)})).catch((e=>{if(c().isAxiosError(e))if(e.response)if(e.response.data){const t=e.response.data;o(t)}else o(e);else e.request,o(e);else o(e);l.Z.exception(e)})).finally((()=>{a(!1)}))}))}get(e,t,s){const r=p(t,s);return this.request("GET",e,null,r)}post(e,t,s){const r=p(t,s);return this.request("POST",e,t,r)}put(e,t,s){const r=p(t,s);return this.request("PUT",e,t,r)}delete(e,t,s){const r=p(t,s);return this.request("DELETE",e,null,r)}}class y{constructor(e){a()(this,"client",void 0),this.client=new h(e)}}},2703:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(1701);class a extends r["default"]{constructor(){super("/member")}find(e){return this.client.get("",e)}login(e){return this.client.post("/login",e)}checklogin(){return this.client.get("/checklogin")}getDashboards(){return this.client.get("/dashboards")}getListContent(e){return this.client.get("/contents",e)}getContentById(e){return this.client.get(`/contents/${e}`)}getListTag(){return this.client.get("/tags")}deleteReport(e){return this.client.delete(`/reports/${e}`)}getSuggestList(){return this.client.get("/suggest-title")}updateUser(e){return this.client.put("/users",e)}updateViewMember(e,t){return this.client.post(`/contents/${e}/viewed`,t)}getNotices(){return this.client.get("/notices")}}const n=new a},397:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});s(6701);var r=s(6417);class a{success(e){r.Z.create({type:"positive",message:e})}warning(e){r.Z.create({type:"warning",message:e})}error(e){r.Z.create({type:"negative",message:e})}exception(e){e instanceof Error?this.error(e.message):this.error("An unexpected error occurred")}}const n=new a},9165:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>U});var r=s(3673),a=s(1959),n=s(4567),o=s(5786);const i={type:"object",required:["companycode","username","password"],properties:{companycode:{...o.Z.companycode,errorMessage:{_:"企業IDを入力してください。"}},username:{...o.Z.username,errorMessage:{_:"ユーザーIDを入力してください。"}},password:{...o.Z.password,errorMessage:{_:"パスワードを入力してください。"}}},errorMessage:{required:{companycode:"企業IDを入力してください。",username:"ユーザーIDを入力してください。",password:"パスワードを入力してください。"}},additionalProperties:!1},c=i;var l=s(4446);const u={class:"col-xs-12 col-md-4 col-xl-3 q-ma-sm"},d={class:"row"},p={class:"row"},g={class:"q-pa-md col-12"},m={class:"text-center"},h={class:"text-teal tw-text-lg"},y={__name:"Login",setup(e){const t=(0,a.iH)(""),s=(0,a.iH)(""),o=(0,a.iH)(""),i=(0,a.iH)(!1),{validateData:y,errors:w}=(0,n.Z)(),v=()=>{t.value=t.value.toUpperCase()},f=async()=>{const e={companycode:t.value,username:s.value,password:o.value},r=y(c,e);r&&await l.Z.login(e)};return(e,n)=>{const c=(0,r.up)("q-img"),l=(0,r.up)("q-input"),y=(0,r.up)("q-icon"),b=(0,r.up)("q-btn"),x=(0,r.up)("router-link"),q=(0,r.up)("q-form"),Z=(0,r.up)("q-page"),k=(0,r.up)("q-page-container"),L=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.j4)(L,{view:"hHh lpR fFf"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(Z,{class:"window-height window-width row justify-center items-center"},{default:(0,r.w5)((()=>[(0,r._)("div",u,[(0,r._)("div",d,[(0,r.Wm)(c,{src:"images/logo2.png"})]),(0,r._)("div",p,[(0,r._)("div",g,[(0,r.Wm)(q,{class:"q-gutter-md"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),label:"企業ID",onBlur:v,"lazy-rules":"",maxlength:"10",error:!!(0,a.SU)(w).companycode,"error-message":(0,a.SU)(w).companycode},null,8,["modelValue","error","error-message"]),(0,r.Wm)(l,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=e=>s.value=e),label:"ユーザーID","lazy-rules":"",maxlength:"100",error:!!(0,a.SU)(w).username,"error-message":(0,a.SU)(w).username},null,8,["modelValue","error","error-message"]),(0,r.Wm)(l,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=e=>o.value=e),label:"パスワード",type:i.value?"text":"password","lazy-rules":"",maxlength:"32",error:!!(0,a.SU)(w).password,"error-message":(0,a.SU)(w).password},{append:(0,r.w5)((()=>[(0,r.Wm)(y,{name:i.value?"visibility_off":"visibility",onClick:n[2]||(n[2]=e=>i.value=!i.value)},null,8,["name"])])),_:1},8,["modelValue","type","error","error-message"]),(0,r._)("div",m,[(0,r.Wm)(b,{label:"ログイン",type:"button",color:"teal",size:"xl",onClick:f})]),(0,r._)("div",h,[(0,r.Wm)(x,{to:{path:"/forgot-password"}},{default:(0,r.w5)((()=>[(0,r.Uk)("パスワードを忘れた方")])),_:1})])])),_:1})])])])])),_:1})])),_:1})])),_:1})}}};var w=s(3066),v=s(2652),f=s(4379),b=s(4027),x=s(8689),q=s(4842),Z=s(4554),k=s(8240),L=s(7518),_=s.n(L);const D=y,U=D;_()(y,"components",{QLayout:w.Z,QPageContainer:v.Z,QPage:f.Z,QImg:b.Z,QForm:x.Z,QInput:q.Z,QIcon:Z.Z,QBtn:k.Z})},7044:(e,t,s)=>{var r={"./base.repository":1701,"./member.repository":2703};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=7044}}]);