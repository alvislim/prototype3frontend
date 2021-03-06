import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    async componentDidMount() {
        try {
            const data = JSON.parse(sessionStorage.getItem('userData'));
            console.log(data)
            const response = await axios.get('https://gaproject3backend.herokuapp.com/user', { withCredentials: true })
            const res = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${data}`)
            if(response.data) this.setState({name: response.data.name})
            else if(res.data.email) this.setState({name: res.data.name})
            else this.props.history.push('/login') 
        } catch (err) {
            console.log(err.response)
            this.props.history.push('/login')
        }
    }

    handleLogout = async (e) => {
        try {
            console.log('hi')
            const response = await axios.get('https://gaproject3backend.herokuapp.com/logout', { withCredentials: true })
            console.log(response)
            this.props.history.push('/login')
        } catch (err) {
            console.log(err.response)
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.name}</h1>
                <button onClick={this.handleLogout}>LogOut</button>
            </div>
        )
    }
}


export default Dashboard