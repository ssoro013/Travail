import React from 'react';
import axios from 'axios';
import JobList from './JobList.jsx';
import Location from './Filters/Location.jsx';
import Sort from './Sort.jsx';
import Form from './Form.jsx';

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
        }
        this.setLocations = this.setLocations.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
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

    render() {
        return (
            <div>
                <p><Location setLocations={this.setLocations} locations={this.state.locations}></Location></p>
                <div style={{display: (this.state.show ? 'block': 'none')}}><Form></Form></div>
                {(this.state.companies.length && this.state.jobs.length) && <JobList jobs={this.state.jobs.filter((job) => this.state.locations.includes(job.city))} companies={this.state.companies} showForm={this.showForm}></JobList>}
            </div>
        )
    }
}

export default App;