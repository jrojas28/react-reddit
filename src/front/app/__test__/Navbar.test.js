import React from 'react';
import { shallow, render, mount } from 'enzyme';

import Button from '../components/globals/Button';
import Navbar from '../components/globals/Navbar';

describe('(Component) Navbar', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Navbar>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </Navbar>
    );

    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  it('Should render its children', () => {
    const wrapper = shallow(
      <Navbar>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </Navbar>
    );

    expect(wrapper.contains(
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    )).toBe(true);
  });

  it('Should render with custom classes', () => {
    const wrapper = render(
      <Navbar className="my-class">
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </Navbar>
    );

    expect(wrapper.attr('class')).toBe('navbar navbar-dark my-class');
  });

  it('Should render a toggler button when useToggler is set', () => {
    const wrapper = shallow(
      <Navbar className="my-class" useToggler>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </Navbar>
    );
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('Should render a custom toggler when toggler is sent', () => {
    const wrapper = shallow(
      <Navbar
        className="my-class"
        useToggler
        toggler={
          ({ onClick }) => (
            <div className="my-div" onClick={onClick} role="presentation">
              Hello
            </div>
          )
        }
      >
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </Navbar>
    );
    expect(wrapper.find('div.my-div')).toHaveLength(1);
  });

  it('Should render a brand when sent', () => {
    const wrapper = shallow(
      <Navbar
        className="my-class"
        useToggler
        brand={
          () => (
            <div className="my-div">
              Hello
            </div>
          )
        }
      >
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </Navbar>
    );
    expect(wrapper.find('div.my-div')).toHaveLength(1);
  });
});
