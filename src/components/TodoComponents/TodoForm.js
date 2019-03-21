 import React from 'react';

 const TodoForm = (props) => {
     return (
         <form className="form">
            <div className="buttonContainer">
              <button className="add" onClick={props.addItem}>Add Todo</button>
              <button className="clear" onClick={props.clearCompleted}>Clear</button>
            </div>
               <input className="input" type="text" onChange={props.handleChanges} value={props.name}/>
         </form>
     )
 }

 export default TodoForm;
