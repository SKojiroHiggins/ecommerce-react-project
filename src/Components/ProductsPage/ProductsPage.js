import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ProductsBody from '../ProductsBody/ProductsBody';

const productsPage = () => {
    return (
        <div>
            <Navbar page="productsPage"/>
            <ProductsBody />
            <Footer />
        </div>
    )
};

export default productsPage;