import React from 'react'
import styles from "./index.module.css";
import location from "../../assets/location.png"
import elefante from "../../assets/elefante.png"


export const Directions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>¿Cómo llegar?</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.carContainer}>
                    <h1 className={styles.subtitle}>
                        Coche
                    </h1>
                    <p>
                        Si vas a ir en tu propio coche, sigue las indicaciones del
                    </p>
                    <a href="https://maps.app.goo.gl/24zoxd1L3mFK7TgG7" target="_blank" rel="noopener noreferrer">
                        Encinar de escardiel
                    </a>
                    <div className={styles.imageContainer}>
                        <img src={location} className={styles.backgroundImage}/>
                    </div>
                </div>
                <div className={styles.busContainer}>
                    <h1 className={styles.subtitle}>
                        Bus
                    </h1>

                    <p>
                        Hora: 18.30<br/>
                        Lugar: <a href="https://maps.app.goo.gl/gkSuosqTXDgFVXK57" target="_blank"
                                  rel="noopener noreferrer">
                        Antiguo Elefante azul
                    </a>
                    </p>
                    <div className={styles.imageContainer}>
                        <img src={elefante} className={styles.backgroundImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
