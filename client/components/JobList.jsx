import React from 'react';
import Job from './Job.jsx';

var JobList = (props) => {
    return (
        <div>
            {props.jobs.map(job => {
                return (
                    <div
                        key = {job.id}>
                        <Job job={job} showForm={props.showForm} updateJobId={props.updateJobId} employees={props.employees.filter(employee => employee.company === job.company)} />
                    </div>
                )
            })}
        </div>    
    )
}

export default JobList;