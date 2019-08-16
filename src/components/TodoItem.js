import React from 'react';

const TodoItem = ({title}) => {
    return(
        <p class='todoItem'>
            <input type='checkbox' />
            {title}
        </p>
    )
}

export default TodoItem;