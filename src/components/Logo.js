import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper } from './styles';
const image = 'http://mundhum.com/logo.png';
export default () => (
    <LogoWrapper>
        <Link to="/">
            <img alt="0KPKI" src={image} style={{ maxWidth: '100%' }} />
        </Link>
    </LogoWrapper>
);
