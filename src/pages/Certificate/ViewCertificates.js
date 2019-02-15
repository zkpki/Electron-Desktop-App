import React, { Component } from 'react';
import {
    Row, Col, Table, Divider, Icon,
} from 'antd';
import { Link } from 'react-router-dom';
import Profile from '../../components/Profile';
import ViewCertificatesWrapper from './ViewCertificatesStyle';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <Link to="/SingleCertificate">{text}</Link>,
}, {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
}, {
    title: 'Pk',
    dataIndex: 'pk',
    key: 'pk',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="#">
                Download
                {/* { record.name} */}
            </a>
            <Divider type="vertical" />
            <a href="#">Delete</a>
        </span>
    ),
}];

const data = [{
    key: '1',
    name: 'Lorem Ipsum',
    date: '12/12/18',
    pk: 'yes',
}, {
    key: '3',
    name: 'Lorem Ipsum',
    date: '12/12/18',
    pk: 'no',
}];

export default class ViewCertificates extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Profile title="CA Common Name" link="/" />
                </Col>
                <Col span={16} className="contentWrapper">
                    <ViewCertificatesWrapper>
                        <Table columns={columns} dataSource={data} />
                        <div className="issueCertContainer">
                            <Icon style={{ fontSize: 30, marginBottom: 10 }} type="plus-circle" />
                            <Link to="/addcertificate">Issue Cert</Link>
                        </div>
                    </ViewCertificatesWrapper>
                </Col>
            </Row>
        );
    }

}
