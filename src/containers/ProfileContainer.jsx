import React, { Component } from 'react';
import Portfolio from './Portfolio'

class ProfileContainer extends Component {

  state = {
    portfolios: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/portfolios")
    .then(r => r.json())
    .then(portfoliosArray => {
      this.setState({
        portfolios: portfoliosArray
      })
    })
  }

  render() {
    let {first_name, last_name} = this.props.user

    let filteredArray = this.state.portfolios.filter(portfolio => {
      return portfolio.username === this.props.user.username
    })

    let portfoliosComponentArray = filteredArray.map(portfolio => {
      return <Portfolio key={portfolio.id} portfolio={portfolio} />
    })

    return (
      <div>
          <h1>{first_name} {last_name}'s Profile</h1>
          {portfoliosComponentArray}
      </div>
    );
  }
}

export default ProfileContainer;