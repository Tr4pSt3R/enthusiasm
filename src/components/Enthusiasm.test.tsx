import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Enthusiasm from './Enthusiasm';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('show your enthusiasm', () => {
  it('shows single exclamation mark to begin with', () => {
     const wrapper = shallow(<Enthusiasm />);

     expect(wrapper.text()).toBe('Hello Prince!') ;
  });
});