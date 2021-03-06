import React, { Suspense } from 'react';
import axios from 'axios';
import styled from 'styled-components';
var JobList = React.lazy(()=> import('./JobList.jsx'));
var Location = React.lazy(()=> import('./Filters/Location.jsx'));
var Round = React.lazy(()=> import('./Filters/Round.jsx'));
var Status = React.lazy(()=> import('./Filters/Status.jsx'));
var Form = React.lazy(()=> import('./Form.jsx'));
import Loading from './Loading.jsx';

//Styled components
var Page = styled.span `
    margin-right: 1em;
    font-size: 20px;
    font-weight: bold;
    color: rgb(108, 101, 102);
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

var CurrentPage = styled.span `
    display: inline-block;
    height: 28px;
    width: 28px;
    border-radius: 14px;
    margin-right: 1em;
    text-align: center;
    font-size: 20px;
    background-color: rgb(198, 193, 193);
    font-weight: bold;
    color: rgb(108, 101, 102);
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    };
`;

var Pagination = styled.div `
    font-family: Avenir, sans-serif;
    margin: 32px auto 0;
    padding: 10px;
    max-width: 750px;
    width: 100%;
`

var Filters = styled.p `
    font-family: Avenir, sans-serif;
    margin: 32px auto 0;
    padding: 10px;
    max-width: 750px;
    width: 100%;
`

var Hr = styled.hr `
    position: relative;
    border: none;
    width: 50%;
`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobId: '',
            jobs: [],
            companies: [],
            employees: [],
            locations: [],
            salary: [],
            funding: [],
            rounds: [],
            status: [],
            show: false,
            currentPage: 1,
            jobsPerPage: 7,
        }

        //Class methods binding
        this.getData = this.getData.bind(this);
        this.setLocations = this.setLocations.bind(this);
        this.setRounds = this.setRounds.bind(this);
        this.setStatus = this.setStatus.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.updateJobId = this.updateJobId.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.statusUpdate = this.statusUpdate.bind(this);
    }

    //get requests
    getData() {
        axios.all([
            axios.get('/companies'),
            axios.get('/jobs'),
            axios.get('/employees'),
            axios.get('/locations'),
            axios.get('/rounds'),
            axios.get('/status')
        ])
        .then(axios.spread((companies, jobs, employees, locations, rounds, status) => {
            this.setState({
                jobs: jobs.data.sort((a,b) => a.id - b.id),
                companies: companies.data,
                employees: employees.data,
                locations: locations.data.map(location => location.city),
                rounds: rounds.data.map(round => round.round),
                status: status.data.map(status => status.status)
            })
        }))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getData();
    }

    //Filters
    setLocations(locations) {
        this.setState(state=> ({
            locations: locations
        }))
    }

    setRounds(rounds) {
        this.setState({
            rounds: rounds
        })
    }

    setStatus(status) {
        this.setState({
            status: status
        })
    }

    
    //Show/Hide Form methods
    showForm() {
        this.setState({
            show: true
        })
    }
    
    hideForm() {
        this.setState({
            show: false
        })
    }

    //Update jobId 
    updateJobId(id) {
        this.setState({jobId: id});
    }

    //Update job status (Todo => Applied)
    statusUpdate() {
        axios.post('/update', {id: this.state.jobId})
        .then(() => this.getData())
        .then(() => this.hideForm())
        .then(() => this.updateJobId(''))
        .catch(error => console.log(error));
    }
    
    //Page click event listener
    handleClick(event) {
        window.scrollTo(0, 0);
        this.setState({currentPage: Number(event.target.id)})
    }

    render() {

        //Pagination
        var lastIndex = this.state.currentPage * this.state.jobsPerPage;
        var firstIndex = lastIndex - this.state.jobsPerPage
        var jobs = this.state.jobs.filter(job => this.state.locations.includes(job.city)).filter(job => this.state.rounds.includes(job.round)).filter(job => this.state.status.includes(job.status))
        var currentJobs = jobs.slice(firstIndex, lastIndex);

        var pages = [];
        for(var i = 1; i <= Math.ceil(jobs.length/this.state.jobsPerPage); i++) {
            pages.push(i);
        }

        var renderPages = pages.map(page => (
            page === this.state.currentPage ?
            (<CurrentPage key={page} id={page} onClick={this.handleClick}>{page}</CurrentPage>)
            :
            (<Page key={page} id={page} onClick={this.handleClick}>{page}</Page>)
        ))

        return (
            <div>
                {/* Filters */}
                <Filters>
                    <div>
                        <Suspense fallback={<Loading />}>
                            <Location setLocations={this.setLocations} locations={this.state.locations}></Location>
                        </Suspense>
                    </div>
                    <div>
                        <Suspense fallback={<Loading />}>
                            <Round setRounds={this.setRounds} rounds={this.state.rounds}></Round>
                        </Suspense>
                    </div>
                    <div>
                        <Suspense fallback={<Loading />}>
                            <Status setStatus={this.setStatus} status={this.state.status}></Status>
                        </Suspense>
                    </div>
                </Filters>
                <Hr></Hr>

                {/* Form */}
                <div style={{display: (this.state.show ? 'block': 'none')}}>
                    <Suspense fallback={<Loading />}>
                    <Form statusUpdate={this.statusUpdate} hideForm={this.hideForm}></Form>
                    </Suspense>
                </div>
                
                {/* Jobs */}
                <Suspense fallback={<Loading />}>
                    <JobList jobs={currentJobs} employees={this.state.employees} showForm={this.showForm} updateJobId={this.updateJobId}></JobList>
                </Suspense>
                {/* Pagination */}
                <Pagination>
                    {renderPages}
                </Pagination>
            </div>
        )
    }
}

export default App;