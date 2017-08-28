import React, { Component } from 'react'
import SigninForm from './SigninForm'
import { Redirect } from 'react-router'

class SigninComponent extends Component {
  constructor(){
    super()
    this.state = {
      fireRedirect: false
    }
    this.signinHandler = this.signinHandler.bind(this)
  }
  signinHandler (formData) {
    console.log(formData)
    debugger
    this.setState({ fireRedirect: true })
  }
  render (){
    return (
      <div className="SigninComponent">
        { this.state.fireRedirect && (
          <Redirect to='/'/>
        )}
        <h2>Sign in here</h2>
        <SigninForm signinHandler={this.signinHandler} />
      </div>
    )
  }
}

export default SigninComponent