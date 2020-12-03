import React, { Component } from 'react'
import { Button } from '../../assets/styles/Button';
import '../App.css'
import Header from '../Header/Header'
import { SignupStyled } from './Signup.styed'
import validateEmail from '../../validateEmail'





class Signup extends Component {

    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
            message: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleRepeatPasswordChange = (event) => {
        this.setState({repeatPassword: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password, repeatPassword, email } = this.state

        if (username.length > 4) {

            if (validateEmail(email)) {

                if (password && password === repeatPassword) {
                    this.setState({ error: " " })
                    fetch("https://linkifyserver.herokuapp.com/register", {
                        method: "POST",
                        body: JSON.stringify({
                            username: username,
                            password: password
                        }),
                        headers: { 
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                    .then(response => response.json()) 
                    .then(json => {
                        console.log(json)
                        // const res = json
                        // const response = JSON.parse(res)
                        if (json.error) return this.setState({ message: json.error })
                        return this.setState({ message: json.message })
                    })
                    .catch(err => this.setState({ error: "Sorry. It seems there's a network issue. Please try again" } ))
                    
                } else {
                    this.setState({
                        password: "",
                        repeatPassword: "",
                        message: "Your Passwords do not match. Please Try Again"})
                }

            } else {
                this.setState({message: "Please fill in a correct email"})
            }

        } else {
            this.setState({message: "Please fill in a Username. It must not be less than four characters"})
        }
    }



    render() {
        const { handleUsernameChange, handleEmailChange, handlePasswordChange, handleRepeatPasswordChange, handleSubmit } = this

        return (
            <div className="Signup">
                <Header />
                <SignupStyled>
                    <div className="title">
                        <h1> Sign Up </h1>
                    </div>
        
                    <form>
                    <div className="form">
                        
                        <input
                            className="form-control form-control-lg" 
                            type="text"
                            placeholder="Enter Username"
                            onChange={handleUsernameChange}
                            minLength="5"
                            maxLength="12"
                            required
                        />
                        
                        <input 
                            className="form-control form-control-lg" 
                            type="email"
                            placeholder="Enter E-mail Address"
                            onChange={handleEmailChange}
                            required
                        />
        
                        <input 
                            className="form-control form-control-lg" 
                            type="password"
                            placeholder="Enter a password"
                            onChange={handlePasswordChange}
                            required
                        />
                        <input 
                            className="form-control form-control-lg" 
                            type="password"
                            placeholder="Confirm your password"
                            onChange={handleRepeatPasswordChange}
                            required
                        />

                        <p className="error-log">{this.state.message}</p>
        
                        <Button 
                            className="btn btn-lg btn-primary pull-xs-right"
                            type="submit"
                            onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                    </form>
                </SignupStyled>    
            </div>
        );
    }
}

export default Signup