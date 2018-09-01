import React from 'react';
import { shallow, render, mount } from 'enzyme';

import Input from '../components/globals/Input';
import Label from '../components/globals/Label';
import FormGroup from '../components/globals/FormGroup';

describe('(Component) FormGroup', () => {
  it('Should render', () => {
    const wrapper = mount(
      <FormGroup id="random" label="Random" />
    );
    expect(wrapper.find(FormGroup)).toHaveLength(1);
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('Should render its children', () => {
    const wrapper = shallow(
      <FormGroup id="random" label="Random">
        <small id="emailHelp" className="form-text text-muted">Small.</small>
      </FormGroup>
    );

    expect(wrapper.contains(<small id="emailHelp" className="form-text text-muted">Small.</small>)).toBe(true);
  });

  it('Should render with custom classes', () => {
    const wrapper = render(
      <FormGroup id="random" label="Random" className="my-class" />
    );

    expect(wrapper.attr('class')).toBe('form-group my-class');
  });

  it('Should render an input with type when provided', () => {
    const wrapper = render(
      <FormGroup id="random" label="Random" inputType="number" />
    );

    expect(wrapper.find('input').attr('type')).toBe('number');
  });

  it('Should render an input and a label by default', () => {
    const wrapper = mount(
      <FormGroup id="random" label="Random" />
    );

    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(1);
  });
});
