"use strict";(self["webpackChunks023"]=self["webpackChunks023"]||[]).push([[9826],{9826:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},[t("Card",[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":100}},[t("Row",{staticClass:"operation"},[t("Form-item",{attrs:{label:"API接口前缀"}},[t("Input",{staticStyle:{width:"300px"},attrs:{type:"text",clearable:"",placeholder:"如 test"},model:{value:e.apiPreStr,callback:function(t){e.apiPreStr=t},expression:"apiPreStr"}})],1),t("Button",{attrs:{type:"warning",size:"small",ghost:"",shape:"circle",icon:"ios-construct"},on:{click:function(t){e.findBackFieldModal=!0}}},[e._v("读取")]),t("Button",{attrs:{loading:e.createCodeLoading,size:"small",ghost:"",shape:"circle",type:"success",icon:"md-send"},on:{click:e.generate}},[e._v("生成")]),t("Button",{attrs:{size:"small",type:"error",ghost:"",shape:"circle",icon:"md-trash"},on:{click:e.clear}},[e._v("清空")])],1)],1),t("Row",[t("Col",{attrs:{span:"24"}},[t("Table",{ref:"table",attrs:{border:"",stripe:"",size:"large",columns:e.columns,data:e.data},scopedSlots:e._u([{key:"field",fn:function({row:a}){return[t("Input",{on:{"on-blur":function(t){return e.changeField(a,t)}},model:{value:a.field,callback:function(t){e.$set(a,"field",t)},expression:"row.field"}})]}},{key:"name",fn:function({row:a}){return[t("Input",{on:{"on-blur":function(t){return e.changeName(a,t)}},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"row.name"}})]}},{key:"tableShow",fn:function({row:a}){return[t("i-switch",{on:{"on-change":function(t){return e.changeTableShow(a,t)}},model:{value:a.tableShow,callback:function(t){e.$set(a,"tableShow",t)},expression:"row.tableShow"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"editable",fn:function({row:a}){return[t("i-switch",{on:{"on-change":function(t){return e.changeEditable(a,t)}},model:{value:a.editable,callback:function(t){e.$set(a,"editable",t)},expression:"row.editable"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"type",fn:function({row:a}){return[t("Select",{attrs:{disabled:!a.editable,transfer:""},on:{"on-change":function(t){return e.changeType(a,t)}},model:{value:a.type,callback:function(t){e.$set(a,"type",t)},expression:"row.type"}},[t("Option",{attrs:{value:"text"}},[e._v("文本输入框")]),t("Option",{attrs:{value:"select"}},[e._v("选择下拉框")]),t("Option",{attrs:{value:"number"}},[e._v("数字输入框")]),t("Option",{attrs:{value:"date"}},[e._v("日期选择器")]),t("Option",{attrs:{value:"daterange"}},[e._v("日期范围选择器")]),t("Option",{attrs:{value:"upload"}},[e._v("图片上传输入组件")]),t("Option",{attrs:{value:"uploadThumb"}},[e._v("图片上传缩略图组件")]),t("Option",{attrs:{value:"switch"}},[e._v("开关")]),t("Option",{attrs:{value:"radio"}},[e._v("单选框")]),t("Option",{attrs:{value:"time"}},[e._v("时间选择器")]),t("Option",{attrs:{value:"area"}},[e._v("省市县级联")])],1)]}},{key:"validate",fn:function({row:a}){return[t("i-switch",{attrs:{disabled:!a.editable},on:{"on-change":function(t){return e.changeValidate(a,t)}},model:{value:a.validate,callback:function(t){e.$set(a,"validate",t)},expression:"row.validate"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"searchable",fn:function({row:a}){return[t("i-switch",{on:{"on-change":function(t){return e.changeSearchable(a,t)}},model:{value:a.searchable,callback:function(t){e.$set(a,"searchable",t)},expression:"row.searchable"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"searchType",fn:function({row:a}){return[t("Select",{attrs:{disabled:!a.searchable,transfer:""},on:{"on-change":function(t){return e.changeSearchType(a,t)}},model:{value:a.searchType,callback:function(t){e.$set(a,"searchType",t)},expression:"row.searchType"}},[t("Option",{attrs:{value:"text"}},[e._v("文本输入框")]),t("Option",{attrs:{value:"select"}},[e._v("选择下拉框")]),t("Option",{attrs:{value:"daterange",disabled:e.daterangeSearch}},[e._v("日期范围选择器")]),t("Option",{attrs:{value:"date"}},[e._v("日期选择器")]),t("Option",{attrs:{value:"area"}},[e._v("省市县级联")])],1)]}},{key:"sortable",fn:function({row:a}){return[t("i-switch",{on:{"on-change":function(t){return e.changeSortable(a,t)}},model:{value:a.sortable,callback:function(t){e.$set(a,"sortable",t)},expression:"row.sortable"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"defaultSort",fn:function({row:a}){return[t("i-switch",{attrs:{disabled:(!a.sortable||e.defaultSort)&&!a.defaultSort||!a.sortable},on:{"on-change":function(t){return e.changeDefaultSort(a,t)}},model:{value:a.defaultSort,callback:function(t){e.$set(a,"defaultSort",t)},expression:"row.defaultSort"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"defaultSortType",fn:function({row:a}){return[t("Select",{attrs:{disabled:!a.defaultSort||!a.sortable,transfer:""},on:{"on-change":function(t){return e.changeDefaultSortType(a,t)}},model:{value:a.defaultSortType,callback:function(t){e.$set(a,"defaultSortType",t)},expression:"row.defaultSortType"}},[t("Option",{attrs:{value:"desc"}},[e._v("倒序")]),t("Option",{attrs:{value:"asc"}},[e._v("正序")])],1)]}},{key:"action",fn:function({row:a}){return[t("Button",{attrs:{type:"error",ghost:"",size:"small"},on:{click:function(t){return e.remove(a)}}},[e._v("删除")])]}}])})],1)],1)],1),t("Modal",{attrs:{title:"读取后端字段",width:800},on:{"on-ok":e.submitEntityData},model:{value:e.findBackFieldModal,callback:function(t){e.findBackFieldModal=t},expression:"findBackFieldModal"}},[t("Form",{ref:"entityForm",attrs:{model:e.entityForm,"label-width":130,rules:e.entityFormValidate}},[t("FormItem",{attrs:{label:"实体类引用路径",prop:"path"}},[t("Row",{attrs:{type:"flex",justify:"space-between"}},[t("Input",{staticStyle:{width:"410px"},attrs:{placeholder:"例如：cn.zwz.modules.base.entity.User",clearable:""},model:{value:e.entityForm.path,callback:function(t){e.$set(e.entityForm,"path",t)},expression:"entityForm.path"}}),t("Button",{attrs:{type:"warning",icon:"md-play"},on:{click:e.generateEntityData}},[e._v("读取字段")])],1)],1)],1),t("Input",{staticStyle:{"max-height":"50vh",overflow:"auto"},attrs:{type:"textarea",autosize:"",placeholder:"生成结果"},model:{value:e.findBackFieldContent,callback:function(t){e.findBackFieldContent=t},expression:"findBackFieldContent"}})],1),t("Modal",{attrs:{title:"生成代码",width:1e3,styles:"top:30px"},model:{value:e.codeModal,callback:function(t){e.codeModal=t},expression:"codeModal"}},[t("Tabs",{attrs:{type:"card"},on:{"on-click":e.changeCode},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[t("TabPane",{attrs:{name:"index.vue",label:"index.vue"}}),t("TabPane",{attrs:{name:"add.vue",label:"add.vue"}}),t("TabPane",{attrs:{name:"edit.vue",label:"edit.vue"}}),t("TabPane",{attrs:{name:"api.js",label:"api.js"}})],1),t("Input",{staticStyle:{"max-height":"60vh",overflow:"auto"},attrs:{type:"textarea",autosize:""},model:{value:e.createCodeContent,callback:function(t){e.createCodeContent=t},expression:"createCodeContent"}}),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.createCodeContent,expression:"createCodeContent",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],attrs:{type:"primary",icon:"md-copy"}},[e._v("复制代码")])],1)],1)],1)},s=[],i=a(7184);const r=(e,t,a)=>(0,i.oZ)(`/generate/table/${e}/${t}`,a),l=(e,t)=>(0,i.A_)(`/generate/getEntityData/${e}`,t),o={name:"vue-code",data(){return{tabName:"index.vue",findBackFieldModal:!1,findBackFieldContent:"",entityForm:{path:""},createCodeLoading:!1,createCodeContent:"",apiPreStr:"",codeModal:!1,form:{sortOrder:0,field:"",name:"",level:"2",tableShow:!0,editable:!0,type:"text",searchType:"text",searchLevel:"2",validate:!0,searchable:!1,sortable:!1,defaultSort:!1,defaultSortType:"desc"},formValidate:{field:[{required:!0,message:"不能为空",trigger:"blur"}],name:[{required:!0,message:"不能为空",trigger:"blur"}]},entityFormValidate:{path:[{required:!0,message:"不能为空",trigger:"blur"}]},columns:[{title:"编号",key:"sortOrder",sortType:"asc",sortable:!0,align:"center",minWidth:90},{title:"后端字段名",slot:"field",minWidth:150},{title:"备注",slot:"name",minWidth:150},{title:"表格显示",slot:"tableShow",minWidth:110},{title:"可添加编辑",slot:"editable",minWidth:110},{title:"输入组件",slot:"type",minWidth:200},{title:"非空",slot:"validate",minWidth:125},{title:"搜索",slot:"searchable",minWidth:100},{title:"搜索组件",slot:"searchType",minWidth:160},{title:"排序",slot:"sortable",minWidth:80},{title:"默认排序",slot:"defaultSort",minWidth:100},{title:"默认排序方式",slot:"defaultSortType",minWidth:150},{title:"操作",slot:"action",align:"center",fixed:"right",width:90}],data:[],defaultSort:!1,daterangeSearch:!1,result:{}}},methods:{init(){let e=this.getStore("tableData"),t=this.getStore("createCodeApiPre"),a=this.getStore("tableDefaultSort"),n=this.getStore("tableDaterangeSearch");e&&"undefined"!=e&&(this.data=JSON.parse(e)),t&&"undefined"!=t&&(this.apiPreStr=t),a&&"undefined"!=a&&(this.defaultSort="true"==a),n&&"undefined"!=n&&(this.daterangeSearch="true"==n)},generateEntityData(){this.$refs.entityForm.validate((e=>{e&&l(this.entityForm.path).then((e=>{e.success&&(this.findBackFieldContent=e.result)}))}))},submitEntityData(){if(this.findBackFieldContent)try{let e=JSON.parse(this.findBackFieldContent);this.data=e.data,this.findBackFieldModal=!1}catch(e){this.$Message.error("后端实体类解析异常: "+e)}else this.$Message.warning("后端实体类没有读到，请重试")},changeField(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.field=t.target.value,this.data.splice(e._index,1,n),this.save()},changeName(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.name=t.target.value,this.data.splice(e._index,1,n),this.save()},changeTableShow(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.tableShow=t,this.data.splice(e._index,1,n),this.save()},changeType(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.type=t,this.data.splice(e._index,1,n),this.save()},changeEditable(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.editable=t,this.data.splice(e._index,1,n),this.save()},changeValidate(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.validate=t,this.data.splice(e._index,1,n),this.save()},changeSearchable(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.searchable=t,this.data.splice(e._index,1,n),this.save()},changeSearchType(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.searchType=t,this.data.splice(e._index,1,n),this.daterangeSearch&&"daterange"!=t?this.daterangeSearch=!1:"daterange"==t&&(this.daterangeSearch=!0),this.save()},changeSortable(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.sortable=t,this.data.splice(e._index,1,n),this.save()},changeDefaultSort(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);this.defaultSort&&t?(this.$Message.warning("已设定了默认排序的字段，请勿设置多个"),n.defaultSort=!1):!this.defaultSort&&t?(n.defaultSort=!0,this.defaultSort=!0):this.defaultSort&&!t&&(n.defaultSort=!1,this.defaultSort=!1),this.data.splice(e._index,1,n),this.save()},changeDefaultSortType(e,t){for(let s in e)null==e[s]&&(e[s]="");let a=JSON.stringify(e),n=JSON.parse(a);n.defaultSortType=t,this.data.splice(e._index,1,n),this.save()},remove(e){this.data.splice(e._index,1),this.save(),this.$Message.success("删除成功")},clear(){this.$Modal.confirm({title:"确认清空",content:"您确认要清空 ?",onOk:()=>{this.data=[],this.apiPreStr="",this.defaultSort=!1,this.daterangeSearch=!1,this.save(),this.$Message.success("清空成功")}})},generate(){this.apiPreStr?(this.createCodeLoading=!0,r(this.apiPreStr,"1",this.data).then((e=>{this.createCodeLoading=!1,e.success&&(this.result=e.result,this.changeCode(),this.codeModal=!0,this.save())}))):this.$Message.warning("接口前缀不能为空")},changeCode(){"index.vue"==this.tabName&&(this.createCodeContent=this.result.componentApi),"add.vue"==this.tabName&&(this.createCodeContent=this.result.addApi),"edit.vue"==this.tabName&&(this.createCodeContent=this.result.editApi),"api.js"==this.tabName&&(this.createCodeContent=this.result.api)},onCopy(){this.$Message.success("复制成功")},save(){this.setStore("tableData",JSON.stringify(this.data)),this.setStore("createCodeApiPre",this.apiPreStr),this.setStore("tableDefaultSort",this.defaultSort),this.setStore("tableDaterangeSearch",this.daterangeSearch)}},mounted(){this.init()}},c=o;var d=a(1001),u=(0,d.Z)(c,n,s,!1,null,null,null);const h=u.exports}}]);