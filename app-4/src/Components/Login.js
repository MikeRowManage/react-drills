import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }

    }

handleUsername = (val) => {
    this.setState({
        username: val
    })
}
handlePassword = (val) => {
    this.setState({
        password: val
    })
}

handleLogin = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}

    render() {
        return <div>
                    <input placeHolder="Username" onChange={(e) => this.handleUsername(e.target.value)}/>
                    <input placeHolder="Password" onChange={(e) => this.handlePassword(e.target.value)}/>
                    <button onClick={(e) => this.handleLogin(e.target.value)} >Login</button>
               </div>
    }
}

export default Login