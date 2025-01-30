import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";
import bImg from '../../images/blog/shape.png'
import bImg2 from '../../images/blog/shape2.png'
import SectionTitle from "../SectionTitle/SectionTitle";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <div className="wpo-blog-area-s2 section-padding section-bg">
            <div className="container">
                <SectionTitle subTitle={'Nuestro Compromiso con la experencia e innovación'} Title={'Los Principios Que Nos Impulsan'} />
                <div className="wpo-blog-wrap">
                    <div className="row align-items-center">
                        {blogs.map((blog, bl) => (
                            <div className="col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            {/* <li><a href="blog-single.html">{blog.create_at}</a></li> */}
                                            {/* <li>{blog.author}</li> */}
                                        </ul>
                                        <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h2>
                                        <Link className="arrow-btn" onClick={ClickHandler} to={`/blog-single/${blog.id}`}><i
                                            className="fi flaticon-right-arrow-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="shape-1"><img src={bImg} alt=""/></div>
            <div className="shape-2"><img src={bImg2} alt=""/></div>
        </div>
    );
}

export default BlogSection;