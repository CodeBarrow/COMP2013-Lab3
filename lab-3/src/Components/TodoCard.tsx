import type { TodoCardFunctions } from "./TodoApp";

export default function TodoCard({
    id, 
    checked, 
    title,
    handleTodoCheck,
    handleDeleteTodo,
    handleEditTodo,
}: TodoCardFunctions) {
return (
    <div className = "TodoCard">
        <div>
            <input 
            type="checkbox" 
            name="checked" 
            id="checked" 
            checked={checked} 
            onChange={(e) => handleTodoCheck(e, id)}/>
            <span style={checked ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{title}</span>
        </div>
        <div>
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
            <button onClick={() => handleEditTodo(id)}>Edit</button>
        </div>
        
    </div>
);
}
