import { Component } from "react";

class StateClassComp extends Component{
        // creation of state 
        state={
            color:"Orange",
            price:510
        }
        // creation of function to change value
        handleChange=()=>{this.setState({color:"Lilac"})}
        render(){
        return(
            <div>
                <h1>The color i have selected is {this.state.color} the price is {this.state.price}</h1>
                {/* dynamic rendering */}
                <button onClick={this.handleChange}>click me</button>
            </div>
        )
    }
}
export default StateClassComp;