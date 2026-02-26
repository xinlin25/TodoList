import React from "react";
import { Task } from "../../types/Task"; 
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"; 

interface TodoListProps { //Props --> Properties, heritage data from the parent 
    tasks: Task[]; 
} 
const TodoList: React.FC<TodoListProps> = ({ tasks }) => { //TodoList expects props of type TodoListProps, and extracts tasks from those props
    return ( 
        <ul className="todo-list"> 
            {/* Goes through the array and it returns a new one  */}
            {tasks.map((task) => ( <TodoItem key={task.id} task={task} /> ))} 
        </ul> 
    ); 
}; 

export default TodoList;