import React from 'react';
import {shallow} from 'enzyme';
import Time from './Time';

describe('Time Rendering', () => {

  test('should renderTime correctly ', () => {
    const wrapper = shallow(<Time/>);
    expect(wrapper).toMatchSnapshot();

  });

});
