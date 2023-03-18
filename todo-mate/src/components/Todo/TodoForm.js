import React from "react";

const TodoForm = ({ todoItem, setTodoItem, createTodo }) => {  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
  };
  return (
    <div className="todoFormContainer">
      <form onSubmit={createTodo}>
        <input
          type="text"
          name="title"
          value={todoItem.title || ""}
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="contents"
          value={todoItem.contents || ""}
          placeholder="contents"
          onChange={handleChange}
        />
        <input type="submit" value="Add✔️" />
      </form>
    </div>
  );
};

export default TodoForm;
