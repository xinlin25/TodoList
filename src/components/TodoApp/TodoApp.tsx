import React from "react"; 
import TodoList from "../TodoList/TodoList";
import { Task } from "../../types/Task"; 
import "./TodoApp.css";
const TodoApp: React.FC = () => { 
    const tasks: Task[] = [ 
        { id: 1, text: "Learn React", completed: false }, 
        { id: 2, text: "Pick up my brother", completed: false }, 
        { id: 3, text: "Learn TypeScript", completed: false } 
    ]; 
    return ( 
    <div className="app-container"> 
    <h1>Todo List</h1> 
    <TodoList tasks={tasks} /> 
    </div> 
    ); 
}; 
export default TodoApp;