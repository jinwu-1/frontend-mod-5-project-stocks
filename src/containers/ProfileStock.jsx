import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'semantic-ui-react'

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
        return (((newPrice - newCost)/newCost)*100).toFixed(2)
    }

    render() {
        let {symbol, name, price} = this.props.stock
        return (
            <div className='ProfileCard'>
                <Card.Header><strong>{name}</strong></Card.Header>
                <Card.Body>
                <Card.Title>{symbol}</Card.Title>
                <Card.Text>
                    <br></br>
                    <div>Current Price: <strong>${this.state.realTimeStock.price}</strong></div>
                    <div>Cost: <strong>${price}</strong></div>
                    <div>Total Return: <strong>{this.percentChange()}%</strong></div>
                    <br></br>
                {/* <button className='button' onClick={this.handleDelete}>Sell</button> */}
                <form onSubmit={this.handleDelete}>
                    <Button animated="fade" color="teal">
                        <Button.Content visible>Sell This Stock</Button.Content>
                        <Button.Content hidden>${this.state.realTimeStock.price}/share</Button.Content>
                    </Button>
                </form>         
                </Card.Text>
                </Card.Body>
            </div>
            
        )
    }
}

export default ProfileStock
