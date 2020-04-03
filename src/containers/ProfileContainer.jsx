import React, { Component } from 'react';

class ProfileContainer extends Component {


  render() {
    
    let {first_name, last_name} = this.props.user

    return (
      <div>
          <h1>{first_name} {last_name}'s Profile</h1>
      </div>
    );
  }
}

export default ProfileContainer;