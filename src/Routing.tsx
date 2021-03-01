import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/dashboard.component';
import LoginComponent from './components/login.component';

const Routing = () => (
    <Router>
        <Route path="/" component={LoginComponent} exact />
        <Route path="/dashboard" component={Dashboard} exact />
    </Router>
)

export default Routing;
