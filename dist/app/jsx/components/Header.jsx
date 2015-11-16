'use strict';

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header className="toolbar toolbar-header">
        <h1 className="title">{'Photon'}</h1>
      </header>
    )
  }
});

module.exports = Header;
