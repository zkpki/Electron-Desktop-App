import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import LeftContentWrapper from './SignupSuccessStyle';
import { ContentInnerWrapper } from '../../components/styles';
import { ImageContainer, NextButton } from './SignupStyle';

class SignupSuccess extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleNext = () => {
        console.log('hello');
        const { history } = this.props;
        history.push('/organizationsettings');
    }

    render() {

        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
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
                    </div>
                    <div className="pane">
                        <ContentInnerWrapper>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <NextButton onClick={this.handleNext}>Next</NextButton>
                        </ContentInnerWrapper>
                    </div>
                </div>
            </div>
        );
    }

}

SignupSuccess.propTypes = {
    history: PropTypes.object,
};

export default withRouter(SignupSuccess);
