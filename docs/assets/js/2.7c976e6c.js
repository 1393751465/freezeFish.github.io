(window.webpackJsonp=window.webpackJsonp||[]).push([[2,9,10,17,19,20,21,22,23],{247:function(t,e,s){},248:function(t,e){t.exports=function(t){return null==t}},249:function(t,e,s){},250:function(t,e,s){},251:function(t,e,s){},252:function(t,e,s){},253:function(t,e,s){},254:function(t,e,s){},255:function(t,e,s){},256:function(t,e,s){},260:function(t,e,s){"use strict";s(247)},261:function(t,e,s){"use strict";s.r(e);var n=s(279),a=s(262),i=s(245);function r(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?r(t,e):"page"===e.type&&Object(i.e)(t,e.path))}var o={name:"SidebarLinks",components:{SidebarGroup:n.default,SidebarLink:a.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const n=e[s];if(r(t,n))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(i.e)(this.$route,t.regularPath)}}},l=s(7),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,n){return e("li",{key:n},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:n===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=c.exports},262:function(t,e,s){"use strict";s.r(e);var n=s(245);function a(t,e,s,n,a){const i={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}};return a>2&&(i.style={"padding-left":a+"rem"}),t("RouterLink",i,s)}function i(t,e,s,r,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(n.e)(r,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,s+"#"+e.slug,e.title,c,e.level-1),i(t,e.children,s,r,o,l+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:c,sidebarDepth:u}}){const h=Object(n.e)(r,c.path),d="auto"===c.type?h||c.children.some(t=>Object(n.e)(r,c.basePath+"#"+t.slug)):h,f="external"===c.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,c.path,c.title||c.path):a(t,c.path,c.title||c.path,d),p=[e.frontmatter.sidebarDepth,u,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),g=l.displayAllHeaders||o.displayAllHeaders;if("auto"===c.type)return[f,i(t,c.children,c.basePath,r,p)];if((d||g)&&c.headers&&!n.d.test(c.path)){return[f,i(t,Object(n.c)(c.headers),c.path,r,p)]}return f}},o=(s(260),s(7)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=l.exports},263:function(t,e,s){},265:function(t,e,s){"use strict";s(249)},266:function(t,e,s){},267:function(t,e,s){},268:function(t,e,s){"use strict";s(250)},269:function(t,e,s){"use strict";s(251)},270:function(t,e,s){},271:function(t,e,s){"use strict";s(252)},272:function(t,e,s){var n=s(12),a=s(4),i=s(11);t.exports=function(t){return"string"==typeof t||!a(t)&&i(t)&&"[object String]"==n(t)}},273:function(t,e,s){"use strict";s(253)},274:function(t,e,s){"use strict";s(254)},275:function(t,e,s){},276:function(t,e,s){"use strict";s(255)},277:function(t,e,s){"use strict";s(256)},278:function(t,e,s){},279:function(t,e,s){"use strict";s.r(e);var n=s(245),a={name:"SidebarGroup",components:{DropdownTransition:s(258).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(261).default},methods:{isActive:n.e}},i=(s(277),s(7)),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[t.item.icon?e("i",{class:t.item.icon}):e("i",{class:t.$page.frontmatter.icon}),t._v(" "),e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[t.item.icon?e("i",{class:t.item.icon}):e("i",{class:t.$page.frontmatter.icon}),t._v(" "),e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},280:function(t,e,s){"use strict";s.r(e);const n={Email:"fa fa-envelope",GitHub:"fab fa-github",GitLab:"fab fa-gitlab",WeChat:"fab fa-weixin",QQ:"fab fa-qq",Weibo:"fab fa-weibo",Music:"fa fa-music",Twitter:"fab fa-twitter",Telegram:"fab fa-telegram",LinkedIn:"fab fa-linkedin",YouTube:"fab fa-youtube-square",Facebook:"fab fa-facebook-square",Instagram:"fab fa-instagram",CodePen:"fab fa-codepen",Medium:"fab fa-medium"};var a={props:{link:{type:String,required:!0},type:{type:String,required:!0,validator:t=>Object.keys(n).includes(t)},extraClass:{type:String}},computed:{iconClass(){return n[this.type]}}},i=(s(265),s(7)),r=Object(i.a)(a,(function(){var t=this._self._c;return t("li",[t("a",{class:this.extraClass,attrs:{href:this.link,title:this.type,target:"_blank",rel:"noopener noreferrer"}},[t("i",{staticClass:"fa-lg",class:this.iconClass}),this._v(" "),t("span",{staticClass:"sr-only"},[this._v(this._s(this.type))])])])}),[],!1,null,null,null);e.default=r.exports},282:function(t,e,s){"use strict";s.r(e);var n={name:"ThemeSwitcher",data:()=>({isLight:"light"}),beforeMount(){let t=document.getElementsByTagName("html")[0];if(!window.localStorage)return console.log("The browser needs to support localstorage."),!1;var e=window.localStorage;if(!e.getItem("myth"))return window.localStorage.setItem("theme","light"),void t.setAttribute("data-theme","light");this.isLight=e.getItem("theme"),"light"===this.isLight?(this.isLight=!0,window.localStorage.setItem("theme","light"),t.setAttribute("data-theme","light"),this.$emit("themeMode","light")):(this.isLight=!1,window.localStorage.setItem("theme","dark"),t.setAttribute("data-theme","dark"),this.$emit("themeMode","dark"))},methods:{themeSwitch(){window.location,window.localStorage.setItem("myth","1"),this.isLight=!this.isLight;let t=document.getElementsByTagName("html")[0];this.isLight?(window.localStorage.setItem("theme","light"),t.setAttribute("data-theme","light"),this.$emit("themeMode","light")):(window.localStorage.setItem("theme","dark"),t.setAttribute("data-theme","dark"),this.$emit("themeMode","dark"))}}},a=(s(269),s(7)),i=Object(a.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"theme-switcher"},[t("a",{staticClass:"switch",class:{light:this.isLight,dark:!this.isLight},on:{click:this.themeSwitch}},[t("span",[this.isLight?t("i",{staticClass:"fa fa-sun",attrs:{"aria-hidden":"true"}}):t("i",{staticClass:"fa fa-moon",attrs:{"aria-hidden":"true"}})])])])}),[],!1,null,null,null);e.default=i.exports},283:function(t,e,s){"use strict";s.r(e);var n=s(248),a=s.n(n),i=s(245),r={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"最后更新时间"},editLink(){const t=this.$site.themeConfig.edit||{},e=this.$site.themeConfig.repo,s=t.docsPlatform||e.Platform,n=t.docsDir||"",i=t.docsBranch||"master",r=e.owner+"/"+(e.repositories||""),o=s+t.docsRepo||r;return(a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink)&&o&&this.$page.relativePath?this.createEditLink(e,o,n,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"编辑此页面"}},methods:{createEditLink(t,e,s,n,a){if(/bitbucket.org/.test(e)){return e.replace(i.a,"")+"/src"+`/${n}/`+(s?s.replace(i.a,"")+"/":"")+a+`?mode=edit&spa=0&at=${n}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(i.a,"")+"/-/edit"+`/${n}/`+(s?s.replace(i.a,"")+"/":"")+a}return(i.i.test(e)?e:t.platform+e).replace(i.a,"")+"/edit"+`/${n}/`+(s?s.replace(i.a,"")+"/":"")+a}}},o=(s(271),s(7)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-edit"},[t.editLink?e("span",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("span",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=l.exports},284:function(t,e,s){"use strict";s.r(e);s(94);var n=s(245),a=s(272),i=s.n(a),r=s(248),o=s.n(r),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return u(c.PREV,this)},next(){return u(c.NEXT,this)}}};const c={NEXT:{resolveLink:function(t,e){return h(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return h(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function u(t,{$themeConfig:e,$page:s,$route:a,$site:r,sidebarItems:l}){const{resolveLink:c,getThemeLinkConfig:u,getPageLinkConfig:h}=t,d=u(e),f=h(s),p=o()(f)?d:f;return!1===p?void 0:i()(p)?Object(n.k)(r.pages,p,a.path):c(s,l)}function h(t,e,s){const n=[];!function t(e,s){for(let n=0,a=e.length;n<a;n++)"group"===e[n].type?t(e[n].children||[],s):s.push(e[n])}(e,n);for(let e=0;e<n.length;e++){const a=n[e];if("page"===a.type&&a.path===decodeURIComponent(t.path))return n[e+s]}}var d=l,f=(s(273),s(7)),p=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=p.exports},285:function(t,e,s){"use strict";s.r(e);var n={computed:{footer(){return this.$themeConfig.footer},copyright(){return this.$themeConfig.footer.copyright}}},a=(s(274),s(7)),i=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-footer"},[e("ul",{staticClass:"inner"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.footer.licensedLink?e("li",[e("a",{attrs:{href:t.footer.licensedLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.footer.licensed))]),t._v(" Licensed\n    ")]):t._e(),t._v(" "),t.footer.createYear<(new Date).getFullYear()?e("li",[t._v("\n      © "+t._s(t.footer.createYear)+"-"+t._s((new Date).getFullYear())+"\n      "),t.footer.authorLink?e("a",{attrs:{href:t.footer.authorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.author)+" ")]):[t._v(" "+t._s(t.footer.author)+" ")]],2):t.footer.createYear?e("li",[t._v("\n      Copyright © "+t._s(t.footer.createYear)+"\n      "),t.footer.authorLink?e("a",{attrs:{href:t.footer.authorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.author)+" ")]):[t._v(" "+t._s(t.footer.author)+" ")]],2):t._e(),t._v(" "),t.footer.beianLink?e("li",[e("a",{attrs:{href:t.footer.beianLink,target:"_blank",rel:"noopener noreferrer"}},[t.footer.beianicon?e("img",{attrs:{src:t.footer.beianicon}}):t._e(),t._v("  "+t._s(t.footer.beian)+"\n      ")])]):t._e(),t._v(" "),t._l(t.copyright,(function(s){return e("li",{key:s.link},[s.link?e("a",{attrs:{href:s.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(s.text))]):[e("span",{domProps:{innerHTML:t._s(s.text)}},[t._v(t._s(s.text))])]],2)}))],2)])}),[function(){var t=this._self._c;return t("li",[this._v("Theme by "),t("a",{attrs:{href:"https://gitee.com/qcyblm/vuepress-theme-vpx",title:"本站主题",target:"_blank",rel:"noopener noreferrer"}},[this._v("VPX")])])},function(){var t=this._self._c;return t("li",[this._v("Powered by "),t("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[this._v("VuePress")])])}],!1,null,null,null);e.default=i.exports},286:function(t,e,s){"use strict";s.r(e);var n={name:"Ads",computed:{ads(){return this.$themeConfig.ads}}},a=(s(276),s(7)),i=Object(a.a)(n,(function(){var t=this._self._c;return t("a",{staticClass:"ads",attrs:{href:this.ads.link,target:"_blank",title:this.ads.desc,rel:"noopener sponsored"}},[t("img",{attrs:{src:this.ads.img,alt:this.ads.text,border:"0"}})])}),[],!1,null,null,null);e.default=i.exports},287:function(t,e,s){"use strict";s.r(e);s(268);var n=s(7),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=a.exports},288:function(t,e,s){"use strict";s(263)},290:function(t,e,s){"use strict";s(266)},291:function(t,e,s){"use strict";s(267)},292:function(t,e,s){"use strict";s(270)},293:function(t,e,s){"use strict";s(275)},294:function(t,e,s){"use strict";s(278)},299:function(t,e,s){"use strict";s.r(e);s(94);var n=s(97),a=s.n(n),i=(t,e,s=null)=>{let n=a()(e,"title","");return a()(e,"frontmatter.tags")&&(n+=" "+e.frontmatter.tags.join(" ")),s&&(n+=" "+s),r(t,n)};const r=(t,e)=>{const s=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp("[^\0-]"),a=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(n.test(t))return a.some(t=>e.toLowerCase().indexOf(t)>-1);{const n=t.endsWith(" ");return new RegExp(a.map((t,e)=>a.length!==e+1||n?`(?=.*\\b${s(t)}\\b)`:`(?=.*\\b${s(t)})`).join("")+".+","gi").test(e)}};var o={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,n=this.$localePath,a=[];for(let r=0;r<e.length&&!(a.length>=s);r++){const o=e[r];if(this.getPageLocalePath(o)===n&&this.isSearchable(o))if(i(t,o))a.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(a.length>=s);e++){const s=o.headers[e];s.title&&i(t,o,s.title)&&a.push(Object.assign({},o,{path:o.path+"#"+s.slug,header:s}))}}return a},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},l=(s(291),s(7)),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,n){return e("li",{key:n,staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,u=s(287),h=s(281),d=s(282);function f(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var p={name:"Navbar",components:{SidebarButton:u.default,NavLinks:h.default,SearchBox:c,AlgoliaSearchBox:{},ThemeSwitcher:d.default},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(f(this.$el,"paddingLeft"))+parseInt(f(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},g=(s(292),Object(l.a)(p,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name"},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("nav",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"}),t._v(" "),e("ThemeSwitcher")],1)],1)}),[],!1,null,null,null));e.default=g.exports},300:function(t,e,s){"use strict";s.r(e);var n=s(45),a=s.n(n),i={name:"BackToTop",props:{threshold:{type:Number,default:300}},data:()=>({scrollTop:null}),computed:{show(){return this.scrollTop>this.threshold}},mounted(){this.scrollTop=this.getScrollTop(),window.addEventListener("scroll",a()(()=>{this.scrollTop=this.getScrollTop()},100))},methods:{getScrollTop:()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,scrollToTop(){window.scrollTo({top:0,behavior:"smooth"}),this.scrollTop=0}}},r=(s(288),s(7)),o=Object(r.a)(i,(function(){var t=this._self._c;return t("transition",{attrs:{name:"fade"}},[this.show?t("i",{staticClass:"go-to-top fa fa-lg fa-arrow-up",attrs:{"aria-hidden":"true"},on:{click:this.scrollToTop}}):this._e()])}),[],!1,null,null,null);e.default=o.exports},302:function(t,e,s){"use strict";s.r(e);var n=s(257),a=s(280),i={name:"Home",components:{NavLink:n.default,SocialIcon:a.default},computed:{data(){return this.$page.frontmatter},tagline(){return this.data.tagline||this.$description||"欢迎来到你的 VuePress 网站"},footer(){return this.$themeConfig.footer},copyright(){return this.$themeConfig.footer.copyright}}},r=(s(290),s(7)),o=Object(r.a)(i,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero inner"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("h2",{staticClass:"tagline",domProps:{innerHTML:t._s(t.tagline)}}):t._e(),t._v(" "),t.data.action?e("ul",{staticClass:"action"},[t._l(t.data.action,(function(s){return[s.text&&s.link?e("li",{key:s.link},[e("a",{staticClass:"nav-link action-button",attrs:{href:s.link}},[s.icon?e("i",{class:s.icon}):t._e(),t._v("\n            "+t._s(s.text)+"\n          ")])]):t._e()]}))],2):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("article",{staticClass:"features inner"},t._l(t.data.features,(function(s,n){return e("section",{key:n,staticClass:"feature"},[s.title?[s.link?e("a",{attrs:{href:s.link}},[s.imgUrl?e("img",{attrs:{src:t.$withBase(s.imgUrl),alt:s.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.desc))])]):e("span",[s.imgUrl?e("img",{attrs:{src:t.$withBase(s.imgUrl),alt:s.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",{domProps:{innerHTML:t._s(s.desc)}},[t._v(t._s(s.desc))])])]:t._e()],2)})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-vpx-content custom inner"}),t._v(" "),t.$themeConfig.footer?e("footer",[t.data.footerWrap?e("div",{staticClass:"footer-links"},t._l(t.data.footerWrap,(function(s){return e("section",{key:s.title,staticClass:"wrap"},[e("h4",[s.icon?e("i",{staticClass:"fa-fw",class:s.icon}):t._e(),t._v(t._s(s.title))]),t._v(" "),e("ul",t._l(s.item,(function(s){return e("li",{key:s.text},[e("a",{attrs:{href:s.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(s.text))]),t._v(" "),s.desc?e("span",[t._v("- "+t._s(s.desc))]):t._e()])})),0)])})),0):t._e(),t._v(" "),e("div",{staticClass:"footer-copyright"},[t.data.socialIcons?e("p",{staticClass:"left-wrap"},[e("ul",t._l(t.data.socialIcons,(function(t){return e("SocialIcon",{key:t.link,staticClass:"social-icon",attrs:{type:t.type,link:t.link,"extra-class":"inverted"}})})),1)]):t._e(),t._v(" "),e("p",{staticClass:"right-wrap"},[e("ul",{staticClass:"copyright"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.footer.licensedLink?e("li",[e("a",{attrs:{href:t.footer.licensedLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.footer.licensed))]),t._v(" Licensed\n          ")]):t._e(),t._v(" "),t.footer.createYear<(new Date).getFullYear()?e("li",[t._v("\n            © "+t._s(t.footer.createYear)+"-"+t._s((new Date).getFullYear())+"\n            "),t.footer.authorLink?e("a",{attrs:{href:t.footer.authorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.author)+" ")]):[t._v(" "+t._s(t.footer.author)+" ")]],2):t.footer.createYear?e("li",[t._v("\n            Copyright © "+t._s(t.footer.createYear)+"\n            "),t.footer.authorLink?e("a",{attrs:{href:t.footer.authorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.author)+" ")]):[t._v(" "+t._s(t.footer.author)+" ")]],2):t._e(),t._v(" "),t.footer.beianLink?e("li",[e("a",{attrs:{href:t.footer.beianLink,target:"_blank",rel:"noopener noreferrer"}},[t.footer.beianicon?e("img",{attrs:{src:t.footer.beianicon}}):t._e(),t._v("  "+t._s(t.footer.beian)+"\n            ")])]):t._e(),t._v(" "),t._l(t.copyright,(function(s){return e("li",{key:s.link},[s.link?e("a",{attrs:{href:s.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(s.text))]):[e("span",{domProps:{innerHTML:t._s(s.text)}},[t._v(t._s(s.text))])]],2)}))],2)])])]):t._e()],1)}),[function(){var t=this._self._c;return t("li",[this._v("Theme by "),t("a",{attrs:{href:"https://gitee.com/qcyblm/vuepress-theme-vpx",title:"本站主题",target:"_blank",rel:"noopener noreferrer"}},[this._v("VPX")])])},function(){var t=this._self._c;return t("li",[this._v("Powered by "),t("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[this._v("VuePress")])])}],!1,null,null,null);e.default=o.exports},303:function(t,e,s){"use strict";s.r(e);var n=s(283),a=s(284),i=s(285),r={components:{PageEdit:n.default,PageNav:a.default,PageFooter:i.default},props:["sidebarItems"]},o=(s(293),s(7)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page"},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-vpx-content"}),t._v(" "),t.$themeConfig.lastUpdated||t.$themeConfig.editLinks?e("PageEdit"):t._e(),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t.$themeConfig.footer?e("PageFooter"):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=l.exports},304:function(t,e,s){"use strict";s.r(e);var n=s(286),a=s(261),i=s(281),r={name:"Sidebar",components:{Ads:n.default,SidebarLinks:a.default,NavLinks:i.default},props:["items"]},o=(s(294),s(7)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"sidebar"},[t.$themeConfig.ads?e("Ads"):t._e(),t._v(" "),e("NavLinks"),t._v(" "),t._t("top"),t._v(" "),e("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=l.exports},316:function(t,e,s){"use strict";s.r(e);var n=s(302),a=s(299),i=s(303),r=s(304),o=s(300),l=s(245),c={name:"Layout",components:{Home:n.default,Page:i.default,Sidebar:r.default,Navbar:a.default,BackToTop:o.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(l.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},u=s(7),h=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),!1!==t.$themeConfig.BackToTop?e("BackToTop"):t._e()],1)}),[],!1,null,null,null);e.default=h.exports}}]);