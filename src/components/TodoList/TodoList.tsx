import React from "react";
import { Task } from "../../types/Task";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

interface TodoListProps {
  //Props --> Properties, heritage data from the parent
  tasks: Task[];
  changeState: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, changeState }) => {
  //TodoList expects props of type TodoListProps, and extracts tasks from those props
  const sortedTasks = [...tasks].sort(
    (a, b) => Number(a.completed) - Number(b.completed),
  );

  if (tasks.length === 0) {
    return <p className="empty-msg">No tasks yet. Add one to the list!</p>;
  }

  return (
    <ul className="todo-list">
      {/* Goes through the array and it returns a new one  */}
      {sortedTasks.map((task) => (
        <TodoItem key={task.id} task={task} changeState={changeState} />
      ))}
    </ul>
  );
};

export default TodoList;
