import React from 'react';
import TodoList from './TodoList';

const Todo = (props) => {
    console.log(props);
    return (
    <div>
        <p>{props.obj.task}</p>
    </div>
    );
}

 export default Todo;
