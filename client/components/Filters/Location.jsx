import React from 'react';
import styled from 'styled-components';
import {DropdownMultiple} from 'reactjs-dropdown-component';

var Filter = styled.div `
    display: inline-block;
    border-radius: 14px;
    margin-right: 1em;
    float: left;
    font-size: 20px;
    background-color: rgb(198, 193, 193);
    font-weight: bold;
    color: rgb(108, 101, 102);
    &:hover {
        cursor: pointer;
    };
    width: 25%;
`

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
                  title: 'Los Angeles',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: 'Seattle',
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
            <Filter>
                <DropdownMultiple
                    titleHelper="Location"
                    title="Select Location"
                    list={this.state.location}
                    toggleItem={this.toggleSelected}
                />
            </Filter>
        );
    }
}

export default Location;