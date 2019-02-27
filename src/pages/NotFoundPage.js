import React, { Component } from 'react';
import Logo from '../components/Logo';

export default class NotFoundPage extends Component {

    state = {}

    render() {
        return (
            <div>
                <Logo />
                <h2>error</h2>
            </div>
        );
    }

}
