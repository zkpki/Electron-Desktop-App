import React, { Component } from 'react';
import {
    Progress,
} from 'antd';
import { ProgressBarWrapper } from './styles';

export default class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ProgressBarWrapper>
                <Progress className="issuingProgressBar" strokeLinecap="square" type="line" strokeColor="#777777" strokeWidth={50} successPercent={70} percent={100} status="active" showInfo={false} />

                <h2>Do not close your browser</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </ProgressBarWrapper>
        );
    }

}
