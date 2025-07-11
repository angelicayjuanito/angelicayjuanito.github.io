import React from 'react'
import styles from './index.module.css'
import clsx from "clsx";

const Card = ({children, direction = 'column'}) => {
    return (
        <div className={clsx(styles.container, styles[direction])}>{children}</div>
    )
}

export default Card;
