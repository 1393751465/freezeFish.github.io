(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{249:function(a,e,t){},265:function(a,e,t){"use strict";t(249)},280:function(a,e,t){"use strict";t.r(e);const i={Email:"fa fa-envelope",GitHub:"fab fa-github",GitLab:"fab fa-gitlab",WeChat:"fab fa-weixin",QQ:"fab fa-qq",Weibo:"fab fa-weibo",Music:"fa fa-music",Twitter:"fab fa-twitter",Telegram:"fab fa-telegram",LinkedIn:"fab fa-linkedin",YouTube:"fab fa-youtube-square",Facebook:"fab fa-facebook-square",Instagram:"fab fa-instagram",CodePen:"fab fa-codepen",Medium:"fab fa-medium"};var s={props:{link:{type:String,required:!0},type:{type:String,required:!0,validator:a=>Object.keys(i).includes(a)},extraClass:{type:String}},computed:{iconClass(){return i[this.type]}}},n=(t(265),t(7)),f=Object(n.a)(s,(function(){var a=this._self._c;return a("li",[a("a",{class:this.extraClass,attrs:{href:this.link,title:this.type,target:"_blank",rel:"noopener noreferrer"}},[a("i",{staticClass:"fa-lg",class:this.iconClass}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v(this._s(this.type))])])])}),[],!1,null,null,null);e.default=f.exports}}]);