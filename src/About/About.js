import React from 'react'
import AboutStyles from './About.module.css'

const about = () => {
    return (
        <div className={AboutStyles['section-content']}>

            <div className={AboutStyles.info}>
                <div className={AboutStyles.text}>
                    <p>
                        Enthusiastic Computer Engineering student at the University of Florida with interests in web technologies, 
                        mobile development, UI/UX design, machine learning and a passion for anything technology related. During my free time I 
                        like to read tech articles, watch tech videos on YouTube, play video games, or I often use those times to 
                        acquire more knowledge in hardware design and software development.
                    </p>
                </div>
                {/* <div className={AboutStyles['social-icons']}>
                    <img src="https://cdn4.iconfinder.com/data/icons/buildings-vol-2-1/256/82-512.png"/>
                    <img src="https://cdn4.iconfinder.com/data/icons/buildings-vol-2-1/256/82-512.png"/>
                    <img src="https://cdn4.iconfinder.com/data/icons/buildings-vol-2-1/256/82-512.png"/>              
                </div> */}
                <div className={AboutStyles.buttons}>
                    <button id={AboutStyles['resume-button']}>RESUME</button>
                    <button id={AboutStyles['contact-button']}>CONTACT</button>
                </div>
            </div>

            <div className={AboutStyles['main-image']}>
                <img src="img/portrait.jpg" alt="Alexander Portrait"/>
            </div>

        </div>
    )
}

export default about;
