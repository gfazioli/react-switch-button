import React from "react"
import PropTypes from 'prop-types';

class SwitchButton extends React.Component {

  constructor( props )
  {
    super( props );

    this.state = {
      checked : (this.props.defaultChecked === null) ? this.props.checked : this.props.defaultChecked,
    };

  }

  render()
  {
    try {
      const mode = ([ 'switch', 'select' ].indexOf( this.props.mode ) < -1) ? "switch" : this.props.mode;

      const id = (this.props.id.length > 0) ? this.props.id : this.props.name;

      const classes = [
        "rsbc-switch-button",
        `rsbc-mode-${mode}`,
        this.props.theme,
        this.props.disabled ? " disabled" : ""
      ];

      return (
        <div className={classes.join( " " ).trim()}>
          {
            (this.props.label.length > 0)
              ? <label htmlFor={id}>{this.props.label}</label>
              : null
          }
          <input onChange={this.onChange.bind( this )}
                 checked={this.state.checked}
                 disabled={this.props.disabled}
                 id={id}
                 name={this.props.name}
                 type="checkbox"
                 value="1"/>
          <label htmlFor={id}>
          </label>
          {
            (this.props.labelRight.length > 0)
              ? <label htmlFor={id}>{this.props.labelRight}</label>
              : null
          }
        </div>
      );
    }
    catch( e ) {
      console.log( "ERROR", "render", e );
    }
  }

  componentWillReceiveProps( nextProps )
  {
    this.setState(
      {
        checked : (nextProps.checked !== this.state.checked) ? nextProps.checked : this.state.checked,
      }
    );
  }

  onChange( e )
  {

    this.props.onChange( !this.state.checked );

    this.setState(
      {
        checked : !this.state.checked,
      }
    );
  }
}

SwitchButton.propTypes = {
  id             : PropTypes.string,
  name           : PropTypes.string,
  title          : PropTypes.string,
  label          : PropTypes.string,
  labelRight     : PropTypes.string,
  defaultChecked : PropTypes.bool,
  disabled       : PropTypes.bool,
  theme          : PropTypes.string,
  checked        : PropTypes.bool,
  mode           : PropTypes.string,
  onChange       : PropTypes.func
};

SwitchButton.defaultProps = {
  id             : "",
  name           : "switch-button",
  title          : "",
  label          : "",
  labelRight     : "",
  disabled       : false,
  defaultChecked : null,
  theme          : "rsbc-switch-button-flat-round",
  checked        : false,
  mode           : "switch",
  onChange       : () => {}
};

export default SwitchButton;
