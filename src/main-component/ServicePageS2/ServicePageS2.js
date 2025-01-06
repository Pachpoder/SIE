import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import CtaSection from '../../components/ctaSection/ctaSection';
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer2 from '../../components/footer2/Footer2';

const ServicePageS2 =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <CtaSection/>
            <ServiceSection/>
            <Subscribe sbClass={'wpo-subscribe-section-s2'}/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePageS2;
