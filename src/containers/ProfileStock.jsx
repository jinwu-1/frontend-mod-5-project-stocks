import React from 'react'

class ProfileStock extends React.Component {

    state = {
        realTimeStock: []
    }

    componentDidMount() {
        fetch(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${this.props.stock.symbol}`)
        .then(r=> r.json())
        .then(results => {
          this.setState({
            realTimeStock: results
          })
        })
    }

    handleDelete = () => {
        this.props.deleteStock(this.props.stock.id)
        this.props.sellStocks(this.props.user.id, this.state.realTimeStock.price)
    }

    render() {
        console.log(this.state.realTimeStock)
        let {symbol, name, price, exchange} = this.props.stock
        return (
            <div>
                <h3>{symbol}: {name}</h3>
                <h4>Cost: ${price}</h4>
                <h4>Current Price: ${this.state.realTimeStock.price}</h4>
                <h5>{exchange}</h5>
                <button onClick={this.handleDelete}>remove</button>
            </div>
        )
    }
}

export default ProfileStock