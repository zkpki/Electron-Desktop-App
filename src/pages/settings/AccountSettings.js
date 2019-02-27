import React, { Component } from 'react';
import {
    Row, Col, Button, Input, Form, Modal,
} from 'antd';
import { connect } from 'react-redux';
import CASidebar from '../../components/CASidebar';
import ClientAuthenticationWrapper from '../Certificate/ClientAuthenticationStyle';

const marginBottom = {
    marginBottom: 15,
};

class AccountSettings extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    componentDidMount() {
        if(!this.props.CAData) {
            this.props.history.replace('/');
        }
    }

    showDeleteModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    handlePasscodeChange = () => {

    }

    render() {
        let { CAData } = this.props;
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <CASidebar CAData={CAData} />
                    </div>
                    <div className="pane">
                        <ClientAuthenticationWrapper>
                        <h2 style={{ textAlign: 'center', marginBottom: 50 }}>Account Settings</h2>
                        <div className="clientAuthenticationContainer">
                            <div className="required">Change Passcode </div>
                            <Form onSubmit={this.handlePasscodeChange}>
                                <Row style={marginBottom}>
                                    <Col span={24}><Input placeholder="Passcode" /></Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={24}><Input placeholder="Renter Passcode" /></Col>
                                </Row>
                            </Form>
                        </div>

                        <Button className="advance">Save</Button>

                        <Button onClick={this.showDeleteModal} className="advance deleteAccount">Delete Account</Button>
                        <Modal
                            title="Are you sure?"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            cancelText="Cancel"
                        >
                            <p>Some contents...</p>
                        </Modal>
                    </ClientAuthenticationWrapper>
                    </div>
                </div>    
            </div>
        );
    }

}



const mapStateToProps = (state) => ({
    CAData: state.app.CAData,
});

export default connect(mapStateToProps)(AccountSettings);