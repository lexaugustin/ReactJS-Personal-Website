import React from 'react'

import MoreProjectCardStyles from './MoreProjectsCard.module.css'

const moreProjectsCard = () => {
    return (
        <div id={MoreProjectCardStyles.card}>

            <div className={MoreProjectCardStyles['top-content']}>
                <a href="https://imgur.com/5JeXjEu"><img src="https://i.imgur.com/5JeXjEu.png" title="source: imgur.com" /></a>
            </div> 

            <div className={MoreProjectCardStyles['bottom-content']}>
                <p id={MoreProjectCardStyles['project-name']}>Gaming Trivia</p>
                <p>
                    Enthusiastic Computer Engineering student at the University of Florida with interests in web technologies, 
                    mobile development, machine learning and a passion for anything.
                </p>
                <p id={MoreProjectCardStyles['see-more']}>See More<i class="fas fa-arrow-right"></i></p>
            </div> 

        </div>
    )
}

export default moreProjectsCard;