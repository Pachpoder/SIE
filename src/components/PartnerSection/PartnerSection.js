import React from "react";
import pimg1 from '../../images/partners/img-1.png'
import pimg2 from '../../images/partners/img-2.png'
import pimg3 from '../../images/partners/img-3.png'
import pimg4 from '../../images/partners/img-4.png'
import pimg5 from '../../images/partners/img-5.png'
import pimg6 from '../../images/partners/img-6.png'
import pimg7 from '../../images/partners/img-7.png'
import pimg8 from '../../images/partners/img-8.png'
import SectionTitle from "../SectionTitle/SectionTitle";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
]


const PartnerSection = (props) => {
    return (
        <section className="partners-section section-padding pt-175">
            <div className="container">
                <SectionTitle subTitle={'HONORABLE CUSTOMER'} Title={'We are work with top brand'} />
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids clearfix">
                            {partners.map((partner, pitem) => (
                                <div className="grid" key={pitem}>
                                    <img src={partner.pImg} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
