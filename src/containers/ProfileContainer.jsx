import React from 'react'
import ProfileStock from './ProfileStock'

class ProfileContainer extends React.Component {

    render() {
        let {first_name, last_name, cash} = this.props.user

        let stocksComponentArrray = this.props.user.stocks.map(stock => {
            return <ProfileStock key={stock.id} stock={stock} />
        })
        return (
            <div>
                <h1> {first_name} {last_name} </h1>
                <h3> cash: ${cash} </h3>
                {stocksComponentArrray}
            </div>
        )
    }
}

export default ProfileContainer