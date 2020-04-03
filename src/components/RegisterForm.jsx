import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="username">username:</label>
        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
        <label htmlFor="password">password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        <label htmlFor="first_name">first_name:</label>
        <input type="text" autoComplete="off" name="first_name" value={first_name} onChange={this.handleChange}/>
        <label htmlFor="last_name">last_name:</label>
        <input type="text" autoComplete="off" name="last_name" value={last_name} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default RegisterForm;