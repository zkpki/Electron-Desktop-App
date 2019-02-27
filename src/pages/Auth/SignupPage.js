import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../../components/SignupForm';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import {setUser} from '../../containers/actions/appActions';
import HomeImg from '../../assets/img/Home.png';

class SignupPage extends Component {
    render() {
        const {history, setUser} = this.props;
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <div>
                        <Logo />
                        <SignupForm history={history} setUser={setUser} />
                        </div>
                        <Footer title="What is zkPKI?" />
                    </div>
                    <div className="pane">
                        <div className="content-padding">
                            <img src={HomeImg} alt="Home" className="responsiveImg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(SignupPage);