import React, {Fragment} from 'react';
import BlogSection from '../../components/BlogSection/BlogSection';
import About3 from '../../components/about3/about3';
import Footer from '../../components/footer/Footer';
import FunFact from '../../components/FunFact/FunFact';
import Hero6 from '../../components/hero6/Hero6';
import Navbar3 from '../../components/Navbar3/Navbar3';
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSectionS2 from '../../components/PartnerSection2/PartnerSectionS2';
import Skill2 from '../../components/Skill2/Skill2';
import Subscribe from '../../components/Subscribe/Subscribe';
import Logo from '../../images/logo.png'

const HomePage7 =() => {
    return(
        <Fragment>
            <Navbar3 Logo={Logo} topbarNone={'wpo-header-style-6'}/>
            <Hero6/>
            <About3/>
            <ServiceSectionS3/>
            <Skill2/>
            <TeamSection tClass={'wpo-team-section-s3'}/>
            <FunFact fClass={'wpo-fun-fact-section-s2 pt-120'}/>
            <ProjectSection3/>
            <Testimonial/>
            <Subscribe sbClass={'wpo-subscribe-section-s2 pt-0'}/>
            <BlogSection/>
            <PartnerSectionS2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage7;