import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography align='center' color='textSecondary' variant='body2'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Changes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}{" "}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Se connecter
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete='email'
            autoFocus
            fullWidth
            id='email'
            label='Email Address'
            margin='normal'
            name='email'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='current-password'
            fullWidth
            id='password'
            label='Mot De Passe'
            margin='normal'
            name='password'
            required
            type='password'
            variant='outlined'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Se connecter
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Mot de passe oublié?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}{" "}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
