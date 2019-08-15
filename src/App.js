import React from 'react';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      //change these back to empty strings after you're done building the to do app interface
      user: {
        id: '1',
        name: 'Maria',
        email: '',
        dateJoined: ''
      },
      route: 'home'
    }
  }

  onRouteChange = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        dateJoined: data.dateJoined
      }
    });
    this.onRouteChange('home');
  }

  signOutUser = () => {
    this.setState({
      user: {
        id: '',
        name: '',
        email: '',
        dateJoined: '',
        
      },
    });
    this.onRouteChange('signin');
  }

  render(){
    return (
      <div className="App">
        {
          this.state.route === 'home' ? <Home user={this.state.user} signOutUser={this.signOutUser}/>
            : (
              this.state.route === 'register' ? <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> : <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            )
        }
      </div>
    );
  } 
}

export default App;
