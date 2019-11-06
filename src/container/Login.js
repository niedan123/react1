import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    用户名 <input type="text"/><br/>
                    密码 <input type="password"/><br/>
                    <Link to='/home/all/1'><button>登录</button></Link>
                </form>
            </div>
        )
    }
}
