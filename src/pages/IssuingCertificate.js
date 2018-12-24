import React, { Component } from 'react';
import {
    Row, Col,
} from 'antd';
import Profile from '../components/Profile';
import Loading from '../components/Loading';

export default class IssuingCertificate extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Profile title="Issuing Certificate" />
                </Col>
                <Col span={16} className="contentWrapper">
                    <Loading />
                </Col>
            </Row>
        );
    }

}
