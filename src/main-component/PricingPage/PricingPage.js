import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Pricing from '../../components/Pricing/Pricing'
import Logo from '../../images/logo.png'
import Footer2 from '../../components/footer2/Footer2';


const PricingPage =() => {
    return(
        <Fragment>
            <Navbar3 Logo={Logo}/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <Pricing/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PricingPage;
