import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Navbar3 from '../../components/Navbar3/Navbar3';
import Footer2 from '../../components/footer2/Footer2';

const BlogDetailsLeftSiide =() => {

    const { id } = useParams()
    const BlogDetails = blogs.find(item => item.id === id)
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


