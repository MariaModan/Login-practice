import React from 'react';

const TodoItem = ({title}) => {
    return(
        <div>
            <p>
                <input type='checkbox' />
                {title}
            </p>
        </div>
    )
}

export default TodoItem;