// import { useState } from "react"
import { useform } from "../hooks/index";

export const TodoAddForm = ( { addTodo, } )=>{
    const { description, onInputChange, onResetForm } = useform({
        description:''
    });

    const onFormSubmit = (event)=>{
        event.preventDefault();

        if (description.length < 3 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        addTodo && addTodo(newTodo);
        onResetForm();
    }
    return(
        <>
            <form onSubmit={onFormSubmit}>
                <input
                type="text"
                placeholder="Pendiente"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={description}
                />
                <button
                type="submit"
                className="btn btn-primary"
                >
                    Guardar
                </button>
            </form>
        </>
    )
}