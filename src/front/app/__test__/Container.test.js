import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Container from '../components/globals/Container';

describe('(Component) Container', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Container size="xl">
        Random
      </Container>
    );

    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('Should render its children', () => {
    const wrapper = shallow(
      <Container size="xl">
        <option value="value">Text</option>
      </Container>
    );

    expect(wrapper.contains(<option value="value">Text</option>)).toBe(true);
  });

  it('Should render a child with custom classes', () => {
    const wrapper = render(
      <Container size="xl" className="my-class">
        Random
      </Container>
    );

    expect(wrapper.find('.col-12.my-class')).toHaveLength(1);
  });

  it('Should render container-fluid if fullContainer is passed', () => {
    const wrapper = render(
      <Container size="xl" fullContainer>
        Random
      </Container>
    );

    expect(wrapper.attr('class')).toBe('container-fluid');
  });

  it('Should render custom sizes when passed', () => {
    const wrapper = render(
      <Container size="xs">
        Random
      </Container>
    );

    expect(wrapper.find('.col-xl-5.col-lg-6.col-md-8.col-sm-10.mx-auto.col-12')).toHaveLength(1);
  });
});
