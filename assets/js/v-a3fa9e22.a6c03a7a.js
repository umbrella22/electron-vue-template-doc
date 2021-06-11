(self.webpackChunkelectron_vue_template_doc=self.webpackChunkelectron_vue_template_doc||[]).push([[655],{702:(e,l,a)=>{"use strict";a.r(l),a.d(l,{data:()=>t});const t={key:"v-a3fa9e22",path:"/Overview/essentials/features.html",title:"特色功能",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"分支说明",slug:"分支说明",children:[]},{level:2,title:"多种更新方式",slug:"多种更新方式",children:[]},{level:2,title:"自定义头部",slug:"自定义头部",children:[]},{level:2,title:"内置服务端",slug:"内置服务端",children:[]},{level:2,title:"ffi-napi",slug:"ffi-napi",children:[]}],filePathRelative:"Overview/essentials/features.md",git:{updatedTime:1612339939e3,contributors:[{name:"umbrella22",email:"1035765115@qq.com",commits:2}]}}},1041:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>i});const t=(0,a(6252).uE)('<h1 id="特色功能"><a class="header-anchor" href="#特色功能">#</a> 特色功能</h1><div class="custom-container tip"><p class="custom-container-title">说明</p><p>目前的市面上已经有很多electron和vue的捆绑插件和框架，但通常都是一套简单的解决方案，并没有一体式的可供热拔插的功能解决方案，本框架有如下几大通用功能供您拆解使用。</p></div><h2 id="分支说明"><a class="header-anchor" href="#分支说明">#</a> 分支说明</h2><p>本框架以分支的形式分发不同功能的代码库。</p><ul><li>master <ul><li>只保留最稳定的功能和依赖</li></ul></li><li>NoLayOut <ul><li>这个分支的主进程使用了typescript，同时依赖部分将采用激进式更新，并且渲染进程如其名，没有任何多余的代码，只有一个页面，依赖和功能同上分支。</li></ul></li></ul><h2 id="多种更新方式"><a class="header-anchor" href="#多种更新方式">#</a> 多种更新方式</h2><p>拥有两种更新方法，不再仅仅只局限于updater的方法进行更新，您可以自行定制属于您自己的安装包并更新（需要您拥有nsis基础）使用详情请下跳到主进程代码解析</p><h2 id="自定义头部"><a class="header-anchor" href="#自定义头部">#</a> 自定义头部</h2><p>在win情况下允许您关闭electron自带的程序头部，使用您自己的程序头部，更加美观，代码位置在<code>src\\renderer\\components\\title</code>中，可自行修改</p><h2 id="内置服务端"><a class="header-anchor" href="#内置服务端">#</a> 内置服务端</h2><p>在electron中加入了express服务端，允许您将您的软件作为服务端使用or实现一些特定需求。</p><h2 id="ffi-napi"><a class="header-anchor" href="#ffi-napi">#</a> ffi-napi</h2><p>允许您在指定文件夹加入dll文件来直接调用dll，免去配置开发和生产环境时由于文件位置不对导致dll调用失败的问题。详情请到进阶中查看。</p>',13),i={render:function(e,l){return t}}}}]);