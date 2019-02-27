import React, { Component } from 'react';
import {
    Row, Col, Button,
} from 'antd';
import { withRouter } from 'react-router-dom';

class SidebarFooter extends Component {
    state = {
        showInfo: false,
        settingOptions: false,
    };

    handleAbout = () => {
        const { history } = this.props;
        history.push('/about');
    }

    handleAccountSettings = () => {
        const { history } = this.props;
        history.push('/account-settings');
    }

    handleOrgSettings = () => {
        const { history } = this.props;
        history.push('/org-settings-2');
    }

    handleShowInfo = () => {
        const value = this.state.showInfo;
        this.setState(
            {
                showInfo: !value,
            },
        );
    }

    handleShowSettingOption = () => {
        const value = this.state.settingOptions;
        this.setState(
            {
                settingOptions: !value,
            },
        );
    }

    handleSignout = async () => {
        this.props.logout();
        this.props.history.replace('/');
    }

    render() {
        return (
            <div className="profileBottom">
                <Row>
                    <Col span={12}>
                        <Button onClick={this.handleShowSettingOption} className="settings" icon="setting" />
                    </Col>
                    <Col span={12}>
                        <Button onClick={this.handleSignout} className="logout" icon="logout">
                            Signout
                        </Button>
                    </Col>
                </Row>
                {this.state.settingOptions === true && (
                    <div className="settingsOptions">
                        <Button onClick={this.handleAbout} className="infoBttn" icon="info-circle" />
                        <Button onClick={this.handleAccountSettings} className="accountBttn" icon="lock" />
                        <Button onClick={this.handleOrgSettings} className="orgSettingsBttn" icon="profile" />
                    </div>
                )}
            </div>
        );
    }

}

export default withRouter(SidebarFooter);
