import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Rating from '../card/rating';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    flex:'2'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  
  cardDescrition : {
    display: 'flex',
    flexWrap:'wrap',
    flex:'4',
    padding: '10px',
    
  },
  detail : {
    display: 'flex',
    justifyContent: 'space-between'
  },
  detai : {
    flex:'1',
    
  }
}));

export default function MediaControlCard({name, secteur, image, description,rating}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
        <CardMedia
        className={classes.cover}
        image="https://www.jeuneafrique.com/medias/2018/04/24/gomycode-2018-592x296.jpg"
        title="Live from space album cover"
      />
       <div className={classes.detai}>
          
          <img src={image}  width="30" height="30"/>
     
       </div>
      <div className={classes.cardDescrition}>
       
        
           
           <div className={classes.detail}>
               <h5>{name}</h5>
               <h4>{secteur}</h4>
               <div style={{margin: '20px',marginLeft: '50pxS' }}><Rating count={rating} /></div>
           </div>
           
           <p>
           Description:<br/>
           {description}
           </p> 


        </div>
      
      
    </Card>
  );
}