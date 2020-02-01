import React from 'react';
import Button from '..';
import { shallow, render } from 'enzyme';

const setup = propOverrides => {
  const props = { ...propOverrides };

  const component = <Button {...props} />;
  const wrapper = shallow(component);

  return {
    props,
    component,
    wrapper,
  };
};

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = render(setup().component);
    expect(tree).toMatchSnapshot();
  });

  it('renders to static HTML', () => {
    expect(render(<Button />).text()).toEqual('Hello Button');
  });
});
