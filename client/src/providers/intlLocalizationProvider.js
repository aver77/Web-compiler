import React, { createContext, useContext, useState } from "react";

import { IntlProvider as ReactIntlProvider } from "react-intl";
import { LOCALES } from "constants/Intl/locales";
import { languages } from "constants/Intl/languages";

import { LANGUAGE } from "constants/localStorageKeys";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "utils/localStorage";

const IntlLocalizationContext = createContext(null);

export const useIntlLocalizationContext = () => useContext(IntlLocalizationContext);

export const IntlLocalizationContextProvider = ({ children }) => {
    const [localization, setLocalization] = useState(
        getLocalStorageItem(LANGUAGE) || LOCALES.RUSSIAN
    );

    const switchLocalization = () => {
        const newLocalization = localization === LOCALES.RUSSIAN ? LOCALES.ENGLISH : LOCALES.RUSSIAN;
        setLocalStorageItem(LANGUAGE, newLocalization);
        setLocalization(newLocalization);
    }

    return (
        <IntlLocalizationContext.Provider value={{ localization, switchLocalization }}>
            <ReactIntlProvider
                messages={languages[localization]}
                locale={localization}
                defaultLocale={LOCALES.RUSSIAN}
            >
                {children}
            </ReactIntlProvider>
        </IntlLocalizationContext.Provider>
    );
};