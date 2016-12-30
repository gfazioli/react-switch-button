const React        = require( 'react' ),
      ReactDom     = require( 'react-dom' ),
      SwitchButton = require( 'react-switch-button' );

const App = React.createClass( {

  onChange : function(e)
  {
    const theme = ( this.state.theme === 'rsbc-switch-button-flat-square' ) ? 'rsbc-switch-button-flat-round' : 'rsbc-switch-button-flat-square'

    this.setState(
      {
        theme : theme
      }
    );
  },

  getInitialState : function() {

    return {
      theme : 'rsbc-switch-button-flat-round'
    };
  },

  render : function()
  {

    const code = [
      {
        label : "Simple usage",
        code  : '<SwitchButton name="switch-1" />', object : <SwitchButton theme={this.state.theme} name="switch-1"/>
      },
      {
        label  : "Set Theme",
        code   : '<SwitchButton name="switch-1t" theme="rsbc-switch-button-flat-square" defaultChecked={true} />',
        object : <SwitchButton name="switch-1t"
                               theme="rsbc-switch-button-flat-square"
                               defaultChecked={true}/>
      },
      {
        label  : "Set initial status",
        code   : '<SwitchButton name="switch-2" defaultChecked={true} />',
        object : <SwitchButton name="switch-2"
                               theme={this.state.theme}
                               defaultChecked={true}/>
      },
      {
        label  : "Add left label",
        code   : '<SwitchButton name="switch-3" label="Click me" defaultChecked={true} />',
        object : <SwitchButton name="switch-3"
                               theme={this.state.theme}
                               label="Click me"
                               defaultChecked={true}/>
      },
      {
        label  : "Add right label",
        code   : '<SwitchButton name="switch-4" labelRight="Click me" defaultChecked={true} />',
        object : <SwitchButton name="switch-4"
                               theme={this.state.theme}
                               labelRight="Click me"
                               defaultChecked={true}/>
      },
      {
        label  : "Add left and right label",
        code   : '<SwitchButton name="switch-5" label="Both" label_right="Click me" defaultChecked={true} />',
        object : <SwitchButton name="switch-5"
                               theme={this.state.theme}
                               label="Both"
                               labelRight="Click me"
                               defaultChecked={true}/>
      },
      {
        label  : "Disabled when On",
        code   : '<SwitchButton name="switch-6" label="Disabled" disabled={true} defaultChecked={true} />',
        object : <SwitchButton name="switch-6"
                               theme={this.state.theme}
                               label="Disabled"
                               disabled={true}
                               defaultChecked={true}/>
      },
      {
        label  : "Disabled when Off",
        code   : '<SwitchButton name="switch-7" label="Disabled" disabled={true} />',
        object : <SwitchButton name="switch-7"
                               theme={this.state.theme}
                               label="Disabled"
                               disabled={true}/>
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

        <div className="example">
          <h3>New in v.2.1.0</h3>
        </div>

        <SwitchButton name="switch-theme" label="Switch Theme" onChange={this.onChange} />
        <hr/>
        {rows}
      </div>
    );
  }
} );

ReactDom.render( <App />, document.getElementById( 'app' ) );
