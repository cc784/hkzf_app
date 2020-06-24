import React, { Component, Fragment } from 'react';
// 引入 ant navbar组件
import { NavBar, Icon } from 'antd-mobile';
 class index extends Component { 
 render() { 
    //  console.log(this.props.history) 查看是否能调用 history 
 return ( 
    <div>
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => this.props.history.go(-1)}
      rightContent={[
       
       
      ]}
    >城市选择</NavBar>

   
  </div>
 );  
} 
 } 
 export default index;