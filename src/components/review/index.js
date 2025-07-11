import React from 'react'
import generalStyles from '../../pages/index.module.css';
import styles from './index.module.css'
import clsx from "clsx";
const Review = ({message, source}) => {
    return (
        <div className={styles.cardContainer}>
            <p className={clsx(generalStyles.textItalic, styles.message)}>
                {message}
            </p>
            <p className={styles.source}>
                {source}
            </p>
        </div>
    )
}

export default Review;
