import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Container from './Container';
import Dropdown from './Dropdown';
import Navbar from './Navbar';

class Header extends Component {
  static propTypes = {
    banner: PropTypes.func,
    mainNav: PropTypes.func,
    subNav: PropTypes.func,
  };

  static defaultProps = {
    mainNav: () => {
      return (
        <Container size="xl">
          <Navbar>
            <a href="/">
              <img src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png" alt="Reddit"/>
            </a>
            <Dropdown>
              <a href="/">
                <i src="" />
                Home
              </a>
            </Dropdown>
          </Navbar>
        </Container>
      );
    }
  };

  render() {
    const {
      banner,
      mainNav,
      subNav
    } = this.props;
    return (
      <Container size="xl" fullContainer>
        {mainNav()}
        {banner && banner()}
        {subNav()}
      </Container>
    );
  }
}

export default Header;
