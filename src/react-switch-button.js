/**
 * React Switch Control.
 * Simple React UI component used to display a switch button control.
 *
 *   Usage: <SwitchButton {...props} />
 *
 * @class           SwitchButton
 * @author          =undo= <g.fazioli@wpxtre.me>
 * @date            2015-03-02
 * @version         1.0.4
 *
 * @history         1.0.0 First public release
 * @history         1.0.3 Minor fixes
 * @history         1.0.4 @deprecated since 1.0.4 - use labelRight instead - issue #5 https://github.com/gfazioli/react-switch-button/issues/5
 */

"use strict";

// Compatibility for either using tranditional or Node.js way to load JavaScript.
var React = window.React || require('react');

var SwitchButton = React.createClass( {

  // Display name
  displayName : 'Switch Button',

  // Version
  version : '1.0.4',

  /**
   * The props types.
   */
  propTypes : {
    id             : React.PropTypes.string,
    name           : React.PropTypes.string,
    title          : React.PropTypes.string,
    label          : React.PropTypes.string,
    label_right    : React.PropTypes.string,
    labelRight     : React.PropTypes.string,
    defaultChecked : React.PropTypes.string,
    theme          : React.PropTypes.string,
    checked        : React.PropTypes.string,
    onChange       : React.PropTypes.func
  },


  /**
   * Default propos.
   *
   * @returns {{id: string, name: string, title: string, label: string, label_right: string, defaultChecked: string, theme: string, checked: null, onChange: *}}
   */
  getDefaultProps : function()
  {
    return {
      id             : '',
      name           : 'switch-button',
      title          : '',
      label          : '',
      label_right    : '',
      labelRight     : '',
      defaultChecked : '',
      theme          : 'rsbc-switch-button-flat-round',
      checked        : null,
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
    var id, label, labelRight;

    if( this.props.id == '' && this.props.name != '' ) {
      id = this.props.name;
    }

    if( this.props.label != '' ) {
      label = (
        <label htmlFor={id}>{this.props.label}</label>
      );
    }

    // @deprecated since 1.0.4 - use labelRight instead - issue #5 https://github.com/gfazioli/react-switch-button/issues/5
    if( 'undefined' !== this.props.label_right || this.props.label_right != '' ) {
      this.props.labelRight = this.props.label_right;
    }

    if( this.props.labelRight != '' ) {
      labelRight = (
        <label htmlFor={id}>{this.props.labelRight}</label>
      );
    }

    return (
      <div className={'rsbc-switch-button ' + this.props.theme }>
        {label}
        <input onChange={this.props.onChange} checked={this.props.checked} defaultChecked={this.props.defaultChecked}
               id={id} name={this.props.name} type="checkbox" value="1"/>
        <label htmlFor={id}></label>
        {labelRight}
      </div>
    );
  }

} );

module.exports = SwitchButton;
