(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{171:function(t,e,r){"use strict";r(335),r(352);var o=r(1),n=r(78);o.a.use(n.a),e.a=new n.a({icons:{iconfont:["fa","md"]}})},213:function(t,e,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("37b4a59a",content,!0,{sourceMap:!1})},232:function(t,e,r){"use strict";var o={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Haruaki's Portfolio",sheet:!1,nav_items:[{icon:"mdi-apps",title:"Portfolio Design",to:"/portfolio_design"}],share_tiles:[{icon:"mdi-twitter",title:"tweet",to:"/portfolio_design"}]}}},n=r(79),l=r(107),c=r.n(l),v=r(370),f=r(377),d=r(163),_=r(375),h=r(378),m=r(379),w=r(371),V=r(164),x=r(165),k=r(104),y=r(166),S=r(167),A=r(88),D=r(372),N=r(376),C=r(373),F=r(374),L=r(228),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-main",[r("v-container",{staticClass:"pa-0"},[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))]),t._v(" "),r("div",{staticClass:"text-center"},[r("v-bottom-sheet",{scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"cone"}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}]),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[t._v(" "),r("v-list",[r("v-subheader",[t._v("Share")]),t._v(" "),t._l(t.share_tiles,(function(e){return r("v-list-item",{key:e.title,attrs:{to:e.to},on:{click:function(e){t.sheet=!1}}},[r("v-list-item-avatar",[r("v-avatar",{attrs:{size:"32px",tile:""}},[r("v-icon",[t._v(t._s(e.icon))])],1)],1),t._v(" "),r("v-list-item-title",[t._v(t._s(e.title))])],1)}))],2)],1)],1)])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:f.a,VAvatar:d.a,VBottomSheet:_.a,VBtn:h.a,VContainer:m.a,VFooter:w.a,VIcon:V.a,VList:x.a,VListItem:k.a,VListItemAction:y.a,VListItemAvatar:S.a,VListItemTitle:A.a,VMain:D.a,VNavigationDrawer:N.a,VSpacer:C.a,VSubheader:F.a,VToolbarTitle:L.a})},239:function(t,e,r){r(240),t.exports=r(241)},266:function(t,e,r){"use strict";r(213)},267:function(t,e,r){var o=r(11)(!1);o.push([t.i,"h1[data-v-15f1d07f]{font-size:20px}",""]),t.exports=o},274:function(t,e,r){var content=r(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e622d370",content,!0,{sourceMap:!1})},275:function(t,e,r){var o=r(11)(!1);o.push([t.i,'li,ol,ul{list-style:none}ol,ul{padding-left:0!important}*{font-family:"Saira","Noto Sans JP",sans-serif}p{margin:0}.v-stepper,.v-stepper__items,.v-stepper__wrapper{overflow:visible!important}',""]),t.exports=o},71:function(t,e,r){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(266),r(79)),l=r(107),c=r.n(l),v=r(370),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"15f1d07f",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[239,13,3,14]]]);