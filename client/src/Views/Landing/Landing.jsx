import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './LandingPage.module.css';
import video from "../../assets/video.mp4";


export default function LandingPage() {
    return (
        <div className={style.landingContainer}>
            <video
                src={video}
                autoPlay
                loop
                muted
                className={style.video}
                type="video/mp4" 
            />
            <div className={style.landingContent}>
                <h1 className={style.landingTitle}>
                    Welcome to Countries Proyect!
                </h1>
                <NavLink to={"/home"} activeClassName={style.activeHome}>
                    <button className={style.landingButton}>Home!</button>
                </NavLink>
            </div>
        </div>
    );
}