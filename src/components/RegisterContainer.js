import React, { Component } from 'react'
import RegisterLabels from './RegisterLabels'
import Message from './ErrorMessage'
import axios from 'axios';

class RegisterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            registrationError: [],
            registerStatus: false
        }
    }

    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({ [id]: value} )}

    handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let data = { ...this.state }
            const response = await axios.post('https://gaproject3backend.herokuapp.com/register', data, { withCredentials: true })
            if (response.data.success) {
                this.setState({ 
                    registerStatus:  true,
                    name: '',
                    email: '',
                    password: '',
                    password2: ''
                 })
                 this.props.history.push('/login')
            }
        } catch (err) {
            console.log(err.response.data)
            const errors = err.response.data.error
            this.setState({
                registrationError: errors
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className='text-center mb-3'>{this.props.registerStatus}</h1>
                {this.state.registrationError != null && this.state.registrationError.map((err,i) => {
                    return (
                        <Message msg={err.msg} key={i}/>
                    )
                })}
                <RegisterLabels
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </form>
        )
    }

}
export default RegisterContainer