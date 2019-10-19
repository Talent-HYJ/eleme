import React from 'react'
import './login.css'
export default class Login extends React.Component{
    constructor(props){
        super(props)
    }
    changePhone(){
        
    }
render(){
    return (
    <div className='box'>
       <div className='content'>
         
           <div className='logo-header'><img src="http://localhost:8888/imgs/index/imgs/logo2.png" alt=""/></div>
           <div className='form'>
               <input type="text" placeholder="手机号" onChange={this.changePhone}/>
               <input type="password" placeholder='密码'/>
           </div>
       </div>
    </div>
    )
        
    
}
}