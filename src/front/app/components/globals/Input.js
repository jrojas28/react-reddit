import React, { Component } from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const types = [
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
    type: PropTypes.oneOf(types).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]),
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    const {
      type,
      id,
      name,
      className,
      children,
      ...props
    } = this.props;

    const inputClass = classNames({
      'form-control': type !== 'file',
      'form-control-file': type === 'file',
      [className]: !!className,
    });

    switch (type) {
      case 'select':
        return (
          <select id={id} className={inputClass} {...props}>
            {children}
          </select>
        );
      case 'textarea':
        return (
          <textarea id={id} name={name || id} className={inputClass} {...props} />
        );
      default:
        return (
          <input id={id} name={name || id} type={type} className={inputClass} {...props} />
        );
    }
  }
}

export default Input;
