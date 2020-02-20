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

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: [
                {
                  id: 0,
                  title: 'Applied',
                  selected: false,
                  key: 'status'
                },
                {
                  id: 1,
                  title: 'Todo',
                  selected: false,
                  key: 'status'
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
            this.props.setStatus((this.state.status.filter(status => status.selected === true).map(status => status.title)))
        });
    }

    render() {
        return (
            <Filter>
                <DropdownMultiple
                    titleHelper="Status"
                    title="Select Status"
                    list={this.state.status}
                    toggleItem={this.toggleSelected}
                />
            </Filter>
        );
    }
}

export default Status;