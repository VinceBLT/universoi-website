import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, useHistory } from "react-router-dom";
import useStyles from "../styles";

const Navbar = (props) => {
   const { history } = props;
   const classes = useStyles();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMenuClick = (pageURL) => {
      history.push(pageURL);
      setAnchorEl(null);
   };

   const handleButtonClick = (pageURL) => {
      history.push(pageURL);
   };

   const menuItems = [
      {
         menuTitle: "Home",
         pageURL: "/",
      },
      {
         menuTitle: "Uni-Vers Soi",
         pageURL: "/Universoi",
      },
      {
         menuTitle: "Votre accompagnement",
         pageURL: "/Votre-accompagnement",
      },
      {
         menuTitle: "Tarifs",
         pageURL: "/Tarifs",
      },
      {
         menuTitle: "Prise de RDV",
         pageURL: "/Prise-de-RDV",
      },
      {
         menuTitle: "Contact",
         pageURL: "/Contact",
      },
   ];

   return (
      <div className={classes.root}>
         <AppBar position="static" color="Secondary">
            <Toolbar>
               {isMobile ? (
                  <>
                     <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}
                     >
                        <MenuIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                     >
                        {menuItems.map((menuItem) => {
                           const { menuTitle, pageURL } = menuItem;
                           return (
                              <MenuItem
                                 onClick={() => handleMenuClick(pageURL)}
                              >
                                 {menuTitle}
                              </MenuItem>
                           );
                        })}
                     </Menu>
                  </>
               ) : (
                  <div className={classes.headerOptions}>
                     <Button
                        variant="contained"
                        onClick={() => handleButtonClick("/")}
                        color="primary"
                     >
                        Accueil
                     </Button>
                     <Button
                        variant="contained"
                        onClick={() => handleButtonClick("/Universoi")}
                        color="primary"
                     >
                        Uni-Vers Soi
                     </Button>
                     <Button
                        variant="contained"
                        onClick={() =>
                           handleButtonClick("/Votre-accompagnement")
                        }
                        color="primary"
                     >
                        Votre accompagnement
                     </Button>
                     <Button
                        variant="contained"
                        onClick={() => handleButtonClick("/Tarifs")}
                        color="primary"
                     >
                        Tarifs
                     </Button>
                     <Button
                        variant="contained"
                        onClick={() => handleButtonClick("/PrisedeRDV")}
                        color="primary"
                     >
                        Prise de RDV
                     </Button>
                     <Button
                        variant="contained"
                        onClick={() => handleButtonClick("/Contact")}
                        color="primary"
                     >
                        Contact
                     </Button>
                  </div>
               )}
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default withRouter(Navbar);
