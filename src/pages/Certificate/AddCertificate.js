import React, { Component } from 'react';
import {
    Button,
} from 'antd';
import Profile from '../../components/Profile';
import { AddCertificateWrapper, CertificateOption, BorderCertificateOption } from './AddCertificateStyle';

class AddCertificate extends Component {

    clientAuthentication = () => {
        const { history } = this.props;
        history.push('/client-authentication');
    }

    serverAuthentication = () => {
        const { history } = this.props;
        history.push('/server-authentication');
    }

    downloadCertWithKey = () => {
        const { history } = this.props;
        history.push('/download-cert-with-key');
    }

    uploadCSR = () => {
        const { history } = this.props;
        history.push('/upload-csr');
    }

    render() {

        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="CA Common Name" link="/" />
                    </div>
                    <div className="pane">
                        <AddCertificateWrapper>
                            <BorderCertificateOption>
                                <h2>No CSR</h2>
                                <Button onClick={this.clientAuthentication}>Client</Button>
                                <Button onClick={this.serverAuthentication}>Server</Button>
                                <Button onClick={this.downloadCertWithKey}>Advanced</Button>
                            </BorderCertificateOption>
                            <CertificateOption>
                                <h2>I have a CSR</h2>
                                <Button onClick={this.uploadCSR}>Upload CSR</Button>
                            </CertificateOption>
                        </AddCertificateWrapper>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCertificate;
