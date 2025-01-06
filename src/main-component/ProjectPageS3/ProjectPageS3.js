import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import Footer2 from '../../components/footer2/Footer2';


const ProjectPageS3 =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/> 
            <ProjectSection3 pClass={'border-bt'}/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPageS3;
