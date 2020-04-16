import React, { Component } from 'react';
import { Input, Label } from 'semantic-ui-react'

class DepositForm extends Component {
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
        <Input labelPosition="right" placeholder="Amount">
          <Label basic>$</Label>
          <input
            type="number" 
            name="cash" 
            value={cash} 
            onChange={this.handleChange}
          />
          <Label>.00</Label>
        </Input>
      </form>
    );
  }
}
export default DepositForm;