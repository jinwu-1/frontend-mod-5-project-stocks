import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    cash: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleDeposit(this.props.user.id, this.state.cash)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
   
    let {cash} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="cash">Amount</label>
        <input type="number" autoComplete="off" name="cash" value={cash} onChange={this.handleChange}/>
        <input type="submit" value="Deposit"/>
      </form>
    );
  }
}
export default LoginForm;