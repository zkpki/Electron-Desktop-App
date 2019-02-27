import React, { Component } from 'react';
import {
    Form, Input, Select, Button,
} from 'antd';
import Profile from '../../components/Profile';
import { ContentInnerWrapper, FormWrapper } from '../../components/styles';

const DemoInfo = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const FormItem = Form.Item;
const { Option } = Select;

export default class DownloadCertWithKey extends Component {

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="Download Certificate" info={DemoInfo} viewCert="/view-certificates" />
                    </div>
                    <div className="pane">
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
                    </div>
                </div>
            </div>
        );
    }

}
