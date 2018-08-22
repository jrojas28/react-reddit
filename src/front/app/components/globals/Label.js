import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Label extends Component {

   static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string
  };


  render() {
    const { className, children } = this.props;


    return (
      <span className={classNames(className)}>
        {children}
      </span>
    );
  }
}

export default Label;
