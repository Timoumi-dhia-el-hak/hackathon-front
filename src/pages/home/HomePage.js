import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Carousel } from 'react-responsive-carousel';

import logo1 from '../../assets/Groupe 239.svg';
import logo2 from '../../assets/Groupe 241.svg';
import logo3 from '../../assets/Groupe 243.svg';
import logo4 from '../../assets/Groupe 244.svg';
import logo5 from '../../assets/Groupe 247.svg';
import logo6 from '../../assets/Groupe 250.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	mainGrid: {
		marginTop: theme.spacing(3)
	},
	card: {
		display: 'flex'
	},
	cardDetails: {
		flex: 1
	},
	cardMedia: {
		width: 160
	},
	cardGrid: {
		width: '70%',
		margin: '25px auto',
		alignContent: 'centered'
	},
	Carousel: {
		width: '70%',
		margin: '25px auto',
		alignContent: 'centered'
	},
	paper: {
		height: 140,
		width: 100
	},
	devider: {
		width: '100%',
		padding: '50px'
	}
}));

export default function HomePage (){
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	function handleChange (event, newValue){
		setValue(newValue);
	}

	return (
		<Container maxWidth="lg">
			<Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered style={{
        marginTop: 30,
      }}>
				<Tab
					label="Domaine"
					style={{
            color: '#000',
            fontSize: 16
					}}
				/>
				<Tab
					label="Centre de formation"
					style={{
            color: '#000',
            fontSize: 16
            
					}}
				/>
				<Tab
					label="Marché de travail"
					style={{
            color: '#000',
            fontSize: 16
            
					}}
				/>
			</Tabs>
			<div className={classes.devider} />

			<Typography align="center" variant="h2" component="h2" style={{ margin: 25 }}>
				Comment changer de carrière quand vous
			</Typography>
			<Typography align="center" variant="h3" component="h2">
				n’avez aucune idée de ce que
			</Typography>
			<Typography align="center" variant="h3" component="h2">
				vous faites
			</Typography>
			<div className={classes.devider} />

			<Grid container spacing={4} className={classes.cardGrid}>
				<Grid item xs={12} md={12}>
					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
							<div className={classes.cardDetails}>
								<CardContent>
									<Typography variant="subtitle1" paragraph>
										Si vous êtes toujours à la recherche de la carrière de vos rêves, nous pouvons vous aider à prendre
										la bonne décision.
									</Typography>
									<Button href="/Sign Up" variant="outlined" color="inherit" className={classes.button}>
										Aide moi à prendre la bonne décision
									</Button>
								</CardContent>
							</div>
						</Card>
					</CardActionArea>
				</Grid>
				<Grid item xs={12} md={12}>
					<CardActionArea component="a" href="#">
						<Card className={classes.card}>
							<div className={classes.cardDetails}>
								<CardContent>
									<Typography variant="subtitle1" paragraph>
										En effet, j’avais passé des années à me débattre pour trouver un moyen de changer, mais sans
										progresser.
									</Typography>
									<Button href="/Sign Up" variant="outlined" color="inherit" className={classes.button}>
										Je connais la carrière
									</Button>
								</CardContent>
							</div>
							<Hidden xsDown>
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/random"
									title="Image title"
								/>
							</Hidden>
						</Card>
					</CardActionArea>
				</Grid>
			</Grid>
			<div className={classes.devider} />

			<Grid container spacing={4} className={classes.Carousel}>
				<Carousel autoPlay showThumbs={false}>
					<div>
						<img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
						<p>Legend 1</p>
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
						<p className="legend">Legend 2</p>
					</div>
					<div>
						<img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
						<p className="legend">Legend 3</p>
					</div>

				</Carousel>
			</Grid>
			<div className={classes.devider} />
			<Typography align="center" variant="h4" component="h3" style={{ margin: 25 }}>
				Nos Partenaires
			</Typography>
			<Grid container className={classes.root} spacing={2} style={{
        background: '#9AB82640 no-repeat padding-box'
      }}>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={4}>
						{[ logo1, logo2, logo3, logo4, logo5, logo6 ].map((value, index) => (
							<Grid key={index} item>
								<img src={value} className={classes.paper} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
			<div className={classes.devider} />

			<div style={{ margin: '25px auto', width: '60%' }}>
				<Typography align="center" variant="h4" component="h3" style={{ margin: 25 }}>
					Que souhaitez-vous savoir
				</Typography>
				<Typography align="center" variant="p" component="p" style={{ margin: 25 }}>
					Au plus profond de mon désespoir face à mon travail, tout autour de moi me montrait que je n’étais pas au bon
					endroit: j’étais gênée de parler de mon travail avec d’autres lors de fêtes; Je ne pouvais pas imaginer faire
					le travail de mon patron (ni celui de son patron); et j’étais pétrifié d’avoir atteint l’âge de 60 ou 70 ans
					et de ne pas être fier du travail que j’avais accompli dans ma vie.
				</Typography>
			</div>
		</Container>
	);
}
