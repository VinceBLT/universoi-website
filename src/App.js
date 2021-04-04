import React from "react";
import { useEffect } from "react";
import {
   Switch,
   Route,
   Redirect,
   useHistory,
   useLocation,
} from "react-router-dom";
import {
   makeStyles,
   ThemeProvider,
   createMuiTheme,
} from "@material-ui/core/styles";
import { green, yellow, grey } from "@material-ui/core/colors";
import "fontsource-roboto";
import { palette } from "@material-ui/system";
import useStyles from "./styles";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Universoi from "./pages/Universoi";
import Votreaccompagnement from "./pages/Votre-accompagnement";
import Tarifs from "./pages/Tarifs";
import PrisedeRDV from "./pages/Prise-de-RDV";
import Contact from "./pages/Contact";

const theme = createMuiTheme({
   palette: {
      primary: {
         light: green[200],
         main: green[800],
         dark: green[500],
      },
      secondary: {
         main: yellow[50],
         dark: yellow[800],
      },
   },
});

function App() {
   const classes = useStyles();

   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            <Navbar />
            <Switch>
               <Route
                  exact
                  from="/"
                  render={(props) => <Accueil {...props} />}
               />
               <Route
                  exact
                  path="/Universoi"
                  render={(props) => <Universoi {...props} />}
               />
               <Route
                  exact
                  path="/Votreaccompagnement"
                  render={(props) => <Votreaccompagnement {...props} />}
               />
               <Route
                  exact
                  path="/Tarifs"
                  render={(props) => <Tarifs {...props} />}
               />
               <Route
                  exact
                  path="/PrisedeRDV"
                  render={(props) => <PrisedeRDV {...props} />}
               />
               <Route
                  exact
                  path="/Contact"
                  render={(props) => <Contact {...props} />}
               />
            </Switch>
         </div>
      </ThemeProvider>
   );
}

export default App;
