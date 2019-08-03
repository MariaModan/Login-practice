import React from 'react';
import './css/register.css';
import picture from '../img/singup.svg';

const Register = () => {
    return(
        <div className='container'>
            <div className='form-container'>
                <h1>Register</h1>
                <form >
                    <label htmlFor='name'/>
                    <input type='text' name='name' id='name' placeholder=' Name'/>
                    <label htmlFor='email'/>
                    <input type='email' name='email' id='email' placeholder=' Email'/>
                    <label htmlFor='password'/>
                    <input type='password' name='password' id='password' placeholder=' Password'/>
                    <button type='submit' id='button' className='signUpBtn btn' >Sign up</button>
                </form>
                <p>Already have an account?
                <button className='regBtn btn' >Sign in</button></p>
            </div> 
            <div className='illustration-container'>
                <h1> Welcome aboard!</h1>
                <img src={picture} alt='happy ilustration'></img>
            </div>
            <div>
            </div> 
        </div>
    );
}

export default Register;