import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import JobList from './JobList.jsx';
import Location from './Filters/Location.jsx';
import Sort from './Sort.jsx';
import Form from './Form.jsx';

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
    border: 1px solid lightgray;
`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            companies: [],
            locations: [],
            salary: [],
            funding: [],
            round: [],
            status: [],
            show: false,
            currentPage: 1,
            jobsPerPage: 7,
        }
        this.setLocations = this.setLocations.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.all([
            axios.get('/companies'),
            axios.get('/jobs'),
            axios.get('/locations')
        ])
        .then(axios.spread((companies, jobs, locations) => {
            this.setState({
                jobs: jobs.data,
                companies: companies.data,
                locations: locations.data.map(location => location.city)
            })
        }))
        .then(() => console.log(this.state.locations))
        .catch(error => console.log(error))
    }

    setLocations(locations) {
        this.setState({
            locations: locations
        })
    }

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

    handleClick(event) {
        window.scrollTo(0, 0);
        this.setState({currentPage: Number(event.target.id)})
    }

    render() {

        //Pagination
        var lastIndex = this.state.currentPage * this.state.jobsPerPage;
        var firstIndex = lastIndex - this.state.jobsPerPage
        var jobs = this.state.jobs.filter((job) => this.state.locations.includes(job.city))
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
                <p><Location setLocations={this.setLocations} locations={this.state.locations}></Location></p>
                <div style={{display: (this.state.show ? 'block': 'none')}}><Form></Form></div>
                {(this.state.companies.length && this.state.jobs.length) && <JobList jobs={currentJobs} companies={this.state.companies} showForm={this.showForm}></JobList>}
                <Pagination>
                    {renderPages}
                </Pagination>
            </div>
        )
    }
}

export default App;