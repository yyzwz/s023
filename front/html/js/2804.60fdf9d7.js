"use strict";(self["webpackChunks023"]=self["webpackChunks023"]||[]).push([[2804],{2804:(t,e,l)=>{l.r(e),l.d(e,{default:()=>p});var a=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("Row",{attrs:{gutter:16}},[e("span",{staticStyle:{"font-weight":"550","font-size":"26px"}},[t._v("海南旅游景点收藏 TOP 10")])]),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("div",{attrs:{id:"container30"}})])],1)],1)],1)},i=[],o=l(8899),s=l(1821);const n={name:"test-page",components:{},props:{},data(){return{stackedBarPlot:{},userData:[{title:"AAA",value:6},{title:"BBB",value:4}]}},methods:{init(){this.getTopCollectionFx()},getTopCollectionFx(){var t=this,e=[];(0,o.dR)().then((l=>{if(console.log(l),l.success){for(var a=0;a<l.result.length;a++){var i={};i.title=l.result[a].title,i.value=l.result[a].collection,e.push(i)}t.stackedBarPlot=new s.Bar("container30",{data:e,xField:"value",yField:"title",seriesField:"title",legend:{position:"top-left"}}),t.stackedBarPlot.render()}}))},initAntvFx(){var t=this.userData;this.stackedBarPlot=new s.Bar("container30",{data:t,xField:"value",yField:"title",seriesField:"title",legend:{position:"top-left"}}),this.stackedBarPlot.render()}},mounted(){this.init()}},c=n;var r=l(1001),d=(0,r.Z)(c,a,i,!1,null,"24e41709",null);const p=d.exports},8899:(t,e,l)=>{l.d(e,{DC:()=>s,FQ:()=>c,Hc:()=>r,T:()=>v,W:()=>p,Xf:()=>n,YO:()=>i,dR:()=>u,lS:()=>d,oG:()=>o});var a=l(7184);const i=t=>(0,a.A_)("/scenicSpot/getByPage",t),o=t=>(0,a.j0)("/scenicSpot/insert",t),s=t=>(0,a.j0)("/scenicSpot/update",t),n=t=>(0,a.j0)("/scenicSpot/delByIds",t),c=t=>(0,a.A_)("/scenicSpotType/getAll",t),r=t=>(0,a.A_)("/collection/addCollection",t),d=t=>(0,a.A_)("/collection/cancelCollection",t),p=t=>(0,a.A_)("/evaluate/addEvaluate",t),u=t=>(0,a.A_)("/scenicSpot/getTopCollection",t),v=t=>(0,a.A_)("/scenicSpot/getTopEvaluate",t)}}]);