'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var SwitchButton = (function (_React$Component) {
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
          id: id,
          name: this.props.name,
          type: 'checkbox',
          value: '1' }),
        React.createElement('label', { htmlFor: id }),
        labelRight
      );
    }
  }]);

  return SwitchButton;
})(React.Component);

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
  onChange: SwitchButton.handleChange
};

module.exports = SwitchButton;