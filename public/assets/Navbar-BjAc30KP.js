const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDown-ChQO2luN.js","assets/index-Cxe98Gdg.js","assets/index-PGTi1PBy.css","assets/Modal-DDcd1Dn2.js","assets/DashboardPage-BnLF-E8W.js","assets/styled-components.browser.esm-BWiEEXtv.js","assets/Toasts-BB3bV-Hz.js","assets/Toasts-BTGsrsBX.css"])))=>i.map(i=>d[i]);
import{r as o,j as e,_ as x,a as h,s as c}from"./index-Cxe98Gdg.js";import{d as l}from"./styled-components.browser.esm-BWiEEXtv.js";import{ThemeContext as d}from"./DashboardPage-BnLF-E8W.js";const m=l.button`
  background-color: ${({theme:t,active:n,compare:r})=>n===r?t["primary-600"]:t["primary-300"]};
  color: ${({theme:t,active:n,compare:r})=>n===r?t.white:t.gray};
  &:hover,
  &:focus,
  &:active {
    background-color: ${({theme:t})=>t["primary-600"]};
    color: ${({theme:t})=>t.white};
  }
`,a=({children:t,active:n,setActive:r})=>{const{theme:s}=o.useContext(d);return e.jsx(m,{onClick:()=>r(t),compare:t,active:n,theme:s,className:"rounded-full py-[10px] px-[24px] font-bold tracking-wide text-center",children:t})},g=o.lazy(()=>x(()=>import("./DropDown-ChQO2luN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),p=l.nav`
  width: min(100%, 1600px);
  margin-inline: auto;
`,u=l.button`
  background-color: ${({theme:t})=>t.light?t["primary-600"]:t.gray};
  color: ${({theme:t})=>t.light?t["primary-100"]:"black"};
  border-radius: 50px;
  padding-inline: 20px;
  padding-block: 8px;
  &:hover {
    background-color: ${({theme:t})=>t.light?"#591403":t.white};
    color: ${({theme:t})=>t.light?t["primary-100"]:"black"};
  }
  &:focus {
    border: none;
    outline: none;
  }
`,y=()=>{const{setActiveTheme:t,theme:n}=o.useContext(d),r=h(),[s,i]=o.useState("Daily");return e.jsxs(p,{className:"navbar  bg-transparent",children:[e.jsxs("div",{className:"navbar-start",children:[e.jsxs("div",{className:"dropdown",children:[e.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),e.jsxs("ul",{tabIndex:0,className:"menu menu-sm dropdown-content gap-y-1  bg-base-100 rounded-box z-[1] mt-3  p-2 shadow",children:[e.jsx("li",{children:e.jsx(a,{className:"btn btn-ghost text-xl",children:"Daily"})}),e.jsx("li",{children:e.jsx(a,{className:"btn btn-ghost text-xl",children:"Month"})})]})]}),e.jsx("a",{style:{color:n.light?n["primary-600"]:n["primary-500"]},className:"btn btn-ghost text-2xl -ml-6 sm:ml:0   md:text-4xl font-bold italic tracking-wide",children:"Listify"})]}),e.jsx("div",{className:"navbar-center hidden lg:flex",children:e.jsxs("ul",{className:"menu menu-horizontal px-1 gap-5  ",children:[e.jsx("li",{onClick:()=>r(c(!1)),children:e.jsx(a,{active:s,setActive:i,className:"btn btn-ghost text-xl",children:"Daily"})}),e.jsx("li",{onClick:()=>r(c(!0)),children:e.jsx(a,{active:s,setActive:i,className:"btn btn-ghost text-xl",children:"Monthly"})})]})}),e.jsxs("div",{className:"navbar-end flex sm:gap-8",children:[e.jsx(u,{theme:n,onClick:()=>b(t),children:n.light?"dark":"light"}),e.jsx("a",{className:"flex  items-center",children:e.jsx(g,{})})]})]})},b=t=>{t(n=>(localStorage.setItem("theme",n==="light"?"dark":"light"),n==="light"?"dark":"light"))};export{y as default};
