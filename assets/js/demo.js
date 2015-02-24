/**
 * Demo Switch Button control.
 *
 */

var Demo = React.createClass( {

  render : function()
  {

    var style = { textAlign : 'center' };

    var code = [
      { code : '<SwitchButton name="switch-1" />', object : <SwitchButton name="switch-1" /> },
      { code : '<SwitchButton name="switch-2" defaultChecked="checked" />', object : <SwitchButton name="switch-2" defaultChecked="checked" /> },
      {
        code   : '<SwitchButton name="switch-3" label="Click me" defaultChecked="checked" />',
        object : <SwitchButton name="switch-3" label="Click me" defaultChecked="checked" />
      },
      {
        code   : '<SwitchButton name="switch-4" label_right="Click me" defaultChecked="checked" />',
        object : <SwitchButton name="switch-4" label_right="Click me" defaultChecked="checked" />
      },
      {
        code   : '<SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked="checked" />',
        object : <SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked="checked" />
      }
    ];

    var rows = code.map( function( o, i )
    {

      return (
        <div>
          <pre>{o.code}</pre>
        {o.object}
        </div>
      );

    } );

    return (
      <div style={style}>
        <h1>Hello, React Switch Button</h1>
      {rows}
      </div>
    );
  }


} );

React.render(
  <Demo />,
  document.getElementById( 'content' )
);