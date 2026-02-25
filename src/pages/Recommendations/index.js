import React from 'react'
import styles from './index.module.css';
import generalStyles from '../index.module.css';
import clsx from "clsx";

export const Recommendations = () => {
    return (
        <div className={generalStyles.container}>
            <div className={styles.titleContainer}>
                <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>
                    Recomendaciones
                </div>
            </div>
            <div className={generalStyles.content}>
                <div className={styles.infoContainer}>
                    <h1 className={generalStyles.subtitle}>
                        Desayunos
                    </h1>
                    <ul className={clsx(generalStyles.text, styles.cardList)}>
                        <li className={styles.card}>
                            <div className={styles.cardTitle}><strong>Bar Alegria (Tradicional)</strong></div>
                            <a href="https://maps.app.goo.gl/iaETzMbr2pUx6wkk8"
                               target="_blank" rel="noopener noreferrer"
                               className={styles.cardAddress}
                            >
                         C. Juan de la Cueva, 41</a>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.cardTitle}><strong>Bar Macaco (Buenas tostadas)</strong></div>
                            <a href="https://maps.app.goo.gl/77Z5ZF1TgSbWkZ3GA"
                               target="_blank" rel="noopener noreferrer"
                               className={styles.cardAddress}
                            >
                        C. Jorge Manrique, 19</a>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.cardTitle}><strong>Bar Funes (Churritos)</strong></div>
                            <a href="https://maps.app.goo.gl/VVsexaP6DLey3Suz5"
                               target="_blank" rel="noopener noreferrer"
                               className={styles.cardAddress}
                            >
                        C. Madrid, 87</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={generalStyles.subtitle}>
                        Comida
                    </h1>

                    <ul className={clsx(generalStyles.text, styles.cardList)}>
                        <li className={styles.card}>
                            <div className={styles.cardTitle}><strong>La Pizarra (Brasa y Burgers)</strong></div>
                            <a href="https://maps.app.goo.gl/RjMcsnFu2ZWyLndq6"
                               target="_blank" rel="noopener noreferrer"
                               className={styles.cardAddress}
                            >
                         C. Alcalde Manuel Ardoy, 1</a>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.cardTitle}><strong>El Sitio (De todo)</strong></div>
                            <a href="https://maps.app.goo.gl/RHooHam9DL4bBkH87"
                               target="_blank" rel="noopener noreferrer"
                               className={styles.cardAddress}
                            >
                        C. Córdoba, 4</a>
                        </li>
                        <li className={styles.card}>
                            <div className={styles.cardTitle}><strong>Oído Cocina (Vasco-Andaluza)</strong></div>
                            <a href="https://maps.app.goo.gl/kxw9URNtgQJm8Y7Q8"
                               target="_blank" rel="noopener noreferrer"
                               className={styles.cardAddress}
                            >
                        C. Emilio Castelar, 30A</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
