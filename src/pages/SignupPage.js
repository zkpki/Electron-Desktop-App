import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';
import { SignupTextWrapper, BannerImage } from '../components/styles';

const banner = 'https://via.placeholder.com/1000x1000?text=Banner-Image';

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Logo />
                    <SignupForm />
                    <SignupTextWrapper>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                    </SignupTextWrapper>
                </Col>
                <Col span={16} className="contentWrapper">
                    <BannerImage>
                        <img alt="banner" src={banner} />
                    </BannerImage>
                </Col>
            </Row>
        );
    }

}
