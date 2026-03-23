import React, { memo } from "react";
import { Box, Container } from "@mui/material";
import { useIntl} from "react-intl";
import { defineMonacoThemes } from "./defineMonacoTheme"

import { codeContainerStyles, codeWrapperStyles } from "./styles";
import { CODE } from "constants/localStorageKeys";
import {getLocalStorageItem, setLocalStorageItem} from "utils/localStorage";
import { useProgrammingLanguageContext } from "providers/programmingLanguageProvider";
import { useThemeContext } from "providers/themeProvider";

import Editor from '@monaco-editor/react';
import { JAVASCRIPT, PROGRAMMING_LANGUAGE_TO_MONACO_MAPPING } from "constants/programmingLanguages";

const CodeEditor = () => {
    const intl = useIntl();

    const { language } = useProgrammingLanguageContext();
    const { theme } = useThemeContext();

    const initialCodeValue = getLocalStorageItem(CODE);

    const handleTextField = v => {
        setLocalStorageItem(CODE, v)
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
                    defaultLanguage={PROGRAMMING_LANGUAGE_TO_MONACO_MAPPING[JAVASCRIPT]}
                    language={PROGRAMMING_LANGUAGE_TO_MONACO_MAPPING[language]}
                    defaultValue={`// ${intl.formatMessage({ id: "inputPlaceholder" })}`}
                    theme={theme}
                    onChange={handleTextField}
                    beforeMount={handleEditorWillMount}
                    onMount={handleEditorDidMount}
                    value={initialCodeValue}
                />
            </Box>
        </Container>
    );
};

export default memo(CodeEditor);
