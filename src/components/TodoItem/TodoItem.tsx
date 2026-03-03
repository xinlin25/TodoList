import React from "react";
import { Task } from "../../types/Task";
import "./TodoItem.css";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  task: Task;
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  toggleCompleted,
  deleteTask,
}) => {
  return (

    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <div className="item-container">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        />
        <p>{task.text}</p>
        <button
          onClick={() => deleteTask(task.id)}
          className="delete-btn"
          title="Delete task"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
