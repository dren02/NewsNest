import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css'

function Todo() {
    return (
        <div id="todo-row">
            <div data-todo-id="aedbeb80-f3fa-11ee-9e3a-a3aad18319e1">
                <input type="checkbox" /> <p>nap</p>
            </div>
            <div data-todo-id="aedbeb80-f3fa-11ee-9e3a-a3aad18319e1">
                <button>Delete</button>
            </div>
        </div>
    );            
}      
  
export default Todo;
