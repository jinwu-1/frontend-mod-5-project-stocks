import React from 'react'
import Card from 'react-bootstrap/Card'

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

    percentChange = () => {
        let cost = this.props.stock.price
        let newCost = parseFloat((Math.round(cost * 100)/100).toFixed(2))
        let currentPrice = this.state.realTimeStock.price
        let newPrice = parseFloat((Math.round(currentPrice * 100)/100).toFixed(2))
        return ((newPrice - newCost)/newCost).toFixed(3)
    }

    render() {
        console.log(this.state.realTimeStock)
        let {symbol, name, price} = this.props.stock
        return (
            <div className='Card'>
                <Card.Header>{symbol}: {name} </Card.Header>
                <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <br></br>
                    <p>Current Price: <strong>${this.state.realTimeStock.price}</strong></p>
                    <p>Cost: <strong>${price}</strong></p>
                    <p>Total Return: <strong>{this.percentChange()}%</strong></p>
                <button className='button' onClick={this.handleDelete}>Sell</button>           
                </Card.Text>
                </Card.Body>
            </div>
            
        )
    }
}

export default ProfileStock
