import React, { Component } from 'react';
import {
    Row, Col, Icon, Button, Modal,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CertificateDetailsWrapper } from './styles';

class CertificateDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.handleIssueCertificate = this.handleIssueCertificate.bind(this);
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = e => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    }

    handleIssueCertificate() {
        const { history } = this.props;
        history.push('/issuingcertificate');
    }

    render() {
        const marginBttm = {
            marginBottom: 10,
        };
        return (
            <CertificateDetailsWrapper>
                <div className="formContainer">
                    <div className="required">
                        Required
                    </div>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>
                                Common Name *
                            </strong>
                        </Col>
                        <Col span={12}>Lorem Ipsum</Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Certificate Duration *</strong>
                        </Col>
                        <Col span={12}>1/2/2019 - 1/1/2020</Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Subject</strong>
                        </Col>
                        <Col span={12}>
                            <small>litmusbox.com-US-CA-Tech-1234</small>
                        </Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Key Size</strong>
                        </Col>
                        <Col span={12}>RSA 4096</Col>
                    </Row>
                </div>
                <Row style={marginBttm}>
                    <Col span={12}>
                        <strong>Version</strong>
                    </Col>
                    <Col span={12}>V3</Col>
                </Row>
                <Row style={marginBttm}>
                    <Col span={12}>
                        <strong>Serial Number</strong>
                    </Col>
                    <Col span={12}>12345678</Col>
                </Row>
                <div className="formContainer">
                    <div className="required">
                        Required
                    </div>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Authority Key Identifier</strong>
                        </Col>
                        <Col span={12}>
                            <small>(OID: 2.5.29.35)</small>
                            <Icon className="info" type="info-circle" />
                        </Col>
                        <Col span={24}>
                            <small>34 e4 c1 90 2e bb 4c 3d</small>
                        </Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Subject Key Identifier</strong>
                        </Col>
                        <Col span={12}>
                            <small>(OID: 2.5.29.14)</small>
                            <Icon className="info" type="info-circle" />
                        </Col>
                        <Col span={24}>
                            <small>34 e4 c1 90 2e bb 4c 3d</small>
                        </Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Basic Constraints</strong>
                        </Col>
                        <Col span={12}>
                            <small>(OID: 2.5.29.35)</small>
                            <Icon className="info" type="info-circle" />
                        </Col>
                        <Col span={24}>
                            <small>CA False</small>
                        </Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Subject Alternative Names</strong>
                        </Col>
                        <Col span={12}>
                            <small>(OID: 2.5.29.35)</small>
                            <Icon className="info" type="info-circle" />
                        </Col>
                        <Col span={24}>
                            <div>
                                <small>sample1.zkpki.com</small>
                            </div>
                            <div>
                                <small>sample1.zkpki.com</small>
                            </div>
                        </Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Key Usage</strong>
                        </Col>
                        <Col span={12}>
                            <small>(OID: 2.5.29.15)</small>
                            <Icon className="info" type="info-circle" />
                            <div>
                                <small>Critical</small>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div>
                                <small>sample1.zkpki.com</small>
                            </div>
                            <div>
                                <small>sample1.zkpki.com</small>
                            </div>
                        </Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>Lorem Ipsum</strong>
                        </Col>
                        <Col span={12}>
                            <small>(OID: xxxxxx)</small>
                        </Col>
                        <Col span={24}>
                            <small>Lorem Ipsum</small>
                        </Col>
                    </Row>
                    <Row style={marginBttm}>
                        <Col span={12}>
                            <strong>
                                Extended Key Usages
                                <Icon className="info" type="info-circle" />
                            </strong>
                        </Col>
                        <Col span={24}>
                            <small>Key Agreement (1.3.6.2.5.5.7.3.1)</small>
                        </Col>
                    </Row>
                </div>
                <Row style={marginBttm}>
                    <Col span={24}>
                        {this.props.buttonType === 'issue' && (
                            <Button className="issue" onClick={this.handleIssueCertificate}>Issue Certificate</Button>
                        )}
                        {this.props.buttonType === 'delete' && (
                            <div>
                                <Button onClick={this.showModal}>Delete Certificate</Button>
                                <Modal
                                    title="Are you sure?"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    cancelText="Cancel"
                                >
                                    <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Modal>
                            </div>
                        )}
                    </Col>
                </Row>
            </CertificateDetailsWrapper>
        );
    }

}

CertificateDetails.propTypes = {
    buttonType: PropTypes.string,
};

CertificateDetails.defaultProps = {
    buttonType: null,
};

CertificateDetails.propTypes = {
    history: PropTypes.object,
};

export default withRouter(CertificateDetails);
