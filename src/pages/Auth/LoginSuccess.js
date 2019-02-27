import React, { Component } from 'react';
import {
    Button,
} from 'antd';
import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import LoginSuccessWrapper from './LoginSuccessStyle';

class LoginSuccess extends Component {

    handleAddCertificate = () => {
        const { history } = this.props;
        history.push('/add-certificate');
    }

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="CA Common Name" link="/" />
                    </div>
                    <div className="pane">
                        <LoginSuccessWrapper>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            <Button className="plus" onClick={this.handleAddCertificate} ghost icon="plus-circle" />

                        </LoginSuccessWrapper>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    CAData: state.app.CAData,
})
export default connect(mapStateToProps)(LoginSuccess);
