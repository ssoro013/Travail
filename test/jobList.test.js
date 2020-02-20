import { shallow, mount, render } from 'enzyme';
import React from 'react';
import JobList from '../client/components/JobList.jsx';

describe('Testing JobList Component', () => {
    var wrap = shallow(<JobList />)
    it('Should expect JobList to exist', () => {
        expect(wrap.exists()).toBe(true)
    })

    // it('Should expect JobList to have an array props', () => {
    //     expect(typeof(wrap.props())).toBe('array')
    // })
})