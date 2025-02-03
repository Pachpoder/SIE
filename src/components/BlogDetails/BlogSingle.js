import React from 'react';
import blogs from '../../api/blogs';
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import { validateIdValores } from '../../utils/validateIdValores.js';

const BlogSingle = (props) => {

    const { id } = useParams()

    const BlogDetails = blogs.find(item => item.id === id)

    const textoParrafo = validateIdValores(id);

    

    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <p>{textoParrafo}</p>
                            </div>
                            <div className="comments-area">
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft}/>
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
