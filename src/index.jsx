{
    const App = () => {
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

    export default App;
  }
