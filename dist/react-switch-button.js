(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reactSwitchButton = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var SwitchButton = _react2['default'].createClass({

  // Display name
  displayName: 'Switch Button',

  // Version
  version: '2.2.2',

  /**
   * The props types.
   */
  propTypes: {
    id: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.string,
    label: _react2['default'].PropTypes.string,
    labelRight: _react2['default'].PropTypes.string,
    defaultChecked: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    theme: _react2['default'].PropTypes.string,
    checked: _react2['default'].PropTypes.string,
    mode: _react2['default'].PropTypes.string,
    onChange: _react2['default'].PropTypes.func
  },

  /**
   * Default props.
   *
   * @returns {{id: string, name: string, title: string, label: string, labelRight: string, defaultChecked: string, theme: string, checked: null, onChange: *}}
   */
  getDefaultProps: function getDefaultProps() {
    return {
      id: '',
      name: 'switch-button',
      title: '',
      label: '',
      labelRight: '',
      disabled: false,
      defaultChecked: false,
      theme: 'rsbc-switch-button-flat-round',
      checked: null,
      mode: "switch",
      onChange: this.handleChange
    };
  },

  // Handle change
  handleChange: function handleChange() {
    // Override
  },

  /**
   * Render Switch Button control
   *
   * @returns {XML}
   */
  render: function render() {
    var id = undefined,
        label = undefined,
        labelRight = undefined,
        mode = this.props.mode || "switch";

    if (this.props.id === '' && this.props.name !== '') {
      id = this.props.name;
    }

    if (this.props.label !== '') {
      label = _react2['default'].createElement('label', { htmlFor: id }, this.props.label);
    }

    if (this.props.labelRight !== '') {
      labelRight = _react2['default'].createElement('label', { htmlFor: id }, this.props.labelRight);
    }

    if (['switch', 'select'].indexOf(mode) < -1) {
      mode = "switch";
    }

    return _react2['default'].createElement('div', { className: 'rsbc-switch-button rsbc-mode-' + mode + ' ' + this.props.theme + (this.props.disabled ? " disabled" : "") }, label, _react2['default'].createElement('input', { onChange: this.props.onChange,
      defaultChecked: this.props.defaultChecked,
      disabled: this.props.disabled,
      id: id, name: this.props.name,
      type: 'checkbox',
      value: '1' }), _react2['default'].createElement('label', { htmlFor: id }), labelRight);
  }

});

exports['default'] = SwitchButton;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});