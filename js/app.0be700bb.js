(function(){"use strict";var e={7487:function(e,t,i){var r=i(9242),n=i(3396);function a(e,t){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}var o=i(89);const s={},c=(0,o.Z)(s,[["render",a]]);var l=c,u=i(2483);const d={class:"container"},p={class:"categories"},f={class:"recipes"};function g(e,t,i,r,a,o){const s=(0,n.up)("RecipeCategory"),c=(0,n.up)("RecipeCard"),l=(0,n.up)("LoadingCard");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.categories,(e=>((0,n.wg)(),(0,n.j4)(s,{onClick:t=>o.onCategoryClick(e),key:e.id,category:e},null,8,["onClick","category"])))),128))]),(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.recipes,((e,t)=>((0,n.wg)(),(0,n.j4)(c,{index:t,key:e.id,recipe:e},null,8,["index","recipe"])))),128)),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.loadingCards,(e=>((0,n.wg)(),(0,n.j4)(l,{key:e})))),128))])])}var v=i(7139);const h=e=>((0,n.dD)("data-v-34b55866"),e=e(),(0,n.Cn)(),e),m={class:"recipe-card"},b={class:"img"},y=["src"],C={class:"title"},w={class:"body"},L={class:"rating"},k={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},_=h((()=>(0,n._)("path",{d:"M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"},null,-1))),R=[_],j={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},O=h((()=>(0,n._)("path",{d:"M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"},null,-1))),x=[O],S=h((()=>(0,n._)("div",{class:"divider"},null,-1))),D={class:"price"},T=h((()=>(0,n._)("button",{class:"button"}," View ",-1)));function q(e,t,i,r,a,o){return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",b,[(0,n._)("img",{src:i.recipe.image},null,8,y)]),(0,n._)("div",C,[(0,n._)("p",null,(0,v.zw)(i.recipe.title),1)]),(0,n._)("div",w,[(0,n._)("div",L,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.maxStars,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[e<=i.recipe.rating?((0,n.wg)(),(0,n.iD)("svg",k,R)):(0,n.kq)("",!0),e>i.recipe.rating?((0,n.wg)(),(0,n.iD)("svg",j,x)):(0,n.kq)("",!0)])))),128))])]),S,(0,n._)("div",D,[(0,n._)("p",null,(0,v.zw)(i.recipe.price),1)])]),T])}var M={name:"RecipeCard",props:{recipe:{type:Object,required:!0}},data(){return{maxStars:5}}};const A=(0,o.Z)(M,[["render",q],["__scopeId","data-v-34b55866"]]);var E=A;const P={class:"recipe-category"};function z(e,t,i,r,a,o){return(0,n.wg)(),(0,n.iD)("div",P,[(0,n._)("p",null,(0,v.zw)(i.category.title),1)])}var B={name:"RecipeCategory",props:{category:{type:Object,required:!0}}};const K=(0,o.Z)(B,[["render",z]]);var Z=K;const H=e=>((0,n.dD)("data-v-cf5fc328"),e=e(),(0,n.Cn)(),e),I={class:"card is-loading"},Y=H((()=>(0,n._)("div",{class:"image"},null,-1))),N=H((()=>(0,n._)("div",{class:"content"},[(0,n._)("h2"),(0,n._)("p")],-1))),F=[Y,N];function U(e,t,i,r,a,o){return(0,n.wg)(),(0,n.iD)("div",I,F)}var V={};const G=(0,o.Z)(V,[["render",U],["__scopeId","data-v-cf5fc328"]]);var J=G,Q=i(6265),W=i.n(Q);const X=W().create({baseURL:"https://api.spoonacular.com",headers:{Accept:"application/json","Content-Type":"application/json"},params:{apiKey:"e56dcdaced554b68a0e534f9a3a4af07",number:15}});var $={getRecipes(e){return X.get(e)}},ee={name:"RecipeList",components:{RecipeCard:E,RecipeCategory:Z,LoadingCard:J},data(){return{loading:!1,totalRecords:0,offset:15,limit:6,recipes:[],categories:[{id:1,title:"Bread",alias:"bread"},{id:2,title:"Sauce",alias:"sauce"},{id:3,title:"Snack",alias:"snack"},{id:4,title:"Beverage",alias:"beverage"},{id:5,title:"Soup",alias:"soup"},{id:6,title:"Breakfast",alias:"breakfast"},{id:7,title:"Side dish",alias:"side dish"},{id:8,title:"Main course",alias:"main course"}]}},created(){this.loadRecords(),this.recipes=this.recipess},computed:{loadingCards(){return this.loading?4:0}},methods:{loadRecords(){this.loading=!0,$.getRecipes("/recipes/complexSearch?query=a&limitLicense=true").then((e=>{this.totalRecords=e.data.totalResults,this.recipes=e.data.results})).finally((()=>{this.scrollTrigger(),this.loading=!1}))},loadMoreRecords(){this.loading=!0,$.getRecipes("/recipes/complexSearch?query=a&limitLicense=true&offset="+this.offset).then((e=>{this.recipes.push(...e.data.results),this.offset+=15})).finally((()=>{this.loading=!1,this.scrollTrigger()}))},onCategoryClick(e){this.loading=!0,$.getRecipes("/recipes/complexSearch?query=&limitLicense=true&type="+e.alias).then((e=>{this.recipes=e.data.results,this.totalRecords=e.data.totalResults,this.offset=15})).finally((()=>{this.loading=!1}))},scrollTrigger(){const e=document.querySelectorAll(".recipe-card"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(this.offset-e.target.getAttribute("index")==this.limit&&this.loadMoreRecords(),t.unobserve(e.target),console.log(this.limit,e.target.getAttribute("index")))}),{threshold:1})}));e.forEach((e=>{t.observe(e)}))}}};const te=(0,o.Z)(ee,[["render",g]]);var ie=te;const re=[{path:"/",name:"home",component:ie},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,7381))}],ne=(0,u.p7)({history:(0,u.PO)(""),routes:re});var ae=ne;(0,r.ri)(l).use(ae).mount("#app")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,a){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,r){return i.f[r](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/about.34f9004c.js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="recipesapp:";i.l=function(r,n,a,o){if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var p=function(t,i){s.onerror=s.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(i)})),t)return t(i)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p=""}(),function(){var e={143:0};i.f.j=function(t,r){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(i,r){n=e[t]=[i,r]}));r.push(n[2]=a);var o=i.p+i.u(t),s=new Error,c=function(r){if(i.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}};i.l(o,c,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,o=r[0],s=r[1],c=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)var u=c(i)}for(t&&t(r);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},r=self["webpackChunkrecipesapp"]=self["webpackChunkrecipesapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(7487)}));r=i.O(r)})();
//# sourceMappingURL=app.0be700bb.js.map