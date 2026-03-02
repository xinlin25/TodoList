import React from "react";
import { Task } from "../../types/Task";
import "./TodoItem.css";

interface TodoItemProps {
  task: Task;
  toggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleCompleted }) => {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />{" "}
      {task.text}
    </li>
  );
};

export default TodoItem;
