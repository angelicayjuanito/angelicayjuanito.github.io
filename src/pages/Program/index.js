import React from 'react'
import styles from "./index.module.css";
import generalStyles from '../index.module.css';
import clsx from "clsx";
import programImage from '../../assets/program.png';

export const Program = () => {
    return (
        <div className={generalStyles.container}>
            <div className={styles.titleContainer}>
                <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>
                    PROGRAMACIÓN
                </div>
            </div>
            <div className={clsx(generalStyles.content)}>
                <img
                    src={programImage}
                    alt="Programación de la Boda"
                    className={styles.programImage}
                />
            </div>
        </div>
    )
}
