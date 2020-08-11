
        const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
        let protocol = (process.env.HTTPS === 'true') ? 'https://' : 'http://';
        app.use(
            "/" + process.env.REACT_APP_APPNAME,
            createProxyMiddleware ({
                target: protocol + process.env.REACT_APP_TARGET,
                changeOrigin: true,
                secure: false  /* if SAS/Viya has self-signed certificate set to then false*/
                })
        );
        };
    