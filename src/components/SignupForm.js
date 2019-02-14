import React, { Component } from 'react';
import {
    Form, Input, Button,
} from 'antd';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoginFormWrapper } from './styles';

const FormItem = Form.Item;

class SignupForm extends Component {

    handleSignupSuccess = () => {
        const { history } = this.props;
        history.push('/signupsuccess');
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
                        <Button onClick={this.handleSignupSuccess} type="default" block>
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
};

export default withRouter(SignupForm);
