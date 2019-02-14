import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <LoginForm />
                        <Footer title="What is zkPKI" />
                    </div>
                    <div className="pane">
                        <div className="content-padding">
                            Hello World
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
