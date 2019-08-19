import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';
import './css/todoapp.css';

class TodoApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todoList: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3005/todolist', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'email': this.props.user.email})    
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todoList: data
                })
            })
            .catch( err => console.log('unable to get todolist'))

    }

    addTodo = (input) => {
        fetch('http://localhost:3005/addtodo', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'email': this.props.user.email,
                'title': input
            })    
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todoList: [...this.state.todoList, data[0]]
                })
            })
    }

    toggleComplete = (id) => {
        fetch('http://localhost:3005/completed', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'id': id
            })    
            })
            .then(response => {
                this.setState({
                    todoList: this.state.todoList.map( item => {
                        if (item.id === id) {
                            item.completed = !item.completed
                        }
                        return item;
                    })
                })
            })
        
    }

    delTodo = (id) => {
        fetch('http://localhost:3005/deltodo', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'id': id
            })    
            })
            .then( response => {
                this.setState({
                    todoList: [...this.state.todoList].filter(item => item.id !==id)
                })
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