import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
  return(
    <div>
      <div class='navbar'>
        <div class='navbar-inner'>
          <div class='container'>
            <a class='brand' href='/'>
              <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" />
            </a>
            <form id='search_form' class='navbar-search' action="/search">
              <input type='text' id='q' name='q' class='search-query span3' value=''/>
            </form>
            <ul class='nav pull-right headerwrap'>
              <Link to='/home'>首页</Link>
              <Link to='/start'>新手入门</Link>
              <Link to='/api'>API</Link>
              <Link to='/about'>关于</Link>
              <Link to='/login'>登录</Link>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  )
}
