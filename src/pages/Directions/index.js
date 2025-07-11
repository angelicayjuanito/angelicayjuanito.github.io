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
                <h1 className={generalStyles.title}>¿CÓMO LLEGAR?</h1>
            </div>
            <div>
                <p className={clsx(generalStyles.text, generalStyles.textCenter)}>
                    Dos caminos. Una sola boda.
                <br/>
                    En esta comedia romántica con tintes de road trip, los invitados deben tomar una decisión:
                </p>
                <br/>
                <p className={clsx(generalStyles.textItalic, generalStyles.textCenter)}>
                    ¿Serán protagonistas de su propio trayecto en coche, con libertad total y playlist
                    personalizada?
                </p>
                <br/>
                <p className={clsx(generalStyles.textItalic, generalStyles.textCenter)}>
                    ¿O preferirán unirse a la comitiva especial en autobús, donde nadie se pierde y todos llegan
                    juntos?
                </p>
            </div>
            <div className={generalStyles.content}>
                <div className={styles.infoContainer}>
                    <h1 className={generalStyles.subtitle}>
                        Modo conductor
                    </h1>
                    <ul className={generalStyles.text}>
                        <li>Libertad de horarios</li>
                        <li>Ideal si quieres quedarte por tu cuenta después</li>
                        <li>Parking disponible&nbsp;
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
                <div className={styles.infoContainer}>
                    <h1 className={generalStyles.subtitle}>
                        Modo colectivo
                    </h1>

                    <ul className={generalStyles.text}>
                        <li> Sin GPS y sin perderte</li>

                        <li> Salida desde <a href="https://maps.app.goo.gl/gkSuosqTXDgFVXK57" target="_blank"
                                             rel="noopener noreferrer">
                            Paseo de la Unión
                        </a> a las 18.30

                            Regreso al final de la fiesta (para los que bailan hasta el último acorde)

                        </li>
                    </ul>
                    <div className={styles.imageContainer}>
                        <img src={elefante} className={styles.backgroundImage}/>
                    </div>
                </div>
            </div>

            <div className={clsx(generalStyles.content, styles.gap)}>
                <Review
                    message={"”Una elección sencilla con final feliz garantizado.”"}
                    source={"Rutas y Romance Magazine"}
                />
                <Review
                    message={"“Una producción bien organizada: horarios claros, llegada segura y aplausos incluidos.”"}
                    source={"Cinemanía Nupcial"}
                />
                <Review
                    message={"“Yo tomé el bus. Mi peinado sobrevivió. Mi paz mental también.”"}
                    source={"Invitada feliz"}
                />
            </div>
        </div>
    )
}
