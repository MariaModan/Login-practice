import React from 'react';
import TodoItem from './TodoItem'

const Todos = ( {todoList, toggleComplete, delTodo} ) => {
    return todoList.map((item) => 
                <TodoItem 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    completed={item.completed} 
                    toggleComplete={toggleComplete}
                    delTodo={delTodo}/>
            );
}    

export default Todos;