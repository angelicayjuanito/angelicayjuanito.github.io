import React from 'react'
import styles from './index.module.css';
import generalStyles from '../index.module.css';
import clsx from "clsx";

export const Recommendations = () => {
    return (
        <div className={generalStyles.container}>
            <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>
                Recommendations
            </div>
        </div>
    )
}
