import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './NewTodo.css'

function NewTodo() {
    return (
        <div id="create">
            <form id="newTodoForm">
                <input id="new-todo" type="text" placeholder="Add something to do..." />
                <input id="submit-todo" type="submit" value="+" />
            </form>
        </div> 
    );             
}       
  
export default NewTodo;
