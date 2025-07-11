import React from 'react'
import styles from "./index.module.css";
import location from "../../assets/location.png"
import elefante from "../../assets/elefante.png"
import Review from "../../components/review";
import generalStyles from '../index.module.css';
import clsx from "clsx";


export const Directions = () => {
    return (
        <div className={generalStyles.container}>
            <div className={styles.titleContainer}>
                <h1 className={generalStyles.title}>¿Cómo llegar?</h1>
            </div>
            <div>
                <p className={generalStyles.text}>
                    Dos caminos. Una sola boda.
                    En esta comedia romántica con tintes de road trip, los invitados deben tomar una decisión:
                </p>
                <p className={clsx(generalStyles.textItalic, generalStyles.textCenter)}>
                    ¿serán protagonistas de su propio trayecto en coche, con libertad total y playlist
                    personalizada?
                </p>
                <p className={clsx(generalStyles.textItalic, generalStyles.textCenter)}>
                    ¿O preferirán unirse a la comitiva especial en autobús, donde nadie se pierde y todos llegan
                    juntos?
                </p>
            </div>
            <div className={generalStyles.content}>
                <div className={styles.carContainer}>
                    <h1 className={generalStyles.subtitle}>
                        Modo conductor (tu coche)
                    </h1>
                    <ul>
                        <li>Libertad de horarios</li>
                        <li>Ideal si quieres quedarte por tu cuenta después</li>
                        <li>Parking disponible cerca del lugar
                            <a href="https://maps.app.goo.gl/24zoxd1L3mFK7TgG7"
                               target="_blank" rel="noopener noreferrer"
                            >
                                Encinar de escardiel
                            </a>
                        </li>
                    </ul>

                    <div className={styles.imageContainer}>
                        <img src={location} className={styles.backgroundImage}/>
                    </div>
                </div>
                <div className={styles.busContainer}>
                    <h1 className={generalStyles.subtitle}>
                        Modo colectivo (autobús)
                    </h1>

                    <ul>
                        <li> Sin estrés, sin GPS, sin perderte</li>

                        <li> Salida desde <a href="https://maps.app.goo.gl/gkSuosqTXDgFVXK57" target="_blank"
                                             rel="noopener noreferrer">
                            Antiguo Elefante azul
                        </a> a las 18.30

                            Regreso al final de la fiesta (para los que bailan hasta el último acorde)

                        </li>
                    </ul>
                    <div className={styles.imageContainer}>
                        <img src={elefante} className={styles.backgroundImage}/>
                    </div>
                </div>
            </div>

            <h1> 🍿 Críticas </h1>
            <div className={clsx(generalStyles.content, styles.gap)}>
                <Review
                    message={"”Una elección sencilla con final feliz garantizado.”"}
                    source={"— Rutas y Romance Magazine"}
                />
                <Review
                    message={"“Una producción bien organizada: horarios claros, llegada segura y aplausos incluidos.”"}
                    source={"— Cinemanía Nupcial"}
                />
                <Review
                    message={"“Yo tomé el bus. Mi peinado sobrevivió. Mi paz mental también.”"}
                    source={" — Invitada feliz, 5 estrellas"}
                />
            </div>
        </div>
    )
}
