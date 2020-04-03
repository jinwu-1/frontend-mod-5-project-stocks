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
    stocks: []
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
          stocks: stocksArray.symbolsList
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

  renderRegisterForm = () => {
    return <RegisterForm handleSubmit={this.handleRegister}/>
  }

  renderLoginForm = () => {
    return <LoginForm handleSubmit={this.handleLogin}/>
  }

  renderProfile = () => {
    return <ProfileContainer user={this.state.user} token={this.state.token}/>
  }

  renderStocks = () => {
    return <StocksContainer stocks={this.state.stocks}/>
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
