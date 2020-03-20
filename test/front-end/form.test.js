import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Form from '../../client/components/Form.jsx';

describe('Testing the application form', () => {
    it('Should expect the form to exist', () => {
        var wrap = shallow(<Form />);
        expect(wrap.exists()).toBe(true);
    })

    it('Should expect the form to have an apply button', () => {
        var wrap = shallow(<Form />);
        expect(wrap.find('button').at(0).text()).toEqual('Apply');
    })
    it('Should expect the form to have a cancel button', () => {
        var wrap = shallow(<Form />);
        expect(wrap.find('button').at(1).text()).toEqual('Cancel');
    })
})