import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () =>{
    const lastPath = localStorage.getItem('lastPath') || '/';
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogin = ()=>{
        login('new user');
        navigate(lastPath, {replace:true});
    }

    return (
        <>
            <div className="container mt-5">
                <h2>Login Page</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary"
                    onClick={ onLogin }>Submit</button>
                </form>
            </div>
        </>
    )
}