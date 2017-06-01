require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-switch-button":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var SwitchButton = (0, _createReactClass2['default'])({

	// Display name
	displayName: 'Switch Button',

	// Version
	version: '2.2.2',

	/**
  * The props types.
  */
	propTypes: {
		id: _propTypes2['default'].string,
		name: _propTypes2['default'].string,
		title: _propTypes2['default'].string,
		label: _propTypes2['default'].string,
		labelRight: _propTypes2['default'].string,
		defaultChecked: _propTypes2['default'].bool,
		disabled: _propTypes2['default'].bool,
		theme: _propTypes2['default'].string,
		checked: _propTypes2['default'].bool,
		mode: _propTypes2['default'].string,
		onChange: _propTypes2['default'].func
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
			mode: 'switch',
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
		    mode = this.props.mode || 'switch';

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
			mode = 'switch';
		}

		var props = {
			disabled: this.props.disabled,
			onChange: this.props.onChange,
			name: this.props.name,
			type: 'checkbox',
			value: '1',
			id: id
		};

		if (this.props.checked === null) {
			props.defaultChecked = this.props.defaultChecked;
		} else {
			props.checked = this.props.checked;
		}

		return _react2['default'].createElement('div', {
			className: 'rsbc-switch-button rsbc-mode-' + mode + ' ' + this.props.theme + (this.props.disabled ? ' disabled' : '') }, label, _react2['default'].createElement('input', props), _react2['default'].createElement('label', { htmlFor: id }), labelRight);
	}

});

