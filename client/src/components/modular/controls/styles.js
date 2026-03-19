import { marginSmall } from "constants/breakpointsValues";

export const controlsStyles = theme => ({
    flexGrow: 1,
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export const selectionBoxStyles = theme => ({
    width: 280,
    [theme.breakpoints.down("sm")]: {
        width: 180,
    },
});

export const selectionInputStyles = theme => ({
    marginTop: "-6px",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "-4px",
        fontSize: 14,
    },
});

export const paperStyles = theme => ({
    bgcolor: theme.palette.selectedBackground,
    "& .MuiMenuItem-root": {
        color: theme.typography.allVariants.color,
    },
});
