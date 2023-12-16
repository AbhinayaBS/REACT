import { Component } from "react";

export class ErrorBoundry extends Component{
    state = {
        hasError: false
    }
    static getDerivedStateFormError(error){
        return{
            hasError: true
        }
    }
    render(){
        if(this.state.hasError === true){
            return <h1>Somewhere Something Went Wrong</h1>
        }
        return this.props.children
    }
}