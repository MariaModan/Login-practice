import React from 'react';
import './css/register.css';
import picture from '../img/singup.svg';

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onNameChange = (ev) => {
        this.setState ({
            name: ev.target.value
        });
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

    onSubmitRegister = (ev) => {
        ev.preventDefault();

        fetch('http://localhost:3005/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                dateJoined: new Date()
            })
        })
            .then( response => response.json())
            .then( user => {
                console.log(user)
                if (user){
                    this.props.loadUser(user);
                    console.log(user);
                    this.props.onRouteChange('home');
                }
            })  
    }

    render() {
        return(
            <div className='container'>
                <div className='reg-form-container'>
                    <h1>Register</h1>
                    <form >
                        <label htmlFor='name'/>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            placeholder=' Name'
                            onChange={this.onNameChange}/>

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
                            className='signUpBtn btn' 
                            onClick={this.onSubmitRegister}>Sign up</button>
                    </form>
                    <p>Already have an account?
                    <button 
                        className='regSignInBtn btn' 
                        onClick={()=> this.props.onRouteChange('signin')}>Sign in</button></p>
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
    
}

export default Register;