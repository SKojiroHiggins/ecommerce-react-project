import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContactBody from '../ContactBody/ContactBody';

const contactPage = () => {
    return (
        <div>
            <Navbar page='contactPage'/>
            <ContactBody />
            <Footer />
        </div>
    )
};

export default contactPage;