import React, { Component } from 'react';
import Logo from '../components/Logo';

export default class NotFoundPage extends Component {

    state = {}

    render() {
        return (
            <div>
                <Logo />
                404
            </div>
        );
    }

}
