/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 14:28:20
 * @LastEditTime: 2019-08-26 14:29:32
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd'

ReactDOM.render(
    <ConfigProvider>
        <App />
    </ConfigProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
