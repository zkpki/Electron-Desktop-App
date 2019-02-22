import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper } from './styles';
import LogoImg from '../assets/img/logo.png';

export default () => (
    <LogoWrapper>
        <Link to="/">
            <img alt="0KPKI" src={LogoImg} style={{ maxWidth: '100%' }} />
        </Link>
    </LogoWrapper>
);
