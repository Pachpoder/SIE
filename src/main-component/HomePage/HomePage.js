import React, { Fragment } from 'react';
import About from '../../components/about/about';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/hero';
import Navbar from '../../components/Navbar/Navbar';
import Scrollbar from '../../components/scrollbar/scrollbar';
import TeamSection from '../../components/TeamSection/TeamSection';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import abimg from '../../images/about.jpg';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
            <section id="banner-section"><Hero /></section> {/* BANNER */}
            <section id="about-section"><About abimg={abimg} /></section> {/* HISTORIA */}
            <section id="values-section" style={{ paddingBottom: '200px', backgroundColor: '#000' }}><BlogSection /></section> {/* VALORES Y POLITICAS */}
            <section id="capsules-section"><ServiceSectionS2 /></section> {/* CAPSULAS */}
            <section id="brands-section"><TeamSection /></section> {/* MARCAS */}
            <section id="contact-section"><ContactInfo /></section> {/* CONTACTO */}
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default HomePage;
