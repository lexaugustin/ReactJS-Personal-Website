import React from 'react'
import LatestProjectsStyles from './LatestProjects.module.css'

const latestProjects = (props) => {
    return (
        <div className={LatestProjectsStyles['section-content']}>

            <div className={LatestProjectsStyles['main-image']}>
                <img src={props.image}/>
            </div>

            <div className={LatestProjectsStyles.info}>
                <div className={LatestProjectsStyles['project-name']}>
                    <p><i className={props.icon}></i>{props.name}</p>
                </div>

                <div className={LatestProjectsStyles['project-title']}>
                    <p>{props.title}</p>
                </div>

                <div className={LatestProjectsStyles.text}>
                    <p>{props.description}</p>
                </div>

                <div className={LatestProjectsStyles['see-more']}>
                    <hr id={LatestProjectsStyles['see-more-line']}></hr>
                    <p>See More <i className="far fa-arrow-alt-circle-right"></i></p>
                </div>

                {/* <div className={LatestProjectsStyles.buttons}>
                    <button id={LatestProjectsStyles['resume-button']}>RESUME</button>
                    <button id={LatestProjectsStyles['contact-button']}>CONTACT</button>
                </div> */}
            </div>

        </div>
    )
}

export default latestProjects;
