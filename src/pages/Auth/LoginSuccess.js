import React, { Component } from 'react';
import {
    Row, Col, Button,
} from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile';
import LoginSuccessWrapper from './LoginSuccessStyle';

class LoginSuccess extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleAddCertificate = this.handleAddCertificate.bind(this);
    }

    handleAddCertificate() {
        const { history } = this.props;
        history.push('/addcertificate');
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <Profile title="CA Common Name" link="/" />
                    </Col>
                    <Col span={16} className="contentWrapper">
                        <LoginSuccessWrapper>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            <Button className="plus" onClick={this.handleAddCertificate} ghost icon="plus-circle" />

                        </LoginSuccessWrapper>
                    </Col>
                </Row>
            </div>
        );
    }

}

LoginSuccess.propTypes = {
    history: PropTypes.object,
};

export default withRouter(LoginSuccess);
