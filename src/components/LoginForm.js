import React, { Component } from 'react';
import {
    Form, Input, Button,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import pbkdf2 from 'pbkdf2';
import { LoginFormWrapper } from './styles';

const FormItem = Form.Item;

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleSignup() {
        const { history } = this.props;

        history.push('/signup');
    }

    handleLogin() {
        const { history } = this.props;
        let derivedKey = pbkdf2.pbkdf2Sync(passcode, username, 10000, 32, 'sha256')
        const storage = require('@zkpki/storage').file;
        history.push('/loginsuccess');
    }

    render() {

        return (
            <LoginFormWrapper>
                <Form justify="center" align="middle">
                    <FormItem>
                        <Input placeholder="Username" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="Password" />
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

export default withRouter(LoginForm);
