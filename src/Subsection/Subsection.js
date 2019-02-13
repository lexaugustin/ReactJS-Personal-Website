import React from 'react'

import SubsectionStyles from './Subsection.module.css'

const subsection = (props) => {
    return (
        <div id={SubsectionStyles['section-buttons']}>
            <button id={SubsectionStyles.left}>{props.left}</button>
            <button id={SubsectionStyles.right}>{props.right}</button> 
        </div>
    )
}

export default subsection;





