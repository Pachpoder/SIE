import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import Footer2 from '../../components/footer2/Footer2';


const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/> 
            <ProjectSection pClass={'border-bt'}/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
