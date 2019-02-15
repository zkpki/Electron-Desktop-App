import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//pages
import HomePage from './pages/Auth/Login';
import AboutPage from './pages/content/AboutPage';
import SignupPage from './pages/Auth/SignupPage';
import LoginSuccess from './pages/Auth/LoginSuccess';
import AddCertificate from './pages/Certificate/AddCertificate';
import ClientAuthentication from './pages/Certificate/ClientAuthentication';
import ServerAuthentication from './pages/Certificate/ServerAuthentication';
import AddCertificateNoCSR from './pages/Certificate/AddCertificateNoCSR';
import IssuingCertificate from './pages/Certificate/IssuingCertificate';
import DownloadCertWithKey from './pages/Certificate/DownloadCertWithKey';
import UploadCSR from './pages/Certificate/UploadCSR';
import SignCSR from './pages/Certificate/SignCSR';
import CertificateSuccess from './pages/Certificate/CertificateSuccess';
import DownloadCertificateWithoutKey from './pages/Certificate/DownloadCertificateWithoutKey';
import CertificateError from './pages/Certificate/CertificateError';
import ViewCertificates from './pages/Certificate/ViewCertificates';
import SingleCertificate from './pages/Certificate/SingleCertificate';
import SignupSuccess from './pages/Auth/SignupSuccess';
import CreateCA from './pages/CertificateAuthority/CreateCA';
import CreatingRootCA from './pages/CertificateAuthority/CreatingRootCA';
import OrganizationSettings from './pages/CertificateAuthority/OrganizationSettings';
import OrgSettings from './pages/CertificateAuthority/OrgSettings';
import AccountSettings from './pages/settings/AccountSettings';
import NotFoundPage from './pages/NotFoundPage';

export const ROUTES_ITEMS = [
    {
        to: '/',
        text: 'Home',
        icon: 'home',
        exact: true,
        component: HomePage,
    }, {
        to: '/about',
        text: 'About',
        icon: 'info-circle-o',
        component: AboutPage,
    }, {
        to: '/signup',
        text: 'Signup',
        icon: 'info-circle-o',
        component: SignupPage,
    }, {
        to: '/loginsuccess',
        text: 'LoginSuccess',
        icon: 'info-circle-o',
        component: LoginSuccess,
    }, {
        to: '/addcertificate',
        text: 'AddCertificate',
        icon: 'info-circle-o',
        component: AddCertificate,
    }, {
        to: '/clientauthentication',
        text: 'ClientAuthentication',
        icon: 'info-circle-o',
        component: ClientAuthentication,
    }, {
        to: '/serverauthentication',
        text: 'ServerAuthentication',
        icon: 'info-circle-o',
        component: ServerAuthentication,
    }, {
        to: '/addcertificatenocsr',
        text: 'AddCertificateNoCSR',
        icon: 'info-circle-o',
        component: AddCertificateNoCSR,
    }, {
        to: '/issuingcertificate',
        text: 'IssuingCertificate',
        icon: 'info-circle-o',
        component: IssuingCertificate,
    }, {
        to: '/downloadcertwithkey',
        text: 'DownloadCertWithKey',
        icon: 'info-circle-o',
        component: DownloadCertWithKey,
    }, {
        to: '/uploadCSR',
        text: 'UploadCSR',
        icon: 'info-circle-o',
        component: UploadCSR,
    }, {
        to: '/signCSR',
        text: 'SignCSR',
        icon: 'info-circle-o',
        component: SignCSR,
    }, {
        to: '/certificatesuccess',
        text: 'CertificateSuccess',
        icon: 'info-circle-o',
        component: CertificateSuccess,
    }, {
        to: '/downloadcertificatewithoutkey',
        text: 'DownloadCertificateWithoutKey',
        icon: 'info-circle-o',
        component: DownloadCertificateWithoutKey,
    }, {
        to: '/certificateerror',
        text: 'CertificateError',
        icon: 'info-circle-o',
        component: CertificateError,
    }, {
        to: '/viewcertificates',
        text: 'ViewCertificates',
        icon: 'info-circle-o',
        component: ViewCertificates,
    }, {
        to: '/singlecertificate',
        text: 'SingleCertificate',
        icon: 'info-circle-o',
        component: SingleCertificate,
    }, {
        to: '/signupsuccess',
        text: 'SignupSuccess',
        icon: 'info-circle-o',
        component: SignupSuccess,
    }, {
        to: '/createca',
        text: 'CreateCA',
        icon: 'info-circle-o',
        component: CreateCA,
    }, {
        to: '/creatingrootca',
        text: 'CreatingRootCA',
        icon: 'info-circle-o',
        component: CreatingRootCA,
    }, {
        to: '/organizationsettings',
        text: 'OrganizationSettings',
        icon: 'info-circle-o',
        component: OrganizationSettings,
    }, {
        to: '/orgsettings',
        text: 'OrgSettings',
        icon: 'info-circle-o',
        component: OrgSettings,
    }, {
        to: '/accountsettings',
        text: 'AccountSettings',
        icon: 'info-circle-o',
        component: AccountSettings,
    },

];

const ROUTES = ROUTES_ITEMS.map(route => (
    <Route key={route.to} path={route.to} exact={route.exact} component={route.component} />
));

export default class Routes extends Component {

    render() {
        return (
            <Switch>

                {ROUTES}

                <Route component={NotFoundPage} />

            </Switch>
        );
    }

}
