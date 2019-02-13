import React from 'react'

import SkillsStyles from './Skills.module.css'

const skills = (props) => {
    return (

        <div id={SkillsStyles.skills}>

            <h4>{props.title}</h4>
            <p>{props.children}</p>
            
        </div>
    )
}

export default skills; 