import React from 'react';
import Job from './Job.jsx';

var JobList = (props) => {
    return (
        <div>
            {props.jobs.map(job => {
                return (
                    <div
                        key = {job.id}>
                        <Job job={job} company={props.companies.filter(company => company.id === job.company_id)}></Job>
                    </div>
                )
            })}
        </div>    
    )
}

export default JobList;