import React from "react";
import View from "view";
import { IntlLocalizationContextProvider } from "providers/intlLocalizationProvider";
import { ProgrammingLanguageContextProvider } from "providers/programmingLanguageProvider";
import { ThemeContextProvider } from "providers/themeProvider";
import { ServerAnswerContextProvider } from "../../providers/serverAnswerProvider";

const App = () => {
    return (
        <ServerAnswerContextProvider>
            <IntlLocalizationContextProvider>
                <ProgrammingLanguageContextProvider>
                    <ThemeContextProvider>
                        <View />
                    </ThemeContextProvider>
                </ProgrammingLanguageContextProvider>
            </IntlLocalizationContextProvider>
        </ServerAnswerContextProvider>
    );
};

export default App;
