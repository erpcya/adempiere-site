"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[94212],{94212:(e,l,a)=>{a.r(l),a.d(l,{default:()=>i});var t=a(78744),s=a(15e3),n=a(99856),u=a(18535),i=(0,t.pM)({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const l=(0,u.u)(),i=(0,s.KR)(!0),o=(0,s.IJ)(),r=(0,s.IJ)(),p=(0,t.EW)((()=>(0,n.Eg)({},l,(e=>JSON.parse(decodeURIComponent(e)))(e.settings))));return(0,t.sV)((async()=>{await(async()=>{const{ReplStore:l,Repl:t}=await Promise.all([a.e(70839),a.e(82723)]).then(a.bind(a,70839));o.value=t,r.value=new l({serializedState:decodeURIComponent(e.files)}),p.value.vueVersion&&await r.value.setVueVersion(p.value.vueVersion)})(),i.value=!1})),()=>[(0,t.h)("div",{class:"vue-playground-wrapper"},[e.title?(0,t.h)("div",{class:"header"},decodeURIComponent(e.title)):null,(0,t.h)("div",{class:"repl-container"},[i.value?(0,t.h)(n.mP,{class:"preview-loading",height:192}):null,o.value?(0,t.h)(o.value,{store:r.value,autoResize:!0,...p.value,layout:"horizontal"}):null])])]}})}}]);