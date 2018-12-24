import React, { Component } from 'react';
import {
    Row, Col, Form, Input, Select, Button,
} from 'antd';

import Profile from '../components/Profile';
import { ContentInnerWrapper, FormWrapper } from '../components/styles';

const DemoInfo = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const FormItem = Form.Item;
const { Option } = Select;

export default class DownloadCertWithKey extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <Profile title="Download Certificate" info={DemoInfo} viewCert="/viewcertificates" />
                    </Col>
                    <Col span={16} className="contentWrapper">
                        <ContentInnerWrapper>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <h2>Common Name</h2>
                            <FormWrapper>
                                <Form>
                                    <FormItem>
                                        <Input style={{ textAlign: 'center' }} placeholder="Cert + Private Key" />
                                    </FormItem>
                                    <FormItem style={{ marginBottom: 30 }}>
                                        <Input style={{ textAlign: 'center' }} placeholder="Cert Only" />
                                    </FormItem>
                                    <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Select Format">
                                        <Select placeholder="PEM">
                                            <Option value="option1">Option1</Option>
                                            <Option value="option2">Option2</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Password">
                                        <Input />
                                    </FormItem>
                                    <FormItem style={{ marginTop: 30 }}>
                                        <Button block>Download Certificate</Button>
                                        <Button block style={{ marginTop: 10 }}>Cancel</Button>
                                    </FormItem>
                                </Form>
                            </FormWrapper>
                        </ContentInnerWrapper>
                    </Col>
                </Row>
            </div>
        );
    }

}
