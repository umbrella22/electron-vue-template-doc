"use strict";(self.webpackChunkelectron_vue_template_doc=self.webpackChunkelectron_vue_template_doc||[]).push([[199],{26:(e,n,a)=>{a.r(n),a.d(n,{data:()=>r});const r={key:"v-5b1fa0c8",path:"/Overview/advanced/webpack.html",title:"webpack指南",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"文件结构",slug:"文件结构",children:[]}],filePathRelative:"Overview/advanced/webpack.md",git:{updatedTime:1581245885e3}}},1208:(e,n,a)=>{a.r(n),a.d(n,{default:()=>k});var r=a(6252);const c=(0,r._)("h1",{id:"webpack指南",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#webpack指南","aria-hidden":"true"},"#"),(0,r.Uk)(" webpack指南")],-1),t=(0,r.Uk)("在本项目中使用了webpack4，如果您还不了解的话，可以先去查看"),s={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},l=(0,r.Uk)("webpack官方文档"),p=(0,r.Uk)("，或者查看我的"),i={href:"https://umbrella22.github.io/WebpackLearnOfVue-site/",target:"_blank",rel:"noopener noreferrer"},b=(0,r.Uk)("webpack4入门"),d=(0,r.Uk)("，这样就不至于您在查看本指南时，不知道我在说什么了。"),u=(0,r.uE)('<h2 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>└─.electron-vue                     # webpack配置目录\n   ├─build.js                       # build时使用\n   ├─dev-runner.js                  # dev时使用\n   ├─webpack.main.config.js         # 主进程使用的webpack配置文件\n   ├─webpack.renderer.config.js     # 渲染进程使用的webpack配置文件\n   └─webpack.web.config.js          # 同渲染进程，但是是只打包成web版本\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>原项目中锁定端口为9080，所以我使用<code>portfinder</code>改进了这一问题，但是带来的另一个问题就是首次启动编译缓慢，不过问题不大，毕竟有得必有失，这一改动只是损失了首次启动时编译时间。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在renderer配置文件中，你们也许看到了，我将element和vue放入白名单模块中，因为如果在electron中不这样设置，让webpack进行打包的话，会导致element的表格出不来，以及其他的玄学问题。</p></div>',4),o={},k=(0,a(3744).Z)(o,[["render",function(e,n){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[c,(0,r._)("blockquote",null,[(0,r._)("p",null,[t,(0,r._)("a",s,[l,(0,r.Wm)(a)]),p,(0,r._)("a",i,[b,(0,r.Wm)(a)]),d])]),u],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,r]of n)a[e]=r;return a}}}]);