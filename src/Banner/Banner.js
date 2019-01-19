import React from 'react';

import BannerStyles from './Banner.module.css'

const banner = () =>{
    return (
        <header id={BannerStyles.banner}>
            <div className={BannerStyles['header-bg']}></div>
            <div id={BannerStyles['banner-content']}>
                <div id={BannerStyles['banner-picture']}><img src="img/banner/banner-picture.png" alt=""/></div>
                <div id={BannerStyles['right-side']}>
                    <p>Computer Engineering Student</p>
                    <p>with Interests in Web Development, Mobile Development UX Design and Machine Learning.</p>
                    {/* <p>with interest in</p> */}
                    {/* <p>iOS and Web Development</p> */}
                </div>
            </div>
        </header>
    )
}

export default banner;