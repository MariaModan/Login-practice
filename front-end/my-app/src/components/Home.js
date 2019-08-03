import React from 'react';
import picture from '../img/smiley.svg';
import './css/home.css';

const Home = ({name, onRouteChange}) => {
    return(
        <div className='home-container'>
            <nav onClick={() => onRouteChange('signin')}>Sign Out</nav>
            <div className='content'>
                <h1 className='greeting'>{`Welcome back ${name}`}</h1>
                <p>I hope you're having an amazing day!</p>
                <img src={picture} alt='two people and a smiley face'/>
            </div>
        </div>
    );
}

export default Home;