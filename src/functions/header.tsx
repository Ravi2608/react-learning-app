import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import './header.scss';

function Header() {

    function logout() {}
    
    return (
        <div className="header-toolbar">
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className="title">
                        Dashboard
                    </Typography>
                    <Button color="inherit" onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;