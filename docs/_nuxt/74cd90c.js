(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{214:function(t,e,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("37b4a59a",content,!0,{sourceMap:!1})},231:function(t,e,r){"use strict";var o={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Haruaki's Portfolio",sheet:!1,nav_items:[{icon:"mdi-apps",title:"Portfolio Design",to:"/portfolio_design"}],share_tiles:[{icon:"mdi-twitter",title:"tweet",to:"/"}]}}},n=r(78),l=r(107),c=r.n(l),v=r(345),d=r(352),f=r(165),_=r(350),h=r(353),m=r(354),V=r(346),x=r(166),w=r(167),k=r(103),y=r(168),S=r(169),A=r(86),D=r(347),N=r(351),C=r(348),F=r(349),L=r(227),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-main",[r("v-container",{staticClass:"pa-0"},[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))]),t._v(" "),r("div",{staticClass:"text-center"},[r("v-bottom-sheet",{scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"cone"}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}]),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[t._v(" "),r("v-list",[r("v-subheader",[t._v("Share")]),t._v(" "),t._l(t.share_tiles,(function(e){return r("v-list-item",{key:e.title,attrs:{to:e.to},on:{click:function(e){t.sheet=!1}}},[r("v-list-item-avatar",[r("v-avatar",{attrs:{size:"32px",tile:""}},[r("v-icon",[t._v(t._s(e.icon))])],1)],1),t._v(" "),r("v-list-item-title",[t._v(t._s(e.title))])],1)}))],2)],1)],1)])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VAvatar:f.a,VBottomSheet:_.a,VBtn:h.a,VContainer:m.a,VFooter:V.a,VIcon:x.a,VList:w.a,VListItem:k.a,VListItemAction:y.a,VListItemAvatar:S.a,VListItemTitle:A.a,VMain:D.a,VNavigationDrawer:N.a,VSpacer:C.a,VSubheader:F.a,VToolbarTitle:L.a})},238:function(t,e,r){r(239),t.exports=r(240)},265:function(t,e,r){"use strict";r(214)},266:function(t,e,r){var o=r(11)(!1);o.push([t.i,"h1[data-v-15f1d07f]{font-size:20px}",""]),t.exports=o},273:function(t,e,r){var content=r(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e622d370",content,!0,{sourceMap:!1})},274:function(t,e,r){var o=r(11)(!1);o.push([t.i,'li,ol,ul{list-style:none}ol,ul{padding-left:1.5em!important}*{font-family:"Saira","Noto Sans JP",sans-serif}p{margin-top:0;margin-bottom:0;margin:0!important}',""]),t.exports=o},71:function(t,e,r){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(265),r(78)),l=r(107),c=r.n(l),v=r(345),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"15f1d07f",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[238,24,4,25]]]);