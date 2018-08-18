import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import Button from '../components/globals/Button';

const onClick = jest.fn();

it('Should render itself', () => {
  const wrapper = mount(
    <Button />
  );
  expect(wrapper.find(Button)).toHaveLength(1);
});

it('Should render its children', () => {
  const wrapper = shallow(
    <Button>
      <span>Im a Button!</span>
    </Button>
  );

  expect(wrapper.contains(<span>Im a Button!</span>)).toBe(true);
});

it('Should render custom classes', () => {
  const wrapper = render(
    <Button className="random">
      <span>Im a Button!</span>
    </Button>
  );

  expect(wrapper.attr('class')).toBe('btn btn-primary random');
});

it('Should render a Button by default', () => {
  const wrapper = mount(
    <Button className="random">
      <span>Im a Button!</span>
    </Button>
  );

  expect(wrapper.find('button')).toHaveLength(1);
  expect(wrapper.find('a')).toHaveLength(0);
  expect(wrapper.find(Link)).toHaveLength(0);
});

it('Should render an Anchor Tag when passed the href prop', () => {
  const wrapper = mount(
    <Button className="random" href="/">
      <span>Im a Button!</span>
    </Button>
  );

  expect(wrapper.find('a')).toHaveLength(1);
  expect(wrapper.find('button')).toHaveLength(0);
  expect(wrapper.find(Link)).toHaveLength(0);
});

it('Should render a React Router Link when passed the to prop', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Button className="random" to="/">
        <span>Im a Button!</span>
      </Button>
    </MemoryRouter>
  );

  expect(wrapper.find(Link)).toHaveLength(1);
  expect(wrapper.find('a')).toHaveLength(1);
  expect(wrapper.find('button')).toHaveLength(0);
});

it('Should call onClick once when clicked if onClick is provided.', () => {
  const wrapper = shallow(
    <Button className="random" onClick={onClick}>
      <span>Im a Button!</span>
    </Button>
  );
  wrapper.find('.btn').simulate('click');
  expect(onClick).toHaveBeenCalled();
});
