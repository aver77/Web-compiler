import { paddingSmall } from "constants/breakpointsValues";

export const codeContainerStyles = theme => ({
    paddingTop: "100px",
    [theme.breakpoints.down("sm")]: {
        paddingTop: paddingSmall,
    },
});

export const codeWrapperStyles = () => ({
    borderRadius: "4px",
    overflow: "hidden",
});
