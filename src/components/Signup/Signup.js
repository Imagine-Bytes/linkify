import React, { useState } from 'react'
import { Button } from '../../assets/styles/Button';
import '../App.css'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import { SignupStyled } from './Signup.styed'
import registeredForm from '../../actions/registeredForm'
import validateEmail from '../../validateEmail'
import { Error } from '../../assets/styles/Error'



const Signup = ({ dispatch }) => {

    const [ form, setForm ] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const [attempt, setAttempt] = useState(false)
    const [valid, setValid] = useState(false)

    const handleUpdate = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const register = (e) => {
        validate()
        e.preventDefault()
        setAttempt(true)
        if (valid) return dispatch(registeredForm(form)) 
    }

    const validate = () => {
        const { username, email, password, repeatPassword } = form
        if (
            username.length >= 4 &&
            validateEmail(email) &&
            password.length >= 8 &&
            password === repeatPassword
        ) { setValid(true) } 
    }

    

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
                        name="username"
                        maxLength="12"
                        placeholder="Enter Username"
                        onChange={handleUpdate}
                    />
                    {attempt && form.username.length < 4 && <Error>Username not up to four letters</Error>}
                    
                    <input 
                        className="form-control form-control-lg" 
                        type="email"
                        name="email"
                        placeholder="Enter E-mail Address"
                        onChange={handleUpdate}
                    />
                    {attempt && !validateEmail(form.email) && <Error>Email not correct</Error>}
    
                    <input 
                        className="form-control form-control-lg" 
                        type="password"
                        name="password"
                        placeholder="Enter a password"
                        onChange={handleUpdate}
                    />
                    {attempt && form.password.length < 8 && <Error>Password not Strong</Error>}

                    <input 
                        className="form-control form-control-lg" 
                        type="password"
                        name="repeatPassword"
                        placeholder="Confirm your password"
                        onChange={handleUpdate}
                    />
                    {attempt && form.password !== form.repeatPassword && <Error>Passwords don't match</Error>}

                    <div className="button">
                        <Button 
                            className="btn btn-lg btn-primary pull-xs-right"
                            onClick={register}
                            type="submit">
                            Submit
                        </Button>
                    </div>
                </div>
                </form>
            </SignupStyled>    
        </div>
    );
}

export default connect()(Signup)