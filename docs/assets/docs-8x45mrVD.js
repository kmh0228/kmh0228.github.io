import{b as R,e as F,f as B,g as M,h as D,d as p,i as V,j as y,k as A,l as P,m as $,n as H,p as O,S as E,o as i,c as l,q as d,s as S,F as g,t as C,u as r,a as _,w as h,v,x as m,y as b,B as w,_ as f,z,A as q,C as x,r as I,D as J,E as G,G as U}from"./index-8zAQJptG.js";import{f as W,e as Z,i as K,r as L,N as Q,c as X}from"./htmlTools-nONLGLgu.js";const Y=s=>{const{textColorBase:e,opacity1:n,opacity2:c,opacity3:a,opacity4:o,opacity5:t}=s;return{color:e,opacity1Depth:n,opacity2Depth:c,opacity3Depth:a,opacity4Depth:o,opacity5Depth:t}},ee={name:"Icon",common:R,self:Y},te=F("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[B("color-transition",{transition:"color .3s var(--n-bezier)"}),B("depth",{color:"var(--n-color)"},[M("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),M("svg",{height:"1em",width:"1em"})]),oe=Object.assign(Object.assign({},D.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),T=p({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:oe,setup(s){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=V(s),c=D("Icon","-icon",te,ee,s,e),a=y(()=>{const{depth:t}=s,{common:{cubicBezierEaseInOut:u},self:k}=c.value;if(t!==void 0){const{color:j,[`opacity${t}Depth`]:N}=k;return{"--n-bezier":u,"--n-color":j,"--n-opacity":N}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),o=n?A("icon",y(()=>`${s.depth||"d"}`),a,s):void 0;return{mergedClsPrefix:e,mergedStyle:y(()=>{const{size:t,color:u}=s;return{fontSize:W(t),color:u}}),cssVars:n?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var s;const{$parent:e,depth:n,mergedClsPrefix:c,component:a,onRender:o,themeClass:t}=this;return!((s=e==null?void 0:e.$options)===null||s===void 0)&&s._n_icon__&&P("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),$("i",H(this.$attrs,{role:"img",class:[`${c}-icon`,t,{[`${c}-icon--depth`]:n,[`${c}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),a?$(a):this.$slots)}}),ne=Object.assign(Object.assign({},D.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number}),se=p({name:"Scrollbar",props:ne,setup(){const s=O(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var c;(c=s.value)===null||c===void 0||c.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var c;(c=s.value)===null||c===void 0||c.scrollBy(n[0],n[1])}}),{scrollbarInstRef:s})},render(){return $(E,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},re=d("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M184 112l144 144l-144 144"},null,-1),ie=[re],ae=p({name:"ChevronForward",render:function(e,n){return i(),l("svg",ce,ie)}}),le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},de=d("path",{d:"M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),_e=d("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M338.29 338.29L448 448"},null,-1),pe=[de,_e],ue=p({name:"SearchOutline",render:function(e,n){return i(),l("svg",le,pe)}}),he={class:"docs_header_container"},ve={class:"menu_container"},me=["onClick"],fe={class:"operation_content"},ye=p({__name:"DocsHeader",setup(s){const e=S(),n=()=>{Z(JSON.stringify(e.getDocData()),"export_docs")},c=()=>{K({acceptType:["txt"],multiple:!1}).then(a=>{L(a[0]).then(o=>{e.setDocData(JSON.parse(o))})})};return(a,o)=>(i(),l("div",he,[d("div",ve,[(i(!0),l(g,null,C(r(e).docData||[],t=>(i(),l("a",{key:t.id,class:v(["menu_item",{active:t===r(e).curDoc}]),onClick:u=>r(e).initCurDoc(t)},m(t.name),11,me))),128))]),d("div",fe,[_(r(Q),{class:"operation_item",round:"",placeholder:"搜索"},{suffix:h(()=>[_(r(T),{component:r(ue)},null,8,["component"])]),_:1}),_(r(w),{class:"operation_item",type:"info",onClick:n},{default:h(()=>[b("导出")]),_:1}),_(r(w),{class:"operation_item",type:"info",onClick:c},{default:h(()=>[b("导入")]),_:1})])]))}}),ge=f(ye,[["__scopeId","data-v-99761d33"]]),Ce={class:"doc_left_bar_container"},xe=["onClick"],ke=["onClick"],$e=p({__name:"DocsLeftBar",setup(s){const e=S();return(n,c)=>(i(),l("div",Ce,[(i(!0),l(g,null,C(r(e).curMenuDoc,(a,o)=>(i(),l("div",{key:a.id,class:v(["menu_list_box",{hasRightBorder:o<r(e).curMenuDoc.length-1}]),style:z({width:r(e).leftBarWidth+"px"})},[d("div",{class:v(["menu_list_container","menu_list_container_lv"+o])},[(i(!0),l(g,null,C(a.children||[],t=>{var u;return i(),l("div",{key:t.id,class:v(["menu_item",{active:t.id===((u=r(e).curShowDoc[o+1])==null?void 0:u.id)}]),onClick:k=>r(e).activeMenu(t)},[d("div",{class:"title",style:z({width:t.children&&t.children.length?"width: calc(100% - 16px)":"100%"})},m(t.name),5),t.children&&t.children.length?(i(),l("div",{key:0,class:"arrow_icon",onClick:q(k=>r(e).openMenu(t),["stop"])},[_(r(T),{size:"14",component:r(ae)},null,8,["component"])],8,ke)):x("",!0)],10,xe)}),128))],2)],6))),128))]))}}),be=f($e,[["__scopeId","data-v-72be41b5"]]),we=["data-id"],De={class:"title"},Se=["innerHTML"],Be={key:0,class:"code"},Me={key:0,class:"children"},ze=p({name:"DocsContentItem",__name:"DocsContentItem",props:{data:{},level:{}},setup(s){const e=s,n=()=>{X(e.data.code||"")};return(c,a)=>{const o=I("docs-content-item",!0);return i(),l("div",{class:"docs_content_item_container","data-id":e.data.id},[d("div",{class:v(["content","content_"+e.level])},[d("div",De,m(e.data.name),1),d("div",{class:"desc",innerHTML:e.data.desc},null,8,Se),e.data.code?(i(),l("div",Be,[_(r(se),{style:{"max-height":"120px"}},{default:h(()=>[d("pre",null,m(e.data.code),1)]),_:1}),_(r(w),{size:"tiny",secondary:"",strong:"",class:"copy_btn",onClick:n},{default:h(()=>[b(" 复制 ")]),_:1})])):x("",!0)],2),e.data.children?(i(),l("div",Me,[(i(!0),l(g,null,C(e.data.children,t=>(i(),J(o,{key:t.id,data:t,level:e.level+1},null,8,["data","level"]))),128))])):x("",!0)],8,we)}}}),Oe=f(ze,[["__scopeId","data-v-87bf3db9"]]),Te={key:0,class:"docs_content_container"},je={class:"docs_content_title"},Ne=p({__name:"DocsContent",setup(s){const e=S(),n=O(null),c=y(()=>e.curShowDoc.map(o=>o.name).join(" > ")),a=o=>{const t=document.querySelector('[data-id="'+o.id+'"]');t&&n.value&&(n.value.scrollTop=t.offsetTop)};return G(()=>{e.on("onActiveMenu",a)}),U(()=>{e.on("onActiveMenu",a)}),(o,t)=>r(e).curDoc?(i(),l("div",Te,[d("div",je,m(c.value),1),d("div",{ref_key:"scrollContainer",ref:n,class:"docs_content_scroll_box"},[_(Oe,{data:r(e).curDoc,level:1},null,8,["data"])],512)])):x("",!0)}}),Re=f(Ne,[["__scopeId","data-v-01175924"]]),Fe={class:"docs_container"},Ve={class:"docs_body_container"},Ae={class:"docs_body_content"},Pe=p({__name:"docs",setup(s){return(e,n)=>(i(),l("div",Fe,[_(ge),d("div",Ve,[_(be),d("div",Ae,[_(Re)])])]))}}),qe=f(Pe,[["__scopeId","data-v-f7426201"]]);export{qe as default};
