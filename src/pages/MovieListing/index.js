import React from 'react'
import styles from "./index.module.css";
import portrait from "../../assets/encinar.png";

export const MovieListing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    Encinar de Escardiel
                </h1>
                <h2 className={styles.hour}>Hora: 20.00</h2>
            </div>
            <div className={styles.imageContainer}>
                <img src={portrait} alt="Background" className={styles.backgroundImage}/>
            </div>
        </div>
    )
}
