import { useState } from "react";
import { useGetTodoByIDQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp =()=>{
    const [ todoId, setTodoId ] = useState(1);
    // const { isLoading, data: todos = [] } = useGetTodosQuery();
    const { isLoading, data: todo } = useGetTodoByIDQuery(todoId);
    const prevTodo = () => {
        setTodoId(todoId - 1);
    }
    const nextTodo = () => {
        console.log(todoId);
        setTodoId(todoId + 1);
    }
    return (
        <>
            <h1>Tods -RTK Query</h1>
            <hr />
            { isLoading ? <h4>is loading</h4> : '' }
            <pre>{ JSON.stringify(todo) }</pre>
            <ul>
                {/* {
                    todos.map(item=>{
                         return <li key={ item.id }>
                            <strong>{ todos.completed ? 'Done':'Pending'}</strong> { item.title }
                        </li>
                    })
                } */}
            </ul>
            <button onClick={ prevTodo }>Previous todo</button>
            <button onClick={ nextTodo }>Next todo</button>
        </>
    )
}