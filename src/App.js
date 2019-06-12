import React, { Component } from 'react';
import Test from './Test';
import Add from './Add';

//passing multiple objects to the test.js file
class App extends Component {
  state = {
    todos: [
      {work:"A", id: 1},
      {work:"C", id: 2},
      {work:"D", id: 3}
    ]
  }
  addTodo = (todo) => {
    console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState ({
      todos: todos
    })
  }
  deleteTodo = (id) => {
    console.log(id);
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState ({
      todos: todos
    })
  }
  render() {
    return (
      <div className="App">
        <Test deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <Add addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
