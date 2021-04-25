import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react'

function UserRegistration() {
    const [user, setUser] = useState({});
    const [formErrors, setformErrors] = useState({ firstName: '', lastName: '', email: '' });
    const regex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    function submitForm(e: any) {
        e.preventDefault();
    }

    function formValid() {
        let valid = true;

        // validate form errors being empty
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });

        // validate the form was filled out
        return valid;
    };

    function handleChange(e: any) {
        const { name, value } = e.target;


        switch (name) {
            case 'firstName':
                setUser({ ...user, firstName: value });
                formErrors.firstName =
                    value.length < 3 && value.length > 0 ?
                        "Minimum 3 characters are required" : ""
                break;
            case 'lastName':
                setUser({ ...user, lastName: value });
                formErrors.lastName =
                    value.length < 3 && value.length > 0 ?
                        "Minimum 3 characters are required" : ""
                break;
            case 'email':
                setUser({ ...user, email: value });
                formErrors.email =
                    !regex.test(value) && value.length > 0 ?
                        "Invalid email" : ""
                break;
            case 'password':
                setUser({ ...user, password: value });

                break;
            case 'confirmpassword':
                setUser({ ...user, confirmpassword: value });

                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <div className="user-registration">
                    <form noValidate onSubmit={submitForm}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoFocus
                            onChange={handleChange}
                        />
                        {formErrors.firstName.length > 0 && (
                            <span>{formErrors.firstName}</span>
                        )}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            onChange={handleChange}
                        />
                        {formErrors.lastName.length > 0 && (
                            <span>{formErrors.lastName}</span>
                        )}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                        />
                        {formErrors.email.length > 0 && (
                            <span>{formErrors.email}</span>
                        )}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="confirmpassword"
                            label="Confirm Password"
                            name="confirmpassword"
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={!formValid()}
                        >Create Account
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default UserRegistration;
