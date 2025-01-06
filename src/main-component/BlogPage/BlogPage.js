import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar3 from '../../components/Navbar3/Navbar3';
import Footer2 from '../../components/footer2/Footer2';
import Scrollbar from '../../components/scrollbar/scrollbar'

const BlogPage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;

