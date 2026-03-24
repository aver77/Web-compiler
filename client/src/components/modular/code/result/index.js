import React, { memo } from "react";
import { TextField, Box, Container } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useServerAnswerContext } from "providers/serverAnswerProvider";
import { resultContainerStyles, alignStyles } from "./styles";

const DEFAULT_RESULT_ROWS = 6;

const CodeResult = () => {
    const { serverAnswer } = useServerAnswerContext();

    const label = <FormattedMessage id="outputPlaceholder" />;

    return (
        <Container maxWidth="xxl" sx={resultContainerStyles}>
            <Box sx={alignStyles}>
                <TextField
                    inputProps={{
                        readOnly: true,
                        disableUnderline: true,
                    }}
                    id="outlined-multiline-static"
                    label={serverAnswer ? undefined : label}
                    multiline
                    rows={DEFAULT_RESULT_ROWS}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={serverAnswer || undefined}
                />
            </Box>
        </Container>
    );
};

export default memo(CodeResult);
