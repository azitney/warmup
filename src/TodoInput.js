import React, { Component } from 'react';


class TodoInput extends Component {
state={
  newTodo: ''
}

handleChange = (e) => {
  this.setState({newTodo: e.target.value})
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.updateTodo(this.state.newTodo)
}
render(){



return(


<div>
<h1>Enter Something To Do</h1>
<form onSubmit={this.handleSubmit}>
<input type="text" value={this.state.newTodo} onChange={this.handleChange}/>
<input type="submit" />
</form>
</div>

  );
}
}

export default TodoInput;
