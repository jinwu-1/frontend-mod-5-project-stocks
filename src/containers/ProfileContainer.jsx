import React from 'react'
import ProfileStock from './ProfileStock'
import Deposit from '../components/Deposit'

class ProfileContainer extends React.Component {

    render() {
        let {first_name, last_name, cash} = this.props.user

        let stocksComponentArrray = this.props.user.stocks.map(stock => {
            return <ProfileStock key={stock.id} stock={stock} deleteStock={this.props.deleteStock} sellStocks={this.props.sellStocks} user={this.props.user}/>
        })
        
        return (
            <div>
                <div>
                    <h1> {first_name} {last_name} </h1>
                    <h3> Cash: ${cash} </h3>
                    <Deposit handleDeposit={this.props.handleDeposit} user={this.props.user}/>
                </div>
                <div className='cards'>
                    {stocksComponentArrray}
                </div>
            </div>
        )
    }
}

export default ProfileContainer