const experss = require("express");
const bodyParse = require("body-parse");
const db = require ("./module/db2");
const tools = require("./module/tools");
const app = express();
app.use(bodyParse.json());

app.listen(80,()=>{
    console.log("success");
});