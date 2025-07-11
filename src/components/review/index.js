import React from 'react'
import generalStyles from '../../pages/index.module.css';
import styles from './index.module.css'
import clsx from "clsx";
const Review = ({message, source}) => {
    return (
        <div className={clsx(styles.cardContainer, styles.message)}>
            <p className={clsx(generalStyles.text)}>
                {message}
            </p>
            <p className={clsx(styles.source, generalStyles.textItalic)}>
                {source}
            </p>
        </div>
    )
}

export default Review;
