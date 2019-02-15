import React, { Component } from 'react';
import {
    Button, Form, Input,
} from 'antd';
import Logo from '../../components/Logo';
import LeftContentWrapper from '../Auth/SignupSuccessStyle';
import { ContentInnerWrapper } from '../../components/styles';

const FormItem = Form.Item;

class OrganizationSettings extends Component {

    handleSubmit = (e) => {
        this.props.history.push('/create-ca')
    }

    render() {
        const { getFieldDecorator} = this.props.form;
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <LeftContentWrapper>
                            <Logo />
                            <div className="innerContent">
                            <h3>Org Settings</h3>
                            <div className="formWrapper">
                                <Form onSubmit={this.handleSubmit}>
                                    <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Organization Name">
                                        {getFieldDecorator('orgName', {
                                            rules: [{ required: true, message: 'Please input your organization name!' }],
                                        })(
                                            <Input placeholder="Organization name" />
                                        )}
                                    </FormItem>
                                    <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Sub-organization">
                                        {getFieldDecorator('subOrgName', {
                                            rules: [{ required: true, message: 'Please input your sub organization name!' }],
                                        })(
                                            <Input placeholder="Sub-organization" />
                                        )}
                                    </FormItem>
                                    <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Country">
                                        {getFieldDecorator('country', {
                                            rules: [{ required: true, message: 'Please input your country!' }],
                                        })(
                                            <Input placeholder="country" />
                                        )}
                                    </FormItem>
                                    <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="State">
                                        {getFieldDecorator('state', {
                                            rules: [{ required: true, message: 'Please input your state!' }],
                                        })(
                                            <Input placeholder="state" />
                                        )}
                                    </FormItem>
                                    <Button htmlType="submit" className="nextBttn">Save</Button>
                                </Form>
                            </div>
                            <ul>
                                <li>one</li>
                                <li className="active">two</li>
                                <li>three</li>
                            </ul>
                        </div>
                        </LeftContentWrapper>
                    </div>
                    <div className="pane">
                        <ContentInnerWrapper>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </ContentInnerWrapper>
                    </div>
                </div>
            </div>
        );
    }

}

let form = Form.create({name: 'organization_setting'})(OrganizationSettings);
export default form;