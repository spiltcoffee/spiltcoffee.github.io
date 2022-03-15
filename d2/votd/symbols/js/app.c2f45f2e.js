(function(){var e={5990:function(e,t,n){"use strict";var i=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"raid-logo.png",transition:"scale-transition",width:"40"}}),n("v-toolbar-title",[e._v(" "+e._s(e.$vuetify.breakpoint.xs?"VotD":"Vow of the Disciple")+" Symbol Helper ")])],1),n("v-spacer"),e.editing?e._e():n("v-btn",{attrs:{icon:""},on:{click:e.startEditing}},[n("v-icon",[e._v("mdi-pencil")])],1),e.editing?n("v-btn",{attrs:{icon:""},on:{click:e.resetEditing}},[n("v-icon",[e._v("mdi-reload")])],1):e._e(),e.editing?n("v-btn",{attrs:{icon:""},on:{click:e.acceptEditing}},[n("v-icon",[e._v("mdi-check")])],1):e._e(),e.editing?n("v-btn",{attrs:{icon:""},on:{click:e.cancelEditing}},[n("v-icon",[e._v("mdi-close")])],1):e._e()],1),n("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{nav:""}},[n("v-list-item",[n("v-list-item-title",[e._v(" VotD Symbol Helper ")])],1),n("v-divider"),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v(" Symbol Size ")]),n("v-slider",{attrs:{max:"400",min:"50","thumb-label":"",step:"5",dense:"","hide-details":""},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var n=t.value;return[e._v(" "+e._s(n)+"px ")]}}]),model:{value:e.symbolWidth,callback:function(t){e.symbolWidth=t},expression:"symbolWidth"}})],1)],1),n("v-divider"),n("v-list-item",[n("v-switch",{attrs:{label:"Use the Darkness"},model:{value:e.darkMode,callback:function(t){e.darkMode=t},expression:"darkMode"}})],1)],1)],1),n("v-main",[n("SymbolCollection",{attrs:{collection:e.editing?e.editingCollection:e.collection,width:e.width,editing:e.editing},on:{input:e.updateCollection}})],1),n("v-snackbar",{attrs:{timeout:"2000"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")]),n("v-dialog",{attrs:{persistent:"",width:"320"},model:{value:e.resetDialog,callback:function(t){e.resetDialog=t},expression:"resetDialog"}},[n("v-card",[n("v-card-title",[e._v(" Are you sure? ")]),n("v-card-text",[e._v(" This will discard all changes to symbol names. You cannot undo this action. ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red",text:""},on:{click:e.resetEditingAccept}},[e._v(" Yes, Reset ")]),n("v-btn",{attrs:{color:"blue"},on:{click:e.resetEditingCancel}},[e._v(" No, Keep ")])],1)],1)],1)],1)},o=[],a=n(655),l=n(3465),c=n.n(l),s=n(129),u=n.n(s),d=function(){function e(e,t){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"originalName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_customName",{enumerable:!0,configurable:!0,writable:!0,value:""}),this.id=e,this.originalName=t}return Object.defineProperty(e.prototype,"url",{get:function(){return"symbols/".concat(this.id,".png")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._customName||this.originalName},set:function(e){e===this.originalName?this._customName="":this._customName=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"customName",{get:function(){return this._customName},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clone",{enumerable:!1,configurable:!0,writable:!0,value:function(){return c()(this)}}),e}(),m=function(){function e(e){Object.defineProperty(this,"symbols",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.symbols=e}return Object.defineProperty(e.prototype,"clone",{enumerable:!1,configurable:!0,writable:!0,value:function(){return new e(this.symbols.map((function(e){return e.clone()})))}}),Object.defineProperty(e.prototype,"map",{enumerable:!1,configurable:!0,writable:!0,value:function(t){return new e(this.symbols.map(t))}}),Object.defineProperty(e,"stringify",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return u().stringify(e.symbols.reduce((function(e,t){var n;return(0,a.pi)((0,a.pi)({},e),t.customName?(n={},n[t.id]=t.customName,n):{})}),{}))}}),Object.defineProperty(e,"parse",{enumerable:!1,configurable:!0,writable:!0,value:function(t){var n=u().parse(t,{depth:0});return e.default().map((function(e){return n[e.id]&&(e.name=n[e.id]),e}))}}),Object.defineProperty(e,"default",{enumerable:!1,configurable:!0,writable:!0,value:function(){return new e([new d("ascendantplane","Ascendant Plane"),new d("blackgarden","Black Garden"),new d("blackheart","Black Heart"),new d("commune","Commune"),new d("darkness","Darkness"),new d("drink","Drink"),new d("earth","Earth"),new d("enter","Enter"),new d("fleet","Fleet"),new d("give","Give"),new d("grieve","Grieve"),new d("guardian","Guardian"),new d("hive","Hive"),new d("kill","Kill"),new d("light","Light"),new d("love","Love"),new d("pyramid","Pyramid"),new d("remember","Remember"),new d("savathun","Savathûn"),new d("scorn","Scorn"),new d("stop","Stop"),new d("tower","Tower"),new d("traveler","Traveler"),new d("witness","Witness"),new d("worm","Worm"),new d("worship","Worship")])}}),e}(),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"space-around"}},e._l(e.collection.symbols,(function(t){return n("v-col",{key:t.id,attrs:{cols:"auto"}},[n("SymbolCard",{attrs:{symbol:t,width:e.width,editing:e.editing},on:{input:e.updateSymbol}})],1)})),1)],1)},f=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{width:e.width}},[n("v-img",{attrs:{src:e.symbol.url,contain:"",transition:"scale-transition",width:e.width}}),e.editing?n("v-text-field",{staticClass:"mx-1 pb-2",attrs:{label:e.symbol.originalName,value:e.symbol.customName,"hide-details":""},on:{change:e.updateName}}):n("v-card-title",{staticClass:"symbol-title"},[e._v(e._s(e.symbol.name))])],1)},h=[],p=i.Z.extend({name:"SymbolCard",props:{symbol:{type:Object,required:!0},width:{type:Number},editing:{type:Boolean}},methods:{updateName:function(e){var t=this.symbol.clone();t.name=e,this.$emit("input",t)}}}),g=p,y=n(1001),w=n(3453),k=n.n(w),_=n(2026),S=n(5255),V=n(5288),Z=n(7604),C=(0,y.Z)(g,v,h,!1,null,"049cb925",null),O=C.exports;k()(C,{VCard:_.Z,VCardTitle:S.EB,VImg:V.Z,VTextField:Z.Z});var x=i.Z.extend({name:"SymbolCollection",components:{SymbolCard:O},props:{collection:{type:Object,required:!0},width:{type:Number},editing:{type:Boolean}},methods:{updateSymbol:function(e){var t=this.collection.map((function(t){return t.id===e.id?e:t}));this.$emit("input",t)}}}),N=x,j=n(7024),E=n(1819),T=n(7894),P=(0,y.Z)(N,b,f,!1,null,null,null),D=P.exports;k()(P,{VCol:j.Z,VContainer:E.Z,VRow:T.Z});var I=i.Z.extend({name:"App",components:{SymbolCollection:D},data:function(){return{collection:m["default"](),editingCollection:null,width:150,editing:!1,drawer:!1,resetDialog:!1,snackbar:!1,snackbarText:""}},mounted:function(){try{var e=localStorage.getItem("symbolWidth");e&&(this.width=JSON.parse(e))}catch(n){}if(console.log(location.hash),location.hash)try{var t=location.hash.replace(/^#/,"");this.collection=m.parse(t)}catch(i){location.hash=""}},computed:{darkMode:{get:function(){return this.$vuetify.theme.dark},set:function(e){this.$vuetify.theme.dark=e,localStorage.setItem("darkMode",JSON.stringify(e))}},symbolWidth:{get:function(){return this.width},set:function(e){this.width=e,localStorage.setItem("symbolWidth",JSON.stringify(e))}}},methods:{updateCollection:function(e){this.editingCollection=e},resetEditing:function(){this.resetDialog=!0},resetEditingAccept:function(){this.resetDialog=!1,this.collection=m["default"](),this.endEditing(),this.snackbarText="All Symbol Names Discarded",this.snackbar=!0},resetEditingCancel:function(){this.resetDialog=!1},startEditing:function(){this.snackbar=!1,this.editing=!0,this.editingCollection=this.collection.clone()},acceptEditing:function(){this.collection=this.editingCollection,this.endEditing(),this.snackbarText="Changes Saved",this.snackbar=!0},cancelEditing:function(){this.endEditing(),this.snackbarText="Changes Discarded",this.snackbar=!0},endEditing:function(){this.editing=!1,this.editingCollection=null,location.hash=m.stringify(this.collection)}}}),A=I,B=n(303),M=n(1466),W=n(5078),$=n(9787),L=n(9541),G=n(5596),H=n(4456),J=n(893),q=n(907),F=n(2967),R=n(4021),K=n(3724),Y=n(7330),z=n(6654),U=n(2515),Q=n(647),X=n(3845),ee=(0,y.Z)(A,r,o,!1,null,"7711713d",null),te=ee.exports;k()(ee,{VApp:B.Z,VAppBar:M.Z,VAppBarNavIcon:W.Z,VBtn:$.Z,VCard:_.Z,VCardActions:S.h7,VCardText:S.ZB,VCardTitle:S.EB,VDialog:L.Z,VDivider:G.Z,VIcon:H.Z,VImg:V.Z,VList:J.Z,VListItem:q.Z,VListItemContent:F.km,VListItemTitle:F.V9,VMain:R.Z,VNavigationDrawer:K.Z,VSlider:Y.Z,VSnackbar:z.Z,VSpacer:U.Z,VSwitch:Q.Z,VToolbarTitle:X.qW});var ne=n(6482);i.Z.use(ne.Z);var ie=!1;try{var re=localStorage.getItem("darkMode");re&&(ie=JSON.parse(re))}catch(ae){}var oe=new ne.Z({theme:{dark:ie}});i.Z.config.productionTip=!1,new i.Z({vuetify:oe,render:function(e){return e(te)}}).$mount("#app")},4654:function(){}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,loaded:!1,exports:{}};return e[i](o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,o){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(l=!1,o<a&&(a=o));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,o,a=i[0],l=i[1],c=i[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var u=c(n)}for(t&&t(i);s<a.length;s++)o=a[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},i=self["webpackChunkvotd_symbols"]=self["webpackChunkvotd_symbols"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5990)}));i=n.O(i)})();
//# sourceMappingURL=app.c2f45f2e.js.map