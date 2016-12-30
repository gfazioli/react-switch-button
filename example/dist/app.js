require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react'),
    ReactDom = require('react-dom'),
    SwitchButton = require('react-switch-button');

var App = React.createClass({
  displayName: 'App',

  onChange: function onChange(e) {
    var theme = this.state.theme === 'rsbc-switch-button-flat-square' ? 'rsbc-switch-button-flat-round' : 'rsbc-switch-button-flat-square';

    this.setState({
      theme: theme
    });
  },

  getInitialState: function getInitialState() {

    return {
      theme: 'rsbc-switch-button-flat-round'
    };
  },

  render: function render() {

    var code = [{
      label: "Simple usage",
      code: '<SwitchButton name="switch-1" />', object: React.createElement(SwitchButton, { theme: this.state.theme, name: 'switch-1' })
    }, {
      label: "Set Theme",
      code: '<SwitchButton name="switch-1t" theme="rsbc-switch-button-flat-square" defaultChecked={true} />',
      object: React.createElement(SwitchButton, { name: 'switch-1t',
        theme: 'rsbc-switch-button-flat-square',
        defaultChecked: true })
    }, {
      label: "Set initial status",
      code: '<SwitchButton name="switch-2" defaultChecked={true} />',
      object: React.createElement(SwitchButton, { name: 'switch-2',
        theme: this.state.theme,
        defaultChecked: true })
    }, {
      label: "Add left label",
      code: '<SwitchButton name="switch-3" label="Click me" defaultChecked={true} />',
      object: React.createElement(SwitchButton, { name: 'switch-3',
        theme: this.state.theme,
        label: 'Click me',
        defaultChecked: true })
    }, {
      label: "Add right label",
      code: '<SwitchButton name="switch-4" labelRight="Click me" defaultChecked={true} />',
      object: React.createElement(SwitchButton, { name: 'switch-4',
        theme: this.state.theme,
        labelRight: 'Click me',
        defaultChecked: true })
    }, {
      label: "Add left and right label",
      code: '<SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked={true} />',
      object: React.createElement(SwitchButton, { name: 'switch-5',
        theme: this.state.theme,
        label: 'Both',
        labelRight: 'Click me',
        defaultChecked: true })
    }, {
      label: "Disabled when On",
      code: '<SwitchButton name="switch-6" label="Disabled" disabled={true} defaultChecked={true} />',
      object: React.createElement(SwitchButton, { name: 'switch-6',
        theme: this.state.theme,
        label: 'Disabled',
        disabled: true,
        defaultChecked: true })
    }, {
      label: "Disabled when Off",
      code: '<SwitchButton name="switch-7" label="Disabled" disabled={true} />',
      object: React.createElement(SwitchButton, { name: 'switch-7',
        theme: this.state.theme,
        label: 'Disabled',
        disabled: true })
    }];

    var rows = code.map(function (o, i) {

      return React.createElement(
        'div',
        { className: 'example',
          key: i },
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
      React.createElement(
        'div',
        { className: 'example' },
        React.createElement(
          'h3',
          null,
          'New in v.2.1.0'
        )
      ),
      React.createElement(SwitchButton, { name: 'switch-theme', label: 'Switch Theme', onChange: this.onChange }),
      React.createElement('hr', null),
      rows
    );
  }
});

ReactDom.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-switch-button":undefined}]},{},[1]);
