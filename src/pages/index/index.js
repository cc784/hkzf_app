import React, { Component,  } from 'react';
// 轮播图 引入
import { Carousel,  } from 'antd-mobile';
//axios 引入
import axios,{baseURL} from "../../utils/request"
//导入本地图片 
import nav1 from '../../assets/images/nav-1.png';
import nav2 from '../../assets/images/nav-2.png';
import nav3 from '../../assets/images/nav-3.png';
import nav4 from '../../assets/images/nav-4.png';
 class index extends Component { 
     state={
         //轮播图数组
         carouselList: [],
         //轮播图a标签高度
         imgHeight: 176,
         // 导航数组
         navs:[
             {id:0,text:'整租',imgSrc:nav1},
             {id:1,text:'合租',imgSrc:nav2},
             {id:2,text:'地图找房',imgSrc:nav3},
             {id:3,text:'去出租',imgSrc:nav4},
         ]
     }
     async componentDidMount(){
        //  轮播图数据请求
        const res = await axios.get('/home/swiper')
        console.log(res)
        this.setState({carouselList:res.data.body})
     }
 render() { 
 return ( 
    <div>
        {/* 轮播图开始 */}
        <div className='index_carousel'>
        {this.state.carouselList.length &&<Carousel
          autoplay
          infinite
    
        >
          {this.state.carouselList.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={baseURL + val.imgSrc}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>}
        </div>
        {/* 轮播图结束 */}
        {/* 2 首页导航 开始 */}
        <div className='index_nav'>
          {this.state.navs.map(v=><div className="nav_item"
          key='v.id'>
            <img src={v.imgSrc}></img>
            <p>{v.text}</p>
          </div>)}
        </div>
        {/* 2 首页导航 结束 */}
    </div>
 );  
} 
 } 
 export default index;