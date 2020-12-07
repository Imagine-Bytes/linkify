import React, { useState } from 'react'
import { Button } from '../../assets/styles/Button';
import '../App.css'
import Header from '../Header/Header'
import { SignupStyled } from './Signup.styed'
// import { useSelector, useDispatch } from "react-redux";

const Signup = () => {

    // const dispatch = useDispatch()
    const [ form, setForm ] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const handleUpdate = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
        console.log(form)
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
                        placeholder="Enter Username"
                        // onChange={handleUpdate}
                    />
                    
                    <input 
                        className="form-control form-control-lg" 
                        type="email"
                        name="email"
                        placeholder="Enter E-mail Address"
                        // onChange={handleUpdate}
                    />
    
                    <input 
                        className="form-control form-control-lg" 
                        type="password"
                        name="password"
                        placeholder="Enter a password"
                        // onChange={handleUpdate}
                    />
                    <input 
                        className="form-control form-control-lg" 
                        type="password"
                        name="repeatPassword"
                        placeholder="Confirm your password"
                        // onChange={handleUpdate}
                    />
    
                    <Button 
                        className="btn btn-lg btn-primary pull-xs-right"
                        // onClick={() => dispatch(register())}
                        type="submit">
                        Submit
                    </Button>
                </div>
                </form>
            </SignupStyled>    
        </div>
    );
}

export default Signup