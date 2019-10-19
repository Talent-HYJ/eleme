let express = require('express');
let mysql=require("mysql");
let app = express();
 var bodyParser = require("body-parser");
 // 4，创建 application/x-www-form-urlencoded 编码解析
 var urlencodedParser = bodyParser.urlencoded({
   extended: false
 });
 //5,设置静态文件
 app.use(express.static("public"));
 //6,设置跨域访问
 app.all("*", function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Origin", "http://192.168.137.1:8888");
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By", " 3.2.1");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
 });
 let indexControler=require("./controllers/IndexControler");
app.get('/', indexControler.index)

let server = app.listen(8888, function () {
 
  let host = server.address().address
  let port = server.address().port
  console.log(server.address())
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})