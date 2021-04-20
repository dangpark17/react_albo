import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage = "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundPosition: 'center',
    },
    button: {
        minWidth: 200,
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    }
});

function ProductHero(props) {
    const { classes } = props;

    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            {/* Increase the network loading priority of the background image */}
            <img style={{display: 'none'}} src={backgroundImage} alt="Increase priority"/>
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Peliculas de Estreno
            </Typography>
            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                En Este componente se muestra la siguiente API Movie Database (IMDB Alternative)

            </Typography>
            <Button color="secondary" variant="contained" size="large" className={classes.button} component="a" href="https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative?endpoint=apiendpoint_843d3708-42a9-4240-8a68-2ced0372c20f">Ver API</Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
                La Mejor Experiencia
            </Typography>
        </ProductHeroLayout>
    );
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);