import React, { Component } from 'react';
import { getCategories } from '../data/fetchCategories';
import Header from '../functions/components/header';
import UserRegistration from '../functions/components/registrationForm';

class Dashboard extends Component<any, any>{

    componentDidMount() {
        getCategories().then((response) => {
            console.log(response);
        }).catch((error) => {
            alert(error);
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <UserRegistration />
            </React.Fragment>
        );
    }
}

export default Dashboard;