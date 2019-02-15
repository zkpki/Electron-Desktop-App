import React from 'react';
import SignupForm from '../../components/SignupForm';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';

export default ({history}) => {
    return (
        <div className="window">
            <div className="window-content">
                <div className="pane-one-third sidebar">
                    <Logo />
                    <SignupForm history={history} />
                    <Footer title="What is zkPKI?" />
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
