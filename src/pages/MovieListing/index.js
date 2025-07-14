import React from 'react'
import styles from "./index.module.css";
import portrait from "../../assets/encinar.png";
import generalStyles from '../index.module.css';
import Card from "../../components/card";
import clsx from "clsx";

export const MovieListing = () => {
    return (
        <div className={generalStyles.container}>
            <Card direction={'row'}>
                <div className={styles.textContainer}>
                    <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>
                        Encinar de Escardiel
                    </div>
                    <h2 className={styles.hour}>Hora: 20.00</h2>
                </div>
                <div className={styles.imageContainer}>
                    <img src={portrait} alt="Background" className={styles.backgroundImage}/>
                </div>
            </Card>
        </div>
    )
}
