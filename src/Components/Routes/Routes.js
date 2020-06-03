import React from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
import ProductPage from '../ProductsPage/ProductsPage';
import Home from '../HomePage/HomePage'
import {BrowserRouter as Router, Route} from "react-router-dom";
import ContactPage from '../ContactPage/ContactPage';

const routes = () => {
    return(
        <Router>
            <div>
                <Route exact path='/' component={Home}/>
                <Route exact path='/products' component={ProductPage}/>
                <Route exact path='/contact' component={ContactPage}/>
            </div>
        </Router>
    )
};

export default routes;