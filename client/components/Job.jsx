import React, { useState } from 'react';
import Form from './Form.jsx';
import styled from 'styled-components';

//Styled components
var Title = styled.div `
    font-weight: bold;
    font-size: 25px;
`

var TitleLocation = styled.div `
    font-weight: bold;
    font-size: 17px;
`

var Salary = styled.div `
    background-color: rgb(34, 15, 124);
    height: 20px;
    text-align: center;
    color: white;
    display: inline-block;
    width: 100px;
    margin-right: 5px;
    text-align: center;
    border-radius: 2.5px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    vertical-align: middle;
    line-height: 20px
`

var Type = styled.div `
    background-color: rgb(34, 15, 124);
    height: 20px;
    text-align: center;
    color: white;
    display: inline-block;
    width: 100px;
    text-align: center;
    border-radius: 2.5px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    vertical-align: middle;
    line-height: 20px
`

var Hr = styled.hr `
    position: relative;
    border: none;
    height: 2px;
    background: orange;
    width: 50%;
`

var DescriptionTitle = styled.div `
    font-weight: bold;
    font-size: 20px;
`

var Description = styled.div `
    text-align: left;
    white-space: pre-wrap;
    font-size: 15px;
`

var Pre = styled.div `
    background-color: white;          
    margin: 32px auto 0;
    padding: 16px;
    max-width: 750px;
    width: 100%;
    border: 1px solid lightgray;
    font-family: Avenir, sans-serif;
`
var Status = styled.div `
    float: right;
`
var More = styled.span `
    color: rgb(101, 67, 33);
    font-weight: bold;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            maxWords: 250
        }

        //Class methods binding
        this.onToggle = this.onToggle.bind(this);
        this.showMore = this.showMore.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    //Toggle method to show more/less
    onToggle() {
        this.setState({isOpen: !this.state.isOpen})
    }
    
    //Show More class method
    showMore() {
        return this.state.isOpen ? this.props.job.description : this.props.job.description.slice(0, this.state.maxWords)
    }

    //Apply button class method to update jobId
    handleClick(event) {
        event.preventDefault();
        this.props.updateJobId(this.props.job.id);
        this.props.showForm();
    }

    render() {
        var {id, title, city, state, salary, type, description, status, company, employees, funding, round} = this.props.job;

        return(
            <div>
            <Pre>
                <Title>{title}</Title>
                <TitleLocation>{`${company} • ${city}, ${state}`}</TitleLocation>
                {status === 'Applied' ? <Status>{`${status} ✅`}</Status> : <Status>{`${status}`}</Status>}
                <Salary>{`$${salary/1000},000/Year`}</Salary>
                <Type>{type}</Type>
                <Hr></Hr>
                <DescriptionTitle>Description</DescriptionTitle>
                <Description>
                    {this.showMore()}
                    <a onClick={this.onToggle}>{this.state.isOpen ? 
                    <More>Show Less</More> 
                    :
                    <More>Show More</More>}</a>
                </Description>
                {status === 'Todo' || status === ' ' ? <button onClick={this.handleClick}>Apply!</button> : ''}
            </Pre>
            </div>
        )
    }
}

export default Job;