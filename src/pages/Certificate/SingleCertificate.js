import React, { Component } from 'react';
import Profile from '../../components/Profile';
import CertificateDetails from '../../components/CertificateDetails';
import { ContentInnerWrapper } from '../../components/styles';

const demoText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

export default class SingleCertificate extends Component {

    render() {

        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile name="CA Common Name" title="Cert Type" link="/" details={demoText} info={demoText} />
                    </div>
                    <div className="pane">
                        <ContentInnerWrapper>
                            <CertificateDetails buttonType="delete" />
                        </ContentInnerWrapper>
                    </div>
                </div>
            </div>
        );
    }

}
