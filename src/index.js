import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/fonts/iconfont.css";
import App from './App';
// 引入仓库
import store from './store'
// 传递方式
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

