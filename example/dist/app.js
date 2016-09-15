require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react'),
    SwitchButton = require('react-switch-button');

var App = React.createClass({
  displayName: 'App',

  render: function render() {

    var code = [{
      label: "Simple usage",
      code: '<SwitchButton name="switch-1" />', object: React.createElement(SwitchButton, { name: 'switch-1' })
    }, {
      label: "Set initial status",
      code: '<SwitchButton name="switch-2" defaultChecked="checked" />',
      object: React.createElement(SwitchButton, { name: 'switch-2',
        defaultChecked: 'checked' })
    }, {
      label: "Add left label",
      code: '<SwitchButton name="switch-3" label="Click me" defaultChecked="checked" />',
      object: React.createElement(SwitchButton, { name: 'switch-3',
        label: 'Click me',
        defaultChecked: 'checked' })
    }, {
      label: "Add right label",
      code: '<SwitchButton name="switch-4" labelRight="Click me" defaultChecked="checked" />',
      object: React.createElement(SwitchButton, { name: 'switch-4',
        labelRight: 'Click me',
        defaultChecked: 'checked' })
    }, {
      label: "Add left and right label",
      code: '<SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked="checked" />',
      object: React.createElement(SwitchButton, { name: 'switch-5',
        label: 'Both',
        labelRight: 'Click me',
        defaultChecked: 'checked' })
    }, {
      label: "Disabled when On",
      code: '<SwitchButton name="switch-6" label="Disabled" disabled={true} defaultChecked="checked" />',
      object: React.createElement(SwitchButton, { name: 'switch-6',
        label: 'Disabled',
        disabled: true,
        defaultChecked: 'checked' })
    }, {
      label: "Disabled when Off",
      code: '<SwitchButton name="switch-7" label="Disabled" disabled={true} />',
      object: React.createElement(SwitchButton, { name: 'switch-7',
        label: 'Disabled',
        disabled: true })
    }];

    var rows = code.map(function (o, i) {

      return React.createElement(
        'div',
        { className: 'example',
          key: i },
        React.createElement(
          'h3',
          null,
          o.label
        ),
        React.createElement(
          'pre',
          null,
          o.code
        ),
        React.createElement(
          'div',
          { className: 'result' },
          o.object
        )
      );
    });

    return React.createElement(
      'div',
      { className: 'examples' },
      React.createElement(
        'h1',
        null,
        'Say Hello, React Switch Button'
      ),
      rows
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-switch-button":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2lvdmFtYmF0dGlzdGFmYXppb2xpL0xhdm9yaS9HaXRodWIvcmVhY3Qtc3dpdGNoLWJ1dHRvbi9leGFtcGxlL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFVLE9BQU8sQ0FBRSxPQUFPLENBQUU7SUFDakMsWUFBWSxHQUFHLE9BQU8sQ0FBRSxxQkFBcUIsQ0FBRSxDQUFDOztBQUV0RCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFFOzs7QUFFN0IsUUFBTSxFQUFHLGtCQUNUOztBQUVFLFFBQU0sSUFBSSxHQUFHLENBQ1g7QUFDRSxXQUFLLEVBQUcsY0FBYztBQUN0QixVQUFJLEVBQUksa0NBQWtDLEVBQUUsTUFBTSxFQUFHLG9CQUFDLFlBQVksSUFBQyxJQUFJLEVBQUMsVUFBVSxHQUFFO0tBQ3JGLEVBQ0Q7QUFDRSxXQUFLLEVBQUksb0JBQW9CO0FBQzdCLFVBQUksRUFBSywyREFBMkQ7QUFDcEUsWUFBTSxFQUFHLG9CQUFDLFlBQVksSUFBQyxJQUFJLEVBQUMsVUFBVTtBQUNmLHNCQUFjLEVBQUMsU0FBUyxHQUFFO0tBQ2xELEVBQ0Q7QUFDRSxXQUFLLEVBQUksZ0JBQWdCO0FBQ3pCLFVBQUksRUFBSyw0RUFBNEU7QUFDckYsWUFBTSxFQUFHLG9CQUFDLFlBQVksSUFBQyxJQUFJLEVBQUMsVUFBVTtBQUNmLGFBQUssRUFBQyxVQUFVO0FBQ2hCLHNCQUFjLEVBQUMsU0FBUyxHQUFFO0tBQ2xELEVBQ0Q7QUFDRSxXQUFLLEVBQUksaUJBQWlCO0FBQzFCLFVBQUksRUFBSyxpRkFBaUY7QUFDMUYsWUFBTSxFQUFHLG9CQUFDLFlBQVksSUFBQyxJQUFJLEVBQUMsVUFBVTtBQUNmLGtCQUFVLEVBQUMsVUFBVTtBQUNyQixzQkFBYyxFQUFDLFNBQVMsR0FBRTtLQUNsRCxFQUNEO0FBQ0UsV0FBSyxFQUFJLDBCQUEwQjtBQUNuQyxVQUFJLEVBQUssK0ZBQStGO0FBQ3hHLFlBQU0sRUFBRyxvQkFBQyxZQUFZLElBQUMsSUFBSSxFQUFDLFVBQVU7QUFDZixhQUFLLEVBQUMsTUFBTTtBQUNaLGtCQUFVLEVBQUMsVUFBVTtBQUNyQixzQkFBYyxFQUFDLFNBQVMsR0FBRTtLQUNsRCxFQUNEO0FBQ0UsV0FBSyxFQUFJLGtCQUFrQjtBQUMzQixVQUFJLEVBQUssNEZBQTRGO0FBQ3JHLFlBQU0sRUFBRyxvQkFBQyxZQUFZLElBQUMsSUFBSSxFQUFDLFVBQVU7QUFDZixhQUFLLEVBQUMsVUFBVTtBQUNoQixnQkFBUSxFQUFFLElBQUksQUFBQztBQUNmLHNCQUFjLEVBQUMsU0FBUyxHQUFFO0tBQ2xELEVBQ0Q7QUFDRSxXQUFLLEVBQUksbUJBQW1CO0FBQzVCLFVBQUksRUFBSyxtRUFBbUU7QUFDNUUsWUFBTSxFQUFHLG9CQUFDLFlBQVksSUFBQyxJQUFJLEVBQUMsVUFBVTtBQUNmLGFBQUssRUFBQyxVQUFVO0FBQ2hCLGdCQUFRLEVBQUUsSUFBSSxBQUFDLEdBQUc7S0FDMUMsQ0FDRixDQUFDOztBQUVGLFFBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUNyQzs7QUFFRSxhQUNFOztVQUFLLFNBQVMsRUFBQyxTQUFTO0FBQ25CLGFBQUcsRUFBRSxDQUFDLEFBQUM7UUFDVjs7O1VBQUssQ0FBQyxDQUFDLEtBQUs7U0FBTTtRQUNsQjs7O1VBQU0sQ0FBQyxDQUFDLElBQUk7U0FBTztRQUNuQjs7WUFBSyxTQUFTLEVBQUMsUUFBUTtVQUNwQixDQUFDLENBQUMsTUFBTTtTQUNMO09BQ0YsQ0FDTjtLQUVILENBQUUsQ0FBQzs7QUFFSixXQUNFOztRQUFLLFNBQVMsRUFBQyxVQUFVO01BQ3ZCOzs7O09BQXVDO01BQ3RDLElBQUk7S0FDRCxDQUNOO0dBQ0g7Q0FDRixDQUFFLENBQUM7O0FBRUosS0FBSyxDQUFDLE1BQU0sQ0FBRSxvQkFBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFFLEtBQUssQ0FBRSxDQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgUmVhY3QgICAgICAgID0gcmVxdWlyZSggJ3JlYWN0JyApLFxuICAgICAgU3dpdGNoQnV0dG9uID0gcmVxdWlyZSggJ3JlYWN0LXN3aXRjaC1idXR0b24nICk7XG5cbmNvbnN0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKCB7XG5cbiAgcmVuZGVyIDogZnVuY3Rpb24oKVxuICB7XG5cbiAgICBjb25zdCBjb2RlID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbCA6IFwiU2ltcGxlIHVzYWdlXCIsXG4gICAgICAgIGNvZGUgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC0xXCIgLz4nLCBvYmplY3QgOiA8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtMVwiLz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsICA6IFwiU2V0IGluaXRpYWwgc3RhdHVzXCIsXG4gICAgICAgIGNvZGUgICA6ICc8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtMlwiIGRlZmF1bHRDaGVja2VkPVwiY2hlY2tlZFwiIC8+JyxcbiAgICAgICAgb2JqZWN0IDogPFN3aXRjaEJ1dHRvbiBuYW1lPVwic3dpdGNoLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPVwiY2hlY2tlZFwiLz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsICA6IFwiQWRkIGxlZnQgbGFiZWxcIixcbiAgICAgICAgY29kZSAgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC0zXCIgbGFiZWw9XCJDbGljayBtZVwiIGRlZmF1bHRDaGVja2VkPVwiY2hlY2tlZFwiIC8+JyxcbiAgICAgICAgb2JqZWN0IDogPFN3aXRjaEJ1dHRvbiBuYW1lPVwic3dpdGNoLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xpY2sgbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPVwiY2hlY2tlZFwiLz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsICA6IFwiQWRkIHJpZ2h0IGxhYmVsXCIsXG4gICAgICAgIGNvZGUgICA6ICc8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtNFwiIGxhYmVsUmlnaHQ9XCJDbGljayBtZVwiIGRlZmF1bHRDaGVja2VkPVwiY2hlY2tlZFwiIC8+JyxcbiAgICAgICAgb2JqZWN0IDogPFN3aXRjaEJ1dHRvbiBuYW1lPVwic3dpdGNoLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUmlnaHQ9XCJDbGljayBtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9XCJjaGVja2VkXCIvPlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWwgIDogXCJBZGQgbGVmdCBhbmQgcmlnaHQgbGFiZWxcIixcbiAgICAgICAgY29kZSAgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC01XCIgbGFiZWw9XCJCb3RoXCIgbGFiZWxfcmlnaHQ9XCJDbGljayBtZVwiIGRlZmF1bHRDaGVja2VkPVwiY2hlY2tlZFwiIC8+JyxcbiAgICAgICAgb2JqZWN0IDogPFN3aXRjaEJ1dHRvbiBuYW1lPVwic3dpdGNoLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxSaWdodD1cIkNsaWNrIG1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD1cImNoZWNrZWRcIi8+XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbCAgOiBcIkRpc2FibGVkIHdoZW4gT25cIixcbiAgICAgICAgY29kZSAgIDogJzxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC02XCIgbGFiZWw9XCJEaXNhYmxlZFwiIGRpc2FibGVkPXt0cnVlfSBkZWZhdWx0Q2hlY2tlZD1cImNoZWNrZWRcIiAvPicsXG4gICAgICAgIG9iamVjdCA6IDxTd2l0Y2hCdXR0b24gbmFtZT1cInN3aXRjaC02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD1cImNoZWNrZWRcIi8+XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbCAgOiBcIkRpc2FibGVkIHdoZW4gT2ZmXCIsXG4gICAgICAgIGNvZGUgICA6ICc8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtN1wiIGxhYmVsPVwiRGlzYWJsZWRcIiBkaXNhYmxlZD17dHJ1ZX0gLz4nLFxuICAgICAgICBvYmplY3QgOiA8U3dpdGNoQnV0dG9uIG5hbWU9XCJzd2l0Y2gtN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9IC8+XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IHJvd3MgPSBjb2RlLm1hcCggZnVuY3Rpb24oIG8sIGkgKVxuICAgIHtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCJcbiAgICAgICAgICAgICBrZXk9e2l9PlxuICAgICAgICAgIDxoMz57by5sYWJlbH08L2gzPlxuICAgICAgICAgIDxwcmU+e28uY29kZX08L3ByZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICAgICAge28ub2JqZWN0fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG5cbiAgICB9ICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlc1wiPlxuICAgICAgICA8aDE+U2F5IEhlbGxvLCBSZWFjdCBTd2l0Y2ggQnV0dG9uPC9oMT5cbiAgICAgICAge3Jvd3N9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59ICk7XG5cblJlYWN0LnJlbmRlciggPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhcHAnICkgKTtcbiJdfQ==
