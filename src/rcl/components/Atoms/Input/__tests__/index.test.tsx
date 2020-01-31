import React from 'react';
import Input from '..';
import { render, shallow, mount } from 'enzyme';

const setup = (propOverrides) => {
  const props = { ...propOverrides };

  const component = <Input {...props} />;
  const wrapper = shallow(component);

  return {
    props,
    component,
    wrapper,
  };
};

describe('<Input />', () => {
  it('renders correctly', () => {
    const tree = render(setup().component);
    expect(tree).toMatchSnapshot();
  });

  it('mounts in a full DOM', () => {
    expect(mount(<Input />).find('input').length).toBe(1);
  });
});
