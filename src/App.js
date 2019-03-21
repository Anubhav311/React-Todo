import React from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: [],
      todoText: '',
    }
  }

  handleChanges = event => {
    this.setState({
      todoText: event.target.value
    })
  }

  addItem = event => {
    event.preventDefault();
    let newTasks = [...this.state.todoList,
      { task: this.state.todoText, id: Date.now(),  completed: false }];
    
    this.setState({
      todoList: newTasks,
      todoText: '',
    })
  }

  completedTask = event => {
    for(let i = 0; i < this.state.todoList.length; i++) {
      if(this.state.todoList[i].id == event.target.name) {
        if(this.state.todoList[i].completed == false) {
          this.setState({...this.state.todoList[i].completed = true},
            );
        } else {
          this.setState({...this.state.todoList[i].completed = false},
          );        
        }
      }
    }
  }

  clearCompleted = (event) => {
    event.preventDefault();
    let newArr = this.state.todoList.slice();
    for(let i = newArr.length-1; i >= 0; i--) {
      if(newArr[i].completed == true) {
        newArr.splice(newArr.indexOf(newArr[i]), 1)
      }
    }
    this.setState({
      todoList: newArr,
      todoText: '',
    })
  }

  render() {
    return (
      <div className="app">
        <h2>My ToDo List</h2>
        <TodoForm
          name={this.state.todoText}
          handleChanges={this.handleChanges}
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
        <TodoList 
          todoList={this.state.todoList} 
          strikeThrough={this.completedTask}
        />
      </div>
    );
  }
}

export default App;
