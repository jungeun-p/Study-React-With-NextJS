import React from "react";

const TodoForm = ({ todoItem, setTodoItem, createTodo }) => {
  // onChange Event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
  };

  return (
    <div className="todoForm">
      <form onSubmit={createTodo}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={todoItem.title || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contents"
          placeholder="contents"
          value={todoItem.contents || ""}
          onChange={handleChange}
        />
        <input type="submit" value="Add ✏️" />
      </form>
    </div>
  );
};

export default TodoForm;
