import React, { Component, useContext } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import './header.scss';
import { UserContext } from '../../App';
import { Redirect } from 'react-router';

function Header() {
    const context = useContext(UserContext);
    return (
        <div className="header-toolbar">
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className="title">
                        {context.name}
                    </Typography>
                    <Logout />
                </Toolbar>
            </AppBar>
        </div>
    );
}

class Logout extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            toDashboard: true
        };
    }

    logout(e: any) {
        e.preventDefault();
        if (this.state.toDashboard === true) {
            this.setState({ toDashboard: false });
        }
    }

    render() {
        if (this.state.toDashboard === false) {
            return <Redirect to='' />
        }
        return <Button color="inherit" onClick={e => this.logout(e)}>Logout</Button>
    }
}

export default Header;