import React from "react";
import TestES6 from "./TestES6.jsx";

export default class Test1 extends TestES6 {

  atom = {
    value : 1,
    addValue(value) {
      return this.value + value;
    },
  }

  render() {
    return(
      <div>
        <h1>我是 Test1 </h1>
        <h2>{this.state.state_1}</h2>
        <button onClick={e=>this.click1(e)}>button</button>
        <button onClick={e=>this.click2(e)}>btn2</button>
      </div>
    )
  }

  click2(e) {
    console.log(this.atom.addValue(2));
    this.indefiniteParam([1, 'xxx']);
    this.indefiniteParam('first', 2, 3);
  }

  indefiniteParam(...args) {
    console.log(args);
  }

  newSetState(){
    setTimeout(()=>this.setState({state_1 : "x"}), 1000);
  }
}
