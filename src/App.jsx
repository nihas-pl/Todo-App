{
    import React, { useState } from 'react';
    import { v1 as useSpring } from '@react-spring/web';

    const TodoItem = ({ todo, index }) => {
      const [isCompleted, setIsCompleted] = useState(todo.completed);
      const [input, setInput] = useState('');

      const toggleComplete = () => {
        setIsCompleted(!isCompleted);
        // Update the todo in local storage
        localStorage.setItem('todos', JSON.stringify([...todos.map((t) => t.id === todo.id ? { ...t, completed: !isCompleted } : t)]));
      };

      return (
        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50">
          <input
            type="text"
            value={todo.text}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && setTodos([...todos.map(t => t.id === todo.id ? { ...t, text: input } : t)])}
            className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={toggleComplete}
            className="ml-4 text-gray-400 hover:text-blue-500 transition-colors"
          >
            {isCompleted ? 'Undo' : 'Complete'}
          </button>
        </div>
      );
    };

    const TodoList = ({ todos }) => {
      return (
        <ul className="space-y-1">
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={{ ...todo, index }} />
          ))}
        </ul>
      );
    };

    const App = () => {
      const [todos, setTodos] = useState([]);
      const spring = useSpring(() => ({ x: 0 }));

      return (
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Todo App</h1>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Add a new todo"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setTodos([...todos, { id: Date.now(), text: e.target.value }]);
                    localStorage.setItem('todos', JSON.stringify(todos));
                  }
                }}
              />
              
              <TodoList todos={todos} />
            </div>
          </div>
        </div>
      );
    };

    return <App />;
  </TodoList>;
}</App>;

    <boltAction type="file" filePath="package.json">{
  "name": "todo-app",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/forms": "^4.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@tailwindcss/forms": "^4.2.3",
    "vite": "^4.2.0",
    "postcss": "^8.1.0"
  }
}
