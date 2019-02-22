import React, { Component } from 'react'
import { Button } from 'antd';
import Logo from '../../components/Logo';
import LoginForm from '../../components/LoginForm';
import Footer from '../../components/Footer';
import AboutContainerWrapper from './AboutPageStyle';

export default class AboutPage extends Component {

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <div>
                            <Logo />
                            <LoginForm history={this.props.history} />
                        </div>
                        <Footer title="What is zkPKI?" />
                    </div>
                    <div className="pane">
                        <AboutContainerWrapper>
                            <h2>What is zkPK</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                            <Button className="button">
                                View Tutorials
                            </Button>
                        </AboutContainerWrapper>
                    </div>
                </div>
            </div>
        );
    }
}
