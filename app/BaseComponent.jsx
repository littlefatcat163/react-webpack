import React from "react";
import BaseReactComponent from "./BaseReactComponent.jsx";

export default class BaseComponent extends BaseReactComponent {
  constructor(props) {
    super(props);
    this.state = {a : 1}
  }

  render() {
    return (
      <div>
        <h1> I am BaseComponent </h1>
        {this.state.a}
      </div>
    )
  }

  test() {
    let _state = Object.assign({}, this.state);
    _state.a++;
    super.__setState(_state);
  }

  timeout() {
    setTimeout(()=>super.__setState({a:-1}), 1000);
  }
}
