let IndexImg = require("../model/IndexImg");
class IndexService {
  constructor() {}
  getData(callback) {
   
  let indexImg=new IndexImg();
  
   
     indexImg.getData(callback)
      
   
  }
}

module.exports = IndexService;