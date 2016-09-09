import React from "react";
import $ from "jquery";
import _$ from "./bootstrap-typeahead.js"

export default class First extends React.Component {
  render() {
      return (
        <div>
          <h1>我是 First </h1>
          <input type="text" id="demo"/>
        </div>
      );
  }

  componentDidMount() {
    $('#demo').typeahead({
        source: [
            { id: 1, name: 'Toronto' },
            { id: 2, name: 'Montreal' },
            { id: 3, name: 'New York' },
            { id: 4, name: 'Buffalo' },
            { id: 5, name: 'Boston' },
            { id: 6, name: 'Columbus' },
            { id: 7, name: 'Dallas' },
            { id: 8, name: 'Vancouver' },
            { id: 9, name: 'Seattle' },
            { id: 10, name: 'Los Angeles' }
        ]
    });
  }
}
