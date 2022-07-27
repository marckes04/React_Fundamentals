import React,{Component} from "react";

class  Welcome extends Component{
    
        constructor(){
            super(); // Call super class constructor
            this.state = {name:"Mario Espitia", age: 27};
        }


        changeData(){
            debugger;
            this.setState({
                name: "Peter Warry",
                age: 38
            });
        }

        render(){
        return(
            <div>
                <h2>
                    Name is {this.state.name} and Age is {this.state.age}
                    <button onClick={() => this.changeData()}>change details</button>
                </h2>
            </div>
        );
    }
}

export default Welcome;