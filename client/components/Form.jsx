import React from 'react';
import styled from 'styled-components';

var FormDiv = styled.div `
    display: inline-block;
    text-align: left;
    float: right;
`

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            email: '',
            phone: '',
            location: '',
            resume: '',
            cover: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleClick(event) {
        
    }

    render() {
        var {first, last, email, phone, location, resume, cover} = this.state
        return(
            <FormDiv>

            <form onSubmit = {this.handleSubmit}>
                <p>
                    <div><label>First Name</label></div>
                    <input name = 'first' value = {first} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <div><label>Last Name</label></div>
                    <input name = 'last' value = {last} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <div><label>Email</label></div>
                    <input name = 'email' value = {email} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <div><label>Phone Number</label></div>
                    <input name = 'phone' value = {phone} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <div><label>Location</label></div>
                    <input name = 'location' value = {location} onChange = {this.handleChange} size="50"></input>
                </p>
                <p>
                    <label>
                        Resume/CV
                        <input name = 'resume' type='file'></input>
                    </label>
                </p>
                <p>
                    <label>
                        Cover Letter
                        <input name = 'cover' type='file'></input>
                    </label>
                </p>
               <button type='submit' value='Submit'>Apply</button>
               <button type='submit' value='Submit'>Cancel</button>
            </form>
            </FormDiv>
        )
    }
}

export default Form;