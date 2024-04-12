import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

const apiKey = "6b7f7f-b4ca40-c2d3c4-b0a667-94d8d8";
const apiUrl = "https://cse204.work/todos";

axios.defaults.headers.common['x-api-key'] = apiKey;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  async function completeTodo(todoId, isChecked) {
    try {
      const updatedStatus = !isChecked;
      let todo = {
        completed: updatedStatus
      }
      await axios.put(`${apiUrl}/${todoId}`, todo);
      const response = await axios.get(apiUrl);
      setTodos(response.data);

    } catch (error) {
      console.error('Error completing todo:', error);
    }
  }

  async function deleteTodo(todoId) {
    await axios.delete(apiUrl + '/' + todoId);
    const response = await axios.get(apiUrl);
    setTodos(response.data);
  }

  return (
    <main>
      <header>
        <h1>My ToDo List</h1>
      </header>
      <div id="create">
        <NewTodo />
      </div>
      <div id="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id, todo.completed)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
