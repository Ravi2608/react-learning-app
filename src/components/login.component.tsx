import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './login.component.scss';

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
            this.props.history.push("dashboard");
        } else {
            this.setState({ loginFailed: true });
        }
    }

    render() {
        return <Container component="main" maxWidth="xs">
            <div className="login-form">
                <form noValidate onSubmit={this.submitForm}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Email Address"
                        name="username"
                        autoFocus
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> */}
                    {this.validateForm() && <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >Sign In
                </Button>}
                    {!this.validateForm() && <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled
                    >Sign In
                </Button>}
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                {this.state.loginFailed && <Alert severity="error">Login failed.</Alert>}
            </div>
        </Container>;
    }
}

export default LoginComponent;