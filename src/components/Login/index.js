import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {userInput: '', password: ''}

  userInput = event => {
    this.setState({userInput: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  loginForm = async event => {
    event.preventDefault()
    const {userInput, password} = this.state
    const userDetails = {userInput, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="login-container">
        <form className="form-container" onSubmit={this.loginForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website"
          />
          <label className="user-input" htmlFor="userInput">
            USERNAME
          </label>
          <br />
          <input
            id="userInput"
            type="text"
            placeholder="Username"
            onChange={this.userInput}
          />
          <br />
          <label className="password" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            id="password"
            placeholder="Password"
            type="password"
            onChange={this.password}
          />
          <br />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
