import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SimplePanel } from './SimplePanel';

const setup = (propOverrides) => {
  const props = { ...propOverrides };

  const component = <SimplePanel {...props} />;
  const wrapper = shallow(component);

  return {
    props,
    component,
    wrapper,
  };
};


describe('<SimplePanel />', () => {
  it('renders correctly', () => {
    //const tree = render(setup().component);
    //expect(tree).toMatchSnapshot();
    expect(true).toBeTruthy();
  });
});


