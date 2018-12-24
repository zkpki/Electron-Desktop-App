import React, { Component } from 'react';
import {
    Row, Col, Button, Input, Form, Radio,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Profile from '../components/Profile';
import ClientAuthenticationWrapper from './ClientAuthenticationStyle';


const marginBottom = {
    marginBottom: 15,
};
const RadioGroup = Radio.Group;
const DemoInfo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class ClientAuthentication extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleIssueCertificate = this.handleIssueCertificate.bind(this);
    }

    handleIssueCertificate() {
        const { history } = this.props;
        history.push('/addcertificatenocsr');
    }

    render() {

        return (
            <Row>
                <Col span={8}>
                    <Profile title="No CSR: Client Authentication" info={DemoInfo} />
                </Col>
                <Col span={16} className="contentWrapper">
                    <ClientAuthenticationWrapper>
                        <div className="clientAuthenticationContainer">
                            <div className="required">Required </div>
                            <Form>
                                <Row style={marginBottom}>
                                    <Col span={12}>Common Name *</Col>
                                    <Col span={12}><Input /></Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>Certificate Duration *</Col>
                                    <Col span={12}>
                                        <Input style={{ width: 150, marginRight: 10 }} />
                                        Days
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>Subject</Col>
                                    <Col span={12}>
                                        <small>litmusbox.com-US-CA-Tech-1234 </small>
                                        <Button className="editBttn">Edit</Button>
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>Key Size</Col>
                                    <Col span={12}>
                                        <RadioGroup name="radiogroup" defaultValue={1}>
                                            <Radio value={1}>RSA 2048</Radio>
                                            <Radio value={2}>RSA 4096</Radio>
                                        </RadioGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>

                        <Button onClick={this.handleIssueCertificate} className="advance">Advanced</Button>
                        <Button className="issueCertificate">Issue Certificate</Button>
                    </ClientAuthenticationWrapper>
                </Col>
            </Row>
        );
    }

}

ClientAuthentication.propTypes = {
    history: PropTypes.object,
};

export default withRouter(ClientAuthentication);
