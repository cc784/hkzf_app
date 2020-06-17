//引入axios
import axios from "axios";
//加载提示
import { Toast} from 'antd-mobile';
export const baseURL = 'http://157.122.54.189:9060';
axios.defaults.baseURL = baseURL;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Toast.loading('Loading...', 0); //加载提示
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    setTimeout(function(){ Toast.hide(); },1000)
     //隐藏 toast 需要手动调用 hide
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default axios;