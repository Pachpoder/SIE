import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer2 from '../../components/footer2/Footer2';

const TestimonialPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Testimonials'} pagesub={'Testimonials'} />
            <Testimonial />
            <PartnerSection tNone={'partners-section-s2'}/>
            <Footer2/>
            <Scrollbar />
        </Fragment>
    )
};
export default TestimonialPage;
