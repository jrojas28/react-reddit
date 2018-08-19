import React, { Component } from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const inputTypes = [
  // Input Based
  'text',
  'email',
  'password',
  'number',
  'date',
  'datetime',
  'datetime-local',
  'search',
  'tel',
  'color',
  'file',
  // Select Based
  'select',
  // Text Area Based
  'textarea',
];

class Input extends Component {
  static propTypes = {
    inputType: PropTypes.oneOf(inputTypes).isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]),
    rowCount: PropTypes.number,
  };

  static defaultProps = {
    inputType: 'text',
  };

  render() {
    const {
      inputType,
      name,
      id,
      className,
      children,
      rowCount,
      ...props
    } = this.props;

    const inputClass = classNames({
      'form-control': inputType !== 'file',
      'form-control-file': inputType === 'file',
      [className]: !!className,
    });

    if (inputType === 'select' || children) {
      return (
        <select name={name} className={inputClass} {...props}>
          {children}
        </select>
      );
    }

    if (inputType === 'textarea' || rowCount) {
      return (
        <textarea id={id || `#${name}`} name={name} className={inputClass} rows={rowCount} {...props} />
      );
    }

    return (
      <input id={id || `#${name}`} name={name} type={inputType} className={inputClass} {...props} />
    );
  }
}

export default Input;
