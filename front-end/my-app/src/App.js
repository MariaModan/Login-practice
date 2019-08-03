import React from 'react';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {
        name: 'Maria',
        email: 'maria@gmail.com',
        password: '123'
      },
      route: 'signin'
    }
  }

  onRouteChange = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }

  render(){
    return (
      <div className="App">
        {
          this.state.route === 'home' ? <Home name={this.state.user.name} onRouteChange={this.onRouteChange}/>
            : (
              this.state.route === 'register' ? <Register onRouteChange={this.onRouteChange}/> : <SignIn onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  } 
}

export default App;
