import React from 'react'

import SubsectionStyles from './Subsection.module.css'

const subsection = (props) => {
    return (
        <div id={SubsectionStyles['section-buttons']}>
            <button className={SubsectionStyles.active} id={SubsectionStyles.left} className={SubsectionStyles.active}>{props.left}</button>
            <button id={SubsectionStyles.right}>{props.right}</button> 
        </div>
    )
}

export default subsection;





