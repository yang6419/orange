const jwt = require("jwt-simple");
const KEY = ")(*&)(*&)(*)((*&(*";
const fs = require("fs");
const path = require("path");
module.exports = {
    getNowTime(){
        var date = new Date();
        return date.getFullYear() + "-" +
            ((date.getMonth() + 1)).toString().padStart(2, 0) + "-" +
            (date.getDate()).toString().padStart(2, 0) + " " +
            (date.getHours()).toString().padStart(2, 0) + ":" +
            (date.getMinutes()).toString().padStart(2, 0) + ":" +
            (date.getSeconds()).toString().padStart(2, 0);
    },
    async deletePic(picName){
        return new Promise((resolve,reject)=>{
            fs.unlink(path.resolve(__dirname,"../upload/"+picName),function (err) {
                if(err){
                    reject(1);// 1失败
                }else{
                    resolve(0);// 成功
                }
            })
        })
    },
    json(res,ok=-1,msg="网络连接错误"){
        res.json({
            ok,
            msg
        })
    },
    // 生成token
    encode(payload){
        return jwt.encode({
            ...payload,
            ...{
                createTime:Date.now()
            }
        },KEY);
    },
    // 解析TOKEN
    // 忌讳：在比较时尽量不要比较中文。
    decode(token){
        try{
            const info = jwt.decode(token,KEY);
            // 10分钟过期
            const times = 60*60*1000;
            if((Date.now()-info.createTime)>times){
                return {
                    ok:2,
                    msg:"token过期啦"
                }
            }else{
                return {
                    ok:3,
                    msg:"token正常",
                    info
                }
            }
        }catch (e) {
            return {
                ok:1,// token解析失败
                msg:"token解析失败"
            }
        }

    }
}