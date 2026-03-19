import { createTheme } from "@mui/material";
import { DARK_COLOR } from "constants/inputValues";

import { lightThemePalette } from "../constants/theme";

export const lightTheme = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 18,
        allVariants: {
            fontWeight: 500,
            color: "#121212",
        },
    },
    palette: lightThemePalette,
    transitions: ".2s ease",
    //input color and scrollbar
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "& .MuiInputBase-root": {
                        color: DARK_COLOR,
                    },
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: 12,
                        backgroundColor: "#BDBDBD",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                        {
                            backgroundColor: "#ffffff",
                            minHeight: 32,
                            border: "2px solid #BDBDBD",
                        },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                        {
                            backgroundColor: "#ffffffb3",
                        },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                        {
                            backgroundColor: "#ffffffb3",
                        },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                        {
                            backgroundColor: "#ffffffb3",
                        },
                },
            },
        },
    },
});
