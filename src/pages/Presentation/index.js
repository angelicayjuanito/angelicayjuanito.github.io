import React from 'react'
import styles from "./index.module.css";
import generalStyles from '../index.module.css';
import clsx from "clsx";

export const Presentation = () => {
    return (
        <div className={generalStyles.container}>
            <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>¡PRÓXIMAMENTE EN CINES!</div>
            <h3 className={generalStyles.subtitle}>19 de Septiembre de 2026</h3>
            <div className={clsx(generalStyles.content)}>
                <p className={clsx(generalStyles.text, generalStyles.textCenter, generalStyles.marginTop)}>Él nació en Sevilla. Feria, muchas
                    tonterías
                    y karategis.<br/><br/>
                    Ella vino desde Bogotá. Montaña, empanadas y una paciencia digna de
                    estudio.<br/><br/>
                    Dos ciudades, una diferencia horaria y muchas videollamadas
                    interrumpidas por
                    el Wi-Fi.<br/><br/>
                    Diez años de conversaciones absurdas, decisiones importantes,
                    y
                    negociaciones
                    diplomáticas sobre dónde
                    pasar
                    Navidad.<br/><br/>
                    Sobrevivieron a la distancia, a los aeropuertos, a los
                    trenes,
                    buses y a
                    explicar cien veces cómo se
                    conocieron.<br/><br/>
                    Y ahora, en Septiembre de 2026…<br/><br/>
                    Se casan. Voluntariamente. Sin coacción. Lo
                    juran.<br/><br/>
                    <p className={generalStyles.textItalic}>
                        "Una historia de compromiso, logística
                        internacional,
                        y
                        muchas
                        ganas de que
                        funcione"
                    </p>
                </p>
            </div>
        </div>
    )
}
