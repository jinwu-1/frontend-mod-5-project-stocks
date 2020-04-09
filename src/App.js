import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import StocksContainer from './containers/StocksContainer'
import ProfileContainer from './containers/ProfileContainer'

class App extends React.Component {

  state = {
    user: {
      id: "",
      username: "",
      first_name: "",
      last_name: "",
      cash: "",
      stocks: []
    },
    token: "",
    allStocks: []
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }

    fetch("https://financialmodelingprep.com/api/v3/company/stock/list")
      .then(r=> r.json())
      .then((stocksArray) => {
        this.setState({
          allStocks: stocksArray.symbolsList.slice(0,200)
        })
      })

  }

  handleResponse = (response) => {
    if (response.user) {
      localStorage.token = response.token
      this.setState(response, () => {
        this.props.history.push("/profile")
      })
    } else {
      alert(response.error)
    }
  }

  handleRegister = (userInfo) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  handleLogin = (userInfo) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  addStockToPortfolio = (stockInfo) => {
    fetch("http://localhost:3000/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(stockInfo)
    })
    .then(r => r.json())
    .then((results) => {
      let newArray = [...this.state.user.stocks, results]
      let newObject = {...this.state.user, stocks: newArray}
      this.setState({
        user: newObject
      })
    })
  }

  buyStocks = (userID, price) => {
    let newPrice = parseFloat((Math.round(price * 100)/100).toFixed(2))
    let newAmount = parseFloat((Math.round((this.state.user.cash) * 100)/100).toFixed(2))
    let newCash = (newAmount - newPrice).toString()
    let newObject = {...this.state.user, cash: newCash}
    fetch(`http://localhost:3000/users/${userID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    })
    .then(r => r.json())
    .then(results => {
      this.setState({
        user: results
      })
    })
  }

  sellStocks = (userID, price) => {
    let newPrice = parseFloat((Math.round(price * 100)/100).toFixed(2))
    let newAmount = parseFloat((Math.round((this.state.user.cash) * 100)/100).toFixed(2))
    let newCash = (newAmount + newPrice).toString()
    let newObject = {...this.state.user, cash: newCash}
    fetch(`http://localhost:3000/users/${userID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    })
    .then(r => r.json())
    .then(results => {
      this.setState({
        user: results
      })
    })
  }

  handleDeposit = (userID, deposit) => {
    let newDeposit = parseFloat((Math.round(deposit * 100)/100).toFixed(2))
    let newAmount = parseFloat((Math.round((this.state.user.cash) * 100)/100).toFixed(2))
    let newCash = (newAmount + newDeposit).toString()
    let newObject = {...this.state.user, cash: newCash}
    fetch(`http://localhost:3000/users/${userID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    })
    .then(r => r.json())
    .then(results => {
      this.setState({
        user: results
      })
    })
  }

  deleteStock = (stockID) => {
    fetch(`http://localhost:3000/stocks/${stockID}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      let filteredArray = this.state.user.stocks.filter(stock => {
        return stock.id !== stockID
      })
      let newObject = {...this.state.user, stocks: filteredArray}
      this.setState({
        user: newObject
      })
    })
  }

  renderRegisterForm = () => {
    return <RegisterForm handleSubmit={this.handleRegister}/>
  }

  renderLoginForm = () => {
    return <LoginForm handleSubmit={this.handleLogin}/>
  }

  renderProfile = () => {
    return <ProfileContainer 
      user={this.state.user} 
      token={this.state.token} 
      deleteStock={this.deleteStock}
      sellStocks={this.sellStocks}
      handleDeposit={this.handleDeposit}
    />
  }

  renderStocks = () => {
    return <StocksContainer 
      stocks={this.state.allStocks} 
      addStockToPortfolio={this.addStockToPortfolio}
      buyStocks={this.buyStocks}
      user={this.state.user}
    />
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderLoginForm } />
          <Route path="/register" render={ this.renderRegisterForm } />
          <Route path="/stocks" render={ this.renderStocks } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);