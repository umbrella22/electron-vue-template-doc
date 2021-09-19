"use strict";(self.webpackChunkelectron_vue_template_doc=self.webpackChunkelectron_vue_template_doc||[]).push([[763],{4874:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-496b36dd",path:"/Overview/",title:"介绍",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"功能",slug:"功能",children:[]},{level:2,title:"前序准备",slug:"前序准备",children:[]},{level:2,title:"目录结构",slug:"目录结构",children:[]},{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"全局文件夹",slug:"全局文件夹",children:[]},{level:2,title:"环境变量",slug:"环境变量",children:[]},{level:2,title:"Vue 生态圈",slug:"vue-生态圈",children:[]}],filePathRelative:"Overview/readme.md",git:{updatedTime:1624590844e3}}},2992:(e,n,s)=>{s.r(n),s.d(n,{default:()=>he});var a=s(6252);const r=(0,a._)("h1",{id:"介绍",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,a.Uk)(" 介绍")],-1),l={href:"https://github.com/vuejs/vue",target:"_blank",rel:"noopener noreferrer"},t=(0,a._)("img",{src:"https://img.shields.io/badge/vue-2.6.14-brightgreen.svg",alt:"vue"},null,-1),p={href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"},i=(0,a._)("img",{src:"https://img.shields.io/badge/element--ui-2.15.2-brightgreen.svg",alt:"element-ui"},null,-1),o={href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"},c=(0,a._)("img",{src:"https://img.shields.io/badge/electron-13.1.2-brightgreen.svg",alt:"electron"},null,-1),u={href:"https://github.com/umbrella22/electron-vue-template/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"},b=(0,a._)("img",{src:"https://img.shields.io/github/license/mashape/apistatus.svg",alt:"license"},null,-1),m=(0,a.Uk)("起手该项目的缘由是因为"),d={href:"https://github.com/SimulatedGREG/electron-vue",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("原项目"),g=(0,a.Uk)("已经停止维护了很久，electron的版本号还停滞在1.x版本，所以就在原项目的基础上更新了所有依赖，并且融入了"),v={href:"https://panjiachen.github.io/vue-element-admin-site/zh/",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("花裤衩大大的vue-admin"),_=(0,a.Uk)("的核心代码以及融入了我自己的一些代码。同时如果您打算使用这些核心代码的话，还请希望结合该教程。内置了nedb，两种electron自动更新，自定义头部等大家几乎经常用到的功能；相信在基础需求面前，本项目能够最大程度的帮助你"),f=(0,a.uE)('<div class="custom-container warning"><p class="custom-container-title">提示</p><p>阅读本文档即默认您拥有前端以及vue基础知识，并拥有部分node基础知识。</p></div><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- 登录（假）\n\n- 使用electron-updater进行更新检查\n\n- 使用electron的webContents类进行下载\n\n- 全局快捷键注册以及监听\n\n- 继承vue-admin基础版功能\n\n- 内置express服务端\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="前序准备" tabindex="-1"><a class="header-anchor" href="#前序准备" aria-hidden="true">#</a> 前序准备</h2>',4),U=(0,a.Uk)("你需要在本地安装"),x={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Uk)("node"),E=(0,a.Uk)("和"),W={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},w=(0,a.Uk)("git"),V=(0,a.Uk)("。本项目技术栈基于"),y={href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},R=(0,a.Uk)("es6"),C=(0,a.Uk)("、"),S={href:"https://electronjs.org/",target:"_blank",rel:"noopener noreferrer"},T=(0,a.Uk)("electron"),N=(0,a.Uk)("、"),O={href:"https://cn.vuejs.org/index.html",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Uk)("vue"),D=(0,a.Uk)("、"),G={href:"https://vuex.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"},L=(0,a.Uk)("vuex"),M=(0,a.Uk)("、"),F={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},z=(0,a.Uk)("vue-router"),B=(0,a.Uk)("、"),P={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},A=(0,a.Uk)("axios"),H=(0,a.Uk)("以及"),Y={href:"https://element.eleme.io/",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("element-ui"),J=(0,a.Uk)("，提前了解和学习这些知识会对使用本项目有很大的帮助。"),K=(0,a.uE)('<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├── .electron-vue              # 构建相关\n├── build                      # 项目打包目录\n│   │── icon                   # 图标\n│   └── lib                    # 打包依赖（win）\n├── config                     # 构建相关\n├── dist                       # webpack临时工作目录\n├─src                          # 源码目录\n│  ├─main                      # 主进程目录\n│  │  ├─config                 # 主进程配置文件夹\n│  │  │    ├─DisableButton.js  # 配置全局快捷键禁用\n│  │  │    ├─StaticPath.js     # 静态路径文件\n│  │  │    └─menu.js           # 主进程的自定义菜单\n│  │  ├─server                 # 内置服务端文件夹\n│  │  │    ├─index.js          # 内置服务端启动\n│  │  │    └─server.js         # 内置服务端主体\n│  │  ├─services               # 主进程服务文件夹\n│  │  │    ├─checkupdate.js    # electron-updater更新\n│  │  │    ├─downloadFile.js   # webContents类更新\n│  │  │    ├─ipcMain.js        # ipcMain通讯\n│  │  │    └─windowManager.js  # 初始出所有窗口\n│  │  └─index.js               # 主进程入口\n│  └─renderer                  # 渲染进程文件夹\n│      ├─api                   # 请求以及数据库操作文件夹\n│      ├─assets                # 渲染进程主题 字体等静态资源\n│      ├─components            # 全局公用组件\n│      ├─icons                 # 项目所有 svg icons\n│      ├─layout                # 全局 layout\n│      ├─router                # 路由\n│      ├─store                 # 全局 store管理\n│      ├─styles                # 全局样式\n│      ├─tools                 # 全局特定工具\n│      ├─utils                 # 全局公共方法\n│      └─views                 # views 所有页面\n├─static                       # 全局静态资源\n├── tests                      # 测试\n├── .env.xxx                   # 环境变量配置\n├── .eslintrc.js               # eslint 配置项\n├── .babelrc                   # babel-loader 配置\n├── .travis.yml                # 自动化CI配置\n├── vue.config.js              # vue-cli 配置\n├── postcss.config.js          # postcss 配置\n└── package.json               # package.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="custom-container danger"><p class="custom-container-title">注意</p><p>请不要自作主张在安装依赖的时候添加<code>-g</code>参数！除非您很清楚您正在做什么！</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># clone项目</span>\n<span class="token function">git</span> clone https://github.com/umbrella22/electron-vue-template.git\n<span class="token comment"># 进入项目目录</span>\n<span class="token builtin class-name">cd</span> electron-vue-template\n<span class="token comment"># 安装依赖</span>\n<span class="token comment"># 如果网络非常顺畅的情况下</span>\n<span class="token function">npm</span> <span class="token function">install</span>\n<span class="token comment"># 如果网络出现一定的情况</span>\n<span class="token comment"># 建议不要使用cnpm，会出现各种玄学bug。您可以通过如下操作加快安装速度</span>\n<span class="token function">npm</span> <span class="token function">install</span> --registry<span class="token operator">=</span>https://registry.npm.taobao.org\n<span class="token comment"># 但是需要注意的是electron的本体下载并不是走这里所以还是要去设置一下</span>\n<span class="token function">npm</span> config edit\n<span class="token comment"># 该命令会打开npm的配置文件，请在空白处添加</span>\n<span class="token comment"># registry=https://registry.npm.taobao.org/</span>\n<span class="token comment"># electron_mirror=https://cdn.npm.taobao.org/dist/electron/ </span>\n<span class="token comment"># ELECTRON_BUILDER_BINARIES_MIRROR=http://npm.taobao.org/mirrors/electron-builder-binaries/</span>\n<span class="token comment"># 然后关闭该窗口，重启命令行，删除node_modules文件夹，并重新安装依赖即可</span>\n<span class="token comment"># 本地开发 启动项目</span>\n<span class="token function">npm</span> run dev 或 <span class="token function">yarn</span> dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="custom-container danger"><p class="custom-container-title">注意</p><p>强烈建议不要直接使用cnpm进行安装，那种玄学bug是真的没法说，最好就是用nrm切换一下registry，或者使用yarn，是最好的了。</p><p>一般遇到<code>Electron failed to install correctly，please delete node_moules/electron and try installing again</code>这种错误时，就是electron本体没有下载成功，删除node_module文件夹，并按照上面的设置进行electron镜像地址设置之后就好了</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这里的环境指的是windows下，如果您是MacOS或者是linux的话，您可能需要熟悉vim的操作。</p></div><p>在启动完成之后，就会自动打开程序界面了；接下来你就可以针对你自己的需求进行代码的修改和业务开发</p><h2 id="全局文件夹" tabindex="-1"><a class="header-anchor" href="#全局文件夹" aria-hidden="true">#</a> 全局文件夹</h2><p>在本项目中内置了两个全局文件夹：</p><ul><li><code>__static</code>：在被打包成asar之后，依旧能够提供虚拟路径，一般满足静态文件访问。</li><li><code>__lib</code>：(渲染进程)无论是否启用asar，均提供一个实体的绝对路径，可在config文件夹中设置，详情请查看调用dll章节。</li><li><code>process.env.libPath</code>：(主进程)无论是否启用asar，均提供一个实体的绝对路径，可在config文件夹中设置，详情请查看调用dll章节。</li></ul><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><ul><li><code>process.env.TERGET_ENV</code>：当且仅当再命令中设置了<code>cross-env TERGET_ENV=标识</code>才会生效，和<code>process.env.NODE_ENV</code>是分开管理的，您可以在<code>config/index</code>中自行导入当前变量可能代表的东西。您可以直接在渲染（主）进程中通过<code>process.env.TERGET_ENV</code>访问。</li></ul><h2 id="vue-生态圈" tabindex="-1"><a class="header-anchor" href="#vue-生态圈" aria-hidden="true">#</a> Vue 生态圈</h2><p><strong>首先了解这些 vue 生态圈的东西，会对你上手本项目有很大的帮助。</strong></p>',15),Q={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},X=(0,a.Uk)("Vue Router"),Z=(0,a.Uk)(" 是 vue 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。"),$={href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},ee=(0,a.Uk)("Vuex"),ne=(0,a.Uk)(" 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。它能解决你很多全局状态或者组件之间通信的问题。"),se={href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener noreferrer"},ae=(0,a.Uk)("Vue Loader"),re=(0,a.Uk)(" 是为 vue 文件定制的一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。它能在开发过程中使用热重载来保持状态，为每个组件模拟出 scoped CSS 等等功能。不过大部分情况下你不需要对它直接进行配置，脚手架都帮你封装好了。"),le={start:"4"},te={href:"https://vue-test-utils.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},pe=(0,a.Uk)("Vue Test Utils"),ie=(0,a.Uk)(" 是官方提供的一个单元测试工具。它能让你更方便的写单元测试。"),oe={href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"},ce=(0,a.Uk)("Vue Dev-Tools"),ue=(0,a.Uk)(" Vue 在浏览器下的调试工具。写 vue 必备的一个浏览器插件，能大大的提高你调试的效率。"),be={href:"https://github.com/vuejs/vetur",target:"_blank",rel:"noopener noreferrer"},me=(0,a.Uk)("Vetur"),de=(0,a.Uk)(" 是 VS Code 的插件. 如果你使用 VS Code 来写 vue 的话，这个插件是必不可少的。"),he={render:function(e,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[(0,a._)("a",l,[t,(0,a.Wm)(s)]),(0,a._)("a",p,[i,(0,a.Wm)(s)]),(0,a._)("a",o,[c,(0,a.Wm)(s)]),(0,a._)("a",u,[b,(0,a.Wm)(s)])]),(0,a._)("p",null,[m,(0,a._)("a",d,[h,(0,a.Wm)(s)]),g,(0,a._)("a",v,[k,(0,a.Wm)(s)]),_]),f,(0,a._)("p",null,[U,(0,a._)("a",x,[j,(0,a.Wm)(s)]),E,(0,a._)("a",W,[w,(0,a.Wm)(s)]),V,(0,a._)("a",y,[R,(0,a.Wm)(s)]),C,(0,a._)("a",S,[T,(0,a.Wm)(s)]),N,(0,a._)("a",O,[I,(0,a.Wm)(s)]),D,(0,a._)("a",G,[L,(0,a.Wm)(s)]),M,(0,a._)("a",F,[z,(0,a.Wm)(s)]),B,(0,a._)("a",P,[A,(0,a.Wm)(s)]),H,(0,a._)("a",Y,[q,(0,a.Wm)(s)]),J]),K,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",Q,[X,(0,a.Wm)(s)]),Z])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",$,[ee,(0,a.Wm)(s)]),ne])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",se,[ae,(0,a.Wm)(s)]),re])])]),(0,a._)("ol",le,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",te,[pe,(0,a.Wm)(s)]),ie])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",oe,[ce,(0,a.Wm)(s)]),ue])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",be,[me,(0,a.Wm)(s)]),de])])])],64)}}}}]);