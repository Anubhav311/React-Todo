import React from 'react';
// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js

// const TodoList = [
//     {
//       task: 'Organize Garage',
//       id: 1528817077286,
//       completed: false
//     },
//     {
//       task: 'Bake Cookies',
//       id: 1528817084358,
//       completed: false
//     }
//   ];


const TodoList = (props) => {
    return (
        <div>
            {props.todoList.map(obj => <div>{obj.task}</div>)}
        </div>
    )
}

export default TodoList;
