import React, { Component } from 'react';
import indexCss from "./index.module.scss";
console.log(indexCss["icon-seach"]);
class index extends Component {
  render() {
    return (
      <div className={indexCss.city_input}>
        <div className={indexCss.input_wrap}>
          <div className={indexCss.city_label}>
            <span>北京</span>
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
export default index;