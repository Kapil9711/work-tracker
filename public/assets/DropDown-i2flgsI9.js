import{r as d,j as e,e as N,L as U,N as c,A as b,t as I,v as D,o as m,b as R,w as C}from"./index-BvzUD_pk.js";import{r as S,i as F,M as _}from"./DashboardPage-C4aPgL7y.js";const f=d.forwardRef(({children:s},a)=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-2xl",htmlFor:"name",children:s}),e.jsx("input",{ref:a,className:"w-full text-black tracking-wider font-bold  text-xl border-l-4 border-r-4 border-t-2 border-b-2 border-black rounded-lg focus:outline-none px-4 h-12",type:"text",id:"name"})]}));f.displayName="UpdatePassword";const L=({usernameRef:s})=>e.jsxs("div",{className:"flex flex-col gap-2 ",children:[e.jsx("label",{className:"text-2xl",htmlFor:"name",children:"Username"}),e.jsx("input",{ref:s,className:"w-full text-black tracking-wider font-bold  text-xl border-l-4 border-r-4 border-t-2 border-b-2 border-black rounded-lg focus:outline-none px-4 h-12",type:"text",id:"name"})]}),O=({setFile:s})=>e.jsxs("div",{className:"flex flex-col gap-2 ",children:[e.jsx("label",{className:"text-2xl",htmlFor:"name",children:"Select Image"}),e.jsx("input",{type:"file",onChange:a=>{s(a.target.files[0])}})]}),E=({user:s,setActive:a})=>e.jsxs(e.Fragment,{children:[e.jsxs("h3",{className:"font-bold text-2xl text-center pt-4",children:["Hello! ",s.username]}),e.jsxs("div",{className:"grid gap-5 px-10 py-4  w-full  mx-auto mt-5 ",children:[e.jsx(x,{heading:"Username",setActive:a}),e.jsx(x,{heading:"Password",setActive:a}),e.jsx(x,{heading:"ProfileImg",setActive:a})]})]}),x=({heading:s,setActive:a})=>e.jsxs("div",{className:"flex  justify-between items-center",children:[e.jsx("h2",{className:"text-xl tracking-wide text-white font-bold",children:s}),e.jsx("button",{onClick:()=>a(s),className:"btn btn-xs btn-accent bg-violet-400 hover:bg-violet-500 ",children:"update"})]}),M=({user:s})=>{const a=N(),[t,o]=d.useState(""),[n,l]=d.useState(!1),[i,u]=d.useState(null),r=d.useRef(null),g=d.useRef(null),h=d.useRef(null),y=async k=>{var w;if(k.preventDefault(),l(!0),t==="ProfileImg")await q(i,l,a);else{let j={username:(w=r.current)==null?void 0:w.value},v="/profile/update";t==="Password"&&(j={oldPassword:g.current.value,newPassword:h.current.value},v="/password/update"),await A(t,j,v,l,a)}};return e.jsxs("div",{className:"setting  bg-[#f57156] max-w-[500px] mx-auto mt-16 sm:mt-8 border-t-8 border-b-8  rounded-3xl border-black shadow-lg shadow-black sm:pb-8 pb-16",children:[e.jsx(E,{user:s,setActive:o}),t&&e.jsxs("div",{className:"forms",children:[e.jsx("p",{className:"text-center font-bold tracking-wide mb-4  text-2xl",children:t}),e.jsxs("form",{onSubmit:y,className:"form1  border-t-4 border-b-4 shadow-lg shadow-black rounded-3xl border-black bg-[#f46748] max-w-96 mx-auto px-5 py-5",children:[t==="Username"&&e.jsx(L,{usernameRef:r}),t==="ProfileImg"&&e.jsx(O,{setFile:u}),t==="Password"&&e.jsxs(e.Fragment,{children:[e.jsx(f,{ref:g,children:"Old Password"}),e.jsx(f,{ref:h,children:"New Password"})]}),n?e.jsx("div",{className:"flex justify-center h-16",children:e.jsx(U,{})}):e.jsx("button",{className:"btn block btn-accent btn-sm bg-violet-400 hover:bg-violet-500   mx-auto mt-5",children:"Update"})]})]})]})},q=async(s,a,t)=>{if(!s)return c("warning","please select a image"),a(!1);const o=new FormData;o.append("image",s);const n=await b.uploadImage("/image",o);n.success?(c("success",n.message),t(I())):c("error",n.message),a(!1)},A=async(s,a,t,o,n)=>{const l=await b.updateProfile(t,a);if(l.success){if(o(!1),s==="Password")return c("success","Password updated successfully");c("success","Username updated successfully"),n(D(l.data))}else c("error",l.message),o(!1)};var p={},z=F;Object.defineProperty(p,"__esModule",{value:!0});var P=p.default=void 0,H=z(S()),K=e;P=p.default=(0,H.default)((0,K.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");const J=()=>{const s=m(r=>r.user.value),a=m(r=>r.user.image),t=m(r=>r.user.key),o=N(),[n,l]=d.useState(!1),i=R();d.useEffect(()=>{o(C())},[]);const u=async()=>{const r=await b.logoutUser();r.success?(c("success","Logout successfull"),i("/")):c("error",r.message)};return e.jsxs("div",{className:"dropdown dropdown-hover ",children:[e.jsxs("div",{tabIndex:0,role:"button",className:"btn btn-ghost  text-white text-xl m-1",children:[e.jsx("img",{className:"rounded-full w-11 h-11",src:a,alt:"starImg"},t),e.jsxs("span",{className:"hidden sm:block",children:[s.username,e.jsx(P,{})]})]}),e.jsxs("ul",{tabIndex:0,className:"dropdown-content bg-white -ml-36 sm:ml-0 menu  rounded-box z-[1] w-52 p-2 shadow",children:[e.jsx("li",{className:"btn btn-ghost text-xl hover:bg-gray-200",onClick:()=>l(!0),children:"Profile"}),e.jsx("li",{className:"btn btn-ghost text-sm flex gap-2 hover:bg-gray-200",onClick:u,children:"Log Out"}),n&&e.jsx(_,{setIsOpen:l,children:e.jsx(M,{user:s})})]})]})};export{J as default};
