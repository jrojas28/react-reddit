import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Label from './Label';

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

class FormGroup extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]).isRequired,
    inputType: PropTypes.oneOf(inputTypes),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]),
    className: PropTypes.string,
    inputClasses: PropTypes.string,
    labelClasses: PropTypes.string,
    selectChildren: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]),
  };

  static defaultProps = {
    inputType: 'text',
  };

  render() {
    const {
      id,
      label,
      inputType,
      children,
      className,
      inputClasses,
      labelClasses,
      selectChildren,
      ...props
    } = this.props;

    const groupClasses = classNames({
      'form-group': true,
      [className]: !!className,
    });

    return (
      <div className={groupClasses}>
        <Label className={labelClasses} htmlFor={id}>
          {label}
        </Label>
        <Input className={inputClasses} id={id} type={inputType} {...props}>
          {selectChildren}
        </Input>
        {children}
      </div>
    );
  }
}

export default FormGroup;
