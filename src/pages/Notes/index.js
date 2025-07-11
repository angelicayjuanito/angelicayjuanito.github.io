import React from 'react'
import styles from "./index.module.css";
import generalStyles from '../index.module.css';

export default function Notes() {
    return (
        <div className={generalStyles.container}>
            <div className={generalStyles.title}>
                Notes
            </div>
        </div>
    )
}
