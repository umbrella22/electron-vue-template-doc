import{_ as s,c as n,o as a,a as l}from"./app.a89c1e9e.js";const p="/electron-vue-template-doc/images/img/maoboli.png",b=JSON.parse('{"title":"windows 中的毛玻璃窗口效果","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/frosted-glass-window.md","lastUpdated":1677753441000}'),o={name:"advanced/frosted-glass-window.md"},e=l(`<h1 id="windows-中的毛玻璃窗口效果" tabindex="-1">windows 中的毛玻璃窗口效果 <a class="header-anchor" href="#windows-中的毛玻璃窗口效果" aria-hidden="true">#</a></h1><p>在看到 macos 中的毛玻璃效果，我承认我酸了，但是 win10 中的设置却是半边毛玻璃效果的，这让我看到了一丝希望，毕竟是系统已经自带了这个 api，至于怎么调用，那就是我们自己的事情了。终于，在群友<code>℡〆啸、**、龍騰、◇雪晨</code>大佬的帮助下，成功让 electron 能够拥有此项功能</p><ul><li>首先，准备我们这次需要的工具包： <ul><li>ffi-napi</li><li>ref-napi</li><li>ref-struct-napi</li><li>windows 8 以上版本的操作系统</li></ul></li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ffi-napi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ref-napi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ref-struct-napi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ffi-napi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ref-napi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ref-struct-napi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>安装完成以后，模板将会自动执行 rebuild，剩下就是写代码了。当然你可能会遇到 rebuild 失败的情况，当发生 rebuild 失败时，你需要按照调用原生 dll 篇章来对你的环境进行检查。而且如果您没有使用 webpack 对主进程进行打包时（比如 rollup）您需要将这三个依赖添加到<a href="https://rollupjs.org/guide/zh/#rolluprollup" target="_blank" rel="noreferrer">设置外部引用(externals)</a>才可以正常工作</p></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 新建一个名为maobili的js，内容为</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * power by 猫猫头(864736317)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 都需要安装一次</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ffi </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ffi-napi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ref-napi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> struct </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ref-struct-napi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> INT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">types</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">int</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> AccentPolicy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">struct</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">AccentState</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> INT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">AccentFlags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> INT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">GradientColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> INT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">AnimationId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> INT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> WindowCompositionAttributeData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">struct</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Attribute</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> INT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">refType</span><span style="color:#A6ACCD;">(AccentPolicy)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">SizeOfData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> INT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> accent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AccentPolicy</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 颜色类型0-6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ACCENT_DISABLED=0，禁用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ACCENT_ENABLE_GRADIENT=1，不透明，可以设置颜色</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ACCENT_ENABLE_TRANSPARENT_GRADIENT=2，只透明，可以设置颜色</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ACCENT_ENABLE_BLUR_BEHIND=3，毛玻璃，无法设置颜色</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ACCENT_ENABLE_ACRYLIC_BLUR_BEHIND=4，毛玻璃可以设置颜色但是窗口不可移动并无法拖动大小</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ACCENT_ENABLE_HOST_BACKDROP=5， // 必须win10 1809以上才可以使用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ACCENT_INVALID_STATE= 6 非法6及其以上</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 但是这里其实通常是可以设置成3，然后通过css带上rgba通道来实现着色效果，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 唯一的区别就是，它的模糊程度不如4</span></span>
<span class="line"><span style="color:#A6ACCD;">accent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AccentState </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 颜色值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 255&lt;&lt;0|1&lt;&lt;8|2&lt;&lt;16|100&lt;&lt;24</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 其中255 1 2 100为rgba值，0 8 16 24是固定</span></span>
<span class="line"><span style="color:#A6ACCD;">accent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">GradientColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">34</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">34</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">34</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> windowcompositon </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WindowCompositionAttributeData</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">windowcompositon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Attribute </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">windowcompositon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> accent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">windowcompositon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SizeOfData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> accent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">byteLength</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 传入参数，窗口句柄id和颜色设置参数</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user32 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> ffi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Library</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user32</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">SetWindowCompositionAttribute</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    INT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [INT</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">refType</span><span style="color:#A6ACCD;">(WindowCompositionAttributeData)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 导出</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">windowcompositon</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">user32</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在创建窗口的位置引入</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">user32</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">windowcompositon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">你自己存放上面js的位置/maoboli</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 同时记得开启窗体透明和无边框</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 需要注意的是 tempWindow 为您需要对其进行毛玻璃化的窗口实例</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tempWindow</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getNativeWindowHandle</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">user32</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SetWindowCompositionAttribute</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  handle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readInt32LE</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  windowcompositon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>如果一切顺利的话您将得到如下图的效果</p></blockquote><div style="display:flex;justify-content:center;"><img style="width:290px;" src="`+p+'"></div>',9),t=[e];function c(r,i,y,D,C,A){return a(),n("div",null,t)}const u=s(o,[["render",c]]);export{b as __pageData,u as default};
