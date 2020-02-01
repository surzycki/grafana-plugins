import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { defaults } from 'types';
import { SimplePanel } from './SimplePanel';

const setup = propOverrides => {
  const mockedData = jest.fn();

  const props = {
    data: { series: mockedData },
    options: defaults,
    ...propOverrides,
  };
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
    const tree = render(setup().component);
    expect(tree).toMatchSnapshot();
  });
});
