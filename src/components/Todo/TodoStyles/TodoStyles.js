import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  todoContainer: {
    padding: theme.spacing(3),
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  form: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  input: {
    flexGrow: 1,
    "& .MuiOutlinedInput-root": {
      //   "& fieldset": {
      //     borderColor: "black",
      //   },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        outline: "none",
        border: "0.5px solid black",
        boxShadow: "-5px -5px 0px black",
      },
    },
    borderRadius: "4px",
    width: "300px",
  },
  addButton: {
    color: "blue",
    "&:hover": {
      backgroundColor: "#333",
    },
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
  "@media (max-width: 600px)": {
    form: {
      flexDirection: "row",
    },
    input: {
      width: "80%",
      marginBottom: theme.spacing(2),
    },
    addButton: {
      width: "10%",
    },
  },
}));
