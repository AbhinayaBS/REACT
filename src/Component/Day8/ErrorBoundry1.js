import { Component } from "react";

export default class ErrorBoundry1 extends Component{
    state={hasError:false}

    static getDerivedStateFormError(error){
        return{
            hasError: true
        }
    }

    componentDidCatch(error,info)
    {
        console.log(error);
        console.log(info)
    }
    render()
    {
        if(this.state.hasError === true)
        {
            return <h1>Somewhere it Went Wrong</h1>
        }
        return this.props.children
    }
}