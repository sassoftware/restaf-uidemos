import t,{useState as e,Fragment as n,useEffect as r}from"react";import o from"prop-types";import{scrollTable as a,cellEdit as i,updateTableRows as s,setup as p}from"@sassoftware/restafedit";function c(r){const{appEnv:o,editor:p}=r,[c,u]=e(!0),[l,d]=e(null),m=t=>{d({status:2,msg:t})},f=p();/*#__PURE__*/return t.createElement(n,null,/*#__PURE__*/t.createElement(f,{onEdit:(t,e,n,r)=>{i(t,e,n,r,o).then(t=>{u(!c),d(null)}).catch(t=>{m(t),d(t)})},onScroll:t=>{a(t,o).then(t=>{u(!c),d({status:0,msg:null})}).catch(t=>{m(t)})},onSave:(t,e)=>{s(t,o).then(t=>{d({status:0,msg:t})}).catch(t=>d({status:2,msg:t}))},status:l,appEnv:o}))}function u(n){const{viyaConnection:o,appControl:i,editor:s}=n,[u,l]=e({});r(()=>{(async()=>{let t=await p(o,i);return await a("first",t),t})().then(t=>{l(t)}).catch(t=>{throw new Error(JSON.stringify(t))})},[]);let d=null;return null!=u.session&&(d=/*#__PURE__*/t.createElement("div",{id:"page-wrap",key:Date()},/*#__PURE__*/t.createElement(c,{appEnv:u,editor:s}))),d}c.propTypes={appEnv:o.object.isRequired,editor:o.func.isRequired},u.propTypes={viyaConnection:o.object.isRequired,appControl:o.object.isRequired,editor:o.func.isRequired};export{u as DataEditor,c as DataViewer};
//# sourceMappingURL=index.modern.mjs.map
