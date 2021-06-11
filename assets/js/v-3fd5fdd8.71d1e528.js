(self.webpackChunkelectron_vue_template_doc=self.webpackChunkelectron_vue_template_doc||[]).push([[160],{8527:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-3fd5fdd8",path:"/Overview/essentials/build.html",title:"构建和发布",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"构建出web版本",slug:"构建出web版本",children:[]},{level:2,title:"环境变量",slug:"环境变量",children:[]},{level:2,title:"builder配置文件说明",slug:"builder配置文件说明",children:[]},{level:2,title:"发布时，减少打包后文件大小",slug:"发布时-减少打包后文件大小",children:[]}],filePathRelative:"Overview/essentials/build.md",git:{updatedTime:1604374329e3,contributors:[{name:"umbrella22",email:"1035765115@qq.com",commits:3},{name:"张恒",email:"syl1998@hotmail.com",commits:2}]}}},2735:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="构建和发布"><a class="header-anchor" href="#构建和发布">#</a> 构建和发布</h1><p>借助强大得electron-bulider您只需要执行npm run build命令即可开始编译您当前操作系统适用的安装包</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>需要注意的是，无论哪一个平台在编译的时候，都会下载一次打包依赖，当然这只会在你第一次构建项目时发生。 在设置过镜像以后，无需担心下载问题。</p></div><h2 id="构建出web版本"><a class="header-anchor" href="#构建出web版本">#</a> 构建出web版本</h2><p>当您使用yarn build:web或npm run build:web时，您应当注意的是，在web环境下是不可以存在任何和electron相关得api调用，您可以在前端中通过<code>process.env.IS_WEB</code>来判断当前运行环境是否处于非electron。</p><h2 id="环境变量"><a class="header-anchor" href="#环境变量">#</a> 环境变量</h2><p>在本项目中，已经在config/index.js中导入了两个状态，dev为开发环境，prod为生产环境，而axios的baseURL同样也是出于该文件夹中的dev.env.js和prod.env.js中，而在index中，您应当遵守内部的文件结构进行您自己的一些变量控制，本项目自带的有在dev下的默认端口，关闭electron垃圾信息输出，以及，控制台部分输出中文化（笑~）</p><ul><li>config/index.js中的参数说明</li></ul><table><thead><tr><th style="text-align:center;">环境名:名称</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">build:DisableF12</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">是否注册全局快捷键禁用F12</td></tr><tr><td style="text-align:center;">dev:removeElectronJunk</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">是否关闭electron垃圾输出</td></tr><tr><td style="text-align:center;">dev:chineseLog</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:left;">是否启用部分中文控制台输出</td></tr><tr><td style="text-align:center;">dev:port</td><td style="text-align:center;">Number</td><td style="text-align:center;">9080</td><td style="text-align:left;">开发时得默认端口</td></tr><tr><td style="text-align:center;">UseStartupChart</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">是否启用启动动画</td></tr><tr><td style="text-align:center;">IsUseSysTitle</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">是否使用系统自带得标题栏</td></tr></tbody></table><h2 id="builder配置文件说明"><a class="header-anchor" href="#builder配置文件说明">#</a> builder配置文件说明</h2><p>在该项目中，继承了原项目得单个package.json得优势，它将builder中得配置文件添加进了package.json中的build对象里大概是这样得</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;publish&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;provider&quot;</span><span class="token operator">:</span> <span class="token string">&quot;generic&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;electron-vue-admin&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;appId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;org.simulatedgreg.electron-vue&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;directories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;dist/electron/**/*&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;dmg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;contents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">410</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Applications&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;mac&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build/icons/icon.icns&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;win&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build/icons/icon.ico&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nsis&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;arch&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;x64&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;ia32&quot;</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build/icons&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在win对象中，当前分支代码均剔除了arch对象，若您需要一次打包双位安装版，请自行添加。</p></div><h2 id="发布时-减少打包后文件大小"><a class="header-anchor" href="#发布时-减少打包后文件大小">#</a> 发布时，减少打包后文件大小</h2><p>发布时您可能已经注意到安装包大小为40 - ∞ MB 因受限于chromium，安装包无法压缩到30M以下；所以安装包在30-50MB大小请勿惊慌，这是正常大小。</p><p>而包大小在builder打包以后仍然在70-100MB并且页面和功能实际上没有那么多时，此时您需要注意：</p><ul><li>依赖是否都在<code>package.json</code>的<code>dependencies</code>对象中，如果是，请移除所有非runtime的依赖，builder会将<code>dependencies</code>对象中的所有依赖及其附属依赖全部打包起来，这就造成了明明没有写多少代码，却将整个node_module打包进来，软件本身无缘无故增加了几百兆。</li><li>在builder配置文件中我设置了win默认打包出32位和64位的集合包，这也会造成软件打包出来默认就100M了因为是一个二合一的安装包(新版本已经去除这个设置) 若不想升级和自己去除的话，找到builder配置的<code>win -&gt; target</code>删除arch对象即可，去除以后默认运行build命令时，则会只打包当前打包机的操作系统位数包。</li><li>一些不需要立刻用到的资源可以放到服务器上，等到用户需要使用时再进行按需下载，比如：字体文件，一些不是很急用的图片，音频文件；或是使用nsis编写在线安装程序，下载以后再进行安装对用户进行一些善意的欺诈行为是允许的。</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>介于webpack的打包，其实在渲染和主进程中只要没有引用到有关于node的模块其实是都可以不放在<code>dependencies</code>对象中的，因为webpack会正常打包所有你需要的代码进编译后的代码中，而一些node模块则无法被处理，这也是强调用到的node模块需要放在<code>dependencies</code>对象中的理由；规范使用<code>package.json</code>中的<code>devDependencies</code>和<code>dependencies</code>对减少包文件大小很有利。</p></div>',18),e={render:function(n,s){return t}}}}]);