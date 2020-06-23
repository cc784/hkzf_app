// 引入管理员
import reducer from "./reducer";
//  applyMiddleware 中间建使用工具
import { createStore ,applyMiddleware } from 'redux';
// 
import thunk from "redux-thunk";
// export default createStore(reducer);
export default createStore(reducer,applyMiddleware(thunk));