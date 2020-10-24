import React, { useState } from 'react';
import './login.scss';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        if(username === "Admin" && password === "Password"){
            alert("Login Successful");
        } else {
          alert("Login Failed");
        }
        resetLoginForm();
    }

    function resetLoginForm(){
       setUsername('');
       setPassword('');
    }

    return (
        <div className="login-screen">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name="username" value={username} onChange={e => setUsername(e.target.value)}></input><br></br>
                <input type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input><br></br>
                <button type="submit" disabled={!validateForm()}>Login</button>
            </form>
        </div>
    );

}
export default Login;
