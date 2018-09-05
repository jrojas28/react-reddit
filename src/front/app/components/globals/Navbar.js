import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

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
    useToggler: PropTypes.bool,
    toggler: PropTypes.func,
    brand: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.instanceOf(Component),
      PropTypes.func,
    ]),
  };

  static defaultProps = {
    colorScheme: 'dark',
    toggler: ({
      onClick,
      isOpen,
    }) => {
      const togglerClass = classNames({
        'navbar-toggler': true,
        collapsed: !isOpen,
      });
      return (
        <Button className={togglerClass} buttonType="dark" onClick={onClick}>
          <span className="navbar-toggler-icon" />
        </Button>
      );
    },
  };

  state = {
    isOpen: false,
  };

  handleTogglerClick = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  render() {
    const {
      children,
      className,
      colorScheme,
      useToggler,
      toggler,
      brand,
      ...props
    } = this.props;

    const {
      isOpen,
    } = this.state;

    const navbarClass = classNames({
      navbar: true,
      [`navbar-${colorScheme}`]: !!colorScheme,
      [className]: !!className,
    });
    const collapserClass = classNames({
      'navbar-collapse': true,
      collapse: useToggler,
      show: useToggler && isOpen,
    });

    if (useToggler) {
      return (
        <nav className={navbarClass} {...props}>
          {!!brand && brand()}
          {toggler({ onClick: this.handleTogglerClick, isOpen })}
          <div className={collapserClass}>
            {children}
          </div>
        </nav>
      );
    }

    return (
      <nav className={navbarClass} {...props}>
        {children}
      </nav>
    );
  }
}

export default Navbar;
