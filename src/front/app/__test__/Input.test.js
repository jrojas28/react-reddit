import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Input from '../components/globals/Input';

describe('(Component) Input', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Input id="random" />
    );
    expect(wrapper.find(Input)).toHaveLength(1);
  });

  it('Should render its children', () => {
    const wrapper = shallow(
      <Input id="random" type="select">
        <option value="value">Text</option>
      </Input>
    );

    expect(wrapper.contains(<option value="value">Text</option>)).toBe(true);
  });

  it('Should render with custom classes', () => {
    const wrapper = render(
      <Input id="random" className="my-class" />
    );

    expect(wrapper.attr('class')).toBe('form-control my-class');
  });

  it('Should add the type whenever provided', () => {
    const wrapper = render(
      <Input id="random" type="number" />
    );

    expect(wrapper.attr('type')).toBe('number');
  });

  it('Should render an input by default', () => {
    const wrapper = mount(
      <Input id="random" />
    );

    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('select')).toHaveLength(0);
    expect(wrapper.find('textarea')).toHaveLength(0);
  });

  it('Should render a select when provided with select type', () => {
    const wrapper = mount(
      <Input id="random" type="select" />
    );

    expect(wrapper.find('select')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(0);
    expect(wrapper.find('textarea')).toHaveLength(0);
  });

  it('Should render a textarea when provided with textarea type', () => {
    const wrapper = mount(
      <Input id="random" type="textarea" />
    );

    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('select')).toHaveLength(0);
    expect(wrapper.find('input')).toHaveLength(0);
  });
});
