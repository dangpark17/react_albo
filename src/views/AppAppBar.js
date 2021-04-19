import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { Link as LinkRouter } from 'react-router-dom';

const styles = (theme) => ({
    title: {
        fontSize: 24,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
    image: {
        width: 100,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});

function AppAppBar(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />
                    <Link variant="h6" underline="none" color="inherit" className={classes.title} href="/">
                        <img src="/image/logo_gicdt.png" className={classes.image} alt="logo_gicdt"/>
                    </Link>
                    <div className={classes.right}>
                        <LinkRouter to="/home/signin" color="inherit" variant="h6" underline="none" className={classes.rightLink}>{'Inicia sesión'}</LinkRouter>
                        <LinkRouter to="/home/signup" variant="h6" underline="none" className={clsx(classes.rightLink, classes.linkSecondary)}>{'Regístrate'}</LinkRouter>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);