var t=require("react"),e=require("@sassoftware/restafedit");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=/*#__PURE__*/n(t);function r(n){var r=n.appEnv,u=t.useState(!0),o=u[0],c=u[1],i=t.useState(null),s=i[0],l=i[1],f=function(t){l({status:2,msg:t})},p=r.appControl.appData.getViewer(r.appControl.appData);/*#__PURE__*/return a.default.createElement(t.Fragment,null,/*#__PURE__*/a.default.createElement(p,{onEdit:function(t,n,a,u){e.cellEdit(t,n,a,u,r).then(function(t){c(!o),l(null)}).catch(function(t){f(t),l(t)})},onScroll:function(t){e.scrollTable(t,r).then(function(t){c(!o),l({status:0,msg:null})}).catch(function(t){f(t)})},onSave:function(t){e.casUpdateRow(t,r).then(function(t){l({status:0,msg:t})}).catch(function(t){return l({status:2,msg:t})})},status:s,appEnv:r}))}exports.DataEditor=function(n){var u=n.viyaConnection,o=n.appControl,c=t.useState({}),i=c[0],s=c[1];t.useEffect(function(){(function(){try{return Promise.resolve(e.setup(u,o)).then(function(t){return Promise.resolve(e.scrollTable("first",t)).then(function(){return t})})}catch(t){return Promise.reject(t)}})().then(function(t){s(t)}).catch(function(t){throw new Error(JSON.stringify(t))})},[]);var l=null;return null!=i.session&&(l=/*#__PURE__*/a.default.createElement("div",{id:"page-wrap",key:Date()},/*#__PURE__*/a.default.createElement(r,{appEnv:i,key:i.id}))),l},exports.DataViewer=r;
//# sourceMappingURL=index.js.map
