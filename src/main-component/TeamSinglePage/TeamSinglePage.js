import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Subscribe from '../../components/Subscribe/Subscribe';
import { useParams } from 'react-router-dom'
import Footer2 from '../../components/footer2/Footer2';
import Team from '../../api/team';
import shape1 from '../../images/team/shape6.png'
import shape2 from '../../images/progress-shape-1.png'
import shape3 from '../../images/progress-shape-2.png'

const TeamSinglePage = (props) => {
    const { id } = useParams()

    const TeamDetails = Team.find(item => item.Id === id)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const textoParrafo = validateId(id);

    function validateId(id) {
        switch (parseInt(id, 10)) {
            case 1:
                return (
                    <>
                    <h3>Hola Como estas</h3>
                    </>
                );
            case 2:
                return (
                    <>
                    <p> </p>
                    </>
                );
            case 3:
                return (
                    <>
                    <p> </p>
                    </>
                );
            case 4:
                return (
                    <>
                    <p> </p>
                    </>
                );
            default:
                return (
                    <>
                        <h3>Error</h3>
                        <p>No se encontró información para el ID proporcionado. </p>
                    </>
                )
    }
}
    


    return (
        <Fragment>
            <Navbar3 />
            <PageTitle pageTitle={TeamDetails.name} pagesub={TeamDetails.title} />
            <div className="team-pg-area">
                <div className="team-inner section-padding">
                    <div className="container">
                        <div className="team-info-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="team-info-img">
                                        <img src={TeamDetails.tImg} alt=""/>
                                        <div className="shape"><img src={shape1} alt=""/></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="team-info-text">
                                        <h2>{TeamDetails.name}</h2>
                                        <span>{textoParrafo}</span>

                                        <p>Lorem Ipsum is simply dumm text of the printing has been the
                                            industy standard dummy text ever since unknown printer took
                                            the printing has been the industry.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                                            industry's standard dummy text ever since the 1500 when unknown printer took galley
                                            of type and scrambled it to make a type specimen book. It has survived not only five
                                            centuries, but also the leap into electronic typesetting.</p>
                                        <div className="wpo-skill-section">
                                            <div className="wpo-skill-progress">
                                                <div className="wpo-progress-single">
                                                    <h5 className="progress-title">Financial Investment</h5>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="90"
                                                            aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span className="progress-number">75%</span>
                                                </div>

                                                <div className="wpo-progress-single">
                                                    <h5 className="progress-title">Business Analysis</h5>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{width: '80%'}}aria-valuenow="75"
                                                            aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span className="progress-number">80%</span>
                                                </div>

                                                <div className="wpo-progress-single">
                                                    <h5 className="progress-title">Tax Management</h5>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="95"
                                                            aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span className="progress-number">85%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul>
                                            <li>Connect With:</li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-twitter-alt"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pr-shape-1"><img src={shape2} alt=""/></div>
                    <div className="pr-shape-2"><img src={shape3} alt=""/></div>
                </div>
                <div className="container">
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>Personal Experience</h2>
                                    <p>The purpose of lorem ipsum is to create a natural looking block oftext (sentence, paragraph, page, etc.) that doesn't distract from thelayout. A practice not without controversy, laying out pages withmeaningless filler text can be very useful when the focus is meantto be on design, not content.There are many variations of passages of Lorem Ipsum available.</p>
                                    <p>But the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text generators on the Internet tend to repeat.</p>
                                </div>
                                <div className="education-area ex-wiget">
                                    <h2>Education</h2>
                                    <ul>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                                        <li>If you are going to use a passage of Lorem Ipsum.</li>
                                        <li>Very popular during the Renaissance. </li>
                                        <li>Many desktop publishing packages and web page editors now.</li>
                                    </ul>
                                </div>
                                <div className="language-area ex-wiget">
                                    <h2>Language</h2>
                                    <ul>
                                        <li>French(fluent), English (fluent), Greek , chinese.</li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-area ex-wiget">
                                    <h2>Contact Me</h2>
                                    <div className="quote-form">
                                        <form onSubmit={SubmitHandler}>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Name:" name="name" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="email" className="form-control" placeholder="Email:" name="email" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Subject:" name="subject" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Your Address:" name="address" />
                                            </div>
                                            <div className="form-group full-col">
                                                <textarea className="form-control" name="note" placeholder="Description..."></textarea>
                                            </div>
                                            <div className="form-group full-col">
                                                <button className="btn theme-btn" type="submit">Get In Touch</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe sbClass={'wpo-subscribe-section-s2'}/>
            <Footer2/>
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
