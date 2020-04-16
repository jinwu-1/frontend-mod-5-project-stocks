import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    cash: "0"
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
   
    let {username, password, first_name, last_name} = this.state

    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
            <Form.Input 
              type="text" 
              autoComplete="off" 
              name="username" value={username} 
              onChange={this.handleChange}
              label="Username"
            />
            <Form.Input 
              type="password" 
              autoComplete="off" 
              name="password" value={password} 
              onChange={this.handleChange}
              label="Password"
            />
            <Form.Input 
              type="text" 
              autoComplete="off" 
              name="first_name" value={first_name} 
              onChange={this.handleChange}
              label="First Name"
            />
            <Form.Input 
              type="text" 
              autoComplete="off" 
              name="last_name" value={last_name} 
              onChange={this.handleChange}
              label="Last Name"
            />
            <Button
              color='teal'
              content='Register'
              icon='add'
              labelPosition='left'
              type="submit"
              value="Submit"
            />
        </Form>
      </div>
    );
  }
}

export default RegisterForm;