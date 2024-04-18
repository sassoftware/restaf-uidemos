/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

const { createProxyMiddleware } = require('http-proxy-middleware');

const appEnvRoute = (req, res) => {

  let t = `
      let LOGONPAYLOAD = {
        host: "${process.env.REACT_APP_VIYA_SERVER}",
        authType: 'implicit',
        clientID: '${process.env.REACT_APP_CLIENTID}',
        redirect: 'index.html'
    };
      let APPENV={};
  `;
    console.log('--- Logon information');
    console.log(t);
    res.send(t);
  }
module.exports = function (app) {
  app.use('/' + process.env.REACT_APP_APPNAME + '/appenv', appEnvRoute)
};
