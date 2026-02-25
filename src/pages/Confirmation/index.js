import React from 'react'
import styles from "./index.module.css";
import generalStyles from '../index.module.css';
import clsx from "clsx";
import Card from '../../components/card';

export const Confirmation = ({}) => {
    return (
        <div className={generalStyles.container}>
            <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>
                Confirma tu asistencia
            </div>

            <Card direction="column">
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                        ¡Tu confirmación es importante para nosotros!
                    </h3>
                    <a
                        href="https://docs.google.com/forms/d/15QD1SEAjg8NkzCTIuTBPJ368Z0UU9XAgC7M51btNyqs/viewform"
                        className={styles.confirmButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Confirmar Asistencia
                    </a>
                    <p className={styles.footnote}>
                        Rogamos la no asistencia de niños al evento. Si tienes alguna situación especial 
                        ponte en contacto con nosotros
                    </p>
                </div>
            </Card>
        </div>
    )
}
