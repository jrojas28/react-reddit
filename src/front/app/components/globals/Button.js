import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const buttonTypes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'link',
];

class Button extends Component {
  static propTypes = {
    buttonType: PropTypes.oneOf(buttonTypes).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]).isRequired,
    innerRef: PropTypes.func,
    className: PropTypes.string,
    href: PropTypes.string,
    to: PropTypes.string,
  };

  static defaultProps = {
    buttonType: 'primary',
    inputRef: () => {},
  };

  render() {
    const {
      buttonType,
      className,
      children,
      inputRef,
      href,
      to,
      ...props
    } = this.props;

    const btnClasses = classNames({
      btn: true,
      [`btn-${buttonType}`]: true,
      [className]: !!className,
    });

    if (href) {
      return (
        <a ref={inputRef} href={href} className={btnClasses} {...props}>
          {children}
        </a>
      );
    }

    if (to) {
      return (
        <Link ref={inputRef} to={to} className={btnClasses} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={inputRef} type="button" className={btnClasses} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
