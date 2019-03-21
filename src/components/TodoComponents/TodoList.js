import React from 'react';
import { getPortPromise } from 'portfinder';

import './Todo.css';


const TodoList = (props) => {
  return (
    <div className="todoList">
      {props.todoList.map((obj) => 
        <div key={obj.id} className={obj.completed ? 'done' : 'todo'}>
          <button className="todoButton" name={obj.id} onClick={props.strikeThrough}>x</button> <p>{obj.task}</p>
        </div>
      )}
    </div>
  )
}

export default TodoList;
