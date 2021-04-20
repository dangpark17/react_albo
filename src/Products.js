import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch('api/products')
            .then(response => {
                return response.json();
            }).
            then(products => {
                this.setState({products})
            });
    }

    renderProducts() {
        return this.state.products.map(response => {
            return (
                <li key={response.id}>
                    {response.product}
                </li>
            )
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Produtcs</title>
                </Helmet>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <h3>All Products</h3>
                <ul>
                    {this.renderProducts()}
                </ul>
            </div>
        )
    }
}

export default Products;