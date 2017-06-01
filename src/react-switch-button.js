import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'

const SwitchButton = createReactClass({

	// Display name
	displayName: 'Switch Button',

	// Version
	version: '2.2.2',

	/**
	 * The props types.
	 */
	propTypes: {
		id: PropTypes.string,
		name: PropTypes.string,
		title: PropTypes.string,
		label: PropTypes.string,
		labelRight: PropTypes.string,
		defaultChecked: PropTypes.bool,
		disabled: PropTypes.bool,
		theme: PropTypes.string,
		checked: PropTypes.bool,
		mode: PropTypes.string,
		onChange: PropTypes.func,
	},

	/**
	 * Default props.
	 *
	 * @returns {{id: string, name: string, title: string, label: string, labelRight: string, defaultChecked: string, theme: string, checked: null, onChange: *}}
	 */
	getDefaultProps: function () {
		return {
			id: '',
			name: 'switch-button',
			title: '',
			label: '',
			labelRight: '',
			disabled: false,
			defaultChecked: false,
			theme: 'rsbc-switch-button-flat-round',
			checked: null,
			mode: 'switch',
			onChange: this.handleChange,
		}
	},

	// Handle change
	handleChange: function () {
		// Override
	},

	/**
	 * Render Switch Button control
	 *
	 * @returns {XML}
	 */
	render: function () {
		let id, label, labelRight,
			mode = this.props.mode || 'switch'

		if (this.props.id === '' && this.props.name !== '') {
			id = this.props.name
		}

		if (this.props.label !== '') {
			label = (
				<label htmlFor={id}>{this.props.label}</label>
			)
		}

		if (this.props.labelRight !== '') {
			labelRight = (
				<label htmlFor={id}>{this.props.labelRight}</label>
			)
		}

		if (['switch', 'select'].indexOf(mode) < -1) {
			mode = 'switch'
		}

		const props = {
			disabled: this.props.disabled,
			onChange: this.props.onChange,
			name: this.props.name,
			type: 'checkbox',
			value: '1',
			id,
		}
		
		if (this.props.checked === null) {
			props.defaultChecked = this.props.defaultChecked
		} else {
			props.checked = this.props.checked
		}

		return (
			<div
				className={'rsbc-switch-button rsbc-mode-' + mode + ' ' + this.props.theme + ( this.props.disabled ? ' disabled' : '')}>
				{label}
				<input {...props}/>
				<label htmlFor={id}>
				</label>
				{labelRight}
			</div>
		)
	},

})

export default SwitchButton