exports['default'] = SwitchButton;
module.exports = exports['default'];

},{"create-react-class":undefined,"prop-types":undefined,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy96YXVuZS9Eb2N1bWVudHMvX0RFVi9yZWFjdC1zd2l0Y2gtYnV0dG9uL3NyYy9yZWFjdC1zd2l0Y2gtYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztxQkNBa0IsQUFBTzs7OztnQ0FDSSxBQUFvQjs7Ozt5QkFDM0IsQUFBWTs7OztBQUVsQyxJQUFNLEFBQVk7O0FBR2pCO0FBQVcsY0FBRSxBQUFlOztBQUc1QjtBQUFPLFVBQUUsQUFBTzs7QUFLaEI7OztBQUFTO0FBQ04sTUFBRSx1QkFBVSxBQUFNLEFBQ3BCO0FBQUksUUFBRSx1QkFBVSxBQUFNLEFBQ3RCO0FBQUssU0FBRSx1QkFBVSxBQUFNLEFBQ3ZCO0FBQUssU0FBRSx1QkFBVSxBQUFNLEFBQ3ZCO0FBQVUsY0FBRSx1QkFBVSxBQUFNLEFBQzVCO0FBQWMsa0JBQUUsdUJBQVUsQUFBSSxBQUM5QjtBQUFRLFlBQUUsdUJBQVUsQUFBSSxBQUN4QjtBQUFLLFNBQUUsdUJBQVUsQUFBTSxBQUN2QjtBQUFPLFdBQUUsdUJBQVUsQUFBSSxBQUN2QjtBQUFJLFFBQUUsdUJBQVUsQUFBTSxBQUN0QjtBQUFRLFlBQUUsdUJBQVUsQUFBSSxBQUN4QjtBQVpVLEFBQ1Y7O0FBa0JEOzs7OztBQUFlLGtCQUFFLDJCQUFZLEFBQzVCOztBQUNHLE9BQUUsQUFBRSxBQUNOO0FBQUksU0FBRSxBQUFlLEFBQ3JCO0FBQUssVUFBRSxBQUFFLEFBQ1Q7QUFBSyxVQUFFLEFBQUUsQUFDVDtBQUFVLGVBQUUsQUFBRSxBQUNkO0FBQVEsYUFBRSxBQUFLLEFBQ2Y7QUFBYyxtQkFBRSxBQUFLLEFBQ3JCO0FBQUssVUFBRSxBQUErQixBQUN0QztBQUFPLFlBQUUsQUFBSSxBQUNiO0FBQUksU0FBRSxBQUFRLEFBQ2Q7QUFBUSxhQUFFLEFBQUksS0FBQyxBQUFZLEFBQzNCO0FBWk0sQUFDTjtBQVlEOztBQUdEO0FBQVksZUFBRSx3QkFBWTs7QUFFekI7O0FBT0Q7Ozs7O0FBQU0sU0FBRSxrQkFBWSxBQUNuQjtNQUFJLEFBQUUsS0FBQTtNQUFFLEFBQUssUUFBQTtNQUFFLEFBQVUsYUFBQTtNQUN4QixBQUFJLE9BQUcsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFJLFFBQUksQUFBUSxBQUVuQzs7TUFBSSxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUUsT0FBSyxBQUFFLE1BQUksQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFJLFNBQUssQUFBRSxJQUFFLEFBQ25EO0FBQUUsUUFBRyxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUk7QUFDcEIsQUFFRDs7TUFBSSxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUssVUFBSyxBQUFFLElBQUUsQUFDNUI7QUFBSyxXQUNKLDRDQUFPLEFBQU8sU0FBRSxBQUFFLEFBQUMsTUFBRSxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUssQUFBUyxBQUM5QztBQUNELEFBRUQ7O01BQUksQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFVLGVBQUssQUFBRSxJQUFFLEFBQ2pDO0FBQVUsZ0JBQ1QsNENBQU8sQUFBTyxTQUFFLEFBQUUsQUFBQyxNQUFFLEFBQUksS0FBQyxBQUFLLE1BQUMsQUFBVSxBQUFTLEFBQ25EO0FBQ0QsQUFFRDs7TUFBSSxDQUFDLEFBQVEsVUFBRSxBQUFRLEFBQUMsVUFBQyxBQUFPLFFBQUMsQUFBSSxBQUFDLFFBQUcsQ0FBQyxBQUFDLEdBQUUsQUFDNUM7QUFBSSxVQUFHLEFBQVE7QUFDZixBQUVEOztNQUFNLEFBQUs7QUFDRixhQUFFLEFBQUksS0FBQyxBQUFLLE1BQUMsQUFBUSxBQUM3QjtBQUFRLGFBQUUsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFRLEFBQzdCO0FBQUksU0FBRSxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUksQUFDckI7QUFBSSxTQUFFLEFBQVUsQUFDaEI7QUFBSyxVQUFFLEFBQUcsQUFDVjtBQUFFLE9BQUYsQUFBRSxBQUNGLEFBRUQ7QUFUYyxBQUNiOztNQVFHLEFBQUksS0FBQyxBQUFLLE1BQUMsQUFBTyxZQUFLLEFBQUksTUFBRSxBQUNoQztBQUFLLFNBQUMsQUFBYyxpQkFBRyxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQWM7QUFDaEQsU0FBTSxBQUNOO0FBQUssU0FBQyxBQUFPLFVBQUcsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFPO0FBQ2xDLEFBRUQ7O1NBQ0Msd0NBQ0M7QUFBUyxjQUFFLEFBQStCLGtDQUFHLEFBQUksT0FBRyxBQUFHLE1BQUcsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFLLFNBQUssQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFRLFdBQUcsQUFBVyxjQUFHLEFBQUUsQUFBQyxBQUFDLE9BQ3RILEFBQUssT0FDTiwwQ0FBVyxBQUFLLEFBQUcsUUFDbkIsNENBQU8sQUFBTyxTQUFFLEFBQUUsQUFBQyxBQUNYLE9BQ1AsQUFBVSxBQUNOLEFBQ047QUFDRCxBQUVELEFBQUM7O0FBM0dvQyxDQUFqQjs7cUJBNkdOLEFBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBTd2l0Y2hCdXR0b24gPSBjcmVhdGVSZWFjdENsYXNzKHtcblxuXHQvLyBEaXNwbGF5IG5hbWVcblx0ZGlzcGxheU5hbWU6ICdTd2l0Y2ggQnV0dG9uJyxcblxuXHQvLyBWZXJzaW9uXG5cdHZlcnNpb246ICcyLjIuMicsXG5cblx0LyoqXG5cdCAqIFRoZSBwcm9wcyB0eXBlcy5cblx0ICovXG5cdHByb3BUeXBlczoge1xuXHRcdGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0bGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0bGFiZWxSaWdodDogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cdFx0ZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRcdHRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRcdG1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IHByb3BzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7e2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgbGFiZWw6IHN0cmluZywgbGFiZWxSaWdodDogc3RyaW5nLCBkZWZhdWx0Q2hlY2tlZDogc3RyaW5nLCB0aGVtZTogc3RyaW5nLCBjaGVja2VkOiBudWxsLCBvbkNoYW5nZTogKn19XG5cdCAqL1xuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6ICcnLFxuXHRcdFx0bmFtZTogJ3N3aXRjaC1idXR0b24nLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0bGFiZWw6ICcnLFxuXHRcdFx0bGFiZWxSaWdodDogJycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRkZWZhdWx0Q2hlY2tlZDogZmFsc2UsXG5cdFx0XHR0aGVtZTogJ3JzYmMtc3dpdGNoLWJ1dHRvbi1mbGF0LXJvdW5kJyxcblx0XHRcdGNoZWNrZWQ6IG51bGwsXG5cdFx0XHRtb2RlOiAnc3dpdGNoJyxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcblx0XHR9XG5cdH0sXG5cblx0Ly8gSGFuZGxlIGNoYW5nZVxuXHRoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBPdmVycmlkZVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBSZW5kZXIgU3dpdGNoIEJ1dHRvbiBjb250cm9sXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtYTUx9XG5cdCAqL1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgaWQsIGxhYmVsLCBsYWJlbFJpZ2h0LFxuXHRcdFx0bW9kZSA9IHRoaXMucHJvcHMubW9kZSB8fCAnc3dpdGNoJ1xuXG5cdFx0aWYgKHRoaXMucHJvcHMuaWQgPT09ICcnICYmIHRoaXMucHJvcHMubmFtZSAhPT0gJycpIHtcblx0XHRcdGlkID0gdGhpcy5wcm9wcy5uYW1lXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMubGFiZWwgIT09ICcnKSB7XG5cdFx0XHRsYWJlbCA9IChcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9e2lkfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLmxhYmVsUmlnaHQgIT09ICcnKSB7XG5cdFx0XHRsYWJlbFJpZ2h0ID0gKFxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj17aWR9Pnt0aGlzLnByb3BzLmxhYmVsUmlnaHR9PC9sYWJlbD5cblx0XHRcdClcblx0XHR9XG5cblx0XHRpZiAoWydzd2l0Y2gnLCAnc2VsZWN0J10uaW5kZXhPZihtb2RlKSA8IC0xKSB7XG5cdFx0XHRtb2RlID0gJ3N3aXRjaCdcblx0XHR9XG5cblx0XHRjb25zdCBwcm9wcyA9IHtcblx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2UsXG5cdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG5cdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0dmFsdWU6ICcxJyxcblx0XHRcdGlkLFxuXHRcdH1cblx0XHRcblx0XHRpZiAodGhpcy5wcm9wcy5jaGVja2VkID09PSBudWxsKSB7XG5cdFx0XHRwcm9wcy5kZWZhdWx0Q2hlY2tlZCA9IHRoaXMucHJvcHMuZGVmYXVsdENoZWNrZWRcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHMuY2hlY2tlZCA9IHRoaXMucHJvcHMuY2hlY2tlZFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17J3JzYmMtc3dpdGNoLWJ1dHRvbiByc2JjLW1vZGUtJyArIG1vZGUgKyAnICcgKyB0aGlzLnByb3BzLnRoZW1lICsgKCB0aGlzLnByb3BzLmRpc2FibGVkID8gJyBkaXNhYmxlZCcgOiAnJyl9PlxuXHRcdFx0XHR7bGFiZWx9XG5cdFx0XHRcdDxpbnB1dCB7Li4ucHJvcHN9Lz5cblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9e2lkfT5cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0e2xhYmVsUmlnaHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0sXG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaEJ1dHRvblxuIl19
