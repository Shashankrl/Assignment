import React from 'react';

function Question16() {
  return (
    <div className="question-answer">
      <p>
        Here's how to build a Todo List app in React where a user can add and delete tasks:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState } from 'react';

function TodoList() {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  
  // State for the input field
  const [inputValue, setInputValue] = useState('');
  
  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  // Add a new todo
  const addTodo = () => {
    // Don't add empty todos
    if (inputValue.trim() === '') return;
    
    // Create a new todo with a unique ID
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    // Add the new todo to the list
    setTodos([...todos, newTodo]);
    
    // Clear the input field
    setInputValue('');
  };
  
  // Delete a todo
  const deleteTodo = (id) => {
    // Filter out the todo with the matching id
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  // Toggle a todo's completed status
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    
    setTodos(updatedTodos);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
      
      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">No tasks yet. Add a task to get started!</p>
        ) : (
          todos.map(todo => (
            <li 
              key={todo.id} 
              className={\`todo-item \${todo.completed ? 'completed' : ''}\`}
            >
              <div className="todo-text" onClick={() => toggleComplete(todo.id)}>
                <input 
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="todo-checkbox"
                />
                <span>{todo.text}</span>
              </div>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
      
      {todos.length > 0 && (
        <div className="todo-stats">
          <p>Total tasks: {todos.length}</p>
          <p>Completed: {todos.filter(todo => todo.completed).length}</p>
          <p>Remaining: {todos.filter(todo => !todo.completed).length}</p>
        </div>
      )}
    </div>
  );
}

export default TodoList;`}
        </code>
      </pre>
      
      <p>
        This Todo List app includes the following features:
      </p>
      
      <ul>
        <li>Adding new tasks through a form input</li>
        <li>Deleting tasks with a delete button</li>
        <li>Marking tasks as completed by clicking on them or their checkbox</li>
        <li>Displaying statistics about total, completed, and remaining tasks</li>
        <li>Showing a message when there are no tasks</li>
      </ul>
      
      <p>
        The app uses React's <code>useState</code> hook to manage:
      </p>
      
      <ul>
        <li>The list of todos</li>
        <li>The current input field value</li>
      </ul>
      
      <p>
        You could enhance this app by adding features like:
      </p>
      
      <ul>
        <li>Saving todos to localStorage for persistence</li>
        <li>Adding due dates to tasks</li>
        <li>Implementing categories or priority levels</li>
        <li>Adding drag-and-drop reordering</li>
      </ul>
    </div>
  );
}

export default Question16;
