import React from 'react';
import {DropdownMultiple} from 'reactjs-dropdown-component';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: [
                {
                  id: 0,
                  title: 'New York',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 1,
                  title: 'Dublin',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: 'Istanbul',
                  selected: false,
                  key: 'location'
                },
                {
                    id: 3,
                    title: 'San Francisco',
                    selected: false,
                    key: 'location'
                  }
            ]
        }
        this.toggleSelected = this.toggleSelected.bind(this);
    }

    componentDidMount(){

    }

    toggleSelected(id, key) {
        var temp = JSON.parse(JSON.stringify(this.state[key]));
        temp[id].selected = !temp[id].selected;
        this.setState({
          [key]: temp
        }, () => {
            this.props.setLocations((this.state.location.filter(location => location.selected === true).map(location => location.title)))
        });
    }

    render() {
        return (
            <DropdownMultiple
                titleHelper="Location"
                title="Select Location"
                list={this.state.location}
                toggleItem={this.toggleSelected}
            />
        );
    }
}

export default Location;