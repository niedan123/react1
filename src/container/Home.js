import React, { Component } from 'react'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import All from './Homes/All/All'
import Good from './Homes/Good/Good'
import Share from './Homes/Share/Share'
import Job from './Homes/Job/Job'
import Questions from './Homes/Questions/Questions'
import AContent from './Homes/All/Content'
import GContent from './Homes/Good/Content'
import JContent from './Homes/Job/Content'
import QContent from './Homes/Questions/Content'
import SContent from './Homes/Share/Content'



export default class Home extends Component {
    render() {
        return (
            <div >
                <div id='header1'>
                    <Link to='/home/all/1'>全部</Link>
                    <Link to='/home/good/1'>精华</Link>
                    <Link to='/home/share/1'>分享</Link>
                    <Link to='/home/questions/1'>问答</Link>
                    <Link to='/home/job/1'>招聘</Link>
                </div>
                <div>
                    <Switch>
                        <Route path='/home/all/:page' component={All}></Route>
                        <Route path='/home/good/:page' component={Good}></Route>
                        <Route path='/home/share/:page' component={Share}></Route>
                        <Route path='/home/questions/:page' component={Questions}></Route>
                        <Route path='/home/job/:page' component={Job}></Route>
                        <Route path='/home/all:/:page/:idx' component={AContent}></Route>
                        <Route path='/home/good:/:page/:idx' component={GContent}></Route>
                        <Route path='/home/job:/:page/:idx' component={JContent}></Route>
                        <Route path='/home/questions:/:page/:idx' component={QContent}></Route>
                        <Route path='/home/share:/:page/:idx' component={SContent}></Route>
                        <Redirect from='/*' to='/home/all/1'></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
