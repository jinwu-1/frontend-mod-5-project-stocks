import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import ProfileContainer from './containers/ProfileContainer'
import StocksContainer from './containers/StocksContainer'

class App extends React.Component {

  state = {
    user: {
      username: "",
      first_name: "",
      last_name: "",
      cash: ""
    },
    token: "",
    portfolio: {
      stocks: []
    },
    all_stocks: []
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
          all_stocks: stocksArray.symbolsList.slice(0,200)
        })
      })

    fetch("http://localhost:3000/portfolios")
      .then(r => r.json())
      .then(portfoliosArray => {
        let filteredArray = portfoliosArray.filter(portfolio => {
          return portfolio.user.username === this.state.user.username
        })
        this.setState({
          portfolio: filteredArray[0]
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

  addPortfolio = (info) => {
    fetch("http://localhost:3000/portfolios", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    })
    .then(r => r.json())
    .then(results => {
      console.log(results)
    })
  }
  
  addStockToPortfolio = (stockInfo) => {
    console.log(stockInfo)
    // fetch("http://localhost:3000/stocks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(stockInfo)
    // })
    // .then(r => r.json())
    // .then(results => {
    //   console.log(results)
    // })
  }

  renderRegisterForm = () => {
    return <RegisterForm handleSubmit={this.handleRegister}/>
  }

  renderLoginForm = () => {
    return <LoginForm handleSubmit={this.handleLogin}/>
  }

  renderProfile = () => {
    return <ProfileContainer user={this.state.user} token={this.state.token} portfolio={this.state.portfolio} addPortfolio={this.addPortfolio}/>
  }

  renderStocks = () => {
    return <StocksContainer stocks={this.state.all_stocks} addStockToPortfolio={this.addStockToPortfolio} portfolio={this.state.portfolio}/>
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