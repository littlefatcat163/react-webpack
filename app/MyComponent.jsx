import React from "react";
import { Enhance } from "./Enhance.jsx";

class MyComponent extends React.Component{

    constructor(props) {
      super(props);
      this.state = {xx: 111}
    }

    render() {
        return(
          <div>
            <h1> MyComponent </h1>
          </div>
        )
    }

    componentDidMount() {
      console.log("componentDidMount");
    }
}

export default Enhance(MyComponent);
