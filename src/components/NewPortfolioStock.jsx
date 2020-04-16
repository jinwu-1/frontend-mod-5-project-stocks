import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class NewPortfolioStock extends Component {
    
    state = {
        stock: {...this.props.stock, user_id: this.props.user.id}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.buyStocks(this.props.user.id, this.props.stock.price)
        this.props.addStockToPortfolio(this.state.stock)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Button animated="fade" color="teal">
                    <Button.Content visible>Buy This Stock</Button.Content>
                    <Button.Content hidden>${this.props.stock.price}/share</Button.Content>
                </Button>
            </form>
        );
    }

}
export default NewPortfolioStock;