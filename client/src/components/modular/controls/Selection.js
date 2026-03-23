import React, { memo } from "react";
import { Select, FormControl, MenuItem, InputLabel, Box } from "@mui/material";
import { FormattedMessage } from "react-intl";

import {
    selectionInputStyles,
    selectionBoxStyles,
    paperStyles,
} from "./styles";
import { fontBreakPoints } from "utils/breakpoints";
import { useProgrammingLanguageContext } from "providers/programmingLanguageProvider";
import { CPP, JAVASCRIPT, PYTHON } from "constants/programmingLanguages";

const Selection = () => {
    const { programmingLanguage, changeProgrammingLanguage } = useProgrammingLanguageContext();

    const selectionItems = [
        {
            label: "Javascript",
            value: JAVASCRIPT
        },
        {
            label: "C++",
            value: CPP
        },
        {
            label: "Python",
            value: PYTHON
        }
    ]

    return (
        <Box sx={selectionBoxStyles}>
            <FormControl fullWidth>
                <InputLabel
                    sx={selectionInputStyles}
                    id="demo-simple-select-label"
                >
                    <FormattedMessage id="programmingLanguages" />
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={programmingLanguage}
                    label={<FormattedMessage id="programmingLanguages" />}
                    onChange={(e) => changeProgrammingLanguage(e.target.value)}
                    size="small"
                    sx={fontBreakPoints}
                    MenuProps={{
                        PaperProps: {
                            sx: paperStyles,
                        },
                    }}
                >
                    {selectionItems.map(({ label, value }) => (
                        <MenuItem key={label} sx={fontBreakPoints} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
export default memo(Selection);
