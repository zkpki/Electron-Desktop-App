import React, { Component } from 'react';
import {
    Row, Col, Button, Form, Input, Radio,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import LeftContentWrapper from '../Auth/SignupSuccessStyle';
import { ContentInnerWrapper } from '../../components/styles';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class CreateCA extends Component {

    handleCreatingRootCA = () => {
        const { history } = this.props;
        history.push('/creatingrootca');
    }

    render() {

        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <LeftContentWrapper>
                            <Logo />
                            <div className="innerContent">
                                <h3>Create CA</h3>
                                <div className="formWrapper">
                                    <Form>
                                        <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Common Name *">
                                            <Input />
                                        </FormItem>
                                        <FormItem labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Key Size">
                                            <RadioGroup name="radiogroup" defaultValue={1}>
                                                <Radio value={1}>RSA 2048</Radio>
                                                <Radio value={2}>RSA 4096</Radio>
                                            </RadioGroup>
                                        </FormItem>
                                        <Button onClick={this.handleCreatingRootCA} className="nextBttn">Create</Button>
                                    </Form>
                                </div>
                                <ul>
                                    <li>one</li>
                                    <li>two</li>
                                    <li className="active"onnepal435>three</li>
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
CreateCA.propTypes = {
    history: PropTypes.object,
};

export default withRouter(CreateCA);
