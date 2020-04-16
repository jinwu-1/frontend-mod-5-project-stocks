import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

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

        <div className='form'>
          <div className='formComponent'>
            <label htmlFor="username">username:</label>
            <input className='formInput' type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
          </div>
          
          <div className='formComponent'>
            <label htmlFor="password">password:</label>
            <input className='formInput' type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
          </div>

          <div className='formComponent'>
            <label htmlFor="first_name">first_name:</label>
            <input className='formInput' type="text" autoComplete="off" name="first_name" value={first_name} onChange={this.handleChange}/>
          </div>

          <div className='formComponent'>
            <label htmlFor="last_name">last_name:</label>
            <input className='formInput' type="text" autoComplete="off" name="last_name" value={last_name} onChange={this.handleChange}/>
          </div>
          <Button variant="primary" size="lg" type='submit' value='Submit'>Login</Button>
          {/* <input type="submit" value="Submit"/> */}
        </div>     
      </form>
    );
  }
}
export default RegisterForm;