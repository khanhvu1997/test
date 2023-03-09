(self["webpackChunkntv"]=self["webpackChunkntv"]||[]).push([[297],{3517:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var a=s(120),r=s.n(a),n=s(9348),o=s.n(n),i=s(8765),l=s.n(i);r().extend(o()),r().extend(l()),r().getDateUnix=(e=r()().unix(),t="Asia/Tokyo")=>r().unix(e).tz(t),r().getDate=(e=r()(),t="Asia/Tokyo")=>r()(e).tz(t);const c=r()},4567:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(1959),r=(s(6801),s(5331)),n=s.n(r),o=s(120),i=s.n(o);const l=new(n())({allErrors:!0,removeAdditional:!0,useDefaults:!0,coerceTypes:!0,$data:!0});s(3611)(l),s(4007)(l),s(5917)(l),l.addKeyword({keyword:"is-checkout",validate:(e,t)=>{const s=i()(t),a=i()();return!!s&&(s.format(e)===t&&s.format("YYYYMMDD")>=a.format("YYYYMMDD"))},errors:!0}),l.addFormat("datetime-to",{validate:()=>!0,compare:(e,t)=>e&&t&&i()(e)&&i()(t)?i()(e)>i()(t)?1:i()(t)>i()(e)?-1:0:0}),l.addKeyword({keyword:"isNotEmpty",type:"string",validate:function(e,t){return"string"===typeof t&&""!==t.trim()||(this.errors=[{keyword:"isNotEmpty",params:{keyword:"isNotEmpty"}}],!1)},errors:!0});const c=l;function u(){const e=(0,a.iH)({}),t=(t,s)=>{const a=c.compile(t),r=a(s);if(a.errors){const t={};a.errors.forEach((e=>{const s=e.instancePath.slice(1,e.instancePath.length);t[s]||(t[s]=e.message)})),e.value=t}return r};return{errors:e,validateData:t}}},568:e=>{const t=2;e.exports={DATE_WARNING:t}},8193:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const a={type:"object",required:[],properties:{category:{type:"string",enum:["video","audio","document"],errorMessage:{_:"xxxx"}},tag1:{type:"string"},tag2:{type:"string"},title:{type:"string"},viewestatus:{type:"string",enum:["notseen","watched"],errorMessage:{_:"xxxx"}},reportstatus:{type:"string",enum:["unsent","send"],errorMessage:{_:"xxxx"}},sort:{type:"string",enum:["newest","oldest","reported"],errorMessage:{_:"xxxx"}}},additionalProperties:!1},r={type:"object",required:[],properties:{category:{type:"string",enum:["video","audio","document"],errorMessage:{_:"xxxx"}},tag:{type:"object"},title:{type:"string"}},additionalProperties:!1},n={searchContentSchema:a,createViewSchema:r}},4446:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(5429),r=s.n(a);class n{getRepository(e){const t=s(7044)(`./${e}.repository`);return t.default}}const o=new n;class i{constructor(e){r()(this,"serviceName",void 0),r()(this,"dao",void 0),this.serviceName=e,this.dao=o.getRepository(e)}}var l=s(539);class c extends i{async login(e){const{signIn:t}=(0,l.t)(),s=await this.dao.login(e),{code:a,payload:r}=s;0===a&&t(r)}async checklogin(){const{signIn:e,signOut:t}=(0,l.t)();try{const t=await this.dao.checklogin(),{code:s,payload:a}=t;0===s&&e(a)}catch(s){t()}}async getDashboards(){const e=await this.dao.getDashboards(),{code:t,payload:s}=e;return 0===t?s:null}async getListContent(e){const t=await this.dao.getListContent(e),{code:s,payload:a}=t;return 0===s?a:null}async getContentById(e){const t=await this.dao.getContentById(e),{code:s,payload:a}=t;return 0===s?a:null}async getListTag(){const e=await this.dao.getListTag(),{code:t,payload:s}=e;return 0===t?s:null}async getSuggestList(){const e=await this.dao.getSuggestList(),{code:t,payload:s}=e;return 0===t?s:{}}async updateUser(e){const t=await this.dao.updateUser(e),{message:s}=t;return s}async deleteReport(e){const t=await this.dao.deleteReport(e),{message:s}=t;return s}async updateViewMember(e,t){const s=await this.dao.updateViewMember(e,t),{code:a}=s;return 0===a}async getNotices(){const e=await this.dao.getNotices(),{code:t,payload:s}=e;return 0===t?s:null}}const u=new c("member")},1701:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var a=s(5429),r=s.n(a),n=s(7941),o=s.n(n),i=(s(9544),s(71),s(52)),l=s.n(i),c=s(397),u=s(9533),d=s(539);function p(e,t){const s=Object.assign(t||{},{params:e});return s}var g=new WeakMap,m=new WeakMap;class v{constructor(e){o()(this,g,{writable:!0,value:void 0}),o()(this,m,{writable:!0,value:void 0}),r()(this,"onRequest",(async e=>{await this.extendTokenValidityPeriod();const{token:t}=(0,d.t)();return e.headers&&(e.headers.Authorization=`Bearer ${t}`),e})),this.client=this.createAxiosClient(),this.servicePath=e}createAxiosClient(){const e=l().create({baseURL:void 0,headers:{"Content-type":"application/json","x-api-key":void 0}});return e.interceptors.request.use(this.onRequest,this.onRequestError),e}onRequestError(e){return Promise.reject(e)}async extendTokenValidityPeriod(){}request(e,t,s,a){const{setLoading:r}=(0,u.q)();return new Promise(((n,o)=>{r(!0);const i=Object.assign(a,{url:`${this.servicePath}${t}`,method:e,data:s});this.client.request(i).then((e=>{const t=e.data;0!==t.code&&(c.Z.error(t.message),o(t)),n(t)})).catch((e=>{if(l().isAxiosError(e))if(e.response)if(e.response.data){const t=e.response.data;o(t)}else o(e);else e.request,o(e);else o(e);c.Z.exception(e)})).finally((()=>{r(!1)}))}))}get(e,t,s){const a=p(t,s);return this.request("GET",e,null,a)}post(e,t,s){const a=p(t,s);return this.request("POST",e,t,a)}put(e,t,s){const a=p(t,s);return this.request("PUT",e,t,a)}delete(e,t,s){const a=p(t,s);return this.request("DELETE",e,null,a)}}class w{constructor(e){r()(this,"client",void 0),this.client=new v(e)}}},2703:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(1701);class r extends a["default"]{constructor(){super("/member")}find(e){return this.client.get("",e)}login(e){return this.client.post("/login",e)}checklogin(){return this.client.get("/checklogin")}getDashboards(){return this.client.get("/dashboards")}getListContent(e){return this.client.get("/contents",e)}getContentById(e){return this.client.get(`/contents/${e}`)}getListTag(){return this.client.get("/tags")}deleteReport(e){return this.client.delete(`/reports/${e}`)}getSuggestList(){return this.client.get("/suggest-title")}updateUser(e){return this.client.put("/users",e)}updateViewMember(e,t){return this.client.post(`/contents/${e}/viewed`,t)}getNotices(){return this.client.get("/notices")}}const n=new r},397:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});s(6701);var a=s(6417);class r{success(e){a.Z.create({type:"positive",message:e})}warning(e){a.Z.create({type:"warning",message:e})}error(e){a.Z.create({type:"negative",message:e})}exception(e){e instanceof Error?this.error(e.message):this.error("An unexpected error occurred")}}const n=new r},297:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>de});var a=s(3673),r=s(1959),n=s(8880),o=s(2323),i=s(9582),l=s(1405),c=s(9533),u=s(4446),d=s(3517);function p(e){return e||""}var g=s(568),m=s(8193),v=s(4567),w=s(397);const y=(0,a._)("div",{class:"text-h6"},"通知",-1),h={class:"col-12 text-center self-center"},f={props:{message:{type:String,required:!0}},emits:["closeModal"],setup(e,{emit:t}){const s=e,n=(0,a.Fl)((()=>s.message)),i=(0,a.Fl)((()=>!!s.message)),l=()=>{t("closeModal",n.value)};return(e,t)=>{const s=(0,a.up)("q-card-section"),c=(0,a.up)("q-separator"),u=(0,a.up)("q-card"),d=(0,a.up)("q-btn"),p=(0,a.up)("q-card-actions"),g=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(g,{modelValue:(0,r.SU)(i),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.dq)(i)?i.value=e:null),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{style:{width:"400px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(c),(0,a.Wm)(u,{class:"row justify-center q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",h,(0,o.zw)((0,r.SU)(n)),1)])),_:1}),(0,a.Wm)(p,{align:"right",class:"bg-white text-teal"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{flat:"",label:"OK",onClick:l})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}};var _=s(5926),x=s(151),b=s(5589),k=s(5869),q=s(9367),Z=s(8240),C=s(7518),S=s.n(C);const D=f,U=D;S()(f,"components",{QDialog:_.Z,QCard:x.Z,QCardSection:b.Z,QSeparator:k.Z,QCardActions:q.Z,QBtn:Z.Z});const W={class:"text-h6"},M={class:"col-12 text-center self-center"},E={props:{message:{type:String,required:!0},labelConfirm:{type:String,default:"OK"},title:{type:String,default:"通知"}},emits:["closeModal","confirmModal"],setup(e,{emit:t}){const s=e,n=(0,a.Fl)((()=>s.message)),i=(0,a.Fl)((()=>!!s.message)),l=(0,a.Fl)((()=>s.labelConfirm)),c=(0,a.Fl)((()=>s.title)),u=()=>{t("closeModal",n.value)},d=()=>{t("confirmModal",n.value)};return(e,t)=>{const s=(0,a.up)("q-card-section"),p=(0,a.up)("q-separator"),g=(0,a.up)("q-card"),m=(0,a.up)("q-btn"),v=(0,a.up)("q-card-actions"),w=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(w,{modelValue:(0,r.SU)(i),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.dq)(i)?i.value=e:null),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{style:{width:"400px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a._)("div",W,(0,o.zw)((0,r.SU)(c)),1)])),_:1}),(0,a.Wm)(p),(0,a.Wm)(g,{class:"row justify-center q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",M,(0,o.zw)((0,r.SU)(n)),1)])),_:1}),(0,a.Wm)(v,{align:"right",class:"bg-white text-teal"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{flat:"",label:(0,r.SU)(l),onClick:d},null,8,["label"]),(0,a.Wm)(m,{flat:"",label:"キャンセル",onClick:u})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}},j=E,Q=j;S()(E,"components",{QDialog:_.Z,QCard:x.Z,QCardSection:b.Z,QSeparator:k.Z,QCardActions:q.Z,QBtn:Z.Z});const z=e=>((0,a.dD)("data-v-46759697"),e=e(),(0,a.Cn)(),e),A={class:"col-xs-12 col-md-4 col-xl-3 q-ma-sm"},N={class:"row justify-center items-center"},T={id:"player",controls:""},L={class:"row tw-border-b tw-border-gray-500 tw-mt-2"},P={class:"col-12"},R={class:"tw-text-xl"},V={key:0},F=(0,a.Uk)(" タグ： "),I={key:0},O={class:"tw-mb-5"},B={class:"row tw-mt-2"},Y={class:"col-12"},$={class:"tw-mb-2"},H={class:"row tw-border-t tw-border-gray-500"},K=z((()=>(0,a._)("div",{class:"col-3 tw-mt-3"},"レポート",-1))),G={class:"col-9 tw-mt-3"},J={class:"tw-float-right justify-center items-center"},X={key:0,class:"mobile-only"},ee={key:1,class:"desktop-only q-gutter-sm"},te=z((()=>(0,a._)("label",null,"レポート編集",-1))),se=z((()=>(0,a._)("label",null,"レポート削除",-1))),ae={class:"tw-mt-1"},re={class:"desktop-only row justify-center tw-mt-5"},ne={setup(e){const{isLoading:t}=(0,c.q)(),{validateData:s,errors:y}=(0,v.Z)(),h=(0,i.tv)(),f=(0,r.iH)({}),_=(0,r.iH)(""),x=(0,r.iH)(""),b=((0,r.iH)(!1),(0,r.iH)(!1)),k=p,q=()=>"send"===f.value.reportstatus?"text-blue":d.Z.getDate()>d.Z.getDate(f.value.datereport)?"text-red":d.Z.getDate()>d.Z.getDate(f.value.datereport).subtract(g.DATE_WARNING,"days")?"text-orange":"",Z=async()=>{"unsent"===f.value.reportstatus&&d.Z.getDate()>d.Z.getDate(f.value.datereport)?_.value="期限切れのレポートは提出できません":h.push(`/report/${f.value.id}`)},C=async()=>{const e={title:f.value.title,category:f.value.category,tag:f.value.tag},t=s(m.Z.createViewSchema,e);if(!t)return;const a=await u.Z.updateViewMember(f.value.id,e);if(a){b.value=!0;const e=document.getElementById("player");if(l.isSupported()&&f.value.content&&e&&!e.getAttributeNames().includes("src")){const t=new l;t.loadSource(f.value.content),t.attachMedia(e)}e.play()}},S=()=>{"send"!==f.value.reportstatus&&f.value.reportid?x.value="レポートを削除しますが、よろしいでしょうか。?":_.value="提出済みのレポートは削除できません"},D=()=>{_.value="",x.value=""},W=async()=>{D();const e=await u.Z.deleteReport(f.value.reportid);e&&w.Z.success(e)};return(0,a.bv)((async()=>{const{id:e}=h.currentRoute.value.params;f.value=await u.Z.getContentById(e)})),(e,s)=>{const i=(0,a.up)("q-skeleton"),l=(0,a.up)("q-img"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-page");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,r.SU)(t)?((0,a.wg)(),(0,a.j4)(i,{key:0,class:"window-height",square:""})):(0,a.kq)("",!0),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(u,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",A,[(0,a._)("div",N,[(0,a.wy)((0,a._)("video",T,null,512),[[n.F8,b.value]]),(0,a.wy)((0,a.Wm)(l,{src:f.value.thumbnail?f.value.thumbnail:"images/thumbnail_movie"},null,8,["src"]),[[n.F8,!b.value]]),(0,a.wy)((0,a.Wm)(l,{src:"images/icon_play.png",style:{width:"100px",position:"absolute",cursor:"pointer"},onClick:C},null,512),[[n.F8,!b.value]])]),(0,a._)("div",L,[(0,a._)("div",P,[(0,a._)("div",R,(0,o.zw)((0,r.SU)(k)(f.value.title)),1),f.value.tag&&f.value.tag.length>0?((0,a.wg)(),(0,a.iD)("div",V,[F,f.value.tag&&f.value.tag.tag1?((0,a.wg)(),(0,a.iD)("span",I,(0,o.zw)((0,r.SU)(k)(f.value.tag.tag1))+",",1)):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,o.zw)((0,r.SU)(k)(f.value.tag.tag2)),1)])):(0,a.kq)("",!0),(0,a._)("div",null,"再生時間："+(0,o.zw)((0,r.SU)(k)(f.value.duration)),1),(0,a._)("div",O,(0,o.zw)((0,r.SU)(k)(f.value.des)),1)])]),(0,a._)("div",B,[(0,a._)("div",Y,[(0,a._)("div",null,"初回閲覧："+(0,o.zw)((0,r.SU)(k)(f.value.firstview)),1),(0,a._)("div",$," 最終閲覧："+(0,o.zw)((0,r.SU)(k)(f.value.lastview)),1)])]),(0,a._)("div",H,[K,(0,a._)("div",G,[(0,a._)("div",J,[f.value.datereport?((0,a.wg)(),(0,a.iD)("div",X,[(0,a.Wm)(l,{class:"tw-mr-3",style:{width:"20px"},src:"send"===f.value.reportstatus?"images/pencil_blue.png":"images/pencil_gray.png",onClick:Z},null,8,["src"]),(0,a.Wm)(l,{style:{width:"20px"},src:"images/icon_delete.png",onClick:S})])):(0,a.kq)("",!0),f.value.datereport?((0,a.wg)(),(0,a.iD)("div",ee,[(0,a.Wm)(c,{color:"dark",outline:"",onClick:Z},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{style:{width:"20px"},src:"send"===f.value.reportstatus?"images/pencil_blue.png":"images/pencil_gray.png"},null,8,["src"]),te])),_:1}),(0,a.Wm)(c,{color:"dark",outline:"",onClick:S},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{style:{width:"20px"},src:"images/icon_delete.png"}),se])),_:1})])):(0,a.kq)("",!0)])])]),(0,a._)("div",ae,[f.value.datereport?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,o.C_)(q())}," 提出期限："+(0,o.zw)((0,r.SU)(k)(f.value.datereport)),3)):(0,a.kq)("",!0),(0,a._)("div",{class:(0,o.C_)("send"===f.value.reportstatus?"text-blue":"")}," 提出日："+(0,o.zw)((0,r.SU)(k)(f.value.datesendreport)),3)])]),(0,a._)("div",re,[(0,a.Wm)(c,{color:"primary",outline:"",label:"戻る",onclick:"history.back()"})])])),_:1}),(0,a.Wm)(U,{message:_.value,onCloseModal:D},null,8,["message"]),(0,a.Wm)(Q,{message:x.value,title:"レポート削除",onConfirmModal:W,onCloseModal:D},null,8,["message"])],512),[[n.F8,!(0,r.SU)(t)]])],64)}}};var oe=s(4260),ie=s(4103),le=s(4379),ce=s(4027);const ue=(0,oe.Z)(ne,[["__scopeId","data-v-46759697"]]),de=ue;S()(ne,"components",{QSkeleton:ie.ZP,QPage:le.Z,QImg:ce.Z,QBtn:Z.Z})},7044:(e,t,s)=>{var a={"./base.repository":1701,"./member.repository":2703};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id=7044}}]);