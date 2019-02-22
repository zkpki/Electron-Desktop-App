import React, { Component } from 'react';
import {
    Form, Input, Button,
} from 'antd';
import PropTypes from 'prop-types';
import { LoginFormWrapper } from './styles';

const FormItem = Form.Item;

class SignupForm extends Component {

    handleSignup = (e) => {
        e.preventDefault();
        const { history, form, setUser } = this.props;
        form.validateFields(async (err, values) => {
            if(!err) {
                setUser(values);
                history.push('/signup-success');
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginFormWrapper>
                <Form justify="center" align="middle" onSubmit={this.handleSignup}>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input placeholder="Username"  />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('passcode', {
                            rules: [{ required: true, message: 'Please input your passcode!' }],
                        })(
                            <Input placeholder="Passcode" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button htmlType="submit">
                            Signup
                        </Button>
                    </FormItem>
                </Form>
            </LoginFormWrapper>
        );
    }
}

SignupForm.propTypes = {
    history: PropTypes.object,
    setUser: PropTypes.func
};

const WrappedSignupForm = Form.create({ name: 'signup_form' })(SignupForm);

export default WrappedSignupForm;
