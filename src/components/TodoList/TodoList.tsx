import React from "react";
import { Task } from "../../types/Task";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

interface TodoListProps {
  //Props --> Properties, heritage data from the parent
  tasks: Task[];
  changeState: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  changeState,
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
          changeState={changeState}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
