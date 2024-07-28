import{r as a,l as o,j as e}from"./index-BX2lbLQk.js";import{ThemeContext as i}from"./DashboardPage-Q-e_eQ8U.js";import{d as n,u as l,g as c,E as m}from"./styled-components.browser.esm-CVekKdLq.js";const d=n.div`
  background: ${({theme:t})=>t["primary-100"]};
  background: linear-gradient(
    43deg,
    ${({theme:t})=>t.light?t["primary-100"]:"#ffe4e1"} 0%,
    ${({theme:t})=>t.light?t["primary-200"]:"#f89487"} 48%,
    ${({theme:t})=>t.light?t["primary-300"]:"#f46645"} 100%
  );
`,g=({setIsOpen:t,children:r})=>{const{theme:s}=a.useContext(i);return l(()=>{c.from(".outside",{duration:.8,scale:0,ease:m.easeOut,opacity:0})}),o.createPortal(e.jsx("div",{style:{background:"rgba(9, 8, 8,.8)"},className:"outside absolute flex justify-center items-center z-50   top-0 h-screen w-screen",children:e.jsxs(d,{theme:s,className:"px-4 sm-px-0 w-[90%]  h-[90%] sm:w-[70%] sm:h-[90%] rounded-3xl relative",children:[r,e.jsx("button",{className:"absolute top-0 right-0 sm:right-5  text-white btn btn-ghost  text-5xl",onClick:()=>t(!1),children:"X"})]})}),document.getElementById("portal"))};export{g as M};
