import React from 'react'
import styles from "./index.module.css";
import generalStyles from '../index.module.css';
import clsx from "clsx";
import Review from "../../components/review";

export default function Notes() {
    return (
        <div className={(generalStyles.container)}>
            <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>
                Dress code
            </div>

            <p className={clsx(generalStyles.text, generalStyles.textCenter, generalStyles.marginTop, generalStyles.marginBottom)}>
                La película sigue a varios personajes que descubren que lo más importante no es lo que llevan puesto, 
                sino con quién lo comparten. Sin necesidad de trajes nuevos ni vestidos de gala, esta historia demuestra 
                que el cariño y la sencillez pueden ser el verdadero lujo.

                Si te faltan ideas aqui tienes algunas recomendaciones:
            </p>
            <div className={clsx(generalStyles.content, generalStyles.gap)}>
                <div className={styles.card}>
                    <div className={clsx(generalStyles.subtitle, styles.cardTitle)}></div>
                    <ul className={styles.cardList}>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Vestido sencillo</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Falda con blusa</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Vestido de cóctel</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Pantalón chino</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Pantalón de vestir</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Camisa o polo</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Traje</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Zapato de repuesto (Cómodo)</li>
                    </ul>
                </div>
            </div>
            <div className={clsx(generalStyles.content, generalStyles.gap, generalStyles.marginTop)}>
                <Review
                    message={"“Ropa cómoda, emociones grandes. Vestidos de Momentos nos recuerda que lo esencial nunca pasa de moda.”"}
                    source={"Festival de Cine del Buen Gusto"}
                />               
            </div>
        </div>
    )
}
