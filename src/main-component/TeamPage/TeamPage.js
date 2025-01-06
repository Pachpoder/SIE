import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import TeamSection from '../../components/TeamSection/TeamSection';
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer2 from '../../components/footer2/Footer2';


const TeamPage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/> 
            <TeamSection tClass={'wpo-team-section-s3'}/>
            <Subscribe sbClass={'wpo-subscribe-section-s2'}/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TeamPage;
