import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.5bf30b3a.js";const m=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"project/index.md","filePath":"project/index.md","lastUpdated":1686747207000}'),l={name:"project/index.md"},p=e(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>两种 electron 自动更新，自定义头部等大家几乎经常用到的功能；相信在基础需求面前，本项目能够最大程度的帮助你</p><div class="warning custom-block"><p class="custom-block-title">提示</p><p>阅读本文档即默认您拥有前端以及 vue 基础知识，并拥有部分 node 基础知识。</p><p><strong>并确保您的 node 环境是大于或等于 18</strong></p></div><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">- 使用electron-updater进行更新检查</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- 下载文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- 全局快捷键注册以及监听</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- 内置express服务端</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">- 使用electron-updater进行更新检查</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- 下载文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- 全局快捷键注册以及监听</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- 内置express服务端</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="前序准备" tabindex="-1">前序准备 <a class="header-anchor" href="#前序准备" aria-label="Permalink to &quot;前序准备&quot;">​</a></h2><p>你需要在本地安装<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">node</a>和<a href="https://git-scm.com/" target="_blank" rel="noreferrer">git</a>。本项目技术栈基于<a href="http://es6.ruanyifeng.com/" target="_blank" rel="noreferrer">es6</a>、<a href="https://electronjs.org/" target="_blank" rel="noreferrer">electron</a>、<a href="https://cn.vuejs.org/index.html" target="_blank" rel="noreferrer">vue</a>、<a href="https://vuex.vuejs.org/zh/guide/" target="_blank" rel="noreferrer">vuex</a>、<a href="https://router.vuejs.org/zh/" target="_blank" rel="noreferrer">vue-router</a>、<a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios</a>以及<a href="https://element.eleme.io/" target="_blank" rel="noreferrer">element-ui</a>，提前了解和学习这些知识会对使用本项目有很大的帮助。</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├── .electron-vue              # 构建相关</span></span>
<span class="line"><span style="color:#e1e4e8;">├── build                      # 项目打包目录</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │── icon                   # 图标</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── lib                    # 打包依赖（win）</span></span>
<span class="line"><span style="color:#e1e4e8;">├── config                     # 构建相关</span></span>
<span class="line"><span style="color:#e1e4e8;">├── dist                       # webpack临时工作目录</span></span>
<span class="line"><span style="color:#e1e4e8;">├── env                        # 环境相关</span></span>
<span class="line"><span style="color:#e1e4e8;">├─src                          # 源码目录</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─main                      # 主进程目录</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ├── config               # 主进程配置</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├── DisableButton.js# 按钮禁用</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├── StaticPath.js   # 静态路径</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├── const.js        # 静态变量</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├── hotPublish.js   # 热更新配置</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    └── menu.js         # 菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ├─server                 # 内置服务端文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├─index.js          # 内置服务端启动</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    └─server.js         # 内置服务端主体</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ├─services               # 主进程服务文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├── HotUpdater.js   # 热更新</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├── checkupdate.js  # electron-updater</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├── downloadFile.js # 下载文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    ├── ipcMain.js      # ipc通讯</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  │    └── windowManager.js# 窗口管理</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  └─index.js               # 主进程入口</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─renderer                  # 渲染进程文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─api                   # 请求以及数据库操作文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─assets                # 渲染进程主题 字体等静态资源</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─components            # 全局公用组件</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─icons                 # 项目所有 svg icons</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─layout                # 全局 layout</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─router                # 路由</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─store                 # 全局 store管理</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─styles                # 全局样式</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─tools                 # 全局特定工具</span></span>
<span class="line"><span style="color:#e1e4e8;">│      ├─utils                 # 全局公共方法</span></span>
<span class="line"><span style="color:#e1e4e8;">│      └─views                 # views 所有页面</span></span>
<span class="line"><span style="color:#e1e4e8;">├─static                       # 全局静态资源</span></span>
<span class="line"><span style="color:#e1e4e8;">├── tests                      # 测试</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .env.xxx                   # 环境变量配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .eslintrc.js               # eslint 配置项</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .babelrc                   # babel-loader 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .travis.yml                # 自动化CI配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├── vue.config.js              # vue-cli 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├── postcss.config.js          # postcss 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">└── package.json               # package.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├── .electron-vue              # 构建相关</span></span>
<span class="line"><span style="color:#24292e;">├── build                      # 项目打包目录</span></span>
<span class="line"><span style="color:#24292e;">│   │── icon                   # 图标</span></span>
<span class="line"><span style="color:#24292e;">│   └── lib                    # 打包依赖（win）</span></span>
<span class="line"><span style="color:#24292e;">├── config                     # 构建相关</span></span>
<span class="line"><span style="color:#24292e;">├── dist                       # webpack临时工作目录</span></span>
<span class="line"><span style="color:#24292e;">├── env                        # 环境相关</span></span>
<span class="line"><span style="color:#24292e;">├─src                          # 源码目录</span></span>
<span class="line"><span style="color:#24292e;">│  ├─main                      # 主进程目录</span></span>
<span class="line"><span style="color:#24292e;">│  │  ├── config               # 主进程配置</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├── DisableButton.js# 按钮禁用</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├── StaticPath.js   # 静态路径</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├── const.js        # 静态变量</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├── hotPublish.js   # 热更新配置</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    └── menu.js         # 菜单</span></span>
<span class="line"><span style="color:#24292e;">│  │  ├─server                 # 内置服务端文件夹</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├─index.js          # 内置服务端启动</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    └─server.js         # 内置服务端主体</span></span>
<span class="line"><span style="color:#24292e;">│  │  ├─services               # 主进程服务文件夹</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├── HotUpdater.js   # 热更新</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├── checkupdate.js  # electron-updater</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├── downloadFile.js # 下载文件</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    ├── ipcMain.js      # ipc通讯</span></span>
<span class="line"><span style="color:#24292e;">│  │  │    └── windowManager.js# 窗口管理</span></span>
<span class="line"><span style="color:#24292e;">│  │  └─index.js               # 主进程入口</span></span>
<span class="line"><span style="color:#24292e;">│  └─renderer                  # 渲染进程文件夹</span></span>
<span class="line"><span style="color:#24292e;">│      ├─api                   # 请求以及数据库操作文件夹</span></span>
<span class="line"><span style="color:#24292e;">│      ├─assets                # 渲染进程主题 字体等静态资源</span></span>
<span class="line"><span style="color:#24292e;">│      ├─components            # 全局公用组件</span></span>
<span class="line"><span style="color:#24292e;">│      ├─icons                 # 项目所有 svg icons</span></span>
<span class="line"><span style="color:#24292e;">│      ├─layout                # 全局 layout</span></span>
<span class="line"><span style="color:#24292e;">│      ├─router                # 路由</span></span>
<span class="line"><span style="color:#24292e;">│      ├─store                 # 全局 store管理</span></span>
<span class="line"><span style="color:#24292e;">│      ├─styles                # 全局样式</span></span>
<span class="line"><span style="color:#24292e;">│      ├─tools                 # 全局特定工具</span></span>
<span class="line"><span style="color:#24292e;">│      ├─utils                 # 全局公共方法</span></span>
<span class="line"><span style="color:#24292e;">│      └─views                 # views 所有页面</span></span>
<span class="line"><span style="color:#24292e;">├─static                       # 全局静态资源</span></span>
<span class="line"><span style="color:#24292e;">├── tests                      # 测试</span></span>
<span class="line"><span style="color:#24292e;">├── .env.xxx                   # 环境变量配置</span></span>
<span class="line"><span style="color:#24292e;">├── .eslintrc.js               # eslint 配置项</span></span>
<span class="line"><span style="color:#24292e;">├── .babelrc                   # babel-loader 配置</span></span>
<span class="line"><span style="color:#24292e;">├── .travis.yml                # 自动化CI配置</span></span>
<span class="line"><span style="color:#24292e;">├── vue.config.js              # vue-cli 配置</span></span>
<span class="line"><span style="color:#24292e;">├── postcss.config.js          # postcss 配置</span></span>
<span class="line"><span style="color:#24292e;">└── package.json               # package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">注意</p><p>请不要随意替换包管理器，本项目仅使用 yarn 进行包管理</p><p>请不要自作主张在安装依赖的时候添加<code>-g</code>参数！除非您很清楚您正在做什么！</p></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># clone项目 webpack+vue2.7</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/umbrella22/electron-vue-template.git</span></span>
<span class="line"><span style="color:#6A737D;"># clone项目 vite+vue3</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/umbrella22/electron-vite-template.git</span></span>
<span class="line"><span style="color:#6A737D;"># 进入项目目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">electron-vue-template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">electron-vite-template</span></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span></span>
<span class="line"><span style="color:#6A737D;"># 该命令会打开npm的配置文件，请在空白处添加</span></span>
<span class="line"><span style="color:#E1E4E8;">electron_builder_binaries_mirror</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">https://npmmirror.com/mirrors/electron-builder-binaries/</span></span>
<span class="line"><span style="color:#E1E4E8;">electron_mirror</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">https://cdn.npmmirror.com/binaries/electron/</span></span>
<span class="line"><span style="color:#E1E4E8;">registry</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">https://registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#6A737D;"># 然后关闭该窗口，重启命令行.</span></span>
<span class="line"><span style="color:#6A737D;"># 使用yarn安装</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动之后，会在9080端口监听</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># build命令在不同系统环境中，需要的的不一样，需要自己根据自身环境进行配置</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># clone项目 webpack+vue2.7</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/umbrella22/electron-vue-template.git</span></span>
<span class="line"><span style="color:#6A737D;"># clone项目 vite+vue3</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/umbrella22/electron-vite-template.git</span></span>
<span class="line"><span style="color:#6A737D;"># 进入项目目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">electron-vue-template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">electron-vite-template</span></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span></span>
<span class="line"><span style="color:#6A737D;"># 该命令会打开npm的配置文件，请在空白处添加</span></span>
<span class="line"><span style="color:#24292E;">electron_builder_binaries_mirror</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">https://npmmirror.com/mirrors/electron-builder-binaries/</span></span>
<span class="line"><span style="color:#24292E;">electron_mirror</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">https://cdn.npmmirror.com/binaries/electron/</span></span>
<span class="line"><span style="color:#24292E;">registry</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">https://registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#6A737D;"># 然后关闭该窗口，重启命令行.</span></span>
<span class="line"><span style="color:#6A737D;"># 使用yarn安装</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动之后，会在9080端口监听</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># build命令在不同系统环境中，需要的的不一样，需要自己根据自身环境进行配置</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">注意</p><p>强烈建议不要直接使用 cnpm 进行安装，由于软链接带来的玄学 bug 是真的没法说，最好就是用 nrm 切换一下 registry，或者使用 yarn，是最好的了。</p><p>一般遇到<code>Electron failed to install correctly，please delete node_moules/electron and try installing again</code>这种错误时，就是 electron 本体没有下载成功，删除 node_module 文件夹，并按照上面的设置进行 electron 镜像地址设置之后就好了</p></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里的环境指的是 windows 下，如果您是 MacOS 或者是 linux 的话，您可能需要熟悉 vim 的操作。</p></div><p>在启动完成之后，就会自动打开程序界面了；接下来你就可以针对你自己的需求进行代码的修改和业务开发</p><h2 id="全局文件夹" tabindex="-1">全局文件夹 <a class="header-anchor" href="#全局文件夹" aria-label="Permalink to &quot;全局文件夹&quot;">​</a></h2><p>在本项目中内置了两个全局文件夹：</p><ul><li><code>__static</code>：在被打包成 asar 之后，依旧能够提供虚拟路径，一般满足静态文件访问。</li><li><code>__lib</code>：(渲染进程)无论是否启用 asar，均提供一个实体的绝对路径，可在 config 文件夹中设置，详情请查看调用 dll 章节。</li><li><code>p<wbr>rocess.env.libPath</code>：(主进程)无论是否启用 asar，均提供一个实体的绝对路径，可在 config 文件夹中设置，详情请查看调用 dll 章节。</li></ul><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><ul><li><code>p<wbr>rocess.env.TERGET_ENV</code>：仅工具标识是否清空产物文件夹</li></ul><h2 id="env-文件夹" tabindex="-1">env 文件夹 <a class="header-anchor" href="#env-文件夹" aria-label="Permalink to &quot;env 文件夹&quot;">​</a></h2><ul><li>该文件夹内存放的文件格式为 <code>.env</code>，已经预设了两个文件，<code>.env</code>和<code>sit.env</code><ul><li><code>.env</code>：它通常是在你没有指定 <code>-m</code>命令时，它会读取这个文件，并且将该文件内的所有设置项以 key:value 的形式挂载到<code>p<wbr>rocess.env</code>中（渲染进程）（主进程里为<code>p<wbr>rocess.env.config</code>），您可以通过直接访问<code>p<wbr>rocess.env.xxx</code>（其中 xxx 为您自行设置的变量）</li><li><code>sit.env</code>：该文件为预设测试环境</li></ul></li><li><code>.env</code>文件通常以<code>环境名.env</code>的组合存在于<code>env</code>文件夹内，在使用时，您只需要在命令后添加 <code>-m</code>以及对应的环境名称，即可访问到。 <ul><li>例如预发布环境，我们规定为 release，那么文件通常设置为 <code>release.env</code> 在使用时，<code>-m</code> 后则跟随为 release.</li></ul></li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p><strong>这将展示在默认和指定了-m 参数情况下的状态</strong></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">scripts:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cross-env TERGET_ENV=development node .electron-vue/dev-runner.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dev:sit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cross-env TERGET_ENV=development node .electron-vue/dev-runner.js -m sit&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dev:release&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cross-env TERGET_ENV=development node .electron-vue/dev-runner.js -m release&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cross-env BUILD_TARGET=clean node .electron-vue/build.js  &amp;&amp; electron-builder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;build:sit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cross-env BUILD_TARGET=clean node .electron-vue/build.js -m sit  &amp;&amp; electron-builder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;build:release&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cross-env BUILD_TARGET=clean node .electron-vue/build.js -m release  &amp;&amp; electron-builder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">scripts:{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cross-env TERGET_ENV=development node .electron-vue/dev-runner.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dev:sit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cross-env TERGET_ENV=development node .electron-vue/dev-runner.js -m sit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dev:release&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cross-env TERGET_ENV=development node .electron-vue/dev-runner.js -m release&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cross-env BUILD_TARGET=clean node .electron-vue/build.js  &amp;&amp; electron-builder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;build:sit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cross-env BUILD_TARGET=clean node .electron-vue/build.js -m sit  &amp;&amp; electron-builder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;build:release&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cross-env BUILD_TARGET=clean node .electron-vue/build.js -m release  &amp;&amp; electron-builder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="vue-生态圈" tabindex="-1">Vue 生态圈 <a class="header-anchor" href="#vue-生态圈" aria-label="Permalink to &quot;Vue 生态圈&quot;">​</a></h2><p><strong>首先了解这些 vue 生态圈的东西，会对你上手本项目有很大的帮助。</strong></p><ol><li><p><a href="https://router.vuejs.org/" target="_blank" rel="noreferrer">Vue Router</a> 是 vue 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。</p></li><li><p><a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">pinia</a> 符合直觉的 Vue.js 状态管理库,类型安全、可扩展性以及模块化设计。</p></li><li><p><a href="https://vue-loader.vuejs.org" target="_blank" rel="noreferrer">Vue Loader</a> 是为 vue 文件定制的一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。它能在开发过程中使用热重载来保持状态，为每个组件模拟出 scoped CSS 等等功能。不过大部分情况下你不需要对它直接进行配置，脚手架都帮你封装好了。</p></li><li><p><a href="https://github.com/vuejs/vue-devtools" target="_blank" rel="noreferrer">Vue Dev-Tools</a> Vue 在浏览器下的调试工具。写 vue 必备的一个浏览器插件，能大大的提高你调试的效率。</p></li><li><p><a href="https://github.com/vuejs/vetur" target="_blank" rel="noreferrer">Vetur</a> 是 VS Code 的插件. 如果你使用 VS Code 来写 vue 的话，这个插件是必不可少的。</p></li><li><p><a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noreferrer">volar</a> 是 VS Code 的插件. 如果你使用 VS Code 来写 vue3 的话，这个插件是必不可少的。</p></li></ol>`,28),o=[p];function r(c,t,i,u,y,b){return n(),a("div",null,o)}const E=s(l,[["render",r]]);export{m as __pageData,E as default};
