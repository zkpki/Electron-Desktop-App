import React, { Component } from 'react';
import {
    Row, Col, Button,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Profile from '../../components/Profile';
import { ContentInnerWrapper } from '../../components/styles';

class CertificateSuccess extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleDownloadCertificate = this.handleDownloadCertificate.bind(this);
    }

    handleDownloadCertificate() {
        const { history } = this.props;
        history.push('/downloadcertificatewithoutkey');
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Profile title="Congratulations" viewCert="/viewcertificates" />
                </Col>
                <Col span={16} className="contentWrapper">
                    <ContentInnerWrapper>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Button onClick={this.handleDownloadCertificate} className="downloadCertificate">Download Certificate</Button>
                    </ContentInnerWrapper>
                </Col>
            </Row>
        );
    }

}
CertificateSuccess.propTypes = {
    history: PropTypes.object,
};

export default withRouter(CertificateSuccess);
