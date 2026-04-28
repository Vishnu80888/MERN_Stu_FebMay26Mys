import { Component } from "react";
import { React } from "react";

export class ClassComponentState extends Component{
    //constructor: runs once when component is first created 
    constructor(props){
        super(props);   //calls parent constructor first 
        this.state = { count:0 };    //state is going to be here and stays even after the re-renders
    }
    //2. Event handler : arrow function to handle 'this' binding 
    increment = () => {
        this.setState((prevState) =>({
            count:prevState.count + 1
        }));
    };
    //3. render : state/props change
     render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Class Component State</h2>

        <h1>{this.state.count}</h1>

        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}