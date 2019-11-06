import  { Component } from 'react'
import React from 'react';

import Header from './components/Header';
import Home from './container/Home';
import About from './container/About';
import Api from './container/Api';
import Start from './container/Start';
import Login from './container/Login';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div id='main'>
                        <div id='sider'>
                            <div className='inner'>
                                <p>CNode：Node.js专业中文社区</p>
                                <p>您可以登录或注册， 也可以</p>
                                <Link to='/login'>
                                    <span className="span_info">通过GitHub登录</span>
                                </Link>
                            </div>
                        </div>
                        <div id='content'>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/start' component={Start}></Route>
                            <Route path='/api'component={Api}></Route>
                            <Route path='/about'component={About}></Route>
                            <Route path='/login'component={Login}></Route>
                        </div>

                    </div>
                </div>
            </Router>
        )
    }
}
