import React from 'react';

// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

const ToDoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input
                type="text"
                value={props.value}
                name="todo"
                onChange={props.handleChanges}
                placeholder="Enter your todo"
            />
            <button type="submit">Add ToDo</button>
            <button type="submit">Clear Completed</button>
        </form>
    );
};

export default ToDoForm;