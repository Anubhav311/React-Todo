import React from 'react';
import { getPortPromise } from 'portfinder';

import './Todo.css';
// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js


const TodoList = (props) => {
    return (
        <div>
            {props.todoList.map((obj) => 
                <div key={obj.id} className={obj.completed ? 'done' : ''}>
                    {obj.task} <button name={obj.id} onClick={props.strikeThrough}>x</button>
                    {/* {console.log(obj.id)} */}
                </div>
            )}
        </div>
    )
}

export default TodoList;
