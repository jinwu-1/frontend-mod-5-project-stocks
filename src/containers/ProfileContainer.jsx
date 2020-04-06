import React, { Component } from 'react';
import Portfolio from './Portfolio'

class ProfileContainer extends Component {

  render() {
    let {first_name, last_name} = this.props.user

    return (
      <div>
          <h1>{first_name} {last_name}'s Profile</h1>
          <Portfolio portfolio={this.props.portfolio} />
      </div>
    );
  }
}

export default ProfileContainer;