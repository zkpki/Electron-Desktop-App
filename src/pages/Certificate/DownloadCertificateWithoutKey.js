import React, { Component } from 'react';
import {
    Row, Col, Form, Select, Button,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile';
import { ContentInnerWrapper, FormWrapper } from '../../components/styles';

const FormItem = Form.Item;
const { Option } = Select;

class DownloadCertificateWithoutKey extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleCertificateError = this.handleCertificateError.bind(this);
    }

    handleCertificateError() {
        const { history } = this.props;
        history.push('/certificateerror');
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Profile title="Download Certificate" viewCert="/viewcertificates" />
                </Col>
                <Col span={16} className="contentWrapper">
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
                </Col>
            </Row>
        );
    }

}
DownloadCertificateWithoutKey.propTypes = {
    history: PropTypes.object,
};

export default withRouter(DownloadCertificateWithoutKey);
