import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          S'inscrire
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete='name'
            autoFocus
            fullWidth
            id='name'
            label='Nom /Prénom'
            margin='normal'
            name='name'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='User Name'
            autoFocus
            fullWidth
            id='usename'
            label='User Name'
            margin='normal'
            name='User Name'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='email'
            autoFocus
            fullWidth
            id='email'
            label='Email'
            margin='normal'
            name='email'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='Stady level'
            autoFocus
            fullWidth
            id='stadylvl'
            label="Niveau  d'etude"
            margin='normal'
            name='Stady level'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='Stady Domaine'
            autoFocus
            fullWidth
            id='stadydomain'
            label="Domaine d 'etude"
            margin='normal'
            name='Stady Domaine'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='Linked In'
            autoFocus
            fullWidth
            id='linkedin'
            label='Linked In'
            margin='normal'
            name='Linked In'
            required
            variant='outlined'
          />
          <TextField
            autoComplete='current-password'
            fullWidth
            id='password'
            label='Mot de Passe'
            margin='normal'
            name='password'
            required
            type='password'
            variant='outlined'
          />
          <TextField
            autoComplete='current-password'
            fullWidth
            id='password_confirm'
            label='Confimation Mdp'
            margin='normal'
            name='password_confirm'
            required
            type='password'
            variant='outlined'
          />
          <TextField
            autoComplete='Phone'
            autoFocus
            fullWidth
            id='phone'
            label='Télephone'
            margin='normal'
            name='Phone'
            required
            type='number'
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
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            S'inscrire
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
