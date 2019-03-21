import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todoList = [
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
    console.log('event: ', event.target.value);
    this.setState({
      todoText: event.target.value
    })
  }

  addItem = event => {
    event.preventDefault();
    // const newTodo = {
    //   task: this.state.task,
    //   id: Date.now(),
    //   completed: false,
    // }

    // this.setState({
    //   todoList: [...this.state.todoList, newTodo]
    // })
    // console.log(this.state.todoList, 'newState')
    let newTasks = [...this.state.todoList,
      { task: this.state.todoText, id: Date.now(),  completed: false }];
    

    this.setState({
      todoList: newTasks,
      todoText: ''
    });
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm           
          handleChanges={this.handleChanges}
          addItem={this.addItem}
        />
        <TodoList todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
 