const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db2");
const mongodb = require("mongodb");
const app = express();
app.use(bodyParser.json());
//登录
app.post("/login",async (req,res)=>{
   const {phoneNumber,passWord} = req.body;
   console.log(phoneNumber,passWord);
   const userInfo = await db.findOne("userList",{
       phoneNumber,
       passWord
   });
   console.log(userInfo);
    if(userInfo){
       res.json({
           ok:1,
           msg:"登陆成功"
       })
    }else{
        res.json({
            ok:-1,
            msg:"登录失败"
        })
    }
});
app.listen(80,()=>{
    console.log("success");
});