import React, { Component } from "react";
class HelloClass extends Component {
    render() {
        return (
            <>
                <h2>Hello From Stateful class component!</h2>
                <h3>Hello {this.props.name}, your age is {this.props.age}</h3>

            </>
        );
    }
}

export default HelloClass;