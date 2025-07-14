import React from 'react'
import styles from "./index.module.css";
import generalStyles from '../index.module.css';
import clsx from "clsx";

export const Confirmation = ({}) => {
    return (
        <div className={generalStyles.container}>
            <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>
                Confirma tu asistencia
            </div>
        </div>
    )
}
