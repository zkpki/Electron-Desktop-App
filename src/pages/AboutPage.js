import React, { Component } from 'react';

import { Row, Col, Button } from 'antd';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import AboutContainerWrapper from './AboutPageStyle';

const image = 'https://via.placeholder.com/200x150?text=Image';

export default class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Logo />
                    <LoginForm />
                    <Footer title="What is zkPKI" />
                </Col>
                <Col span={16} className="contentWrapper">
                    <AboutContainerWrapper>
                        <h2>What is zkPK</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                        <div className="imageContainer">
                            <div className="image">
                                <img alt="imgone" src={image} />
                            </div>
                            <div className="image">
                                <img alt="imgtwo" src={image} />
                            </div>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                        <Button className="button">
                            View Tutorials
                        </Button>
                    </AboutContainerWrapper>
                </Col>
            </Row>

        );
    }

}
