import React from "react";

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check-circle"></i>
      </button>
      <li className="todo-item">{text}</li>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-minus-circle"></i>
      </button>
    </div>
  );
};

export default Todo;
