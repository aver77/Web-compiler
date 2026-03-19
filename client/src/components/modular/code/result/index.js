import React, { memo } from "react";
import { TextField, Box, Container } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { resultContainerStyles, alignStyles } from "./styles";

import { DEFAULT_RESULT_ROWS } from "constants/inputValues";
import { ternaryOperation } from "utils/ternaryOperation";

const CodeResult = ({ serverAnswer }) => {
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
                    label={ternaryOperation(serverAnswer, undefined, label)}
                    multiline
                    rows={DEFAULT_RESULT_ROWS}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={ternaryOperation(
                        serverAnswer,
                        serverAnswer,
                        undefined
                    )}
                />
            </Box>
        </Container>
    );
};

export default memo(CodeResult);
