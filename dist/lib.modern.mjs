import{useState as t,Fragment as n,useEffect as a}from"react";import{scrollTable as r,cellEdit as e,casUpdateRow as o,setup as s}from"@sassoftware/restafedit";import{jsx as i}from"react/jsx-runtime";function p(a){const{appEnv:s}=a,[p,c]=t(!0),[l,u]=t(null),h=t=>{u({status:2,msg:t})},m=s.appControl.appData.getViewer(s.appControl.appData);/*#__PURE__*/return i(n,{children:/*#__PURE__*/i(m,{onEdit:(t,n,a,r)=>{e(t,n,a,r,s).then(t=>{c(!p),u(null)}).catch(t=>{h(t),u(t)})},onScroll:t=>{r(t,s).then(t=>{c(!p),u({status:0,msg:null})}).catch(t=>{h(t)})},onSave:t=>{o(t,s).then(t=>{u({status:0,msg:t})}).catch(t=>u({status:2,msg:t}))},status:l,appEnv:s})})}function c(n){const{viyaConnection:e,appControl:o}=n,[c,l]=t({});a(()=>{(async()=>{let t=await s(e,o);return await r("first",t),t})().then(t=>{l(t)}).catch(t=>{throw new Error(JSON.stringify(t))})},[]);let u=null;return null!=c.session&&(u=/*#__PURE__*/i("div",{id:"page-wrap",children:/*#__PURE__*/i(p,{appEnv:c},c.id)},Date())),u}export{c as DataEditor,p as DataViewer};
//# sourceMappingURL=lib.modern.mjs.map
