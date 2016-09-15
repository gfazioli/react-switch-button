require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-switch-button":[function(require,module,exports){
'use strict';

var React = require('react');

var SwitchButton = React.createClass({

  // Display name
  displayName: 'Switch Button',

  // Version
  version: '2.0.0',

  /**
   * The props types.
   */
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    title: React.PropTypes.string,
    label: React.PropTypes.string,
    labelRight: React.PropTypes.string,
    defaultChecked: React.PropTypes.string,
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
      defaultChecked: '',
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

    if (this.props.id == '' && this.props.name != '') {
      id = this.props.name;
    }

    if (this.props.label != '') {
      label = React.createElement(
        'label',
        { htmlFor: id },
        this.props.label
      );
    }

    if (this.props.labelRight != '') {
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

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2lvdmFtYmF0dGlzdGFmYXppb2xpL0xhdm9yaS9HaXRodWIvcmVhY3Qtc3dpdGNoLWJ1dHRvbi9zcmMvcmVhY3Qtc3dpdGNoLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUUvQixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFFOzs7QUFHdEMsYUFBVyxFQUFHLGVBQWU7OztBQUc3QixTQUFPLEVBQUcsT0FBTzs7Ozs7QUFLakIsV0FBUyxFQUFHO0FBQ1YsTUFBRSxFQUFlLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxRQUFJLEVBQWEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLFNBQUssRUFBWSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsU0FBSyxFQUFZLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxjQUFVLEVBQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLGtCQUFjLEVBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLFlBQVEsRUFBUyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDckMsU0FBSyxFQUFZLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUN2QyxXQUFPLEVBQVUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLFlBQVEsRUFBUyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7R0FDdEM7Ozs7Ozs7QUFRRCxpQkFBZSxFQUFHLDJCQUNsQjtBQUNFLFdBQU87QUFDTCxRQUFFLEVBQWUsRUFBRTtBQUNuQixVQUFJLEVBQWEsZUFBZTtBQUNoQyxXQUFLLEVBQVksRUFBRTtBQUNuQixXQUFLLEVBQVksRUFBRTtBQUNuQixnQkFBVSxFQUFPLEVBQUU7QUFDbkIsY0FBUSxFQUFTLEtBQUs7QUFDdEIsb0JBQWMsRUFBRyxFQUFFO0FBQ25CLFdBQUssRUFBWSwrQkFBK0I7QUFDaEQsYUFBTyxFQUFVLElBQUk7QUFDckIsY0FBUSxFQUFTLElBQUksQ0FBQyxZQUFZO0tBQ25DLENBQUM7R0FDSDs7O0FBR0QsY0FBWSxFQUFHLHdCQUNmOztHQUVDOzs7Ozs7O0FBT0QsUUFBTSxFQUFHLGtCQUNUO0FBQ0UsUUFBSSxFQUFFLFlBQUE7UUFBRSxLQUFLLFlBQUE7UUFBRSxVQUFVLFlBQUEsQ0FBQzs7QUFFMUIsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFHO0FBQ2pELFFBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztLQUN0Qjs7QUFFRCxRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRztBQUMzQixXQUFLLEdBQ0g7O1VBQU8sT0FBTyxFQUFFLEVBQUUsQUFBQztRQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztPQUFTLEFBQy9DLENBQUM7S0FDSDs7QUFFRCxRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRztBQUNoQyxnQkFBVSxHQUNSOztVQUFPLE9BQU8sRUFBRSxFQUFFLEFBQUM7UUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7T0FBUyxBQUNwRCxDQUFDO0tBQ0g7O0FBRUQsV0FDRTs7UUFBSyxTQUFTLEVBQUUscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQSxBQUFDLEFBQUU7TUFDbkcsS0FBSztNQUNOLCtCQUFPLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQUFBQztBQUM5QixzQkFBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxBQUFDO0FBQzFDLGdCQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEFBQUM7QUFDOUIsVUFBRSxFQUFFLEVBQUUsQUFBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQUFBQztBQUM5QixZQUFJLEVBQUMsVUFBVTtBQUNmLGFBQUssRUFBQyxHQUFHLEdBQUU7TUFDbEIsK0JBQU8sT0FBTyxFQUFFLEVBQUUsQUFBQyxHQUNYO01BQ1AsVUFBVTtLQUNQLENBQ047R0FDSDs7Q0FFRixDQUFFLENBQUM7O0FBRUosTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBTd2l0Y2hCdXR0b24gPSBSZWFjdC5jcmVhdGVDbGFzcygge1xuXG4gIC8vIERpc3BsYXkgbmFtZVxuICBkaXNwbGF5TmFtZSA6ICdTd2l0Y2ggQnV0dG9uJyxcblxuICAvLyBWZXJzaW9uXG4gIHZlcnNpb24gOiAnMi4wLjAnLFxuXG4gIC8qKlxuICAgKiBUaGUgcHJvcHMgdHlwZXMuXG4gICAqL1xuICBwcm9wVHlwZXMgOiB7XG4gICAgaWQgICAgICAgICAgICAgOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWUgICAgICAgICAgIDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZSAgICAgICAgICA6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWwgICAgICAgICAgOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsUmlnaHQgICAgIDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0Q2hlY2tlZCA6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQgICAgICAgOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0aGVtZSAgICAgICAgICA6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hlY2tlZCAgICAgICAgOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlICAgICAgIDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHByb3BzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7e2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgbGFiZWw6IHN0cmluZywgbGFiZWxSaWdodDogc3RyaW5nLCBkZWZhdWx0Q2hlY2tlZDogc3RyaW5nLCB0aGVtZTogc3RyaW5nLCBjaGVja2VkOiBudWxsLCBvbkNoYW5nZTogKn19XG4gICAqL1xuICBnZXREZWZhdWx0UHJvcHMgOiBmdW5jdGlvbigpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQgICAgICAgICAgICAgOiAnJyxcbiAgICAgIG5hbWUgICAgICAgICAgIDogJ3N3aXRjaC1idXR0b24nLFxuICAgICAgdGl0bGUgICAgICAgICAgOiAnJyxcbiAgICAgIGxhYmVsICAgICAgICAgIDogJycsXG4gICAgICBsYWJlbFJpZ2h0ICAgICA6ICcnLFxuICAgICAgZGlzYWJsZWQgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRDaGVja2VkIDogJycsXG4gICAgICB0aGVtZSAgICAgICAgICA6ICdyc2JjLXN3aXRjaC1idXR0b24tZmxhdC1yb3VuZCcsXG4gICAgICBjaGVja2VkICAgICAgICA6IG51bGwsXG4gICAgICBvbkNoYW5nZSAgICAgICA6IHRoaXMuaGFuZGxlQ2hhbmdlXG4gICAgfTtcbiAgfSxcblxuICAvLyBIYW5kbGUgY2hhbmdlXG4gIGhhbmRsZUNoYW5nZSA6IGZ1bmN0aW9uKClcbiAge1xuICAgIC8vIE92ZXJyaWRlXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbmRlciBTd2l0Y2ggQnV0dG9uIGNvbnRyb2xcbiAgICpcbiAgICogQHJldHVybnMge1hNTH1cbiAgICovXG4gIHJlbmRlciA6IGZ1bmN0aW9uKClcbiAge1xuICAgIGxldCBpZCwgbGFiZWwsIGxhYmVsUmlnaHQ7XG5cbiAgICBpZiggdGhpcy5wcm9wcy5pZCA9PSAnJyAmJiB0aGlzLnByb3BzLm5hbWUgIT0gJycgKSB7XG4gICAgICBpZCA9IHRoaXMucHJvcHMubmFtZTtcbiAgICB9XG5cbiAgICBpZiggdGhpcy5wcm9wcy5sYWJlbCAhPSAnJyApIHtcbiAgICAgIGxhYmVsID0gKFxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17aWR9Pnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmKCB0aGlzLnByb3BzLmxhYmVsUmlnaHQgIT0gJycgKSB7XG4gICAgICBsYWJlbFJpZ2h0ID0gKFxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17aWR9Pnt0aGlzLnByb3BzLmxhYmVsUmlnaHR9PC9sYWJlbD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsncnNiYy1zd2l0Y2gtYnV0dG9uICcgKyB0aGlzLnByb3BzLnRoZW1lICsgKCB0aGlzLnByb3BzLmRpc2FibGVkID8gXCIgZGlzYWJsZWRcIiA6IFwiXCIpIH0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RoaXMucHJvcHMuZGVmYXVsdENoZWNrZWR9XG4gICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgIGlkPXtpZH0gbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfT5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2xhYmVsUmlnaHR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0gKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTd2l0Y2hCdXR0b247XG4iXX0=
