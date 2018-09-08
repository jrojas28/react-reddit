import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Container extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]).isRequired,
    className: PropTypes.string,
    fluid: PropTypes.bool,
  };

  static defaultProps = {
    fluid: false,
  };

  render() {
    const {
      children,
      className,
      fluid,
      ...props
    } = this.props;

    const containerClass = classNames({
      container: !fluid,
      'container-fluid': fluid,
      [className]: !!className,
    });

    return (
      <div className={containerClass} {...props}>
        {children}
      </div>
    );
  }
}

export default Container;
