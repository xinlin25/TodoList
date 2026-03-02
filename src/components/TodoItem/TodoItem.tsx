import React from "react";
import { Task } from "../../types/Task";
import "./TodoItem.css";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  task: Task;
  changeState: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  changeState,
  deleteTask,
}) => {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => changeState(task.id)}
      />
      <li>{task.text}</li>
      <Trash2 size={15} onClick={() => deleteTask(task.id)} />
    </div>
  );
};

export default TodoItem;
