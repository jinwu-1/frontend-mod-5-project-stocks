import React, { Component } from 'react';

class NewPortfolio extends Component {

    state = {
        portfolioInfo: {
            user_id: "",
            name: ""
        },
        clicked: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPortfolio(this.state.portfolioInfo)
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value,
          user_id: this.props.user.id,
        })
    }

    render() {
        let {name} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">name:</label>
                <input type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange}/>
                <input type="submit" value="Create Portfolio"/>
            </form>
        );
    }
}

export default NewPortfolio;