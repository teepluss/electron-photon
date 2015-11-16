'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./components/Header.jsx');
var Navigator = require('./components/Navigator.jsx');
var Content = require('./components/Content.jsx');

var Home = require('./components/home/Index.jsx');

var KiosApp = React.createClass({
  getInitialState: function() {
    return {
      component: Home
    }
  },
  componentDidMount: function() {
      //
  },
  changeComponent: function(data) {
    this.setState({
      component: data.component
    })
  },
  render: function() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          <div className="pane-group">
            <Navigator changeComponent={this.changeComponent} />
            <Content component={this.state.component} />
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<KiosApp />, document.getElementById('app'));
