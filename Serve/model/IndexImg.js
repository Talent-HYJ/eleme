	let SqlBase=require("./SqlBase")
	 class IndexImg{
		constructor(arg) {
		
		}
		getBase(callback){
			let that=this;
			let sqlBase=new SqlBase()
			let sql="select * from s_class";
			sqlBase.connection.query(sql,(err, result)=> {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
	   
	   console.log(result)
	  callback(result)
    })	
		}
		getData(callback){
			this.getBase(callback);
		}
	}
	 module.exports=IndexImg;