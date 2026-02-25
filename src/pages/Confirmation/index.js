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
                    <p className={styles.cardDescription}>
                        Para poder organizar mejor nuestra boda y asegurar que todo sea perfecto,
                        por favor confirma tu asistencia completando nuestro formulario.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/15QD1SEAjg8NkzCTIuTBPJ368Z0UU9XAgC7M51btNyqs/viewform"
                        className={styles.confirmButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Confirmar Asistencia
                    </a>
                    <p className={styles.footnote}>
                        El formulario se abrirá en una nueva ventana
                    </p>
                </div>
            </Card>
        </div>
    )
}
