import React from 'react';
import styled from 'styled-components'
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

class Round extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round: [
                {
                  id: 0,
                  title: 'A',
                  selected: false,
                  key: 'round'
                },
                {
                  id: 1,
                  title: 'B',
                  selected: false,
                  key: 'round'
                },
                {
                  id: 2,
                  title: 'C',
                  selected: false,
                  key: 'round'
                },
                {
                    id: 3,
                    title: 'D',
                    selected: false,
                    key: 'round'
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
            this.props.setRounds((this.state.round.filter(round => round.selected === true).map(round => round.title)))
        });
    }

    render() {
        return (
            <Filter>
                <DropdownMultiple
                    titleHelper="Round"
                    title="Select Round"
                    list={this.state.round}
                    toggleItem={this.toggleSelected}
                />
            </Filter>
        );
    }
}

export default Round;