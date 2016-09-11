import React from "react";

const __enable = Symbol("__enable");

export default class BaseComponent extends React.Component {

  // _bind(...methods) {
  //   methods.forEach((method) => {
  //     this[method] = this[method].bind(this);
  //   });
  // }

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

// export var BaseComponent = ComposedComponent => class extends React.Component {
//
//     displayName = "BaseComponent";
//
//     constructor(props) {
//         super(props);
//         this[__enable] = true;
//     }
//
//     componentWillUnmount() {
//       this[__enable] = false;
//     }
//
//     __setState(obj) {
//       if(this[__enable] && obj) this.setState(obj);
//     }
//
//     render() {
//         return <ComposedComponent {...this.props} {...this.state} />;
//     }
// }
