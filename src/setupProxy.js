/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
       
const { createProxyMiddleware } = require('http-proxy-middleware');
  module.exports = function (app) {
  app.use(
      "/" + process.env.REACT_APP_APPNAME + '/appenv',
      (req, res) => {
        console.log(process.env);
          let t = `
              let LOGONPAYLOAD = {
                  host: "${process.env.REACT_APP_VIYA_SERVER}",
                  authType: 'server'
              };
              let APPENV={};
          `;
          console.log(t);
          res.send(t);
      }
  );
  };
    