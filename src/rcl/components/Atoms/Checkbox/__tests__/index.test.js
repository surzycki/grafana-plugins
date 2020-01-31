import React from 'react';
import Checkbox from '..';
import { render, shallow, mount } from 'enzyme';

const setup = (propOverrides) => {
  const props = {
    // default props go here
    ...propOverrides
  };

  const component = <Checkbox {...props} />;
  const wrapper = shallow(component);

  return {
    props,
    component,
    wrapper,
  };
};

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const tree = render(setup().component);
    expect(tree).toMatchSnapshot();
  });
});
