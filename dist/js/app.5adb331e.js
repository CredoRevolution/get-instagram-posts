(function(){"use strict";var t={2958:function(t,n,e){var s=e(6848),o=function(){var t=this,n=t._self._c;return n("div",{staticClass:"app",attrs:{id:"app"}},[t.authorised?n("div",{staticClass:"authorized"},[n("button",{staticClass:"get-posts-button",on:{click:function(n){return n.preventDefault(),t.getPosts.apply(null,arguments)}}},[t._v(" getPosts ")]),n("div",{staticClass:"inst-acc"},[n("p",[t._v(t._s(t.instAcc.accUsername))]),n("img",{staticStyle:{"border-radius":"50%"},attrs:{src:t.instAcc.accProfilePic,width:"200",height:"200"}})]),t.posts.length?n("div",{staticClass:"posts"},t._l(t.posts,(function(e){return n("div",{key:e.id,staticClass:"post"},[n("img",{attrs:{src:e.media_url,width:"200",height:"200"}}),n("p",[t._v(t._s(e.caption))])])})),0):t._e()]):n("button",{staticClass:"login-button",on:{click:function(n){return n.preventDefault(),t.login.apply(null,arguments)}}},[t._v(" login ")])])},a=[];let i=!1;const c=e(6425);var r={name:"App",data(){return{authorised:!1,posts:[],accessToken:"EAAVwTXWVWzsBOz4q4wovvmqD1ZCxVtZBBY6sHIffJklqP3JtinZACs0IOnDIFZAuZBA9BcvWvZAzCKeZBotSnduvCleWZAZAu2ZA0wDv2QmfbpL0puLops93Ttj6YCQH8orWgv3JaFOnorc59FArKzl2qXU21bRwXff1PR8NOUac0YWzm3NCWTs6k7Nlkaba3uhcNEaZAdtR4wUZAFZAo3uZAfeAZDZD",instAcc:{accId:"",accUsername:"",accProfilePic:""}}},methods:{login(){i?FB.login((t=>{console.log("FB.login",t),this.statusChangeCallback(t)}),{scope:"public_profile,instagram_basic"}):console.warn("FB.init() must be called before FB.login()")},statusChangeCallback(t){"connected"===t.status?(console.log("connected"),this.authorised=!0):"not_authorized"===t.status&&(console.log("not_authorized"),this.authorised=!1)},getPosts(){this.authorised?c.get(`https://graph.facebook.com/v19.0/me/accounts?fields=instagram_business_account{id,name,username,profile_picture_url}&access_token=${this.accessToken}`,{headers:{"Content-Type":"application/json"}}).then((t=>{this.instAcc.accId=t.data.data[0].instagram_business_account.id,this.instAcc.accUsername=t.data.data[0].instagram_business_account.username,this.instAcc.accProfilePic=t.data.data[0].instagram_business_account.profile_picture_url})).catch((t=>{console.error(t)})).then((()=>{c.get(`https://graph.facebook.com/v19.0/${this.instAcc.accId}/media?fields=media_url,caption&access_token=${this.accessToken}`,{headers:{"Content-Type":"application/json"}}).then((t=>{this.posts=t.data.data})).catch((t=>{console.error(t)}))})):console.warn("login() must be called before getPosts()")}},mounted(){window.fbAsyncInit=function(){FB.init({appId:"1530852871068475",cookie:!0,xfbml:!0,version:"v19.0"}),i=!0,FB.AppEvents.logPageView()},function(t,n,e){var s,o=t.getElementsByTagName(n)[0];t.getElementById(e)||(s=t.createElement(n),s.id=e,s.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(s,o))}(document,"script","facebook-jssdk")}},u=r,l=e(1656),f=(0,l.A)(u,o,a,!1,null,"ac442758",null),p=f.exports;s.Ay.config.productionTip=!1,new s.Ay({render:t=>t(p)}).$mount("#app")}},n={};function e(s){var o=n[s];if(void 0!==o)return o.exports;var a=n[s]={exports:{}};return t[s].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,s,o,a){if(!s){var i=1/0;for(l=0;l<t.length;l++){s=t[l][0],o=t[l][1],a=t[l][2];for(var c=!0,r=0;r<s.length;r++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](s[r])}))?s.splice(r--,1):(c=!1,a<i&&(i=a));if(c){t.splice(l--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[s,o,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,s){var o,a,i=s[0],c=s[1],r=s[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(r)var l=r(e)}for(n&&n(s);u<i.length;u++)a=i[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(l)},s=self["webpackChunkinstagram_api"]=self["webpackChunkinstagram_api"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=e.O(void 0,[504],(function(){return e(2958)}));s=e.O(s)})();
//# sourceMappingURL=app.5adb331e.js.map