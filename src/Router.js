import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Index from './index';
import Products from './Products';

function Notfound() {
    return <h1>404... This page is not found!</h1>
}

class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home">
                        <Index />
                    </Route>
                    <Route path="/products" component={Products} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
        );
    }
}


if (document.getElementById('root')) {
    ReactDOM.render(<Routers />, document.getElementById('root'));
}
