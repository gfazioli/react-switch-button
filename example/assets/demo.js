/**
 * Demo Switch Button control.
 *
 */

var Demo = React.createClass( {displayName: "Demo",

  render : function()
  {

    var style = { textAlign : 'center' };

    var code = [
      { code : '<SwitchButton name="switch-1" />', object : React.createElement(SwitchButton, {name: "switch-1"}) },
      { code : '<SwitchButton name="switch-2" defaultChecked="checked" />', object : React.createElement(SwitchButton, {name: "switch-2", defaultChecked: "checked"}) },
      {
        code   : '<SwitchButton name="switch-3" label="Click me" defaultChecked="checked" />',
        object : React.createElement(SwitchButton, {name: "switch-3", label: "Click me", defaultChecked: "checked"})
      },
      {
        code   : '<SwitchButton name="switch-4" label_right="Click me" defaultChecked="checked" />',
        object : React.createElement(SwitchButton, {name: "switch-4", label_right: "Click me", defaultChecked: "checked"})
      },
      {
        code   : '<SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked="checked" />',
        object : React.createElement(SwitchButton, {name: "switch-5", label: "Both", label_right: "Click me", defaultChecked: "checked"})
      }
    ];

    var rows = code.map( function( o, i )
    {

      return (
        React.createElement("div", {key: i}, 
          React.createElement("pre", null, o.code), 
        o.object
        )
      );

    } );

    return (
      React.createElement("div", {style: style}, 
        React.createElement("h1", null, "Hello, React Switch Button"), 
      rows
      )
    );
  }


} );

React.render(
  React.createElement(Demo, null),
  document.getElementById( 'content' )
);