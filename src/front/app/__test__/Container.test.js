import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Container from '../components/globals/Container';

describe('(Component) Container', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Container>
        Random
      </Container>
    );

    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('Should render its children', () => {
    const wrapper = shallow(
      <Container>
        <option value="value">Text</option>
      </Container>
    );

    expect(wrapper.contains(<option value="value">Text</option>)).toBe(true);
  });

  it('Should render with custom classes', () => {
    const wrapper = render(
      <Container className="my-class">
        Random
      </Container>
    );

    expect(wrapper.attr('class')).toBe('container my-class');
  });

  it('Should render container-fluid if Fluid is passed', () => {
    const wrapper = render(
      <Container fluid>
        Random
      </Container>
    );

    expect(wrapper.attr('class')).toBe('container-fluid');
  });
});
