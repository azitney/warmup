import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

class App extends Component {
  state = {
    todos: []
  }

  updateTodoList = (todo) =>{
    this.setState({todos: this.state.todos.concat(todo)})
  }

  render() {
    return (
      <div className="App">
        <TodoInput updateTodo = {this.updateTodoList}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
