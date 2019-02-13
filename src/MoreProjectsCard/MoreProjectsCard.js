import React from 'react'

import MoreProjectCardStyles from './MoreProjectsCard.module.css'

const moreProjectsCard = (props) => {
    return (
        <div id={MoreProjectCardStyles.card}>

            <div className={MoreProjectCardStyles['top-content']}>
                <a href=""><img src={props.img}/></a>
            </div> 

            <div className={MoreProjectCardStyles['bottom-content']}>
                <p id={MoreProjectCardStyles['project-name']}>{props.title}</p>
                <p>{props.description.substring(0, 180) + "..."}</p>
                <div id={MoreProjectCardStyles['see-more']}><i class="fas fa-plus"></i></div>
            </div> 

        </div>
    )
}

export default moreProjectsCard;