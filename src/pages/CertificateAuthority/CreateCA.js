import React, { Component } from 'react';
import {
    Button, Form, Input, Radio, Progress
} from 'antd';
import pbkdf2 from 'pbkdf2';
import { connect } from 'react-redux';
import zkPkiModel from '@zkpki/model';
import { remote } from 'electron';
import Logo from '../../components/Logo';
import LeftContentWrapper from '../Auth/SignupSuccessStyle';
import { ContentInnerWrapper, ProgressBarWrapper } from '../../components/styles';
import { login } from '../../containers/actions/appActions';

const app = remote.app;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class CreateCA extends Component {
    state = {
        processing: false,
        error: null,
    };

    handleCreateRootCA = (e) => {
        e.preventDefault();
        const { history, form, org, user, login } = this.props;
        form.validateFields(async (err, values) => {
            if(!err) {
                try {
                    if(org && values) {
                        this.setState({
                            processing: true,
                        });
                        let distinguishedName = `CN=${values.commonName},OU=${org.subOrgName},O=${org.orgName},S=${org.state},C=${org.country}`;
                        let keySize = 2048;
                        let algorithm = zkPkiModel.ALGORITHMS.RsaSsaPkcs1V1_5;
                        if(values['key-size'] === 'rsa-4096') {
                            keySize = 4096;
                            algorithm = zkPkiModel.ALGORITHMS.RsaPss;
                        }
                        await zkPkiModel.initialize(distinguishedName, algorithm, keySize);
                        const myCertificateAuthority = await zkPkiModel.serialize();
                        //save to storage
                        const storage = require('@zkpki/storage').file;
                        const derivedKey = pbkdf2.pbkdf2Sync(user.passcode, user.username, 10000, 32, 'sha256')
                        const storageData = await storage.create(derivedKey, {
                            path: app.getPath('userData')
                        });
                        await storageData.set(myCertificateAuthority);
                        login(myCertificateAuthority, derivedKey);
                        history.replace('/login-success');
                    } else {
                        //TODO show error
                    }
                } catch(e) {
                    console.log(e);
                    this.setState({
                        error: e,
                    });
                } finally {
                    this.setState({
                        processing: false,
                    });
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <LeftContentWrapper>
                            <Logo />
                            <div className="innerContent">
                                {!this.state.processing && <div>
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
                                </div>}
                                {this.state.processing && <h2>Creating Root CA</h2>}
                                {this.state.error && <h2>Something Went wrong!</h2>}
                            </div>
                        </LeftContentWrapper>
                    </div>
                    <div className="pane">
                        {!this.state.processing && 
                            <ContentInnerWrapper>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </ContentInnerWrapper>
                        }
                        {this.state.processing &&
                            <ProgressBarWrapper>
                                <Progress className="issuingProgressBar" strokeLinecap="square" type="line" strokeColor="#777777" strokeWidth={50} successPercent={70} percent={100} status="active" showInfo={false} />

                                <h2>Do not close your browser</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </ProgressBarWrapper>
                        }
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
};

const mapDispatchToProps = (dispatch) => ({
    login: (CAData, derivedKey) => dispatch(login(CAData, derivedKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(form);
