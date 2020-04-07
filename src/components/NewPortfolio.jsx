import React, { Component } from 'react';

class NewPortfolio extends Component {

    state = {
        user_id: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            user_id: this.props.user.id
        })
        this.props.addPortfolio(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Create"/>
            </form>
        );
    }
}

export default NewPortfolio;