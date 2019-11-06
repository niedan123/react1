import React, { Component } from 'react'

export default class Content extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let page=this.props.match.params.page;
        let idx=this.props.match.params.idx;
        console.log(this.props.match.params);
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data[idx].content});
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.page!==this.props.match.params){
            let page=this.props.match.params.page;
            let idx=this.props.match.params.idx;
            fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data[idx].content});
                })
        }
    }
    render() {
        return (
            <div style={{width:800}} dangerouslySetInnerHTML={{__html:this.state.data}}></div>
        )
    }
}
