import React, {Fragment} from 'react';
import BlogSection from '../../components/BlogSection/BlogSection';
import About from '../../components/about/about';
import Footer from '../../components/footer/Footer';
import FunFact from '../../components/FunFact/FunFact';
import Hero3 from '../../components/hero3/hero3';
import Navbar4 from '../../components/Navbar4/Navbar4';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import abimg from '../../images/about/3.jpg'
import CtaSection from '../../components/ctaSection/ctaSection';
import Logo from '../../images/logo-2.png'


const HomePage4 =() => {
    return(
        <Fragment>
            <Navbar4 Logo={Logo}/>
            <Hero3/>
            <About abimg={abimg} abClass={'wpo-about-section-h4'}/>
            <ServiceSection/>
            <CtaSection/>
            <FunFact/>
            <TeamSection/>
            <ProjectSection/>
            <Testimonial/>
            <BlogSection/>
            <PartnerSection/>
            <ContactInfo/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage4;