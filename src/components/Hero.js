import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "../styles";

function Hero() {
   const classes = useStyles();

   return (
      <div>
         <Container className={classes.container} maxWidth="lg">
            <Grid container spacing={1}>
               <Grid item align="center" item xs={6} spacing={2}>
                  <Typography variant="h2" color="primary">
                     Uni-Vers Soi
                  </Typography>
                  <Typography variant="h4" color="textPrimary" gutterBottom>
                     Développement personnel et spirituel
                  </Typography>
                  <Button variant="contained" color="primary">
                     Découvrir
                  </Button>
               </Grid>
               <Grid item>
                  <Typography variant="h1" color="initial">
                     Hello
                  </Typography>
               </Grid>
            </Grid>
         </Container>
      </div>
   );
}

export default Hero;
