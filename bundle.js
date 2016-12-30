require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-switch-button":[function(require,module,exports){
'use strict';

var React = require('react');

var SwitchButton = React.createClass({

  // Display name
  displayName: 'Switch Button',

  // Version
  version: '2.1.0',

  /**
   * The props types.
   */
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    title: React.PropTypes.string,
    label: React.PropTypes.string,
    labelRight: React.PropTypes.string,
    defaultChecked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    theme: React.PropTypes.string,
    checked: React.PropTypes.string,
    onChange: React.PropTypes.func
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
        labelRight = undefined;

    if (this.props.id === '' && this.props.name !== '') {
      id = this.props.name;
    }

    if (this.props.label !== '') {
      label = React.createElement(
        'label',
        { htmlFor: id },
        this.props.label
      );
    }

    if (this.props.labelRight !== '') {
      labelRight = React.createElement(
        'label',
        { htmlFor: id },
        this.props.labelRight
      );
    }

    return React.createElement(
      'div',
      { className: 'rsbc-switch-button ' + this.props.theme + (this.props.disabled ? " disabled" : "") },
      label,
      React.createElement('input', { onChange: this.props.onChange,
        defaultChecked: this.props.defaultChecked,
        disabled: this.props.disabled,
        id: id, name: this.props.name,
        type: 'checkbox',
        value: '1' }),
      React.createElement('label', { htmlFor: id }),
      labelRight
    );
  }

});

module.exports = SwitchButton;

},{"react":undefined}]},{},[]);
