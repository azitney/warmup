import React from 'react';


const TodoList = (props) => {

  let todoLists = props.todos.map((todo, index)=> <li key={index}>{todo}</li>)

  return(
    <div>
    <h1>To Do List</h1>
    <ul>
      {todoLists}
    </ul>
    </div>
  );
}

export default TodoList;
