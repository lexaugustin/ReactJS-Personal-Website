import React from 'react';

import {Animated} from "react-animated-css";
// import {WOW} from "wowjs/dist/wow";

import BannerStyles from './Banner.module.css'

const banner = () =>{

    return (
        <div id={BannerStyles.banner}>
            <div className={BannerStyles['header-bg']}></div>
            <div id={BannerStyles['banner-content']}>
                <div id={BannerStyles['banner-picture']}>
                    <Animated class="wow" animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <img src="img/banner/banner-picture.png" alt=""/>
                    </Animated>
                </div>
                <div id={BannerStyles['right-side']}>
                    <p>Computer Engineering Student</p>
                    <p>with Interests in Web Development, Mobile Development, UI/UX Design and Machine Learning.</p>
                    {/* <p>with interest in</p> */}
                    {/* <p>iOS and Web Development</p> */}
                </div>
            </div>
        </div>
    )
}

export default banner;