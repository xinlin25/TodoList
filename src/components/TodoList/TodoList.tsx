import React from "react";
import { Task } from "../../types/Task"; 
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"; 

interface TodoListProps { //Props --> Properties, pasa datos del padre al hijo 
    tasks: Task[]; 
} 
const TodoList: React.FC<TodoListProps> = ({ tasks }) => { 
    return ( 
    <ul className="todo-list"> 
    {tasks.map((task) => ( <TodoItem key={task.id} task={task} /> ))} 
    </ul> 
    ); 
}; 

export default TodoList;