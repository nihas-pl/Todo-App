{
    const TodoItem = ({ todo }) => {
      return (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
          <span className="flex-1">{todo.text}</span>
          <button 
            onClick={() => deleteTodo(todo.id)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      );
    };

    export default TodoItem;
  }
