import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Reference, Popper } from 'react-popper';
import Button from './Button';

const dropdownTypes = [
  'button',
  'split-button',
];

const popperPlacementMap = {
  bottom: 'down',
  top: 'up',
  right: 'right',
  left: 'left',
};

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
  };

  constructor(props) {
    super(props);
    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);
  }

  state = {
    isOpen: false,
  };

  handleDropdownButtonClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const {
      type,
      activePlacement,
      children,
      className,
      btnProps,
      btnChildren,
      splitBtnProps,
      splitBtnChildren,
    } = this.props;

    const {
      isOpen,
    } = this.state;

    const btnGroupClasses = classNames({
      'btn-group': true,
      [`drop${popperPlacementMap[activePlacement]}`]: !!activePlacement,
      show: isOpen,
    });

    const popperClasses = classNames({
      'dropdown-menu': true,
      show: isOpen,
      [className]: !!className,
    });

    if (splitBtnProps && splitBtnProps.className) {
      splitBtnProps.className += ' dropdown-toggle dropdown-toggle-split';
    } else if (splitBtnProps) {
      splitBtnProps.className = 'dropdown-toggle dropdown-toggle-split';
    }

    return (
      <div className="dropdown">
        <Manager>
          {
            (type === 'split-button'
              ? (
                <div className={btnGroupClasses}>
                  <Button {...btnProps}>
                    {btnChildren}
                  </Button>
                  <Reference>
                    {
                      ({ ref }) => (
                        <Button
                          ref={ref}
                          className={(splitBtnProps && splitBtnProps.className) || 'dropdown-toggle dropdown-toggle-split'}
                          onClick={this.handleDropdownButtonClick}
                          {...splitBtnProps}
                        >
                          {splitBtnChildren || ''}
                        </Button>
                      )
                    }
                  </Reference>
                </div>
              )
              : (
                <div className={btnGroupClasses}>
                  <Reference>
                    {
                      ({ ref }) => (
                        <Button
                          ref={ref}
                          className="dropdown-toggle dropdown-toggle-split"
                          onClick={this.handleDropdownButtonClick}
                          {...btnProps}
                        >
                          {btnChildren}
                        </Button>
                      )
                    }
                  </Reference>
                </div>
              )
            )
          }
          {
            isOpen && (
              <Popper>
                {
                  ({ ref, placement }) => (
                    <div
                      ref={ref}
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
