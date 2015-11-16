'use strict';

var React = require('react');

// Context menu.
var remote = require('remote')
var Menu = remote.require('menu')
var MenuItem = remote.require('menu-item')

var Index = React.createClass({
  onClick: function() {
    alert('Please do right click!');
  },
  onContextMenu: function(e, id) {
    // Stop global context menu
    e.preventDefault();
    e.stopPropagation();

    // Build our new menu
    var menu = new Menu()
    menu.append(new MenuItem({
      label: 'Copy',
      click: function() {
        // Trigger an alert when menu item is clicked
        alert('Copy Item ' + id);
      }
    }))

    menu.popup(remote.getCurrentWindow());
  },
  render: function() {
    return (
      <div className="pane">
        <div className="app-inside">
          <button onClick={this.onClick} onContextMenu={(e) => this.onContextMenu(e, "Tee")}>{'Download'}</button>
        </div>
      </div>
    )
  }
});

module.exports = Index;
