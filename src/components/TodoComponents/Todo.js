import React from 'react';

// <Todo /> is a component that takes in the todo data and displays the task to the screen.
// Like Students


function ToDo(props) {
  return (
    <div className={`todo${props.todo.completed ? ' completed' : ''}`} onClick={() => props.taskDone(props.todo.id)} >
            {props.todo.task}
    </div>
  );
}

export default ToDo;