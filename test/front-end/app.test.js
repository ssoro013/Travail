import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../../client/components/App.jsx';

describe('Testing the state of app', () => {
    it('Should expect the state of app to exist', (done) => {
        var wrap = shallow(<App />);
        expect(wrap.state()).toBeDefined();
        done();
    })

    it('Should expect the state of App to have properties jobId, jobs, companies, locations, salary, funding, rounds, status, show, currentPage, jobsPerPage', () => {
        var wrap = shallow(<App />);
        expect(wrap.state()).toHaveProperty('jobId');
        expect(wrap.state()).toHaveProperty('jobs');
        expect(wrap.state()).toHaveProperty('companies');
        expect(wrap.state()).toHaveProperty('locations');
        expect(wrap.state()).toHaveProperty('salary');
        expect(wrap.state()).toHaveProperty('funding');
        expect(wrap.state()).toHaveProperty('rounds');
        expect(wrap.state()).toHaveProperty('status');
        expect(wrap.state()).toHaveProperty('show');
        expect(wrap.state()).toHaveProperty('currentPage');
        expect(wrap.state()).toHaveProperty('jobsPerPage');
    })
})