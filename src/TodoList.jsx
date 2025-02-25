{
    const TodoList = ({ todos }) => {
      return (
        <div className="space-y-1">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      );
    };

    export default TodoList;
  }
