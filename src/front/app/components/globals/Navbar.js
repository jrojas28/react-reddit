import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colorSchemes = [
  'light',
  'dark',
];

class Navbar extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]).isRequired,
    className: PropTypes.string,
    colorScheme: PropTypes.oneOf(colorSchemes),
  };

  static defaultProps = {
    colorScheme: 'dark',
  };

  render() {
    const {
      children,
      className,
      colorScheme,
      ...props
    } = this.props;

    const navbarClass = classNames({
      navbar: true,
      [`navbar-${colorScheme}`]: !!colorScheme,
      [className]: !!className,
    });

    return (
      <nav className={navbarClass} {...props}>
        {children}
      </nav>
    );
  }
}

export default Navbar;
