require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSwitchButton = require("react-switch-button");

var _reactSwitchButton2 = _interopRequireDefault(_reactSwitchButton);

var App = _react2["default"].createClass({
  displayName: "App",

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
      code: '<SwitchButton name="switch-1" />',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { theme: this.state.theme,
        name: "switch-1" })
    }, {
      label: "Set Theme",
      code: '<SwitchButton name="switch-1t" theme="rsbc-switch-button-flat-square" defaultChecked={true} />',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-1t",
        theme: "rsbc-switch-button-flat-square",
        defaultChecked: true })
    }, {
      label: "Set initial status",
      code: '<SwitchButton name="switch-2" defaultChecked={true} />',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-2",
        theme: this.state.theme,
        defaultChecked: true })
    }, {
      label: "Add left label",
      code: '<SwitchButton name="switch-3" label="Click me" defaultChecked={true} />',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-3",
        theme: this.state.theme,
        label: "Click me",
        defaultChecked: true })
    }, {
      label: "Add right label",
      code: '<SwitchButton name="switch-4" labelRight="Click me" defaultChecked={true} />',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-4",
        theme: this.state.theme,
        labelRight: "Click me",
        defaultChecked: true })
    }, {
      label: "Add left and right label",
      code: '<SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked={true} />',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-5",
        theme: this.state.theme,
        label: "Both",
        labelRight: "Click me",
        defaultChecked: true })
    }, {
      label: "Disabled when On",
      code: '<SwitchButton name="switch-6" label="Disabled" disabled={true} defaultChecked={true} />',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-6",
        theme: this.state.theme,
        label: "Disabled",
        disabled: true,
        defaultChecked: true })
    }, {
      label: "Disabled when Off",
      code: '<SwitchButton name="switch-7" label="Disabled" disabled={true} />',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-7",
        theme: this.state.theme,
        label: "Disabled",
        disabled: true })
    }, {
      label: "New in v2.2.0 Mode select",
      code: '<SwitchButton name="switch-8" label="Switch mode" mode="select" labelRight="Turn right" label="Turn left"/>',
      object: _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-8",
        mode: "select",
        theme: this.state.theme,
        labelRight: "Turn right",
        label: "Turn left" })
    }];

    var rows = code.map(function (o, i) {

      return _react2["default"].createElement("div", { className: "example",
        key: i }, _react2["default"].createElement("h3", null, o.label), _react2["default"].createElement("pre", null, o.code), _react2["default"].createElement("div", { className: "result" }, o.object));
    });

    return _react2["default"].createElement("div", { className: "examples" }, _react2["default"].createElement("h1", null, "Say Hello, React Switch Button"), _react2["default"].createElement("div", { className: "example" }, _react2["default"].createElement("h3", null, "New in v.2.2.0")), _react2["default"].createElement(_reactSwitchButton2["default"], { name: "new-mode-select",
      mode: "select",
      theme: this.state.theme,
      labelRight: "Turn right",
      label: "Turn left" }), _react2["default"].createElement("div", { className: "example" }, _react2["default"].createElement("h3", null, "New in v.2.1.0")), _react2["default"].createElement(_reactSwitchButton2["default"], { name: "switch-theme",
      label: "Switch Theme",
      theme: this.state.theme,
      onChange: this.onChange }), _react2["default"].createElement("hr", null), rows);
  }
});

_reactDom2["default"].render(_react2["default"].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-switch-button":undefined}]},{},[1]);
