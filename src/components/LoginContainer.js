import React, { Component } from 'react'
import LoginLabel from './LoginLabel'
import Message from './ErrorMessage'
import axios from 'axios'

class LoginContainer extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loginError: [],
            successMsg: ''
        }
    }
    
    handleSubmit = async (e) => {
    try {
        e.preventDefault()
        let data = { ...this.state }
        const response = await axios.post("https://gaproject3backend.herokuapp.com/login", data, { withCredentials: true })
        // console.log(response.data.user)
        if(response.data.success) {
            this.props.history.push('/dashboard') 
        }
    } catch (err) {
        console.log(err.response.data.error)
        const errors = err.response.data.error;
        this.setState({
            loginError: [errors]
        })
    }
}
    
    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({ [id]: value })
    }

    responseGoogle = async (response) => {
        // console.log(response)
        try {
            console.log(response.profileObj)
            const data = response.profileObj
            const token = response.tokenId
            const res = await axios.post("https://gaproject3backend.herokuapp.com/login/google", data, { withCredentials: true })
         
            if(res.data.success) {
                sessionStorage.setItem("userData", JSON.stringify(token))
                this.props.history.push('/dashboard') 
            }

        } catch (err) {
            console.log(err.response)
            const errors = await err.response.data.error;
            this.setState({
                loginError: [errors]
            })
        }

      }
      
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.loginError != null && this.state.loginError.map((err,i) => {
                    return (
                        <Message key={i} msg={err.msg}/> 
                    )
                })}
                <LoginLabel {...this.state} handleChange = {this.handleChange} responseGoogle={this.responseGoogle}/>
            </form>
        )
    }
}

export default LoginContainer


