import React from "react";
import { TabBar } from 'antd-mobile';
// 路由
import {  Route} from "react-router-dom";

// 首页
import Index from '../index'
// 找房
import Found from '../found'

// 资讯
import News from '../news'

// 我的
import Mind from '../mind'

class Home extends React.Component {
  // 一般用来组件的初始化工作 
  constructor(props) {
    super(props);
    // 初始化state 而已 
    if(this.props.location.pathname === "/home"){
      this.props.history.push("/home/index");
    }
  }

  renderContent(pageText) {
    
    return (
      <div >
        <i className="iconfont icon-edit"></i>
        {pageText}
      </div>
    );
  }
  
  // 负责显示组件的标签 视图
  render() {
    console.log(this.props)
    const {location,history} =this.props
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i className="iconfont icon-ind"></i> }
            selectedIcon={<i className="iconfont icon-ind"></i> }
            selected={location.pathname === './home/index'}
            onPress={() => { history.push('/home/index')}}
            data-seed="logId"
          >
            <Route component={Index} path="/home/index"></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={ <i className="iconfont icon-findHouse"></i>  }
            selectedIcon={ <i className="iconfont icon-findHouse"></i>  }
            title="找房"
            key="found"
            
            selected={location.pathname === '/home/found'}
            onPress={() => history.push('/home/found')}

            data-seed="logId1"
          >
            <Route component={Found} path="/home/found"></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={ <i className="iconfont icon-infom"></i> }
            selectedIcon={ <i className="iconfont icon-infom"></i> }
            title="资讯"
            key="news"
     
            selected={location.pathname === '/home/news'}
            onPress={() =>  history.push('/home/news')}
          >
              <Route component={News} path="/home/news"></Route>

          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i> }
            selectedIcon={<i className="iconfont icon-my"></i> }
            title="我的"
            key="mind"
            // selected={location.pathname === './home/mind'}
            // onPress={() => history.push('/home/mind')}
            selected={location.pathname === '/home/mind'}
            onPress={() => history.push('/home/mind')}
          >
            <Route component={Mind} path="/home/mind"></Route>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home;