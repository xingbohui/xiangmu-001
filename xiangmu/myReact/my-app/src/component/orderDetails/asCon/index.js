import React,{Component} from 'react'
import InsuranceDetails from '../insuranceDetails/index'
import Seat from '../seat/index'
import Luggage from '../luggage/index'
import Meals from '../meals/index'
export default class AsCon extends Component{
    
     
    render(){
        let arr = [
             <InsuranceDetails/>,
             <Seat/>,
             <Luggage/>,
             <Meals/>
        ]
        return(
            <div>
                {arr[this.props.index]}
            </div>
            )
    }
}
