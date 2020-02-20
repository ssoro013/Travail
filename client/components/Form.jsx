import React from 'react';
import styled from 'styled-components';

var FormDiv = styled.div `
    display: inline-block;
    text-align: left;
    float: right;
`

var Required = styled.div `
    color: red;
    display: inline-block;
`

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            first: '',
            last: '',
            email: '',
            phone: '',
            location: '',
            resume: '',
            cover: ''
        }

        this.state = this.initialState

        this.validator = this.validator.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.reset = this.reset.bind(this);
    }

    validator(){
        var {first, last, email, phone, location, resume, cover} = this.state
        if(first === '' || last === '' || email === '' || phone === '' || location === '' || document.getElementById('resume').value === '') {
            return false;
        } else {
            return true;
        }
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleClick1(event) {
        event.preventDefault();
        if(this.validator()) {
            this.props.statusUpdate();
            this.reset();
        }
    }

    handleClick2(event) {
        event.preventDefault();
        this.props.hideForm();
        this.reset();
    }

    reset() {
        this.setState(this.initialState);
        document.getElementById('resume').value = '';
    }

    render() {
        var {first, last, email, phone, location, resume, cover} = this.state
        return(
            <FormDiv>

            <form onSubmit = {this.handleSubmit}>
                <p>
                    <div><label>First Name <Required>*</Required></label></div>
                    <input name = 'first' value = {first} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <div><label>Last Name <Required>*</Required></label></div>
                    <input name = 'last' value = {last} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <div><label>Email <Required>*</Required></label></div>
                    <input name = 'email' value = {email} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <div><label>Phone Number <Required>*</Required></label></div>
                    <input name = 'phone' value = {phone} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <div><label>Location <Required>*</Required></label></div>
                    <input name = 'location' value = {location} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <label>
                        Resume/CV <Required>*</Required>
                        <input name = 'resume' id='resume' type='file'></input>
                    </label>
                </p>
                <p>
                    <label>
                        Cover Letter
                        <input name = 'cover' type='file'></input>
                    </label>
                </p>
               <button type='submit' value='Submit'  onClick={this.handleClick1}>Apply</button>
               <button type='submit' value='Submit' onClick={this.handleClick2}>Cancel</button>
            </form>
            </FormDiv>
        )
    }
}

export default Form;