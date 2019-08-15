import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

class TodoApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todoList: ['walk the dog', 'feed the cat', 'do laundry'],
            input: ''
        }
    }


    // it's not working
    submitTodo = (ev) => {
        ev.preventDefault();
        this.setState({
            todoList: this.state.todoList.push(this.state.input),
            input: ''
        })
    }

    onInputChange = (ev) => {
        this.setState({
            input: ev.target.value
        })
    }

    render (){
        return (
            <div>
                <AddTodo submitTodo={this.submitTodo} onInputChange={this.onInputChange}/>
                <Todos todoList={this.state.todoList}/>
            </div>
        )
    }
    
}

export default TodoApp;