import React from 'react'
import styles from "./index.module.css";
import portrait from "../../assets/encinar.png";
import generalStyles from '../index.module.css';
import Card from "../../components/card";

export const MovieListing = () => {
    return (
        <div className={generalStyles.container}>
            <Card direction={'row'}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Encinar de Escardiel
                    </h1>
                    <h2 className={styles.hour}>Hora: 20.00</h2>
                </div>
                <div className={styles.imageContainer}>
                    <img src={portrait} alt="Background" className={styles.backgroundImage}/>
                </div>
            </Card>
        </div>
    )
}
