const React        = require( 'react' ),
      SwitchButton = require( 'react-switch-button' );

const App = React.createClass( {

  render : function()
  {

    const code = [
      {
        label : "Simple usage",
        code  : '<SwitchButton name="switch-1" />', object : <SwitchButton name="switch-1"/>
      },
      {
        label  : "Set initial status",
        code   : '<SwitchButton name="switch-2" defaultChecked="checked" />',
        object : <SwitchButton name="switch-2"
                               defaultChecked="checked"/>
      },
      {
        label  : "Add left label",
        code   : '<SwitchButton name="switch-3" label="Click me" defaultChecked="checked" />',
        object : <SwitchButton name="switch-3"
                               label="Click me"
                               defaultChecked="checked"/>
      },
      {
        label  : "Add right label",
        code   : '<SwitchButton name="switch-4" labelRight="Click me" defaultChecked="checked" />',
        object : <SwitchButton name="switch-4"
                               labelRight="Click me"
                               defaultChecked="checked"/>
      },
      {
        label  : "Add left and right label",
        code   : '<SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked="checked" />',
        object : <SwitchButton name="switch-5"
                               label="Both"
                               labelRight="Click me"
                               defaultChecked="checked"/>
      },
      {
        label  : "Disabled when On",
        code   : '<SwitchButton name="switch-6" label="Disabled" disabled={true} defaultChecked="checked" />',
        object : <SwitchButton name="switch-6"
                               label="Disabled"
                               disabled={true}
                               defaultChecked="checked"/>
      },
      {
        label  : "Disabled when Off",
        code   : '<SwitchButton name="switch-7" label="Disabled" disabled={true} />',
        object : <SwitchButton name="switch-7"
                               label="Disabled"
                               disabled={true} />
      }
    ];

    const rows = code.map( function( o, i )
    {

      return (
        <div className="example"
             key={i}>
          <h3>{o.label}</h3>
          <pre>{o.code}</pre>
          <div className="result">
            {o.object}
          </div>
        </div>
      );

    } );

    return (
      <div className="examples">
        <h1>Say Hello, React Switch Button</h1>
        {rows}
      </div>
    );
  }
} );

React.render( <App />, document.getElementById( 'app' ) );
