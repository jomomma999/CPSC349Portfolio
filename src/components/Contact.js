import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        // stops from submitting multiple times
        this.setState({
            disabled: true
        });
    }

    render() {
        return (
          <div className="contact-form"> {}
            <Form onSubmit={this.handleSubmit}>
              <h2>Hire Me!!!!!</h2> {}
              <Form.Group>
                <Form.Label htmlFor="fullname">Full Name</Form.Label>
                <Form.Control id="fullname" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
              </Form.Group>
    
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
              </Form.Group>
    
              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
              </Form.Group>
    
              <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                Send
              </Button>
    
              {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
              {this.state.emailSent === false && <p className="d-inline err-msg">Email Failed to Send</p>}
            </Form>
          </div>
        );
      }
    }
    
    export default Contact;