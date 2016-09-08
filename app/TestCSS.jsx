import React from "react";
import "./testcss.scss";

export default class Hello extends React.Component {
  render() {
      return (
        <div>
          <div className="xxx"></div>
          <div className="small"></div>
          <div className="big"></div>
          <div className="test"></div>
          <div className="test1"></div>
          <h1>demo with 中文 </h1>
        </div>
      );
  }
}
