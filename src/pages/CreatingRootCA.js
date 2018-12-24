import React, { Component } from 'react';
import {
    Row, Col, Button,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import LeftContentWrapper from './SignupSuccessStyle';
import Loading from '../components/Loading';
import { ContentInnerWrapper } from '../components/styles';


class CreatingRootCA extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleOrgSettings = this.handleOrgSettings.bind(this);
    }

    handleOrgSettings() {
        const { history } = this.props;
        history.push('/organizationsettings');
    }

    render() {

        return (
            <Row>
                <Col span={8}>
                    <LeftContentWrapper>
                        <Logo />
                        <div className="innerContent">
                            <h2>Creating Root CA</h2>
                            <Button onClick={this.handleOrgSettings} className="nextBttn">Organization Settings</Button>
                            <ul>
                                <li>one</li>
                                <li className="active">two</li>
                                <li>three</li>
                            </ul>
                        </div>
                    </LeftContentWrapper>
                </Col>
                <Col span={16} className="contentWrapper">
                    <ContentInnerWrapper>
                        <Loading />
                    </ContentInnerWrapper>
                </Col>
            </Row>
        );
    }

}

CreatingRootCA.propTypes = {
    history: PropTypes.object,
};

export default withRouter(CreatingRootCA);
