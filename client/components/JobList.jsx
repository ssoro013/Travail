import React, { useContext, Suspense } from 'react';
var Job = React.lazy(()=> import('./Job.jsx'));
import Loading from './Loading.jsx';

var JobList = (props) => {
    return (
        <div>
            {props.jobs.map(job => {
                return (
                    <div key = {job.id}>
                        <Suspense fallback={<Loading />}>
                            <Job job={job} showForm={props.showForm} updateJobId={props.updateJobId} employees={props.employees.filter(employee => employee.company === job.company)} />
                        </Suspense>
                    </div>
                )
            })}
        </div>    
    )
}

export default JobList;