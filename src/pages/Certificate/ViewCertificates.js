import React, { Component } from 'react';
import {
    Table, Divider, Icon,
} from 'antd';
import { Link } from 'react-router-dom';
import Profile from '../../components/Profile';
import ViewCertificatesWrapper from './ViewCertificatesStyle';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <Link to="/single-certificate">{text}</Link>,
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

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="CA Common Name" link="/" />
                    </div>
                    <div className="pane">
                        <ViewCertificatesWrapper>
                            <Table columns={columns} dataSource={data} />
                            <div className="issueCertContainer">
                                <Icon style={{ fontSize: 30, marginBottom: 10 }} type="plus-circle" />
                                <Link to="/addcertificate">Issue Cert</Link>
                            </div>
                        </ViewCertificatesWrapper>
                    </div>
                </div>
            </div>
        );
    }
}
