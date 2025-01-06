import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Error from '../../components/404/404'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer2 from '../../components/footer2/Footer2';

const ErrorPage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;

