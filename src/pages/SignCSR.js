import React, { Component } from 'react';
import {
    Row, Col,
} from 'antd';
import { withRouter } from 'react-router-dom';
import Profile from '../components/Profile';
import CertificateDetails from '../components/CertificateDetails';
import { ContentInnerWrapper } from '../components/styles';

const demoText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

class SignCSR extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Profile name="CA Common Name" title="CSR Review" details={demoText} info={demoText} />
                </Col>
                <Col span={16} className="contentWrapper">
                    <ContentInnerWrapper>
                        <CertificateDetails buttonType="issue" />
                    </ContentInnerWrapper>
                </Col>
            </Row>
        );
    }

}

export default withRouter(SignCSR);
