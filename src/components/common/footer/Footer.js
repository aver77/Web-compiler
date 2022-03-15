import React from 'react';
import { Typography, Box } from '@mui/material';
import { footerBoxStyles, footerWrapBoxStyles } from './styles/styles';

import { FormattedMessage } from 'react-intl';

import { fontBreakPoints } from '../../../utils/breakpoints';

const Footer = () => {
    return (
        <Box bgcolor="primary.main" sx={footerBoxStyles}>
            <Box sx={footerWrapBoxStyles}>
                <Typography sx={fontBreakPoints}><FormattedMessage id='footerText'/></Typography>
            </Box>
        </Box>
    );
};

export default Footer;