import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const styles = (theme) => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    images: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});


function ProductCategories(props){
    const { classes } = props;
    const options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {s: 'Avengers Endgame', page: '1', r: 'json'},
        headers: {
          'x-rapidapi-key': '9d53d6f30amsh53ebbeef7e54d0fp19015bjsne8a09df5cb4e',
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
        }
      };
    const images = [
        {
            url:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
            title: 'Avengers: Endgame',
            width: '40%',
        },
        {
            url:"https://m.media-amazon.com/images/M/MV5BZjg2ZTM3OTgtY2ExMS00OGM4LTg3NDEtNjQ0MjJiZDFmMGFkXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg",
            title: 'Avengers: Endgame and the Latest Captain Marvel Outrage!!',
            width: '20%',
        },
        {
            url:"https://m.media-amazon.com/images/M/MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg",
            title: 'Marvel Studios Avengers: Endgame LIVE Red Carpet World Premiere',
            width: '40%',
        },
        {
            url:"https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg",
            title: 'Avengers Endgame: the Butt Plan',
            width: '38%',
        },
        {
            url:"https://m.media-amazon.com/images/M/MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg",
            title: 'Marvel Studios Avengers: Endgame LIVE Red Carpet World Premiere',
            width: '38%',
        },
        {
            url:"https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg",
            title: 'Avengers Endgame: the Butt Plan',
            width: '24%',
        },
    ];;
        axios.request(options).then(res => {
           const images =  res.data;  
           
           console.log(images)
       }).catch(function (error) {
           console.error(error);
       });   
    return (
        <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2">
            Para todos los gustos y todos los deseos
            </Typography>
            <div className={classes.images}>
                {images.map((image) => (
                    <ButtonBase key={image.title} className={classes.imageWrapper} style={{width: image.width}}>
                        <div className={classes.imageSrc} style={{backgroundImage: `url(${image.url})`}} />
                        <div className={classes.imageBackdrop} />
                        <div className={classes.imageButton}>
                            <Typography component="h3" variant="h6" color="inherit" className={classes.imageTitle}>
                                {image.title}
                                <div className={classes.imageMarked} />
                            </Typography>
                        </div>
                    </ButtonBase>
                ))}
            </div>
        </Container>
    );
}

ProductCategories.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);