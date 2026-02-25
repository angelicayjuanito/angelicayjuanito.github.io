import React from 'react'
import {Welcome} from "../pages/Welcome";
import {Presentation} from "../pages/Presentation";
import {MovieListing} from "../pages/MovieListing";
import {Allocations} from "../pages/Allocations";
import {Directions} from "../pages/Directions";
import Notes from "../pages/Notes";
import {Recommendations} from "../pages/Recommendations";
import {Confirmation} from "../pages/Confirmation";
import styles from './index.module.css'

export const FullScreenPage = () => {
    return (
        <div className={styles.container}>
            <Welcome/>
            <Presentation/>
            <Directions/>
            <Allocations/>
            <Notes/>
            <Recommendations/>
            <Confirmation/>
        </div>
    )
}
