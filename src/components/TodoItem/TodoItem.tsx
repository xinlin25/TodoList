import React from "react"; 
import { Task } from "../../types/Task"; 
import "./TodoItem.css"; 

interface TodoItemProps { 
    task: Task; 
} 

const TodoItem: React.FC<TodoItemProps> = ({task}) => { 
    return ( 
    <li className="todo-item"> 
    <span className={task.completed ? "completed": ""}>{task.text}</span> 
    </li> 
    );
} 

export default TodoItem;