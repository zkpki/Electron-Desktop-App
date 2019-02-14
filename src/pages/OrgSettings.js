import React, { Component } from 'react';
import {
    Row, Col, Button, Input, Form,
} from 'antd';

import Profile from '../components/Profile';
import ClientAuthenticationWrapper from './ClientAuthenticationStyle';

const marginBottom = {
    marginBottom: 15,
};

export default class OrgSettings extends Component {
    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="CA Common Name" link="/" />
                    </div>
                    <div className="pane">
                        <ClientAuthenticationWrapper>
                            <h2 style={{ textAlign: 'center', marginBottom: 50 }}>Org Settings</h2>
                            <div className="clientAuthenticationContainer">
                                <Form>
                                    <Row style={marginBottom}>
                                        <Col span={24}>Organization Name</Col>
                                        <Col span={24}><Input placeholder="Organization Name" /></Col>
                                    </Row>
                                    <Row style={marginBottom}>
                                        <Col span={24}>Sub-organization</Col>
                                        <Col span={24}><Input placeholder="Procurement" /></Col>
                                    </Row>
                                    <Row style={marginBottom}>
                                        <Col span={24}>Country</Col>
                                        <Col span={24}><Input placeholder="US" /></Col>
                                    </Row>
                                    <Row style={marginBottom}>
                                        <Col span={24}>State</Col>
                                        <Col span={24}><Input /></Col>
                                    </Row>
                                </Form>
                            </div>
                            <Button className="advance">Save</Button>
                        </ClientAuthenticationWrapper>
                    </div>
                </div>
            </div>
        );
    }

}
