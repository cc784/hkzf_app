const BMap = window.BMap;
const BMAP_STATUS_SUCCESS = window.BMAP_STATUS_SUCCESS;

// getCurrentPosition H5  方法用来获取设备当前位置

/**
 * 返回当前的经纬度 和 城市名称 
 */
export const getCurrentPosition = () => {
  return new Promise((reslove, reject) => {
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          console.log(r)
        reslove({
          // 去除掉 广州市 市  
          name: r.address.city.replace("市", ''),
          point: r.point
        });
      }
      else {
        // 失败
        reject(r);
      }
    })
  })
}