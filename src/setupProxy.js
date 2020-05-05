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
    }))
    app.use("/tours",createProxyMiddleware({
        target:"https://m.juooo.com/",
        changeOrigin:true,
        pathRewrite:{
            "^/tours":""
        }
    }))
}
