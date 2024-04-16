import React, { useState } from 'react';
import './NewTodo.css'

function NewTodo({ onCreate }) {
  const [newTodo, setNewTodo] = useState('');

  const handleCreate = (event) => {
    event.preventDefault();
    onCreate(newTodo);
    setNewTodo(''); // Clear the input field after submission
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div id="create">
      <form id="newTodoForm" onSubmit={handleCreate}>
        <input
          id="new-todo"
          type="text"
          placeholder="Add something to do..."
          value={newTodo}
          onChange={handleChange}
        />
        <input id="submit-todo" type="submit" value="+" />
      </form>
    </div>
  );
}

export default NewTodo;
