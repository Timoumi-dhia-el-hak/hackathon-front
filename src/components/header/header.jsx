/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
		height: '60px'
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
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
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
	}
}));

function HideOnScroll (props){
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

function header (props){
	const classes = useStyles();

	const [ state, setState ] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	const toggleDrawer = (side, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [side]: open });
	};


	const menuId = 'primary-search-account-menu';

	const fullList = (side) => (
		<div
			className={classes.fullList}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}>
			<Typography align="center" variant="h6" noWrap>
				hackthon
			</Typography>

			<List>
				{[ 'Événements', 'Comment ça marche', 'Je loue ma robe' ].map((text, index) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<ListItem button dense alignItems="center">
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<Badge badgeContent={11} color="secondary">
							<ShoppingBasket />
						</Badge>
					</ListItemIcon>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
				</ListItem>
			</List>
		</div>
	);

	return (
		<HideOnScroll {...props}>
			<div className={classes.grow}>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							onClick={toggleDrawer('top', true)}
							edge="start"
							className={[ classes.menuButton, classes.sectionMobile ]}
							color="inherit"
							aria-label="open drawer">
							<MenuIcon />
						</IconButton>
						<Link href="/">
							<Typography align="center" className={classes.title} variant="h6" noWrap>
								etsy
							</Typography>
						</Link>
						<div className={classes.grow} />
						<Tabs className={classes.sectionDesktop}>
							<Tab label="Événements" />
							<Tab label="Comment ça marche" />
							<Tab label="Je loue ma robe" />
						</Tabs>
						<div className={classes.sectionDesktop}>
							<IconButton aria-label="show 4 new mails" color="inherit">
								<Badge badgeContent={4} color="secondary">
									<FavoriteBorder />
								</Badge>
							</IconButton>
							<IconButton aria-label="show 17 new notifications" color="inherit">
								<Badge badgeContent={17} color="secondary">
									<ShoppingBasket />
								</Badge>
							</IconButton>
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"f
								color="inherit">
								<ShoppingBasket />
							</IconButton>
						</div>
						<Button href="/login" variant="outlined" color="inherit" className={classes.button}>
							Login
						</Button>
					</Toolbar>
				</AppBar>

				<Drawer className={classes.drawer} anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
					{fullList('top')}
				</Drawer>
			</div>
		</HideOnScroll>
	);
}

export default header;
