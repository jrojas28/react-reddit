import React from 'react';
import { shallow, render, mount } from 'enzyme';
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
});
