import React from 'react';
import TodoApp from './TodoApp';
import picture from '../img/smiley.svg';
import './css/home.css';

class Home extends React.Component {
    constructor(props) {
        super(props)
    };
    
    render() {
        const name = this.props.user.name;
        const signOutUser = this.props.signOutUser;
        return(
            <div className='home-container'>
                <nav onClick={signOutUser}>Sign Out</nav>
                <div className='content'>
                    <h1 className='greeting'>{`Welcome back ${name}`}!</h1>
                    <p className='subheading'>Here is your to do list for today:</p>
                    <TodoApp user={this.props.user}/>
                    <img src={picture} alt='two people and a smiley face'/>
                </div>
            </div>
        );
    }  
}

export default Home;