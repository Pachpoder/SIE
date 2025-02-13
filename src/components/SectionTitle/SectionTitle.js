import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="wpo-section-title">
                    <h2>{props.Title}</h2>
                    <span>{props.subTitle}</span>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;