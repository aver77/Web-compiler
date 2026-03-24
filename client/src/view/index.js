import React from "react";
import { CssBaseline } from "@mui/material";

import Header from "components/common/header";
import { CodeEditor, CodeResult } from "components/modular/code";
import Controls from "components/modular/controls";
import Footer from "components/common/footer";

const View = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <CodeEditor />
            <Controls />
            <CodeResult />
            <Footer />
        </>
    );
};

export default View;
