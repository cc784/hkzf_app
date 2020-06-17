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
// 引入局部样式
import indexCss from "./index.module.scss";
 class index extends Component { 
     state={
         //轮播图数组
         carouselList: [],
        //  租房小组数据
        groups:[],
        // 最新资讯
        news:[],
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
      this.getCarousel();
      this.getGroups();
      this.getNews();
     }
    //  获取轮播图数据
    getCarousel =async () =>{
      const res =await axios.get('/home/swiper')
      this.setState({carouselList:res.data.body})
    }
    // 获取租房小组
    getGroups =async () =>{
      const res =await axios.get('/home/groups')
      // console.log(res)
      this.setState({groups:res.data.body});
    }
    // 获取最新資訊
    getNews =async () =>{
      const res =await axios.get('/home/news')
      // console.log(res)
      this.setState({news:res.data.body});
    }
 render() { 
 return ( 
    <div className={indexCss.hk_index}>
        {/* 1 轮播图开始 */}
        <div className={indexCss.index_carousel}>
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
        {/* 1 轮播图结束 */}
        {/* 2 首页导航 开始 */}
        <div className={indexCss.index_nav}>
          {this.state.navs.map(v=><div className={indexCss.nav_item}
          key={v.id}>
            <img src={v.imgSrc} alt=''></img>
            <p>{v.text}</p>
          </div>)}
        </div>
        {/* 2 首页导航 结束 */}
        {/* 3 租房小组 开始*/}
        <div className={indexCss.index_groups}>
          <div className={indexCss.index_groups_title}>
            <span>住房小组</span> <a href='/'>更多</a>
          </div>
          <div className={indexCss.index_groups_content}>
          {this.state.groups.map(v=> <div className={indexCss.groups_item} key={v.id}>
              <div className={indexCss.groups_item_info}>
                <div className={indexCss.groups_item_title}>{v.title}</div>
                <div className={indexCss.groups_item_desc}>{v.desc}</div>
              </div>
              <div className={indexCss.groups_item_img}>
                <img src={baseURL + v.imgSrc} alt=''></img>
              </div>
            </div>)}
          </div>
        </div>
        {/* 3 租房小组 结束*/}
        {/* 4 最新资讯 开始 */}
        <div className={indexCss.index_news}>
          <div className={indexCss.index_news_title}>最新资讯</div>
          <div className={indexCss.index_news_content}>
            {this.state.news.map((v,i)=><div className={indexCss.news_item} key={i}>
            <div className={indexCss.news_item_img}>
              <img src={baseURL+ v.imgSrc} alt=''></img>
            </div>
            <div className={indexCss.news_item_info}>
              <div className={indexCss.news_item_title}>{v.title}</div>
              <div className={indexCss.news_item_desc}>
                <span>{v.from}</span>
                <span>{v.date}</span>
              </div>
            </div>
            </div>)}
          </div>
        </div>
        {/* 4 最新资讯 结束 */}
    </div>
 );  
} 
 } 
 export default index;