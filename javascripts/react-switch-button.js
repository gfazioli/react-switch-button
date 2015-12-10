/**
 * React Switch Control.
 * Simple React UI component used to display a switch button control.
 *
 *   Usage: <SwitchButton {...props} />
 *
 * @class           SwitchButton
 * @author          =undo= <g.fazioli@wpxtre.me>
 * @date            2015-02-24
 * @version         1.0.2
 */

var SwitchButton = React.createClass( {

  // Display name
  displayName : 'Switch Button',

  // Version
  version : '1.0.2',

  /**
   * The props types.
   */
  propTypes : {
    id             : React.PropTypes.string,
    name           : React.PropTypes.string,
    title          : React.PropTypes.string,
    label          : React.PropTypes.string,
    label_right    : React.PropTypes.string,
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
      defaultChecked : '',
      theme          : 'rsbc-switch-button-flat-round',
      checked        : null,
      onChange       : this.hadleChange
    };
  },

  // Handle chenge
  handleChange    : function()
  {
  },

  /**
   * Render Switch Button control
   *
   * @returns {XML}
   */
  render : function()
  {
    var id, label, label_right;

    if( this.props.id == '' && this.props.name != '' ) {
      id = this.props.name;
    }

    if( this.props.label != '' ) {
      label = (
        <label htmlFor={id}>{this.props.label}</label>
      );
    }

    if( this.props.label_right != '' ) {
      label_right = (
        <label htmlFor={id}>{this.props.label_right}</label>
      );
    }

    return (
      <div className={'rsbc-switch-button ' + this.props.theme }>
        {label}
        <input onChange={this.props.onChange} checked={this.props.checked} defaultChecked={this.props.defaultChecked} id={id} name={this.props.name} type="checkbox" value="1" />
        <label htmlFor={id}></label>
        {label_right}
      </div>
    );
  }

} );