import React from "react";
import { Link } from "react-router-dom";
import './index.css'



import { setInterval } from "timers";
export default class Index extends React.Component {
    constructor(props){
super(props);
this.fixSearch=this.fixSearch.bind(this)
    }
    componentWillMount(){
 
 
    }
    componentDidMount(){
      window.addEventListener('scroll',this.fixSearch)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fixSearch)
        
    }
    fixSearch(e){
       setTimeout(() => {
             let x=document.documentElement.scrollTop
        if(x>=100){
            console.log(this)
            this.refs.search.style.position="fixed"
        }else{
            console.log(this.refs)
             this.refs.search.style.position="static"
        }
        
        }, 0); 

        console.log(document.documentElement.scrollTop)
        
   
       

    }
   
    render() {
        return (
            <div className='indexbox'>
                <div className='title'>
                    <div className='headbox'>
                        <div className='address'><i className='iconfont icon-dingwei' style={{fontSize:"0.4533rem"}}></i><span>四川大学</span></div>
                    </div>
                    <div className='search'  ref='search' onScrollCapture={this.fixSearch} id='searchbox'>
                        <div className='search-content'>
                            <span>搜索饿了么商家、商品名称</span>
                        </div>
                    </div>
                    
                </div>
                <div className='swiper'>
                <ul className='swiper-box'>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/meishi.webp" alt=""/></div>
                        <div>美食</div>
                    </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/wancan.webp" alt=""/></div>
                        <div>晚餐</div>
                        </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/shangchaobianli.webp" alt=""/></div>
                        <div>商超便利</div>
                        </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/shuiguo.webp" alt=""/></div>
                        <div>水果</div>
                        </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/yiyaojiankang.webp" alt=""/></div>
                        <div>医药健康</div>
                        </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/langmanxianhua.webp" alt=""/></div>
                        <div>浪漫鲜花</div>
                        </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/paotuidaigou.webp" alt=""/></div>
                        <div>跑腿代购</div>
                        </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/hanbaopisa.webp" alt=""/></div>
                        <div>汉堡皮萨</div>
                        </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/chufangshengxian.webp" alt=""/></div>
                        <div>厨房生鲜</div>
                        </li>
                    <li>
                        <div><img src="http://localhost:8888/imgs/index/imgs/tianpingyingping.webp" alt=""/></div>
                        <div>甜品饮品</div>
                        </li>
                </ul>
                </div>
                <div className='taocanbox'>
            <div className='taocan'>
                <div className='taocan-title'>品质套餐</div>
                <div className='taocan-title2'>搭配齐全吃得好</div>
                <div className='taocan-title3'>立即抢购 ></div>
                <div className='taocan-img'><img src="http://localhost:8888/imgs/index/imgs/pinzhitaocan.webp" alt=""/></div>
            </div>
                </div>
                <div className='tuijian'>
                    <span>推荐商家</span>
                </div>
                <div className='paixu'>
                    <ul>
                        <li>综合排序</li>
                        <li>距离最近</li>
                        <li>品质联盟</li>
                        <li>筛选</li>
                    </ul>
                </div>
                <div className='store'>
                    <div className='shopinfo'>
                        <div className='logo-main'><img src="http://localhost:8888/imgs/index/imgs/shiqijia.webp" alt=""/></div>
                        <div className='logo-right'>
                            <div className='store-title'><div>食其家(锦华伊藤店)</div></div>
                            <div className='store-star'>
                                <img src="http://localhost:8888/imgs/index/imgs/4star.svg" alt=""/>
                                <span>4.7</span><span>月售930单</span>
                            </div>
                                <div className='peisong'>
                                    <div className='peisong-left'><span>￥15起送</span><span>|</span><span>配送费￥4</span></div>
                                    <div className='peisong-right'><span>2.31km</span><span>|</span><span>30分钟</span></div>
                                </div>
                        </div>
                    </div>
                    <div className='shopbottom'>
                        <div className='store-tag'><span>其他快餐</span></div>
                        <div className='newuser'>
                            <div><p>新用户下单立减17元</p><p>3个活动</p></div>
                            <p>新客特价商品1元起</p>
                        </div>
                    </div>
                </div>
                <div className='store'>
                    <div className='shopinfo'>
                        <div className='logo-main'><img src="http://localhost:8888/imgs/index/imgs/shiqijia.webp" alt=""/></div>
                        <div className='logo-right'>
                            <div className='store-title'><div>食其家(锦华伊藤店)</div></div>
                            <div className='store-star'>
                                <img src="http://localhost:8888/imgs/index/imgs/4star.svg" alt=""/>
                                <span>4.7</span><span>月售930单</span>
                            </div>
                                <div className='peisong'>
                                    <div className='peisong-left'><span>￥15起送</span><span>|</span><span>配送费￥4</span></div>
                                    <div className='peisong-right'><span>2.31km</span><span>|</span><span>30分钟</span></div>
                                </div>
                        </div>
                    </div>
                    <div className='shopbottom'>
                        <div className='store-tag'><span>其他快餐</span></div>
                        <div className='newuser'>
                            <div><p>新用户下单立减17元</p><p>3个活动</p></div>
                            <p>新客特价商品1元起</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}