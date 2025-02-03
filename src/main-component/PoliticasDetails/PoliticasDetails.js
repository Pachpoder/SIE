import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import Politicas from '../Politicas/Politicas';

const PoliticasDetails = () => {
    return (
        <Fragment>
            <Navbar3 />
            <PageTitle pageTitle="Políticas de Vestimenta" pagesub="Políticas" />
            <Politicas />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default PoliticasDetails;
