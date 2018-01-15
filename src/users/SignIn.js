import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import  signIn  from '../actions/user/sign-in'

export class SignIn extends PureComponent {

  submitForm(event) {
    event.preventDefault()

    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.signIn(user)
  }

  render() {
    return(
      <div className="sign-in form">
        <Title content="Sign In" />
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="email" type="email" placeholder="Email address" />
          </div>
          <div className="input">
            <input ref="password" type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Sign in" />
          <p>No account yet? <Link to="/sign-up">Sign up</Link> </p>
        </form>
      </div>
    )
  }
}

export default connect(null, { signIn })(SignIn)
