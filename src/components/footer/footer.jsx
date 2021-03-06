/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "./components/Typography";
import TextField from "./components/TextField";
import logo from "../../assets/appFooterTwitter.png";
import logo1 from "../../assets/appFooterFacebook.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    marginTop: theme.spacing(8)
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc071",
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#ffb25e"
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150
  }
}));

const LANGUAGES = [
  {
    code: "en-US",
    name: "English"
  },
  {
    code: "fr-FR",
    name: "Français"
  }
];

function footer() {
  const classes = useStyles();

  return (
    <Typography component='footer' className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction='column'
              justify='flex-end'
              className={classes.iconsWrapper}
              spacing={2}>
              <Grid item className={classes.icons}>
                <a href='https://facebook.com' className={classes.icon}>
                  <img src={logo1} alt='Twitter' />
                </a>

                <a href='https://twitter.com' className={classes.icon}>
                  <img src={logo} alt='Twitter' />
                </a>
              </Grid>
              <Grid item>© 2019 changes </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant='h6' marked='left' gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link color='inherit' href='/terms/'>
                  Terms
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link color='inherit' href='/privacy/'>
                  Privacy
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant='h6' marked='left' gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true
              }}
              className={classes.language}>
              {LANGUAGES.map(language => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
export default footer;
