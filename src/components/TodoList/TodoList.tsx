import React from "react";
import { Task } from "../../types/Task";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

interface TodoListProps {
  //Props --> Properties, inherits data from the parent
  tasks: Task[];
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  toggleCompleted,
  deleteTask,
}) => {
  //TodoList expects props of type TodoListProps, and extracts tasks from those props
  const sortedTasks = [...tasks].sort(
    (a, b) => Number(a.completed) - Number(b.completed),
  );

  return (
    <ul className="todo-list">
      {/* Goes through the array and it returns a new one  */}
      {sortedTasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
