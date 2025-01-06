import React, {Fragment} from 'react';
import About from '../../components/about/about';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/ctaSection/ctaSection';
import Footer from '../../components/footer/Footer';
import FunFact from '../../components/FunFact/FunFact';
import Hero2 from '../../components/hero2/Hero2';
import Navbar2 from '../../components/Navbar2/Navbar2'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import abimg from '../../images/about.jpg'
import Logo from '../../images/logo.png'


const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar2 hclass={'wpo-header-style-1'} Logo={Logo}/>
            <Hero2/>
            <About abimg={abimg}/>
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
export default HomePage2;