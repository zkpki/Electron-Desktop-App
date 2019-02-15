import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

export default class HomePage extends Component {

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Logo />
                        <LoginForm history={this.props.history} />
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
