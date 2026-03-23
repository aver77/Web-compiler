import React, { memo, useCallback } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { FormattedMessage } from "react-intl";

import Selection from "./Selection";
import { controlsStyles } from "./styles";
import { fontBreakPoints } from "utils/breakpoints";
import { getLocalStorageItem } from "utils/localStorage";
import { CODE } from "constants/localStorageKeys";

import Service from "service";
import { useProgrammingLanguageContext } from "providers/programmingLanguageProvider";
import { useServerAnswerContext } from "providers/serverAnswerProvider";

const Controls = () => {
    const { programmingLanguage } = useProgrammingLanguageContext();
    const { changeServerAnswer } = useServerAnswerContext();

    const handleClick = useCallback(() => {
        const currentCode = getLocalStorageItem(CODE);
        if (currentCode && programmingLanguage) {
            new Service()
                .compileResourse(programmingLanguage, currentCode)
                .then(data => {
                    changeServerAnswer(data);
                });
        }
    }, [programmingLanguage, changeServerAnswer]);

    return (
        <Container maxWidth="xxl">
            <Box sx={controlsStyles}>
                <Selection />
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClick}
                >
                    <Typography sx={fontBreakPoints}>
                        <FormattedMessage id="btnText" />
                    </Typography>
                </Button>
            </Box>
        </Container>
    );
};

export default memo(Controls);
