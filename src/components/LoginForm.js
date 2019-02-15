import React, { Component } from 'react';
import {
    Form, Input, Button,
} from 'antd';
import PropTypes from 'prop-types';
import pbkdf2 from 'pbkdf2';
import { LoginFormWrapper } from './styles';
const { dialog } =  require('electron');

const FormItem = Form.Item;

class LoginForm extends Component {
    state = {
        processing: false,
        error: null,
    };

    handleSignup = (e) => {
        e.preventDefault();
        const { history } = this.props;
        history.push('/signup');
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                this.setState({
                    processing: true,
                    error: null
                });
                try {
                    const { history } = this.props;
                    const derivedKey = pbkdf2.pbkdf2Sync(values.passcode, values.username, 10000, 32, 'sha256')
                    const storage = require('@zkpki/storage').file;
                    const data = await storage.open(derivedKey, { path: "./" });
                    const myCertificateAuthority = JSON.parse(await data.get());
                    console.log(myCertificateAuthority);
                    history.push('/loginsuccess');
                }
                catch (s_err) {
                    this.setState({
                        error: s_err
                    })
                } finally {
                    this.setState({
                        processing: false
                    });
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginFormWrapper>
                {this.state.error && <p>Something went wrong!</p>}
                <Form justify="center" align="middle">
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
                        <Button onClick={this.handleLogin} type="default" block>
                            Login
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Button onClick={this.handleSignup} type="default" block>
                            Signup
                        </Button>
                    </FormItem>
                </Form>
            </LoginFormWrapper>
        );
    }

}

LoginForm.propTypes = {
    history: PropTypes.object,
};

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default WrappedLoginForm;
