import React from "react";

// their is no class based component without the render method 
// this render method returns a JSX just like  functional component returns

class ClassNestedRoutes extends React.Component{

    // constructor is the first thing which is called when a class is invoked
    constructor(props){
        super(props);
        console.log("constructor called")
        // state management in react > an Object
        this.state = {
            // we can create multiple state variable
            count : 5,
            count2 : 6,
            productInfo:{
               
            },

        }
    }

    async componentDidMount(){
        // API CALL DONE HERE 
        // WHY?
        // first constructor method is called then the render and then componentDidMount 
        const data = await fetch("https://dummyjson.com/products"); 
        const response = await data.json();
        this.setState({
            productInfo:response.products,
        });
        console.log("Component did Mount")
        
    }

    componentDidUpdate(){
        console.log("component Updated")
    }

    componentWillUnmount(){
        console.log("component Will Unmount")
        // this happens when we move away from our original component
    }

    

    render(){
        return (
            <div>
            <h1>hi i am Class Component</h1>
            <h2>Name : {this.props.name}</h2>
            <h2>Count:{this.state.count +"  Count2:"+  this.state.count2 }</h2>
            {/* for setting a state in react we use this.setState */}

            <button className="bg-red-500" onClick={() => {
                this.setState({
                    count:567,
                    count2:437,
                }) 
            }}>Count
            </button>
            {/* {
                this.state.productInfo.map((item,index)=> {
                    <li key={index}>{item.title}</li>
                })
            } */}


            </div>
        )
    }
}

export default ClassNestedRoutes