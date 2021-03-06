import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

import './index.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };

  }

  // Add To-Do Function
  addTask = e => {
    e.preventDefault();
    //console.log(e.target);
    const newToDo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newToDo],
      todo: ''
    });
  };

  // Handle changes to the form
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Make task completed
  taskDone = taskID => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (taskID === task.id) {
          return {...task, completed: !task.completed };
        }
        return task;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    })
  };

  render() {
    return (
      <div className="app">
        <h2>Todo List:</h2>
        <div className="todo-list">
          <ToDoList todos={this.state.todos} taskDone={this.taskDone} />
        </div>
        <ToDoForm
          value={this.state.todo}
          addTask={this.addTask}
          handleChanges={this.handleChanges}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
  export default App;