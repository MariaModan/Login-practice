import React from 'react';
import './css/signin.css';
import picture from '../img/welcome.svg';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (ev) => {
        this.setState ({
            email: ev.target.value
        });
    }

    onPasswordChange = (ev) => {
        this.setState ({
            password: ev.target.value
        });
    }

    render () {
        return(
            <div className='container'>
                <div className='illustration-container'>
                    <h1> Welcome back!</h1>
                    <img src={picture} alt='happy ilustration'></img>
                </div>
                <div className='form-container'>
                    <h1>Sign In</h1>
                    <form >
                        <label htmlFor='email'/>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            placeholder=' Email'
                            onChange={this.onEmailChange}/>
                            
                        <label htmlFor='password'/>
                        <input 
                            type='password' 
                            name='password' 
                            id='password' 
                            placeholder=' Password'
                            onChange={this.onPasswordChange}/>

                        <button 
                            type='submit' 
                            id='button' 
                            className='signInBtn btn' 
                            onClick={() => this.props.onRouteChange('home')}>Sign in</button>
                    </form>
                    <p>Don't have an account?
                    <button 
                        className='regBtn btn' 
                        onClick={() => this.props.onRouteChange('register')} >Register now</button></p>
                </div> 
                <div>
                </div> 
            </div>
        );
    }
    
}

export default SignIn;