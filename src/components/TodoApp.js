import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';
import './css/todoapp.css';

class TodoApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todoList: ['walk the dog', 'feed the cat', 'do laundry'],
        }
    }

    addTodo = (input) => {
        this.setState({
            todoList: [...this.state.todoList, input]
        })
    }

    render (){
        return (
            <div className='todoApp'>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todoList={this.state.todoList} />
            </div>
        )
    }
    
}

export default TodoApp;