import React from 'react'

import InterestsStyles from "./Interests.module.css"

const interests = (props) => {
    return (

        <div id={InterestsStyles.interests}>
            <div className={InterestsStyles['interests-icon']}><img src={props.img}/></div>

            <div className={InterestsStyles['interests-description']}>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <p id={InterestsStyles['interests-skills']}>{props.skills}</p>
            </div>

        </div>
    )
}

export default interests;
