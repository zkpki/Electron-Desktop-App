import React, { Component } from 'react';

import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import styles from './ContentRoutes.scss';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import SignupPage from '../pages/SignupPage';
import LoginSuccess from '../pages/LoginSuccess';
import AddCertificate from '../pages/AddCertificate';
import ClientAuthentication from '../pages/ClientAuthentication';
import ServerAuthentication from '../pages/ServerAuthentication';
import AddCertificateNoCSR from '../pages/AddCertificateNoCSR';
import IssuingCertificate from '../pages/IssuingCertificate';
import DownloadCertWithKey from '../pages/DownloadCertWithKey';
import UploadCSR from '../pages/UploadCSR';
import SignCSR from '../pages/SignCSR';
import CertificateSuccess from '../pages/CertificateSuccess';
import DownloadCertificateWithoutKey from '../pages/DownloadCertificateWithoutKey';
import CertificateError from '../pages/CertificateError';
import ViewCertificates from '../pages/ViewCertificates';
import SingleCertificate from '../pages/SingleCertificate';
import SignupSuccess from '../pages/SignupSuccess';
import CreateCA from '../pages/CreateCA';
import CreatingRootCA from '../pages/CreatingRootCA';
import OrganizationSettings from '../pages/OrganizationSettings';
import OrgSettings from '../pages/OrgSettings';
import AccountSettings from '../pages/AccountSettings';

import NotFoundPage from '../pages/NotFoundPage';

const { Content } = Layout;

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

export default class ContentRoutes extends Component {

    state = {};

    render() {
        return (
            <Content className={styles.content}>
                <Switch>

                    {ROUTES}

                    <Route component={NotFoundPage} />

                </Switch>
            </Content>
        );
    }

}
