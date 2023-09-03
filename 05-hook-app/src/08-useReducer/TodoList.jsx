import { TodoListItem } from "./TodoListItem"
export const TodoList = ( { todos=[], onDeleteTodo, onToggleTodo } )=>{

    return (
        <ul className="list-group">
            { todos.map( todo =>(
                <TodoListItem
                key={todo.id}
                item={todo}
                onDeleteTodo={(id)=>onDeleteTodo(id)}
                onToggleTodo={(id)=>onToggleTodo(id)}
                />
            ))}
            
        </ul>
    )
}