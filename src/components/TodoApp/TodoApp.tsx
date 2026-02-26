import { useState } from "react";

import TodoList from "../TodoList/TodoList";
import { Task } from "../../types/Task"; 
import "./TodoApp.css";

const TodoApp: React.FC = () => { 
    //List of tasks
    const createInitialTasks = (): Task[] => {
        return [
            { id: 1, text: "Learn React", completed: false }, 
            { id: 2, text: "Pick up my brother", completed: true }, 
            { id: 3, text: "Learn TypeScript", completed: false } 
        ];
    };

    const [tasks, setTasks] = useState<Task[]>(createInitialTasks);
    const [text, setText] = useState("");

    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text.trim() === "") return;

        const newTask: Task = {
            id: tasks.length,
            text: text,
            completed: false
        };
        /* prevTasks += newTask --> Add a new task to the array */
        setTasks(prevTasks => [...prevTasks, newTask]);
        setText("");
    };

    return ( 
        <div className="app-container"> 
            <h1>Todo List</h1> 
            <form className="submit" onSubmit={addTask}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write your task here..."
                />
                <button type="submit">Enter</button>
            </form>

            <TodoList tasks={tasks} />
        </div>
    ); 
}; 
export default TodoApp;