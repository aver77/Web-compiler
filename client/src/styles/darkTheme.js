import { createTheme } from "@mui/material";
import { LIGHT_COLOR } from "constants/inputValues";

import { darkThemePalette } from "../constants/theme";

export const darkTheme = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 18,
        allVariants: {
            fontWeight: 500,
            color: "#ffffffb3",
        },
    },
    palette: darkThemePalette,
    transitions: ".2s ease",
    //input color and scrollbar
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "& .MuiInputBase-root": {
                        color: LIGHT_COLOR,
                    },
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: 12,
                        backgroundColor: "#414141",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                        {
                            backgroundColor: "#ffffffb3",
                            minHeight: 32,
                            border: "2px solid #414141",
                        },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                        {
                            backgroundColor: "#ffffff66",
                        },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                        {
                            backgroundColor: "#ffffff66",
                        },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                        {
                            backgroundColor: "#ffffff66",
                        },
                },
            },
        },
    },
});
