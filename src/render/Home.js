import React from 'react';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductHowItWorks from '../views/ProductHowItWorks';
import ProductCategories from '../views/ProductCategories';
import ProductCTA from '../views/ProductCTA';
import ProductSmokingHero from '../views/ProductSmokingHero';

export default function Home() {
    return(
        <React.Fragment>
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
        </React.Fragment>
    );
};