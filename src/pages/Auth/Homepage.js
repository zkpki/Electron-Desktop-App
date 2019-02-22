import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import { login } from '../../containers/actions/appActions';
import HomeImg from '../../assets/img/Home.png';
class Homepage extends Component {
    
    componentDidMount() {
        if(this.props.CAData) {
            this.props.history.replace('/login-success');
        }
    }
    
    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <div>
                            <Logo />
                            <LoginForm history={this.props.history} login={this.props.login} />
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

const mapStateToProps = (state) => ({
    CAData: state.app.CAData,
});

const mapDispatchToProps = (dispatch) => ({
    login: (CAData) => dispatch(login(CAData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);