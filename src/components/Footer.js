import React from 'react';
import PropTypes from 'prop-types';
import { CenterdContainer, StyledLink } from './styles';

const Footer = ({ title }) => (
    <CenterdContainer>
        <StyledLink to="/about">
            { title }
        </StyledLink>
    </CenterdContainer>
);

Footer.propTypes = {
    title: PropTypes.string,
};

Footer.defaultProps = {
    title: 'About Zkpki',
};

export default Footer;
