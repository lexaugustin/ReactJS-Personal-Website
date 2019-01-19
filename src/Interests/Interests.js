import React from 'react'

import InterestsStyles from "./Interests.module.css"

const interests = (props) => {
    return (

        <div id={InterestsStyles.interests}>
            <div><img src={props.img}/></div>

            <div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default interests;