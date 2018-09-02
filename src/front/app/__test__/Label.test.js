import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Label from '../components/globals/Label';

describe('(Component) Label', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Label htmlFor="random">
        Random
      </Label>
    );

    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('Should render its children', () => {
    const wrapper = shallow(
      <Label htmlFor="random">
        <option value="value">Text</option>
      </Label>
    );

    expect(wrapper.contains(<option value="value">Text</option>)).toBe(true);
  });

  it('Should render with custom classes', () => {
    const wrapper = render(
      <Label htmlFor="random" className="my-class">
        Random
      </Label>
    );

    expect(wrapper.attr('class')).toBe('col-form-label my-class');
  });

  it('passes down attrs to label', () => {
    const wrapper = render(
      <Label htmlFor="random">
        Random
      </Label>
    );

    expect(wrapper.attr('for')).toBe('random');
  });
});
