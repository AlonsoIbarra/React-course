const initialState = [
    {
        id: 1,
        todo: 'recolectar basura',
        done: false,
    },
];

const todoReducer = ( state=initialState, action={} ) => {
    if ( action.type == 'ADD' ){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

let todos = todoReducer();
console.log(todos);

const newTask = {
    id: 2,
    todo: 'cortar pasto',
    done: false,
};

const addTodoAction = {
    type:'ADD',
    payload: newTask,
}

todos = todoReducer( todos, addTodoAction );
console.log(todos);