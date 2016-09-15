require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react'),
    SwitchButton = require('react-switch-button');

var App = React.createClass({
  displayName: 'App',

  render: function render() {

    var code = [{
      label: "Simple usage",
      code: '<SwitchButton name="switch-1" />', object: React.createElement(SwitchButton, { name: 'switch-1' })
    }, {
      label: "Set initial status",
      code: '<SwitchButton name="switch-2" defaultChecked="checked" />', object: React.createElement(SwitchButton, { name: 'switch-2', defaultChecked: 'checked' })
    }, {
      label: "Add left label",
      code: '<SwitchButton name="switch-3" label="Click me" defaultChecked="checked" />',
      object: React.createElement(SwitchButton, { name: 'switch-3', label: 'Click me', defaultChecked: 'checked' })
    }, {
      label: "Add right label",
      code: '<SwitchButton name="switch-4" labelRight="Click me" defaultChecked="checked" />',
      object: React.createElement(SwitchButton, { name: 'switch-4', labelRight: 'Click me', defaultChecked: 'checked' })
    }, {
      label: "Add left and right label",
      code: '<SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked="checked" />',
      object: React.createElement(SwitchButton, { name: 'switch-5', label: 'Both', labelRight: 'Click me', defaultChecked: 'checked' })
    }];

    var rows = code.map(function (o, i) {

      return React.createElement(
        'div',
        { className: 'example', key: i },
        React.createElement(
          'h3',
          null,
          o.label
        ),
        React.createElement(
          'pre',
          null,
          o.code
        ),
        React.createElement(
          'div',
          { className: 'result' },
          o.object
        )
      );
    });

    return React.createElement(
      'div',
      { className: 'examples' },
      React.createElement(
        'h1',
        null,
        'Say Hello, React Switch Button'
      ),
      rows
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-switch-button":undefined}]},{},[1]);
