import React from 'react';
import TodoItem from './TodoItem'

const Todos = ( {todoList} ) => {
    return todoList.map((item, index) => 
                <TodoItem key={index} title={item} />
            );
}    

export default Todos;