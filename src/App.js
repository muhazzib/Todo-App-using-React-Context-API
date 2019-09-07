import React from 'react';
import { Component } from 'react';
import './App.css';
import MyContext from './store'
import Todos from './todos'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: {
        name: '',
        edit: false
      }
    };
  }
  render() {
    const contextData = {
      todos: this.state.todos,
      todo: this.state.todo,
      add: () => {
        let { todo, todos } = this.state;
        if (todo.name) {
          if (todo.edit) {
            const editedObj = {
              name: todo.name,
              edit: false
            }
            todos.splice(todo.index, 1, editedObj);
          } else {
            todos = [...todos, todo]
          }
          this.setState({
            todos,
            todo: {
              name: '',
              edit: false
            }
          })
        }
      },
      getTodoValue: (ev) => {
        let { todo } = this.state;
        todo.name = ev.target.value
        this.setState({
          todo
        })
      },
      edit: (value, i) => {
        let { todo } = this.state;
        todo.name = value.name;
        todo.edit = true;
        todo.index = i;
        this.setState({
          todo
        })
      },
      delete: (i) => {
        const { todos } = this.state;
        todos.splice(i, 1)
        this.setState({
          todos
        })
      },
    }
    return (
      <MyContext.Provider value={contextData}>
        <Todos />
      </MyContext.Provider>
    );
  }
}

export default App;
