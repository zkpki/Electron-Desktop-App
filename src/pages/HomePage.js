import React, { Component } from 'react';
import { Row, Col } from 'antd';

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
            <div>
                <Row>
                    <Col span={8}>
                        <Logo />
                        <LoginForm />
                        <Footer title="What is zkPKI" />
                    </Col>
                    <Col span={16} className="contentWrapper">
                        <BannerImage>
                            <img alt="banner" src={banner} />
                        </BannerImage>
                    </Col>
                </Row>
            </div>
        );
    }

}
