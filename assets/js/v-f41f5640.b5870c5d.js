(self.webpackChunkelectron_vue_template_doc=self.webpackChunkelectron_vue_template_doc||[]).push([[31],{6917:(n,l,e)=>{"use strict";e.r(l),e.d(l,{data:()=>s});const s={key:"v-f41f5640",path:"/Overview/advanced/ffi.html",title:"调用 c++原生 dll",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"Overview/advanced/ffi.md",git:{updatedTime:161485822e4,contributors:[{name:"张恒",email:"syl1998@hotmail.com",commits:3},{name:"umbrella22",email:"1035765115@qq.com",commits:2},{name:"umbrella22",email:"syl1998@hotmail.com",commits:1}]}}},6292:(n,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>h});var s=e(6252);const a=(0,s.Wm)("h1",{id:"调用-c-原生-dll"},[(0,s.Wm)("a",{class:"header-anchor",href:"#调用-c-原生-dll"},"#"),(0,s.Uk)(" 调用 c++原生 dll")],-1),i=(0,s.Wm)("p",null,"通常在很多时候使用 electron 中，我们不止只是使用了前端的一些东西，相对的包括我们可能有些代码不想使用 js 来处理，等种种原因，需要我们去调用 c++写的 dll 库。",-1),c={class:"custom-container warning"},o=(0,s.Wm)("p",{class:"custom-container-title"},"注意",-1),r=(0,s.Wm)("p",null,"安装前，请自行检查您有没有安装以下可能需要用到的依赖：",-1),t=(0,s.Wm)("li",null,[(0,s.Uk)("全平台 "),(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,"Python v2.7, v3.5, v3.6, v3.7, or v3.8 (并设置了环境变量)")])],-1),p=(0,s.Uk)("windows 平台 "),d={href:"https://www.npmjs.com/package/windows-build-tools/v/2.0.0",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("windows-build-tools"),m=(0,s.Wm)("li",null,[(0,s.Uk)("macOS "),(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,"Xcode")])],-1),b=(0,s.Uk)("linux or unix "),v=(0,s.Wm)("li",null,"make",-1),k=(0,s.Uk)("c/c++编译器工具，例如"),f={href:"https://gcc.gnu.org/",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Uk)("GCC"),W=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> ffi-napi\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>首先安装 ffi-napi，由于原本的 node-ffi 已经一年没有更新了，导致无法和 electron 的新版本兼容，让很多人在使用它的时候，都只能被迫降级到 4.x，但是又不能享受新版 electron 带来的便利，这个库完美的解决了我们的问题。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当前项目中并没有附加该依赖，鉴于并不是所有人都会有这个需求。下面内容中将会出现修改 webpack 配置文件以及 package.json 文件来实现正常工作。</p></div><ul><li><p>如何使用？</p><ul><li>首先确保您已经生成正确的 dll 文件；并且已经安装了 ffi-napi。</li><li>在 static 同级目录内创建一个文件夹，名字自取；然后修改<code>config/index.js</code>中的<code>DllFolder</code>对象，它接受字符串类型，是你刚刚创建的文件夹名称。</li><li>然后放置你的 dll 文件到你新创建的文件夹内重启一次，然后就可以按照一下方法进行调用了</li><li>打包前，请去 package.json 文件找到<code>extraFiles</code>数组，并且在内填入你刚刚创建的文件夹名称，同样也是字符串</li></ul><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 调用\nimport ffi from &quot;ffi-napi&quot;\n\nconst dll = ffi.Library(`${__lib}/文件名.后缀`, {\n      // 这里是c++中对js暴漏的方法，举个例子：\n      // 这里是c++中暴漏了一个名为test的方法，它接受两个int类型，返回结果也是int类型\n      &#39;test&#39;:[&#39;int&#39;[&#39;int&#39;,&#39;int&#39;]]\n    })\n    // 假设该c++中的方法是相加并抛出结果，那么这里得出的结果应该是4\n    dll.test(1,3)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>此处假设我 dll 放置目录的名称叫 lib</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;extraFiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;lib&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>__lib</code>是不可被修改，因为本框架已经做了预先处理，所有的<code>__lib</code>均指向你在<code>config/index.js</code>文件中设置的<code>DllFolder</code>值。<code>记住它接受一个字符串</code></p></div><div class="custom-container danger"><p class="custom-container-title">警告</p><p>当您觉得<code>_lib</code>作为 dll 的全局文件夹变量不太好时，您可以去<code>.electron-vue/webpack.renderer.config.js</code>和<code>src/index.ejs</code>中搜索<code>__lib</code>关键词，并将其修改成你所喜欢的即可。但是这是极度不建议的，因为您并不知道这么做所带来的后果，他可能包括但不限于：打包之后 dll 调用失败，dll 位置丢失，dev 无法启动等一系列连锁反应</p></div></li><li><p>但开发途中是绝对不会这么一帆风顺的，就我在摸索的时候，遇到的问题总结如下：</p><ul><li>Q：控制台报错：<code>Uncaught Error: Dynamic Linking Error: Win32 error 126</code></li><li>A：该报错是由于 dll 文件位置不对引起的，文件路径是否和上面一样，否则您需要使用绝对路径。</li><li>Q：控制台报错：<code>Uncaught Error: Dynamic Linking Error: Win32 error 193</code></li><li>A：dll 位数不对导致的，32 位 dll 只能给 32 位程序使用，64 位只能给 64 位程序使用，二者不可混合使用。</li><li>Q：控制台报错：<code>Uncaught Error: Dynamic Linking Error: Win32 error 127</code></li><li>A：该报错是由于在 js 中声明了 c++中没有的方法导致的，请注意 c++中暴漏的函数名；或者是当前 dll 引用了其他资源文件它没有加载成功。</li><li>Q：控制台报错：<code>Uncaught Error: Dynamic Linking Error: Win32 error 1114</code></li><li>A：该报错是在打包时，dll 释放位置错误，导致程序去 c 盘查找后无果得到的 dll 丢失错误。（后面会谈这个打包之后的 dll 问题）</li><li>Q：控制台报错：<code>Uncaught (in promise) Error: \\\\?\\C:\\Users\\%userName%\\Desktop\\electron-vue-template\\node_modules\\ref-napi\\build\\Release\\binding.node is not a valid Win32 application. \\\\?\\C:\\Users\\%userName%\\Desktop\\electron-vue-template\\node_modules\\ref-napi\\build\\Release\\binding.node</code></li><li>A：这种错误通常出现在你打包过一次之后发生，此时你只需要去你的 node_modules/ffi-napi 文件夹内重新执行一次 npm install 或者 yarn install 即可解决。</li></ul></li></ul>',4),h={render:function(n,l){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[a,i,(0,s.Wm)("div",c,[o,r,(0,s.Wm)("ul",null,[t,(0,s.Wm)("li",null,[p,(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("a",d,[u,(0,s.Wm)(e)])])])]),m,(0,s.Wm)("li",null,[b,(0,s.Wm)("ul",null,[v,(0,s.Wm)("li",null,[k,(0,s.Wm)("a",f,[g,(0,s.Wm)(e)])])])])])]),W],64)}}}}]);