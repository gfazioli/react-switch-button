require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-switch-button":[function(require,module,exports){
'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(_x, _x2, _x3) {
  var _again = true;_function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = require('react');

var SwitchButton = function (_React$Component) {
  _inherits(SwitchButton, _React$Component);

  function SwitchButton(props) {
    _classCallCheck(this, SwitchButton);

    _get(Object.getPrototypeOf(SwitchButton.prototype), 'constructor', this).call(this, props);
  }

  _createClass(SwitchButton, [{
    key: 'handleChange',
    value: function handleChange() {
      // you can override this method
    }
  }, {
    key: 'render',
    value: function render() {
      var id = undefined,
          label = undefined,
          labelRight = undefined,
          mode = this.props.mode || "switch";

      if (this.props.id === '' && this.props.name !== '') {
        id = this.props.name;
      }

      if (this.props.label !== '') {
        label = React.createElement('label', { htmlFor: id }, this.props.label);
      }

      if (this.props.labelRight !== '') {
        labelRight = React.createElement('label', { htmlFor: id }, this.props.labelRight);
      }

      if (['switch', 'select'].indexOf(mode) < -1) {
        mode = "switch";
      }

      return React.createElement('div', { className: 'rsbc-switch-button rsbc-mode-' + mode + ' ' + this.props.theme + (this.props.disabled ? " disabled" : "") }, label, React.createElement('input', { onChange: this.props.onChange,
        defaultChecked: this.props.defaultChecked,
        disabled: this.props.disabled,
        id: id,
        name: this.props.name,
        type: 'checkbox',
        value: '1' }), React.createElement('label', { htmlFor: id }), labelRight);
    }
  }]);

  return SwitchButton;
}(React.Component);

SwitchButton.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  title: React.PropTypes.string,
  label: React.PropTypes.string,
  labelRight: React.PropTypes.string,
  defaultChecked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  theme: React.PropTypes.string,
  checked: React.PropTypes.string,
  mode: React.PropTypes.string,
  onChange: React.PropTypes.func
};

SwitchButton.defaultProps = {
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
  onChange: SwitchButton.handleChange
};

module.exports = SwitchButton;

},{"react":undefined}]},{},[]);
