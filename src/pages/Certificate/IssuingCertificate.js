import React, { Component } from 'react';
import Profile from '../../components/Profile';
import Loading from '../../components/Loading';

export default class IssuingCertificate extends Component {

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="Issuing Certificate" />
                    </div>
                    <div className="pane">
                        <Loading />
                    </div>
                </div>
            </div>
        );
    }

}
