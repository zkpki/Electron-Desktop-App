import React, { Component } from 'react';
import {
    Form, Input, Button,
} from 'antd';
import PropTypes from 'prop-types';
import pbkdf2 from 'pbkdf2';
import { remote } from 'electron';
import { LoginFormWrapper } from './styles';

const FormItem = Form.Item;
const app = remote.app;

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
        const { history, form, login } = this.props;    
        form.validateFields(async (err, values) => {
            if (!err) {
                this.setState({
                    processing: true,
                    error: null
                });
                try {
                    const derivedKey = pbkdf2.pbkdf2Sync(values.passcode, values.username, 10000, 32, 'sha256')
                    const storage = require('@zkpki/storage').file;
                    const data = await storage.open(derivedKey, {
                        path: app.getPath('userData')
                    });
                    const myCertificateAuthority = JSON.parse(await data.get());
                    login(myCertificateAuthority, derivedKey);
                    history.replace('/login-success');
                }
                catch (s_err) {
                    console.log(s_err);
                    this.setState({
                        error: s_err
                    });
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
                <Form justify="center" align="middle" onSubmit={this.handleLogin}>
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
                        <Button type="primary" htmlType="submit" style={{width: 120}}>
                            Login
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Button onClick={this.handleSignup} type="primary" style={{width: 120}}>
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
