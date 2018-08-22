import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
   static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    for: PropTypes.string.isRequired
  };

  render() {
    const {
     className,
     children,
     ...props,
    } = this.props;

    const labelClasses = classNames({
    [className]: !!className,
    });

    return (
      <label {...props} className={labelClasses}>
        {children}
      </label>
    );
  }
}

export default Label;
