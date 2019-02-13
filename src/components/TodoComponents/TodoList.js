import React from 'react';
import ToDo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.


const ToDoList = props => {
    return (
        <div>
            {props.todos.map(todo => ( <ToDo key={todo.id} todo={todo} /> ))}
        </div>
    )
  };



export default ToDoList;