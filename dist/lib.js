var t=require("react"),n=require("@sassoftware/restafedit"),e=require("react/jsx-runtime");function r(r){var a=r.appEnv,o=t.useState(!0),u=o[0],s=o[1],i=t.useState(null),c=i[0],l=i[1],f=function(t){l({status:2,msg:t})},p=a.appControl.appData.getViewer(a.appControl.appData);/*#__PURE__*/return e.jsx(t.Fragment,{children:/*#__PURE__*/e.jsx(p,{onEdit:function(t,e,r,o){n.cellEdit(t,e,r,o,a).then(function(t){s(!u),l(null)}).catch(function(t){f(t),l(t)})},onScroll:function(t){n.scrollTable(t,a).then(function(t){s(!u),l({status:0,msg:null})}).catch(function(t){f(t)})},onSave:function(t){n.casUpdateRow(t,a).then(function(t){l({status:0,msg:t})}).catch(function(t){return l({status:2,msg:t})})},status:c,appEnv:a})})}exports.DataEditor=function(a){var o=a.viyaConnection,u=a.appControl,s=t.useState({}),i=s[0],c=s[1];t.useEffect(function(){(function(){try{return Promise.resolve(n.setup(o,u)).then(function(t){return Promise.resolve(n.scrollTable("first",t)).then(function(){return t})})}catch(t){return Promise.reject(t)}})().then(function(t){c(t)}).catch(function(t){throw new Error(JSON.stringify(t))})},[]);var l=null;return null!=i.session&&(l=/*#__PURE__*/e.jsx("div",{id:"page-wrap",children:/*#__PURE__*/e.jsx(r,{appEnv:i},i.id)},Date())),l},exports.DataViewer=r;
//# sourceMappingURL=lib.js.map
