import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoList = [
  {
    task: `Organize Garage` ,
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoList: todoList,
      todoText: '',
    }
  }

  handleChanges = event => {
    // console.log('event: ', event.target.value);
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
    // console.log(this.state.todoText)
  }

  completedTask = event => {
    for(let i = 0; i < this.state.todoList.length; i++) {
      if(this.state.todoList[i].id == event.target.name) {
        if(this.state.todoList[i].completed == false) {
          this.setState({...this.state.todoList[i].completed = true},
            // console.log(this.state.todoList[i])
            );
        } else {
          this.setState({...this.state.todoList[i].completed = false},
            // console.log(this.state.todoList[i])
          );        
        }
      }
    }
  }

  clearCompleted = (event) => {
    event.preventDefault();
    let newArr = this.state.todoList.slice();
    // console.log(newArr);
    for(let i = newArr.length-1; i >= 0; i--) {
      if(newArr[i].completed == true) {
        // console.log(newArr[i]);
        newArr.splice(newArr.indexOf(newArr[i]), 1)
        // console.log(newArr);
      }
    }
    this.setState({
      todoList: newArr,
      todoText: '',
    })
    // console.log(newArr);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoList={this.state.todoList} 
          strikeThrough={this.completedTask}
        />
        <TodoForm
          name={this.state.todoText}
          handleChanges={this.handleChanges}
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
}

export default App;
