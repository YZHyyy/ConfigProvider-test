/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 14:28:20
 * @LastEditTime: 2019-08-26 15:03:48
 * @LastEditors: Please set LastEditors
 */
import  "react-app-polyfill/ie11";
import  "react-app-polyfill/stable";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd'

ReactDOM.render(
    <ConfigProvider>
        <App />
    </ConfigProvider>
, document.getElementById('root'));

