import { marginSmall, paddingSmall } from "constants/breakpointsValues";

export const resultContainerStyles = theme => ({
    paddingTop: "30px",
    paddingBottom: "68px",
    [theme.breakpoints.down("md")]: {
        paddingTop: marginSmall,
        paddingBottom: paddingSmall,
    },
});

export const alignStyles = () => ({
    textAlign: "center",
    marginTop: marginSmall
});
