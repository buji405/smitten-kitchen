import React, {Component} from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state= {

    }
  }
render () {
  return (
    <section className="login-screen">
      <div className="login-container">
        <input type="email"
              className="email-input"
              placeholder="email"/>
        <input type="password"
               className="password-input"
               placeholder="password"/>
        <button>Submit</button>
      </div>
    </section>
  )
}

}

export default Login;
