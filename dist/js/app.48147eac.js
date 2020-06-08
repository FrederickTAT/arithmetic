(function(t){function e(e){for(var n,a,r=e[0],o=e[1],c=e[2],p=0,h=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&h.push(l[a][0]),l[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var o=s[r];0!==l[o]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},l={app:0},i=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("db62"),l=s.n(n);l.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{staticStyle:{"max-width":"700px"},attrs:{xs:24,sm:18,md:16}},[s("el-container",{staticStyle:{"min-width":"620px"},attrs:{id:"app"}},[s("el-header",[s("el-steps",{attrs:{active:t.activeStep,simple:""}},[s("el-step",{attrs:{title:"设置",icon:"el-icon-setting"}}),s("el-step",{attrs:{title:"答题",icon:"el-icon-edit"}}),s("el-step",{attrs:{title:"结果",icon:"el-icon-tickets"}})],1)],1),s("el-main",[s("el-container",[s("el-header",{staticStyle:{"font-size":"35px"}},[0==t.activeStep?s("SettingsHeader",{on:{"set-rules":t.setRule}}):t._e(),1==t.activeStep?s("table-header",{attrs:{percentage:t.percentage,count:t.count,settings:t.settings},on:{back:t.handleBack,submit:t.handleSubmit}}):t._e(),2==t.activeStep?s("ResultsHeader"):t._e()],1),s("el-divider"),s("el-main",[0==t.activeStep?s("Settings",{ref:"setting"}):t._e(),1==t.activeStep?s("Table",{ref:"quizTable",attrs:{settings:t.settings},on:{setpercent:t.setPercent}}):t._e(),2==t.activeStep?s("Results",{attrs:{results:t.results}}):t._e()],1),s("SubmitDialog",{attrs:{percentage:t.percentage,visible:t.dialogs.submit.visible},on:{invisible:function(e){t.dialogs.submit.visible=!1},confirm:t.handleSubmitConfirm}}),s("Back-dialog",{attrs:{visible:t.dialogs.back.visible},on:{invisible:function(e){t.dialogs.back.visible=!1},confirm:t.handleBackConfirm}})],1)],1)],1)],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticStyle:{"font-size":"22px"}},[s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:10}},[t._v("运算符数量")]),s("el-col",{attrs:{span:10}},[s("el-input-number",{attrs:{min:1,max:2},model:{value:t.opNum,callback:function(e){t.opNum=e},expression:"opNum"}})],1)],1),s("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:10}},[t._v("括号")]),s("el-col",{attrs:{span:10}},[s("el-radio-group",{model:{value:t.hasBracket,callback:function(e){t.hasBracket=e},expression:"hasBracket"}},[s("el-radio-button",{attrs:{label:"有"}}),s("el-radio-button",{attrs:{label:"无"}})],1)],1)],1),s("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:10}},[t._v("题目数量")]),s("el-col",{attrs:{span:10}},[s("el-input-number",{attrs:{min:1},model:{value:t.quizNum,callback:function(e){t.quizNum=e},expression:"quizNum"}})],1)],1),s("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:10}},[t._v("每页题数")]),s("el-col",{attrs:{span:10}},[s("el-input-number",{attrs:{min:5},model:{value:t.pageNum,callback:function(e){t.pageNum=e},expression:"pageNum"}})],1)],1),t._l(t.opsProb,(function(e,n){return s("el-row",{key:n,staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:10}},[t._v(t._s(e.label+"比例"))]),s("el-col",{attrs:{span:10}},[s("el-slider",{attrs:{step:25},model:{value:e.prob,callback:function(s){t.$set(e,"prob",s)},expression:"op.prob"}})],1)],1)})),s("el-footer")],2)},r=[],o={name:"Settings",data:function(){return{opNum:1,quizNum:50,pageNum:5,hasBracket:"无",opsProb:{plus:{label:"加号",prob:100},minus:{label:"减号",prob:0},times:{label:"乘号",prob:0},divide:{label:"除号",prob:0}}}},methods:{warpSettings:function(){return{operator:this.opNum,total:this.quizNum,page:this.pageNum,bracket:"有"==this.hasBracket,prob:{plus:this.opsProb.plus.prob,minus:this.opsProb.minus.prob,times:this.opsProb.times.prob,divide:this.opsProb.divide.prob}}}}},c=o,u=s("2877"),p=Object(u["a"])(c,a,r,!1,null,"e920a906",null),h=p.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-header",[s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-pagination",{attrs:{background:"",layout:"prev,pager,next","page-size":t.settings.page,total:t.settings.total,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.setShowItems}})],1)],1),s("el-main",[s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-table",{staticStyle:{width:"100%","font-size":"24px"},attrs:{data:t.showItems}},[s("el-table-column",{attrs:{label:"题号",prop:"id",width:"100"}}),s("el-table-column",{attrs:{"min-width":"200",label:"题目",prop:"quiz"}}),s("el-table-column",{attrs:{width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-input",{on:{blur:t.handleBlur},model:{value:e.row.input,callback:function(s){t.$set(e.row,"input",s)},expression:"scope.row.input"}})]}}])})],1)],1)],1)],1)},d=[],b=(s("fb6a"),s("b85c")),m={name:"Table",props:["settings"],data:function(){return{items:[],showItems:[],currentPage:1,ans:[]}},mounted:function(){this.setItems()},methods:{setItems:function(){this.items=this.generate(this.settings),this.showItems=this.items.slice((this.currentPage-1)*this.settings.page,this.currentPage*this.settings.page)},setShowItems:function(){this.showItems=this.items.slice((this.currentPage-1)*this.settings.page,this.currentPage*this.settings.page)},handleBlur:function(){var t,e=0,s=Object(b["a"])(this.items);try{for(s.s();!(t=s.n()).done;){var n=t.value;void 0!=n.input&&""!=n.input&&e++}}catch(l){s.e(l)}finally{s.f()}this.$emit("setpercent",e)},judge:function(){var t,e={right:{label:"正确",items:[]},wrong:{label:"错误",items:[]},left:{label:"空题",items:[]}},s=Object(b["a"])(this.items);try{for(s.s();!(t=s.n()).done;){var n=t.value,l=n.ans,i=n.input;void 0==i||""==i?e.left.items.push(n):l==i?e.right.items.push(n):e.wrong.items.push(n)}}catch(a){s.e(a)}finally{s.f()}return e},generate:function(t){for(var e=[],s=0;s<t.total;s++){var n=Math.ceil(50*Math.random()),l=Math.ceil(50*Math.random())+50;e.push({id:s+1,quiz:l-n+"+"+n,ans:l})}return e}}},g=m,v=Object(u["a"])(g,f,d,!1,null,"341c1eae",null),y=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-card",{attrs:{shadow:"hover"}},[s("el-row",{staticStyle:{"font-size":"20px","text-align":"center"},attrs:{type:"flex",justify:"center"}},[s("el-col",[s("p",{staticClass:"title"},[t._v("正确数")]),s("p",{staticClass:"number",staticStyle:{color:"#67C23A"}},[t._v(t._s(t.results.right.items.length))])]),s("el-col",[s("p",{staticClass:"title"},[t._v("错误数")]),s("p",{staticClass:"number",staticStyle:{color:"#F56C6C"}},[t._v(t._s(t.results.wrong.items.length))])]),s("el-col",[s("p",{staticClass:"title"},[t._v("空题数")]),s("p",{staticClass:"number",staticStyle:{color:"#909399"}},[t._v(t._s(t.results.left.items.length))])])],1)],1),t._l(t.results,(function(e,n){return s("ResultCard",{key:n,attrs:{result:e,total:t.total}})})),s("el-footer")],2)},w=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{staticStyle:{"margin-top":"20px"},attrs:{shadow:"hover"}},[s("el-container",[s("el-header",{staticStyle:{"text-align":"center"}},[s("span",{staticStyle:{"font-size":"30px","font-weight":"bold"}},[t._v(t._s(t.result.label)+"率")])]),s("el-container",[s("el-aside",{attrs:{width:"200px"}},[s("el-progress",{attrs:{type:"circle",percentage:Math.round(100*t.result.items.length/t.total),color:t.progressColor}})],1),s("el-main",{staticStyle:{"padding-top":"0px"}},t._l(t.details,(function(e,n){return s("el-row",{key:n,attrs:{type:"flex"}},[s("span",{staticStyle:{"margin-bottom":"12px","margin-right":"10px",width:"50px"}},[t._v(t._s(e.label))]),s("el-progress",{staticStyle:{width:"100%"},attrs:{percentage:t.details[n].percent,color:t.progressColor}})],1)})),1)],1),t.result.items.length>0?s("el-footer",{staticStyle:{"text-align":"center"},attrs:{height:t.collapse?"100":"400"}},[s("el-button",{ref:"button",staticStyle:{width:"50%"},on:{click:t.handleCollapse}},[t._v(t._s(t.collapse?"查看":"收起")+"题目")]),t.collapse?t._e():s("el-table",{staticStyle:{width:"100%","font-size":"24px"},attrs:{data:t.result.items,height:"350"}},[s("el-table-column",{attrs:{label:"题号",prop:"id",width:"100"}}),s("el-table-column",{attrs:{"min-width":"200",label:"题目",prop:"quiz"}}),s("el-table-column",{attrs:{width:"100",label:"答案",prop:"ans"}})],1)],1):t._e()],1)],1)},S=[],k={name:"ResultCard",props:["result","total"],data:function(){return{progressColor:"",details:{"+":{label:"加法",percent:0},"-":{label:"减法",percent:0},"×":{label:"乘法",percent:0},"÷":{label:"除法",percent:0}},collapse:!0}},mounted:function(){this.setProgressColor(),this.setDetails()},methods:{handleCollapse:function(){this.collapse=!this.collapse},setProgressColor:function(){var t="",e=this.result.label;switch(e){case"正确":t="#67C23A";break;case"错误":t="#F56C6C";break;default:t="#909399"}this.progressColor=t},setDetails:function(){if(this.result.items.length>0){var t,e={"+":0,"-":0,"×":0,"÷":0},s=0,n=Object(b["a"])(this.result.items);try{for(n.s();!(t=n.n()).done;)for(var l=t.value,i=l.quiz,a=0;a<i.length;a++){var r=i.charAt(a);"+-×÷".indexOf(r)>-1&&(s++,e[r]++)}}catch(c){n.e(c)}finally{n.f()}for(var o in this.details)this.details[o].percent=Math.round(100*e[o]/s)}}}},j=k,C=Object(u["a"])(j,x,S,!1,null,"0ec387bc",null),P=C.exports,O={name:"Results",props:["results"],components:{ResultCard:P},mounted:function(){this.getTotal()},data:function(){return{total:0}},methods:{getTotal:function(){var t=this.results;this.total=t.right.items.length+t.wrong.items.length+t.left.items.length}}},$=O,z=(s("67b8"),Object(u["a"])($,_,w,!1,null,null,null)),N=z.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:"提示",visible:t.visible,width:"400px"},on:{"update:visible":function(e){t.visible=e}}},[s("span",[t._v("题目"+t._s(100==t.percentage?"已经":"尚未")+"完成，确定要提交？")]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.handleVisible}},[t._v("取 消")]),s("el-button",{attrs:{type:100==t.percentage?"primary":"danger"},on:{click:t.handleConfirm}},[t._v("确 定")])],1)])},T=[],q={name:"SubmitDialog",props:["percentage","visible"],methods:{handleVisible:function(){this.$emit("invisible")},handleConfirm:function(){this.handleVisible(),this.$emit("confirm")}}},M=q,R=Object(u["a"])(M,B,T,!1,null,"3dfb0d4a",null),E=R.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:"提示",visible:t.visible,width:"400px"},on:{"update:visible":function(e){t.visible=e}}},[s("span",[t._v("题目将不会被保存，确定要返回？")]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.handleVisible}},[t._v("取 消")]),s("el-button",{attrs:{type:"danger"},on:{click:t.handleConfirm}},[t._v("确 定")])],1)])},I=[],D={name:"BackDialog",props:["visible"],methods:{handleVisible:function(){this.$emit("invisible")},handleConfirm:function(){this.handleVisible(),this.$emit("confirm")}}},V=D,A=Object(u["a"])(V,H,I,!1,null,"4d1e0654",null),F=A.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("el-col",{staticStyle:{"font-weight":"bold"}},[t._v("题目设置")]),s("el-col",{attrs:{span:6}},[s("el-button",{attrs:{type:"primary"},on:{click:t.handleNext}},[t._v("下一步 "),s("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)],1)},G=[],K={name:"SettingsHeader",methods:{handleNext:function(){this.$emit("set-rules")}}},L=K,Q=Object(u["a"])(L,J,G,!1,null,"802166be",null),U=Q.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:5}},[s("el-button",{on:{click:t.handleBack}},[t._v("返回")])],1),s("el-col",{attrs:{span:16}},[s("el-progress",{attrs:{"stroke-width":25,percentage:t.percentage}}),s("el-row",{staticStyle:{"font-size":"20px"}},[s("span",[t._v("已完成 "+t._s(t.count)+" 题")]),s("el-divider",{attrs:{direction:"vertical"}}),s("span",[t._v("剩余 "+t._s(t.settings.total-t.count)+" 题")]),s("el-divider",{attrs:{direction:"vertical"}}),s("span",[t._v("共 "+t._s(t.settings.total)+" 题")])],1)],1),s("el-col",{attrs:{span:4}},[s("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("提交 ")])],1)],1)},X=[],Y={name:"TableHeader",props:["percentage","count","settings"],methods:{handleBack:function(){this.$emit("back")},handleSubmit:function(){this.$emit("submit")}}},Z=Y,tt=Object(u["a"])(Z,W,X,!1,null,"9c2b14f2",null),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("el-col",{staticStyle:{"font-weight":"bold"}},[t._v(" 成绩单 ")]),s("el-col",{attrs:{offset:15}},[s("el-button",{attrs:{type:"primary"}},[t._v("再做一次")])],1)],1)},nt=[],lt={name:"ResultsHeader"},it=lt,at=Object(u["a"])(it,st,nt,!1,null,"2d854dee",null),rt=at.exports,ot={name:"app",components:{Settings:h,Table:y,Results:N,SubmitDialog:E,BackDialog:F,SettingsHeader:U,TableHeader:et,ResultsHeader:rt},data:function(){return{activeStep:0,settings:{},results:{},percentage:0,count:0,dialogs:{submit:{visible:!1},back:{visible:!1}}}},methods:{setRule:function(){this.settings=this.$refs.setting.warpSettings(),this.activeStep=1},handleSubmit:function(){this.dialogs.submit.visible=!0},setPercent:function(t){var e=this.settings.total;this.count=t,this.percentage=Math.floor(100*t/e)},handleBack:function(){this.dialogs.back.visible=!0},handleBackConfirm:function(){this.activeStep=0,this.items=[],this.count=0,this.percentage=0},handleSubmitConfirm:function(){this.results=this.$refs.quizTable.judge(),this.activeStep=2}}},ct=ot,ut=(s("034f"),Object(u["a"])(ct,l,i,!1,null,null,null)),pt=ut.exports,ht=s("5c96"),ft=s.n(ht);s("0fae");n["default"].use(ft.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(pt)}}).$mount("#app")},"67b8":function(t,e,s){"use strict";var n=s("bbc7"),l=s.n(n);l.a},bbc7:function(t,e,s){},db62:function(t,e,s){}});
//# sourceMappingURL=app.48147eac.js.map