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
        const yayBtn = wrapper.find('#yay');

        yayBtn.simulate('click');

        expect(wrapper.text()).toMatch('Hello Prince!') ;
    });

    it('should reduce my enthusiasm level from 4 to 2 if I boo twice', () => {
        const wrapper = shallow(<Enthusiasm enthusiasmLevel={4} />);
        const booBtn = wrapper.find('#boo');

        booBtn.simulate('click');
        booBtn.simulate('click');

        const happyBoard = wrapper.find('#happyBoard');

        expect(happyBoard.text()).toBe('Hello Prince!!')
    });

    it('should not let me boo beyond negative numbers', () => {
        const wrapper = shallow(<Enthusiasm enthusiasmLevel={1} />);
        const booBtn = wrapper.find('#boo');
        const yayBtn = wrapper.find('#yay');

        booBtn.simulate('click');
        booBtn.simulate('click');
        booBtn.simulate('click');
        yayBtn.simulate('click');

        const happyBoard = wrapper.find('#happyBoard');

        expect(happyBoard.text()).toBe('Hello Prince!')
    });
});