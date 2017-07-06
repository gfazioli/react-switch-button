'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

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
   * @returns {{id: string, name: string, title: string, label: string, labelRight: string, defaultChecked: string, theme: string, checked: boolean, onChange: *}}
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
      checked: false,
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
      label = _react2['default'].createElement(
        'label',
        { htmlFor: id },
        this.props.label
      );
    }

    if (this.props.labelRight !== '') {
      labelRight = _react2['default'].createElement(
        'label',
        { htmlFor: id },
        this.props.labelRight
      );
    }

    if (['switch', 'select'].indexOf(mode) < -1) {
      mode = "switch";
    }

    return _react2['default'].createElement(
      'div',
      { className: 'rsbc-switch-button rsbc-mode-' + mode + ' ' + this.props.theme + (this.props.disabled ? " disabled" : "") },
      label,
      _react2['default'].createElement('input', { onChange: this.props.onChange,
        defaultChecked: this.props.defaultChecked,
        disabled: this.props.disabled,
        id: id,
        name: this.props.name,
        checked: this.props.checked,
        type: 'checkbox',
        value: '1' }),
      _react2['default'].createElement('label', { htmlFor: id }),
      labelRight
    );
  }

});

exports['default'] = SwitchButton;
module.exports = exports['default'];