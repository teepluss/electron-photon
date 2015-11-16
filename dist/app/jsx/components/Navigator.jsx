'use strict';

var React = require('react');
var classNames = require('classnames');

var Navigator = React.createClass({
  getInitialState: function() {
    return {
      active: 'home',
      navigatorItems: [
        {
          'name': 'home',
          'title': 'Home',
          'iconClass': 'icon-home',
          'component': require('./home/Index.jsx')
        },
        {
          'name': 'download',
          'title': 'Download',
          'iconClass': 'icon-download',
          'component': require('./download/Index.jsx')
        }
      ]
    }
  },
  componentDidMount: function() {
    //
  },
  _handleClick: function(data) {
    this.setState({
      active: data.name
    });

    this.props.changeComponent({
      component: data.component
    });
  },
  render: function() {
    return (
      <div className="pane pane-sm sidebar">
        <nav className="nav-group">
          <h5 className="nav-group-title">Favorites</h5>
          {this.state.navigatorItems.map(function(v, i) {
            var itemClass = classNames({
              'nav-group-item': true,
              'active': this.state.active === v.name
            });
            var iconClass = classNames('icon', v.iconClass);

            return (
              <span className={itemClass} onClick={() => this._handleClick(v)} key={'nav-' + v.name}>
                <span className={iconClass}></span>
                {v.title}
              </span>
            )
          }.bind(this))}
        </nav>
      </div>
    )
  }
});

module.exports = Navigator;
