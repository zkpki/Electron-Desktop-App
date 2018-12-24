import React, { Component } from 'react';
import ContentRoutes from './ContentRoutes';
import AppHolder from '../styles/commonStyle';

export default class MainLayout extends Component {

    state = {}

    render() {
        return (
            <AppHolder>
                <ContentRoutes />
            </AppHolder>
        );
    }

}
