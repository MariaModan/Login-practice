import React from 'react';
import TodoItem from './TodoItem'

const Todos = ( {todoList} ) => {
    return(
        <div>
            {todoList.map((item, index) => 
                <TodoItem key={index} title={item} />
            )}
        </div>
    )

    // return props.todoList.map( (item, index) => {
    //         <TodoItem key={index} title={item}/>
    //     })
}

export default Todos;