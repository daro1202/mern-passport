import React, { Component } from 'react'
import axios from 'axios'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.email, this.state.password)
		// clean up the form
		this.setState({
			email: '',
			password: ''
		})
		// axios
		// 	.post('/auth/login', {
		// 		email: this.state.email,
		// 		password: this.state.password
		// 	})
		// 	.then(response => {
		// 		if (response.status === 200) {
		// 			// update the state
		// 		}
		// 		console.log(response)
		// 	})
	}

	render() {
		return (
			<div className="LoginForm">
				<h1>Login form</h1>
				<label htmlFor="email">Email: </label>
				<input
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Login</button>
			</div>
		)
	}
}

export default LoginForm
