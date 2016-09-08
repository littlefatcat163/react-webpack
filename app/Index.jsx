import React from "react";
import { Link } from "react-router";

export default class Index extends React.Component {
  render() {
      return (
        <div>
          <h1>我是 Index </h1>
          <Link to="/first" activeStyle={{color : "red"}}>to first</Link>
          <br />
          <Link to="second" activeStyle={{color : "bule"}}>to second</Link>
        </div>
      );
  }
}
