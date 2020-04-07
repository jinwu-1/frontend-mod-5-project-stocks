import React, { Component } from 'react';
import Portfolio from './Portfolio'
import NewPortfolio from '../components/NewPortfolio';

class ProfileContainer extends Component {

  render() {
    let {first_name, last_name} = this.props.user
    return (
      <div>
          <h1>{first_name} {last_name}'s Profile</h1>
          <NewPortfolio user={this.props.user} addPortfolio={this.props.addPortfolio}/>
          <Portfolio portfolio={this.props.portfolio} />
      </div>
    );
  }
}

export default ProfileContainer;