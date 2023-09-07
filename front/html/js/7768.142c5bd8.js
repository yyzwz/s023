"use strict";(self["webpackChunks023"]=self["webpackChunks023"]||[]).push([[7768,4688,2782,8188],{4688:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var s=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("添加行程")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"所属景点",prop:"spotId"}},[e("Select",{staticStyle:{width:"570px"},attrs:{placeholder:"请选择所属景点..."},model:{value:t.form.spotId,callback:function(e){t.$set(t.form,"spotId",e)},expression:"form.spotId"}},t._l(t.spotList,(function(a,s){return e("Option",{key:s,attrs:{value:a.id}},[t._v(t._s(a.title))])})),1)],1),e("FormItem",{attrs:{label:"行程名称",prop:"title"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入行程名称..."},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"起点",prop:"start"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入起点..."},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),e("FormItem",{attrs:{label:"终点",prop:"end"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入终点..."},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1),e("FormItem",{attrs:{label:"交通方式",prop:"way"}},[e("dict",{staticStyle:{width:"570px"},attrs:{dict:"out_way",transfer:"",clearable:"",placeholder:"请输入交通方式..."},model:{value:t.form.way,callback:function(e){t.$set(t.form,"way",e)},expression:"form.way"}})],1),e("FormItem",{attrs:{label:"行程路线",prop:"content"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"请输入行程路线..."},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},i=[],l=a(755),o=a(8188);const r={name:"add",components:{dict:o["default"]},data(){return{submitLoading:!1,form:{title:"",start:"",end:"",way:"",content:""},formValidate:{},spotList:[]}},methods:{init(){this.getScenicSpotListFx()},getScenicSpotListFx(){var t=this;t.spotList=[],(0,l.YO)().then((e=>{e.success&&(t.spotList=e.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,l.a5)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=r;var c=a(1001),d=(0,c.Z)(n,s,i,!1,null,null,null);const h=d.exports},2782:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var s=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("编辑行程")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"所属景点",prop:"spotId"}},[e("Select",{staticStyle:{width:"570px"},attrs:{placeholder:"请选择所属景点..."},model:{value:t.form.spotId,callback:function(e){t.$set(t.form,"spotId",e)},expression:"form.spotId"}},t._l(t.spotList,(function(a,s){return e("Option",{key:s,attrs:{value:a.id}},[t._v(t._s(a.title))])})),1)],1),e("FormItem",{attrs:{label:"行程名称",prop:"title"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入行程名称..."},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"起点",prop:"start"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入起点..."},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),e("FormItem",{attrs:{label:"终点",prop:"end"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入终点..."},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1),e("FormItem",{attrs:{label:"交通方式",prop:"way"}},[e("dict",{staticStyle:{width:"570px"},attrs:{dict:"out_way",transfer:"",clearable:"",placeholder:"请输入交通方式..."},model:{value:t.form.way,callback:function(e){t.$set(t.form,"way",e)},expression:"form.way"}})],1),e("FormItem",{attrs:{label:"行程路线",prop:"content"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"请输入行程路线..."},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},i=[],l=a(755),o=a(8188);const r={name:"edit",components:{dict:o["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{title:"",start:"",end:"",way:"",content:""},formValidate:{},spotList:[]}},methods:{init(){this.getScenicSpotListFx(),this.handleReset(),this.form=this.data},getScenicSpotListFx(){var t=this;t.spotList=[],(0,l.YO)().then((e=>{e.success&&(t.spotList=e.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,l.XS)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=r;var c=a(1001),d=(0,c.Z)(n,s,i,!1,null,null,null);const h=d.exports},7768:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},["add"==t.currView?e("add",{on:{close:function(e){t.currView="index"},submited:t.submited}}):t._e(),"edit"==t.currView?e("edit",{attrs:{data:t.formData},on:{close:function(e){t.currView="index"},submited:t.submited}}):t._e(),e("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==t.currView,expression:"currView=='index'"}]},[e("Row",{directives:[{name:"show",rawName:"v-show",value:t.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch.apply(null,arguments)}}},[e("Form",{ref:"searchForm",attrs:{model:t.searchForm,inline:"","label-width":0}},[e("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:t.searchForm,inline:"","label-width":0}},[e("Form-item",{attrs:{label:"",prop:"title"}},[e("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"行程名称",clearable:""},model:{value:t.searchForm.title,callback:function(e){t.$set(t.searchForm,"title",e)},expression:"searchForm.title"}})],1),e("Form-item",{attrs:{label:"",prop:"way"}},[e("dict",{staticStyle:{width:"150px"},attrs:{dict:"out_way",transfer:"",clearable:"",placeholder:"交通方式"},model:{value:t.searchForm.way,callback:function(e){t.$set(t.searchForm,"way",e)},expression:"searchForm.way"}})],1),e("Form-item",{attrs:{label:"",prop:"spotId"}},[e("Select",{staticStyle:{width:"150px"},attrs:{placeholder:"所属景点",clearable:""},model:{value:t.searchForm.spotId,callback:function(e){t.$set(t.searchForm,"spotId",e)},expression:"searchForm.spotId"}},t._l(t.spotList,(function(a,s){return e("Option",{key:s,attrs:{value:a.id}},[t._v(t._s(a.title))])})),1)],1),e("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[e("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:t.handleSearch}},[t._v("搜索")]),e("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:"",disabled:!t.$route.meta.permTypes.includes("add")},on:{click:t.add}},[t._v("添加")]),e("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:"",disabled:!t.$route.meta.permTypes.includes("delete")},on:{click:t.delAll}},[t._v("删除")]),e("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:t.excelData}},[t._v("导出")])],1),e("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[e("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(e){t.showFilterPanelFlag=!t.showFilterPanelFlag}}},[t._v(" 列筛选")]),e("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(e){t.modal1=!0}}},[t._v(" 使用教程")]),e("Modal",{attrs:{title:"使用教程"},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[e("p",[t._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),e("p",[t._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),e("p",[t._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),e("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[e("transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[e("CheckboxGroup",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.mycolumns,(function(t){return e("div",{key:t.key},[e("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:t.title}})],1)})),0)],1)])],1),e("Row",{directives:[{name:"show",rawName:"v-show",value:t.openTip,expression:"openTip"}]}),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("Table",{ref:"table",attrs:{loading:t.loading,height:t.tableHeight,border:"",stripe:"",size:"small",columns:t.columns,data:t.data,sortable:"custom","row-class-name":t.rowClassNmae},on:{"on-sort-change":t.changeSort,"on-selection-change":t.changeSelect,"on-row-click":t.rowClick}})],1)],1),e("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[e("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1)],1)},i=[],l=a(755),o=a(4688),r=a(2782),n=a(8188);const c={name:"single-window",components:{add:o["default"],edit:r["default"],dict:n["default"]},data(){return{tableHeight:0,selected:["选择","序号","所属景点","行程名称","起点","终点","交通方式","行程路线","创建时间","创建者","修改时间","修改者","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(t,e)=>t("span",e.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"所属景点",key:"spotName",minWidth:120,tooltip:!0,sortable:!1},{title:"行程名称",key:"title",minWidth:120,tooltip:!0,sortable:!1},{title:"起点",key:"start",minWidth:120,tooltip:!0,sortable:!1},{title:"终点",key:"end",minWidth:120,tooltip:!0,sortable:!1},{title:"交通方式",key:"way",minWidth:120,tooltip:!0,sortable:!1},{title:"行程路线",key:"content",minWidth:120,tooltip:!0,sortable:!1},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:200,fixed:"right",render:(t,e)=>{var a=this;return t("div",[t("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",disabled:!(a.$route.meta.permTypes&&a.$route.meta.permTypes.includes("edit")),ghost:!0},style:{marginRight:"5px"},on:{click:()=>{this.edit(e.row)}}},"编辑"),t("Button",{props:{type:"error",size:"small",icon:"md-trash",disabled:!(a.$route.meta.permTypes&&a.$route.meta.permTypes.includes("delete")),ghost:!0},on:{click:()=>{this.remove(e.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1,spotList:[]}},methods:{init(){this.getDataList(),this.getScenicSpotListFx()},getScenicSpotListFx(){var t=this;t.spotList=[],(0,l.YO)().then((e=>{e.success&&(t.spotList=e.result)}))},submited(){this.currView="index",this.getDataList()},changePage(t){this.searchForm.pageNumber=t,this.getDataList(),this.clearSelectAll()},changePageSize(t){this.searchForm.pageSize=t,this.getDataList()},rowClick(t,e){this.selectRow=t},rowClassNmae(t,e){return t.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(t){this.searchForm.sort=t.key,this.searchForm.order=t.order,"normal"===t.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(t){this.selectList=t,this.selectCount=t.length},getDataList(){this.loading=!0,(0,l.xq)(this.searchForm).then((t=>{this.loading=!1,t.success&&(this.data=t.result.records,this.total=t.result.total)}))},add(){this.currView="add"},edit(t){for(let s in t)null==t[s]&&(t[s]="");let e=JSON.stringify(t),a=JSON.parse(e);this.formData=a,this.currView="edit"},remove(t){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+t.name+" ?",loading:!0,onOk:()=>{(0,l.IR)({ids:t.id}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let t="";this.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),(0,l.IR)({ids:t}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let t=[];for(var e=0;e<this.selected.length;e++)for(var a=this.selected[e],s=0;s<this.columns.length;s++)this.columns[s].title==a&&t.push(this.columns[s]);this.columns=t},watch:{selected:function(t){let e=[];for(var a=0;a<this.mycolumns.length;a++){var s=this.mycolumns[a];(void 0==s.title||t.includes(s.title))&&e.push(s)}this.columns=e}}},d=c;var h=a(1001),m=(0,h.Z)(d,s,i,!1,null,null,null);const p=m.exports},8188:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var s=function(){var t=this,e=t._self._c;return e("div",[e("Select",{attrs:{size:t.size,loading:t.loading,placeholder:t.placeholder,multiple:t.multiple,disabled:t.disabled,filterable:t.filterable,transfer:t.transfer,clearable:t.clearable,placement:t.placement,"transfer-class-name":t.transferClassName,prefix:t.prefix,"max-tag-count":t.maxTagCount,"max-tag-placeholder":t.maxTagPlaceholder},on:{"on-change":t.handleChange,"on-query-change":t.handleQueryChange,"on-clear":t.handleClear,"on-open-change":t.handleOpenChange,"on-select":t.handleSelect},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},t._l(t.dictData,(function(a,s){return e("Option",{key:s,attrs:{value:a.value}},[t._v(t._s(a.title))])})),1)],1)},i=[],l=a(7877);const o={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(t){this.loading=!0,(0,l.i3)(t).then((t=>{this.loading=!1,t.success&&(this.dictData=t.result)}))},handleChange(t){this.$emit("input",t),this.$emit("on-change",t)},handleQueryChange(t){this.$emit("on-query-change",t)},handleClear(){this.$emit("on-clear","")},handleOpenChange(t){this.$emit("on-open-change",t)},handleSelect(t){this.$emit("on-select",t)},setCurrentValue(t){t!==this.currentValue&&(this.currentValue=t,this.$emit("on-change",this.currentValue))}},watch:{value(t){this.setCurrentValue(t)},dict(t){this.getData(t)}},mounted(){this.getData(this.dict)}},r=o;var n=a(1001),c=(0,n.Z)(r,s,i,!1,null,null,null);const d=c.exports},755:(t,e,a)=>{a.d(e,{IR:()=>r,XS:()=>o,YO:()=>n,a5:()=>l,xq:()=>i});var s=a(7184);const i=t=>(0,s.A_)("/trip/getByPage",t),l=t=>(0,s.j0)("/trip/insert",t),o=t=>(0,s.j0)("/trip/update",t),r=t=>(0,s.j0)("/trip/delByIds",t),n=t=>(0,s.A_)("/scenicSpot/getAll",t)}}]);