import React,{Component} from 'react'
import './style.css'
import AsCon from '../asCon/index'
export default class AdditionalServices extends Component{
    constructor(porps){
        super(porps)
        this.state={
            index:0,
        }
    }
     
    render(){
        let arr = [
            "保险",
            "座位",
            "预付费行李",
            "餐食"
        ]
        return(
            <div id="additionalServices"> 
                <div className="as-title">
                {arr.map((ele,index)=>{
                    return(
                        <li className={this.state.index===index?"as-active":null} onClick={()=>this.setState({index:index})} key={index}>{ele}</li>
                    )
                })}
                </div>
                 <AsCon index={this.state.index}/>
            </div>
        )
    }
}
