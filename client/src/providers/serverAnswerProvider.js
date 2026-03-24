import React, { createContext, useContext, useState } from "react";

import { SERVER_ANSWER } from "constants/localStorageKeys";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "utils/localStorage";

const ServerAnswerContext = createContext(null);

export const useServerAnswerContext = () => useContext(ServerAnswerContext);

export const ServerAnswerContextProvider = ({ children }) => {
    const [serverAnswer, setServerAnswer] = useState(
        getLocalStorageItem(SERVER_ANSWER) || ""
    );

    const changeServerAnswer = (newServerAnswer) => {
        setLocalStorageItem(SERVER_ANSWER, newServerAnswer);
        setServerAnswer(newServerAnswer);
    };

    return (
        <ServerAnswerContext.Provider value={{ serverAnswer, changeServerAnswer }}>
            {children}
        </ServerAnswerContext.Provider>
    );
};