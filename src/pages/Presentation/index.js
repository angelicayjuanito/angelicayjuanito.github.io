import React from 'react'
import styles from "./index.module.css";

export const Presentation = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>¡PRÓXIMAMENTE EN CINES!</h1>
            <h3 className={styles.subtitle}>19 de Septiembre de 2026</h3>
            <div className={styles.content}>
                <p className={styles.text}>Él nació en Sevilla. Feria, muchas tonterías y karategis</p>
                <p className={styles.text}>Ella vino desde Bogotá. Montaña, empanadas y una paciencia digna de
                    estudio</p>
                <p className={styles.text}>Dos ciudades, una diferencia horaria y muchas videollamadas interrumpidas por
                    el Wi-Fi</p>
                <p className={styles.text}>Diez años de conversaciones absurdas, decisiones importantes, y negociaciones
                    diplomáticas sobre dónde
                    pasar
                    Navidad</p>
                <p className={styles.text}>Sobrevivieron a la distancia, a los aeropuertos, a los trenes, buses y a
                    explicar cien veces cómo se
                    conocieron</p>
                <p className={styles.text}>Y ahora, en Septiembre de 2026…</p>
                <p className={styles.text}>Se casan. Voluntariamente. Sin coacción. Lo juran.</p>
                <p className={styles.text}>"Una historia de compromiso, logística internacional, y muchas ganas de que
                    funcione"</p>
            </div>
        </div>
    )
}
