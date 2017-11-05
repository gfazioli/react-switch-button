'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchButton = function (_React$Component) {
  _inherits(SwitchButton, _React$Component);

  function SwitchButton(props) {
    _classCallCheck(this, SwitchButton);

    return _possibleConstructorReturn(this, (SwitchButton.__proto__ || Object.getPrototypeOf(SwitchButton)).call(this, props));
  }

  _createClass(SwitchButton, [{
    key: 'render',
    value: function render() {
      try {
        var mode = ['switch', 'select'].indexOf(mode) < -1 ? "switch" : this.props.mode;

        var classes = ["rsbc-switch-button", 'rsbc-mode-' + mode, this.props.theme, this.props.disabled ? " disabled" : ""];

        return _react2.default.createElement(
          'div',
          { className: classes.join(" ").trim() },
          this.props.label.length > 0 ? _react2.default.createElement(
            'label',
            { htmlFor: id },
            this.props.label
          ) : null,
          _react2.default.createElement('input', { onChange: this.props.onChange,
            checked: this.props.checked,
            disabled: this.props.disabled,
            id: id,
            name: this.props.name,
            type: 'checkbox',
            value: '1' }),
          _react2.default.createElement('label', { htmlFor: id }),
          this.props.label.labelRight > 0 ? _react2.default.createElement(
            'label',
            { htmlFor: id },
            this.props.labelRight
          ) : null
        );
      } catch (e) {
        console.log("ERROR", "render", e);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        label: nextProps.label,
        labelRight: nextProps.labelRight,
        disabled: nextProps.disabled,
        checked: nextProps.checked,
        mode: nextProps.mode,
        theme: nextProps.theme,
        title: nextProps.title
      });
    }
  }]);

  return SwitchButton;
}(_react2.default.Component);

SwitchButton.propTypes = {
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  labelRight: _react2.default.PropTypes.string,
  defaultChecked: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  theme: _react2.default.PropTypes.string,
  checked: _react2.default.PropTypes.string,
  mode: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};

SwitchButton.defaultProps = {
  id: "",
  name: "switch-button",
  title: "",
  label: "",
  labelRight: "",
  disabled: false,
  defaultChecked: false,
  theme: "rsbc-switch-button-flat-round",
  checked: false,
  mode: "switch",
  onChange: function onChange() {}
};

exports.default = SwitchButton;