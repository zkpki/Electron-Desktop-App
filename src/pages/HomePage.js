import React, { Component } from 'react';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import { BannerImage } from '../components/styles';

const banner = 'https://via.placeholder.com/1000x1000?text=Banner-Image';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-group">
                        <div className="pane-sm sidebar">
                            <Logo />
                            <LoginForm />
                            <Footer title="What is zkPKI?" />
                        </div>
                        <div className="pane">
                            <BannerImage>
                                <img alt="banner" src={banner} />
                            </BannerImage>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
