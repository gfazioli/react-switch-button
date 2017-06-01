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

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var App = (0, _createReactClass2["default"])({

  onChange: function onChange(e) {
    var theme = this.state.theme === 'rsbc-switch-button-flat-square' ? 'rsbc-switch-button-flat-round' : 'rsbc-switch-button-flat-square';

    this.setState({
      theme: theme
    });
  },

  getInitialState: function getInitialState() {
    return {
      theme: 'rsbc-switch-button-flat-round',
      checked: false
    };
  },

  onSwitchCheckedStatus: function onSwitchCheckedStatus() {
    this.setState(function (prevState) {
      return { checked: !prevState.checked };
    });
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

    return _react2["default"].createElement("div", { className: "examples" }, _react2["default"].createElement("h1", null, "Say Hello, React Switch Button"), _react2["default"].createElement("div", { className: "example" }, _react2["default"].createElement("h3", null, "New in v.2.3.0 - controlled component")), _react2["default"].createElement(_reactSwitchButton2["default"], { name: "controlled-component",
      mode: "select",
      theme: this.state.theme,
      checked: this.state.checked,
      onChange: this.onSwitchCheckedStatus }), _react2["default"].createElement("div", { className: "example" }, _react2["default"].createElement("h3", null, "New in v.2.2.0")), _react2["default"].createElement(_reactSwitchButton2["default"], { name: "new-mode-select",
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

},{"create-react-class":undefined,"react":undefined,"react-dom":undefined,"react-switch-button":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy96YXVuZS9Eb2N1bWVudHMvX0RFVi9yZWFjdC1zd2l0Y2gtYnV0dG9uL2V4YW1wbGUvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxQkNBa0IsQUFBTzs7Ozt3QkFDQSxBQUFXOzs7O2lDQUNYLEFBQXFCOzs7O2dDQUN0QixBQUFvQjs7OztBQUU1QyxJQUFNLEFBQUc7O0FBRUMsWUFBRyxrQkFBVSxBQUFDLEdBQ3RCLEFBQ0U7UUFBTSxBQUFLLFFBQUcsQUFBRSxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUssVUFBSyxBQUFnQyxtQ0FBSyxBQUErQixrQ0FBRyxBQUFnQyxBQUU1STs7QUFBSSxTQUFDLEFBQVE7QUFFSixhQUFHLEFBQUssQUFDZCxBQUNGLEFBQUM7QUFIQSxBQUNFO0FBR0wsQUFFRDs7QUFBZSxtQkFBRywyQkFDbEIsQUFDRTs7QUFDTyxhQUFHLEFBQStCLEFBQzFDO0FBQU8sZUFBRSxBQUFLLEFBQ1osQUFBQztBQUhLLEFBQ0w7QUFHSCxBQUVGOztBQUFxQix5QkFBRyxpQ0FDeEIsQUFDQztBQUFJLFNBQUMsQUFBUSxTQUFDLFVBQUMsQUFBUzthQUFNLEVBQUUsQUFBTyxTQUFFLENBQUMsQUFBUyxVQUFDLEFBQU8sQUFBRTtBQUFDLEFBQUM7QUFDL0QsQUFFQTs7QUFBTSxVQUFHLGtCQUNULEFBRUU7O1FBQU0sQUFBSTtBQUVELGFBQUksQUFBYyxBQUN2QjtBQUFJLFlBQUssQUFBa0MsQUFDM0M7QUFBTSxjQUFHLG1FQUFjLEFBQUssT0FBRSxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUssQUFBQyxBQUN4QjtBQUFJLGNBQUMsQUFBVSxBQUFFLEFBQ3pDO0FBTEQsQUFDRSxLQUZTO0FBUUosYUFBSSxBQUFXLEFBQ3BCO0FBQUksWUFBSyxBQUFnRyxBQUN6RztBQUFNLGNBQUcsbUVBQWMsQUFBSSxNQUFDLEFBQVcsQUFD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Qyw4R0FFUSxBQUFJLE1BQUMsQUFBc0IsQUFDbEM7QUFBSSxZQUFDLEFBQVEsQUFDYjtBQUFLLGFBQUUsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFLLEFBQUMsQUFDeEI7QUFBTyxlQUFFLEFBQUksS0FBQyxBQUFLLE1BQUMsQUFBTyxBQUFDLEFBQzVCO0FBQVEsZ0JBQUUsQUFBSSxLQUFDLEFBQXFCLEFBQUMsQUFBRSx1QkFKOUMsR0FNSSwwQ0FBSyxBQUFTLFdBQUMsQUFBUyxhQUN0Qiw2Q0FBdUIsQUFDbkIsdUZBRVEsQUFBSSxNQUFDLEFBQWlCLEFBQ3RCO0FBQUksWUFBQyxBQUFRLEFBQ2I7QUFBSyxhQUFFLEFBQUksS0FBQyxBQUFLLE1BQUMsQUFBSyxBQUFDLEFBQ3hCO0FBQVUsa0JBQUMsQUFBWSxBQUN2QjtBQUFLLGFBQUMsQUFBVyxBQUFFLGFBSmpDLEdBTUEsMENBQUssQUFBUyxXQUFDLEFBQVMsYUFDdEIsNkNBQXVCLEFBQ25CLHVGQUVRLEFBQUksTUFBQyxBQUFjLEFBQ25CO0FBQUssYUFBQyxBQUFjLEFBQ3BCO0FBQUssYUFBRSxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUssQUFBQyxBQUN4QjtBQUFRLGdCQUFFLEFBQUksS0FBQyxBQUFRLEFBQUMsQUFBRSxVQUh4QyxHQUlBLHVDQUFLLE9BQ0osQUFBSSxBQUNELEFBQ047QUFDSCxBQUNGLEFBQUUsQUFBQztBQTVKcUIsQUFFdkIsQ0FGVTs7QUE4Slosc0JBQVMsQUFBTSxPQUFFLGlDQUFDLEFBQUcsS0FBRyxPQUFFLEFBQVEsU0FBQyxBQUFjLGVBQUUsQUFBSyxBQUFFLEFBQUUsQUFBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3REb20gICAgIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBTd2l0Y2hCdXR0b24gZnJvbSBcInJlYWN0LXN3aXRjaC1idXR0b25cIjtcbmltcG9ydCBjcmVhdGVDbGFzc1x0ZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJ1xuXG5jb25zdCBBcHAgPSBjcmVhdGVDbGFzcygge1xuXG4gIG9uQ2hhbmdlIDogZnVuY3Rpb24oIGUgKVxuICB7XG4gICAgY29uc3QgdGhlbWUgPSAoIHRoaXMuc3RhdGUudGhlbWUgPT09ICdyc2JjLXN3aXRjaC1idXR0b24tZmxhdC1zcXVhcmUnICkgPyAncnNiYy1zd2l0Y2gtYnV0dG9uLWZsYXQtcm91bmQnIDogJ3JzYmMtc3dpdGNoLWJ1dHRvbi1mbGF0LXNxdWFyZSdcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHRoZW1lIDogdGhlbWUsXG4gICAgICB9XG4gICAgKTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUgOiBmdW5jdGlvbigpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGhlbWUgOiAncnNiYy1zd2l0Y2gtYnV0dG9uLWZsYXQtcm91bmQnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG4gICAgfTtcbiAgfSxcblx0XG5cdG9uU3dpdGNoQ2hlY2tlZFN0YXR1cyA6IGZ1bmN0aW9uKClcblx0e1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgY2hlY2tlZDogIXByZXZTdGF0ZS5jaGVja2VkIH0pKVxuXHR9LFxuXG4gIHJlbmRlciA6IGZ1bmN0aW9uKClcbiAge1xuXG4gICAgY29uc3QgY29kZSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWwgIDogXCJTaW1wbGUgdXNhZ2VcIixcbiAgICAgICAgY29kZSAgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC0xXCIgLz4nLFxuICAgICAgICBvYmplY3QgOiA8U3dpdGNoQnV0dG9uIHRoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzd2l0Y2gtMVwiLz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsICA6IFwiU2V0IFRoZW1lXCIsXG4gICAgICAgIGNvZGUgICA6ICc8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtMXRcIiB0aGVtZT1cInJzYmMtc3dpdGNoLWJ1dHRvbi1mbGF0LXNxdWFyZVwiIGRlZmF1bHRDaGVja2VkPXt0cnVlfSAvPicsXG4gICAgICAgIG9iamVjdCA6IDxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC0xdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJyc2JjLXN3aXRjaC1idXR0b24tZmxhdC1zcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfS8+XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbCAgOiBcIlNldCBpbml0aWFsIHN0YXR1c1wiLFxuICAgICAgICBjb2RlICAgOiAnPFN3aXRjaEJ1dHRvbiBuYW1lPVwic3dpdGNoLTJcIiBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX0gLz4nLFxuICAgICAgICBvYmplY3QgOiA8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RydWV9Lz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsICA6IFwiQWRkIGxlZnQgbGFiZWxcIixcbiAgICAgICAgY29kZSAgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC0zXCIgbGFiZWw9XCJDbGljayBtZVwiIGRlZmF1bHRDaGVja2VkPXt0cnVlfSAvPicsXG4gICAgICAgIG9iamVjdCA6IDxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNsaWNrIG1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX0vPlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWwgIDogXCJBZGQgcmlnaHQgbGFiZWxcIixcbiAgICAgICAgY29kZSAgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC00XCIgbGFiZWxSaWdodD1cIkNsaWNrIG1lXCIgZGVmYXVsdENoZWNrZWQ9e3RydWV9IC8+JyxcbiAgICAgICAgb2JqZWN0IDogPFN3aXRjaEJ1dHRvbiBuYW1lPVwic3dpdGNoLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUmlnaHQ9XCJDbGljayBtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RydWV9Lz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsICA6IFwiQWRkIGxlZnQgYW5kIHJpZ2h0IGxhYmVsXCIsXG4gICAgICAgIGNvZGUgICA6ICc8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtNVwiIGxhYmVsPVwiQm90aFwiIGxhYmVsX3JpZ2h0PVwiQ2xpY2sgbWVcIiBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX0gLz4nLFxuICAgICAgICBvYmplY3QgOiA8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCb3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFJpZ2h0PVwiQ2xpY2sgbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfS8+XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbCAgOiBcIkRpc2FibGVkIHdoZW4gT25cIixcbiAgICAgICAgY29kZSAgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC02XCIgbGFiZWw9XCJEaXNhYmxlZFwiIGRpc2FibGVkPXt0cnVlfSBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX0gLz4nLFxuICAgICAgICBvYmplY3QgOiA8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RydWV9Lz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsICA6IFwiRGlzYWJsZWQgd2hlbiBPZmZcIixcbiAgICAgICAgY29kZSAgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC03XCIgbGFiZWw9XCJEaXNhYmxlZFwiIGRpc2FibGVkPXt0cnVlfSAvPicsXG4gICAgICAgIG9iamVjdCA6IDxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC03XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX0vPlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWwgIDogXCJOZXcgaW4gdjIuMi4wIE1vZGUgc2VsZWN0XCIsXG4gICAgICAgIGNvZGUgICA6ICc8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtOFwiIGxhYmVsPVwiU3dpdGNoIG1vZGVcIiBtb2RlPVwic2VsZWN0XCIgbGFiZWxSaWdodD1cIlR1cm4gcmlnaHRcIiBsYWJlbD1cIlR1cm4gbGVmdFwiLz4nLFxuICAgICAgICBvYmplY3QgOiA8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxSaWdodD1cIlR1cm4gcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHVybiBsZWZ0XCIvPlxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCByb3dzID0gY29kZS5tYXAoIGZ1bmN0aW9uKCBvLCBpIClcbiAgICB7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiXG4gICAgICAgICAgICAga2V5PXtpfT5cbiAgICAgICAgICA8aDM+e28ubGFiZWx9PC9oMz5cbiAgICAgICAgICA8cHJlPntvLmNvZGV9PC9wcmU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgIHtvLm9iamVjdH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuXG4gICAgfSApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgPGgxPlNheSBIZWxsbywgUmVhY3QgU3dpdGNoIEJ1dHRvbjwvaDE+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG5cdFx0XHRcdFx0PGgzPk5ldyBpbiB2LjIuMy4wIC0gY29udHJvbGxlZCBjb21wb25lbnQ8L2gzPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxTd2l0Y2hCdXR0b24gbmFtZT0nY29udHJvbGxlZC1jb21wb25lbnQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZT0nc2VsZWN0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vblN3aXRjaENoZWNrZWRTdGF0dXN9Lz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICAgICAgICA8aDM+TmV3IGluIHYuMi4yLjA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U3dpdGNoQnV0dG9uIG5hbWU9XCJuZXctbW9kZS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUmlnaHQ9XCJUdXJuIHJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR1cm4gbGVmdFwiLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICAgICAgICA8aDM+TmV3IGluIHYuMi4xLjA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3dpdGNoIFRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICA8aHIvPlxuICAgICAgICB7cm93c31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0gKTtcblxuUmVhY3REb20ucmVuZGVyKCA8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FwcCcgKSApO1xuIl19
