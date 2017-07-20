import React, {Component} from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state= {

    }
  }
render () {
  return (
    <div>
      <input type="email"
            className="email-input"
            placeholder="email"/>
      <input type="password"
             className="password-input"
             placeholder="password"/>
    </div>
  )
}

}

export default Login;
