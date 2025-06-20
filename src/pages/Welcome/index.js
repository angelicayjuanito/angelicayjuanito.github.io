import React from 'react'
import styles from './index.module.css';
import portrait from '../../assets/wall.jpg';
export const Welcome = () => {
    return (
        <div className={styles.container}>
            <img src={portrait} alt="Background" className={styles.backgroundImage}/>
            <div className={styles.content}>
                <h3 className={styles.subtitle}>Una historia escrita y dirigida por</h3>
                <h1 className={styles.title}>ANGÉLICA Y JUANITO</h1>
            </div>
        </div>
    )
}
