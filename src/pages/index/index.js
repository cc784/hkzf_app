import React, { Component,  } from 'react';
// 轮播图 引入
import { Carousel,  } from 'antd-mobile';
//axios 引入
import axios,{baseURL} from "../../utils/request"

 class index extends Component { 
     state={
         //轮播图数组
         carouselList: [],
         //轮播图a标签高度
         imgHeight: 176,
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
    </div>
 );  
} 
 } 
 export default index;