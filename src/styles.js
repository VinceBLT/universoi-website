import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: "20rem",
   },
   // **** NAVBAR ****
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      [theme.breakpoints.down("xs")]: {
         flexGrow: 1,
      },
   },
   headerOptions: {
      display: "flex",
      flex: 1,
      justifyContent: "space-evenly",
   },
   menuItems: {},
}));

export default useStyles;
