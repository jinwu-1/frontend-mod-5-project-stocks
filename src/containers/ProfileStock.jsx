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

    render() {
        console.log(this.state.realTimeStock)
        let {symbol, name, price, exchange} = this.props.stock
        return (
            <div className='Card'>
                <Card.Header>{symbol} : {name} </Card.Header>
                <Card.Body>
                <Card.Title>Cost: $ {price}</Card.Title>
                <Card.Text>
                    <h6>Current Price: ${this.state.realTimeStock.price}</h6>
                    <h5>{exchange}</h5>
                <button className='button' onClick={this.handleDelete}>Sell</button>           
                </Card.Text>
                </Card.Body>
            </div>
            
        )
    }
}

export default ProfileStock
