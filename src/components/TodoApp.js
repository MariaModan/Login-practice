import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';
import './css/todoapp.css';

class TodoApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todoList: [
                {title: 'walk the dog',
                completed: false,
                id: '1'}, 
                {title: 'feed the cat',
                completed: false,
                id: '2'}, 
                {title: 'do laundry',
                completed: false,
                id: '3'}
            ],
        }
    }

    addTodo = (input) => {
        const newTodo = {
            title: input,
            id: '4',
            completed: false
        }
        this.setState({
            todoList: [...this.state.todoList, newTodo]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todoList: this.state.todoList.map( item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item;
            })
        })
    }

    delTodo = (id) => {
        this.setState({
            todoList: [...this.state.todoList].filter(item => item.id !==id)
        })
    }

    render (){
        return (
            <div className='todoApp'>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todoList={this.state.todoList} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
            </div>
        )
    }
    
}

export default TodoApp;