/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  const proxyViya = {
      target: 'https://viya.kumar-2210-azure-nginx-3334cf3e.unx.sas.com',
      changedOrigin: true,
      router: {
        'dec.localhost:3000': 'https://localhost:5002'
      },
      secure: false
  }
  const proxyLocal = {
      target:'https://localhost:5002',
      changedOrigin: true,
      secure: false
  }
  console.log(proxyViya);
  console.log(proxyLocal);

  app.use( "/viyaapp", createProxyMiddleware(proxyLocal));
  app.use( '/favicon.ico',  createProxyMiddleware(proxyLocal));
  app.use(`/${process.REACT_APP_VIYA_SERVER}`, createProxyMiddleware(proxyViya));
  app.use(`/preferences`, createProxyMiddleware(proxyViya));
  app.use(`/ui`, createProxyMiddleware(proxyViya));


};
