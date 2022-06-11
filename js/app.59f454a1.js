(function(){"use strict";var t={262:function(t,e,o){var s=o(144),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("nav",{on:{click:function(e){return t.setNavigation()}}},[t.navigation?o("router-link",{attrs:{to:"/"}},[o("div",{staticClass:"icon"},[o("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})])])]):t._e(),t.navigation?t._e():o("router-link",{attrs:{to:"/likedquotes"}},[o("div",{staticClass:"icon"},[o("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}}),o("path",{attrs:{"fill-rule":"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clip-rule":"evenodd"}})])])])],1),o("router-view")],1)},a=[],i={name:"App",methods:{setNavigation(){this.$store.commit("navigation")}},computed:{navigation(){return this.$store.state.navigation}}},r=i,l=o(1),u=(0,l.Z)(r,n,a,!1,null,null,null),c=u.exports,d=o(345),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"home"}},[t.loaded?o("main",[o("div",{staticClass:"box"},[o("span",{staticClass:"square squareTop"}),o("span",{staticClass:"circle circleTop"},[o("font-awesome-icon",{attrs:{icon:"fa-solid fa-quote-left"}})],1),o("p",[t._v(t._s(t.quote))]),o("span",{staticClass:"circle circleBottom"},[o("font-awesome-icon",{attrs:{icon:"fa-solid fa-quote-right"}})],1),o("span",{staticClass:"square squareBottom"})]),o("h1",[t._v(t._s(t.author))])]):t._e(),t.loaded?o("ControlButtons"):o("Loading")],1)},v=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"controlButtons"}},[o("div",{staticClass:"lefttArrow",on:{click:function(e){t.changeQuoteID(0),t.buttonClick()}}},[o("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])]),o("div",{staticClass:"heart",on:{click:function(e){return t.likeQuote()}}},[t.liked?t._e():o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}})]),t.liked?o("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"}})]):t._e()]),o("div",{staticClass:"rightArrow",on:{click:function(e){t.changeQuoteID(1),t.buttonClick()}}},[o("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])},p=[],m={data(){return{liked:!1}},name:"ControlButtons",methods:{changeQuoteID(t){this.$store.commit("changeQuoteID",t)},likeQuote(){this.$store.commit("likeQuotes",this.$store.state.quotes[this.$store.state.quoteID]),this.liked=!this.liked},buttonClick(){this.$store.state.likedQuotes.includes(this.$store.state.quotes[this.$store.state.quoteID])?this.liked=!0:this.liked=!1}}},w=m,g=(0,l.Z)(w,f,p,!1,null,"8be13d26",null),k=g.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"},[s("img",{attrs:{src:o(53),alt:""}})])}],_={name:"Loading"},Q=_,x=(0,l.Z)(Q,q,C,!1,null,"7cd94258",null),$=x.exports,b={name:"HomeView",components:{ControlButtons:k,Loading:$},data(){return{loaded:!1}},async created(){await this.$store.dispatch("GetQuotes"),this.loaded=!0},computed:{quote(){return this.$store.state.quotes[this.$store.state.quoteID].text},author(){return this.$store.state.quotes[this.$store.state.quoteID].author}}},I=b,D=(0,l.Z)(I,h,v,!1,null,"35b93835",null),Z=D.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"likedquotes"}},[o("main",[0==t.likedQuotes.length?o("h2",[t._v("No quotes in your list")]):t._e(),t._l(t.likedQuotes,(function(e){return o("div",{key:e.text,staticClass:"box"},[o("span",{staticClass:"square squareTop"}),o("p",[t._v(t._s(e.text))]),o("span",{staticClass:"delete",on:{click:function(o){return t.deleteQuoteFromList(e)}}},[o("div",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash-can"}})],1)]),o("span",{staticClass:"square squareBottom"}),o("h1",[t._v(t._s(e.author))])])}))],2)])},y=[],L={name:"LikedQuotes",computed:{likedQuotes(){return this.$store.state.likedQuotes}},methods:{deleteQuoteFromList(t){this.$store.commit("deleteQuote",t)}}},z=L,O=(0,l.Z)(z,B,y,!1,null,"dab774e6",null),j=O.exports;s.Z.use(d.Z);const E=[{path:"/",name:"home",component:Z},{path:"/likedquotes",name:"likedquotes",component:j}],H=new d.Z({mode:"history",base:"/quotes/",routes:E});var M=H,T=o(629),P=o(168);s.Z.use(T.ZP);const G=new P.ZP({storage:window.localStorage}),N="https://goquotes-api.herokuapp.com/api/v1/random?count=8261";var A=new T.ZP.Store({state:{quotes:[],quoteID:0,likedQuotes:[],like:!1,navigation:!1},mutations:{setQuotes(t,e){t.quotes=e},changeQuoteID(t,e){0==e?0==t.quoteID?t.quoteID=8260:t.quoteID--:8260==t.quoteID?t.quoteID=0:t.quoteID++},likeQuotes(t,e){t.likedQuotes.includes(e)?t.likedQuotes=t.likedQuotes.filter((t=>t!==e)):t.likedQuotes.push(e)},deleteQuote(t,e){t.likedQuotes=t.likedQuotes.filter((t=>t!==e))},navigation(t){t.navigation=!t.navigation}},actions:{async GetQuotes(){await fetch(N,{method:"GET"}).then((t=>t.json())).then((t=>this.commit("setQuotes",t.quotes)))}},plugins:[G.plugin]}),F=o(947),V=o(436),S=o(810);F.vI.add(V.mRB),s.Z.component("font-awesome-icon",S.GN),s.Z.config.productionTip=!1,new s.Z({router:M,store:A,render:function(t){return t(c)}}).$mount("#app")},53:function(t,e,o){t.exports=o.p+"img/loading.e4ec40ec.gif"}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,a){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],a=t[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(r=!1,a<i&&(i=a));if(r){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[s,n,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/quotes/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,i=s[0],r=s[1],l=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var c=l(o)}for(e&&e(s);u<i.length;u++)a=i[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},s=self["webpackChunkweatherapp"]=self["webpackChunkweatherapp"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(262)}));s=o.O(s)})();
//# sourceMappingURL=app.59f454a1.js.map