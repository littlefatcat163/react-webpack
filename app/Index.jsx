import React from "react";
import { Link } from "react-router";
import TestES6 from "./TestES6.jsx";
import Test1 from "./Test1.jsx";
import ExtendBaseComponent from "./ExtendBaseComponent.jsx";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test1 : <Test1 xref="c" state_1="state_1_test1_" className="prop_className_test1_" other="prop_other_test1_"/>,
      test2 : <ExtendBaseComponent xref="b"/>,
    }
  }
  render() {
      return (
        <div>
          <h1>我是 Index </h1>
          <Link to="/first" activeStyle={{color : "red"}}>to first</Link>
          <br />
          <Link to="second" activeStyle={{color : "bule"}}>to second</Link>
          <br/>
          <TestES6 ref="testes6" state_1="state_1" className="prop_className" other="prop_other" />
          <Test1 xref="test1" state_1="state_1_test1" className="prop_className_test1" other="prop_other_test1"/>
          <br/>
          <button onClick={e=>this.ttt(e)}>index btn</button>
          <hr/>
          {this.state.test1}
          <button onClick={e=>this.delNew(e)}>delete state test1</button>
          <hr/>
          <hr/>
          {this.state.test2}
          <button onClick={e=>this.testNew(e)}>testNew</button>
          <hr/>
        </div>
      );
  }
  /*

  */

  ttt(e) {
    this.refs.testes6.click1();
    this.refs.test1.click2();
    console.log(this.refs.test1.publicMethod("xxxxxx"));
  }

  delNew(e) {
    this.refs.c.newSetState();
    this.setState({test1 : null});
  }

  testNew(e) {
    this.refs.b.timeout();
    this.setState({test2 : null});
  }

}
