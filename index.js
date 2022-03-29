(()=>{(function(){"use strict";document.querySelector("svg defs").innerHTML+=`
  <symbol id="icon-trevor" viewBox="0 0 1024 1024">
    <path d="M851.8 516.4h-30.4V380c0-7.8-6.3-14.1-14.1-14.1H456.9c-7.8 0-14.1 6.3-14.1 14.1v104.9c-7.8-10.7-18.3-19.2-30.6-24.4V76.1c0-17-13.8-30.8-30.8-30.8H148.7c-17 0-30.8 13.8-30.8 30.8v420.7c0 17 13.8 30.8 30.8 30.8h162.6c0 37.8 29 68.5 65.8 72.2h-0.1v309.5c0 25.9 21 46.8 46.8 46.8h416.6c25.9 0 46.8-21 46.8-46.8V551.8c0-19.5-15.9-35.4-35.4-35.4z m-512.3 11.2c0-24.6 20-44.7 44.7-44.7 10.7 0 20.4 3.8 28 10.1 7.2 5.9 12.6 14.1 15.1 23.4 0.9 3.6 1.6 7.3 1.6 11.2 0 22.3-16.5 40.6-37.8 44-2.3 0.4-4.5 0.7-6.9 0.7-24.6-0.1-44.7-20.1-44.7-44.7z m453.6-11.2H471V394.1h322.1v122.3z" />
    <path d="M565.6 421.7h28.2v66.4h-28.2zM625 421.7h28.2v66.4H625zM684.4 421.7h28.2v66.4h-28.2zM759.7 267.1c0-0.5-0.1-1-0.1-1.5-3.6-38-24.9-155.5-153.6-191.1 0 0 29.7 37.7-50 121.8-4.6 4.1-8.9 8.4-12.8 13.1-0.1 0.1-0.1 0.2-0.2 0.2-15.6 18.9-25 42.4-25 67.9 0 61.8 54.2 112 121.1 112s121.1-50.1 121.1-112c0 0.1 0-3.8-0.5-10.4z" />
  </symbol>
`;var h=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("k-inside",[n("k-view",{staticClass:"trevor"},[n("k-header",{staticClass:"heading"},[e._v(e._s(e.$t("trevor.heading")))]),n("div",{staticClass:"editor"},[n("div",{staticClass:"keys",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.selectNext.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.selectPrev.apply(null,arguments)}]}},e._l(e.languagekeys,function(t){return n("div",{key:t,ref:"keyspane",refInFor:!0,class:["key",{selected:e.selected==t,edited:e.edited.has(t)}],attrs:{tabindex:"-1"},on:{click:function(i){return e.selectOne(t)}}},[n("div",{staticClass:"txt"},[e._v(e._s(t))]),e.missing.has(t)?n("div",{staticClass:"missing"}):e._e()])}),0),n("div",{staticClass:"ctrl"},[n("k-button",{attrs:{icon:"add"},on:{click:e.add}},[e._v(e._s(e.$t("add")))])],1),n("div",{staticClass:"texts"},[e.selected?n("div",{on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])||!t.ctrlKey?null:e.selectPrev.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])||!t.ctrlKey?null:e.selectNext.apply(null,arguments)}]}},e._l(e.languages,function(t){var i=t[0],l=t[1];return n("div",{key:i,staticClass:"lang"},[n("k-textarea-field",{ref:"input_"+i,refInFor:!0,attrs:{buttons:!1,label:l.name+(l.default?" *":"")},on:{input:function(d){return e.edited.add(e.selected)}},model:{value:l.translations[e.selected],callback:function(d){e.$set(l.translations,e.selected,d)},expression:"lang.translations[selected]"}})],1)}),0):n("div",{staticClass:"no-selection"},[n("div",{staticClass:"text"},[n("p",[e._v(e._s(e.$t("trevor.startinfo")))]),n("p",[n("b",[e._v("Trevor")]),e._v(": "+e._s(e.$t("trevor.payoff")))])])])])]),e.edited.size?n("div",{staticClass:"savebar"},[n("k-view",[n("k-button",{attrs:{icon:"undo"},on:{click:e.revert}},[e._v(e._s(e.$t("revert")))]),n("k-button",{attrs:{icon:"check"},on:{click:e.save}},[e._v(e._s(e.$t("save")))])],1)],1):e._e()],1)],1)},v=[],x="";function _(e,s,n,t,i,l,d,m){var a=typeof e=="function"?e.options:e;s&&(a.render=s,a.staticRenderFns=n,a._compiled=!0),t&&(a.functional=!0),l&&(a._scopeId="data-v-"+l);var o;if(d?(o=function(r){r=r||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!r&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(r=__VUE_SSR_CONTEXT__),i&&i.call(this,r),r&&r._registeredComponents&&r._registeredComponents.add(d)},a._ssrRegister=o):i&&(o=m?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i),o)if(a.functional){a._injectStyles=o;var C=a.render;a.render=function(w,f){return o.call(f),C(w,f)}}else{var u=a.beforeCreate;a.beforeCreate=u?[].concat(u,o):[o]}return{exports:e,options:a}}const g={computed:{languagekeys(){const e=new Set;for(let[s,n]of this.languages)Object.keys(n.translations).forEach(t=>e.add(t));return Array.from(e)},missing(){const e=new Set;for(let s of this.languagekeys)for(let[n,t]of this.languages)(t.translations[s]===void 0||t.translations[s].trim()==="")&&e.add(s);return e}},data:function(){return{edited:new Set,languages:[],selected:null}},created:function(){this.fetch(),this.$events.$on("keydown.cmd.s",this.onCmdS)},destroyed:function(){this.$events.$off("keydown.cmd.s",this.onCmdS)},methods:{fetch(){this.$api.get("trevor/languages").then(e=>{this.languages=Object.entries(e).sort(([s,n],[t,i])=>n.default?-1:i.default?1:s.localeCompare(t))})},add(){let e=window.prompt(this.$t("trevor.addkey"));!e||(e=e.toLowerCase(),this.languagekeys.indexOf(e.trim())===-1&&(this.languages.length&&this.$set(this.languages[0][1].translations,e,""),this.edited.add(e)),this.$nextTick(()=>this.selectOne(e)))},selectOne(e){this.selected=e;const s=this.languagekeys.indexOf(e);this.$refs.keyspane[s].scrollIntoView({block:"nearest"}),this.$nextTick(()=>{for(let[n,t]of this.languages)if(t.translations[e]===void 0||t.translations[e].trim()===""){let i=null;if(i=this.$refs[`input_${n}`]){i[0].focus();return}}})},selectPrev(){const e=this.languagekeys.indexOf(this.selected),s=Math.max(0,e-1);this.selectOne(this.languagekeys[s])},selectNext(){const e=this.languagekeys.indexOf(this.selected),s=Math.min(this.languagekeys.length-1,e+1);this.selectOne(this.languagekeys[s])},onCmdS(e){e.preventDefault(),this.save()},save(){if(this.edited.size===0)return;const e={};for(let[s,n]of this.languages){e[s]={};for(let t of this.edited)e[s][t]=n.translations[t]}this.$api.patch("trevor/languages/translations",e).then(this.fetch),this.edited=new Set},revert(){this.languages=[],this.edited=new Set,this.fetch()}}},c={};var p=_(g,h,v,!1,k,"1927a227",null,null);function k(e){for(let s in c)this[s]=c[s]}var y=function(){return p.exports}();panel.plugin("rasteiner/k3-trevor-view",{components:{"k-trevor-view":y}})})();})();
