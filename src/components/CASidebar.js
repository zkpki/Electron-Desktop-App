import React, { Component } from 'react';
import {
    Row, Col, Button,
} from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { remote } from 'electron';
import zkPkiModel from '@zkpki/model';
import path from 'path';
import fs from 'fs';
import { get } from 'lodash';
import Logo from './Logo';
import { ProfileWrapper } from './styles';
import { logout } from '../containers/actions/appActions';
import SidebarFooter from './SidebarFooter';

const dialog = remote.dialog;
const app = remote.app;

class CASidebar extends Component {
    state = {
        deserializedRootCA: null,
        commonName: '',
        error: null
    };

    downloadCA = (pemData) => {
        let toLocalPath = path.resolve(app.getPath("desktop"), 'CA.pem');
        let userChosenPath = dialog.showSaveDialog({ defaultPath: toLocalPath, filters: [{
            name: 'PEM file',
            extensions: ['pem']
          }] 
        });
        if(userChosenPath){
            fs.writeFile(userChosenPath+'.pem', pemData, () => {
                alert('saved File');
            });
        }
    }

    async componentDidMount() {
        let { CAData } = this.props;
        //get certificate data
        try {
            await zkPkiModel.deserialize(JSON.stringify(CAData));   
            let subject = zkPkiModel.rootCa.subject;
            let commonName = subject.split(',')[0].split('=')[1];
            this.setState({
                deserializedRootCA: zkPkiModel.rootCa,
                commonName
            });
        } catch(e) {
            console.log(e);
            this.setState({error: e});
        }
    }

    render() {
        let pemData = get(this.state, 'deserializedRootCA.certificatePemData');
        return (
            <ProfileWrapper className="profileContainer">
                <Logo />
                <Row>
                    <Col span={24} className="profileInnerContainer">
                        <h2>{this.state.commonName}</h2>
                        <Button type="primary" shape="circle" icon="download" size="large" onClick={() => {
                            this.downloadCA(pemData);
                        }} />
                        <br />
                        <strong>Download</strong>
                    </Col>
                </Row>
                <SidebarFooter logout={this.props.logout} />
            </ProfileWrapper>
        );
    }

}

CASidebar.propTypes = {
    CAData: PropTypes.object,
};

CASidebar.defaultProps = {
    CAData: null,
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const connectedProfile = connect(null, mapDispatchToProps)(CASidebar);

export default withRouter(connectedProfile);
