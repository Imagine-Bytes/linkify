import React, { useState } from 'react'
import { Button } from '../../assets/styles/Button';
import { LoginStyled } from './Login.styled'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import loggedForm from '../../actions/loggedForm'

function Login({ dispatch }) {

  const [form, setForm] = useState({
      username: '',
      password: ''
  })

  const handleChange = (event) => {
    setForm({
        ...form,
        [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    return dispatch(loggedForm(form))
  }
  return (
    <div>
        <Header />
            <LoginStyled>

            <div className="title">
                <h1>Login</h1>
            </div>

            <div className="form">
                <input
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Enter Username or Email"
                />
                <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter a password"
                />

                <Button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    onClick={handleSubmit}>
                    Login
                </Button>
            
            </div>
        </LoginStyled>
    </div>
  );
}

export default connect()(Login)
