import React, { useContext, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styled from 'styled-components';
var Job = React.lazy(()=> import('./Job.jsx'));
import Loading from './Loading.jsx';

var Pre = styled.div `
    background-color: white;          
    margin: 32px auto 0;
    padding: 16px;
    max-width: 750px;
    width: 100%;
    border: 1px solid lightgray;
    font-family: Avenir, sans-serif;
`

var JobList = (props) => {
    return (
        <div>
            {props.jobs.map(job => {
                return (
                    <Pre key = {job.id}>
                        <Suspense fallback={<Loading />}>
                            <Router>
                                <Link to={`/${job.id}`}>{job.title}</Link>
                                    <Switch>
                                        <Route exact path={`/${job.id}`}>
                                            <Job job={job} showForm={props.showForm} updateJobId={props.updateJobId} employees={props.employees.filter(employee => employee.company === job.company)} />
                                        </Route>
                                    </Switch>
                            </Router>
                        </Suspense>
                    </Pre>
                )
            })}
        </div>    
    )
}

export default JobList;