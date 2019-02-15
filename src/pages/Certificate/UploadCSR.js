import React, { Component } from 'react';
import {
    Form, Input, Button, Upload, Icon, message,
} from 'antd';
import Profile from '../../components/Profile';
import { ContentInnerWrapper, FormWrapper } from '../../components/styles';
import { HeadingOne, HeadingTwo } from './UploadCSRStyle';

const demoText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
const FormItem = Form.Item;
const prop = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class UploadCSR extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSignCSR = this.handleSignCSR.bind(this);
        this.handleCertificateSuccess = this.handleCertificateSuccess.bind(this);
    }

    handleSignCSR() {
        const { history } = this.props;
        history.push('/sign-csr');
    }

    handleCertificateSuccess() {
        const { history } = this.props;
        history.push('/certificate-success');
    }

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="Sign CSR" details={demoText} />
                    </div>
                    <div className="pane">
                        <ContentInnerWrapper>
                            <HeadingOne>Upload CSR</HeadingOne>
                            <FormWrapper>
                                <Form>
                                    <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                        <Upload {...prop}>
                                            <Button>
                                                <Icon type="upload" />
                                                Click to Upload
                                            </Button>
                                        </Upload>
                                    </FormItem>
                                    <HeadingTwo>OR</HeadingTwo>
                                    <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Paste CSR">
                                        <Input.TextArea style={{ height: 150 }} />
                                    </FormItem>
                                    <FormItem style={{ marginTop: 30 }}>
                                        <Button onClick={this.handleSignCSR} block>Sign CSR</Button>
                                        <Button onClick={this.handleCertificateSuccess} block style={{ marginTop: 10 }}>Cancel</Button>
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


export default UploadCSR;
