import React from "react"; 
import { Task } from "../../types/Task"; 
import "./TodoItem.css"; 

interface TodoItemProps { 
    task: Task; 
} 

const TodoItem: React.FC<TodoItemProps> = ({task}) => { 
    return <li className={`todo-item ${task.completed ? "completed" : ""}`}>{task.text}</li>;
} 

export default TodoItem;