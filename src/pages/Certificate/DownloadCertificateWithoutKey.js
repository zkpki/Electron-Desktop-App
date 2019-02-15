import React, { Component } from 'react';
import {
    Form, Select, Button,
} from 'antd';
import Profile from '../../components/Profile';
import { ContentInnerWrapper, FormWrapper } from '../../components/styles';

const FormItem = Form.Item;
const { Option } = Select;

class DownloadCertificateWithoutKey extends Component {

    handleCertificateError = () => {
        const { history } = this.props;
        history.push('/certificate-error');
    }

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="Download Certificate" viewCert="/view-certificates" />
                    </div>
                    <div className="pane">
                        <ContentInnerWrapper>
                        <h2>Common Name</h2>
                        <FormWrapper>
                            <Form>
                                <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Select Format">
                                    <Select placeholder="PEM">
                                        <Option value="option1">Option1</Option>
                                        <Option value="option2">Option2</Option>
                                    </Select>
                                </FormItem>
                                <FormItem style={{ marginTop: 30 }}>
                                    <Button block>Download Certificate</Button>
                                    <Button block onClick={this.handleCertificateError} style={{ marginTop: 10 }}>Cancel</Button>
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

export default DownloadCertificateWithoutKey;
