import React, { Component } from 'react';
import Portfolio from './Portfolio'
import NewPortfolio from '../components/NewPortfolio';

class ProfileContainer extends Component {

  state = {
    portfolio: {
      stocks: [],
      user: {
        cash: ""
      }
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/portfolios")
    .then(r => r.json())
    .then(portfoliosArray => {
      let filteredArray = portfoliosArray.filter(portfolio => {
        return portfolio.user.username === this.props.user.username
      })
      this.setState({
        portfolio: filteredArray[0]
      })
    })
  }

  render() {

    let {first_name, last_name} = this.props.user
    return (
      <div>
          <h1>{first_name} {last_name}'s Profile</h1>
          {/* <NewPortfolio user={this.props.user} addPortfolio={this.props.addPortfolio}/> */}
          <Portfolio portfolio={this.state.portfolio}/>
      </div>
    );
  }
}

export default ProfileContainer;