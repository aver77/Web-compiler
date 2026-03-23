import React, { memo } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Stack,
    useMediaQuery,
} from "@mui/material";
import { LightMode, ModeNight } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { FormattedMessage } from "react-intl";

import { headerBoxStyles, headerStackStyles } from "./styles";
import {
    fontBreakPoints,
    headerBreakPoints,
    picsBreakPoints,
} from "utils/breakpoints";
import { ThemeSwitch } from "./ThemeSwitch";
import { LanguageSwitch } from "./LanguageSwitch";

const Header = () => {
    const theme = useTheme();
    const title = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={headerBoxStyles}>
            <AppBar color="primary" position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{ flexGrow: 1 }}
                        sx={headerBreakPoints}
                    >
                        {title ? "NW" : "NW Compiler"}
                    </Typography>
                    <Stack direction="row" alignItems="center">
                        <LightMode sx={picsBreakPoints} color="action" />
                        <ThemeSwitch />
                        <ModeNight sx={picsBreakPoints} color="action" />
                    </Stack>
                    <Stack
                        sx={headerStackStyles}
                        direction="row"
                        alignItems="center"
                    >
                        <Typography sx={fontBreakPoints}>
                            <FormattedMessage id="ru" />
                        </Typography>
                        <LanguageSwitch />
                        <Typography sx={fontBreakPoints}>
                            <FormattedMessage id="eng" />
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default memo(Header);
