import React from "react";
import Switch from "@mui/material/Switch";

import { useIntlLocalizationContext } from "providers/intlLocalizationProvider";
import { LOCALES } from "constants/Intl/locales";

export const LanguageSwitch = () => {
    const { localization, switchLocalization } = useIntlLocalizationContext();

    const label = { inputProps: { "aria-label": "Switch demo" } };

    return (
        <Switch
            color="secondary"
            checked={localization === LOCALES.ENGLISH}
            onClick={switchLocalization}
            {...label}
        />
    );
};