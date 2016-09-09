import React from "react";
import { Link } from "react-router";
import TestES6 from "./TestES6.jsx";
import Test1 from "./Test1.jsx";

export default class Index extends React.Component {
  render() {
      return (
        <div>
          <h1>我是 Index </h1>
          <Link to="/first" activeStyle={{color : "red"}}>to first</Link>
          <br />
          <Link to="second" activeStyle={{color : "bule"}}>to second</Link>
          <br/>
          <TestES6 ref="testes6" state_1="state_1" className="prop_className" other="prop_other" />
          <Test1 ref="test1" state_1="state_1_test1" className="prop_className_test1" other="prop_other_test1"/>
          <br/>
          <button onClick={e=>this.ttt(e)}>index btn</button>
        </div>
      );
  }

  ttt(e) {
    this.refs.testes6.click1();
    this.refs.test1.click2();
  }
}
