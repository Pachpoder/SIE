import React from 'react';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import HomePage7 from '../HomePage7/HomePage7';
import AboutPage from '../AboutPage/AboutPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import PricingPage from '../PricingPage/PricingPage';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import ServicePageS3 from '../ServicePageS3/ServicePageS3';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectPageS2 from '../ProjectPageS2/ProjectPageS2';
import ProjectPageS3 from '../ProjectPageS3/ProjectPageS3';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import TeamPage from '../TeamPage/TeamPage';
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';

      
const AllRoute = () => { 

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="home" element={<Homepage />} />
            <Route path="home2" element={<HomePage2 />} />
            <Route path="home3" element={<HomePage3 />} />
            <Route path="home4" element={<HomePage4 />} />
            <Route path="home5" element={<HomePage5 />} />
            <Route path="home6" element={<HomePage6 />} />
            <Route path="home7" element={<HomePage7 />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="service-s2" element={<ServicePageS2 />} />
            <Route path="service-s3" element={<ServicePageS3 />} />
            <Route path="service-single/:id" element={<ServiceSinglePage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="project-s2" element={<ProjectPageS2 />} />
            <Route path="project-s3" element={<ProjectPageS3 />} />
            <Route path="project-single/:id" element={<ProjectSinglePage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="team-single/:id" element={<TeamSinglePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path='product-single/:id' element={<ProductSinglePage/>} />
            <Route path='cart' element={<CartPage/>} />
            <Route path='checkout' element={<CheckoutPage/>} />
            <Route path='order_received' element={<OrderRecived/>} />
            <Route path='pricing' element={<PricingPage/>} />
            <Route path='blog-single/:id' element={<BlogDetails/>}/> 
            <Route path='blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide/>}/> 
            <Route path='blog-single-fullwidth/:id' element={<BlogDetailsFull/>}/> 
            <Route path='blog' element={<BlogPage/>}/> 
            <Route path='blog-left-sidebar' element={<BlogPageLeft/>}/>
            <Route path='blog-fullwidth' element={<BlogPageFullwidth/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='404' element={<ErrorPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<SignUpPage/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/> */}
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default AllRoute;
