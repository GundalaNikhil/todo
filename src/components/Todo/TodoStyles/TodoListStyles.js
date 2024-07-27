import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  todoItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderBottom: `1px solid ${theme.palette.divider}`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
  todoText: {
    flexGrow: 1,
    marginRight: "10px",
    wordBreak: "break-word",
  },
  editInput: {
    flexGrow: 1,
    marginRight: "10px",
  },
  actionButtons: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));
