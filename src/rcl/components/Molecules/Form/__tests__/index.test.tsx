import React from 'react';
import Form from '..';
import { render, shallow } from 'enzyme';

const setup = (propOverrides) => {
  const props = { ...propOverrides };

  const component = <Form {...props} />;
  const wrapper = shallow(component);

  return {
    props,
    component,
    wrapper,
  };
};

describe('<Form />', () => {
  it('renders correctly', () => {
    const tree = render(setup().component);
    expect(tree).toMatchSnapshot();
  });
});
