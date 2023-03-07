import{_ as e,c as t,o as a,a as o}from"./app.d623167a.js";const m=JSON.parse('{"title":"路由懒加载","description":"","frontmatter":{},"headers":[],"relativePath":"essentials/RouteLazyLoading.md","lastUpdated":1678178891000}'),r={name:"essentials/RouteLazyLoading.md"},s=o('<h1 id="路由懒加载" tabindex="-1">路由懒加载 <a class="header-anchor" href="#路由懒加载" aria-hidden="true">#</a></h1><blockquote><p>当打包构建应用时，js 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。<a href="https://router.vuejs.org/zh/guide/advanced/lazy-loading.html" target="_blank" rel="noreferrer">vue-router 官网</a></p></blockquote><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如何实现路由的懒加载在这里不做过多的阐述，在 vue-router 的官方文档中有着非常完美的解释，在这里我们需要说明的是为何在 electron 中要去实现路由懒加载</p></div><p>首先是为了内存和首屏加载速度问题，即使是在 electron 中，资源都在用户电脑中并且不用考虑网络传输带来的等待时间，几乎算是非常理想的状态，但是我们需要考虑的是，用户的内存，硬盘读取速度，以及 cpu 的速度，如果您的页面非常多，这将导致 js 包非常大，然后在用户的计算机硬件又不是非常理想的状态下，可能会导致首屏加载非常缓慢，即使你添加了等待页面，大于 3 秒的加载时间也会让用户烦躁不已，所以还是建议启用路由懒加载，这样用户不仅仅只是在首屏等待时间会降低，也有利于 electron 回收内存，让内存占用不再那么浮夸。</p>',4),c=[s];function n(d,_,i,l,p,u){return a(),t("div",null,c)}const f=e(r,[["render",n]]);export{m as __pageData,f as default};