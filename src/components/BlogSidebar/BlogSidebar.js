import React from 'react';
import { Link } from 'react-router-dom'
import Services from '../../api/service';
import Projects from '../../api/project';
import about from '../../images/blog/about-widget.jpg'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    {/* <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p> */}
                    <div className="social">
                        <ul className="clearfix">
                            <li>
                                <a href="https://www.facebook.com/mkfgt/?locale=es_LA" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>
                                    <i className="ti-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.maxicrez.com/" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>
                                    <i className="ti-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UC3YNfF1LZkQh9ehELZPu_HQ" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>
                                    <i className="ti-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>


                <div className="widget recent-post-widget">
                    <h3>Los Principios Que Nos Impulsan</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Consulting</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Planning</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Marketing</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Strategy</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Finance</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Solution</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Corporate</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Idea</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Market Reserch</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <div className="wpo-contact-widget-inner">
                        <h2><Link onClick={ClickHandler} to="/contact">Contact For Advertisment 270 x 310</Link></h2>
                    </div>
                </div> */}
            </div>
        </div>
    )

}

export default BlogSidebar;
