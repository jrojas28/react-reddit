import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const sizes = [
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
];

class Container extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]).isRequired,
    size: PropTypes.oneOf(sizes).isRequired,
    className: PropTypes.string,
    mainClassName: PropTypes.string,
    fullContainer: PropTypes.bool,
  };

  static defaultProps = {
    fluid: false,
  };

  render() {
    const {
      children,
      size,
      className,
      mainClassName,
      fullContainer,
    } = this.props;

    const classes = classNames({
      [className]: !!className,
      'col-12': size === 'xl',
      'col-xl-10 offset-xl-1 col-12': size === 'lg',
      'col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12': size === 'md',
      'col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-12': size === 'sm',
      'col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto col-12': size === 'xs',
    });

    const mainClasses = classNames({
      'content-main': true,
      [mainClassName]: !!mainClassName,
    });

    const containerClasses = classNames({
      container: !fullContainer,
      'container-fluid': fullContainer,
    });

    return (
      <div className={containerClasses}>
        <div className="row">
          <div className={classes}>
            <main className={mainClasses}>
              {children}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
