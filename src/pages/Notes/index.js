import React from 'react'
import styles from "./index.module.css";
import generalStyles from '../index.module.css';
import clsx from "clsx";
import Review from "../../components/review";

export default function Notes() {
    return (
        <div className={(generalStyles.container)}>
            <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>
                Dress code (Etiqueta)
            </div>

            <p className={clsx(generalStyles.text, generalStyles.textCenter, generalStyles.marginTop, generalStyles.marginBottom)}>
                Entre armarios abiertos, presupuestos ajustados y miradas de alivio, la película sigue a varios
                personajes que descubren que lo más importante no es lo que llevan puesto, sino con quién lo
                comparten. Sin necesidad de trajes nuevos ni vestidos de gala, esta historia demuestra que el
                cariño y la sencillez pueden ser el verdadero lujo.
                Una comedia tierna y sincera sobre el valor de estar presente… sin vaciar la cartera.
            </p>
            <div className={clsx(generalStyles.content, generalStyles.gap)}>
                <div className={styles.card}>
                    <div className={clsx(generalStyles.subtitle, styles.cardTitle)}>Etiqueta para hombres</div>
                    <ul className={styles.cardList}>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Traje con camisa y corbata (opcional)</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Pantalón chino</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Pantalón de vestir</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Camisa o polo</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Blazer (opcional)</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <div className={clsx(generalStyles.subtitle, styles.cardTitle)}>Etiqueta para mujeres</div>
                    <ul className={styles.cardList}>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Vestido de cóctel</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Vestido sencillo</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Conjunto elegante</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Mono de vestir</li>
                        <li className={clsx(generalStyles.text, styles.cardListItem)}>Falda con blusa</li>
                    </ul>
                </div>
            </div>
            <div className={clsx(generalStyles.content, generalStyles.gap, generalStyles.marginTop)}>
                <Review
                    message={"“Tan elegante como honesta. Una celebración donde lo importante no está en la etiqueta, sino en el abrazo compartido.”"}
                    source={"La Crítica Invisible"}
                />
                <Review
                    message={"“Una carta de amor a la autenticidad, donde el estilo nace del corazón, no del bolsillo.”"}
                    source={"Cine consentido"}
                />
                <Review
                    message={"“Ropa cómoda, emociones grandes. Vestidos de Momentos nos recuerda que lo esencial nunca pasa de moda.”"}
                    source={"Festival de Cine del Buen Gusto"}
                />
            </div>
        </div>
    )
}
