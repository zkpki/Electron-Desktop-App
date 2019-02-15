import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import LeftContentWrapper from '../Auth/SignupSuccessStyle';
import Loading from '../../components/Loading';
import { ContentInnerWrapper } from '../../components/styles';


class CreatingRootCA extends Component {

    render() {

        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <LeftContentWrapper>
                            <Logo />
                            <div className="innerContent">
                                <h2>Creating Root CA</h2>
                                <ul>
                                    <li>one</li>
                                    <li>two</li>
                                    <li className="active">three</li>
                                </ul>
                            </div>
                        </LeftContentWrapper>
                    </div>
                    <div className="pane">
                        <ContentInnerWrapper>
                            <Loading />
                        </ContentInnerWrapper>
                    </div>
                </div>
            </div>
        );
    }

}

CreatingRootCA.propTypes = {
    history: PropTypes.object,
};

export default CreatingRootCA;
