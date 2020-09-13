import React, { Component } from 'react';

class LoginComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            loginFailed: false
        };

        this.submitForm = this.submitForm.bind(this);
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    submitForm(event: any) {
        event.preventDefault();
        if (this.state.username === "Admin" && this.state.password === "Password") {
            this.setState({ isLoggedIn: true });
        } else {
            this.setState({ loginFailed: true });
        }
        console.log(this.state.isLoggedIn);
    }

    render() {
        return <div className="login-screen">
            <form onSubmit={this.submitForm}>
                <input type="text" placeholder="Username" name="username" onChange={e => this.setState({ username: e.target.value })}></input><br></br>
                <input type="password" placeholder="Password" name="password" onChange={e => this.setState({ password: e.target.value })}></input><br></br>
                <button type="submit" disabled={!this.validateForm()}>Login</button>
            </form>

        </div>;
    }
}

export default LoginComponent;