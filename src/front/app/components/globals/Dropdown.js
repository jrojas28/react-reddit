import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Reference, Popper } from 'react-popper';

import Button from './Button';

const popperPlacements = [
  'auto',
  'top',
  'bottom',
  'left',
  'right',
  'auto-start',
  'top-start',
  'bottom-start',
  'left-start',
  'right-start',
  'auto-end',
  'top-end',
  'bottom-end',
  'left-end',
  'right-end',
];

class Dropdown extends Component {
  static propTypes = {
    toggler: PropTypes.func,
    activePlacement: PropTypes.oneOf(popperPlacements),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]).isRequired,
  };

  static defaultProps = {
    activePlacement: 'bottom',
    toggler: ({
      ref,
      isOpen,
      openDropdown,
      onBlur,
    }) => {
      const btnGroupClasses = classNames({
        'btn-group': true,
        dropdown: true,
        show: isOpen,
      });

      const btnClasses = classNames({
        'dropdown-toggle': true,
      });

      return (
        <div className={btnGroupClasses}>
          <Button
            type="primary"
            className={btnClasses}
            inputRef={ref}
            onClick={openDropdown}
            onBlur={onBlur}
          >
            Toggle Dropdown
          </Button>
        </div>
      );
    },
  };

  state = {
    isOpen: false,
  };

  handleDropdownClick = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  handleDropdownBlur = () => {
    this.setState(() => ({
      isOpen: false,
    }));
  };

  render() {
    const {
      children,
      className,
      toggler,
      activePlacement,
    } = this.props;

    const {
      isOpen,
    } = this.state;

    const popperClasses = classNames({
      'dropdown-menu': true,
      show: isOpen,
      [className]: !!className,
    });

    return (
      <div className="dropdown">
        <Manager>
          {
            <Reference>
              {
                ({ ref }) => (
                  toggler({
                    ref,
                    isOpen,
                    openDropdown: this.handleDropdownClick,
                    onBlur: this.handleDropdownBlur,
                  })
                )
              }
            </Reference>
          }
          {
            isOpen && (
              <Popper placement={activePlacement}>
                {
                  ({
                    ref,
                    style,
                    placement,
                  }) => (
                    <div
                      ref={ref}
                      style={style}
                      data-placement={placement}
                      className={popperClasses}
                    >
                      {children}
                    </div>
                  )
                }
              </Popper>
            )
          }
        </Manager>
      </div>
    );
  }
}

export default Dropdown;
