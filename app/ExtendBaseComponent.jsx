import React from "react";
import BaseComponent from "./BaseComponent.jsx";

export default class ExtendBaseComponent extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {a : 1}
    //this._bind('render', 'test', 'timeout');
  }

  render() {
    return (
      <div>
        <h1> I am BaseComponent </h1>
        {this.state.a}
      </div>
    )
  }

  componentDidMount() {
    let _state = Object.assign({}, this.state);
    console.log(_state);
    _state.a++;
    super.__setState(_state);
  }

  test() {
    let _state = Object.assign({}, this.state);
    _state.a++;
    this.__setState(_state);
  }

  timeout() {
    setTimeout(()=>this.__setState({a:-1}), 1000);
  }
}

//export default BaseComponent(ExtendBaseComponent);
