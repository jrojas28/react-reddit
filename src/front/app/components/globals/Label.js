import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Label extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]).isRequired,
    className: PropTypes.string,
    htmlFor: PropTypes.string.isRequired,
  };

  render() {
    const {
      htmlFor,
      className,
      children,
      ...props
    } = this.props;

    const labelClasses = classNames({
      'col-form-label': true,
      [className]: !!className,
    });

    return (
      <label htmlFor={htmlFor} className={labelClasses} {...props}>
        {children}
      </label>
    );
  }
}

export default Label;
