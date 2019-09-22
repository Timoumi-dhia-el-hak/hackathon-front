import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
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

export default function Society() {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Societé
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete='name'
            autoFocus
            fullWidth
            id='sname'
            label='Nom'
            margin='normal'
            name='sname'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='adress'
            autoFocus
            fullWidth
            id='adress'
            label='Adresse'
            margin='normal'
            name='Adress'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='logo'
            autoFocus
            fullWidth
            id='logo'
            label='Logo'
            margin='normal'
            name='logo'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='phone'
            autoFocus
            fullWidth
            id='sphone'
            label='Telephone'
            margin='normal'
            name='sphone'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='Website'
            autoFocus
            fullWidth
            id='website'
            label='Site Web '
            margin='normal'
            name='Web'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='Tax code'
            autoFocus
            fullWidth
            id='tax'
            label='code fiscal '
            margin='normal'
            name='taxcode'
            required
            variant='outlined'
          />
          <label htmlFor='outlined-button-file'>
            <Button
              variant='outlined'
              component='span'
              fullWidth
              variant='outlined'
              id='upload'
              className={classes.button}>
              Upload Images
            </Button>
          </label>
          <TextField
            autoComplete='Domaine'
            autoFocus
            fullWidth
            id='domaine'
            label='Domaine'
            margin='normal'
            name='domaine'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='Capacity'
            autoFocus
            fullWidth
            id='capacity'
            label='Capacité'
            margin='normal'
            name='Capacity'
            required
            type='number'
            variant='outlined'
          />
          <label htmlFor='outlined-button-file'>Study Lvl</label>

          <FormControlLabel
            control={<Checkbox value='bac' />}
            label='bac'
            id='bac'
          />
          <FormControlLabel
            control={<Checkbox value='bac+3' />}
            label='bac +3'
            id='bac3'
          />
          <FormControlLabel
            control={<Checkbox value='None' />}
            label='None'
            id='none'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
