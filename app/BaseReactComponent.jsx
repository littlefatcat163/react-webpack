import React from "react";

const __enable = Symbol("__enable");

export default class BaseReactComponent extends React.Component {

  constructor(props) {
    super(props);
    this[__enable] = true;
  }

  componentWillUnmount() {
    this[__enable] = false;
  }

  __setState(obj) {
    if(this[__enable] && obj) this.setState(obj);
  }

}
