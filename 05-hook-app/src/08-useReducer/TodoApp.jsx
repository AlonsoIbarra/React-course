import { TodoList } from "./TodoList";
import { TodoAddForm } from "./TodoAddForm";
import { useTodos } from "../hooks";

export const TodoApp = ()=>{

    const {
        todos,
        todosCount,
        pendingCount,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo
    } = useTodos();

    return(
        <>
            <h1>Todo App</h1>
            <h4>Total: { todosCount }</h4>
            <h4>Pendientes: { pendingCount }</h4>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                    todos={todos}
                    onDeleteTodo={ ( id ) => handleDeleteTodo(id)}
                    onToggleTodo={ ( id ) => handleToggleTodo(id)}
                />
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    <TodoAddForm addTodo={handleAddTodo} />
                </div>
            </div>
        </>
    )
}