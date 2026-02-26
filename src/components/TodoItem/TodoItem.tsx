import React from "react";
import { Task } from "../../types/Task";
import "./TodoItem.css";

interface TodoItemProps {
  task: Task;
  changeState: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, changeState }) => {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => changeState(task.id)}
      />{" "}
      {task.text}
    </li>
  );
};

export default TodoItem;
