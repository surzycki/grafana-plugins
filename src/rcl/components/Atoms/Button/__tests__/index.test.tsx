import React from 'react';
import Button from '..';
import renderer from 'react-test-renderer';
//import { cleanup, fireEvent, render } from '@testing-library/react';

describe('<Button />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Button/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
