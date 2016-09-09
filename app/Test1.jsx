import React from "react";
import TestES6 from "./TestES6.jsx";

export default class Test1 extends TestES6 {
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
}
