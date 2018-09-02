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

  it('Should remove its children when the toggler is clicked twice (if Closed initially)', () => {
    const wrapper = mount(
      <Dropdown>
        <span>Im a Child</span>
      </Dropdown>
    );

    wrapper.find(Button).simulate('click');
    expect(wrapper.contains(<span>Im a Child</span>)).toBe(true);
    wrapper.find(Button).simulate('click');
    expect(wrapper.contains(<span>Im a Child</span>)).toBe(false);
  });

  it('Should add its children when the toggler is clicked twice (if Open initially)', () => {
    const wrapper = mount(
      <Dropdown>
        <span>Im a Child</span>
      </Dropdown>
    );

    wrapper.find(Button).simulate('click');
    wrapper.find(Button).simulate('click');
    expect(wrapper.contains(<span>Im a Child</span>)).toBe(false);
    wrapper.find(Button).simulate('click');
    expect(wrapper.contains(<span>Im a Child</span>)).toBe(true);
  });

  it('Should close when another element is clicked', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const wrapper = mount(
      <div>
        <div id="external-div" onClick={jest.fn()} role="none">
          Im Outside!
        </div>
        <Dropdown>
          <span>Im a Child</span>
        </Dropdown>
      </div>
    );
    const dropdownInstance = wrapper.find(Dropdown).instance();
    wrapper.find(Button).simulate('click');
    expect(dropdownInstance.state.isOpen).toBe(true);
    map.mousedown({
      target: wrapper.find('#external-div').instance(),
    });
    expect(dropdownInstance.state.isOpen).toBe(false);
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
          openDropdown,
        }) => (
          <div>
            <input
              id="cb"
              type="checkbox"
              onClick={openDropdown}
              data-placement={activePlacement}
              ref={ref}
            />
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
