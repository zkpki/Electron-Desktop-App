import React, { Component } from 'react';
import {
    Row, Col, Button,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from '../components/Profile';
import { AddCertificateWrapper, CertificateOption, BorderCertificateOption } from './AddCertificateStyle';

class AddCertificate extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.clientAuthentication = this.clientAuthentication.bind(this);
        this.serverAuthentication = this.serverAuthentication.bind(this);
        this.downloadCertWithKey = this.downloadCertWithKey.bind(this);
        this.uploadCSR = this.uploadCSR.bind(this);
    }

    clientAuthentication() {
        const { history } = this.props;
        history.push('/clientauthentication');
    }

    serverAuthentication() {
        const { history } = this.props;
        history.push('/serverauthentication');
    }

    downloadCertWithKey() {
        const { history } = this.props;
        history.push('/downloadcertwithkey');
    }

    uploadCSR() {
        const { history } = this.props;
        history.push('/uploadCSR');
    }

    render() {

        return (
            <Row>
                <Col span={8}>
                    <Profile title="CA Common Name" link="/" />
                </Col>
                <Col span={16} className="contentWrapper">
                    <AddCertificateWrapper>
                        <BorderCertificateOption>
                            <h2>No CSR</h2>
                            <Button onClick={this.clientAuthentication}>Client</Button>
                            <Button onClick={this.serverAuthentication}>Server</Button>
                            <Button onClick={this.downloadCertWithKey}>Advanced</Button>
                        </BorderCertificateOption>
                        <CertificateOption>
                            <h2>I have a CSR</h2>
                            <Button onClick={this.uploadCSR}>Upload CSR</Button>
                        </CertificateOption>
                    </AddCertificateWrapper>
                </Col>
            </Row>
        );
    }

}

AddCertificate.propTypes = {
    history: PropTypes.object,
};

export default withRouter(AddCertificate);
