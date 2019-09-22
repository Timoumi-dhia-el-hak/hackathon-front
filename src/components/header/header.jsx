/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../assets/Groupe 36.svg";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    height: "60px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 4,
    marginRight: theme.spacing(6)
    // color: '#fff'
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    flexShrink: 0,
    top: theme.spacing(5)
  },
  button: {
    margin: theme.spacing(1)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

function header(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const menuId = "primary-search-account-menu";

  const fullList = side => (
    <div
      className={classes.fullList}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>
      <Typography align='center' variant='h6' noWrap>
        hackthon
      </Typography>

      <Divider />
      <List>
        <ListItem button dense alignItems='center'>
          <ListItemIcon></ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <HideOnScroll {...props}>
      <div className={classes.grow}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              onClick={toggleDrawer("top", true)}
              edge='start'
              className={[classes.menuButton, classes.sectionMobile]}
              color='inherit'
              aria-label='open drawer'>
              <MenuIcon />
            </IconButton>
            <Link href='/'>
              <img src={logo} alt='' />
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Domaine'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <AccountBalanceIcon />
              </div>
              <InputBase
                placeholder='Centre de Formation'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <Link href='/sign-up'>
              <Button
                variant='outlined'
                color='secendary'
                className={classes.button}>
                S'inscrire
              </Button>
            </Link>
            <Link href='/sing-in'>
              {" "}
              <Button
                variant='outlined'
                color='secendary'
                className={classes.button}>
                Se connecter
              </Button>
            </Link>
            {/* <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
              className={classes.avatar}
            />
            <Typography>wissem yahyaoui</Typography> */}
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          anchor='top'
          open={state.top}
          onClose={toggleDrawer("top", false)}>
          {fullList("top")}
        </Drawer>
      </div>
    </HideOnScroll>
  );
}

export default header;
