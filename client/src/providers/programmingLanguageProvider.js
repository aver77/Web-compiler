import { createContext, useContext, useState } from 'react';
import { PROGRAMMING_LANGUAGE } from "constants/localStorageKeys";
import { JAVASCRIPT } from "constants/programmingLanguages";
import { getLocalStorageItem, setLocalStorageItem } from "utils/localStorage";

const ProgrammingLanguageContext = createContext(null);

export const useProgrammingLanguageContext = () => useContext(ProgrammingLanguageContext);

export const ProgrammingLanguageContextProvider = ({ children }) => {
    const [programmingLanguage, setProgrammingLanguage] = useState(
        getLocalStorageItem(PROGRAMMING_LANGUAGE) || JAVASCRIPT
    );

    const changeProgrammingLanguage = (newLanguage) => {
        setLocalStorageItem(PROGRAMMING_LANGUAGE, newLanguage);
        setProgrammingLanguage(newLanguage);
    }

    return (
        <ProgrammingLanguageContext.Provider value={{ programmingLanguage, changeProgrammingLanguage }}>
            {children}
        </ProgrammingLanguageContext.Provider>
    )
}