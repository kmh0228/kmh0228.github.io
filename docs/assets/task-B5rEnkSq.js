import{d as _,o as f,c as u,b as c,b4 as C,_ as m,E as M,e as w,G as P,a as r,w as b,A as B,b1 as E,b2 as H}from"./index-CBiuCyFl.js";const z={class:"shape_content"},X=_({__name:"Polygon",props:{wH:{default:void 0},fillColor:{default:"red"},points:{default:()=>[{x:10,y:60},{x:100,y:10},{x:100,y:100},{x:10,y:100}]}},setup(o){const t=o;let e=t.points[0].x,a=t.points[0].x,s=t.points[0].y,d=t.points[0].y;t.points.forEach((i,h)=>{if(h){const{x:n,y:l}=i;n<e&&(e=n),n>a&&(a=n),l<s&&(s=l),l>d&&(d=l)}});const y=a-e,x=d-s;let g="";t.points.forEach(({x:i,y:h},n)=>{const l=(i-e)/y*100,I=(h-s)/x*100;g+=(n?",":"")+l+"% "+I+"%"});const k={background:t.fillColor,clipPath:`polygon(${g})`},$={...t.wH||{width:y+"px",height:x+"px"}};return(i,h)=>(f(),u("div",{class:"shape_container",style:$},[c("div",{class:"shape_fill",style:k}),c("div",z,[C(i.$slots,"default",{},void 0,!0)])]))}}),v=m(X,[["__scopeId","data-v-23f8eea7"]]),p=_({__name:"Parallelogram",props:{wH:{default:void 0},fillColor:{default:"red"},width:{default:100},height:{default:100},angle:{default:Math.PI/3}},setup(o){const t=o,e=t.height/Math.tan(t.angle),a=[{x:0,y:0},{x:t.width,y:0},{x:t.width-e,y:t.height},{x:-e,y:t.height}];return(s,d)=>(f(),M(v,{"w-h":s.wH,"fill-color":s.fillColor,points:a},null,8,["w-h","fill-color"]))}}),S=o=>(E("data-v-504c1a6f"),o=o(),H(),o),N=S(()=>c("span",{class:"month_text"},"01",-1)),V=S(()=>c("div",{class:"calendar_content"},null,-1)),Y=_({__name:"MonthCalendar",setup(o){const t=w(),e=w(16);return P(()=>{var a;e.value=(((a=t.value)==null?void 0:a.offsetWidth)||400)/400*16}),(a,s)=>(f(),u("div",{ref_key:"$container",ref:t,class:"month-calendar-container",style:B({fontSize:e.value+"px"})},[r(v,{"w-h":{width:"82%",height:"3.9em"},"fill-color":"#19190f",points:[{x:0,y:0},{x:0,y:21},{x:106,y:21},{x:88,y:0}],class:"title"},{default:b(()=>[N,r(p,{"fill-color":"#fcae04",width:3,height:15,angle:Math.PI/4*3,"w-h":{width:2.8/15*18+"em",height:"2.8em"},style:{"margin-left":"0.56em"}},null,8,["angle"]),r(p,{"fill-color":"#fcae04",width:69,height:15,angle:Math.PI/4*3,"w-h":{width:2.8/15*84+"em",height:"2.8em"},style:{"margin-left":"-1.69em"}},null,8,["angle"])]),_:1}),V],4))}}),A=m(Y,[["__scopeId","data-v-504c1a6f"]]),G={class:"task_container"},W={class:"task_view"},j={class:"task_calenders"},q=_({__name:"task",setup(o){return(t,e)=>(f(),u("div",G,[c("div",W,[r(p)]),c("div",j,[r(A,{style:{width:"400px"}})])]))}}),F=m(q,[["__scopeId","data-v-5d42c00f"]]);export{F as default};
