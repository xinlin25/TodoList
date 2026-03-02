import { useState } from "react";

import TodoList from "../TodoList/TodoList";
import { Task } from "../../types/Task";
import "./TodoApp.css";

const TodoApp: React.FC = () => {
  //List of initial tasks

  const initialTasks: Task[] | (() => Task[]) = [];

  /*const initialTasks = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Pick up my brother", completed: true },
    { id: 3, text: "Learn TypeScript", completed: false },
  ];*/

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const toggleCompleted = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const addTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textTrimmed = text.trim();

    if (textTrimmed === "") {
      setError("Your task must have at least one character.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      text: textTrimmed,
      completed: false,
    };
    /* prevTasks += newTask --> Add a new task to the array */
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setText("");
    setError("");
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      {/* If error(has something wrote on it) is true it renders the message */}
      {error && <p className="error-msg">{error}</p>}
      <form className="submit" onSubmit={addTask}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your task here..."
        />
        <button type="submit">Enter</button>
      </form>

      <TodoList toggleCompleted={toggleCompleted} tasks={tasks} />
    </div>
  );
};

export default TodoApp;
