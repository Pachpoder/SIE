import React, {Fragment} from 'react';
import Features from '../../components/Features/Features';
import BlogSection from '../../components/BlogSection/BlogSection';
import About2 from '../../components/about2/about2';
import Footer from '../../components/footer/Footer';
import FunFact from '../../components/FunFact/FunFact';
import Hero5 from '../../components/hero5/Hero5';
import Navbar2 from '../../components/Navbar2/Navbar2'
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import PartnerSectionS2 from '../../components/PartnerSection2/PartnerSectionS2';
import Skill from '../../components/Skill/Skill';
import Subscribe from '../../components/Subscribe/Subscribe';
import Logo from '../../images/logo.png'

const HomePage6 =() => {
    return(
        <Fragment>
            <Navbar2 topbarNone={'wpo-header-style-5'} Logo={Logo}/>
            <Hero5/>
            <Features/>
            <ServiceSectionS2/>
            <About2/>
            <Skill/>
            <FunFact fClass={'wpo-fun-fact-section-s2'}/>
            <TeamSection tClass={'wpo-team-section-s2'}/>
            <Subscribe/>
            <ProjectSection2/>
            <Testimonial2/>
            <BlogSection/>
            <PartnerSectionS2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage6;