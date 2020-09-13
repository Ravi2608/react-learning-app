import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Header from '../functions/header';

class Dashboard extends Component<any, any>{
    constructor(probs: any) {
        super(probs);
    }

    logout() {
        this.props.history.push("");
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
            </React.Fragment>
        );
    }
}

export default Dashboard;