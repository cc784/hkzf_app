import React, { Component } from 'react';
import indexCss from "./index.module.scss";
// 连接器 --这个连接器是怎么找到我写属性？
import { connect } from "react-redux";
// 异步aciton
import { getLocalCityAction } from '../../store/actionCreator';
class index extends Component {
  componentDidMount(){
    this.props.initCity();
  }
  render() {
    return (
      <div className={indexCss.city_input}>
        <div className={indexCss.input_wrap}>
          <div className={indexCss.city_label}>
            <span>{this.props.cityName}</span>
            <i className={
              [
                "iconfont",
                "icon-arrow",
                indexCss["icon-arrow"]
              ].join(" ")
            }></i>
          </div>
          <div className={indexCss.city_address}>
            {/*  iconfont icon-seach 不能改 图标就无法显示 */}
            {/*  */}
            <i className={
              [
                "iconfont",
                "icon-seach",
                indexCss["icon-seach"]
              ].join(" ")
            }></i>
            <span>请输入小区或地址</span>
          </div>
        </div>
        <div className={indexCss.map_point}>
          <i className={
            [
              "iconfont",
              "icon-map",
              indexCss["icon-map"]
            ].join(" ")
          }></i>
        </div>

      </div>
    );
  }
}
// 负责将仓库中的数据映射到组件的props当中
const mapStateToProps=(state)=>{
  return{
    cityName:state.mapReducer.city.name
  }
}

// 负责将 action 映射到组件的props中
const mapDispathToprops = (dispath)=>{
  return{
    initCity(){
      dispath(getLocalCityAction());
    }
  }
}
export default connect(mapStateToProps,mapDispathToprops)(index);