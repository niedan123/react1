import React, { Component } from 'react'
import {Link} from 'react-router-dom'
let page=0;
export default class Job extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        page=this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=job&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
            })
    }
    // shouldComponentUpdate(){

    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.page!==this.props.match.params){
            page=this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?tab=job&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                })
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item,idx)=>(
                        <div style={{height:40,padding:10,float:"left",width:800}}>
                            <img style={{height:30,width:30,float:"left"}} src={item.author.avatar_url}/>
                            <div style={{width:70,float:"left"}}>
                                <p style={{fontSize:14,float:"left",paddingLeft:10,color:"#9e78c0",paddingTop:5}}>
                                    {item.reply_count}
                                </p>
                                <p style={{paddingTop:8,float:"left",fontSize:10}}>/{item.visit_count}</p>
                            </div>
                            <Link to={'/home/job:/'+`${page}`+'/'+`${idx}`} style={{width:500,paddingTop:5,float:"left",overflow:'hidden',whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{item.title}</Link>
                            <p style={{paddingTop:5,float:"right"}}>三天前</p>
                        </div>
                    ))

                }
                <ul id = "slider">
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <li id='li'><Link to={
                            '/home/job/'+item
                        }>{item}</Link></li>
    
                    ))
                }
            </ul>
            </div>
        )
    }
}
