import React from "react";

export default class TestES6 extends React.Component {
  num = 1;
  constructor(props) {
    super(props);
    this.state = {
      state_1 : this.props.state_1
    };
  }

  render() {
      return (
        <div>
          <h1>我是 TestES6 </h1>
          <h2>{this.state.state_1}</h2>
          <button onClick={e=>this.click1(e)}>button</button>
          <button onClick={e=>this.click2(e)}>btn2</button>
        </div>
      );
  }

  click1(e) {
    let {
      className,
      ...others
    } = this.props;
    console.log(className);
    console.log(others);

    this.setState({state_1 : "xxxx"});
    this.nextClick({first : "_first", second : "_second"});
  }

  click2(e) {
    let map = new Map();
    map.set("first", "1");
    map.set("second", 2);
    for(let [key, value] of map)
      console.log(key + " is " + value);

    this.nextClick(map);
  }

  nextClick({first, second}) {
    console.log("-> 解构引用start -");
    console.log(first);
    console.log(second);
    console.log("-> 解构引用end -");
  }
}

TestES6.defaultProps = {
  state_1 : "state_1"
}

TestES6.propTypes = {
  state_1 : React.PropTypes.string.isRequired
}
