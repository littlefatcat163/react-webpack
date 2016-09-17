import React from "react";
import ReactDom from "react-dom";
import 'babel-polyfill';//浏览器兼容 ie >= 9
//require("babel-polyfill");
//import TestCSS from "./TestCSS.jsx";
import "./testcss.scss";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
import Main from "./Main.jsx";
import Index from "./Index.jsx";
import First from "./First.jsx";
import Second from "./Second.jsx";
//import LocationParam from "./LocationParam.jsx";
//<Route path=":userName/:id" component={LocationParam} />
(function(){
  ReactDom.render((
     <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Index} />
          <Route path="first" component={First} />
          <Route path="second" component={Second} />

          <Redirect from="*.png" to="images/*.*"/>
        </Route>
        <Route path="images/*.*" />
     </Router>
  ), document.getElementById("app"));
}())
