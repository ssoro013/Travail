import React, { useState } from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';

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
`

var Pre = styled.div `
    background-color: white;          
    margin: 32px auto 0;
    padding: 16px;
    max-width: 1200px;
    width: 100%;
    border: 1px solid lightgray;
    font-family: Avenir, sans-serif;
`

const Job = (props) => {
    console.log(props)
    var {id, title, city, state, salary, type, description, status, company_id} = props.job;
    return (
        <Pre>
            <Title>{title}</Title>
            <TitleLocation>{`${props.company[0].name} • ${city}, ${state}`}</TitleLocation>
            <Salary>{salary}</Salary>
            <Type>{type}</Type>
            <Hr></Hr>
            <DescriptionTitle>Description</DescriptionTitle>
            <Description>{description}</Description>
        </Pre>
    )
};

export default Job;