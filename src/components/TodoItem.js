import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    const title = props.title;
    const id = props.id;
    return(
        <p className={props.completed === true ? 'todoItem completed' : 'todoItem'}>
            <input type='checkbox' onChange={props.toggleComplete.bind(this, id)}/>
            {title}
            <button className='delBtn' onClick={props.delTodo.bind(this, id)}>X</button>
        </p>
    )  
}

TodoItem.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    toggleComplete: PropTypes.func,
    completed: PropTypes.bool,
    delTodo: PropTypes.func
}

export default TodoItem;