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
                <div className={AboutStyles['social-icons']}>
                    <a href="https://www.linkedin.com/in/alexander-augustin-39289b177/"><div className={AboutStyles.linkedin}><i class="fab fa-linkedin-in"></i></div></a>
                    <a href="https://github.com/lexaugustin"><div className={AboutStyles.github}><i class="fab fa-github"></i></div></a>
                    <a href="https://www.instagram.com/lexaugustin_/"><div className={AboutStyles.instagram}><i class="fab fa-instagram"></i></div></a>
                    <a href="https://twitter.com/lexaugustin"><div className={AboutStyles.twitter}><i class="fab fa-twitter"></i></div></a>
                </div>
                <div className={AboutStyles.buttons}>
                    <button id={AboutStyles['resume-button']}>RESUME</button>
                    <button id={AboutStyles['contact-button']}>CONTACT</button>
                </div>
            </div>

            <div className={AboutStyles['main-image']}>
                <img src="img/portrait.png" alt="Alexander Portrait"/>
            </div>

        </div>
    )
}

export default about;
