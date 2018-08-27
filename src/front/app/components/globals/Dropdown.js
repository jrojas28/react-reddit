import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Reference, Popper } from 'react-popper';
import Button from './Button';

const dropdownTypes = [
  'button',
  'split-button',
  'menu',
];

class Dropdown extends Component {
  static propTypes = {
    type: PropTypes.oneOf(dropdownTypes),
    activePlacement: PropTypes.string,
    className: PropTypes.string,
    btnProps: PropTypes.object,
    btnChildren: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]),
    splitBtnProps: PropTypes.object,
    splitBtnChildren: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.instanceOf(Component),
    ]).isRequired,
  };

  static defaultProps = {
    type: 'button',
    btnChildren: 'Click Me',
    activePlacement: 'bottom',
    modifiers: {
      flip: { enabled: false },
      preventOverflow: { enabled: false },
      hide: { enabled: false },
    },
  };

  render() {
    const {
      type,
      activePlacement,
      modifiers,
      children,
      className,
      btnProps,
      btnChildren,
      splitBtnProps,
      splitBtnChildren,
    } = this.props;

    const btnGroupClasses = classNames({
      'btn-group': true,
    });

    const popperClasses = classNames({
      'dropdown-menu': true,
      [className]: !!className,
    });

    if (splitBtnProps && splitBtnProps.className) {
      splitBtnProps.className += ' dropdown-toggle dropdown-toggle-split';
    } else if (splitBtnProps) {
      splitBtnProps.className = 'dropdown-toggle dropdown-toggle-split';
    }

    switch (type) {
      case 'split-button':
        return (
          <Manager>
            <div className={btnGroupClasses}>
              <Button {...btnProps}>
                {btnChildren}
              </Button>
              <Reference>
                {
                  ({ ref }) => (
                    <Button
                      innerRef={ref}
                      className={(splitBtnProps && splitBtnProps.className) || 'dropdown-toggle dropdown-toggle-split'}
                      {...splitBtnProps}
                    >
                      {splitBtnChildren || ''}
                    </Button>
                  )
                }
              </Reference>
            </div>
            <Popper placement={activePlacement} {...modifiers}>
              {
                ({ ref, placement }) => (
                  <div
                    innerRef={ref}
                    data-placement={placement}
                    className={popperClasses}
                  >
                    {children}
                  </div>
                )
              }
            </Popper>
          </Manager>
        );
      case 'menu':
        return (
          <Manager>
            <Popper placement={activePlacement} {...modifiers}>
              {
                ({ ref, placement }) => (
                  <div
                    innerRef={ref}
                    data-placement={placement}
                    className={popperClasses}
                  >
                    {children}
                  </div>
                )
              }
            </Popper>
          </Manager>
        );
      case 'button':
      default:
        return (
          <Manager>
            <div className={btnGroupClasses}>
              <Reference>
                {
                  ({ ref }) => (
                    <Button innerRef={ref} {...btnProps}>
                      {btnChildren}
                    </Button>
                  )
                }
              </Reference>
            </div>
            <Popper placement={activePlacement} {...modifiers}>
              {
                ({ ref, placement }) => (
                  <div
                    innerRef={ref}
                    data-placement={placement}
                    className={popperClasses}
                  >
                    {children}
                  </div>
                )
              }
            </Popper>
          </Manager>
        );
    }
  }
}

export default Dropdown;
