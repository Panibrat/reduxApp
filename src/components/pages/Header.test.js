import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';
import Header from './Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Header');


  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
