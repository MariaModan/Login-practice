import React from 'react';

const AddTodo = ({onInputChange, submitTodo}) => {
   
        return (
            <div>
              <input type='text' placeholder="Add task..." onChange={onInputChange}></input>
              <button type='submit' onClick={submitTodo}>Add</button>  
            </div>
        )    
}

export default AddTodo;