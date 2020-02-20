import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Job from '../client/components/Job.jsx';

describe('Testing Job Component', () => {
    var wrap = shallow(<Job />);
    it('Should expect Job to exist', () => {
        expect(wrap.exists()).toBe(true)
    })
    // it('Should expect Job to have object props', () => {
    //     expect(typeof(wrap.props())).toBe('object')
    // })
})