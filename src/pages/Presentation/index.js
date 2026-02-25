import React from 'react'
import styles from "./index.module.css";
import generalStyles from '../index.module.css';
import clsx from "clsx";

export const Presentation = () => {
    return (
        <div className={generalStyles.container}>
            <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>¡PRÓXIMAMENTE EN CINES!</div>
            <h3 className={generalStyles.subtitle}>19 de Septiembre de 2026</h3>
            <h3 className={generalStyles.subtitle}>19:00h</h3>
            <div className={clsx(generalStyles.content)}>
                <p className={clsx(generalStyles.text, generalStyles.textCenter, generalStyles.marginTop)}>
                    <p className={generalStyles.textItalic}>
                        "Una historia de compromiso, logística
                        internacional,
                        y
                        muchas
                        ganas de que
                        funcione"
                    </p><br/>
                    Diez años de conversaciones absurdas, decisiones importantes,
                    y
                    negociaciones
                    diplomáticas sobre dónde
                    pasar
                    Navidad.<br/><br/>
                    Sobrevivieron a la distancia, a los aeropuertos, a los
                    trenes y a
                    explicar cien veces cómo se
                    conocieron.<br/><br/>
                    Y ahora, en Septiembre de 2026…<br/><br/>
                    Se casan. Voluntariamente. Sin coacción.<br/><br/>
                </p>
            </div>
        </div>
    )
}
