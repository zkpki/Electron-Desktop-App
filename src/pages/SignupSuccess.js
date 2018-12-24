import React, { Component } from 'react';
import {
    Row, Col,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import LeftContentWrapper from './SignupSuccessStyle';
import { ContentInnerWrapper } from '../components/styles';
import { ImageContainer, NextButton } from './SignupStyle';

const image = 'https://via.placeholder.com/300x200?text=Image';

class SignupSuccess extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext() {
        console.log('hello');
        const { history } = this.props;
        history.push('/createca');

    }

    render() {

        return (
            <Row>
                <Col span={8}>
                    <LeftContentWrapper>
                        <Logo />
                        <div className="innerContent">
                            <h2>Welcome</h2>
                            <ul>
                                <li className="active">one</li>
                                <li>two</li>
                                <li>three</li>
                            </ul>
                        </div>
                    </LeftContentWrapper>
                </Col>
                <Col span={16} className="contentWrapper">
                    <ContentInnerWrapper>
                        <ImageContainer>
                            <img alt="img" src={image} />
                        </ImageContainer>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <NextButton onClick={this.handleNext}>Next</NextButton>
                    </ContentInnerWrapper>
                </Col>
            </Row>
        );
    }

}

SignupSuccess.propTypes = {
    history: PropTypes.object,
};

export default withRouter(SignupSuccess);
