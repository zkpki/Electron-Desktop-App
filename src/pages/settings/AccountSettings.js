import React, { Component } from 'react';
import {
    Row, Col, Button, Input, Form, Modal,
} from 'antd';

import Profile from '../../components/Profile';
import ClientAuthenticationWrapper from '../Certificate/ClientAuthenticationStyle';

const marginBottom = {
    marginBottom: 15,
};

export default class AccountSettings extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    render() {

        return (
            <Row>
                <Col span={8}>
                    <Profile title="CA Common Name" link="/" />
                </Col>
                <Col span={16} className="contentWrapper">
                    <ClientAuthenticationWrapper>
                        <h2 style={{ textAlign: 'center', marginBottom: 50 }}>Account Settings</h2>
                        <div className="clientAuthenticationContainer">
                            <div className="required">Change Passcode </div>
                            <Form>
                                <Row style={marginBottom}>
                                    <Col span={24}><Input placeholder="Passcode" /></Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={24}><Input placeholder="Renter Passcode" /></Col>
                                </Row>
                            </Form>
                        </div>

                        <Button className="advance">Save</Button>

                        <Button onClick={this.showModal} className="advance deleteAccount">Delete Account</Button>
                        <Modal
                            title="Are you sure?"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            cancelText="Cancel"
                        >
                            <p>Some contents...</p>
                        </Modal>
                    </ClientAuthenticationWrapper>
                </Col>
            </Row>
        );
    }

}
