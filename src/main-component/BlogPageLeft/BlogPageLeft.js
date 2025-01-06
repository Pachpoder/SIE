import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.png'
import Navbar3 from '../../components/Navbar3/Navbar3';
import Footer2 from '../../components/footer2/Footer2';

const BlogPageLeft =() => {
    return(
        <Fragment>
            <Navbar3 Logo={Logo}/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageLeft;

