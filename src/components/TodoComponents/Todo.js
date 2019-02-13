import React from 'react';

// <Todo /> is a component that takes in the todo data and displays the task to the screen.
// Like Students


function ToDo(props) {
  return (
    <div className="todo notcompleted">
        <div> {props.todo.task}</div>
    </div>
  );
}

export default ToDo;