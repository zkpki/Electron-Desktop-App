import React, { Component } from 'react';
import Profile from '../../components/Profile';
import { ContentInnerWrapper } from '../../components/styles';


export default class CertificateError extends Component {

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="Issuing Certificate" addCSR="Add CSR" />
                    </div>
                    <div className="pane">
                        <ContentInnerWrapper>
                            <h2>Error</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </ContentInnerWrapper>
                    </div>
                </div>
            </div>
        );
    }

}
