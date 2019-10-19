
class SqlBase {
  constructor() {
    let mysql = require("mysql"); //调用MySQL模块

    //1，创建一个connection
     this.connection = mysql.createConnection({
        host     : 'localhost',  //主机
        user     : 'root',       //MySQL认证用户名
        password : '123456',           //MySQL认证用户密码
        port: '3306',            //端口号
        database:'db_student'
    });
    //2,连接
    this.connection.connect();
	
  }
}

module.exports = SqlBase;
