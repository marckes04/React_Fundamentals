import React from "react";
import "./Display.css"

const Display = (props) => {
    console.log(props)
    //Props has inmutable properties
  //  props.firstName = "Xyz";
    return (
        <div>
            <div style={{ margin: "auto", backgroundColor: "skyblue", border: "1px solid grey", height: "120px", width: "200px" }}>
                <h3> Hello {props.firstName} {props.lastName}</h3>
                <h4 className="text-styling">Your age is: {props.age}</h4>
            </div>
            {props.children}
        </div>
    );
}

export default Display;