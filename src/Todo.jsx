import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import React, { useState } from 'react';
import './Todo.css'

function Todo({ id, text, completed, onComplete, onDelete }) {
    const [isChecked, setIsChecked] = useState(completed);

    const handleComplete = () => {
        setIsChecked(!isChecked);
        onComplete();
    };

    const handleDelete = () => {
        onDelete();
    }
    return (
        <div id="todo-row">
            <div id={id}>
                <input type="checkbox" checked={isChecked} onChange={handleComplete}/>
                <p>{text}</p>
            </div>
            <div id={id}>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;
