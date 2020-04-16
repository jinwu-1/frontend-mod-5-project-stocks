import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
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
   
    let {username, password} = this.state

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
          <Button
            color='teal'
            content='Login'
            icon='check'
            labelPosition='left'
            type="submit"
            value="Submit"
          />
        </Form>
      </div>
    );
  }
}
export default LoginForm;