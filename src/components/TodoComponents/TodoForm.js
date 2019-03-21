 import React from 'react';

 const TodoForm = (props) => {
     return (
         <form>
             <input type="text" onChange={props.handleChanges} value={props.name}/>
             <button onClick={props.addItem}>Add Todo</button>
             <button onClick={props.clearCompleted}>Clear Completed</button>
         </form>
     )
 }

 export default TodoForm;
