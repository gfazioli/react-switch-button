import React from "react";

const SwitchButton = React.createClass( {

  // Display name
  displayName : 'Switch Button',

  // Version
  version : '2.2.2',

  /**
   * The props types.
   */
  propTypes : {
    id             : React.PropTypes.string,
    name           : React.PropTypes.string,
    title          : React.PropTypes.string,
    label          : React.PropTypes.string,
    labelRight     : React.PropTypes.string,
    defaultChecked : React.PropTypes.bool,
    disabled       : React.PropTypes.bool,
    theme          : React.PropTypes.string,
    checked        : React.PropTypes.string,
    mode           : React.PropTypes.string,
    onChange       : React.PropTypes.func
  },


  /**
   * Default props.
   *
   * @returns {{id: string, name: string, title: string, label: string, labelRight: string, defaultChecked: string, theme: string, checked: null, onChange: *}}
   */
  getDefaultProps : function()
  {
    return {
      id             : '',
      name           : 'switch-button',
      title          : '',
      label          : '',
      labelRight     : '',
      disabled       : false,
      defaultChecked : false,
      theme          : 'rsbc-switch-button-flat-round',
      checked        : null,
      mode           : "switch",
      onChange       : this.handleChange
    };
  },

  // Handle change
  handleChange : function()
  {
    // Override
  },

  /**
   * Render Switch Button control
   *
   * @returns {XML}
   */
  render : function()
  {
    let id, label, labelRight,
        mode = this.props.mode || "switch";

    if( this.props.id === '' && this.props.name !== '' ) {
      id = this.props.name;
    }

    if( this.props.label !== '' ) {
      label = (
        <label htmlFor={id}>{this.props.label}</label>
      );
    }

    if( this.props.labelRight !== '' ) {
      labelRight = (
        <label htmlFor={id}>{this.props.labelRight}</label>
      );
    }

    if( [ 'switch', 'select' ].indexOf( mode ) < -1 ) {
      mode = "switch";
    }

    return (
      <div className={'rsbc-switch-button rsbc-mode-' + mode + ' ' + this.props.theme + ( this.props.disabled ? " disabled" : "") }>
        {label}
        <input onChange={this.props.onChange}
               defaultChecked={this.props.defaultChecked}
               disabled={this.props.disabled}
               id={id} name={this.props.name}
               type="checkbox"
               value="1"/>
        <label htmlFor={id}>
        </label>
        {labelRight}
      </div>
    );
  }

} );

export default SwitchButton;
