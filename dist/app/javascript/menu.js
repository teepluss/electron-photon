'use strict';

var remote = require('remote')
var Menu = remote.require('menu')
var MenuItem = remote.require('menu-item')

// Build our new menu
var menu = new Menu()
menu.append(new MenuItem({
  label: 'Delete',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Deleted')
  }
}))
menu.append(new MenuItem({
  label: 'More Info...',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Here is more information')
  }
}))

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);

/*
// NOTE: the following assumes an ES6 environment
// The remote module is required to call main process modules
const remote = require('remote');
const Menu = remote.require('menu');
const MenuItem = remote.require('menu-item');

const currentWindow = remote.getCurrentWindow();

let rightClickPosition = null;

const menu = new Menu();
menu.append(new MenuItem({ label: 'Inspect Element', click: () => {
  currentWindow.inspectElement(rightClickPosition.x, rightClickPosition.y);
} }));

window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  rightClickPosition = {x: e.x, y: e.y};
  menu.popup(currentWindow);
}, false);
*/
