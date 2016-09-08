import React from "react";
import $ from "jquery";

export default class LocationParam extends React.Component {
  render() {
      return (
        <div>
          <h1>我是 LocationParam </h1>
        </div>
      );
  }
  componentDidMount() {
    console.log(this.context);
  }
}
