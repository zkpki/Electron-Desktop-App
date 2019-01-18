import React, { Component } from 'react';
import {
    Row, Col, Button, Icon,
} from 'antd';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import Logo from './Logo';
import { ProfileWrapper } from './styles';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            settingOptions: false,
        };
        this.handleAbout = this.handleAbout.bind(this);
        this.handleAccountSettings = this.handleAccountSettings.bind(this);
        this.handleOrgSettings = this.handleOrgSettings.bind(this);
        this.handleShowInfo = this.handleShowInfo.bind(this);
        this.handleShowSettingOption = this.handleShowSettingOption.bind(this);
    }

    handleAbout() {
        const { history } = this.props;
        history.push('/about');
    }

    handleAccountSettings() {
        const { history } = this.props;
        history.push('/accountsettings');
    }

    handleOrgSettings() {
        const { history } = this.props;
        history.push('/orgsettings');
    }

    handleShowInfo() {
        const value = this.state.showInfo;
        this.setState(
            {
                showInfo: !value,
            },
        );
    }

    handleShowSettingOption() {
        const value = this.state.settingOptions;
        this.setState(
            {
                settingOptions: !value,
            },
        );
    }

    render() {

        return (
            <ProfileWrapper className="profileContainer">
                <Logo />
                <Row>
                    <Col span={24} className="profileInnerContainer">
                        {this.props.name
                        && <span className="name">{this.props.name}</span>
                        }
                        {this.props.title
                        && <h2>{this.props.title}</h2>
                        }
                        {this.props.link && (
                            <div className="downloadContainer">
                                <Icon type="download" />
                                <Link className="downloadBttn" to={this.props.link}>Download</Link>
                            </div>
                        )}
                        {this.props.details && (
                            <div className="details">
                                {this.props.details}
                            </div>
                        )}
                        {this.props.info && (
                            <div className="infoContainer">
                                <Icon onClick={this.handleShowInfo} type="info-circle" />
                                {this.state.showInfo === true && (
                                    <div className="detailsInfo">
                                        <p>{this.props.info}</p>
                                    </div>
                                )}
                            </div>
                        )}
                        {this.props.viewCert && (
                            <div className="downloadContainer">
                                <Link className="downloadBttn" to={this.props.viewCert}>View my certs</Link>
                                <Icon style={{ fontSize: 36, marginTop: 10 }} type="plus-circle" />
                            </div>
                        )}
                        {this.props.addCSR && (
                            <Button className="addCSRBttn">
                                {this.props.addCSR}
                            </Button>
                        )}
                    </Col>
                </Row>
                <div className="profileBottom">
                    <Row>
                        <Col span={12}>
                            <Button onClick={this.handleShowSettingOption} className="settings" icon="setting" />
                        </Col>
                        <Col span={12}>
                            <Button className="logout" icon="logout">
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
            </ProfileWrapper>
        );
    }

}

Profile.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    info: PropTypes.string,
    viewCert: PropTypes.string,
    details: PropTypes.string,
    addCSR: PropTypes.string,
    history: PropTypes.object,
};

Profile.defaultProps = {
    name: null,
    title: null,
    link: null,
    info: null,
    viewCert: null,
    details: null,
    addCSR: null,
};

export default withRouter(Profile);
