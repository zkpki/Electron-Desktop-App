import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper } from './styles';

const logo = 'https://via.placeholder.com/277x79?text=Logo';

export default () => (
    <LogoWrapper>
        <Link to="/">
            <img alt="logo" src={logo} style={{maxWidth: '100%'}} />
        </Link>
    </LogoWrapper>
);
