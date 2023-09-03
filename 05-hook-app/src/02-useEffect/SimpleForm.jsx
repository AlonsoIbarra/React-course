import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm=()=>{
    const [ formState, setState ] = useState(
        {
            username: 'alo',
            email: 'isaul@mail.com'
        }
    );

    const { username, email } = formState;

    const onInputChange = ( { target } )=>{
        const { name, value } = target;
        setState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(
        () => {
            // console.log('email change')
        },
        [
            email // on email change
        ]
    );

    useEffect(
        () => {
            // console.log('on mount')
        },
        [] // on mount
    );



    return(
        <>
            <h1>Simple form</h1>
            <hr />
            <div className="input-group input-group-sm mt-4">
                <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
                />
            </div>
            <div className="input-group input-group-sm mt-4">
                <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
                />
            </div>
            {
                (username === 'alon') && <Message></Message>
            }
        </>
    );
}