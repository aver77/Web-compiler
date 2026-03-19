import React, { memo } from "react";
import { Box, Container } from "@mui/material";
import { useIntl} from "react-intl";
import { defineMonacoThemes } from "./defineMonacoTheme"

import { codeContainerStyles, codeWrapperStyles } from "./styles";
import { useWithLocalStorages } from "hooks/useWithLocalStorages";
import { CURRENT_CODE } from "constants/specificWords";
import { ternaryOperation } from "utils/ternaryOperation";

import Editor from '@monaco-editor/react';

const CodeEditor = ({ currentThemeName }) => {
    const intl = useIntl();

    const codeValue = useWithLocalStorages(CURRENT_CODE);

    const handleTextField = v => {
        if (v) {
            codeValue.variableHandler(v);
        } else {
            codeValue.variableHandler(null);
        }
    };

    const handleEditorDidMount = (editor) => {
        editor.focus();
    }

    const handleEditorWillMount = (monaco) => {
        defineMonacoThemes(monaco);
    }

    return (
        <Container maxWidth="xxl" sx={codeContainerStyles}>
            <Box sx={codeWrapperStyles}>
                <Editor
                    height="60vh"
                    defaultLanguage="javascript"
                    defaultValue={`// ${intl.formatMessage({ id: "inputPlaceholder" })}`}
                    theme={currentThemeName}
                    onChange={handleTextField}
                    beforeMount={handleEditorWillMount}
                    onMount={handleEditorDidMount}
                    value={ternaryOperation(
                        codeValue.variable,
                        codeValue.variable,
                        undefined
                    )}
                />
            </Box>
        </Container>
    );
};

export default memo(CodeEditor);
