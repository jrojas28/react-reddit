import React from 'react';
import { mount } from 'enzyme';
import { Popper } from 'react-popper';
import Button from '../components/globals/Button';
import Dropdown from '../components/globals/Dropdown';

describe('(Component) Dropdown', () => {
  beforeEach(() => jest.clearAllMocks());

  it('Should render', () => {
    const wrapper = mount(
      <Dropdown>
        <span>Im a Child</span>
      </Dropdown>
    );
    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });

  it('Should render its children when clicked', () => {
    const wrapper = mount(
      <Dropdown>
        <span>Im a Child</span>
      </Dropdown>
    );

    wrapper.find(Button).simulate('click');
    expect(wrapper.contains(<span>Im a Child</span>)).toBe(true);
  });

  it('Should render custom classes', () => {
    const wrapper = mount(
      <Dropdown className="random">
        <span>Im a Button!</span>
      </Dropdown>
    );
    wrapper.find(Button).simulate('click');
    expect(wrapper.find('.dropdown-menu').props().className).toBe('dropdown-menu show random');
  });

  it('Should render a Button by default', () => {
    const wrapper = mount(
      <Dropdown>
        <span>Im a Button!</span>
      </Dropdown>
    );

    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('Should pass the placement when provided', () => {
    const wrapper = mount(
      <Dropdown activePlacement="bottom-end">
        <span>Im a Button!</span>
      </Dropdown>
    );
    wrapper.find(Button).simulate('click');
    expect(wrapper.find(Popper).props().placement).toBe('bottom-end');
  });

  it('Should render the toggler when provided', () => {
    const wrapper = mount(
      <Dropdown
        buttonType="secondary"
        toggler={({
          ref,
          activePlacement,
          isOpen,
          onClick,
        }) => (
          <div>
            <input id="cb" type="checkbox" onClick={onClick} data-placement={activePlacement} ref={ref} />
            <span>
              {isOpen ? 'Im Open' : 'Im Closed'}
            </span>
          </div>
        )}
      >
        <span>Im a Child</span>
      </Dropdown>
    );

    expect(wrapper.find('input').props().type).toBe('checkbox');
  });
});
