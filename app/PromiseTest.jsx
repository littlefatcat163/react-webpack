import React from "react";

export default class PromiseTest extends React.Component {

  render() {
    return (
      <div>
        <h1> PromiseTest </h1>
        <button onClick={()=>this.test1(1000)}>promiseTest_1</button>
        <button onClick={()=>this.test1("xxx")}>promiseTest_1_error</button>
        <button onClick={()=>this.test2([1000, 2000, 1000])}>promiseTest_2</button>
        <button onClick={()=>this.test2([1000, "xxx", 1000])}>promiseTest_2_error</button>
        <button onClick={()=>this.testError()}>promiseTest_error</button>
      </div>
    )
  }

  test1(time) {
    this.promise1(time)
          .then(value => console.log(value))
          .catch(error => console.log(error));
    console.log("test1...");
  }

  promise1(time) {
    return new Promise(function(resolve, reject){
      if(!Number.isInteger(time)) reject(new Error("fail"));
      setTimeout(resolve, time, time);
    });
  }

  test2(array) {
    var promises = array.map(id => this.promise1(id));
    Promise.all(promises)
           .then(value => console.log(value))
           .catch(error => console.log(error));
  }

  testError() {
    this.promiseError(1)
        .catch(error => console.log(error));
  }

  promiseError(x) {
    return new Promise(function(resolve, reject){
      reject(new Error("there has error"));
      //setTimeout(() => reject(new Error("there has error")), 2000);
    });
  }

}
