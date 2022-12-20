import{d as _,o as p,c as x,w as M,T as S,a as h,b as e,e as E,f as w,p as A,g as L,h as c,_ as N,r as k,i as P,j as T,u as V,k as I,l as F,m as H}from"./index-07fc1dd5.js";const G="/resume_2022/assets/profile_picture-ca6db516.png",J=s=>(A("data-v-58de0bb6"),s=s(),L(),s),j={id:"modal",class:"modal-container"},D={id:"icon"},K=J(()=>e("div",{class:"modal-content-container"},[e("div",{id:"profile-pic"},[e("a",{href:"#"},[e("img",{src:G,alt:"Avatar"})])]),e("div",{class:"modal-header"},[e("h3",null,"Oriane Martin")]),e("div",{class:"modal-body"},[e("p",null,[e("span",{style:{"font-weight":"bold"}},"Phone: "),c(" +33 6 51 33 79 11 ")]),e("p",null,[e("span",{style:{"font-weight":"bold"}},"E-Mail: "),e("a",{href:"mailto:orianemartinpro@gmail.com"},"orianemartinpro@gmail.com")]),e("p",null,[e("span",{style:{"font-weight":"bold"}},"City:"),c(" Paris, France")]),e("p",null,[e("span",{style:{"font-weight":"bold"}},"Languages:"),c(" French, Spanish, English ")]),e("div",{class:"links"},[e("p",null,[e("a",{href:"https://www.linkedin.com/in/oriane-martin-pro",target:"_blank"},"LinkedIn"),c(" | "),e("a",{href:"https://github.com/ormartin42",target:"_blank"},"GitHub")])])])],-1)),O=_({__name:"Contact",props:{show:Boolean},setup(s){return(l,o)=>(p(),x(S,null,{default:M(()=>[s.show?(p(),h("div",{key:0,class:"modal-mask",onKeyup:o[1]||(o[1]=E(a=>l.$emit("close"),["esc"]))},[e("div",j,[e("div",D,[e("i",{class:"fa fa-window-close",onClick:o[0]||(o[0]=a=>l.$emit("close"))})]),K])],32)):w("",!0)]),_:1}))}});const R=N(O,[["__scopeId","data-v-58de0bb6"]]),q={key:0,class:"bio"},z={id:"container-bio",class:"container-bio"},Q={class:"icon-bar"},U=e("i",{class:"fa fa-home"},null,-1),W=[U],X={href:"#"},Y=F('<a href="mailto:orianemartinpro@gmail.com"><i class="fa fa-envelope" title="E-Mail"></i></a><a href="../../public/resume.jpg" download><i class="fa fa-download" title="Donwload Resume"></i></a><a href="https://www.linkedin.com/in/oriane-martin-pro" target="_blank"><i class="fa fa-linkedin" title="LinkedIn"></i></a><a href="https://github.com/ormartin42" target="_blank"><i class="fa fa-globe" title="Github"></i></a>',4),Z=["show"],ee=e("p",null," $> My name is Oriane Martin and I'm a Franco-Argentinian software engineer student living in Paris ",-1),te=[ee],oe=_({__name:"Bio",setup(s){const l=k(!0),o=k(!1);var a=0,u,d=0;const m=[`
$> Having successfully completed my studies at 42 School Paris, I am currently looking for a software engineer or full-stack developer position in a modern, fast-paced company that will allow me to keep growing as a developer.`,`
$> As of today, I know and have been using extensively :`,"$> I am fluent in three languages : French (mother tongue), Spanish (mother tongue), and English. I am both used to working autonomously and in teams. Having worked as a Film Industry professional for 5 years, I can say that I am no stanger to tight deadlines.",`
Please don't hesitate to contact me for any further information !`],C=["JavaScript/TypeScript (NestJs/VueJs)","C","C++","Git","Docker","Bash"];P(()=>{l.value=!1}),T(()=>{window.addEventListener("keypress",i=>{i.keyCode==13&&g()})});function g(i){var n,r,v,y,b;if(console.log(a),d==1){f(0);return}if(console.log("ACA "+o.value),a<=3&&!o.value){var t;a==1?(t=document.createElement("p"),t.append(m[a++]),(n=document.getElementById("bio-p"))==null||n.append(t),u=document.createElement("ul"),(r=document.getElementById("bio-p"))==null||r.appendChild(u),C.forEach(B),t=document.createElement("p"),t.append(`
`),(v=document.getElementById("bio-p"))==null||v.append(t)):a==3?(t=document.createElement("p"),t.setAttribute("id","last"),t.append(m[a++]),(y=document.getElementById("bio-p"))==null||y.append(t)):(t=document.createElement("p"),t.append(m[a++]),(b=document.getElementById("bio-p"))==null||b.append(t))}}function B(i,t,n){var r=document.createElement("li");u.appendChild(r),r.innerHTML=r.innerHTML+i}function $(){H.push("/")}function f(i){if(i==1)console.log("close"),d=1;else if(d=0,console.log("toggle"),o.value=!o.value,o.value==!1)setTimeout(()=>{var n=document.getElementById("bio-p");n&&(n.style.display==="none"?n.style.display="block":n.style.display="none")},500);else{var t=document.getElementById("bio-p");t&&(t.style.display==="none"?t.style.display="block":t.style.display="none")}console.log(o.value)}return(i,t)=>l.value?w("",!0):(p(),h("div",q,[e("div",z,[e("div",Q,[e("a",{class:"active",href:"#",onClick:t[0]||(t[0]=n=>$())},W),e("a",X,[e("i",{class:"fa fa-address-book",title:"Personal information",onClick:t[1]||(t[1]=n=>f(0))})]),Y]),e("div",{id:"box-bio",class:"box-bio",onClick:t[3]||(t[3]=n=>g(V(d)))},[I(R,{show:o.value,onClose:t[2]||(t[2]=n=>f(1))},null,8,["show"]),e("div",{id:"bio-p",show:!o.value},te,8,Z)])])]))}});const ae=_({__name:"AboutView",setup(s){return(l,o)=>(p(),h("div",null,[I(oe)]))}});export{ae as default};
