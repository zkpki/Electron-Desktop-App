import React, { Component } from 'react';
import {
    Button, Form, Input, Radio,
} from 'antd';
import { connect } from 'react-redux';
import zkpkiModel from '@zkpki/model';
import Logo from '../../components/Logo';
import LeftContentWrapper from '../Auth/SignupSuccessStyle';
import { ContentInnerWrapper } from '../../components/styles';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class CreateCA extends Component {

    handleCreateRootCA = () => {
        const { history } = this.props;
        history.push('/creating-root-ca');
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.props.appStore);
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <LeftContentWrapper>
                            <Logo />
                            <div className="innerContent">
                                <h3>Create CA</h3>
                                <div className="formWrapper">
                                    <Form onSubmit={this.handleCreateRootCA}>
                                        <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Common Name *">
                                            {getFieldDecorator('commonName', {
                                                rules: [{ required: true, message: 'Please Input common name' }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                        <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Key Size">
                                            {getFieldDecorator('key-size', {
                                                initialValue: 'rsa-2048',
                                            })(
                                                <RadioGroup name="key-size">
                                                    <Radio value="rsa-2048">RSA 2048</Radio>
                                                    <Radio value="rsa-4096">RSA 4096</Radio>
                                                </RadioGroup>
                                            )}
                                        </FormItem>
                                        <Button htmlType="submit" className="nextBttn">Create</Button>
                                    </Form>
                                </div>
                                <ul>
                                    <li>one</li>
                                    <li>two</li>
                                    <li className="active">three</li>
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

let form = Form.create({name: 'create_ca'})(CreateCA);

const mapStateToProps = (state) => {
    return {
        user: state.app.user,
        org: state.app.org,
    };
}
export default connect(mapStateToProps)(form);
