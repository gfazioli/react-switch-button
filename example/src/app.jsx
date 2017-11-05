import React from "react"
import ReactDom from "react-dom"
import SwitchButton from "components/react-switch-button"

class App extends React.Component {

  constructor( props )
  {
    super( props );

    this.state = {
      theme        : "rsbc-switch-button-flat-round",
      themeChecked : false,
      checked      : false,
    };
  }

  onChange( e )
  {
    const theme = (this.state.theme === "rsbc-switch-button-flat-square") ? "rsbc-switch-button-flat-round" : "rsbc-switch-button-flat-square";

    this.setState(
      {
        theme        : theme,
        themeChecked : (this.state.theme === "rsbc-switch-button-flat-round"),
      }
    );
  }

  render()
  {

    const code = [
      {
        label  : "Simple usage",
        code   : '<SwitchButton name="switch-1" /> <span> Value: {this.state.checked ? "TRUE" : "FALSE"}</span>',
        object : [ <SwitchButton key="switch"
                                 theme={this.state.theme}
                                 onChange={( value ) => { this.setState( { checked : value } )}}
                                 checked={this.state.checked}
                                 name="switch-1"/>,
          <span key="info"> Value: {this.state.checked ? "TRUE" : "FALSE"}</span> ]
      },
      {
        label  : "Set Theme",
        code   : '<SwitchButton name="switch-1t" theme="rsbc-switch-button-flat-square" checked={true} />',
        object : <SwitchButton name="switch-1t"
                               theme="rsbc-switch-button-flat-square"
                               checked={true}/>
      },
      {
        label  : "Set initial status",
        code   : '<SwitchButton name="switch-2" checked={true} />',
        object : <SwitchButton name="switch-2"
                               theme={this.state.theme}
                               checked={true}/>
      },
      {
        label  : "Set initial status",
        code   : '<SwitchButton name="switch-2b" checked={false} />',
        object : <SwitchButton name="switch-2b"
                               theme={this.state.theme}
                               checked={false}/>
      },
      {
        label  : "Add left label",
        code   : '<SwitchButton name="switch-3" label="Click me" checked={true} />',
        object : <SwitchButton name="switch-3"
                               theme={this.state.theme}
                               label="Click me"
                               checked={true}/>
      },
      {
        label  : "Add right label",
        code   : '<SwitchButton name="switch-4" labelRight="Click me" checked={true} />',
        object : <SwitchButton name="switch-4"
                               theme={this.state.theme}
                               labelRight="Click me"
                               checked={true}/>
      },
      {
        label  : "Add left and right label",
        code   : '<SwitchButton name="switch-5" label="Both" label_right="Click me" checked={true} />',
        object : <SwitchButton name="switch-5"
                               theme={this.state.theme}
                               label="Both"
                               labelRight="Click me"
                               checked={true}/>
      },
      {
        label  : "Disabled when On",
        code   : '<SwitchButton name="switch-6" label="Disabled" disabled={true} checked={true} />',
        object : <SwitchButton name="switch-6"
                               theme={this.state.theme}
                               label="Disabled"
                               disabled={true}
                               checked={true}/>
      },
      {
        label  : "Disabled when Off",
        code   : '<SwitchButton name="switch-7" label="Disabled" disabled={true} />',
        object : <SwitchButton name="switch-7"
                               theme={this.state.theme}
                               label="Disabled"
                               disabled={true}/>
      },
      {
        label  : "New in v2.2.0 Mode select",
        code   : '<SwitchButton name="switch-8" label="Switch mode" mode="select" labelRight="Turn right" label="Turn left"/>',
        object : <SwitchButton name="switch-8"
                               mode="select"
                               theme={this.state.theme}
                               labelRight="Turn right"
                               label="Turn left"/>
      }
    ];

    const rows = code.map( function( o, i ) {

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
           <h3>New in v.2.2.0</h3>
         </div>

         <SwitchButton name="new-mode-select"
                       mode="select"
                       theme={this.state.theme}
                       labelRight="Turn right"
                       label="Turn left"/>

        <div className="example">
          <h3>New in v.2.1.0</h3>
        </div>

        <SwitchButton name="switch-theme"
                      label="Switch Theme"
                      checked={this.state.themeChecked}
                      onChange={this.onChange.bind( this )}/>
        <hr/>
        {rows}
      </div>
    );
  }
}

ReactDom.render( <App/>, document.getElementById( "app" ) );
