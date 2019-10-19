
import React from 'react'
import './Footer.css'
import { Link,withRouter } from "react-router-dom";

import { browserHistory } from 'react-router'
  import { format } from 'path';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selected1:true,
      selected2:false,
      selected3:false,
      selected4:false,
    }
   
  }
componentDidMount(){
  console.dir(withRouter)
  console.log(this)
}
 changeimg(selected,id){
 
  if(id==1){
    this.setState({selected1:true,selected2:false,selected3:false,selected4:false
    })
    this.props.history.push('/');
  }else if(id==2){
    this.setState({selected2:true,selected1:false,selected3:false,selected4:false})
  }else if(id==3){
    this.setState({selected3:true,selected2:false,selected1:false,selected4:false})
  }else{
    this.setState({selected4:true,selected2:false,selected3:false,selected1:false});
    this.props.history.push('/mine');
  }

 }

  render() {
	  return (
	  <div className='box'>
	  <ul className='footbar'>
      <li onClick={this.changeimg.bind(this,this.state.selected1,"1")}  id='1'><p>
        <img src={this.state.selected1?require("./imgs/logo1.png"):require("./imgs/logo2.png")} alt=""/></p>
	  <p style={{color:this.state.selected1?'rgb(25,137,250)':'rgb(142,142,147)'}}>首页</p></li>
      <li onClick={this.changeimg.bind(this,this.state.selected1,"2")}  id='2'><p><img src={this.state.selected2?require("./imgs/logo1.png"):require("./imgs/logo2.png")} alt=""/></p>
      <p style={{color:this.state.selected2?'rgb(25,137,250)':'rgb(142,142,147)'}}>发现</p></li>
      <li onClick={this.changeimg.bind(this,this.state.selected1,"3")}  id='3'><p><img src={this.state.selected3?require("./imgs/logo1.png"):require("./imgs/logo2.png")} alt=""/></p>
      <p style={{color:this.state.selected3?'rgb(25,137,250)':'rgb(142,142,147)'}}>订单</p></li>
      <li onClick={this.changeimg.bind(this,this.state.selected1,"4")}  id='4' >
        <p><img src={this.state.selected4?require("./imgs/logo1.png"):require("./imgs/logo2.png")} alt=""/></p>
      <p style={{color:this.state.selected4?'rgb(25,137,250)':'rgb(142,142,147)'}}>我的</p></li>
    </ul>
	  </div>
	  )
  }
}

export default withRouter(Footer)