 import React from 'react';

 const TodoForm = (props) => {
     return (
         <form>
             <input type="text" onChange={props.handleChanges}/>
             <button onClick={props.addItem}>Add Todo</button>
             <button>Clear Completed</button>
         </form>
     )
 }

 export default TodoForm;
