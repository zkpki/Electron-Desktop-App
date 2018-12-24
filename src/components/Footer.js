import React from 'react';
import PropTypes from 'prop-types';
import { AboutZkpkiWrapper, StyledLink } from './styles';

const Footer = ({ title }) => (
    <AboutZkpkiWrapper>
        <StyledLink to="/about">
            { title }
        </StyledLink>
    </AboutZkpkiWrapper>
);

Footer.propTypes = {
    title: PropTypes.string,
};

Footer.defaultProps = {
    title: 'About Zkpki',
};

export default Footer;
