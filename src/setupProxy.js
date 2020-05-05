const  {
    createProxyMiddleware
} = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/orange",createProxyMiddleware({
        target:"https://api.juooo.com/",
        changeOrigin:true,
        pathRewrite:{
            "^/orange":""
        }
    }));
    app.use("/log",createProxyMiddleware({
        target:"http://127.0.0.1:80/",
        changeOrigin:true,
        pathRewrite:{
            "^/log":""
        }
    }))
    app.use("/tours",createProxyMiddleware({
        target:"https://m.juooo.com/",
        changeOrigin:true,
        pathRewrite:{
            "^/tours":""
        }
    }))
}
