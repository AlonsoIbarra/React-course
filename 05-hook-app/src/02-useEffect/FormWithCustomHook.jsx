import { Message } from "./Message";
import { useform } from "../hooks/useForm";

export const FormWithCustomHook=()=>{

    const { username, email, password, onInputChange, onResetForm } = useform(
        {
            username: '',
            email: '',
            password: ''
        }
    );

    // const { username, email, password} = formState;

    return(
        <>
            <h1>Formulario con custom hook</h1>
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
            <div className="input-group input-group-sm mt-4">
                <input
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
                />
            </div>
            <button className="btn btn-primary" onClick={ onResetForm } >Reset</button>
            {
                (username === 'alon') && <Message></Message>
            }
        </>
    );
}