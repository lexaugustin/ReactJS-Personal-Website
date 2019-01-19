import React from 'react'
import SectionHeadStyles from './SectionHead.module.css'

const sectionHead = (props) => {
    return (
        // <div className={SectionHeadStyles['section-content']}>
            <div className={SectionHeadStyles['section-head']}>
                <img className={SectionHeadStyles['section-icon']} src={props.icon}/>
                <h2 className={SectionHeadStyles['section-title']}>{props.title}</h2>
                <p className={SectionHeadStyles['section-subtitle']}>{props.subtitle}</p>
            </div>
        // </div>
    )
}

export default sectionHead;
