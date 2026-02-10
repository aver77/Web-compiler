import React from "react";
import { CssBaseline } from "@mui/material";

import Header from "../components/common/header";
import Input from "components/modular/inputs";
import Controls from "../components/modular/controls";
import Footer from "../components/common/footer";

import WithThemeProvider from "HOCs/withThemeProvider";
import { useWithLocalStorages } from "hooks/useWithLocalStorages";
import { CURRENT_SERVER_ANSWER } from "constants/specificWords";

const View = ({ localizationHandler }) => {
    const {
        variable: serverAnswer,
        variableHandler: setServerAnswer
    } = useWithLocalStorages(CURRENT_SERVER_ANSWER);

    return (
        <WithThemeProvider>
            <CssBaseline />
            <Header localizationHandler={localizationHandler} />
            <Input />
            <Controls serverAnswerHandler={setServerAnswer} />
            <Input serverAnswer={serverAnswer} />
            <Footer />
        </WithThemeProvider>
    );
};

export default View;
