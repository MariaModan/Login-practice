import React from 'react';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }
   
    submitTodo = (ev) => {
        ev.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({
            input: ''
        })
        
    }

    onInputChange = (ev) => {
        this.setState({
            input: ev.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.submitTodo}>
              <input type='text' placeholder=" Add task..." value={this.state.input} onChange={this.onInputChange}></input>
              <button type='submit' >Add</button>  
            </form>
        ) 
    }
           
}

export default AddTodo;