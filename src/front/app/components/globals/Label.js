import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Label extends Component {
   static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    for: PropTypes.string.isRequired
  };

  render() {
    const {
      htmlFor,
      className,
      children,
      ...props
    } = this.props;

    const labelClasses = classNames({
      'form-control-label': true,
      [className]: !!className,
    });

    return (
      <label htmlFor={htmlFor} {...props} className={labelClasses}>
        {children}
      </label>
    );
  }
}

export default Label;
