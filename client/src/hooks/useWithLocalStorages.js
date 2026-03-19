import { useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/localStorage";

export const useWithLocalStorages = (defaultValue) => {
    const [variable, setVariable] = useState(getLocalStorageItem(defaultValue) || null)

    const variableHandler = (value) => {
        setLocalStorageItem(defaultValue, JSON.stringify(value));
        setVariable(value);
    };

    return {
        variable,
        variableHandler 
    }
}