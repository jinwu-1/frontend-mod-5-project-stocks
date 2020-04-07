import React from 'react'

class ProfileStock extends React.Component {

    handleDelete = () => {
        this.props.deleteStock(this.props.stock.id)
    }

    render() {
        let {symbol, name, price, exchange} = this.props.stock
        return (
            <div>
                <h3>{symbol}: {name}</h3>
                <h4>${price}</h4>
                <h5>{exchange}</h5>
                <button onClick={this.handleDelete}>remove</button>
            </div>
        )
    }
}

export default ProfileStock