import React, { Component } from 'react';

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
    console.log(this.state.portfolios)
    let {first_name, last_name} = this.props.user

    return (
      <div>
          <h1>{first_name} {last_name}'s Profile</h1>
      </div>
    );
  }
}

export default ProfileContainer;