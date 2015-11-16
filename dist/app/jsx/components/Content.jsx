'use strict';

var React = require('react');

var Content = React.createClass({
  render: function() {
    var Component = this.props.component;
    return (
      <Component />
    );
  }
});

module.exports = Content;
