"use strict";(self.webpackChunkelectron_vue_template_doc=self.webpackChunkelectron_vue_template_doc||[]).push([[370],{4591:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l={key:"v-4ffdce10",path:"/Overview/advanced/",title:"跨域问题",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"Overview/advanced/readme.md",git:{updatedTime:1618219148e3}}},8928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var l=a(6252);const n=(0,l._)("h1",{id:"跨域问题",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#跨域问题","aria-hidden":"true"},"#"),(0,l.Uk)(" 跨域问题")],-1),c=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("跨域：即触发了浏览器的同源策略即请求的时候出现： "),(0,l._)("code",null,"Access to XMLHttpRequest at ***")])],-1),r=(0,l._)("div",{class:"custom-container tip"},[(0,l._)("p",{class:"custom-container-title"},"TIP"),(0,l._)("p",null,"针对跨域问题，这一点在electron中其实无需担心，理解跨域产生问题的前端小朋友们应当知道这是浏览器造成的，此时我们只需要在主进程创建窗口位置设置一个值即可（electron版本高于4.x.x）即webPreferences中的webSecurity选项 ；将其设置为false就好了，至于为何事高于4.x.x呢，因为在低于该版本中，electron团队已经默认将其设置为false")],-1),d=(0,l._)("p",null,"但是你可能会在使用webview标签或者是子窗口的时候还是会遇到跨域问题，此时你需要在新建窗口时同样关闭该选项即可。",-1),s={render:function(e,t){return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,c,r,d],64)}}}}]);