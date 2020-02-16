import React from 'react';
import axios from 'axios';
import JobList from './JobList.jsx';
import Filter from './Filter.jsx';
import Sort from './Sort.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                Travail!
            </div>
        )
    }
}

export default App;