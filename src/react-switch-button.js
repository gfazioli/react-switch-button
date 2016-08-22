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

// UMD
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['react'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('react'));
  } else {
    // Browser globals (root is window)
    root.SwitchButton = factory(root.React);
  }
}(this, function (React) {
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
    label          : React.PropTypes.string,
    labelRight     : React.PropTypes.string,
    defaultChecked : React.PropTypes.string,
    theme          : React.PropTypes.string,
    checked        : React.PropTypes.string,
    onChange       : React.PropTypes.func
  },


  /**
   * Default props.
   *
   * @returns {{id: string, name: string, label: string, labelRight: string, defaultChecked: string, theme: string, checked: null, onChange: *}}
   */
  getDefaultProps : function()
  {
    return {
      name           : 'switch-button',
      theme          : 'rsbc-switch-button-flat-round',
    };
  },

  /**
   * Render Switch Button control
   *
   * @returns {XML}
   */
  render : function()
  {
    var id = this.props.id || this.props.name;

    return (
      <div className={'rsbc-switch-button ' + this.props.theme }>
        {this.props.label ? <label htmlFor={id}>{this.props.label}</label> : null}
        <input onChange={this.props.onChange} checked={this.props.checked} defaultChecked={this.props.defaultChecked}
               id={id} name={this.props.name} type="checkbox" value="1"/>
        <label htmlFor={id}></label>
        {this.props.labelRight ? <label htmlFor={id}>{this.props.labelRight}</label> : null}
      </div>
    );
  }

} );

return SwitchButton;
}));
