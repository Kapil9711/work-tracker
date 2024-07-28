import{d as J,r as g,a as Re,k as re,l as $e,j as o,h as S}from"./index-Dw1Oylpw.js";import{d as xe,u as ke,g as Se,E as Ie}from"./styled-components.browser.esm-j7zM8z_M.js";import{ThemeContext as me}from"./DashboardPage-fej48c_B.js";import{aH as Ne,b0 as Le,b1 as He,b4 as De,ar as Ae,a as D,g as A,s as B,_ as c,u as W,b as N,e as z,d as U,b5 as We,q as V,b6 as ze,aE as fe,n as _e,a9 as Q,af as Ue,ae as Fe,S as se,aU as k,h as ie,b7 as Oe,aD as Ye,b3 as F,b2 as ve,F as ye,au as Ee}from"./Box-BHbd-3N6.js";import"./Modal-DqyH7rnM.js";/* empty css                      */function Ge({value:e,setValue:t}){const s=J(({user:l})=>l.id),n=J(({task:l})=>l.isGetByMonth),d=J(({task:l})=>l.key),{theme:a}=g.useContext(me),r=Re();return g.useEffect(()=>{const l=`/tasks?date=${e.format("YYYY-MM-DD")}${n?"&&filter=month":""}`;r(re({endPoint:l,userId:s}))},[d]),g.useEffect(()=>{const l=`/tasks?date=${e.format("YYYY-MM-DD")}${n?"&&filter=month":""}`,p=JSON.parse(localStorage.getItem(s+l));console.log("persist",p),r(p?$e(p):re({endPoint:l,userId:s}))},[e,n]),o.jsx(Ne,{dateAdapter:Le,children:o.jsx(He,{components:["DateCalendar","DateCalendar"],children:o.jsx(De,{children:o.jsx(Ae,{sx:{"& .MuiPickersDay-root":{color:a.light?"black":"white",fontSize:"15px","&.Mui-selected":{backgroundColor:a.green,color:"black",fontWeight:"bold","&:hover":{backgroundColor:a.green,color:"black"}}}},className:` rounded-[28px] py-0  ${a.light?"bg-[#f38d7f] text-[black]":"bg-[#d73d1b] text-[white]"}`,value:e,onChange:l=>{t(l)}})})})})}const Je=["January","February","March","April","May","June","July","August","September","October","November","December"],Ke=e=>{let t="";const s=(e==null?void 0:e.split("-"))||[];let n=s.length?s[2]:new Date().getFullYear(),d=s.length?s[1]-1:new Date().getMonth(),a=s.length?s[0]:new Date().getDate();return t+=`${Je[d]} ${a} - ${n}`,t},Ce=g.createContext();function qe(e){return D("MuiTable",e)}A("MuiTable",["root","stickyHeader"]);const Xe=["className","component","padding","size","stickyHeader"],Qe=e=>{const{classes:t,stickyHeader:s}=e;return z({root:["root",s&&"stickyHeader"]},qe,t)},Ve=B("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>c({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":c({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),ce="table",Ze=g.forwardRef(function(t,s){const n=W({props:t,name:"MuiTable"}),{className:d,component:a=ce,padding:r="normal",size:l="medium",stickyHeader:p=!1}=n,b=N(n,Xe),i=c({},n,{component:a,padding:r,size:l,stickyHeader:p}),j=Qe(i),T=g.useMemo(()=>({padding:r,size:l,stickyHeader:p}),[r,l,p]);return o.jsx(Ce.Provider,{value:T,children:o.jsx(Ve,c({as:a,role:a===ce?null:"table",ref:s,className:S(j.root,d),ownerState:i},b))})}),Z=g.createContext();function et(e){return D("MuiTableBody",e)}A("MuiTableBody",["root"]);const tt=["className","component"],ot=e=>{const{classes:t}=e;return z({root:["root"]},et,t)},st=B("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),at={variant:"body"},de="tbody",nt=g.forwardRef(function(t,s){const n=W({props:t,name:"MuiTableBody"}),{className:d,component:a=de}=n,r=N(n,tt),l=c({},n,{component:a}),p=ot(l);return o.jsx(Z.Provider,{value:at,children:o.jsx(st,c({className:S(p.root,d),as:a,ref:s,role:a===de?null:"rowgroup",ownerState:l},r))})});function lt(e){return D("MuiTableCell",e)}const rt=A("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),it=["align","className","component","padding","scope","size","sortDirection","variant"],ct=e=>{const{classes:t,variant:s,align:n,padding:d,size:a,stickyHeader:r}=e,l={root:["root",s,r&&"stickyHeader",n!=="inherit"&&`align${U(n)}`,d!=="normal"&&`padding${U(d)}`,`size${U(a)}`]};return z(l,lt,t)},dt=B("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`size${U(s.size)}`],s.padding!=="normal"&&t[`padding${U(s.padding)}`],s.align!=="inherit"&&t[`align${U(s.align)}`],s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>c({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?We(V(e.palette.divider,1),.88):ze(V(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${rt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),H=g.forwardRef(function(t,s){const n=W({props:t,name:"MuiTableCell"}),{align:d="inherit",className:a,component:r,padding:l,scope:p,size:b,sortDirection:i,variant:j}=n,T=N(n,it),y=g.useContext(Ce),v=g.useContext(Z),L=v&&v.variant==="head";let w;r?w=r:w=L?"th":"td";let m=p;w==="td"?m=void 0:!m&&L&&(m="col");const M=j||v&&v.variant,h=c({},n,{align:d,component:w,padding:l||(y&&y.padding?y.padding:"normal"),size:b||(y&&y.size?y.size:"medium"),sortDirection:i,stickyHeader:M==="head"&&y&&y.stickyHeader,variant:M}),u=ct(h);let x=null;return i&&(x=i==="asc"?"ascending":"descending"),o.jsx(dt,c({as:w,ref:s,className:S(u.root,a),"aria-sort":x,scope:m,ownerState:h},T))});function ut(e){return D("MuiTableContainer",e)}A("MuiTableContainer",["root"]);const pt=["className","component"],gt=e=>{const{classes:t}=e;return z({root:["root"]},ut,t)},bt=B("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),ht=g.forwardRef(function(t,s){const n=W({props:t,name:"MuiTableContainer"}),{className:d,component:a="div"}=n,r=N(n,pt),l=c({},n,{component:a}),p=gt(l);return o.jsx(bt,c({ref:s,as:a,className:S(p.root,d),ownerState:l},r))});function xt(e){return D("MuiTableHead",e)}A("MuiTableHead",["root"]);const mt=["className","component"],ft=e=>{const{classes:t}=e;return z({root:["root"]},xt,t)},vt=B("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),yt={variant:"head"},ue="thead",Ct=g.forwardRef(function(t,s){const n=W({props:t,name:"MuiTableHead"}),{className:d,component:a=ue}=n,r=N(n,mt),l=c({},n,{component:a}),p=ft(l);return o.jsx(Z.Provider,{value:yt,children:o.jsx(vt,c({as:a,className:S(p.root,d),ref:s,role:a===ue?null:"rowgroup",ownerState:l},r))})});function Tt(e){return D("MuiToolbar",e)}A("MuiToolbar",["root","gutters","regular","dense"]);const wt=["className","component","disableGutters","variant"],jt=e=>{const{classes:t,disableGutters:s,variant:n}=e;return z({root:["root",!s&&"gutters",n]},Tt,t)},Mt=B("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,!s.disableGutters&&t.gutters,t[s.variant]]}})(({theme:e,ownerState:t})=>c({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},t.variant==="dense"&&{minHeight:48}),({theme:e,ownerState:t})=>t.variant==="regular"&&e.mixins.toolbar),Bt=g.forwardRef(function(t,s){const n=W({props:t,name:"MuiToolbar"}),{className:d,component:a="div",disableGutters:r=!1,variant:l="regular"}=n,p=N(n,wt),b=c({},n,{component:a,disableGutters:r,variant:l}),i=jt(b);return o.jsx(Mt,c({as:a,className:S(i.root,d),ref:s,ownerState:b},p))}),Pt=fe(o.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),Rt=fe(o.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),$t=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],kt=g.forwardRef(function(t,s){var n,d,a,r,l,p,b,i;const{backIconButtonProps:j,count:T,disabled:y=!1,getItemAriaLabel:v,nextIconButtonProps:L,onPageChange:w,page:m,rowsPerPage:M,showFirstButton:h,showLastButton:u,slots:x={},slotProps:f={}}=t,I=N(t,$t),C=_e(),ee=_=>{w(_,0)},te=_=>{w(_,m-1)},O=_=>{w(_,m+1)},P=_=>{w(_,Math.max(0,Math.ceil(T/M)-1))},R=(n=x.firstButton)!=null?n:Q,Y=(d=x.lastButton)!=null?d:Q,E=(a=x.nextButton)!=null?a:Q,q=(r=x.previousButton)!=null?r:Q,G=(l=x.firstButtonIcon)!=null?l:Rt,X=(p=x.lastButtonIcon)!=null?p:Pt,$=(b=x.nextButtonIcon)!=null?b:Ue,ae=(i=x.previousButtonIcon)!=null?i:Fe,Te=C?Y:R,we=C?E:q,je=C?q:E,Me=C?R:Y,Be=C?f.lastButton:f.firstButton,ne=C?f.nextButton:f.previousButton,le=C?f.previousButton:f.nextButton,Pe=C?f.firstButton:f.lastButton;return o.jsxs("div",c({ref:s},I,{children:[h&&o.jsx(Te,c({onClick:ee,disabled:y||m===0,"aria-label":v("first",m),title:v("first",m)},Be,{children:C?o.jsx(X,c({},f.lastButtonIcon)):o.jsx(G,c({},f.firstButtonIcon))})),o.jsx(we,c({onClick:te,disabled:y||m===0,color:"inherit","aria-label":v("previous",m),title:v("previous",m)},ne??j,{children:C?o.jsx($,c({},f.nextButtonIcon)):o.jsx(ae,c({},f.previousButtonIcon))})),o.jsx(je,c({onClick:O,disabled:y||(T!==-1?m>=Math.ceil(T/M)-1:!1),color:"inherit","aria-label":v("next",m),title:v("next",m)},le??L,{children:C?o.jsx(ae,c({},f.previousButtonIcon)):o.jsx($,c({},f.nextButtonIcon))})),u&&o.jsx(Me,c({onClick:P,disabled:y||m>=Math.ceil(T/M)-1,"aria-label":v("last",m),title:v("last",m)},Pe,{children:C?o.jsx(G,c({},f.firstButtonIcon)):o.jsx(X,c({},f.lastButtonIcon))}))]}))});function St(e){return D("MuiTablePagination",e)}const K=A("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var pe;const It=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],Nt=B(H,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}})),Lt=B(Bt,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>c({[`& .${K.actions}`]:t.actions},t.toolbar)})(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${K.actions}`]:{flexShrink:0,marginLeft:20}})),Ht=B("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,t)=>t.spacer})({flex:"1 1 100%"}),Dt=B("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,t)=>t.selectLabel})(({theme:e})=>c({},e.typography.body2,{flexShrink:0})),At=B(se,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>c({[`& .${K.selectIcon}`]:t.selectIcon,[`& .${K.select}`]:t.select},t.input,t.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${K.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),Wt=B(k,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,t)=>t.menuItem})({}),zt=B("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,t)=>t.displayedRows})(({theme:e})=>c({},e.typography.body2,{flexShrink:0}));function _t({from:e,to:t,count:s}){return`${e}–${t} of ${s!==-1?s:`more than ${t}`}`}function Ut(e){return`Go to ${e} page`}const Ft=e=>{const{classes:t}=e;return z({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},St,t)},Ot=g.forwardRef(function(t,s){var n;const d=W({props:t,name:"MuiTablePagination"}),{ActionsComponent:a=kt,backIconButtonProps:r,className:l,colSpan:p,component:b=H,count:i,disabled:j=!1,getItemAriaLabel:T=Ut,labelDisplayedRows:y=_t,labelRowsPerPage:v="Rows per page:",nextIconButtonProps:L,onPageChange:w,onRowsPerPageChange:m,page:M,rowsPerPage:h,rowsPerPageOptions:u=[10,25,50,100],SelectProps:x={},showFirstButton:f=!1,showLastButton:I=!1,slotProps:C={},slots:ee={}}=d,te=N(d,It),O=d,P=Ft(O),R=(n=C==null?void 0:C.select)!=null?n:x,Y=R.native?"option":Wt;let E;(b===H||b==="td")&&(E=p||1e3);const q=ie(R.id),G=ie(R.labelId),X=()=>i===-1?(M+1)*h:h===-1?i:Math.min(i,(M+1)*h);return o.jsx(Nt,c({colSpan:E,ref:s,as:b,ownerState:O,className:S(P.root,l)},te,{children:o.jsxs(Lt,{className:P.toolbar,children:[o.jsx(Ht,{className:P.spacer}),u.length>1&&o.jsx(Dt,{className:P.selectLabel,id:G,children:v}),u.length>1&&o.jsx(At,c({variant:"standard"},!R.variant&&{input:pe||(pe=o.jsx(Oe,{}))},{value:h,onChange:m,id:q,labelId:G},R,{classes:c({},R.classes,{root:S(P.input,P.selectRoot,(R.classes||{}).root),select:S(P.select,(R.classes||{}).select),icon:S(P.selectIcon,(R.classes||{}).icon)}),disabled:j,children:u.map($=>g.createElement(Y,c({},!Ye(Y)&&{ownerState:O},{className:P.menuItem,key:$.label?$.label:$,value:$.value?$.value:$}),$.label?$.label:$))})),o.jsx(zt,{className:P.displayedRows,children:y({from:i===0?0:M*h+1,to:X(),count:i===-1?-1:i,page:M})}),o.jsx(a,{className:P.actions,backIconButtonProps:r,count:i,nextIconButtonProps:L,onPageChange:w,page:M,rowsPerPage:h,showFirstButton:f,showLastButton:I,slotProps:C.actions,slots:ee.actions,getItemAriaLabel:T,disabled:j})]})}))});function Yt(e){return D("MuiTableRow",e)}const ge=A("MuiTableRow",["root","selected","hover","head","footer"]),Et=["className","component","hover","selected"],Gt=e=>{const{classes:t,selected:s,hover:n,head:d,footer:a}=e;return z({root:["root",s&&"selected",n&&"hover",d&&"head",a&&"footer"]},Yt,t)},Jt=B("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.head&&t.head,s.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${ge.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${ge.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:V(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:V(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),be="tr",oe=g.forwardRef(function(t,s){const n=W({props:t,name:"MuiTableRow"}),{className:d,component:a=be,hover:r=!1,selected:l=!1}=n,p=N(n,Et),b=g.useContext(Z),i=c({},n,{component:a,hover:r,selected:l,head:b&&b.variant==="head",footer:b&&b.variant==="footer"}),j=Gt(i);return o.jsx(Jt,c({as:a,ref:s,className:S(j.root,d),role:a===be?null:"row",ownerState:i},p))}),Kt=({task:e,columns:t,theme:s})=>{const[n,d]=g.useState(!1);return g.useEffect(()=>{setInterval(()=>{d(a=>!a)},1e3)},[]),o.jsx(oe,{hover:!0,role:"checkbox",tabIndex:-1,children:t.map(a=>{let r;if(a.id==="createdAt")r=F(e[a.id]).format("DD-MM-YYYY");else if(a.id==="completed")r=e[a.id].toString();else if(a.id==="remaningTime"){const p=F(new Date),b=F(e.targetDateTime),i=b.diff(p,"minute"),j=b.diff(p,"second");e.completed?r="completed":Number(i)<0?r="overdue":r=`${Math.floor(i/60)}:${i%60}:${j%60}`}else r=e[a.id];let l="";return a.id==="title"&&(r=r.slice(0,10)),r==="overdue"?l="red":r==="completed"||r==="true"||r==="Low"?l="green":r==="Moderate"?l="#fba004":r==="High"?l="#f33417":l="black",o.jsx(H,{sx:{color:`${l}`,fontWeight:`${a.id==="title"||r==="completed"?"bold ":"normal"}`,letterSpacing:`${a.id==="title"?"1px":".5px"}`,backgroundColor:"#ffe3e0"},align:a.align,children:r},a.id)})},e._id)};function qt({priority:e,setPriority:t}){const s=n=>{t(n.target.value)};return o.jsx(ve,{sx:{maxWidth:"130px",paddingBlock:"0px"},children:o.jsx(ye,{sx:{paddingBlock:"0px"},fullWidth:!0,children:o.jsxs(se,{className:"bg-white  ",labelId:"demo-simple-select-label",id:"demo-simple-select",value:e,onChange:s,sx:{borderWidth:"2px",borderColor:"#b3aead",borderStyle:"solid",height:"40px","& .MuiSelect-select":{borderColor:"#0f0301",borderStyle:"solid",fontWeight:"bold","&:hover":{borderColor:"#762311",borderStyle:"solid"},"&.Mui-focused":{borderColor:"#762311",borderStyle:"solid"}},"& .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},children:[o.jsx(k,{value:"Low",children:"Low"}),o.jsx(k,{value:"Moderate",children:"Moderate"}),o.jsx(k,{value:"High",children:"High"}),o.jsx(k,{value:"None",children:"None"}),o.jsx(k,{value:"Completed",children:"Completed"}),o.jsx(k,{value:"Remaining",children:"Remaining"})]})})})}function Xt({sortBy:e,setSortBy:t}){const s=n=>{t(n.target.value)};return o.jsx(ve,{sx:{maxWidth:"120px",paddingBlock:"0px"},children:o.jsx(ye,{sx:{paddingBlock:"0px"},fullWidth:!0,children:o.jsxs(se,{className:"bg-white  ",labelId:"demo-simple-select-label",id:"demo-simple-select",value:e,onChange:s,sx:{borderWidth:"2px",borderColor:"#b3aead",borderStyle:"solid",height:"40px","& .MuiSelect-select":{borderColor:"#0f0301",borderStyle:"solid",fontWeight:"bold","&:hover":{borderColor:"#762311",borderStyle:"solid"},"&.Mui-focused":{borderColor:"#762311",borderStyle:"solid"}},"& .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},children:[o.jsx(k,{value:"Low",children:"Low"}),o.jsx(k,{value:"Moderate",children:"Moderate"}),o.jsx(k,{value:"High",children:"High"}),o.jsx(k,{value:"Time",children:"Time"})]})})})}const he=[{id:"createdAt",label:"CreatedAt",minWidth:170},{id:"title",label:"Title",minWidth:100},{id:"remaningTime",label:"RemainingTime",minWidth:170,align:"right"},{id:"priority",label:"periority",minWidth:170,align:"right"},{id:"completed",label:"Completed",minWidth:170,align:"right"}];function Qt({tasks:e,setValue:t,day1:s,day:n,width:d,theme:a}){const[r,l]=g.useState(0),[p,b]=g.useState(10),[i,j]=g.useState({Low:[],Moderate:[],High:[]}),[T,y]=g.useState("Remaining"),[v,L]=g.useState("High"),w=J(u=>u.task.isGetByMonth),m=(u,x)=>{l(x)};g.useEffect(()=>{l(0);const u=[],x=[],f=[];e==null||e.forEach(I=>{I.priority==="Low"?u.push(I):I.priority==="Moderate"?f.push(I):x.push(I)}),j({Low:u,Moderate:f,High:x})},[e]);const M=u=>{b(+u.target.value),l(0)};let h;if(v==="Moderate"?h=[...i.Moderate,...i.High,...i.Low]:v==="Low"?h=[...i.Low,...i.Moderate,...i.High]:v==="High"?h=[...i.High,...i.Moderate,...i.Low]:h=e,T!=="None")if(T==="Remaining"){const u=[];h.forEach(x=>{const f=F(new Date),C=F(x.targetDateTime).diff(f,"minute");Number(C)>0&&u.push(x)}),u.length===0&&h.length?y("None"):h=[...u]}else if(T==="Completed"){const u=[];h.forEach(x=>{x.completed&&u.push(x)}),h=[...u]}else h=[...i[T]];return o.jsxs(Ee,{sx:{width:"100%",height:"100%",scrollbarWidth:"none"},children:[o.jsx(ht,{sx:{maxHeight:`${d>550?"79%":"87%"}`,scrollbarWidth:"none"},children:o.jsxs(Ze,{stickyHeader:!0,"aria-label":"sticky table",children:[o.jsxs(Ct,{children:[o.jsxs(oe,{children:[o.jsx(H,{align:"center",colSpan:2,sx:{background:`${a.light?"#f3a599":"#b43417"}`,color:`${a.light?"black":"white"}`},children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("p",{children:"FilterBy "})," ",o.jsx(qt,{setPriority:y,priority:T})]})}),o.jsx(H,{sx:{background:`${a.light?"#f3a599":"#b43417"}`,color:`${a.light?"black":"white"}`},align:"center",colSpan:2,children:o.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[o.jsx("p",{children:"sortBy"})," ",o.jsx(Xt,{sortBy:v,setSortBy:L})]})}),o.jsx(H,{sx:{background:`${a.light?"#f3a599":"#b43417"}`,color:`${a.light?"black":"white"}`},align:"center",colSpan:2,children:o.jsxs("div",{className:"flex items-center gap-2 justify-start",children:[o.jsx("button",{className:`border-2  hover:bg-[#f9c0b7]
                     px-4`,onClick:()=>t(u=>w?u.subtract(1,"month"):u.subtract(1,"day")),children:"prev"}),o.jsx("p",{children:w?n:s}),o.jsx("button",{className:"border-2 hover:bg-[#f9c0b7] px-4 ",onClick:()=>t(u=>w?u.add(1,"month"):u.add(1,"day")),children:"next"})]})})]}),o.jsx(oe,{children:he.map(u=>o.jsx(H,{sx:{fontWeight:"bold",fontSize:"16px",backgroundColor:"#ffe3e0",color:"black"},align:u.align,style:{top:57,minWidth:u.minWidth},children:u.label},u.id))})]}),o.jsx(nt,{children:h.slice(r*p,r*p+p).map(u=>o.jsx(Kt,{theme:a,task:u,columns:he},u._id))})]})}),o.jsx(Ot,{sx:{backgroundColor:`${a.light?"hsl(8, 79%, 78%)":"#b43417"}`,color:`${a.light?"black":"white"}`},rowsPerPageOptions:[10,25,100],component:"div",count:h.length,rowsPerPage:p,page:r,onPageChange:m,onRowsPerPageChange:M})]})}const Vt=xe.main`
  width: min(100%, 1500px);
  margin-inline: auto;
  display: grid;
`,Zt=xe.div`
  background-color: ${({theme:e})=>e.match};
`,eo=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],to=["January","February","March","April","May","June","July","August","September","October","November","December"],io=()=>{const{theme:e,date:t,height:s,width:n}=g.useContext(me),d=J(i=>i.task.value),[a,r]=g.useState(F(new Date)),l=eo[t==null?void 0:t.split("-")[3]],p=t==null?void 0:t.split("-")[0],b=to[Number(t==null?void 0:t.split("-")[1])-1];return ke(()=>{Se.from(".box",{duration:2,height:0,ease:Ie.easeInOut,stagger:.5})}),o.jsxs(Vt,{className:`${s>750?"mt-16":"mt-10"}  lg:grid-cols-[1fr,2fr] gap-8 xl:gap-0`,children:[o.jsx("div",{className:"mx-auto lg:mx-0",children:o.jsx(Ge,{value:a,setValue:r})}),o.jsxs(Zt,{theme:e,className:`h-screen sm:h-[500px] ${s>800&&"xl:h-[600px]"}  rounded-[28px] overflow-hidden`,children:[o.jsxs("section",{className:"mt-2 px-5 flex justify-between items-center",children:[o.jsx("h1",{className:"text-white font-bold sm:tracking-wide text-lg sm:text-2xl ",children:Ke(t)}),o.jsxs("p",{className:"tracking-wide text-sm sm:text-xl  font-bold text-white",children:["Tasks-",d.length]}),o.jsxs("p",{className:"text-lg sm:text-2xl font-bold tracking-wide text-white",children:[" ",l]})]}),o.jsx("div",{style:{scrollbarWidth:"none"},className:"box   mt-4  h-full   rounded-[28px] bg-[#f3a69b] ",children:o.jsx(Qt,{tasks:d,setValue:r,day1:p,day:b,width:n,theme:e})})]})]})};export{io as default};
