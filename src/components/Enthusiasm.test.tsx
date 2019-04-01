import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Enthusiasm from './Enthusiasm';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('show your enthusiasm', () => {
  it('shows no exclamation mark to begin with', () => {
     const wrapper = shallow(<Enthusiasm />);

     expect(wrapper.text()).toMatch('Hello Prince') ;
  });

    it('shows single exclamation mark when I click "Yay!" button', () => {
        const wrapper = shallow(<Enthusiasm />);
        const yayBtn = wrapper.find('button');

        yayBtn.simulate('click');

        expect(wrapper.text()).toMatch('Hello Prince!') ;
    });
});