import{_ as e,c as a,o as s,a as n}from"./app.a89c1e9e.js";const h=JSON.parse('{"title":"webpack指南","description":"","frontmatter":{},"headers":[{"level":2,"title":"文件结构","slug":"文件结构","link":"#文件结构","children":[]}],"relativePath":"advanced/building-tools.md","lastUpdated":1677753441000}'),l={name:"advanced/building-tools.md"},r=n(`<h1 id="webpack指南" tabindex="-1">webpack指南 <a class="header-anchor" href="#webpack指南" aria-hidden="true">#</a></h1><blockquote><p>在本项目中使用了webpack5，如果您还不了解的话，可以先去查看<a href="https://webpack.js.org/" target="_blank" rel="noreferrer">webpack官方文档</a>，或者查看我的<a href="https://umbrella22.github.io/WebpackLearnOfVue-site/" target="_blank" rel="noreferrer">webpack4入门</a>，这样就不至于您在查看本指南时，不知道我在说什么了。</p></blockquote><h2 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">└─.electron-vue                     # webpack配置目录</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─build.js                       # build时使用</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─dev-runner.js                  # dev时使用</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─webpack.main.config.js         # 主进程使用的webpack配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">   └─webpack.renderer.config.js     # 渲染进程使用的webpack配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>原项目中锁定端口为9080，所以我使用<code>portfinder</code>改进了这一问题，但是带来的另一个问题就是首次启动编译缓慢，不过问题不大，毕竟有得必有失，这一改动只是损失了首次启动时编译时间。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>在renderer配置文件中，你们也许看到了，我将element和vue放入白名单模块中，因为如果在electron中不这样设置，让webpack进行打包的话，会导致element的表格出不来，以及其他的玄学问题。</p></div>`,6),p=[r];function c(t,o,i,d,b,u){return s(),a("div",null,p)}const k=e(l,[["render",c]]);export{h as __pageData,k as default};
