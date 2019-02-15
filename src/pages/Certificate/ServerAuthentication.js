import React, { Component } from 'react';
import {
    Row, Col, Button, Input, Form, Radio, Icon, Modal,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Profile from '../../components/Profile';
import ClientAuthenticationWrapper from './ClientAuthenticationStyle';

const marginBottom = {
    marginBottom: 15,
};
const RadioGroup = Radio.Group;
const DemoInfo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class ServerAuthentication extends Component {

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

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleIssueCertificate() {
        const { history } = this.props;
        history.push('/issuingcertificate');
    }

    render() {

        return (
            <Row>
                <Col span={8}>
                    <Profile title="No CSR: Server Authentication" info={DemoInfo} />
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
                                        <Button>Edit</Button>
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
                        <div className="clientAuthenticationContainer">
                            <div className="required">Subject Alternitive Names </div>
                            <div className="sanNames">
                                <div className="nameListItem">
                                    sample1.zkpki.com
                                    <Button className="removeSan">
                                        <Icon type="close-circle" />
                                    </Button>
                                </div>
                                <div className="nameListItem">
                                    sample2.zkpki.com
                                    <Button className="removeSan">
                                        <Icon type="close-circle" />
                                    </Button>
                                </div>
                                <Button onClick={this.showModal} className="addSanBttn">
                                    <Icon type="plus-circle" />
                                </Button>
                                <Modal
                                    title="Add SAN"
                                    visible={this.state.visible}
                                    footer={[
                                        null, null,
                                    ]}
                                    onCancel={this.handleCancel}
                                >
                                    <Form>
                                        <Row gutter={8}>
                                            <Col span={18}><Input /></Col>
                                            <Col span={4}><Button>Add</Button></Col>
                                        </Row>
                                    </Form>
                                </Modal>
                            </div>
                        </div>

                        <Button className="advance">Advanced</Button>
                        <Button onClick={this.handleIssueCertificate} className="issueCertificate">Issue Certificate</Button>
                    </ClientAuthenticationWrapper>
                </Col>
            </Row>
        );
    }

}

ServerAuthentication.propTypes = {
    history: PropTypes.object,
};

export default withRouter(ServerAuthentication);
